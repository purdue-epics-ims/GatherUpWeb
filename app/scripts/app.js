'use strict';

/**
 * @ngdoc overview
 * @name krinaApp
 * @description
 * # krinaApp
 *
 * Main module of the application.
 */
angular
  .module('krinaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'LoginCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('krinaApp').run(function($rootScope){
    $rootScope.$on('$routeChangeStart', function(){
        var check = $rootScope.authData;
        console.log('show:',check);
        if(!check) {
          window.location = '#/login';
          console.log('pass');
        }
        else { console.log('!pass');}
      }
    );
  });
