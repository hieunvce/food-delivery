const { authenticate } = require('@feathersjs/authentication').hooks;

const adminAccessOnlyFilter = async context => {
  if (typeof (context.params.user.role) != undefined && context.params.user.role == 'admin') {
    
  } else {
    error = new Error('Access denied.')
    throw error;
  }
}

module.exports = {
  before: {
    all: [ ],
    find: [],
    get: [],
    create: [authenticate('jwt'),adminAccessOnlyFilter],
    update: [authenticate('jwt'),adminAccessOnlyFilter],
    patch: [authenticate('jwt'),adminAccessOnlyFilter],
    remove: [authenticate('jwt'),adminAccessOnlyFilter]
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
