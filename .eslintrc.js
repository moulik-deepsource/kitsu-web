module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['ember'],
  extends: ['airbnb-base', 'plugin:ember/recommended'],
  env: {
    browser: true
  },
  rules: {
    // enable
    curly: 'error',
    // disable
    strict: 'off',
    'no-console': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'space-before-function-paren': 'off',
    'prefer-rest-params': 'off',
    'func-names': 'off',
    'no-useless-escape': 'off',
    'newline-per-chained-call': 'off',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-shadow': 'off',
    'object-curly-newline': 'off', // No way to disable just for function params
    'arrow-parens': ['error', 'as-needed']
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'config/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    },
    {
      files: ['tests/**/*.js'],
      globals: {
        server: true
      },
      rules: {
        'prefer-arrow-callback': 'off'
      }
    }
  ]
};
