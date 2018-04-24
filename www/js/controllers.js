angular.module('starter.controllers', ['ionic.native'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    //$scope.$on('$ionicView.enter', function(e) {
    //});

})

.controller('HomeController', function($scope) {

})

.controller('AddLoanController', function($scope, $ionicPlatform, $cordovaContacts) {

    $ionicPlatform.ready(function() {
        $scope.contacts = [
            {displayName: "Alex"}
        ];
    });

/*
    $ionicPlatform.ready(function() {
        $cordovaContacts.find({}).then(function(allContacts) {
            $scope.contacts = allContacts;
        });
    });
*/
});
