import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-recap-clicker-game",
  build: {
    outDir: "docs",
  },
});
