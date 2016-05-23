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
    'ngTouch',

    //--------------
    'services.config'
    //--------------
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
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/editor', {
        templateUrl: 'views/editor.html',
        controller: 'EditorCtrl',
        controllerAs: 'editor'
      })
      .when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl',
        controllerAs: 'question'
      })
      .when('/share', {
        templateUrl: 'views/share.html',
        controller: 'ShareCtrl',
        controllerAs: 'share'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
