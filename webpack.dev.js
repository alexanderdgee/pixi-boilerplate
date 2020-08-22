const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ]
};
