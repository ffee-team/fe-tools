module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "airbnb-base",
    "airbnb-typescript/base"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    // "ecmaVersion": 12,
    // "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "import/no-unresolved": 0,
  },
};
