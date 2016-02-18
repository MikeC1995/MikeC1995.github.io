'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.directive('header', function ($window) {
  var $win = angular.element($window);
  return {
    restrict: 'A',
    replace: false,
    templateUrl: '/app/partials/header/headerView.html',
    controller: 'headerController',
    controllerAs: 'header',
    link: function (scope, element, attrs) {
      var offsetTop = element.offset().top + element.height() - element.find('#navigation').outerHeight() - 20;
      $win.on('scroll', function (e) {
        if ($win.scrollTop() <= offsetTop) {
          element.children().first().addClass('big-header');
          element.children().first().children().first().removeClass('shadow');
          element.children().first().children().first().children().first().addClass('hidden');
        } else {
          element.children().first().removeClass('big-header');
          element.children().first().children().first().addClass('shadow');
          element.children().first().children().first().children().first().removeClass('hidden');
        }
      });
    }
  };
});
