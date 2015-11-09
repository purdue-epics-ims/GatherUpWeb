'use strict';

/**
 * @ngdoc function
 * @name krinaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the krinaApp
 */
angular.module('krinaApp')
  .controller('LoginCtrl', function ($scope) {
  $scope.login = function() {
  var myDataRef = new Firebase('https://dazzling-inferno-9963.firebaseio.com');
    myDataRef.authWithPassword({
    	"email": $scope.email,
    	"password": $scope.password
    }, function(error, authData) {
    	if (error) {
    		console.log("Login Failed!", error);
    	} else{
    		console.log("Authenticated successfully!", authData);
    		//Redirect to main page here
    	}
    });
  };
});
