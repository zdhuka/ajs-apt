'use strict';

/* App Module */

angular.module('searchDocs', ['searchDocsFilters', 'searchDocsServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/dashboard', {templateUrl: 'partials/dashboard.html',   controller: DocListCtrl}).
      when('/preview/:docId', {templateUrl: 'partials/preview.html', controller: DocPreviewCtrl}).
      otherwise({redirectTo: '/dashboard'});
}]);
