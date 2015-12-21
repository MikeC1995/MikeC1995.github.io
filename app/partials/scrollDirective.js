'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.directive('scrollTo', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      $elm.click(function() {
        var divId = attrs.scrollTo;
        angular.element('html,body').animate({
          // select the element the href points to
          scrollTop: angular.element(divId).offset().top - angular.element('#navigation').outerHeight()
        }, 1000);
      });
    }
  }
});
