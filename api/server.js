const express = require('express');

const server = express();
const serverConfig = require('./serverConfig');

serverConfig(server);
module.exports = server;