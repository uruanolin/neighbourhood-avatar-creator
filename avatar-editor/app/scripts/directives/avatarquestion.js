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

                question.id = getRandomInt(0, 9);
                question.display = [false, false, false, false, false, false, false, false, false, false];
                question.display[question.id] = true;

                console.log(question.id);

                question.districts = [
                    'Sant Martí',
                    'Sarrià-Sant Gervasi',
                    'Ciutat Vella',
                    'Sants-Montjuïc',
                    'Les Corts',
                    'Gràcia',
                    'Horta-Guinardó',
                    'Sant Andreu',
                    'Eixample',
                    'Nou Barris'
                ];

                question.districtsAnswersOrder = [
                    'Eixample',
                    'Gràcia',
                    'Les Corts',
                    'Nou Barris',
                    'Sant Andreu',
                    'Ciutat Vella',
                    'Sant Martí',
                    'Horta-Guinardó',
                    'Sants-Montjuïc',
                    'Sarrià-Sant Gervasi'
                ];

                console.log(question.districts[question.id]);

                question.answerBlock = null;
                question.answerPositions = [
                    ['Eixample', 'Gràcia', 'Les Corts'],
                    ['Nou Barris', 'Sant Andreu', 'Ciutat Vella', 'Sant Martí'],
                    ['Horta-Guinardó', 'Sants-Montjuïc', 'Sarrià-Sant Gervasi']
                ];
                // calcular en que sección esta la respuesta
                question.answerPositions.forEach(function(_answerBlock, index) {
                    if (_answerBlock.indexOf(question.districts[question.id]) !== -1) {
                        question.answerBlock = index;
                    }
                });

                console.log(question.answerBlock);

                question.displayAnswer = [false, false, false, false, false, false, false, false, false, false];
                question.displayAnswer[question.districtsAnswersOrder.indexOf(question.districts[question.id])] = true;

                // seleccionar la primera respuesta en los otros blokes

                if (0 === question.answerBlock) {
                    question.displayAnswer[3] = true;
                    question.displayAnswer[7] = true;
                } else if (1 === question.answerBlock) {
                    question.displayAnswer[0] = true;
                    question.displayAnswer[7] = true;
                } else if (2 === question.answerBlock) {
                    question.displayAnswer[0] = true;
                    question.displayAnswer[3] = true;
                }


            },
            link: function postLink(scope /*, element, attrs*/ ) {

                scope.question.answer = function(answerNum) {


                    console.log('respuesta correcta: ' + scope.question.districts[scope.question.id]);
                    console.log('respuesta correcta: ' + scope.question.answerBlock);
                    console.log('respondido: ' + answerNum);

                    if (answerNum === scope.question.id) {
                        console.log('---> CORRECT !!!');
                    } else {
                        console.log('---> FAIL !!!');
                    }

                    // guardar en el service la respuesta
                    appState.setAnswer({
                        correctAnswer: scope.question.districts[scope.question.id],
                        realAnswer: scope.question.districts[answerNum]
                    });

                    // SET AVATAR NAME IN appState !!!!!!!

                    // post hacia el server toda la info
                    api.postAvatar(appState.getState());

                    // change route hacia el share
                    $location.path('/share');

                };
            }
        };
    });
