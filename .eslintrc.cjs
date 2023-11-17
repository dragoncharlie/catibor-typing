/* eslint-env node */

module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'prettier', '@tanstack/query'],
  rules: {
    'prettier/prettier': ['error'],
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error',
  },
}
