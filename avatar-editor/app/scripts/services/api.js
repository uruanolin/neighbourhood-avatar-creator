'use strict';

/**
 * @ngdoc service
 * @name neighbourhoodAvatarCreatorApp.api
 * @description
 * # api
 * Service in the neighbourhoodAvatarCreatorApp.
 */

(function() {

    function api($q, $http, configuration, authenticate) {

        function postAvatar(data) {

            return $http.post(configuration.apiPath + '/avatar', {
                    data: data
                })
                .then(function(response) {

                    //$log.debug(response);
                    return response.data;

                }, function(response) {

                    return $q.reject(response);
                });
        }


        function postFinalScreenshot(data) {


            var fd = new FormData();
            fd.append('imguri', data);

            return $http.post(configuration.apiPath + '/avatar/finalScreenshot', {
                data: data
            }, {
                /*
                                headers: {
                                    'Content-Type': undefined//'application/x-www-form-urlencoded;charset=utf-8;'//undefined //'multipart/form-data' //'application/x-www-form-urlencoded'
                                },
                                transformRequest: angular.identity
                */
            }).then(function(response) {
                console.log('POST image OK');

                //appState.setImageName(response.data.imagename);
                return response.data;

            }, function(response) {
                console.log('POST image FAIL');
                return $q.reject(response);
            });
        }

        function getAvatarStats() {

            console.log(authenticate.getToken());

            return $http.get(configuration.apiPath + '/avatar', {
                    headers: {
                        'x-access-token': authenticate.getToken()
                    }
                })
                .then(function(response) {

                    return response.data;

                }, function(response) {

                    return $q.reject(response);
                });
        }



        return {
            postAvatar: postAvatar,
            postFinalScreenshot: postFinalScreenshot,
            getAvatarStats: getAvatarStats
        };
    }

    angular.module('neighbourhoodAvatarCreatorApp')
        .service('api', api);

})();
