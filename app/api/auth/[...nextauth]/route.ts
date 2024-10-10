import { PrismaAdapter } from "@auth/prisma-adapter";

import bcrypt from 'bcrypt';
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../../prisma/client";


export const authOptions: NextAuthOptions ={
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: 'Email', type: 'email', placeholder: 'Email'},
                password: {label: 'Password', type: 'password', placeholder: 'Password'}
            },
            async authorize(credentials, req) {
               if(!credentials?.email || !credentials.password) return null
               const userResp = await prisma.user.findUnique({where: {email: credentials.email}})
               if (!userResp) return null
               const passwordMatch = await bcrypt.compare(credentials.password, userResp.password)
               return passwordMatch ? userResp : null
            }
        })
      ],
      session: {
        strategy: 'jwt'
      }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };

