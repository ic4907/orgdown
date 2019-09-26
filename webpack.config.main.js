const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main/index.ts',
  output: {
    filename: 'main.js',
  },
  mode: 'development',
  target: 'electron-main',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".js"],
    alias: {
      '@orgdown': path.resolve(__dirname, 'src/*')
    }
  },
  node: {
    __dirname: true,
    __filename: false
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
}
