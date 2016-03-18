'use strict';

/**
 * @ngdoc function
 * @name krinaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the krinaApp
 */
angular.module('krinaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.jump=function(){
      window.location = "#/login"
      var temp = document.getElementById("ref");
      temp.value = "#/events";
  };
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
