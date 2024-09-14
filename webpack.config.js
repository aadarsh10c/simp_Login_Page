const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const isProduction = !env.development ? 'yes' : 'no';
    return {
        entry: './src/index.jsx',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        devtool: isProduction === 'yes' ? 'source-map' : 'inline-source-map',
        devServer: {
            static: './dist',
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.(?:js|mjs|cjs|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                            ],
                        },
                    },
                },
            ],
        },
        plugins: [
            new ESLintPlugin({
                // Options for ESLint plugin
                extensions: ['js', 'jsx'], // Specify file extensions to lint
                exclude: ['node_modules'], // Exclude folders from linting
                fix: true, // Enable auto-fixing of some lint errors
            }),
            new HtmlWebpackPlugin({
                title: 'Output Management',
                template: './src/index.html',
            }),
        ],
    };
};
