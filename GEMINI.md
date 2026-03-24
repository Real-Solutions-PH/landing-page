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
    "name": "Real Solutions PH Design System",
    "version": "1.0.0",
    "philosophy": {
      "theme": "Enterprise-grade, modern service platform for AI and software solutions",
      "coreEmotions": [
        "Trust",
        "Reliability",
        "Clarity",
        "Modernity",
        "Momentum"
      ],
      "inspiration": "shadcn/ui and Radix UI primitives adapted to Real Solutions PH brand identity",
      "complianceFocus": "Accessibility-first enterprise interface standards (WCAG 2.1), auditability, and globally credible visual consistency"
    },
    "branding": {
      "logo": {
        "icon": "Custom Real Solutions PH logo mark",
        "typography": "font-semibold text-lg tracking-tight",
        "layout": "Flex aligned with icon left, wordmark right",
        "brandExpression": "Clean geometric trust-first identity with a modern blue spectrum"
      },
      "colors": {
        "primaryBrand": {
          "name": "Trust Navy",
          "lightMode": "#193B76",
          "darkMode": "#2A5CAA",
          "usage": "Primary buttons, active states, key links, tab highlights, core brand identity"
        },
        "secondaryBrand": {
          "name": "Modern Blue",
          "lightMode": "#009FE5",
          "darkMode": "#11B8F5",
          "usage": "Secondary actions, highlights, interactive accents, charts, focus states"
        },
        "accentBrand": {
          "name": "Bright Cyan Accent",
          "lightMode": "#53E4FE",
          "darkMode": "#7BEAFF",
          "usage": "Glow accents, success-adjacent highlights, premium/innovative moments, subtle gradients"
        },
        "basePalette": {
          "background": "#F7FAFC",
          "surface": "#FFFFFF",
          "surfaceAlt": "#EEF4FA",
          "sidebar": "#102A52",
          "textPrimary": "#0F172A",
          "textSecondary": "#4B5563",
          "textMuted": "#6B7280",
          "textDisabled": "#94A3B8",
          "border": "#D9E4F0",
          "borderStrong": "#B8C9DD"
        },
        "semanticColors": {
          "success": "#0F9F6E",
          "warning": "#D97706",
          "destructive": "#DC2626",
          "info": "#009FE5"
        },
        "interactionStates": {
          "primaryHover": "#21498F",
          "primaryActive": "#15325F",
          "secondaryHover": "#028BC7",
          "secondaryActive": "#0A6EA4",
          "focusRing": "rgba(0, 159, 229, 0.35)",
          "selection": "rgba(0, 159, 229, 0.18)"
        },
        "gradients": {
          "brandGradient": "linear-gradient(135deg, #193B76 0%, #053B8B 35%, #009FE5 75%, #53E4FE 100%)",
          "heroGradient": "linear-gradient(135deg, #102A52 0%, #193B76 45%, #009FE5 100%)",
          "accentGradient": "linear-gradient(135deg, #009FE5 0%, #53E4FE 100%)"
        },
        "themeVariables": {
          "light": {
            "--background": "#F7FAFC",
            "--foreground": "#0F172A",
            "--card": "#FFFFFF",
            "--card-foreground": "#0F172A",
            "--popover": "#FFFFFF",
            "--popover-foreground": "#0F172A",
            "--primary": "#193B76",
            "--primary-foreground": "#FFFFFF",
            "--secondary": "#EEF4FA",
            "--secondary-foreground": "#193B76",
            "--muted": "#F1F5F9",
            "--muted-foreground": "#64748B",
            "--accent": "#009FE5",
            "--accent-foreground": "#FFFFFF",
            "--border": "#D9E4F0",
            "--input": "#D9E4F0",
            "--ring": "#009FE5",
            "--sidebar": "#102A52",
            "--sidebar-foreground": "#F8FAFC",
            "--sidebar-primary": "#009FE5",
            "--sidebar-primary-foreground": "#FFFFFF",
            "--sidebar-accent": "rgba(255, 255, 255, 0.08)",
            "--sidebar-accent-foreground": "#FFFFFF",
            "--radius": "0.625rem"
          },
          "dark": {
            "--background": "#081526",
            "--foreground": "#F8FAFC",
            "--card": "#10233F",
            "--card-foreground": "#F8FAFC",
            "--popover": "#10233F",
            "--popover-foreground": "#F8FAFC",
            "--primary": "#11B8F5",
            "--primary-foreground": "#081526",
            "--secondary": "#173257",
            "--secondary-foreground": "#E6F4FF",
            "--muted": "#13263F",
            "--muted-foreground": "#A9BCD3",
            "--accent": "#53E4FE",
            "--accent-foreground": "#081526",
            "--border": "#1E3A5F",
            "--input": "#1E3A5F",
            "--ring": "#53E4FE",
            "--sidebar": "#06101E",
            "--sidebar-foreground": "#F8FAFC",
            "--sidebar-primary": "#11B8F5",
            "--sidebar-primary-foreground": "#081526",
            "--sidebar-accent": "rgba(83, 228, 254, 0.10)",
            "--sidebar-accent-foreground": "#F8FAFC",
            "--radius": "0.625rem"
          }
        }
      }
    },
    "typography": {
      "fontFamily": "Inter, system-ui, sans-serif",
      "baseFontSize": "16px",
      "headings": {
        "h1": "text-3xl font-bold tracking-tight text-slate-950",
        "h2": "text-2xl font-bold tracking-tight text-slate-900",
        "h3": "text-lg font-semibold tracking-tight text-slate-900",
        "sidebarSection": "text-xs font-semibold uppercase tracking-wider text-sky-100/70"
      },
      "body": {
        "primary": "text-sm leading-relaxed text-slate-900",
        "secondary": "text-sm text-slate-600",
        "micro": "text-[10px] uppercase font-medium tracking-wide text-slate-500"
      }
    },
    "components": {
      "library": "shadcn/ui via Radix UI primitives",
      "stylingEngine": "Tailwind CSS v4 with clsx and tailwind-merge",
      "icons": "lucide-react (w-4 h-4 standard size)",
      "charts": "recharts (ResponsiveContainer, AreaChart, BarChart)",
      "visualStyle": {
        "cornerRadius": "Moderately rounded for modern enterprise friendliness",
        "shadowStyle": "Soft, restrained shadows with clear borders over heavy elevation",
        "interactionStyle": "Color-led emphasis with crisp focus states and minimal visual noise",
        "density": "Compact but breathable, optimized for dashboards, internal tools, and client-facing enterprise apps"
      }
    }
  }
}
```
