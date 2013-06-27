'use strict';

/* Controllers */

function fileListController($scope, $http) {
	$scope.previewURL = "";

	
	$http.get("http://192.168.112.216:8001/docs").success(function(data){
	    $scope.documents=data;
	 });
	 
	 $scope.displayPreview = function(index) {
	  $scope.previewUrl = $scope.documents[index].docurl;
	 }
}

function filePreviewController($scope, $routeParams) {

}
