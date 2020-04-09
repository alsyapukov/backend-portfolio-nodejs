require('./model');
const getTech = require("./getTech");
const postTech = require("./postTech");

module.exports = (app) => {
  getTech(app);
  postTech(app);
};
