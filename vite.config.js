import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // To make github pages build work
  base: "/react-recap-clicker-game/",
  build: {
    outDir: "docs",
  },
});
