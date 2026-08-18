# Madhwaraj Kulkarni — Portfolio

Personal site for a Business Analyst transitioning into product management. Built with Next.js, TypeScript, and Tailwind CSS.

Work on this site is drawn from Madhwaraj’s resume, Notion profile, and process case-study library (chatbot specs, BRDs, as-is workflows, and automation studies).

## Run locally

```bash
npm install
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000).

On Windows PowerShell, use `npm.cmd` if `npm` is blocked by the execution policy. Local `dev` uses Webpack because Turbopack on Windows can 404 `/` after a stale `.next` cache. `npm.cmd run dev:turbo` still uses Turbopack if you want it.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4

Resume download lives in `public/Resume/Madhwaraj_Kulkarni_Resume.docx`. Case-study copy lives in `src/data`.
