const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  plugins: [new ESLintPlugin({
    // Options for ESLint plugin
    extensions: ['js', 'jsx'], // Specify file extensions to lint
    exclude: ['node_modules'], // Exclude folders from linting
    fix: true // Enable auto-fixing of some lint errors
  })]
};