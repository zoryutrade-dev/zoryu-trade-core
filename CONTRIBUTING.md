# Contributing to Zoryu Trade Core

This repository contains **pure domain logic**.
Please keep it deterministic, testable, and infrastructure-free.

## Rules (Non-Negotiable)

- No network calls (fetch/axios/ws)
- No database clients
- No wallet/web3 usage
- No Node server frameworks
- No side effects in domain functions

## Development

Install:
- Node.js 18+

Commands:
- `npm run build` — compile TypeScript
- `npm run test` — run unit tests

## Pull Requests

- Keep changes small and focused
- Add tests for new behaviors
- Prefer pure functions
- Avoid breaking public exports without bumping versions
