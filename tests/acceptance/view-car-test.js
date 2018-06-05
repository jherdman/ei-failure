import { module, test } from 'qunit';
import { visit, currentURL, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | view car', function(hooks) {
  setupApplicationTest(hooks);

  setupMirage(hooks);

  test('displays info about a car', async function(assert) {
    let car = this.server.create('car', {
      name: 'Lucille',
      brand: 'Subaru',
    });

    await visit(`/cars/${car.id}`);

    await pauseTest();

    assert.equal(currentURL(), `/cars/${car.id}`);
  });
});
