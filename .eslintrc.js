module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double']
  }
}
