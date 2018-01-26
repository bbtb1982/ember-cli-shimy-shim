/* eslint-env node */
'use strict';
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'ember-cli-shimy-shim',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/npm-shimy-shim.js');
    this.import('vendor/shims/npm-shimy-shim.js');
  },

  treeForVendor(vendorTree) {
   // const npmShimyShimPath = path.dirname(require.resolve('npm-shimy-shim'));
    const npmShimyShimPath = path.dirname(require.resolve('npm-shimy-shim'));

    console.log('\n\n\n\n', npmShimyShimPath, '\n\n\n\n\n');

    var npmShimyShimTree = new Funnel(npmShimyShimPath, {
      files: ['npm-shimy-shim.js'],
    });

    return new MergeTrees([vendorTree, npmShimyShimTree]);
  },

};
