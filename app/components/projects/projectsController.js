'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.controller('projectsController', ['$scope', function ($scope) {

  var rootPath = "/assets/images/projects/";

  $scope.projects = {
    'Ocean Blue Software': {
      thumb: rootPath + 'oceanblue/thumb.png',
      graphic: rootPath + 'oceanblue/graphic.png',
      description: "Software engineering internship in the digital television industry. Designed and implemented Ocean Blue’s current set top box user interface. Extended their proprietary backend technology suite DTVKit and integrated it with the UI.",
      demoPath: '/documents/oceanblue.pdf',
      background: '#2980b9',
      color: '#fff'
    },
    'Environment Agency': {
      thumb: rootPath + 'ea/thumb.jpg',
      graphic: rootPath + 'ea/graphic.png',
      description: "Lead UI/UX developer and client communication lead on a team hired to build a crossplatform mobile app visualising the EA’s various geographic data sets.",
      demoPath: '/documents/ea.pdf',
      background: '#1B5E20',
      color: '#fff'
    },
    'Language Pear': {
      thumb: rootPath + 'languagepear/thumb.png',
      graphic: rootPath + 'languagepear/graphic.png',
      description: "A cross-platform language practice platform.",
      demoPath: '/documents/languagepear.pdf',
      background: '#27ae60',
      color: '#fff'
    },
    'Mubaloo': {
      thumb: rootPath + 'mubaloo/thumb.png',
      graphic: rootPath + 'mubaloo/graphic.png',
      description: "Full-stack developer of Appiphany, a real-time location-based message sharing application.",
      demoPath: '/documents/mubaloo.pdf',
      background: '#3B3B38',
      color: '#fff'
    },
    'IntruderCam': {
      thumb: rootPath + 'intrudercam/thumb.png',
      graphic: rootPath + 'intrudercam/graphic.png',
      description: "Developed and released a motion detection application to the Windows Phone store, which now has 8000+ downloads and a rating of 4.8 stars.",
      demoPath: '/documents/intrudercam.pdf',
      background: '#F3EA29',
      color: '#333'
    },
    'HairBeaut': {
      thumb: rootPath + 'hairbeaut/thumb.png',
      graphic: rootPath + 'hairbeaut/graphic.png',
      description: "Designed and built hairbeaut.com, a social network for the hair and beauty industry, using the Ning platform and CSS.",
      demoPath: '/documents/hairbeaut.pdf',
      background: '#CECFCE',
      color: '#333'
    },
    'Student Robotics': {
      thumb: rootPath + 'sr/thumb.png',
      graphic: rootPath + 'sr/graphic.png',
      description: "Lead developer in team winning second place and the Committee Award in a national robotics competition.",
      demoPath: '/documents/sr.pdf',
      background: '#253571',
      color: '#fff'
    }
  };

  $scope.currentProject = {
    isOpen: false,
    name: 'Ocean Blue Software'
  }

  $scope.openProject = function(projectName) {
    $scope.currentProject.name = projectName;
    $scope.currentProject.isOpen = true;
  }

}]);
