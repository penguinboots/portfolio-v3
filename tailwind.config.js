/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // CUSTOM COLOUR THEMES
        base: {
          DEFAULT: "hsl(var(--base))",
          text: "hsl(var(--base-text))",
          grad: "hsl(var(--base-grad))"
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          text: "hsl(var(--sidebar-text))",
          hover: "hsl(var(--sidebar-text-hover))",
          light: "hsl(var(--sidebar-light))",
          grad: "hsl(var(--sidebar-grad))"
        },
        header: {
          DEFAULT: "hsl(var(--header))",
          text: "hsl(var(--header-text))",
          grad: "hsl(var(--header-grad))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          bghover: "hsl(var(--card-hover))",
          light: "hsl(var(--card-light))",
          text: "hsl(var(--card-text))",
          hover: "hsl(var(--card-text-hover))",
          alt: "hsl(var(--card-alt))",
          althover: "hsl(var(--card-alt-hover))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}