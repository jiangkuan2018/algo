import { defineConfig } from 'rollup'
import * as rimraf from 'rimraf'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const buildDir = ['linkedList', 'binaryTree']

/**
 * @param {string} DIR 
 * @returns {import('rollup').Plugin}
 */
function rollupPluginBuildStart(DIR) {
  return {
    name: 'rollup-plugin-build-start',
    buildStart() {
      const res = rimraf.sync(path.resolve(__dirname, `./packages/${DIR}/dist`))
      console.log(res, 'xxxxx', path.resolve(__dirname, `./packages/${DIR}/dist`))
    }
  }
}

export default buildDir.map(DIR => defineConfig({
  input: `./packages/${DIR}/index.js`,
  output: {
    dir: `./packages/${DIR}/dist`,
    format: 'es'
  },
  plugins: [
    rollupPluginBuildStart(DIR)
  ]
}))
