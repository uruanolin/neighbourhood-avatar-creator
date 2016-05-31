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
        'pascalprecht.translate', //,'services.defaultI18n'
        '720kb.socialshare'
        //'djds4rce.angular-socialshare'
        //--------------
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                /*
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
                */

                templateUrl: 'views/editor.html',
                controller: 'EditorCtrl',
                controllerAs: 'editor',
                resolve: {
                    'selectedDistrict': function(appState) {
                        return appState.getDistrictPromise();
                    }
                }
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
                    'selectedDistrict': function(appState) {
                        return appState.getDistrictPromise();
                    }
                }
            })
            .when('/question', {
                templateUrl: 'views/question.html',
                controller: 'QuestionCtrl',
                controllerAs: 'question',
                resolve: {
                    'selectedAvatarConf': function(appState) {
                        return appState.getAvatarConfPromise();
                    }
                }
            })
            .when('/share', {
                templateUrl: 'views/share.html',
                controller: 'ShareCtrl',
                controllerAs: 'share',
                resolve: {
                    'selectedAnswer': function(appState) {
                        return appState.getAnswerPromise();
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(['$translateProvider', function($translateProvider) {

        $translateProvider.translations('es', {
            'QUESTION_P1': '¿ME AYUDAS?',
            'QUESTION_P2': '¿DE QUÉ',
            'QUESTION_P3': 'DISTRITO SOY?'
        });

        $translateProvider.translations('cat', {
            'QUESTION_P1': 'M’AJUDES ?',
            'QUESTION_P2': 'DE QUIN',
            'QUESTION_P3': 'DISTRICTE SÓC?'
        });

        $translateProvider.preferredLanguage('cat');
    }])

.run(function($rootScope, $location) {

    $rootScope.$on('$routeChangeError', function( /*event,data*/ ) {

        console.log('$routeChangeError');
        //data.$$route.originalPath
        $location.path('/');
    });
});
