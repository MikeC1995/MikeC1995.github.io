'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.controller('appController', ['$scope', function ($scope) {

  // Set nav items
  $scope.navItems = {
    'Skills': '#skills',
    'Projects': '#projects',
    'Contact': '#contact',
    'CV': '#cv'
  };
}]);
