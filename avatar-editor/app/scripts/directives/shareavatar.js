'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:shareAvatar
 * @description
 * # shareAvatar
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('shareAvatar', function($http, appState, $q, randomGenerator, $compile, templates, $window) {
        return {

            restrict: 'E',


            scope: {
                imgurl: '=imgurl'
            },

            templateUrl: function() {
                var result;
                if (appState.getGender() === 'male') {
                    result = 'views/sharemaleavatar.html';
                } else if (appState.getGender() === 'female') {
                    result = 'views/sharefemaleavatar.html';
                }
                return result;
            },

            controllerAs: 'shareavatar',
            controller: function() {

                var shareavatar = this;

            },

            link: function postLink(scope, element /*, attrs*/ ) {
                scope.shareavatar.imgurl = '';

                var randomInt = randomGenerator.getRandomInt(1, 12);

                if (randomInt < 10) {
                    randomInt = '0' + randomInt;
                } else {
                    randomInt = parseInt(randomInt);
                }

                scope.$watch('imgurl', function() {

                    var compiledHtml = $compile(element.html())(scope);
                    element.html(compiledHtml);
                });


                scope.shareavatar.shareTwitter = function () {
                    scope.shareavatar.imgurl = 'http://212.24.106.168/static/' + appState.getImageName() + '.jpg';
                    document.getElementById('shareTwitterLink').click();
                };

                scope.shareavatar.shareFacebook = function () {
                    scope.shareavatar.imgurl = 'http://212.24.106.168/static/' + appState.getImageName() + '.jpg';
                    document.getElementById('shareFacebookLink').click();
                };

                scope.shareavatar.go = function () {
                    $window.open('http://www.districtezero.com', '_blank');
                };

            }
        };
    });
