'use strict';

/**
 * @ngdoc function
 * @name gatherUpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gatherUpApp
 */
angular.module('gatherUpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
