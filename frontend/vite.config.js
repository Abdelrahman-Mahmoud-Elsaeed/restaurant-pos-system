/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import svgr from "vite-plugin-svgr";

// import path from "path"

export default defineConfig({
  plugins: [
    react(),
    [svgr()],
    babel({ presets: [reactCompilerPreset()] })
  ],
  // resolve: {
  //   alias: {
  //     "@":  path.join(__dirname,"./src"),
  //     "@ui":  path.join(__dirname,"./src/component/ui"),
  //   }
  // }
})
