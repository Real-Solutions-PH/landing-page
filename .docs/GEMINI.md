# AI Agent Instructions for Real Solutions PH (GEMINI.md)

## 1. PROJECT OVERVIEW & AGENT ROLE
You are an expert full-stack engineer and UI/UX developer tasked with building the landing page for **Real Solutions PH**. 
Your primary goal is to write clean, maintainable, production-ready code while strictly adhering to the technical stack, design system, and company branding outlined below. Always be proactive, verify your own work, and think step-by-step.

## 2. COMPANY CONTEXT & PRODUCT REQUIREMENTS
Always review and reference `CONTEXT.md` for business logic, copywriting, brand tone, section layouts, and target audience definitions.
- **Brand Identity:** Professional, direct, solutions-first, technical but accessible.
- **Core Value Proposition:** Connecting tools and eliminating manual work for SMEs.
- **Content:** Avoid generic placeholder text. Rely heavily on the copy and structure provided in `CONTEXT.md`.

## 3. TECH STACK CONVENTIONS
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript 
- **Styling:** Tailwind CSS v4 + `clsx` + `tailwind-merge`
- **UI Components:** shadcn/ui (powered by Radix UI primitives)
- **Icons:** `lucide-react`
- **Animations:** Framer Motion (use for scroll reveals and hero animations)
- **Forms:** React Hook Form
- **Data Visualization:** Recharts
- **Deployment & Hosting:** Vercel

## 4. CODING STANDARDS & BEST PRACTICES

### React & Next.js
- Use **React Server Components (RSC)** by default to minimize client-side JavaScript. 
- Only use `"use client"` directives when interactivity, React hooks (`useState`, `useEffect`), or browser APIs are required.
- Prioritize Next.js best practices: use `next/link` for navigation, `next/image` for responsive web-optimized images, and `next/font` for local font loading (Inter or Plus Jakarta Sans).

### TypeScript
- Write strict TypeScript code. 
- Define explicit interfaces or types for all component parameters, props, and shared data models.
- Avoid using `any`; fall back to `unknown` if a type is truly indeterminate.

### Styling & Layout
- Implement mobile-first responsive design paradigms.
- Extract repeated style clusters using Tailwind classes or custom UI components rather than writing inline styles.
- Support both **Light** and **Dark mode** themes based on the design system palette.

### Performance & SEO
- Output semantic HTML. Use appropriate heading hierarchies (`h1`, `h2`, `h3`).
- Implement robust SEO using Next.js Metadata API (titles, descriptions, OpenGraph tags).
- Aim for maximum Lighthouse performance (90+ score) and strict adherence to Web Content Accessibility Guidelines (WCAG 2.1).

## 5. DESIGN SYSTEM

Make use of this JSON definition as the absolute source of truth for the design system logic, colors, typography, and styling components. Incorporate this deeply into your Tailwind configuration and customized shadcn components.

```json
{
  "designSystem": {
    "name": "BaseLayer Universal Design System",
    "version": "1.0.0",
    "philosophy": {
      "theme": "Enterprise-grade, high-density utility application",
      "coreEmotions": ["Trust", "Efficiency", "Reliability", "Clarity", "Precision"],
      "inspiration": "shadcn/ui and Radix UI primitives",
      "complianceFocus": "International data standards (Accessibility WCAG 2.1, Audit Trails, Data Sovereignty)"
    },
    "branding": {
      "logo": {
        "icon": "Layers (Lucide icon)",
        "typography": "font-semibold text-lg tracking-tight",
        "layout": "Flex aligned with icon left, text right"
      },
      "colors": {
        "primaryBrand": {
          "name": "Brand Core",
          "lightMode": "blue-600",
          "darkMode": "blue-500",
          "usage": "Primary actions, active navigation states, main brand identity"
        },
        "basePalette": {
          "background": "slate-50 (app background), white (cards/surface)",
          "sidebar": "slate-900 (structural contrast)",
          "textPrimary": "slate-900",
          "textSecondary": "slate-500",
          "textDisabled": "slate-400"
        },
        "semanticColors": {
          "success": "emerald-600",
          "warning": "amber-500",
          "destructive": "rose-600",
          "info": "sky-500"
        },
        "themeVariables": {
          "light": {
            "--background": "#ffffff",
            "--foreground": "oklch(0.145 0 0)",
            "--card": "#ffffff",
            "--primary": "#0f172a",
            "--border": "hsl(var(--slate-200))",
            "--radius": "0.5rem"
          },
          "dark": {
            "--background": "oklch(0.145 0 0)",
            "--foreground": "oklch(0.985 0 0)",
            "--card": "oklch(0.145 0 0)",
            "--border": "oklch(0.269 0 0)"
          }
        }
      }
    },
    "typography": {
      "fontFamily": "Inter, system-ui, sans-serif",
      "baseFontSize": "16px",
      "headings": {
        "h1": "text-3xl font-bold tracking-tight text-slate-900",
        "h2": "text-2xl font-bold tracking-tight text-slate-900",
        "h3": "text-lg font-semibold tracking-tight text-slate-900",
        "sidebarSection": "text-xs font-semibold uppercase tracking-wider text-slate-500"
      },
      "body": {
        "primary": "text-sm leading-relaxed text-slate-900",
        "secondary": "text-sm text-slate-500",
        "micro": "text-[10px] uppercase font-medium tracking-wide"
      }
    },
    "components": {
      "library": "shadcn/ui via Radix UI primitives",
      "stylingEngine": "Tailwind CSS v4 with clsx & tailwind-merge",
      "icons": "lucide-react (w-4 h-4 standard size)",
      "charts": "recharts (ResponsiveContainer, AreaChart, BarChart)"
    }
  }
}
```