'use strict';

/* Services */

angular.module('searchDocsServices', ['ngResource']).
    factory('Docs', function($resource){
  return $resource('data/:DocId.json', {}, {
    query: {method:'GET', params:{docId:'docs'}, isArray:true}
  });
});
