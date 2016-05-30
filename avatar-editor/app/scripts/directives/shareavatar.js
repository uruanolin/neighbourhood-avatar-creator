'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:shareAvatar
 * @description
 * # shareAvatar
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('shareAvatar', function($http, appState, $q, randomGenerator, $compile) {
        return {

            restrict: 'E',


            scope: {
                imgurl: '=imgurl'
            },


            controllerAs: 'shareavatar',
            controller: function() {

                var shareavatar = this;

            },

            link: function postLink(scope, element /*, attrs*/ ) {
                scope.shareavatar.imgurl = 'http://i2.cdnds.net/13/48/300x225/ustv-family-guy-brian.jpg';
                var sharePath = null,
                    randomInt = randomGenerator.getRandomInt(1, 12);

                if (randomInt < 10) {
                    randomInt = '0' + randomInt;
                } else {
                    randomInt = parseInt(randomInt);
                }

                if (appState.getGender() === 'male') {
                    sharePath = 'views/sharemaleavatar.html';
                } else if (appState.getGender() === 'female') {
                    sharePath = 'views/sharefemaleavatar.html';
                }

                scope.$watch('imgurl', function() {

                    // cargar share template de male or female
                    $http.get(sharePath, {
                            params: {}
                        })
                        .then(function(response1) {

                                var compiledHtml = $compile(response1.data)(scope);
                                element.html(compiledHtml);
                                //element.html(response1.data);
                                return response1.data;
                            },
                            function(response1) {
                                return $q.reject(response1);
                            });
                });





            }
        };
    });
