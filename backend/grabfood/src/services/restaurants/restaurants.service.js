// Initializes the `restaurants` service on path `/restaurants`
const createService = require('feathers-mongoose');
const createModel = require('../../models/restaurants.model');
const hooks = require('./restaurants.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/restaurants', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('restaurants');

  service.hooks(hooks);
};
