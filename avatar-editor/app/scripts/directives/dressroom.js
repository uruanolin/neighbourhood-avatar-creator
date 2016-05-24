'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:dressRoom
 * @description
 * # dressRoom
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('dressRoom', function() {
        return {
            //templateUrl: 'views/dressroom.html',
            templateUrl: function(elem, attrs) {

                console.log(attrs.gender);
                var result;
                if (attrs.gender === 'man') {
                    result = 'views/dressroom-man.html';
                }else if (attrs.gender === 'woman') {
                    result = 'views/dressroom-woman.html';                    
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
