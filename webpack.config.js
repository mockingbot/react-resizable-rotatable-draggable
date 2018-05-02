const { DefinePlugin } = require('webpack')

const mode = process.env.NODE_ENV || 'production'
const isProduction = mode === 'production'

const babelOption = {
  configFile: false,
  babelrc: false,
  cacheDirectory: isProduction,
  presets: [
    [ '@babel/env', { targets: isProduction ? { browser: '>= 1%' } : { node: '8.8' } } ],
    [ '@babel/react' ]
  ],
  plugins: [
    [ 'styled-components' ],
    [ '@babel/proposal-class-properties' ],
    [ 'minify-replace', { replacements: [ { identifierName: '__DEV__', replacement: { type: 'booleanLiteral', value: !isProduction } } ] } ]
  ]
}

module.exports = {
  mode,
  bail: isProduction,
  output: { path: `${__dirname}/example`, filename: 'index.js', library: 'RRRD', libraryTarget: 'umd' },
  entry: { index: `${__dirname}/src/index.example` },
  module: { rules: [ { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: babelOption } } ] },
  plugins: [ new DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(mode), __DEV__: !isProduction }) ],
  optimization: { minimize: isProduction }
}
