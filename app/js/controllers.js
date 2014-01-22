'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('DesktopCtrl', ['$scope', function($scope) {
    $scope.icons = [
      {
        name: 'LinkedIn',
        thumbnail: 'img/linkedin.png'
      },
      {
        name: 'Twitter',
        thumbnail: 'img/twitter.png'
      },
      {
        name: 'Github',
        thumbnail: 'img/github.png'
      },
      {
        name: 'Console',
        thumbnail: 'img/console.png'
      }
    ];
  }])
  .controller('MyCtrl2', [function() {

  }]);