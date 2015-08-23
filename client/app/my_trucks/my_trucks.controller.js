'use strict';

angular.module('logistaApp')
  .controller('MyTrucksCtrl', function ($scope, Auth, $location) {

    //$scope.isLoggedIn = Auth.isLoggedIn;
    //if (!$scope.isLoggedIn()){
    //
    //  $location.path('/login');
    //}
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
