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
            controllerAs: 'sexselector',
            controller: function () {
                var sexselector = this;
            },
            link: function postLink(scope/*, element, attrs*/) {

                scope.sexselector.selectGender = function (gender) {
                    appState.setGender(gender);

                    console.log(appState.getGender());
                };
            }
        };
    });
