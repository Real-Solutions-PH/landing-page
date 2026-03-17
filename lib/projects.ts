export type Project = {
  id: string;
  title: string;
  clientType: string;
  description: string;
  outcome: string;
  tags: string[];
  service: string;
  featured: boolean;
  accentColor: string;
  letter: string;
};

export const PROJECTS: Project[] = [
  {
    id: "restaurant-pos-xero",
    title: "POS ↔ Xero Accounting Sync",
    clientType: "Food & Beverage Chain",
    description:
      "Automated daily sales reconciliation between a multi-branch restaurant POS system and Xero. Eliminated manual journal entry and end-of-day errors across 5 branches.",
    outcome: "Saved 25 hrs/week in manual bookkeeping",
    tags: ["Accounting", "POS", "Xero"],
    service: "Custom Integration Project",
    featured: true,
    accentColor: "blue",
    letter: "F",
  },
  {
    id: "ecommerce-inventory-sync",
    title: "Multi-channel Inventory Sync",
    clientType: "E-commerce Retailer",
    description:
      "Real-time inventory deduction across Shopee, Lazada, and a physical store. Orders from any channel instantly update stock levels and trigger reorder alerts.",
    outcome: "Zero overselling incidents since launch",
    tags: ["E-commerce", "Inventory", "Shopee", "Lazada"],
    service: "Custom Integration Project",
    featured: true,
    accentColor: "emerald",
    letter: "E",
  },
  {
    id: "hr-payroll-biometrics",
    title: "HR & Payroll Biometrics Integration",
    clientType: "BPO / Staffing Company",
    description:
      "Connected biometric time-and-attendance hardware to an HRIS and payroll engine. Automated overtime computation, leave deductions, and government contribution reports.",
    outcome: "Cut payroll processing from 3 days to 4 hours",
    tags: ["HR", "Payroll", "Biometrics"],
    service: "Custom Integration Project",
    featured: true,
    accentColor: "purple",
    letter: "H",
  },
  {
    id: "crm-lead-automation",
    title: "CRM Lead Capture Automation",
    clientType: "Real Estate Developer",
    description:
      "Unified lead capture from Facebook Lead Ads, a website inquiry form, and a property portal into HubSpot. Auto-assigned leads to agents with follow-up email sequences.",
    outcome: "Lead response time reduced from 24 hrs to 5 min",
    tags: ["CRM", "Email", "Lead Management"],
    service: "Custom Integration Project",
    featured: false,
    accentColor: "orange",
    letter: "C",
  },
  {
    id: "logistics-fulfillment",
    title: "Order ↔ Fulfillment Webhook",
    clientType: "3PL / Logistics Provider",
    description:
      "Webhook pipeline connecting a client's Shopify store to a third-party logistics partner. Orders auto-create pick-and-pack tasks, and tracking numbers sync back to the storefront.",
    outcome: "Fulfillment errors dropped by 90%",
    tags: ["Logistics", "E-commerce", "Shopify"],
    service: "Custom Integration Project",
    featured: false,
    accentColor: "sky",
    letter: "L",
  },
  {
    id: "integration-audit-retail",
    title: "Integration Audit & Roadmap",
    clientType: "Multi-branch Retail Chain",
    description:
      "Two-week discovery engagement mapping 11 disconnected tools across purchasing, inventory, sales, and finance. Delivered a phased integration roadmap with cost estimates.",
    outcome: "Identified ₱2.4M/yr in operational waste",
    tags: ["Audit", "Roadmap", "Strategy"],
    service: "Integration Audit & Roadmap",
    featured: false,
    accentColor: "amber",
    letter: "A",
  },
];

export const ACCENT_CLASSES: Record<
  string,
  { bg: string; text: string; dot: string }
> = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/50",
    text: "text-blue-600 dark:text-blue-400",
    dot: "bg-blue-400",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/50",
    text: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-400",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/50",
    text: "text-purple-600 dark:text-purple-400",
    dot: "bg-purple-400",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/50",
    text: "text-orange-600 dark:text-orange-400",
    dot: "bg-orange-400",
  },
  sky: {
    bg: "bg-sky-100 dark:bg-sky-900/50",
    text: "text-sky-600 dark:text-sky-400",
    dot: "bg-sky-400",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/50",
    text: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-400",
  },
};
