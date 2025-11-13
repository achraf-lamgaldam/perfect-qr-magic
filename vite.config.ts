import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        generator: path.resolve(__dirname, "generator.html"),
        analytics: path.resolve(__dirname, "analytics.html"),
        about: path.resolve(__dirname, "about.html"),
        contact: path.resolve(__dirname, "contact.html"),
        faq: path.resolve(__dirname, "faq.html"),
        howitworks: path.resolve(__dirname, "how-it-works.html"),
        privacy: path.resolve(__dirname, "privacy.html"),
        terms: path.resolve(__dirname, "terms.html"),
      },
    },
  },
}));
