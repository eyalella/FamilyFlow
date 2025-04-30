# FamilyFlow AI  
Smart AI calendar for busy families.  
- Syncs school, WhatsApp, portals  
- Alerts conflicts  
- Child-friendly checklists  

## Monorepo Structure (Turborepo)
This project uses [Turborepo](https://turbo.build/) for managing a JavaScript/TypeScript monorepo.

### Packages:
- `packages/backend` – Server/backend code
- `packages/frontend` – Web/mobile app frontend
- `packages/shared` – Shared code (types, utils, etc.)
- `packages/ai-models` – AI/ML models and logic

### Backend Service
- Built with [NestJS](https://nestjs.com/) (strict TypeScript)
- Uses TypeORM with SQLite for local development
- GraphQL API (code-first, playground enabled)
- Entities: User, Event, Notification

### Frontend Setup (React)
- Located in `packages/frontend`
- Bootstrapped with Vite (React + TypeScript, v6+)
- Tailwind CSS v4, PostCSS (postcss.config.cjs, uses @tailwindcss/postcss), Autoprefixer configured
- Playwright installed for E2E testing
- Example shared types import from `@familyflow/shared` in `src/shared-types-example.ts`

### Getting Started
1. Install dependencies: `npm install`
2. Run all dev servers: `npm run dev`
3. Build all packages: `npm run build`

### Remote Caching
Remote caching is enabled via Turborepo for faster CI and local builds.

## Turbo Setup Notes
- Ensure the root `package.json` includes a `packageManager` field (e.g., `"packageManager": "npm@11.3.0"`).
- The `turbo.json` file must use the `tasks` field instead of the deprecated `pipeline` field (required for turbo 2.x+).
- Turbo is installed as a local dev dependency.

### Getting Started (Frontend)
1. `cd packages/frontend`
2. `npm install`
3. `npm run dev` (starts Vite dev server)
4. To run Playwright tests: `npx playwright test`

## [2024-06-09] Branch Update
- New feature branch 'feature/configure-shared-types-utilities' created for configuring shared types and utilities. Please use this branch for all related work and collaboration.

## [2024-06-09] Shared Types/DTOs Update
- `packages/shared/src/index.ts` now provides a barrel export for backend TypeORM entities and GraphQL DTOs (User, Event, Notification). Do not import from this barrel within backend entity/DTO definitions to avoid circular dependencies.

> We'll grow this doc as we build.
