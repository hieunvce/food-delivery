// restaurants-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const restaurants = new Schema({
    
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String },
    img: { type: String, default: "../../private/restaurants/blank.png" },
    active: { type: Boolean, default: true }

  }, {
    timestamps: true
  });

  return mongooseClient.model('restaurants', restaurants);
};
