// vite.demo.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Config specifically for demo site
export default defineConfig({
  plugins: [react()],
  root: "demo", // point to demo folder where main.tsx lives
  build: {
    outDir: "../dist-demo", // keep it separate from dist (lib build)
    emptyOutDir: true,
  },
});
