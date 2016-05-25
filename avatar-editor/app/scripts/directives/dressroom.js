'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:dressRoom
 * @description
 * # dressRoom
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('dressRoom', function(appState) {
        return {
            //templateUrl: 'views/dressroom.html',
            templateUrl: function() {
                var result;
                if (appState.getGender() === 'male') {
                    result = 'views/dressroomman.html';
                }else if (appState.getGender() === 'female') {
                    result = 'views/dressroomwoman.html';
                }
                return result;
            },
            restrict: 'E',
            /*
            scope: {

            },
            */
            controllerAs: 'dressroom',
            controller: function() {

                this.conf = {

                    skinColor: null,
                    hair: null,
                    glasses: null,
                    moustacheOrLips: null,
                    selectTopClothe: null,
                    selectBottomClothe: null,
                    shoes: null
                };
            },
            link: function postLink(scope /*, element, attrs*/ ) {


                // Print avatar

                // -> home
                // -> fulles IF NO pants

                // -> dona
                // -> abaix fulles IF NO pants
                // -> a dalt fulles IF NO shirt

                function paintAvatar() {

                    // -> cargar nino

                    // -> skin color

                    // -> fulles?

                    // -> ulleres

                    // -> cabell

                    // -> moustacheOrLips

                    // -> shirt
                    // -> pants

                    // -> shoes

                    // -> translate Avatar !
                }


                scope.dressroom.openMenu = function() {
                    console.log('svg click');
                };

                scope.dressroom.setAttribue = function(attributeName, elementId) {
                    scope.dressroom[attributeName] = elementId;

                    // Modificar el svg
                };

                scope.dressroom.editionFinished = function() {

                    // -> Verification

                    // -> save avatar conf

                    // -> redirect to /question
                };
            }
        };
    });
