/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  env: {
    node: true,
    commonjs: true
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'public',
    'events.json',
    '.*.{ts,js,vue,tsx,jsx}',
    'generated/**/*'
  ],
  rules: {
    'no-var': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn'
  }
}

module.exports = config
