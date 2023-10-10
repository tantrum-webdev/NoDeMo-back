module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['no-relative-import-paths', '@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-duplicate-imports': 'error',
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: true },
    ],
    curly: 'error',
    'max-lines': 'warn',
    'no-else-return': 'error',
    'no-magic-numbers': [
      'error',
      { ignoreArrayIndexes: true, ignoreDefaultValues: true },
    ],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'prefer-const': 'error',
    yoda: 'error',
    'eol-last': 'error',
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { allowSameFolder: true },
    ],
  },
};
