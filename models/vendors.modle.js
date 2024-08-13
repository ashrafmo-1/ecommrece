const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
  }],
});

module.exports = mongoose.model('Vendor', VendorSchema);