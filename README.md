# CodePilot

CodePilot is an AI-powered developer support platform for modern vibe-coding workflows.

It helps developers identify issues and bugs, suggest practical fixes, and generate clear improvement recommendations across a codebase.

## What CodePilot Does

- Code Health: scan repositories to detect bugs, smells, duplicates, and risky patterns
- Fix Suggestions: propose actionable, file-level fixes for each finding
- Improvement Suggestions: recommend architecture, maintainability, and readability upgrades
- Role-Aware Feedback: tailor outputs for Frontend, Backend, QA, DevOps, and Security
- Vibe Coder Support: fast context, concise explanations, and developer-friendly workflows

## MVP Focus

1. Repository submission
2. Analysis status tracking
3. Findings dashboard with severity and file references
4. Fix and improvement suggestions for each finding
5. Role-based recommendations

## Analysis Categories

- Bugs
- Code smells
- Duplicate code
- Hardcoded values
- Improvement suggestions

## Features Needed For Vibe Coder Devs

- One-click repository scan and quick re-scan
- Ranked findings by severity and impact
- Explain-why + suggested fix for each issue
- Suggested patch snippets before applying changes
- Role-aware views for focused action (Frontend, Backend, QA, DevOps, Security)
- Progress tracking from detected issue to fixed status

## Current Repository Structure

```text
CodePilot/
  CodePilot_API/    # Backend service (in progress)
  CodePilot_Web/    # Frontend app (React + Vite)
  README.md
```

## Tech Stack

- Frontend: React, React Router, Vite
- Backend: Node.js service scaffold (`CodePilot_API`)

## Status

Product pivot in progress. Initial development is focused on delivering a clean and professional MVP.

## Contributing

Contributions are welcome through issues and pull requests.

## License

License will be finalized as part of the MVP setup.

## Project Ownership

Product Concept and Direction: MNS Baanu
