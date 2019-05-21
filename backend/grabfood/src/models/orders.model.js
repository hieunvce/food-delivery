// orders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
  name: String,
  img: String,
  price: Number,
  quantity: Number
});

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const orders = new Schema({
    userId: {
      type: ObjectId,
      ref: 'users',
      required: true
    },
    deliveryStatus: { type: Boolean, default: false },
    items:
    {
      type: [OrderItemSchema]
    },
    total: {type:Number, default:0}
  }, {
      timestamps: true
    });

  return mongooseClient.model('orders', orders);
};
