import Ember from 'ember';
import layout from '../templates/components/sl-grid-details-header';

export default Ember.Component.extend({
    layout: layout,
    tagName: 'header',
    classNames: [
        'panel-heading'
    ]
});
