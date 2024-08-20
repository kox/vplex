module.exports = {
    extends: [
      'eslint:recommended',
      'prettier',
      'plugin:prettier/recommended',
      'turbo'
    ],
    plugins: ['simple-import-sort', 'prettier'],
    globals: {
        React: true,
        JSX: true
    },
    settings: {
      "import/resolver": {
        typescript: {
            project,
        },
      },
    },
    ignorePatterns: [
      // Ignore dotfiles
      ".*.js",
      "node_modules/",
      "dist/",
    ],
    overrides: [{
      files: ["*.js?(x)", "*.ts?(x)"],
    }],
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'prettier/prettier': ['error'],
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      'no-irregular-whitespace': 'error',
      'no-trailing-spaces': 'error',
      semi: 'error',
      'no-empty-function': 'error',
      'no-duplicate-imports': 'error',
      'newline-after-var': 'error',
      camelcase: 'warn',
    },
  };