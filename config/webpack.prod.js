const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    main: ["./src/main.js"],
  },
  mode: "production",
  output: {
    filename: "[name]-[hash].bundle.js",
    chunkFilename: "[name]-[chunkhash].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        }
      }
    }
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
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
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
    new OptimizeCSSAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      title: "camilacoder Full-Stack Developer | JavaScript",
      favicon: "./src/images/logo-black.png"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    // new MinifyPlugin()
    new UglifyJSPlugin(),
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    new ManifestPlugin({
      fileName: 'manifest.json'
    }),
  ],
};
