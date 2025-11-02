import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : true,
  }),
);

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const ACK_SUBJECT = process.env.ACK_SUBJECT || 'Thanks for reaching out!';
const ACK_MESSAGE =
  process.env.ACK_MESSAGE ||
  `Hi {{name}},

Thanks for getting in touch. I've received your message and will follow up within 24 hours.

Best,
Srinu`;

const REQUIRED_ENV = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  console.warn(`Missing SMTP configuration values: ${missingEnv.join(', ')}`);
}

app.get('/health', (_, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please complete all required fields before submitting.' });
  }

  try {
    const fromAddress = process.env.FROM_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${fromAddress}>`,
      to: email,
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

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending contact email', error);
    return res.status(500).json({
      message:
        'Unable to deliver your message right now. Please try again later or reach out directly at srinuduggempudi26@gmail.com.',
    });
  }
});

app.listen(port, () => {
  console.log(`Contact server listening on port ${port}`);
});
