'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:svgToJpeg
 * @description
 * # svgToJpeg
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('svgToJpeg', function($http, appState, $q, randomGenerator, api) {
        return {
            template: '<svg id="originalSVG" height="626" width="626"></svg><canvas id="canvas" width="626" height="626"></canvas>',
            restrict: 'E',

            scope: {
                imgurl: '=imgurl'
            },

            controllerAs: 'exportsvg',
            controller: function() {

                var exportsvg = this;

                exportsvg.avatarHtml = appState.getAvatarHtml();
                exportsvg.backgroundHtml = null;
                exportsvg.finalShotHtml = null;
                exportsvg.watermarkHtml = null;
                exportsvg.randomInt = randomGenerator.getRandomInt(1, 12);

                if (exportsvg.randomInt < 10) {
                    exportsvg.randomInt = '0' + exportsvg.randomInt;
                } else {
                    exportsvg.randomInt = parseInt(exportsvg.randomInt);
                }
            },

            link: function postLink(scope, element /*, attrs*/ ) {

                var svg = document.getElementById('originalSVG');
                var canvas = document.getElementById('canvas');
                console.log(scope.exportsvg.avatarHtml);

                $http.get('images/original-svg-share/FONS-' + scope.exportsvg.randomInt + '.svg', {

                        params: {}
                    })
                    .then(function(response) {

                        return $http.get('images/original-svg-share/water-mark.svg', {

                                params: {}
                            })
                            .then(function(response1) {

                                    scope.exportsvg.watermarkHtml = response1.data;
                                    // cut till <g> tag (group tag included)
                                    scope.exportsvg.watermarkHtml = scope.exportsvg.watermarkHtml.substring(scope.exportsvg.watermarkHtml.search('<g>') + 3);
                                    // cut svg closing tag (</svg>)
                                    scope.exportsvg.watermarkHtml = scope.exportsvg.watermarkHtml.substring(0, scope.exportsvg.watermarkHtml.search('</svg>'));
                                    // add transformation
                                    scope.exportsvg.watermarkHtml = '<g transform="translate(100,60)">' + scope.exportsvg.watermarkHtml;


                                    scope.exportsvg.backgroundHtml = response.data;
                                    // remove svg opening tag
                                    scope.exportsvg.backgroundHtml = scope.exportsvg.backgroundHtml.substring(scope.exportsvg.backgroundHtml.search('<g>'));
                                    // cut svg closing tag (</svg>)
                                    scope.exportsvg.backgroundHtml = scope.exportsvg.backgroundHtml.substring(0, scope.exportsvg.backgroundHtml.search('</svg>'));
                                    // add transformation
                                    scope.exportsvg.finalShotHtml = scope.exportsvg.backgroundHtml + '<g transform="translate(310,550) scale(1.2)">' + scope.exportsvg.avatarHtml + '</g>' + scope.exportsvg.watermarkHtml;


                                    $(element.children()[0]).html(scope.exportsvg.finalShotHtml);

                                    appState.setFinalScreenshotHtml(scope.exportsvg.finalShotHtml);


                                    //-----------------------------------------

                                    function triggerDownload(imgURI) {
                                        var evt = new MouseEvent('click', {
                                            view: window,
                                            bubbles: false,
                                            cancelable: true
                                        });

                                        var a = document.createElement('a');
                                        a.setAttribute('download', 'my_districteZero_avatar.jpeg');
                                        a.setAttribute('href', imgURI);
                                        a.setAttribute('target', '_blank');
                                        console.log('kakota');
                                        a.dispatchEvent(evt);
                                    }

                                    var ctx = canvas.getContext('2d');
                                    var data = (new XMLSerializer()).serializeToString(svg);
                                    var DOMURL = window.URL || window.webkitURL || window;

                                    var img = new Image();
                                    var svgBlob = new Blob([data], {
                                        type: 'image/svg+xml;charset=utf-8'
                                    });
                                    var url = DOMURL.createObjectURL(svgBlob);

                                    img.onload = function() {
                                        ctx.drawImage(img, 0, 0);
                                        DOMURL.revokeObjectURL(url);

                                        //var imgURI = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
                                        var imgURI = canvas.toDataURL('image/jpeg', 0.5).replace('image/jpeg', 'image/octet-stream');

                                        //--------------------------------------
                                        triggerDownload(imgURI);

                                        // post image to the server
                                        appState.setFinalScreenshotURI(imgURI);
                                        api.postFinalScreenshot(appState.getFinalScreenshotURI())
                                            .then(function(response) {

                                            console.log('POST image OK');
                                            appState.setImageName(response.imagename);

                                            // pasamos al controller la url de la imagen
                                            scope.imgurl = 'http://212.24.106.168/static/' + response.imagename + '.jpg';

                                        }, function(response) {
                                            console.log('POST image FAIL');
                                            return $q.reject(response);
                                        });
                                    };

                                    img.src = url;

                                },
                                function(response1) {
                                    return $q.reject(response1);
                                });

                    }, function(response) {
                        return $q.reject(response);
                    });
            }
        };
    });
