'use strict';

angular.module('controle',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Atendimentos',{templateUrl:'views/Atendimento/search.html',controller:'SearchAtendimentoController'})
      .when('/Atendimentos/new',{templateUrl:'views/Atendimento/detail.html',controller:'NewAtendimentoController'})
      .when('/Atendimentos/edit/:AtendimentoId',{templateUrl:'views/Atendimento/detail.html',controller:'EditAtendimentoController'})
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
