import Ember from 'ember';
import layout from '../templates/components/sl-modal-header';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {Object} */
    layout: layout,

    /** @type {String} */
    tagName: 'div',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    streamService: Ember.inject.service( 'stream' ),

    initializedEvent: Ember.on(
        'init',
        function() {
            console.log( '%cinitialized sl-modal-header' , 'color: blue' );
        }
    ),

    willRenderComponent: Ember.on(
        'willRender',
        function() {
            console.log( '%cwill render sl-modal-header' , 'color: blue' );
        }
    ),

    rendered: Ember.on(
        'didRender',
        function() {
            console.log( '%cdid render sl-modal-header' , 'color: blue' );
        }
    ),

    willInsert: Ember.on(
        'willInsertElement',
        function() {
            console.log( '%cwill insert sl-modal-header' , 'color: blue' );
        }
    ),

    didInsert: Ember.on(
        'didInsertElement',
        function() {
            console.log( '%cdid insert sl-modal-header' , 'color: blue' );
        }
    )
    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
