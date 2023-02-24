import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import css from 'rollup-plugin-styles'

export default {
  input: 'src/index.js',
  output: [
    { file: 'dist/index.js', format: 'cjs', sourcemap: true },
    { file: 'dist/index.es.js', format: 'es', sourcemap: true }
  ],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    css(),
    resolve(),
    commonjs()
  ],
  external: ['react', 'prop-types']
}
