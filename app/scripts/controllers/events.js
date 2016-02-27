'use strict';

/**
 * @ngdoc functions
 * @name krinaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the krinaApp
 */
angular.module('krinaApp')
  .controller('EventsCtrl', function ($scope) {
  $scope.eventsubmit = function() {
  	var myEventRef = new Firebase('https://dazzling-inferno-9963.firebaseio.com/event');
    
    var createGuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    })};
    var dateID = $scope.eventdate.getFullYear()*366+$scope.eventdate.getMonth()*31+$scope.eventdate.getDate();
    /*if($scope.eventdate.getYear()!=0){
      dateID = $scope.eventdate.getYear()*366+$scope.eventdate.getMonth()*31+$scope.eventdate.getDay();
    }*/
    var eventObject = {
      "name": $scope.eventname,
      "description": $scope.eventdescription,
      "date": $scope.eventdate.toDateString(),
      "dateID": dateID,
      "schema": "event"
    }
    myEventRef.push(eventObject);
}
});