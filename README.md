# AysArt | Link in Bio

This project is a modern link-in-bio website for me, built with Next.js, React, TypeScript, Tailwind CSS, shadcn-style UI primitives, lucide-react icon, next-themes for light/dark mode support, presenting a polished profile and social links. It serves as a single landing page that gathers AysArt's primary online destinations.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the app at:

http://localhost:3000

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

```text
linkinbio/
├── app/
│   ├── data/
│   │   └── links.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── mode-toggle.tsx
│   ├── theme-provider.tsx
│   └── ui/
├── lib/
├── public/
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

