const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Основной файл приложения
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для собранных файлов
    filename: 'bundle.js', // Имя выходного JS файла
  },
  module: {
    rules: [
      {
        test: /\.png$/, // Обработка PNG изображений
        type: 'asset/resource',
      },
      {
        test: /\.js$/, // Транспиляция JavaScript через Babel
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Обработка CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html', // Шаблон HTML
      filename: 'index.html', // Имя выходного HTML файла
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Имя выходного CSS файла
    }),
    new CleanWebpackPlugin(), // Очистка папки dist перед сборкой
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Статические файлы
    compress: true, // Включение gzip сжатия
    port: 3000, // Порт для локального сервера
  },
};
