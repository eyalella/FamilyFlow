# Changelog

## [2024-06-09]
- Initialized JS/TS monorepo with Turborepo v2.5+
- Created packages: backend, frontend, shared, ai-models
- Added root package.json with workspaces
- Enabled remote caching in turbo.json
- Configured tsconfig.json with path aliases for shared code
- Added documentation and onboarding updates to README.md and PROJECT_STRUCTURE.md 
- Created and checked out new feature branch: 'feature/configure-shared-types-utilities' for 'Configure Shared Types & Utilities'
- Created `packages/shared/src/index.ts` as a barrel export for TypeORM entities and GraphQL DTOs (User, Event, Notification) from backend. Added note to enforce no circular dependencies.

## [2024-06-09]
- Bootstrapped backend service with NestJS (strict TS)
- Installed @nestjs/typeorm, typeorm, reflect-metadata, @nestjs/graphql, sqlite3
- Configured TypeORM for SQLite and GraphQL (code-first)
- Created User, Event, Notification entities
- Updated documentation 

## [2024-06-09] Turbo local install and config fixes
- Added `packageManager` field to root package.json (now set to npm@11.3.0) to resolve turbo warning.
- Installed `turbo` as a local dev dependency.
- Renamed `pipeline` to `tasks` in turbo.json to comply with turbo 2.x requirements.
- Ran `npm run dev` to verify all issues are resolved.

## [2024-04-30]
- Bootstrapped React app in `packages/frontend` using Vite (React + TS, v6+)
- Installed and configured Tailwind CSS v4, PostCSS, Autoprefixer
- Enabled React strict mode
- Installed and set up Playwright for E2E testing
- Added example import for shared types from `@familyflow/shared`
- Fix Tailwind v4 and Vite integration: migrate PostCSS config to .cjs, use @tailwindcss/postcss plugin, update docs, and remove old config.

## [2024-06-10] CI/CD Pipeline and Testing Setup
- Created and switched to new feature branch 'feature/configure-cicd-pipeline' for CI/CD pipeline configuration.
- Added `.github/workflows/ci.yml` for CI/CD pipeline: install, lint, test, build, and deploy jobs.
- Deploy job uses GitHub Actions OIDC to assume AWS role and deploy to ECS (ECR build/push, ECS task update, service deploy).
- Workflow fails on lint or test errors.
- Set up Playwright for all tests in frontend package.
- Added `playwright.config.ts` with headless mode in CI and trace recording on failure.
- Created `tests/` directory for unit, integration, and E2E tests (empty, ready for test files).
- Added `test` script to frontend package.json.
- Updated documentation in README.md and PROJECT_STRUCTURE.md to reflect Playwright setup.
- Created and switched to new feature branch 'feature/setup-testing-coverage' for Setup Testing & Coverage.

## [2024-06-10] Linting Fixes
- Fixed linting errors in backend entities and main.ts:
  - Added explicit return types to @Field decorators in User, Event, and Notification entities
  - Added proper promise handling in bootstrap function
  - Pipeline now passes all lint checks

## [2024-06-10 15:45] Fixed TypeScript Linting Issues
- Fixed unsafe return types in @Field decorators across all entities:
  - Added explicit return types for Int, String, Boolean, and Date in User, Event, and Notification entities
  - Updated type functions to use proper TypeScript syntax: `(): typeof Type => Type`
  - Verified proper promise handling in main.ts bootstrap function
