'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:avatarQuestion
 * @description
 * # avatarQuestion
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('avatarQuestion', function(appState, $location, api) {
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

                question.displayAnswer = [false, false, false, false, false, false, false, false, false, false];
                question.displayAnswer[question.id] = true;

                // calcular en que sección esta la respuesta
                question.answer = 1;

                question.districts = [
                    'Sant Martí',
                    'Sarrià-Sant Gervasi',
                    'Ciutat Vella',
                    'Sants-Montjuïc',
                    'Les Corts',
                    'Gracia',
                    'Horta-Guinardó',
                    'Sant Andreu',
                    'Eixample',
                    'Nou Barris'
                ];

                // seleccionar la primera respuesta en los otros blokes


            },
            link: function postLink(scope/*, element, attrs*/ ) {

                scope.question.answer = function (answerNum){

                    if (answerNum === scope.question.answer) {

                    }

                    // guardar en el service la respuesta
                    appState.setAnswer({
                        correctAnswer: scope.question.districts[scope.question.id],
                        realAnswer: scope.question.districts[answerNum]
                    });


console.log(appState.getState());
                    // SET AVATAR NAME IN appState !!!!!!!

                    // post hacia el server toda la info
                    api.postAvatar(appState.getState());

                    // change route hacia el share
                    $location.path('/share');

                };
            }
        };
    });
