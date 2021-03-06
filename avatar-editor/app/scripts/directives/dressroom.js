'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:dressRoom
 * @description
 * # dressRoom
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('dressRoom', function(appState, $http, $q, $compile, $location) {
        return {
            //templateUrl: 'views/dressroomman.html',
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

                this.avatarName = '';
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

                this.displayElement = {
                    hair: [false, false, false, false, false, false, false, false, false],
                    glasses: [false, false, false, false, false, false, false, false, false],
                    moustacheOrLips: [false, false, false, false, false, false, false],
                    topClothe: [false, false, false, false, false, false, false, false, false, false],
                    bottomClothe: [false, false, false, false, false, false, false, false],
                    shoes: [false, false, false, false, false, false, false, false, false, false],
                    topLeaf: true,
                    bottomLeaf: true
                };

                this.skinColorPalette = [
                    {adret: '#FBCC9A', ubac: '#CB9866'},
                    {adret: '#E3C8B2', ubac: '#BA8A69'},
                    {adret: '#E5BEA1', ubac: '#9D7355'},
                    {adret: '#DDDD89', ubac: '#C0BE60'},
                    {adret: '#84674E', ubac: '#64442B'},
                    {adret: '#704D29', ubac: '#422915'}
                ];

                this.currentSkinColorPalette = this.skinColorPalette[0];

            },
            link: function postLink(scope, element /*, attrs*/ ) {


                appState.initAvatarConf();

/*
                var compiledHtml = $compile(element.html())(scope);
                element.html(compiledHtml);
*/

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

                    //elementId.lastIndexOf('_');
                    var optionNum = elementId.substring(elementId.lastIndexOf('_') + 1);

                    if (optionNum === 'NOTHING') {

                        scope.dressroom.displayElement[attributeName].forEach(function(boolDisplay, index) {
                            scope.dressroom.displayElement[attributeName][index] = false;
                        });

                    } else {

                        if (attributeName === 'skinColor') {

                            scope.dressroom.currentSkinColorPalette = this.skinColorPalette[optionNum - 1];


                        }else{

                            if (attributeName === 'bottomClothe') {
                                scope.dressroom.displayElement.bottomLeaf = false;
                            }

                            scope.dressroom.displayElement[attributeName].forEach(function(boolDisplay, index) {

                                if (index === parseInt(optionNum - 1)) {
                                    scope.dressroom.displayElement[attributeName][index] = true;
                                } else {
                                    scope.dressroom.displayElement[attributeName][index] = false;
                                }
                            });
                        }
                    }
                };

                scope.dressroom.editionFinished = function() {

                    // -> Verification
                    appState.setName(scope.dressroom.avatarName);

                    // -> save avatar conf
                    appState.setAvatarConf(scope.dressroom.conf);

                    // -> save avatar raw html
                    appState.setAvatarHtml(document.getElementById('customized-avatar').innerHTML);
console.log(document.getElementById('customized-avatar').innerHTML);

                    // -> redirect to /question
                    $location.path('/question');
                };
            }
        };
    });
