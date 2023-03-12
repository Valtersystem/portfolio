module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-ís-valid': 'off',
  }
};
