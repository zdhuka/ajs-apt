'use strict'


angular.module('searchDocServices', ['ngResource']).
    factory('documents', function($resource){
  return $resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
});