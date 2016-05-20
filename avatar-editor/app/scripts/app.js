'use strict';

/**
 * @ngdoc overview
 * @name neighbourhoodAvatarCreatorApp
 * @description
 * # neighbourhoodAvatarCreatorApp
 *
 * Main module of the application.
 */
angular
  .module('neighbourhoodAvatarCreatorApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/magicScrollTest', {
        templateUrl: 'views/magicscrolltest.html',
        controller: 'MagicscrolltestCtrl',
        controllerAs: 'magicScrollTest'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
