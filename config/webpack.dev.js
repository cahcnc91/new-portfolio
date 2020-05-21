const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
var dotenv = require('dotenv').config({path: __dirname + '/.env'});

console.log(JSON.stringify(dotenv.parsed))

module.exports = {
  entry: {
    main: ["./src/main.js"],
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    stats: {
      colors: true,
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          name: "vendor",
          chunks: "initial",
          minChunks: 2

        }
      }
    }
  },
  devtool: "source-map",
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{ loader: "vue-loader" }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|gif|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
              useRelativePath: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      title: "camilacoder Full-Stack Developer | JavaScript",
      favicon: "./src/images/logo-black.png"
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed)
  }),

  ],
};
