import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import WelcomeTemplate from '../../../emails/WelcomeTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.emails.send({
    from: '',
    to: 'celobento26@gmail.com',
    subject: '',
    react: <WelcomeTemplate name="Bento" />,
  });

  return NextResponse.json({});
}
