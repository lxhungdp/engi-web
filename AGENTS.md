<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ARGOSDYNE Web — AI Agent Rules

Corporate website for ARGOSDYNE (drone technology company). Not an EngiWeb demo gallery.

Before generating or modifying code, read the project documentation:

| Doc | Purpose |
|-----|---------|
| [docs/AI_GENERATION_RULES.md](./docs/AI_GENERATION_RULES.md) | **Start here** — rules for AI assistants |
| [docs/PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md) | Folder layout and file placement |
| [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) | Colors, typography, components |
| [docs/STYLE_REFERENCE.md](./docs/STYLE_REFERENCE.md) | Portable style spec |
| [docs/COMPONENT_RULES.md](./docs/COMPONENT_RULES.md) | How to write components |
| [docs/THEME_RULES.md](./docs/THEME_RULES.md) | Light/dark theme usage |
| [docs/CODE_STYLE.md](./docs/CODE_STYLE.md) | TypeScript, formatting, lint |

## Quick rules

- Follow the existing visual style — do not redesign
- Use `tc` from `lib/theme-classes.ts` for styling
- Use `tc.btnPrimary` / `tc.btnSecondary` for all buttons
- Put company content in `lib/data/` (via `lib/adapters/company.ts`), not inline JSX
- Use `companyRoutes` for all internal links
- Company pages live under `app/(company)/` with shared layout
- Run `npm run build` after significant changes
