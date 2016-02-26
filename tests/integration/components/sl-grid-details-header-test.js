import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sl-grid-details-header', 'Integration | Component | sl grid details header', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sl-grid-details-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sl-grid-details-header}}
      template block text
    {{/sl-grid-details-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
