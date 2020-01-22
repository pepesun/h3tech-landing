module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': 0,
    'semi': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'quotes': ['error', 'single'],
    'max-len': ['error', { 'code': 120 }],
    'space-before-function-paren': 0
  }
}
