'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.controller('projectsController', ['$scope', function ($scope) {

  var rootPath = "/assets/images/projects/";
  // Set nav items
  $scope.projectsItems = {
    'Ocean Blue Software': rootPath + 'oceanblue/thumb.png',
    'Environment Agency': rootPath + 'ea/thumb.jpg',
    'Language Pear': rootPath + 'languagepear/thumb.png',
    'Mubaloo': rootPath + 'mubaloo/thumb.png',
    'IntruderCam': rootPath + 'intrudercam/thumb.png',
    'HairBeaut': rootPath + 'hairbeaut/thumb.png',
    'Student Robotics': rootPath + 'sr/thumb.png'
  };

  $scope.currentProject = {
    isOpen: true
  }

}]);
