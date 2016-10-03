var dataController = require('../data/dataController.js')

module.exports = function(app, express) {

  // provides all data
  app.get('/api/data', dataController.allData);
}
