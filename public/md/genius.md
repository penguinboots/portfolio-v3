# Lil Genius (AI SaaS)

A full-stack, SaaS AI platform with a free and paid tier. Uses Next, React, Tailwind, Prisma, and more. AI tools include chat, image, video, music, and code generation leveraging APIs from OpenAI and Replicate. Hosted [here](https://lil-genius.vercel.app/) on Vercel.

## Main Features
- Chat, image, video, music, and code generation.
- Authentication with Clerk - log in with email or Google
- 5 free generations available on free plan, unlimited with pro plan (monthly subscription)
- Payment processing with Stripe
- Live customer support chat with Crisp
- User data persisted through MySQL database
- Responsive design

## Showcase

### Landing Page
![landing](/projects/genius/ai_home.gif)

### Login (Clerk)
![login](/projects/genius/clerk_login.png)

### AI Tools
![generation](/projects/genius/ai_demo.gif)

### Pro Plan (Payment via Stripe)
![pro](/projects/genius/ai_pro.gif)

### Live Chat Support (Crisp)
![chat](/projects/genius/ai_crisp.gif)

## Stack
- Next
  - App Router
- React
- Tailwind
- shadcn/ui
- Prisma

### Services
- Clerk (authentication)
- Stripe (payment processing)
- Crisp (customer support)

### APIs
- OpenAI
- Replicate

### Hosting
- Planetscale (database)
- Vercel (live site)

### Packages
- `axios`
- `clsx`
- `react-hot-toast`
- `react-markdown`