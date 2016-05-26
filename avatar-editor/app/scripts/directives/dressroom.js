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
                } else if (appState.getGender() === 'female') {
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

                this.showBaf = {
                    skinColor: false,
                    hair: false,
                    glasses: false,
                    moustacheOrLips: false,
                    topClothe: false,
                    bottomClothe: false,
                    shoes: false
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


                scope.dressroom.openMenu = function(option) {
                    scope.dressroom.showBaf[option] = true;
                    console.log('enter');
                };

                scope.dressroom.closeMenu = function(option) {

                    console.log('LEAVE');

                    scope.dressroom.showBaf[option] = false;
                };

                scope.dressroom.closeAllMenu = function() {
                    for (var property in scope.dressroom.showBaf) {
                        if (scope.dressroom.showBaf.hasOwnProperty(property)) {
                            scope.dressroom.showBaf[property] = false;
                        }
                    }
                };

                scope.dressroom.clickMenu = function(option) {

                    console.log('mmmmmmmmmmmmm ');
                    for (var property in scope.dressroom.showBaf) {
                        if (scope.dressroom.showBaf.hasOwnProperty(property)) {
                            // do stuff
                            if (property === option) {
                                scope.dressroom.showBaf[property] = !scope.dressroom.showBaf[property];
                            } else {
                                scope.dressroom.showBaf[property] = false;
                            }
                        }
                    }
                };

                scope.dressroom.setAttribute = function(attributeName, elementId) {
                    scope.dressroom.conf[attributeName] = elementId;
                    // Repaint
                    console.log('patata');
                };

                scope.dressroom.editionFinished = function() {

                    // -> Verification

                    // -> save avatar conf

                    // -> redirect to /question
                };
            }
        };
    });
