const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { NODE_ENV, BUNDLEANA } = process.env;
const ESLintPlugin = require('eslint-webpack-plugin');

class PluginFactory {
  constructor() {
    this.isProd = NODE_ENV === 'production';
    this.plugins = [];
  }

  getWebpackBarPlugin() {
    this.plugins.push(
      new WebpackBar()
    )
  }
  getMiniCssExtractPlugin() {
    this.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:5].css'
      })
    )
  }
  getWebpackBarPlugin() {
    this.plugins.push(
      new WebpackBar()
    )
  }

  getBundleAnalyzerPlugin() {
    BUNDLEANA && this.plugins.push(new BundleAnalyzerPlugin());
  }
  getHtmlWebpackPlugin() {
    this.plugins.push(
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/", "index.html")
      })
    )
  }

  getDotenv() {
    this.plugins.push(
      new Dotenv({
        path: path.resolve(__dirname, `../enviroment/.env.${NODE_ENV}`)
      })
    );
  }

  getHotModuleReplacementPlugin() {
    this.plugins.push(new ReactRefreshPlugin())
  }
  getEslintPlugin() {
    this.plugins.push(new ESLintPlugin({
      extensions: ['ts', 'tsx'],
      emitWarning: true, // 这个配置需要打开，才能在控制台输出warning信息
      emitError: true,
      threads: true, // 这个配置需要打开，才能在控制台输出error信息
      fix: true,// 是否自动修复，如果是，每次保存时会自动修复可以修复的部分}}))
      lintDirtyModulesOnly: true
    }))
  }
  getPlugins() {
    if (!this.isProd) {
      // 热更新
      this.getHotModuleReplacementPlugin();
      this.getEslintPlugin();
    } else {
      this.getMiniCssExtractPlugin();
    }

    this.getBundleAnalyzerPlugin();
    this.getHtmlWebpackPlugin();
    this.getWebpackBarPlugin();
    this.getDotenv();
    return this.plugins;
  }
}

module.exports = PluginFactory;