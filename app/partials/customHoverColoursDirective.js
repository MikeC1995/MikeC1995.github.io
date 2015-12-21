'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.directive('customHoverColours', function () {
  return function(scope, element, attrs) {
    attrs.$observe('color', function(value) {
      element.css({ 'color' : value });
      scope.color = value;
      element.css({ 'color' : scope.color, 'border-color' : scope.color });
    });
    attrs.$observe('background', function(value) {
      element.css({ 'background-color' : value });
      scope.background = value;
      element.css({ 'background-color' : scope.background });
    });

    element.bind('mouseenter', function() {
      element.css({ 'background-color' : scope.color });
      element.css({ 'color' : scope.background, 'border-color' : scope.background });
    });
    element.bind('mouseleave', function() {
      element.css({ 'background-color' : scope.background });
      element.css({ 'color' : scope.color, 'border-color' : scope.color });
    });
  }
});
