'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.controller('appController', ['$scope', function ($scope) {

  // Set nav items
  $scope.navItems = {
    'Skills': '#skills-section',
    'Projects': '#projects-section',
    'Contact': '#contact-section',
    'CV': 'assets/documents/cv.pdf'
  };
}]);
