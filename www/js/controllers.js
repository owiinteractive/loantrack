angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    //$scope.$on('$ionicView.enter', function(e) {
    //});

})

.controller('HomeController', function($scope) {

})

.controller('AddLoanController', function($scope, $ionicPlatform, $cordovaContacts) {

    $ionicPlatform.ready(function() {
        $cordovaContacts.find({}).then(function(allContacts) {
            $scope.contacts = allContacts;
        });
    });

});
