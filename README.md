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
- Tailwind CSS v4, PostCSS, Autoprefixer configured
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

> We'll grow this doc as we build.
