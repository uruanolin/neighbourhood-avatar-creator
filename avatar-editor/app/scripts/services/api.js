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



        return {
            'postAvatar': postAvatar
        };
    }

    angular.module('neighbourhoodAvatarCreatorApp')
        .service('api', api);

})();
