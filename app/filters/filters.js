'use strict';

/* Filters */

angular.module('searchDocsFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
