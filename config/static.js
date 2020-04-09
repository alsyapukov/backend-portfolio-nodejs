const express = require('express');

module.exports = (app) => {
  app.use('/upload', express.static(__dirname + '/upload'));
}