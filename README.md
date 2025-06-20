# Social Media Manager MVP

This project is an MVP SaaS service that helps you plan, create and schedule social media posts.

## Tech Stack

- **Next.js 15** (App Router & TypeScript)
- **Supabase** for authentication and Postgres database
- **Prisma ORM**
- **Tailwind CSS** with shadcn/ui components
- **OpenAI API** for text and image generation

## Getting Started

1. Copy `.env.example` to `.env` and fill in your Supabase credentials and database connection string.
2. Install dependencies (required for components like `react-calendar`):
   ```bash
   npm install
   ```
3. Generate the Prisma client and run migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project is ready to deploy on **Vercel**. Ensure the environment variables from `.env.example` are configured in Vercel.

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL` – Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` – Supabase anon public key
- `DATABASE_URL` – Postgres connection string
- `OPENAI_API_KEY` – API key for OpenAI services

## Notes

- Social network posting is simulated via a mock function in `src/lib/publisher.ts`.
- All tables reference the Supabase `auth.users` table by storing the `userId`.
- The UI uses Tailwind CSS utilities and includes shadcn/ui buttons for a better experience.
