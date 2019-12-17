module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "semi": 0,
    "no-console": 0,
    "prettier/prettier": {
      "singleQuote": true,
    }
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};