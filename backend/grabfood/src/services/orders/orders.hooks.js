const { authenticate } = require('@feathersjs/authentication').hooks;

const accessFilter = async context => {
  if (context.params.user != undefined && context.params.user){
    context.data.userId = context.params.user._id;
  } else {
    error = new Error('Access denied.')
    throw error;
  }
}

const queryFilter = async context => {
  if (context.params.user != undefined && context.params.user) {
    context.params.query.userId = context.params.user._id;
  } else {
    error = new Error('Access denied.')
    throw error;
  }
}

module.exports = {
  before: {
    all: [ authenticate('jwt')],
    find: [queryFilter],
    get: [queryFilter],
    create: [accessFilter],
    update: [accessFilter],
    patch: [accessFilter],
    remove: []
  },

  after: {
    all: [],
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
