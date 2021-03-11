module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'max-len': ['error', {'code': 250}],
    'quotes': ['error', 'single'],
    'no-invalid-this': 0,
    'babel/no-invalid-this': 1,
  },
  plugins: ['babel'],
  parser: 'babel-eslint',
};
