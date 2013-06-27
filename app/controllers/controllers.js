'use strict';

/* Controllers */

function fileListController($scope, $http) {
	$scope.previewURL = "";

	$http.get("http://192.168.112.216:8001/docs").success(function(data) {
		$scope.documents = data;
	});
	$scope.displayPreview = function(docname) {
		$scope.previewUrl = "http://192.168.112.216:8001/data/" + docname;
	}
}

function filePreviewController($scope, $routeParams) {

}
