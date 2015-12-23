'use strict';

var cssApp = angular.module('portfolioApp');

portfolioApp.controller('headerController', ['$scope', function ($scope) {

  $scope.nav = {
    state: false
  }
  $scope.toggleNav = function() {
    $scope.nav.state = !$scope.nav.state;
  }
  /*$scope.nav.isOpen = function() {
    if($scope.nav.open) {
      return 'nav-open';
    } else {
      return 'nav-closed';
    }
  }*/
}]);
