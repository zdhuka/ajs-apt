'use strict';

/* Controllers */

function DocListCtrl($scope, Docs) {

	 $scope.docs = Docs.query();
	  


}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function DocPreviewCtrl($scope, $routeParams, Docs) {
//  $scope.phone = Phone.get({phoneId: $routeParams.docId}, function(phone) {
//    $scope.mainImageUrl = phone.images[0];
//  });
//
//  $scope.setImage = function(imageUrl) {
//    $scope.mainImageUrl = imageUrl;
//  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
