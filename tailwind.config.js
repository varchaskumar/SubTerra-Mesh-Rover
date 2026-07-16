/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-dim": "#121315",
        "surface-container-high": "#292a2c",
        "on-error-container": "#ffdad6",
        "tertiary-fixed": "#a5eeff",
        "on-secondary-fixed-variant": "#00497d",
        "inverse-on-surface": "#303033",
        "on-tertiary": "#00363f",
        "on-surface-variant": "#d4c5ab",
        "surface-container-lowest": "#0d0e10",
        "surface-bright": "#38393b",
        "on-secondary-fixed": "#001d36",
        "surface-container-highest": "#343537",
        "outline": "#9c8f78",
        "on-primary-fixed-variant": "#5b4300",
        "surface-variant": "#343537",
        "inverse-surface": "#e3e2e5",
        "outline-variant": "#4f4632",
        "inverse-primary": "#785900",
        "primary-fixed-dim": "#fabd00",
        "surface-tint": "#fabd00",
        "surface-container": "#1f2022",
        "primary": "#ffe4af",
        "primary-container": "#ffc107",
        "surface-container-low": "#1b1c1e",
        "tertiary": "#b4f0ff",
        "secondary": "#9ecaff",
        "error-container": "#93000a",
        "on-background": "#e3e2e5",
        "on-tertiary-container": "#005e6c",
        "tertiary-fixed-dim": "#00daf8",
        "on-tertiary-fixed": "#001f25",
        "tertiary-container": "#00defd",
        "on-primary": "#3f2e00",
        "on-surface": "#e3e2e5",
        "secondary-fixed": "#d1e4ff",
        "error": "#ffb4ab",
        "on-error": "#690005",
        "secondary-fixed-dim": "#9ecaff",
        "on-secondary": "#003258",
        "on-tertiary-fixed-variant": "#004e5a",
        "primary-fixed": "#ffdf9e",
        "on-secondary-container": "#002b4d",
        "on-primary-container": "#6d5100",
        "secondary-container": "#1e95f2",
        "background": "#121315",
        "surface": "#121315",
        "on-primary-fixed": "#261a00"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "card-padding": "20px",
        "container-gap": "12px",
        "margin-page": "24px",
        "unit": "4px",
        "gutter": "16px"
      },
      fontFamily: {
        "headline-md": ["JetBrains Mono"],
        "label-caps": ["JetBrains Mono"],
        "telemetry-data": ["JetBrains Mono"],
        "body-lg": ["Inter"],
        "display-lg": ["JetBrains Mono"],
        "body-md": ["Inter"],
        "headline-sm": ["JetBrains Mono"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "1.2", fontWeight: "600" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "700" }],
        "telemetry-data": ["20px", { lineHeight: "1", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-lg": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "headline-sm": ["18px", { lineHeight: "1.2", fontWeight: "600" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ],
}
