'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:shareAvatar
 * @description
 * # shareAvatar
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('shareAvatar', function($http, appState, $q) {
        return {

            restrict: 'E',

            controllerAs: 'share',
            controller: function() {

                this.pepito = 'dssdsd';
            },

            link: function postLink(scope, element /*, attrs*/ ) {

                var sharePath = null;

                if (appState.getGender() === 'male') {
                    sharePath = 'views/sharemaleavatar.html';
                } else if (appState.getGender() === 'female') {
                    sharePath = 'views/sharefemaleavatar.html';
                }

                $http.get(sharePath, {
                        params: {}
                    })
                    .then(function(response1) {

                            /*
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
                            */

                            element.html(response1.data);
                            return response1.data;

                        },
                        function(response1) {
                            return $q.reject(response1);
                        });

            }
        };
    });
