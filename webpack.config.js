module.exports = env => {
  return process.env.NODE_ENV === "production"
    ? require("./webpack.config.production.js")
    : require("./webpack.config.dev.js");
};
