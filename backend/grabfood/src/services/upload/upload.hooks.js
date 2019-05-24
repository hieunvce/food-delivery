const { authenticate } = require('@feathersjs/authentication').hooks;
const dauria = require('dauria');
const adminAccessOnlyFilter = async context => {
  if (typeof (context.params.user.role) != undefined && context.params.user.role == 'admin') {

  } else {
    error = new Error('Access denied.')
    throw error;
  }
}

const removeURIFromResponse = async context => {
  if (context.result.uri != undefined) {
    delete context.result.uri;
  }
}
const convertFileToBase64 = context => {
  if (!context.data.uri && context.params.file) {
    const file = context.params.file;
    const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
    context.data = { uri: uri };
  }
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), adminAccessOnlyFilter, convertFileToBase64],
    update: [authenticate('jwt'), adminAccessOnlyFilter, convertFileToBase64],
    patch: [authenticate('jwt'), adminAccessOnlyFilter, convertFileToBase64],
    remove: [authenticate('jwt'), adminAccessOnlyFilter]
  },

  after: {
    all: [removeURIFromResponse],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
