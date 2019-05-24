// Initializes the `upload` service on path `/upload`
const createService = require('feathers-mongoose');
const createModel = require('../../models/upload.model');
const hooks = require('./upload.hooks');
const filters = require('./upload.filters');
const multer = require('multer');
const multipartMiddleware = multer();

const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/images/restaurants');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/upload', multipartMiddleware.single('uri'),
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    blobService({ Model: blobStorage }));

  // Get our initialized service so that we can register hooks
  const service = app.service('upload');

  service.hooks(hooks);
  if (service.filter) {
    service.filter(filters);
  }
};
