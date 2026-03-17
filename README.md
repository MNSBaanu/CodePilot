# CodePilot

CodePilot is an AI-powered developer support platform for modern vibe-coding workflows.

It helps developers identify issues and bugs, suggest practical fixes, and generate clear improvement recommendations across a codebase.

## What CodePilot Does

- Code Health: scan repositories to detect bugs, smells, duplicates, and risky patterns
- Fix Suggestions: propose actionable, file-level fixes for each finding
- Improvement Suggestions: recommend architecture, maintainability, and readability upgrades
- Role-Aware Feedback: tailor outputs for Frontend, Backend, QA, DevOps, and Security
- Vibe Coder Support: fast context, concise explanations, and developer-friendly workflows

## Analysis Categories

- Bugs
- Code smells
- Duplicate code
- Hardcoded values
- Improvement suggestions

## Repository Structure

```text
CodePilot/
  CodePilot_API/    # Backend service (scaffold — in progress)
  CodePilot_Web/    # Frontend app (React + Vite)
  README.md
```

## Tech Stack

- Frontend: React 18, React Router v6, Vite
- Backend: Node.js (planned — CodePilot_API)

## Frontend Status

MVP frontend is complete and running on mock data.

Pages built:
- Home — repository URL submission form
- Analysis Status — animated scan progress with severity summary
- Findings Dashboard — filterable list by role, severity, and category
- Finding Detail — explanation, file reference, and suggested fix with code snippets

Features:
- Sticky navbar with branding and navigation
- Role filter: Frontend, Backend, QA, DevOps, Security
- Severity filter: Critical, High, Medium, Low
- Category filter: Bug, Smell, Duplicate, Hardcoded, Improvement
- Dark blue color theme

To run the frontend locally:

```bash
cd CodePilot_Web
npm install
npm run dev
```

## Backend Status

`CodePilot_API` is currently a scaffold. No endpoints are implemented yet.

Planned endpoints:

```text
POST   /api/repos
GET    /api/repos/:repoId
POST   /api/analyses
GET    /api/analyses/:analysisId
GET    /api/analyses/:analysisId/findings
```

See `CodePilot_API/README.md` for full backend scope and planned findings format.

## Upcoming Features

- Mark finding as fixed (progress tracking: detected → in progress → fixed)
- Re-scan button on findings page
- Analysis history on home page
- Export report as PDF or CSV
- Replace mock data with real API calls
- Loading skeletons and error boundaries
- Role dashboard — focused summary view per role

## Contributing

Contributions are welcome through issues and pull requests.

## License

License will be finalized as part of the MVP setup.

## Project Ownership

Product Concept and Direction: MNS Baanu
