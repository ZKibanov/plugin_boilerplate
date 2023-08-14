const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env) => {
    const isDev = env.mode === 'development';
    return {
        mode: env.mode || 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      // Creates `style` nodes from JS strings
                      "style-loader",
                      // Translates CSS into CommonJS
                      "css-loader",
                      // Compiles Sass to CSS
                      "sass-loader",
                    ],
                  },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build'),
            clean: true
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        plugins: [
            new webpack.ProgressPlugin(),
            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                // inject скриптов и стилей для prod будет производиться в plugin_injector
                inject: isDev,
            })
        ],
        devServer: {
            static: {
              directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: env.PORT || 3000,
            open: true
          },
    }
}

// module.exports.raw = true;