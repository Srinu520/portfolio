import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const ACK_SUBJECT = process.env.ACK_SUBJECT ?? 'Thanks for reaching out!';
const ACK_MESSAGE =
  process.env.ACK_MESSAGE ??
  `Hi {{name}},

Thanks for getting in touch. I've received your message and will follow up within 24 hours.

Best,
Srinu`;

const REQUIRED_ENV = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'] as const;
const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  console.warn(`[contact-api] Missing SMTP configuration values: ${missingEnv.join(', ')}`);
}

export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(request: NextRequest) {
  let body: Awaited<ReturnType<NextRequest['json']>>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON payload.' }, { status: 400 });
  }

  const { name, email, subject, message } = body ?? {};

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { message: 'Please complete all required fields before submitting.' },
      { status: 400 },
    );
  }

  const fromAddress = process.env.FROM_EMAIL ?? process.env.SMTP_USER ?? '';
  const targetEmail = process.env.CONTACT_TARGET_EMAIL ?? fromAddress;

  if (!fromAddress) {
    return NextResponse.json(
      { message: 'Email service is not configured correctly. Please try again later.' },
      { status: 500 },
    );
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${fromAddress}>`,
      to: targetEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New portfolio message from ${name} <${email}>.

Subject: ${subject}

${message}`,
      html: `<h2>New Portfolio Message</h2>
<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong></p>
<p style="white-space: pre-line;">${message}</p>`,
    });

    const acknowledgement = ACK_MESSAGE.replace('{{name}}', name);

    await transporter.sendMail({
      from: `"Srinu Duggempudi" <${fromAddress}>`,
      to: email,
      subject: ACK_SUBJECT,
      text: acknowledgement,
    });

    return NextResponse.json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('[contact-api] Error sending contact email', error);
    return NextResponse.json(
      {
        message:
          'Unable to deliver your message right now. Please try again later or reach out directly at srinuduggempudi26@gmail.com.',
      },
      { status: 500 },
    );
  }
}
