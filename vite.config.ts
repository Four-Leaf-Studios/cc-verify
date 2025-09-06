import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: {
        index: "src/index.ts", // @four-leaf-studios/cc-verify
        brands: "src/brands.ts", // @four-leaf-studios/cc-verify/brands
        verify: "src/verify.ts", // @four-leaf-studios/cc-verify/verify
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      name: "cc-verify",
    },
  },
});
