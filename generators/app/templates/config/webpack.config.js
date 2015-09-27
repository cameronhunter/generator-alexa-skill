var path = require("path");

module.exports = {
  entry: path.join(__dirname, "..", "lib", "index.js"),
  output: {
    libraryTarget: "commonjs",
    library: "handler",
    filename: "index.js",
    path: path.join(__dirname, "..", "dist")
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" }
    ]
  }
};
