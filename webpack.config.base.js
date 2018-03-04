let webpack = require("webpack");
let HtmlwebpackPlugin = require("html-webpack-plugin");
let path = require("path");
let dotenv = require("dotenv");

let APP_PATH = path.resolve(__dirname, "src");
let BUILD_PATH = path.resolve(__dirname, "dist");

let BUILD_ENV = process.env.NODE_ENV;

let ENV_CONST = dotenv.config({
  path: `${__dirname}/.env${BUILD_ENV ? "." + BUILD_ENV : ""}`
}).parsed;

if (!ENV_CONST) {
  throw `ERROR: Environment file ".env${
    BUILD_ENV ? "." + BUILD_ENV : ""
  }" not found \n`;
}

module.exports = {
  devtool: "source-map",
  entry: {
    app: [APP_PATH + "/index.tsx"]
  },
  output: {
    path: BUILD_PATH,
    filename: "app.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: "./build",
    inline: true,
    hot: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader",
        query: {
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        query: {
          name: "images/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(ENV_CONST)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: ENV_CONST.PAGE_TITLE || "React Application",
      filename: "index.html",
      template: "index.ejs"
    })
  ],
  //To support joi validation on client end
  node: {
    net: "empty",
    tls: "empty",
    dns: "empty"
  }
};
