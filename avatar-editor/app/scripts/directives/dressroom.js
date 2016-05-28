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
            //templateUrl: 'views/dressroom.html',
            /*
            templateUrl: function() {
                var result;
                if (appState.getGender() === 'male') {
                    result = 'views/dressroomman.html';
                } else if (appState.getGender() === 'female') {
                    result = 'views/dressroomwoman.html';
                }
                return result;
            },
            */
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

                this.displayElement = {
                    hair: [false, false, false, false, false, false, false, false, false],
                    glasses: [false, false, false, false, false, false, false, false, false],
                    moustacheOrLips: [false, false, false, false, false, false, false],
                    topClothe: [false, false, false, false, false, false, false, false, false, false],
                    bottomClothe: [false, false, false, false, false, false, false, false],
                    shoes: [false, false, false, false, false, false, false, false, false, false]
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


                // Print avatar

                // -> home
                // -> fulles IF NO pants

                // -> dona
                // -> abaix fulles IF NO pants
                // -> a dalt fulles IF NO shirt

                var avatarPath = null,
                    dressroomPath = null,
                    svgGroupString = null,
                    dressroomHTML = null;


                if (appState.getGender() === 'male') {
                    avatarPath = 'images/svg/avatar-male-vestuari.svg';
                    dressroomPath = 'views/dressroomman.html';

                } else if (appState.getGender() === 'female') {
                    avatarPath = 'images/svg/avatar-female-vestuari.svg';
                    dressroomPath = 'views/dressroomwoman.html';
                }


                $http.get(dressroomPath, {
                        params: {}
                    })
                    .then(function(response1) {


                            dressroomHTML = response1.data.substring(0, response1.data.search('</svg>'));

                            return $http.get(avatarPath, {

                                    params: {}
                                })
                                .then(function(response) {

                                    svgGroupString = response.data;
                                    // cut till <g> tag (group tag included)
                                    svgGroupString = svgGroupString.substring(svgGroupString.search('<g>') + 3);
                                    // cut svg closing tag (</svg>)
                                    svgGroupString = svgGroupString.substring(0, svgGroupString.search('</svg>'));

                                    svgGroupString = '<g transform="translate(960.05, 540.5)">' + svgGroupString;
                                    console.log(svgGroupString);
                                    var compiledHTML = $compile(dressroomHTML + svgGroupString + '</svg></div>')(scope);
                                    element.html(compiledHTML);

                                    return response.data;

                                }, function(response) {
                                    return $q.reject(response);
                                });

                        },
                        function(response1) {
                            return $q.reject(response1);
                        });



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
                        scope.dressroom.displayElement[attributeName].forEach(function(boolDisplay) {
                            boolDisplay = false;
                        });

                    } else {

                        if (attributeName === 'skinColor') {

                            scope.dressroom.currentSkinColorPalette = this.skinColorPalette[optionNum - 1];


                        }else{
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

                    // -> save avatar conf
                    appState.setAvatarConf(scope.dressroom.conf);

                    // -> redirect to /question
                    $location.path('/question');
                };
            }
        };
    });
