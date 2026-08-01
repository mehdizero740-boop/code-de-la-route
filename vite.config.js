import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("src/data/questions.js")) return "questions-data";
          if (id.includes("src/data/courses.js")) return "courses-data";
          if (id.includes("node_modules")) return "vendor";
        },
      },
    },
  },
});

