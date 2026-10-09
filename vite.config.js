import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages の公開先 https://typer0999.github.io/task-board/ に合わせる
  base: "/task-board/",
});
