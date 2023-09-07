const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderFactory = require('./bundle/loaders');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.tsx')
  },
  output: {
    filename: "static/js/[name].js", // 每个输出js的名称
    clean: true,
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [...new LoaderFactory().getLoaders()]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      // 复制 'index.html' 文件，并自动引入打包输出的所有资源（js/css）
      template: path.join(__dirname, "/public/index.html"),
      // 压缩html资源
      minify: {
        collapseWhitespace: true, //去空格
        removeComments: true, // 去注释
      },
    }),
  ],
}