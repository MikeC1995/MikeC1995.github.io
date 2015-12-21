'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.controller('autoScrollController', ['$scope', '$anchorScroll', '$timeout', '$location', function ($scope, $anchorScroll, $timeout, $location) {

  $timeout(function() {
    console.log("Fired : " + $location.path().slice(1));
    if($location.path().slice(1) == 'thanks') {
      $anchorScroll('thanks-section');
    }
  }, 1000);
}]);
