module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },

  plugins: [
    'react',
    'prettier',
  ],
  ignorePatterns: [ "*.test.js", "*.test.tsx" ],
  rules: {
    "react/jsx-filename-extension": [ 1, { "extensions": [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
  },
};
