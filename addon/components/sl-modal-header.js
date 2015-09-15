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

    // -------------------------------------------------------------------------
    // Observers

    initialize: Ember.on(
        'init',
        function(){
            const streamService = this.get( 'streamService' );

            streamService.streams[ 'sl-modal' ].on( 'modalHeaderSetAria', ( ariaLabelledBy ) => {
                this.set( 'ariaLabelledBy', ariaLabelledBy );
            });

            streamService.send( 'sl-modal', 'modalHeaderInit' );
        }
    )

    // -------------------------------------------------------------------------
    // Methods

});
