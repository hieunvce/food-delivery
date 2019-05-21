const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const accessFilter = async context => {
    if (typeof (context.params.user) != undefined && context.params.user) {
        context.params.query.email = String(context.params.user.email);
    } else {
    }
}

const logContext = async context => {
  console.log(JSON.stringify(context));
}

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt'),accessFilter],
    get: [authenticate('jwt'),accessFilter],
    create: [hashPassword()],
    update: [hashPassword(), authenticate('jwt'),accessFilter],
    patch: [hashPassword(), authenticate('jwt'),accessFilter],
    remove: [authenticate('jwt'),accessFilter]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
