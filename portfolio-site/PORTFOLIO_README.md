# Srinu Duggempudi – Portfolio Website

A modern, responsive portfolio crafted with **Next.js 15**, **React 19**, and **TypeScript**. The site renders high-polish UI sections (Hero, About, Projects, Skills, Contact, Footer) and ships with a serverless **`/api/contact`** route powered by Nodemailer so everything deploys cleanly to Vercel.

## ✨ Features

- 🌗 Dark/light mode toggle with localStorage persistence
- 🎬 Motion-rich layout (fade, scale, slide animations)
- 📱 Responsive design across desktop, tablet, and mobile
- 🧩 Detailed project cards with expandable highlights
- 🧠 Skill constellation with hover interactions
- 📨 Built-in contact API + acknowledgement email
- ⚙️ Type-safe codebase with shared data + interfaces
- 🚀 Vercel-ready workflow plus GitHub Action for CI/CD

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Nodemailer-powered API route
│   ├── layout.tsx             # Global layout + ThemeProvider
│   └── page.tsx               # Main page shell
├── components/                # Feature sections + CSS modules
├── context/ThemeContext.tsx   # Theme toggle logic
├── data/portfolio.ts          # Projects, skills, experience
├── services/contact.ts        # Client helper for form submissions
└── types/                     # TypeScript interfaces
```

## 🧪 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Next.js dev server (UI + API) |
| `npm run lint` | Run ESLint (Next core-web-vitals config) |
| `npm run build` | Production build for Vercel |
| `npm run start` | Serve the built app locally |

## 🔐 Environment Variables

Copy `.env.example` → `.env.local` and configure:

- `NEXT_PUBLIC_CONTACT_API_URL` (default `/api/contact`)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`
- `SMTP_USER`, `SMTP_PASS`
- `FROM_EMAIL` (optional override)
- `CONTACT_TARGET_EMAIL` (where incoming enquiries land)
- `ACK_SUBJECT`, `ACK_MESSAGE`

## 🚀 Deployment

1. Set the SMTP + public env vars in Vercel.
2. Link the repo to Vercel or use the provided GitHub Action (requires `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` secrets).
3. Push to `main` – CI builds and deploys automatically.

---

Need edits? Update the data in `src/data/portfolio.ts`, tweak styling in the CSS modules, or extend the API route for new workflows. Enjoy! 💙
