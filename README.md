# Pax Web Dev Portfolio

Custom portfolio / consultancy site built with **Next.js 14 (App Router)** + **Sanity CMS**, deployed on **Vercel**.

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Sanity

1. Create a project at [sanity.io](https://sanity.io) (free tier is plenty)
2. Note your **Project ID** from the dashboard
3. Copy `.env.local.example` → `.env.local` and fill in your project ID:

```bash
cp .env.local.example .env.local
```

### 3. Run locally

```bash
npm run dev
```

- **Site**: http://localhost:3000
- **Sanity Studio**: http://localhost:3000/studio

### 4. Populate content

In the Studio at `/studio`, create:
- **Projects** — add SMG CPA, Andrea Callard, Whale Creek, House of the Redeemer
- Set `Featured on Homepage: true` for each
- Add cover images, descriptions, live URLs

---

## Project Structure

```
├── app/
│   ├── page.tsx              ← Home page (fetches from Sanity)
│   ├── studio/[[...tool]]/   ← Embedded Sanity Studio
│   ├── api/contact/route.ts  ← Contact form API
│   └── globals.css           ← Design system variables & base styles
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Work.tsx              ← Portfolio grid (falls back to static if Sanity empty)
│   ├── Services.tsx          ← All four service areas
│   ├── Pricing.tsx           ← Three-tier pricing
│   ├── Contact.tsx           ← Contact form
│   └── Footer.tsx
├── sanity/
│   ├── schemaTypes/          ← Content models (project, testimonial)
│   └── lib/
│       ├── client.ts         ← Sanity client config
│       └── queries.ts        ← GROQ queries
├── lib/types.ts              ← Shared TypeScript types
└── sanity.config.ts          ← Studio config
```

---

## Contact Form

The contact form endpoint is at `app/api/contact/route.ts`. Currently it logs submissions to the console. To wire up actual email delivery:

**Option A — Resend (recommended)**
```bash
npm install resend
```
Uncomment the Resend block in `route.ts` and add `RESEND_API_KEY` to `.env.local`.

**Option B — Gmail / SMTP**
```bash
npm install nodemailer @types/nodemailer
```
Use `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` from `.env.local.example`.

---

## Deployment

```bash
# Deploy to Vercel
npx vercel

# Or connect the GitHub repo in the Vercel dashboard
# Environment variables to add in Vercel:
#   NEXT_PUBLIC_SANITY_PROJECT_ID
#   NEXT_PUBLIC_SANITY_DATASET
#   RESEND_API_KEY (when ready)
```

After deploying, go to your Sanity project → Settings → API → CORS and add your Vercel URL.

---

## Design System

| Token | Value |
|---|---|
| `--black` | `#0a0a0a` |
| `--white` | `#f8f7f4` |
| `--accent` | `#c8f035` (electric lime) |
| `--font-display` | Syne (800 weight) |
| `--font-mono` | IBM Plex Mono |

All section spacing, container width, and font scales are controlled via CSS custom properties in `globals.css`.
