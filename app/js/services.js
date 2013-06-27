'use strict';

/* Services */

angular.module('aptaraServices', [ 'ngResource' ]).factory('Report',
		function($resource) {
			return $resource('data/:reportId.json', {}, {
				query : {
					method : 'GET',
					params : {
						reportId : 'report'
					},
					isArray : true
				}
			});
		});
