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
