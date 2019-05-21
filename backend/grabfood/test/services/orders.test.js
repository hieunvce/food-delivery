const assert = require('assert');
const app = require('../../src/app');

describe('\'orders\' service', () => {
  it('registered the service', () => {
    const service = app.service('orders');

    assert.ok(service, 'Registered the service');
  });
});
