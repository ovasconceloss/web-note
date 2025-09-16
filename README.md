# WebNote — Minimal note-taking app

> A minimalist note-taking app (inspired by Notion + Obsidian).

---

![License: MIT](https://img.shields.io/badge/license-MIT-blue)
![Status: In Development](https://img.shields.io/badge/Status-In_Development-red)
![GitHub last commit](https://img.shields.io/github/last-commit/ovasconceloss/web-note)

## Index

* [About](#about)
* [Features](#Features)
* [Tech Stack](#tech-stack)
* [Folder Structure](#folder-structure)
* [Installation (development)](#installation-development)
* [Environment variables](#environment-variables)
* [Useful scripts](#useful-scripts)
* [Tests, lint, and formatting](#tests-lint-and-formatting)
* [CI / CD](#ci--cd)
* [Contribution](#contribution)
* [License](#license)

---

## About

**WebNote** is a minimal note-taking application built with **Node.js + TypeScript** on the backend and **React + TypeScript** on the frontend. The goal is to be a lightweight, extensible product and a good example of software engineering for portfolios and technical tests.

## Features

* Create, edit, and delete notes in Markdown.
* REST endpoint for note operations.
* Minimum authentication (JWT)

---

## Tech Stack

* **Dev tooling:** ESLint, Prettier.
* **Backend:** Node.js, TypeScript, Fastify, Prisma, PostgreSQL.
* **Frontend:** React, TypeScript, Vite, React Router, Zustand.

---

## Folder Structure

```
/webnote
├─ .github/               # workflows (CI/CD)
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  ├─ services/
│  │  ├─ models/
│  │  ├─ routes/
│  │  └─ index.ts
│  ├─ prisma/             # migrations and schema.prisma
│  └─ package.json
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ hooks/
│  │  └─ main.tsx
│  └─ package.json
├─ README.md
└─ LICENSE
```

---

## Installation (development)

```bash
# clone
git clone https://github.com/ovasconceloss/web-note.git
cd web-note

# backend
cd backend
cp .env.example .env
pnpm install
pnpm run dev            # start backend with ts-node

# frontend
cd ../frontend
cp .env.example .env
pnpm install
pnpm run dev            # start frontend with Vite
```

## Environment variables

```
# backend/.env.example
DATABASE_URL=postgresql://user:pass@localhost:5432/webnote
JWT_SECRET=a-secret-password
PORT=4000
NODE_ENV=development
```

```
# frontend/.env.example
VITE_API_URL=http://localhost:4000
```

---

## Useful scripts

In the backend `package.json`:

```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "vitest"
  }
}
```

In the frontend `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  }
}
```

---

## Tests, lint, and formatting

* **Unit tests:** Vitest.
* **Formatter:** Prettier with shared configuration.
* **Lint:** ESLint with rules based on TypeScript-ESLint.

---

## CI / CD

```yaml
name: CI
on: [push, pull_request]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20.x]
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install backend deps
        working-directory: backend
        run: pnpm ci
      - name: Run backend tests
        working-directory: backend
        run: pnpm test
      - name: Install frontend deps
        working-directory: frontend
        run: pnpm ci
      - name: Run frontend tests
        working-directory: frontend
        run: pnpm test
```

---

## Contribution

1. Open an issue describing the feature/bug.
2. Create a branch named `feature/short-name` or `fix/issue-123`.
3. Add tests and run lint locally.
4. Make a Pull Request with a clear description and checklist.

---

## License

MIT © Victor Vasconcelos.
</br>
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

* GitHub: `https://github.com/ovasconceloss`
* Email: `victorolimpiovasconcelos.dev@gmail.com`