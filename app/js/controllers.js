//'use strict';
//
///* Controllers */
//
//function PhoneListCtrl($scope, Phone) {
//  $scope.phones = Phone.query();
//  $scope.tablets="samsung";
//  $scope.orderProp = 'age';
//}
//
////PhoneListCtrl.$inject = ['$scope', 'Phone'];
//
//
//
//function PhoneDetailCtrl($scope, $routeParams, Phone) {
//  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//    $scope.mainImageUrl = phone.images[0];
//  });
//
//  $scope.setImage = function(imageUrl) {
//    $scope.mainImageUrl = imageUrl;
//  }
//}
//
////PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];

function dashboard($scope, Components) {
//	$scope.phones = Phone.query();
//	$scope.tablets = "samsung";
//	$scope.orderProp = 'age';
}

Dashboard.$inject = [ '$scope', 'Components' ];
