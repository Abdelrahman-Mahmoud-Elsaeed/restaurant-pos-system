/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
// import path from "path"

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // resolve: {
  //   alias: {
  //     "@":  path.join(__dirname,"./src"),
  //     "@ui":  path.join(__dirname,"./src/component/ui"),
  //   }
  // }
})
