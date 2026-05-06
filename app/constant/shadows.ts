export const shadows = {
  dark: {
    card:     "0 30px 60px -20px rgba(0,0,0,0.6), 0 18px 36px -18px rgba(0,0,0,0.5)",
    panel:    "0 20px 50px -20px rgba(0,0,0,0.5), 0 8px 24px -12px rgba(0,0,0,0.3)",
    modal:    "0 32px 64px -16px rgba(0,0,0,0.7)",
    tooltip:  "0 8px 32px rgba(0,0,0,0.5)",
    iconHover:"0 6px 20px rgba(0,0,0,0.3)",
  },
  light: {
    card:     "0 30px 60px -20px rgba(0,0,0,0.25), 0 18px 36px -18px rgba(0,0,0,0.18)",
    panel:    "0 20px 50px -20px rgba(0,0,0,0.15), 0 8px 24px -12px rgba(0,0,0,0.08)",
    modal:    "0 32px 64px -16px rgba(0,0,0,0.2)",
    tooltip:  "0 8px 32px rgba(0,0,0,0.12)",
    iconHover:"0 6px 20px rgba(0,0,0,0.12)",
  },
} as const;

/** Helper — pick the right set based on a boolean flag */
export const getShadows = (dark: boolean) => shadows[dark ? "dark" : "light"];
