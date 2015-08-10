import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-modal-header', 'Integration | Component | sl modal header', {
    integration: true
});

test( 'Modal header class exists on child element', function( assert ) {
    this.render( hbs`
        {{sl-modal-header}}
    `);

    assert.equal(
        this.$().find( '.modal-header' ).length,
        1
    );
});

test( 'Close button exists', function( assert ) {
    this.render( hbs`
        {{sl-modal-header}}
    `);

    assert.equal(
        this.$().find( '.close' ).length,
        1
    );
});

test( 'Setting title on header works', function( assert ) {
    const title = 'hello world';

    this.set( 'title', title );

    this.render( hbs`
        {{sl-modal-header title=title}}
    `);
    assert.equal(
        this.$().find( '.modal-title' ).text(),
        title
    );
});

test( 'Content is yielded', function( assert ) {
    this.render( hbs`
        {{#sl-modal-header title=title}}
            <div class="test"></div>
        {{/sl-modal-header}}
    `);

    assert.equal(
        this.$( '.test' ).length,
        1
    );
});

test( 'Modal title\'s id is set to ariaLabelledBy property value', function( assert ) {
    let ariaLabelledBy;

    this.set( 'title', 'label test' );
    this.set( 'ariaLabelledBy', ariaLabelledBy );

    this.render( hbs`
        {{sl-modal-header title=title ariaLabelledBy=ariaLabelledBy}}
    `);
    console.log(this);

    assert.equal(
        this.$().find( '.modal-title' ).prop( 'id' ),
        this.get( 'ariaLabelledBy' )
    );
});

test( 'aria-labelledby can be bound in a custom header', function( assert ) {
    const template = '<span class="modal-title" id={{ariaLabelledBy}}>Custom Title</span>';

    const component = this.subject({
        layout: Ember.Handlebars.compile( template ),
        ariaLabelledBy: 'mockUniqueString'
    });

    assert.equal(
        this.$( '.modal-title' ).prop( 'id' ),
        component.get( 'ariaLabelledBy' )
    );
});
