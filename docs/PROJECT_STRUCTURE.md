# ARGOSDYNE Project Structure

Corporate website clone built with Next.js App Router.

## Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokens in `app/globals.css`)
- **next-themes** for light/dark mode
- **Framer Motion** for section animations
- **lucide-react** for icons

## Top-level layout

```text
engi-web/
├── app/
│   ├── (company)/          # ARGOSDYNE corporate site (all public routes)
│   ├── layout.tsx          # Root: fonts, ThemeProvider, metadata
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── company/            # Page sections and content components
│   ├── ui/                 # Shared UI (SectionHeading, Buttons)
│   ├── MainNavbar.tsx
│   ├── MainFooter.tsx
│   ├── CompanyLogo.tsx
│   └── ThemeProvider.tsx
├── lib/
│   ├── adapters/company.ts # Data access layer (Sanity swap point)
│   ├── data/company/       # Site config, privacy policy
│   ├── data/companyContent.ts
│   ├── types/company.ts
│   ├── company-icons.ts
│   ├── metadata.ts
│   └── theme-classes.ts
└── public/images/          # Company assets
```

## Company routes

| Route | File |
|-------|------|
| `/` | `app/(company)/page.tsx` |
| `/product` | `app/(company)/product/page.tsx` |
| `/product/[slug]` | `app/(company)/product/[slug]/page.tsx` |
| `/solution` | `app/(company)/solution/page.tsx` |
| `/support` | `app/(company)/support/page.tsx` |
| `/contact` | `app/(company)/contact/page.tsx` |
| `/news` | `app/(company)/news/page.tsx` |
| `/news/[slug]` | `app/(company)/news/[slug]/page.tsx` |
| `/privacy` | `app/(company)/privacy/page.tsx` |

Route group `(company)` does not affect URLs. Shared chrome lives in `app/(company)/layout.tsx`.

## Data flow

1. Content in `lib/data/companyContent.ts` and `lib/data/company/`
2. Pages import via `lib/adapters/company.ts`
3. Phase 2 (Sanity): replace adapter implementation only

## Rules for new work

1. Company UI → `components/company/`
2. Shared UI → `components/ui/`
3. Content → `lib/data/` or Sanity (via adapter)
4. Page files stay thin — metadata + one content component
5. Use `tc` from `lib/theme-classes.ts` for styling
6. Use `companyRoutes` from `lib/data/company/site.ts` for links

## Related docs

- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- [STYLE_REFERENCE.md](./STYLE_REFERENCE.md)
- [THEME_RULES.md](./THEME_RULES.md)
