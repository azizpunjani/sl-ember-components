import Ember from 'ember';
import layout from '../templates/components/sl-grid-details';

export default Ember.Component.extend({
    layout: layout,
    classNames: [
        'panel',
        'panel-default'
    ],

    classNameBindings: [
        'detailPaneOpen:show:hidden'
    ]
});
