'use strict';

/**
 * @ngdoc service
 * @name neighbourhoodAvatarCreatorApp.api
 * @description
 * # api
 * Service in the neighbourhoodAvatarCreatorApp.
 */

(function() {

    function api($q, $http, configuration) {

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

            return $http.post(configuration.apiPath + '/avatar/finalScreenshot', {data: data}, {
/*
                headers: {
                    'Content-Type': undefined//'application/x-www-form-urlencoded;charset=utf-8;'//undefined //'multipart/form-data' //'application/x-www-form-urlencoded'
                },
                transformRequest: angular.identity
*/
            }).then(function(response) {
                console.log('POST image OK');
                //$log.debug(response);
                return response.data;

            }, function(response) {
                console.log('POST image FAIL');
                return $q.reject(response);
            });


            /*
                        return $http.post(configuration.apiPath + '/avatar/finalScreenshot', {
                            data: data,
                            headers: {
                                //'Content-Type': undefined     // --> el content type ya lo rellena Angular (en este caso form data)
                                'Content-type': 'application/x-www-form-urlencoded'
                            }
                        })
                        .then(function(response) {
            console.log('POST image OK');
                            //$log.debug(response);
                            return response.data;

                        }, function(response) {
            console.log('POST image FAIL');
                            return $q.reject(response);
                        });
            */

            /*
                        return $http({
                                method: 'POST',
                                url: configuration.apiPath + '/avatar/finalScreenshot',

                                headers: {
                                    //'Content-Type': undefined     // --> el content type ya lo rellena Angular (en este caso form data)
                                    'Content-type': 'application/x-www-form-urlencoded'
                                },
                                transformRequest: transformRequestAsFormPost,

                                data: {
                                    imgURI: data
                                }

                            }).then(function(response) {
            console.log('POST image OK');
                                //$log.debug(response);
                                return response.data;

                            }, function(response) {
            console.log('POST image FAIL');
                                return $q.reject(response);
                            });

                            */
        }



        return {
            postAvatar: postAvatar,
            postFinalScreenshot: postFinalScreenshot
        };
    }

    angular.module('neighbourhoodAvatarCreatorApp')
        .service('api', api);

})();
