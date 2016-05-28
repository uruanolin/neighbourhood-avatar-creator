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
        'services.config',
        'pascalprecht.translate' //,'services.defaultI18n'
        //--------------
    ])
    .config(function($routeProvider) {
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
                controllerAs: 'editor',
                resolve: {
                    'selectedDistrict': function (appState) {
                        return appState.getDistrictPromise();
                    }
                }
            })
            .when('/question', {
                templateUrl: 'views/question.html',
                controller: 'QuestionCtrl',
                controllerAs: 'question',
                resolve: {
                    'selectedAvatarConf': function (appState) {
                        return appState.getAvatarConfPromise();
                    }
                }
            })
            .when('/share', {
                templateUrl: 'views/share.html',
                controller: 'ShareCtrl',
                controllerAs: 'share',
                resolve: {
                    'selectedAnswer': function (appState) {
                        return appState.getAnswerPromise();
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(['$translateProvider', function($translateProvider) {

        $translateProvider.translations('en', {
            'TITLE': 'Hello',
            'FOO': 'This is a paragraph'
        });

        $translateProvider.translations('de', {
            'TITLE': 'Hallo',
            'FOO': 'Dies ist ein Absatz'
        });

        $translateProvider.preferredLanguage('de');
    }])

    .run(function($rootScope, $location) {

        $rootScope.$on('$routeChangeError', function(/*event,data*/) {
console.log('asasasasas');

//data.$$route.originalPath
            $location.path('/');
        });
    });
