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

                
                templateUrl: 'views/landing.html',
                controller: 'LandingCtrl',
                controllerAs: 'landing'
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
            'QUESTION_P3': 'DISTRITO SOY?',
            'LANDING_B1': 'Bienvenido a Distrito Zero!',
            'LANDING_B2': 'Descubre Barcelona paseándo',
            'LANDING_B3': 'por nuestra ciudad ...',
            'LANDING_B4': 'Y haz',
            'LANDING_B5': 'en',
            'LANDING_B6': 'tu distrito.',
            'SHARE_P1': 'COMPÁRTEME !',
            'SHARE_P2': 'EN LA RED',
            'SHARE_P3': 'QUE PREFIERAS...',
            'SHARE_P4': 'MÁS INFORMACIÓN'
        });

        $translateProvider.translations('cat', {
            'QUESTION_P1': 'M’AJUDES ?',
            'QUESTION_P2': 'DE QUIN',
            'QUESTION_P3': 'DISTRICTE SÓC?',
            'LANDING_B1': 'Benvingut a Districte Zero!',
            'LANDING_B2': 'Descobreix Barcelona passejant',
            'LANDING_B3': 'per la nostra ciutat...',
            'LANDING_B4': 'I fes',
            'LANDING_B5': 'al',
            'LANDING_B6': 'teu districte.',
            'SHARE_P1': 'COMPARTEIX-ME !',
            'SHARE_P2': 'EN LA XARXA',
            'SHARE_P3': 'QUE PREFEREIXIS...',
            'SHARE_P4': 'MÉS INFORMACIÓ'
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

/*

.run(function($http, $templateCache, $q) {

    var templates = ['dressroomman.html', 'dressroomwoman.html', 'sharemaleavatar.html', 'sharefemaleavatar.html'];

    templates.forEach(function(templateName){

        $http.get('views/' + templateName, {})
            .then(function(response) {

                $templateCache.put(templateName,
                    response.data
                );
                return response.data;

            }, function(response) {
                return $q.reject(response);
            });
    });
});
*/
