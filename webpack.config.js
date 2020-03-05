const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 入口文件
  entry: path.join(__dirname, './src/main.js'),
  output: {
    // 出口(打包后)文件路径
    path: path.join(__dirname, './dist'),
    // 出口(打包后)文件名
    filename: 'bundle.js'
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // 指定模板页面，将来根据这个指定的路径生成内存中的页面
      template: path.join(__dirname, './src/index.html'),
      // 指定生成页面的名称
      filename: 'index.html'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      // 该规则表示检测到.css结尾的文件时，使用后面的加载器
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|gif|png|)$/,
        use: 'url-loader'
      },
      // 处理字体文件
      {
        test: /\.(ttf|woff2|woff|eot|svg)$/, 
        use: 'url-loader'
      },
      // 处理js
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      // 处理vue
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}