import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: "src/ccVerify.ts",
      name: "ccVerify",
      formats: ["es", "cjs"],
      fileName: (format) => `cc-verify.${format}.js`,
    },
  },
});
