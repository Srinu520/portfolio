# Portfolio Website - Quick Setup Guide

## ✅ Status: COMPLETE & RUNNING

Your modern **Next.js** portfolio (UI + email API) is ready!

### 🔗 Access Your Portfolio

**Development URL:** http://localhost:3000

Run `npm run dev` inside `portfolio-site/` and Next.js will spin up hot reload plus the `/api/contact` route locally.

---

## ✨ What's Included

- 🎨 Professional blue theme with light/dark modes
- 🌙 Theme toggle persisted with `localStorage`
- 🎬 Smooth animations (fade, slide, scale)
- 📱 Fully responsive layout
- 🧩 Interactive project gallery
- 🧠 Skills visualized by category
- 🏢 Experience timeline
- 📬 Contact form powered by an API route + Nodemailer
- 📌 Sticky navigation + smooth scrolling
- 🦶 Crafted footer

### 🗂️ Project Structure
```
portfolio-site/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   # Serverless contact endpoint
│   │   ├── layout.tsx             # Root layout + ThemeProvider
│   │   └── page.tsx               # Page assembling all sections
│   ├── components/                # React components with CSS modules
│   ├── context/                   # Theme provider / hook
│   ├── data/                      # Projects, skills, experience
│   ├── services/                  # Contact form helper
│   └── types/                     # TypeScript interfaces
├── next.config.mjs
├── package.json
└── README.md
```

---

## 📦 Current Content

- **Projects:** Astro Indu, Solar Engineering Platform, Insurance Aggregator
- **Skills:** Frontend, Backend, Databases, Tools & DevOps, Testing, APIs & Services
- **Contact:** Email + phone + location blocks ready to customize

---

## 🛠️ How to Customize

| Update | File |
| --- | --- |
| Projects, skills, experience | `src/data/portfolio.ts` |
| Global colors/variables | `src/app/globals.css` |
| Hero content | `src/components/Hero.tsx` |
| Contact details | `src/components/Hero.tsx`, `src/components/Contact.tsx` |

Tips:
- Swap color tokens (`--color-primary`, etc.) for instant theming
- Replace emoji placeholders (??) with icons or SVGs as needed

---

## 🚀 Build & Deploy

### Build for production
```bash
cd portfolio-site
npm run build
```
Outputs optimized assets into `.next/`. Serve locally via `npm run start`.

### Deploy to Vercel (recommended)
1. Install the CLI: `npm install -g vercel`
2. From `portfolio-site/`, run `vercel link` once, then `vercel env pull`.
3. Deploy: `vercel --prod`

Or let the included GitHub Action (`.github/workflows/deploy.yml`) deploy using the Vercel CLI. Provide the secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### Other hosts?

Next.js can also deploy to platforms such as Netlify or AWS Amplify using their Next adapters. Just be sure your SMTP env variables are configured there.

---

## 🧪 Testing checklist

- ✅ Desktop / Tablet / Mobile viewports (DevTools device emulation)
- ✅ Theme toggle works and persists across reloads
- ✅ Contact form validates required fields
- ✅ `/api/contact` logs success/failure in the terminal (fill `.env` first)

---

## 📋 Next Steps

### Content
1. Update all project descriptions + metrics
2. Add/remove skills to match your stack
3. Adjust hero + CTA copy to match your tone

### Contact / API
1. Create `.env` from `.env.example`
2. Fill SMTP credentials (App Password for Gmail is recommended)
3. Test the form locally – watch the terminal for confirmation

### Deployment
1. Configure Vercel project + env vars
2. Push to `main` (workflow will build + deploy)
3. Attach a custom domain inside Vercel (optional)

---

## 💡 Tips

- **Theme toggle:** top-right button switches light/dark
- **Smooth scroll:** header links jump to matching sections
- **Animations:** check `.module.css` files for timing tweaks
- **Emails:** the API route sends one email to you (`CONTACT_TARGET_EMAIL`) and a confirmation to the sender

---

## 📚 Helpful Links

- Next.js Docs: https://nextjs.org/docs
- Nodemailer Docs: https://nodemailer.com/about/
- Vercel CLI: https://vercel.com/docs/cli
- TypeScript: https://www.typescriptlang.org/docs/

---

## 🎉 You're All Set!

Visit http://localhost:3000, make it yours, then ship it to Vercel whenever you're ready.

Good luck! 🚀
