'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.directive('header', function () {
  return {
    restrict: 'A',
    replace: false,
    templateUrl: '/app/partials/header/headerView.html',
    controller: 'headerController',
    controllerAs: 'header'
  };
});
