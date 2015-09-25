var Package = require("./package.json");
var path = require("path");

module.exports = {
  entry: path.join(__dirname, "index.js"),
  output: {
    libraryTarget: "commonjs",
    library: Package.name,
    filename: "index.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          optional: ["runtime"],
          stage: 0
        }
      }
    ]
  }
}
