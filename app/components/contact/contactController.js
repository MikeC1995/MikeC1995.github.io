'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.controller('contactController', ['$scope', '$location', function ($scope, $location) {

  $scope.path = function() { return $location.path(); }
}]);
