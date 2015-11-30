'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.directive('boidsCanvas', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var options = {
        background: '#34495e',
        density: 'high',
        speed: 'slow',
        interactive: true,
        mixedSizes: true,
        boidColours: ["#3498db", "#e74c3c", '#2ecc71', '#9b59b6', '#f1c40f', '#1abc9c', "#e67e22"]
      };
      var boidsCanvas = new BoidsCanvas(element[0], options);
    }
  };
});
