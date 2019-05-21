// products-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const products = new Schema({
    restaurantId: {
      type: ObjectId,
      ref: 'restaurants',
      required: true
    },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: {type: String},
    img: { type: String, default: "../../private/products/blank.png" }
  }, {
      timestamps: true
    });

  return mongooseClient.model('products', products);
};
