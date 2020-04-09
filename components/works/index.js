require('./model');
const getWork = require("./getWork");
const postWork = require("./postWork");

module.exports = (app) => {
  getWork(app);
  postWork(app);
};
