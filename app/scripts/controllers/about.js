'use strict';

/**
 * @ngdoc function
 * @name gatherUpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gatherUpApp
 */
angular.module('gatherUpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
