'use strict';

angular.module('krinaApp')
.factory('loginService',function(){
   return {
     //login func
     login:function(ref,$scope){
        var myDataRef = new Firebase('https://dazzling-inferno-9963.firebaseio.com');
         myDataRef.authWithPassword({
         	'email': $scope.email,
         	'password': $scope.password
         }, function(error, authData) {
         	if (error) {
         		window.alert('Login failed, please enter a valid username and password!', error);
           } else{
         		console.log('Authenticated successfully!', authData);
            var temp = document.getElementById(ref).value;
            window.location = temp;
            var lo = document.getElementById('log');
            lo.style='display:';
        	}
        });
     },
     //logout func
     logout:function(){
       window.location = '#/login';
       var lo = document.getElementById('log');
       lo.style='display:none';
     },
     //
    //  //logged Check
     islogged:function(){

     }
   };
});
