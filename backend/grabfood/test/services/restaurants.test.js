const assert = require('assert');
const app = require('../../src/app');

describe('\'restaurants\' service', () => {
  it('registered the service', () => {
    const service = app.service('restaurants');

    assert.ok(service, 'Registered the service');
  });
});
