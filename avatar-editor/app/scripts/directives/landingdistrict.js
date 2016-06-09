'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:landingDistrict
 * @description
 * # landingDistrict
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('landingDistrict', function(appState, $location) {
        return {
            templateUrl: 'views/landing02.html',
            restrict: 'E',
            scope: {

            },
            controllerAs: 'landingdistrict',
            controller: function() {

                var landingdistrict = this;

            },
            link: function postLink(scope, element, attrs) {

                scope.landingdistrict.clickDistrict = function(district) {
                    appState.setDistrict(district);
                    $location.path('/editor');
                };

                element.scrollTop();
            }
        };
    });
