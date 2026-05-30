<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# EngiWeb — AI Agent Rules

Before generating or modifying code, read the project documentation:

| Doc | Purpose |
|-----|---------|
| [docs/AI_GENERATION_RULES.md](./docs/AI_GENERATION_RULES.md) | **Start here** — rules for AI assistants |
| [docs/PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md) | Folder layout and file placement |
| [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) | Colors, typography, components |
| [docs/COMPONENT_RULES.md](./docs/COMPONENT_RULES.md) | How to write components |
| [docs/DEMO_PAGE_RULES.md](./docs/DEMO_PAGE_RULES.md) | Demo website standards |
| [docs/THEME_RULES.md](./docs/THEME_RULES.md) | Light/dark theme usage |
| [docs/CODE_STYLE.md](./docs/CODE_STYLE.md) | TypeScript, formatting, lint |

## Quick rules

- Follow the existing visual style — do not redesign
- Use `tc` from `lib/theme-classes.ts` for styling
- Use `tc.btnPrimary` / `tc.btnSecondary` for all buttons
- Put demo content in `lib/data/`, not inline JSX
- Every demo needs Back to EngiWeb + light/dark mode support
- Run `npm run build` after significant changes
