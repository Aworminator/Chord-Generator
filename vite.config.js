import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path must match the GitHub repo name for GitHub Pages project sites
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Chord-Generator/",
});
