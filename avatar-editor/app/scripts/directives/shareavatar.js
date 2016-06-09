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
            controller: function($scope) {
                this.imgurl = $scope.imgurl;
            },

            link: function postLink(scope/*, element, attrs*/ ) {

                /*
                scope.$watch('imgurl', function() {

                    scope.shareavatar.imgurl = scope.imgurl;
                    scope.shareavatar.kk = '  asasasasa';

                    console.log(scope.imgurl);
                    console.log(scope.shareavatar);

                    var compiledHtml = $compile(element.html())(scope);
                    element.html(compiledHtml);
                });
                */

                scope.shareavatar.shareTwitter = function () {
                    //scope.shareavatar.imgurl = 'http://212.24.106.168/static/' + appState.getImageName() + '.jpg';
                    document.getElementById('shareTwitterLink').click();
                };

                scope.shareavatar.shareFacebook = function () {
                    //scope.shareavatar.imgurl = 'http://212.24.106.168/static/' + appState.getImageName() + '.jpg';
                    document.getElementById('shareFacebookLink').click();
                };

                scope.shareavatar.go = function () {
                    $window.open('http://www.districtezero.com', '_blank');
                };

            }
        };
    });
