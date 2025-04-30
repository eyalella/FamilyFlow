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

### Getting Started
1. Install dependencies: `npm install`
2. Run all dev servers: `npm run dev`
3. Build all packages: `npm run build`

### Remote Caching
Remote caching is enabled via Turborepo for faster CI and local builds.

> We’ll grow this doc as we build.
