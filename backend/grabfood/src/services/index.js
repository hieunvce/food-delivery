const users = require('./users/users.service.js');
const restaurants = require('./restaurants/restaurants.service.js');
const products = require('./products/products.service.js');
const orders = require('./orders/orders.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(restaurants);
  app.configure(products);
  app.configure(orders);
};
