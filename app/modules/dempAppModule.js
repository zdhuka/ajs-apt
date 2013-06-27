'use strict';

/* App Module */

angular.module('demoApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/files', {templateUrl: 'partials/file-list.html',   controller:fileListController}).
      when('/file/:fileId', {templateUrl: 'partials/file-preview.html', controller: filePreviewController}).
      otherwise({redirectTo: '/files'});
}]);
