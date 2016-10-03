var express = require('express');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});

module.exports = app;
