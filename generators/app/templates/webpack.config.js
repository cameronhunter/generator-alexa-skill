var path = require("path");

module.exports = {
  entry: {
    skill: path.join(__dirname, "lib", "index.js"),
    schema: path.join(__dirname, "schema.json"),
    samples: path.join(__dirname, "SAMPLES")
  },
  output: {
    libraryTarget: "commonjs",
    library: "<%= fileName %>",
    filename: "alexa-skill-<%= fileName %>.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /schema\.json$/, loader: "file-loader?name=[name].[ext]" },
      { test: /SAMPLES$/, loader: "file-loader?name=[name]" }
    ]
  }
};
