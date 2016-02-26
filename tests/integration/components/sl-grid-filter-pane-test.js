import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sl-grid-filter-pane', 'Integration | Component | sl grid filter pane', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sl-grid-filter-pane}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sl-grid-filter-pane}}
      template block text
    {{/sl-grid-filter-pane}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
