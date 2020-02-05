'use strict';

// Declare app level module which depends on views, and core components
const app = angular.module('myApp', ['ngRoute'])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/person-list.html',
        controller: 'PersonListCtrl'
      })
      .when('/create', {
        templateUrl: 'views/person-create.html',
        controller: 'PersonCreateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  }]);
