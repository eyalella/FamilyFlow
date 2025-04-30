# Project Structure

This project is a JavaScript/TypeScript monorepo managed with Turborepo (v2.5+).

## Root
- `package.json` – Monorepo config, workspaces, scripts
- `turbo.json` – Turborepo pipeline and remote cache config
- `tsconfig.json` – Shared TypeScript config and path aliases

## Packages
- `packages/backend` – Backend/server code
- `packages/frontend` – Frontend app (web/mobile)
- `packages/shared` – Shared code (types, utilities, etc.)
- `packages/ai-models` – AI/ML models and logic

## Features
- Remote caching enabled for faster builds
- Shared code via TypeScript path aliases 