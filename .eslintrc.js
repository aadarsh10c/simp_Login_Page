const { plugins } = require('./webpack.config');

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jsx-a11y/recommended',
    ],
    settings: { react: { version: "detect" } },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react'],
    rules: {
        // Add your custom rules here
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
};
