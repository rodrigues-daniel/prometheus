'use strict';

angular.module('controle',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Ordems',{templateUrl:'views/Ordem/search.html',controller:'SearchOrdemController'})
      .when('/Ordems/new',{templateUrl:'views/Ordem/detail.html',controller:'NewOrdemController'})
      .when('/Ordems/edit/:OrdemId',{templateUrl:'views/Ordem/detail.html',controller:'EditOrdemController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
