import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#121212",
        "surface-dark": "#1E1E1E",
        "surface-dark-300": "#2D2D2D",
        "text-dark": "#E0E0E0",
        "text-secondary-dark": "#B0B0B0",
        "accent-dark": "#BB86FC",
        "navbar-dark": "#1E1E1E",
        "hover-dark": "#2D3748",
        //////////////////////////////
        "bg-light": "#F9FAFB",
        "surface-light": "#F3F4F6",
        "surface-light-300": "#E5E7EB",
        "text-light": "#1F2937",
        "text-secondary-light": "#6B7280",
        "accent-light": "#6366F1",
        "navbar-light": "#F9FAFB",
        "hover-light": "#E5E7EB",
      },
      fontFamily: {
        base: ['"Google Sans"'],
      },
    },
  },
  // Add a plugin to handle the dark theme
  plugins: [
    function ({
      addBase,
      theme,
    }: {
      addBase: any;
      theme: (path: string) => string;
    }) {
      addBase({
        // Base styles for the body
        body: {
          backgroundColor: theme("colors.bg-light"),
          color: theme("colors.text-light"),
          fontFamily: theme("fontFamily.base"),
          fontWeight: "300",
        },
        // Styles for the dark theme
        ".dark body": {
          backgroundColor: theme("colors.bg-dark"),
          color: theme("colors.text-dark"),
        },
      });
    },
  ],
  // Enable dark mode based on class
  darkMode: "class",
} satisfies Config;
