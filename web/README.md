# AffiliateCompare Web Platform

A modern, responsive Next.js frontend for comparing affiliate products, managing campaigns, and tracking short links.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State Management & Data Fetching:** TanStack React Query
- **Alerts:** SweetAlert2

## Project Structure
- `src/app/` - Next.js routing and pages
  - `/` - Public price comparison page
  - `/admin/*` - Admin dashboard, products, campaigns, and link management
- `src/components/` - Reusable React components
- `src/features/` - API services, hooks, and types organized by feature
- `src/lib/` - Utility functions and API client setup

## Prerequisites
- Node.js (v20+)
- Yarn

## Local Development

1. **Install dependencies**
```bash
yarn install
```

2. **Configure environment variables**
Create a `.env` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

3. **Start the development server**
```bash
yarn dev
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

## Docker Deployment

This project includes a multi-stage `Dockerfile` optimized for Next.js standalone builds, significantly reducing the image size.

1. **Build and run with Docker Compose**
```bash
docker-compose up -d --build
```

The web application will be accessible at `http://localhost:3001` (to avoid conflict with the backend API on port 3000).

2. **Stop the containers**
```bash
docker-compose down
```
