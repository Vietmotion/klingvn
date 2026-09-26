# Kling AI Vietnam Starter Website

Minimal, production-ready starter website for Kling AI Vietnam.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Run locally

```bash
npm install
npm run dev
```

## Contact form email

The contact form sends messages through SMTP and requires one of these setups:

- `SMTP_URL`
- or `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`

Fastest method for production testing: Gmail SMTP.

Example values:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_FROM=yourgmail@gmail.com
SMTP_TO=kimmy@mightystone.vn,hello@mightystone.vn
```

Set `SMTP_FROM` if you want a dedicated sender address. You can override the default recipients with `SMTP_TO` (comma-separated). The form forwards submissions to `kimmy@mightystone.vn` and `hello@mightystone.vn` by default.

## Build

```bash
npm run build
npm run start
```

## Notes

- This project intentionally keeps content and structure lean for rapid iteration.
- Home page content is in `app/page.tsx`.
- Reusable UI components are in `components/` and `components/ui/`.
- Pricing calculator can later be added to the API & Pricing section in `app/page.tsx` and expanded in `app/pricing/page.tsx`.
