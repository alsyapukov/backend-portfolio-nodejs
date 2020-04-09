const config = require('./config/app');
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');

mongoose.connect(config.mongoUrl);

const app = express();

require('./config/express')(app);
require('./config/static')(app);
require('./components')(app);

app.listen(config.port, () => {
  console.log(`\n Server started on port ${config.port}`)
  console.log(`\n App running at:`);
  console.log(`- Local: http://localhost:${config.port}/`)
});

// var server = http.createServer(app);
// server.listen(5000, function(){
//   console.log('\n Express server listening on port ' + 5000)
// });

// require('./socket')(server);