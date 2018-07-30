const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./app/index.html"),
  filename: "./index.html"
});

module.exports = {
  entry: { main: "./app/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [new CleanWebpackPlugin("dist", {}), htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  stats: {
    colors: true
  },
  devtool: "source-map",
  devServer: {
    port: 3000
  }
};
