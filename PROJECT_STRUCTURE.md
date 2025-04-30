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