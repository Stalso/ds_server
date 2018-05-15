const DeepstreamServer = require("deepstream.io");
const dsServer = new DeepstreamServer('./config.yml');
dsServer.start();