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


            controllerAs: 'shareavatar',
            controller: function() {

                var shareavatar = this;

            },

            link: function postLink(scope, element /*, attrs*/ ) {
                scope.shareavatar.imgurl = '';

                var shareHTML = null,
                    randomInt = randomGenerator.getRandomInt(1, 12);

                if (randomInt < 10) {
                    randomInt = '0' + randomInt;
                } else {
                    randomInt = parseInt(randomInt);
                }

                if (appState.getGender() === 'male') {
                    shareHTML = templates.getShareMale();
                } else if (appState.getGender() === 'female') {
                    shareHTML = templates.getShareFemale();
                }

                scope.$watch('imgurl', function() {

                    var compiledHtml = $compile(shareHTML)(scope);
                    element.html(compiledHtml);
                });


                scope.shareavatar.shareTwitter = function () {
                    scope.shareavatar.imgurl = 'http://212.24.106.168/static/' + appState.getImageName() + '.jpg';
                    document.getElementById('shareTwitterLink').click();
                }

                scope.shareavatar.shareFacebook = function () {
                    scope.shareavatar.imgurl = 'http://212.24.106.168/static/' + appState.getImageName() + '.jpg';
                    document.getElementById('shareFacebookLink').click();
                }

                scope.shareavatar.go = function () {
                    $window.open('http://www.districtezero.com', '_blank')
                };

            }
        };
    });
