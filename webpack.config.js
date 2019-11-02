const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/index.html',
      title: 'LitElement Typscript Base'
    }),
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: 'ts-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
