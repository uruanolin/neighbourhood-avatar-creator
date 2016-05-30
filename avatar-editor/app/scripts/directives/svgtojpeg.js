'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:svgToJpeg
 * @description
 * # svgToJpeg
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('svgToJpeg', function($http, appState, $q, randomGenerator) {
        return {
            template: '<svg id="originalSVG" height="626" width="626"></svg><canvas id="canvas" width="626" height="626"></canvas>',
            restrict: 'E',

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
                                        //a.setAttribute('download', 'MY_COOL_IMAGE.png');
                                        a.setAttribute('download', 'MY_COOL_IMAGE.jpeg');
                                        a.setAttribute('href', imgURI);
                                        a.setAttribute('target', '_blank');

                                        a.dispatchEvent(evt);
                                    }

                                    //-----------------------------------------

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
                                        var imgURI = canvas.toDataURL('image/jpeg', 1.0).replace('image/jpeg', 'image/octet-stream');

                                        //triggerDownload(imgURI);
                                        appState.setFinalScreenshotURI(imgURI);
                                    };
                                    img.src = url;
                                    console.log(url);

                                    appState.setFinalScreenshotPath(img.src);

                                    //-------------------------------------------

                                    /*
                                    $http.get(img.url, {

                                            params: {}
                                        })
                                        .then(function(response2) {
                                            console.log(response2.data);
                                        },
                                        function (response2) {
                                            console.log(response2.data);
                                            return $q.reject(response2);
                                        });
                                        */

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
