'use strict';

/**
 * @ngdoc function
 * @name krinaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the krinaApp
 */
angular.module('krinaApp')
  .controller('LoginCtrl', function ($scope, loginService) {
    $scope.login=function(ref){
     loginService.login(ref, $scope);
  };
  $scope.logout=function(){
   loginService.logout();
};

//Work done by last team
  // $scope.login = function(ref) {
  //  var myDataRef = new Firebase('https://dazzling-inferno-9963.firebaseio.com');
  //   myDataRef.authWithPassword({
  //   	'email': $scope.email,
  //   	'password': $scope.password
  //   }, function(error, authData) {
  //   	if (error) {
  //   		//window.alert("Login failed, please enter a valid username and password!", error);
  //       window.alert('Login failed, please enter a valid username and password!');
  //     } else{
  //   		console.log('Authenticated successfully!', authData);
  //       //alert("Authenticated successfully!");
  //       var temp = document.getElementById(ref).value;
  //       window.location = temp;
  //       var lo = document.getElementById('log');
  //       lo.style='display:';
  //   	}
  //   });
  // };
});
