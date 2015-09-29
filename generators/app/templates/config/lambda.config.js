var Package = require("../package.json");

module.exports = {
  accessKeyId: "<%= accessKeyId %>",
  secretAccessKey: "<%= secretAccessKey %>",
  role: "<%= role %>",
  functionName: Package.name,
  description: Package.description + " (version " + Package.version + ")",
  region: "us-east-1",
  handler: "index.handler"
};
