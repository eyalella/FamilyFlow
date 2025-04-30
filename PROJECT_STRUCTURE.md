# Project Structure

This project is a JavaScript/TypeScript monorepo managed with Turborepo (v2.5+).

## Root
- `.gitignore` – Ignores node_modules, build output, logs, .env, SQLite, IDE files, and more
- `package.json` – Monorepo config, workspaces, scripts, now includes a `packageManager` field for toolchain compatibility
- `turbo.json` – Turborepo pipeline and remote cache config, uses the `tasks` field (not `pipeline`) as required by turbo 2.x
- `tsconfig.json` – Shared TypeScript config and path aliases

## Packages
- `packages/backend` – Backend/server code (NestJS, TypeORM/SQLite, GraphQL, User/Event/Notification entities)
- `packages/frontend` – Frontend app (web/mobile)
- `packages/shared` – Shared code (types, utilities, etc.)
- `packages/ai-models` – AI/ML models and logic

## Features
- Remote caching enabled for faster builds
- Shared code via TypeScript path aliases
- Backend: TypeORM (SQLite), GraphQL (code-first), strict TS, User/Event/Notification entities

- `packages/frontend/` - React app bootstrapped with Vite (React + TS)
  - Tailwind CSS v4 configured (tailwind.config.js, postcss.config.cjs, index.css, uses @tailwindcss/postcss plugin)
  - Playwright installed for E2E testing
  - Example shared types import (`src/shared-types-example.ts`)
- `packages/backend/` - Server/backend code (NestJS)
- `packages/shared/` - Shared code (types, utils, etc.)
- `packages/ai-models/` - AI/ML models and logic
- `packages/frontend/tests/` - Contains all Playwright tests (unit, integration, E2E)
- `packages/frontend/playwright.config.ts` - Playwright configuration (headless in CI, traces on failure)

- [2024-06-09] Created 'feature/configure-shared-types-utilities' branch to begin work on shared types and utilities.
- [2024-06-09] Added `packages/shared/src/index.ts` as a barrel export for backend TypeORM entities and GraphQL DTOs (User, Event, Notification). Circular dependency avoidance enforced by convention.
- [2024-06-10] Created and switched to 'feature/configure-cicd-pipeline' branch for CI/CD pipeline configuration.
- `.github/workflows/ci.yml` – GitHub Actions workflow for CI/CD: install, lint, test, build, and deploy (to AWS ECS via OIDC/role-assume)
- [2024-06-10] Added CI/CD pipeline workflow for install, lint, test, build, and deploy to AWS ECS using GitHub Actions and OIDC role assumption. 
- [2024-06-10] Created and switched to 'feature/setup-testing-coverage' branch for Setup Testing & Coverage. 
