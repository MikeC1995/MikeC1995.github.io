'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.controller('skillsController', ['$scope', function ($scope) {

  var rootPath = "/assets/images/svg/";
  // Set nav items
  $scope.skillsItems = {
    'languages': {
      'C': rootPath + 'c.svg',
      'C++': rootPath + 'cpp.svg',
      'Java': rootPath + 'java.svg',
      'Python': rootPath + 'python.svg'
    },
    'web': {
      'HTML5': rootPath + 'html5.svg',
      'CSS3': rootPath + 'css3.svg',
      'Less': rootPath + 'less.svg',
      'JavaScript': rootPath + 'javascript.svg',
      'jQuery': rootPath + 'jquery.svg',
      'AngularJS': rootPath + 'angular.svg',
      'Node.js': rootPath + 'node.svg',
      'PostgreSQL': rootPath + 'postgresql.svg'
    },
    'tools': {
      'Linux': rootPath + 'linux.svg',
      'Windows': rootPath + 'windows.svg',
      'Git': rootPath + 'git.svg',
      'GIMP': rootPath + 'gimp.svg'
    }
  };
}]);
