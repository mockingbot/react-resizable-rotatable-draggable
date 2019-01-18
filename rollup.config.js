import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import { main as packageMain, module as packageModule } from './package.json'

export default {
  input: 'src/index.js',
  output: [
    { file: packageMain, format: 'cjs', sourcemap: true },
    { file: packageModule, format: 'es', sourcemap: true }
  ],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs()
  ],
  external: [ 'react', 'prop-types', 'styled-components' ]
}
