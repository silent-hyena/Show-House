Show House: allow you to see all the trending movies, add to personal collection, rate and review movies and follow the top profile for their personal review and recomendations.

A production-style social movie platform built to demonstrate real backend engineering concepts: OAuth authentication, cursor-based pagination, Redis caching, SEO-optimized SSR, and traffic observability — not UI gimmicks.

🚀 Project Goals

This project intentionally prioritizes scalable system design over visuals.

Core engineering focus:

Serverless backend architecture

OAuth security (no token leaks)

Redis-backed caching

Cursor-based pagination (feeds, reviews)

SEO-friendly Server Components

Traffic monitoring & performance metrics

🧠 High-Level Architecture
Browser
  ↓
Next.js (App Router)
  ├── Server Components (SEO, SSR)
  ├── Route Handlers (/app/api)
  ↓
PostgreSQL (Primary DB)
  ↓
Redis (Caching Layer)
  ↓
TMDB API (External Data)

🧰 Tech Stack (Locked)
Frontend

Next.js (App Router)

TypeScript

Tailwind CSS / MUI

Native fetch with cache control or React Query

Backend (Serverless)

Next.js Route Handlers

OAuth (Google / GitHub)

JWT + Refresh Tokens

httpOnly cookies (no localStorage)

Infrastructure

PostgreSQL (Supabase / Neon)

Redis (Upstash / Redis Cloud)

Vercel / Render

Observability

Winston / Pino logging

Custom /metrics endpoint

Optional: PostHog / OpenTelemetry