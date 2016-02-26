import Ember from 'ember';
import layout from '../templates/components/sl-grid-table';

export default Ember.Component.extend({
    layout: layout,
    tagName: 'table',
    classNames: [
        'table',
        'table-hover',
        'table-striped'
    ]
});
