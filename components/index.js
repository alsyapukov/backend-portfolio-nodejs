const works = require("./works");
const techs = require("./techs");
const users = require("./users");

module.exports = (app) => {
  works(app),
  techs(app),
  users(app)
};