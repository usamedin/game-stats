require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const envVariables = process.env

const config = {
    mode: 'production',
    target: 'node',
    devtool: "source-map",
    entry: [
        path.resolve(`handlers.ts`),
    ],
    resolve: {
        extensions: ['.js', '.ts'],
        mainFields: ['main', 'module'],
        fallback: {
            fs: false
        }
    },
    output: {
        filename: 'handlers.js',
        path: path.resolve(__dirname, '../dist'),
        libraryTarget: 'commonjs'
    },
    optimization: {
        minimize: false,
    },

    module: {
        rules: [
            {
                test: /\.ts?/, loader: 'ts-loader',
                options: { allowTsInNodeModules: true },
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ ...envVariables, })
    ],
    node: { __dirname: true }
}

module.exports = config
