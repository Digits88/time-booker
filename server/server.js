'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    config = require('./config/config.js');

/**
 * Main application entry file.
 * Note that the order of loading is important.
 */

// express settings
require('./config/express')(app, config);

// routes settings
require('./config/routes')(app);

// Start up the server on the port specified in the config
server.listen(process.env.PORT || config.get("express:port"), function () {
    console.info(config.get("app:name") + ' app started on port: ' + (process.env.PORT || config.get("express:port")) + ' - with environment: ' + config.get("env"));
});

//expose app
module.exports = app;