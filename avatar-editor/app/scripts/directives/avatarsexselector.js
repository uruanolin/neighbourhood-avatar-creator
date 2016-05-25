'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:avatarSexSelector
 * @description
 * # avatarSexSelector
 */
 
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('avatarSexSelector', function(appState) {
        return {
            templateUrl: 'views/avatarsexselector.html',
            restrict: 'E',
            scope: {
                renderdressroom: '='
            },
            controllerAs: 'sexselector',
            controller: function () {
                var sexselector = this;
                sexselector.male = {};
                sexselector.female = {};
                sexselector.male.hover = false;
                sexselector.female.hover = false;
            },
            link: function postLink(scope/*, element, attrs*/) {

                scope.sexselector.selectGender = function (gender) {
                    appState.setGender(gender);
                    // -> render dressroom directive in 'editor' route
                    scope.renderdressroom = true;
                };

                scope.sexselector.mouseenter = function (gender) {
                    scope.sexselector[gender].hover = true;
                };

                scope.sexselector.mouseleave = function (gender) {
                    scope.sexselector[gender].hover = false;
                };
            }
        };
    });
