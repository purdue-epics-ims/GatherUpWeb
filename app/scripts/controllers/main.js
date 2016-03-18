'use strict';

/**
 * @ngdoc function
 * @name krinaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the krinaApp
 */
angular.module('krinaApp')
  .controller('MainCtrl', function ($scope,loginService) {
    $scope.logout=function(){
     loginService.logout();
  };
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
