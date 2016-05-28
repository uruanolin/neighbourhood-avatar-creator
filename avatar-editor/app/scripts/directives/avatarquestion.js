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

                console.log(appState.getGender());
                if (appState.getGender() === 'male') {
                    result = 'views/avatarquestionman.html';
                } else if (appState.getGender() === 'female') {
                    result = 'views/avatarquestionwoman.html';
                }
                return result;
            },
            restrict: 'E',
            controllerAs: 'question',
            controller: function() {

                // igual es innecesario
                var question = this;
                question.gender = appState.getGender();

                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                question.id = getRandomInt(0,9);
                question.display = [false, false, false, false, false, false, false, false, false, false];
                question.display[question.id] = true;
            },
            link: function postLink( /*scope, element, attrs*/ ) {

                // -> cargar monigote
                // -> ocultar resto de monigotes

                //meter textos
            }
        };
    });
