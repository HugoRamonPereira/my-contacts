module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-promise-executor-return': 'off',
    camelcase: 'off',
    // This is to ignore only the word next in the no-unused-vars
    // because we need it for the Error Handler middleware
    // The Error Handler middleware must have 4 arguments and next is one of them
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
