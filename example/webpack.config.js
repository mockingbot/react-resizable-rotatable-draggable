const { join } = require('path')
const { DefinePlugin } = require('webpack')

const isProduction = process.argv.includes('production')
const mode = isProduction ? 'production' : 'development'

const babelOption = {
  configFile: join(__dirname, '../babel.config.js'),
  babelrc: false
}

module.exports = {
  mode,
  output: { path: join(__dirname, 'dist/'), filename: '[name].js', library: 'RRRD', libraryTarget: 'umd' },
  entry: { index: join(__dirname, 'src/index.js') },
  module: { rules: [ { test: /\.js$/, use: { loader: 'babel-loader', options: babelOption } } ] },
  plugins: [ new DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(mode), __DEV__: !isProduction }) ]
}
