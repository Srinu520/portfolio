# Portfolio Front-End

React + TypeScript application bootstrapped with Vite. The app powers the public portfolio while delegating contact form delivery to the standalone Nodemailer API located in `server/`.

## Local development

```bash
cd portfolio-site
npm install
npm run dev
```

The contact form posts to the URL defined in `VITE_CONTACT_API_URL`. During local development it defaults to `http://localhost:5000/api/contact`, so start the mailer API as well:

```bash
cd server
npm install
npm run dev
```

## Environment variables

| Variable | Purpose | Default |
| --- | --- | --- |
| `VITE_CONTACT_API_URL` | Fully-qualified URL for the mailer API. | `http://localhost:5000/api/contact` |

Create a `.env` file (copy from `.env.example`) to override values. Remember to restart `npm run dev` whenever you change `.env`.

## Production build

```bash
cd portfolio-site
npm run build
```

Static assets are emitted to `dist/`. Serve them with any static host. Ensure `VITE_CONTACT_API_URL` points at a publicly reachable instance of the Nodemailer service (GitHub Pages cannot host server-side code).

## Deploying to GitHub Pages

This repository ships with a workflow at `.github/workflows/deploy.yml` that builds the front-end and publishes it to GitHub Pages.

1. Set the repository secret `VITE_CONTACT_API_URL` to the production API endpoint (e.g. `https://your-mailer-host/api/contact`).
2. Commit and push to the `main` branch. The workflow:
   - installs dependencies from `portfolio-site/package-lock.json`
   - runs `npm run build`
   - uploads `dist/` to the GitHub Pages artifact
3. After the first successful run, enable GitHub Pages for the repository (Settings → Pages) and select **GitHub Actions** as the source.

### Base path handling

The Vite `base` option is controlled by the `BASE_PATH` environment variable. Locally it defaults to `/`. The GitHub Pages workflow sets it to:

- `/` for repositories named `username.github.io`
- `/<repository-name>/` for any other repository

If you deploy manually, ensure you export `BASE_PATH` before running `npm run build`.

## Linting

```bash
npm run lint
```

## Folder structure

- `src/` – application code
- `public/` – static assets copied as-is
- `dist/` – generated at build time
