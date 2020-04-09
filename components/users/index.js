require('./model');
const auth = require("./auth");
const reg = require("./reg");

module.exports = (app) => {
  auth(app);
  reg(app);
};
