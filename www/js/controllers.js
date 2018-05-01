angular.module('starter.controllers', ['ionic.native'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    //$scope.$on('$ionicView.enter', function(e) {
    //});

})

.controller('HomeController', function($scope, $ionicPlatform, $cordovaDeviceMotion) {

    $ionicPlatform.ready(function() {
        $cordovaDeviceMotion.getCurrentAcceleration().then(function(acceleration) {
            $scope.x = acceleration.x;
            $scope.y = acceleration.y;
            $scope.z = acceleration.z;
        }), function() {
            console.log("Failed to get acceleration");
        }
    });

})

.controller('AddLoanController', function($scope, $ionicPlatform) {

    $ionicPlatform.ready(function() {
        $cordovaContacts.find({}).then(function(allContacts) {
            $scope.contacts = allContacts;
        });
    });

});
