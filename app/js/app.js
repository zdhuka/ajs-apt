'use strict';

/* App Module */

angular.module('aptara', ['aptaraFilters', 'aptaraServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/dashboard', {templateUrl: 'partials/dashboard.html',   controller: DashboardCtrl}).
      otherwise({redirectTo: '/dashboard'});
}]);
