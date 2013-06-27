'use strict';

/* App Module */

angular.module('demoApp', []).config(
		[ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/index', {
				templateUrl : 'partials/file-list.html',
				controller : fileListController
			}).

			otherwise({
				redirectTo : '/index'
			});
		} ]);