import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        border: "#E2E8F0", // slate-200
        input: "#F1F5F9", // slate-100
        ring: "#0284C7", // sky-600
        background: "#FFFFFF",
        foreground: "#0F172A", // slate-900
        primary: {
          DEFAULT: "#0F2847", // deep corporate navy
          hover: "#153A65",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1E293B", // slate-800
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D97706", // warm amber-600
          hover: "#B45309",
          foreground: "#FFFFFF",
        },
        technical: {
          DEFAULT: "#0284C7", // engineering blue
          hover: "#0369A1",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#DC2626", // red-600
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F8FAFC", // slate-50
          foreground: "#64748B", // slate-500
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0F2847 0%, #0369A1 100%)",
        "gradient-navy": "linear-gradient(180deg, #0A1E34 0%, #0F2847 100%)",
        "gradient-subtle": "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        card: "0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 12px 24px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.04)",
        hero: "0 20px 25px -5px rgba(15, 23, 42, 0.2), 0 8px 10px -6px rgba(15, 23, 42, 0.1)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
