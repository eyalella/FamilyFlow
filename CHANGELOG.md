# Changelog

## [2024-06-09]
- Initialized JS/TS monorepo with Turborepo v2.5+
- Created packages: backend, frontend, shared, ai-models
- Added root package.json with workspaces
- Enabled remote caching in turbo.json
- Configured tsconfig.json with path aliases for shared code
- Added documentation and onboarding updates to README.md and PROJECT_STRUCTURE.md 

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
