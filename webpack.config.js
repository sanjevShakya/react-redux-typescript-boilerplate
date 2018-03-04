module.exports = env => {
  return !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? require("./webpack.config.dev.js")
    : require("./webpack.config.production.js");
};
