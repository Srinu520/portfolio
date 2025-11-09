# Portfolio Front-End

Next.js + TypeScript application that powers Srinu's portfolio site and ships with a serverless `/api/contact` endpoint backed by Nodemailer. The intent is to deploy everything to Vercel so the UI and API live in a single project.

## Local development

```bash
cd portfolio-site
npm install
npm run dev
```

By default the contact form posts to `/api/contact`. Override `NEXT_PUBLIC_CONTACT_API_URL` if you want to point at a different environment.

## Environment variables

Copy `.env.example` to `.env` (or `.env.local`) and fill out the SMTP credentials that Vercel/Next will use at runtime.

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_CONTACT_API_URL` | Client-side endpoint for the contact form | `/api/contact` |
| `SMTP_HOST` | SMTP host for Nodemailer | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `465` |
| `SMTP_SECURE` | Whether the SMTP connection should use TLS | `true` |
| `SMTP_USER` / `SMTP_PASS` | Credentials for the SMTP account | — |
| `FROM_EMAIL` | Address that appears in the `from` header (falls back to `SMTP_USER`) | — |
| `CONTACT_TARGET_EMAIL` | Destination inbox for incoming enquiries (defaults to `FROM_EMAIL`) | — |
| `ACK_SUBJECT` / `ACK_MESSAGE` | Custom confirmation email copy | Friendly defaults |

Restart `npm run dev` after editing env files so Next.js picks up the changes.

## Production build

```bash
npm run build
npm run start          # serves the built app
```

The build artifacts live in `.next/` and are ready for Vercel’s serverless runtime.

## Deploying to Vercel

The repository already contains `.github/workflows/deploy.yml`, which installs dependencies, runs `npm run build`, and uses the Vercel CLI to deploy a production build. Add the following repository secrets before enabling it:

- `VERCEL_TOKEN` – personal token generated from https://vercel.com/account/tokens
- `VERCEL_ORG_ID` – your Vercel org or personal account ID
- `VERCEL_PROJECT_ID` – the project ID inside Vercel

Alternatively you can rely on Vercel’s GitHub integration: import the repo, set the same environment variables inside the Vercel dashboard, and Vercel will build on every push to `main`.

## Linting

```bash
npm run lint
```

## Folder structure

- `src/app` – App Router entry point, layout, page, and API routes
- `src/components` – UI sections with CSS modules
- `src/context` – Theme provider + hook
- `src/services` – Browser utilities (contact form submission)
- `src/data` & `src/types` – Portfolio content and TypeScript interfaces
- `public` – Static assets copied as-is by Next.js
