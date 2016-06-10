'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:stats
 * @description
 * # stats
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('stats', function(api) {
        return {
            template: '<div></div>',
            restrict: 'E',
            controllerAs: 'stats',
            controller: function(){

            },
            link: function postLink(scope, element/*, attrs*/) {
                element.text('this is the stats directive');

                console.log(api.getAvatarStats());

                api.getAvatarStats().then(function (response) {
                    console.log(response);
                },
                function () {

                });
            }
        };
    });
