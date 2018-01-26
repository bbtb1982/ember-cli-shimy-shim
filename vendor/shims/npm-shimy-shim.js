(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['npm-shimy-shim'],
      __esModule: true,
    };
  }

  define('npm-shimy-shim', [], vendorModule);
})();
