var seedData= require('../fixtures/variables.json')
var order = require('../fixtures/order.json')

module.exports = {
  allData: function(req, res, next) {
    res.send(seedData.index);
  },
}
