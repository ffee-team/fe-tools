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
  "overrides": [
    {
      "files": ['*.ts', '*.tsx', "*.js"], // Your TypeScript files extension
      "parserOptions": {
        "project": ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    }
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "import/no-unresolved": 0,
    "@typescript-eslint/no-unused-expressions": 1,
    "import/no-dynamic-require": 1,
    "global-require": 0,
    "no-restricted-syntax": 1
  }
}
