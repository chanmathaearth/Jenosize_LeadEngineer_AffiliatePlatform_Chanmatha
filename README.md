# Affiliate Comparison Platform

An affiliate comparison platform built with modern web technologies, consisting of a strongly-typed backend (NestJS + Prisma) and a performant, reactive frontend (Next.js + React Query).

## Demo & Access
- **Demo URL**: https://yourapp.vercel.app
- **Admin Access**: `/admin` (Use this path to access the admin dashboard to manage products, offers, campaigns, and generated links)

## Architecture Overview

The system follows a standard decoupled architecture, where the Next.js frontend acts as the client-facing presentation layer and the NestJS backend serves as the core API handling business logic and database interactions.

```mermaid
graph TD
    Client[Client / Browser]
    NextJS[Next.js Frontend App]
    NestJS[NestJS Backend API]
    DB[(PostgreSQL Database)]

    Client -->|Interacts with UI| NextJS
    NextJS -->|REST API Calls| NestJS
    NestJS -->|Prisma ORM| DB
```

### Components
- **Frontend (`web`)**: A Next.js application that renders the user interface. It handles routing, state management (via `@tanstack/react-query`), and presents the product comparison and admin panels. Uses Tailwind CSS for styling.
- **Backend (`api`)**: A NestJS REST API that handles data operations, business logic, and database interactions via Prisma ORM.
- **Database**: PostgreSQL hosted on Neon (or any SQL-compatible DB).

## Tech Choices & Reasoning

### Frontend
- **Next.js (React)**: Chosen for its robust file-based routing, server-side rendering (SSR) capabilities, and excellent developer experience.
- **Tailwind CSS**: Allows for rapid, utility-first UI development without the need to switch between CSS and TSX files. Provides a modern and clean aesthetic with minimal effort.
- **React Query (@tanstack/react-query)**: Essential for managing server state, caching API responses, and providing smooth loading/error states without excessive boilerplate code.
- **Lucide React & SweetAlert2**: Used for modern iconography and beautiful, accessible alert modals.

### Backend
- **NestJS**: Provides a highly opinionated, Angular-like modular architecture that scales well for enterprise applications. The built-in dependency injection makes the codebase clean, scalable, and testable.
- **Prisma ORM**: Offers a fantastic developer experience with strongly-typed database queries and auto-generated TypeScript interfaces, significantly reducing runtime errors.
- **PostgreSQL**: A proven, robust, and feature-rich relational database that handles complex relationships (Products, Offers, Campaigns, Links) efficiently.

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- Yarn (Recommended) or npm
- PostgreSQL database (Local or cloud like Neon/Supabase)

### 1. Backend Setup (`api`)
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd api
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Set up environment variables by creating a `.env` file in the `api` folder based on `.env.example`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
   ```
4. Push the Prisma schema to the database (and generate Prisma Client):
   ```bash
   npx prisma db push
   # or
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   yarn start:dev
   ```
   *The API will be available at `http://localhost:3000`. Swagger API documentation is available at `/api/docs`.*

### 2. Frontend Setup (`web`)
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd web
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Set up environment variables by creating a `.env.local` or `.env` file in the `web` folder:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```
4. Start the development server:
   ```bash
   yarn dev
   ```
   *The web app will be available at `http://localhost:3001` (or your configured port).*

## Future Roadmap: What to Improve with More Time

1. **Authentication & Authorization**: Implement robust secure login (e.g., using NextAuth.js on the frontend and JWT Guards in NestJS) to protect the `/admin` routes so only authorized users can modify products and campaigns.
2. **Analytics Dashboard**: Build comprehensive charts and visual metrics in the admin panel to track clicks, conversion rates, and revenue per campaign.
3. **Caching Layer**: Integrate Redis to cache frequent API responses (like the main product list and offers) to reduce database load during high traffic spikes.
4. **Automated Testing**: Expand test coverage by adding more end-to-end (E2E) tests with Playwright/Cypress for the UI, and unit/integration tests with Jest for critical backend business logic.
5. **SEO & Performance Enhancements**: Implement Dynamic Open Graph images, richer structured data (JSON-LD), and server-side generated pages for individual products to improve search engine rankings.
6. **Docker Orchestration**: Create a comprehensive `docker-compose.yml` to orchestrate the Next.js app, the NestJS API, and the PostgreSQL database for single-command setup and easier deployment.
