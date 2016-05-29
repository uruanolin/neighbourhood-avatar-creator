'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:shareAvatar
 * @description
 * # shareAvatar
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('shareAvatar', function($http, appState, $q, randomGenerator) {
        return {

            restrict: 'E',

            controllerAs: 'share',
            controller: function() {

                var share = this;

                share.avatarHtml = appState.getAvatarHtml();
                share.backgroundHtml = null;
                share.finalShotHtml = null;
                share.avatarURI = null;
            },

            link: function postLink(scope, element /*, attrs*/ ) {

                var sharePath = null,
                    randomInt = randomGenerator.getRandomInt(1, 12);

                if (randomInt < 10) {
                    randomInt = '0' + randomInt;
                } else {
                    randomInt = parseInt(randomInt);
                }

                if (appState.getGender() === 'male') {
                    sharePath = 'views/sharemaleavatar.html';
                } else if (appState.getGender() === 'female') {
                    sharePath = 'views/sharefemaleavatar.html';
                }




                /*
                                //return
                                $http.get('images/original-svg-share/FONS-' + randomInt + '.svg', {

                                        params: {}
                                    })
                                    .then(function(response) {

                                        scope.share.backgroundHtml = response.data;

                                        // cut svg closing tag (</svg>)
                                        scope.share.backgroundHtml = scope.share.backgroundHtml.substring(0, scope.share.backgroundHtml.search('</svg>'));

                                        scope.share.finalShotHtml = scope.share.backgroundHtml + '<g transform="translate(310,550) scale(1.2)">' + scope.share.avatarHtml + '</g></svg>';

                                        //element.html(scope.share.backgroundHtml);
                                        element.html(scope.share.finalShotHtml);

                                        return response.data;

                                    }, function(response) {
                                        return $q.reject(response);
                                    });
                */

                // cargar share template de male or female
                $http.get(sharePath, {
                        params: {}
                    })
                    .then(function(response1) {

                            element.html(response1.data);
                            return response1.data;
                        },
                        function(response1) {
                            return $q.reject(response1);
                        });


                function triggerDownload(imgURI) {
                    var evt = new MouseEvent('click', {
                        view: window,
                        bubbles: false,
                        cancelable: true
                    });

                    var a = document.createElement('a');
                    //a.setAttribute('download', 'MY_COOL_IMAGE.png');
                    a.setAttribute('download', 'MY_COOL_IMAGE.jpeg');
                    a.setAttribute('href', imgURI);
                    a.setAttribute('target', '_blank');

                    a.dispatchEvent(evt);
                }

                scope.share.avatarURI = appState.getFinalScreenshotURI();
                triggerDownload(scope.share.avatarURI);

            }
        };
    });
