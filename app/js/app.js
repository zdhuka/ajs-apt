//'use strict';
//
///* App Module */
//
//angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
//  config(['$routeProvider', function($routeProvider) {
//  $routeProvider.
//      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
//      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
//      otherwise({redirectTo: '/phones'});
//}]);

angular.module('aptara', [ 'aptaraFilters' ], 'aptaraServices').config(
		[ '$routeProvider', function($routerProvider) {
			$routeProvider.when('/dashboard', {
				templateUrl : 'partials/dashboard.html',
				controller : Dashboard
			}).otherwise({
				redirectTo : '/Dashboard'
			});
		} ]);