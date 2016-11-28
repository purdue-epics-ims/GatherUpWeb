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
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('krinaApp').run(function($rootScope){
    $rootScope.$on('$routeChangeStart', function(){
        var check = $rootScope.authData;
        if(!check) {
          window.location = '#/login';
        }
        else {
          window.location = '#/';
        }
      }
    );
  });
