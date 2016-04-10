'use strict';

/**
 * @ngdoc function
 * @name krinaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the krinaApp
 */
angular.module('krinaApp')
  .controller('LoginCtrl', function ($scope, $rootScope) {
  var myDataRef = new Firebase('https://dazzling-inferno-9963.firebaseio.com');

//This func is used for showing the real-time authenticated state
  myDataRef.onAuth(function(authData){
    // $scope.authData = authData;
    $rootScope.authData = authData;
    console.log(authData);
  });

//Login func
  $scope.login=function(ref){
    myDataRef.authWithPassword({
     'email': $scope.email,
     'password': $scope.password
    }, function(error, authData) {
     if (error) {
       window.alert('Login failed, please enter a valid username and password!', error);
      } else{
       console.log('Authenticated successfully!', authData);
       window.location = '#/main';
       location.reload();
     }
   });
  };

//Logout func
  $scope.logout=function(){
    myDataRef.unauth();
    console.log('Logout');
    window.location = '#/login';
};

//RegisterPage Navigation func
  $scope.regi=function(){
    window.location = '#/register';
  };


//Register func
  $scope.register=function(){
    myDataRef.createUser({
      email: $scope.email,
      password: $scope.password
    }, function(error, userData) {
      if (error) {
        switch (error.code) {
          case 'EMAIL_TAKEN':
          window.alert('The new user account cannot be created because the email is already in use.');
          console.log('The new user account cannot be created because the email is already in use.');
          break;
          case 'INVALID_EMAIL':
          window.alert('The specified email is not a valid email.');
          console.log('The specified email is not a valid email.');
          break;
          default:
          window.alert('The specified email is not a valid email.');
          console.log('Error creating user:', error);
        }
      } else {
        window.alert('Successfully created user account with uid:', userData.uid);
        console.log('Successfully created user account with uid:', userData.uid);
      }
    });
  };

});
