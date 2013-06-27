'use strict';

/* Services */

angular.module('searchDocsServices', ['ngResource']).
    factory('Docs', function($http){
    	
    	$http({method: 'GET', url: 'http://192.168.112.216:8001/docs'}).
    	success(function(data, status, headers, config) {
    	  return data;
    	}).
    	error(function(data, status, headers, config) {
    	  // called asynchronously if an error occurs
    	  // or server returns response with an error status.
    	});

});

