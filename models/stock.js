var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StockSchema = new Schema({
  // Full company name
  name: String,
  // Company ticker; eg. AAPL
  ticker: String,
  // Trading exchange; eg. NYSE
  exchange: String
});

module.exports = mongoose.model('Stock', StockSchema);