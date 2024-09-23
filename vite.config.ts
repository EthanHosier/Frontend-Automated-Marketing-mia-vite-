import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig((params) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target:
          params.mode === "development"
            ? "http://localhost:8080"
            : "http://20.117.104.59",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
}));
