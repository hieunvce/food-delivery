// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
  
    email: {type: String, unique: true, lowercase: true, required: true},
    password: { type: String, required: true },
    name: {type: String},
    gender: {type:String},
    active: {type:Boolean, default:true},
    role: {type: String, default: "user"},
    img: {type: String},

  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
