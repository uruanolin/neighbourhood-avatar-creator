'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:landingLanguage
 * @description
 * # landingLanguage
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('landingLanguage', function($translate) {
        return {
            //templateUrl: 'views/landing01-scroll.html',
            templateUrl: 'views/landing01.html',

            restrict: 'E',
            scope: {
                displaylanguage: '='
            },
            controllerAs: 'landinglanguage',
            controller: function() {

                var landinglanguage = this;

            },
            link: function postLink(scope, element/*, attrs*/ ) {

                scope.landinglanguage.selectLang = function(lang) {

                    $translate.use(lang);

                    scope.displaylanguage = false;
                };

                element.scrollTop();
            }
        };
    });
