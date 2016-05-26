'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:avatarQuestion
 * @description
 * # avatarQuestion
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('avatarQuestion', function(appState) {
        return {
            templateUrl: function() {
                var result;
                if (appState.getGender() === 'male') {
                    result = 'views/avatarquestionman.html';
                } else if (appState.getGender() === 'female') {
                    result = 'views/avatarquestionwoman.html';
                }
                return result;
            },
            restrict: 'E',
            controllerAs: 'question',
            controller: function () {

                // igual es innecesario
                var question = this;
                question.gender = appState.getGender();

                // obtener un barrio random
            },
            link: function postLink(/*scope, element, attrs*/) {

                // -> cargar monigote
                // -> ocultar resto de monigotes

                //meter textos
            }
        };
    });
