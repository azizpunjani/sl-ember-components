/* global require, module */
var EmberAddon = require( 'ember-cli/lib/broccoli/ember-addon' );
var replace = require( 'broccoli-string-replace' );
var env = require( './config/environment' );
var packageConfig = require( './package.json' );
var tree;

module.exports = function() {
   var app = new EmberAddon({
       fingerprint: {
           enabled: true,
           exclude: [],
           extensions: [ 'png', 'jpg', 'gif' ],
           prepend: env().baseAssetsURL,
           replaceExtensions: [ 'html', 'css', 'js' ]
       }
   });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

   app.import( app.bowerDirectory + '/sinonjs/sinon.js', {
       type: 'test'
   });

   app.import( app.bowerDirectory + '/sinon-qunit/lib/sinon-qunit.js', {
       type: 'test'
   });

   app.import( app.bowerDirectory + '/ember/ember-template-compiler.js', {
       type: 'test'
   });

   tree = replace( app.toTree(), {
       files: [
           'index.html',
           'assets/dummy.js'
       ],

       patterns: [
           {
               match: /REPLACE_META_DESCRIPTION/g,
               replacement: packageConfig.description
           }, {
               match: /REPLACE_META_KEYWORDS/g,
               replacement: packageConfig.keywords.join( ', ' ) + ', ember, ember cli'
           }, {
               match: /REPLACE_APPLICATION_VERSION/g,
               replacement: packageConfig.version
           }
       ]
   });

   return tree;
};
