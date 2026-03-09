# CodePilot Web

Frontend for CodePilot's developer-support platform.

This application delivers a focused experience for identifying issues and bugs, suggesting practical fixes, and surfacing improvement opportunities.

## Scope (MVP)

The web app should support:
1. Code Health module: repository submission and analysis
2. Analysis status tracking (queued, running, completed)
3. Findings dashboard grouped by category
4. Fix suggestions and improvement suggestions for each finding
5. Role-based view modes (Frontend, Backend, QA, DevOps, Security)
6. Foundation for additional developer-assistant workflows

## Planned Feedback Categories

- `Bugs`
- `Code Smells`
- `Duplicate Code`
- `Hardcoded Values`
- `Improvement Suggestions`

## Vibe Coder Feature Direction

- Quick repo scan and re-scan loop
- File-level fix guidance with concise reasoning
- Suggested patch snippets for common issue types
- Role-aware filters for faster execution
- Workflow from findings to fix tracking

## Tech Stack

- React 18
- React Router 6
- Vite 5

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Run Locally

```bash
cd CodePilot_Web
npm install
npm run dev
```

The app runs on Vite's default local server.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Suggested Environment Variables

Create `CodePilot_Web/.env` when API integration starts:

```env
VITE_API_BASE_URL=http://localhost:5000
```

## Folder Overview

```text
CodePilot_Web/
  src/
    components/
    pages/
    services/
    store/
```

## Current Status

Product pivot in progress from collaboration platform to developer-support AI.

Current focus:
1. Define clean information architecture for analysis reports
2. Implement submission and report list screens
3. Add role-aware filters and role-specific recommendation blocks
4. Keep UI ready for follow-up modules beyond repository scanning

## Contributing

Contributions are welcome.
Please open an issue for bugs, feature proposals, or UX improvements.

## Project Ownership

Product Concept and Direction: MNS Baanu
