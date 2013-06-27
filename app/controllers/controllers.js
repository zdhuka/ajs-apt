'use strict';

/* Controllers */

function fileListController($scope,$http) {
	$scope.previewURL="";
  
	$http.get("data/DataDetails.json").success(function(data){
		$scope.documents=data;
	});
  
	$scope.displayPreview=function(index){
		$scope.previewUrl=$scope.documents[index].docURL;
	}
}


function filePreviewController($scope, $routeParams) {
  
}

