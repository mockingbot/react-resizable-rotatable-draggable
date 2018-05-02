const BABEL_ENV = process.env.BABEL_ENV || ''
const isDev = BABEL_ENV.includes('dev')

module.exports = {
  presets: [
    [ '@babel/env', { targets: isDev ? { node: '8.8' } : { browser: '>= 1%' } } ],
    [ '@babel/react' ]
  ],
  plugins: [
    [ 'styled-components' ],
    [ '@babel/proposal-class-properties' ],
    [ 'minify-replace', { replacements: [ { identifierName: '__DEV__', replacement: { type: 'booleanLiteral', value: isDev } } ] } ]
  ],
  comments: false
}
