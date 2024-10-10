
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from '../../../prisma/client';


const schema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
})

export async function POST(request: NextRequest) {
    const body = await request.json()

    const validation = schema.safeParse(body)

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status : 400})

    const user = await prisma.user.findUnique({where: {email: body.email}})

    if(user)
        return NextResponse.json({error: 'User already exist'}, {status: 400})

    const hashPass = await bcrypt.hash(body.password, 10)

    const newUser = await prisma.user.create({
      data: {
        name: 'demo',
        email: body.email,
        password: hashPass
      }
    })
    return NextResponse.json({email: newUser.email})
}