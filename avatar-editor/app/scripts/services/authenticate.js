'use strict';

(function() {
    function auth($q, $http, configuration) {

        var token = null;

        function getToken () {
            return token;
        }

        function login2(user, passwd){

            return $http.post( configuration.apiPath + '/authenticate', {username: user, password: passwd})

            .then(function(response) {

$http.defaults.headers.common.Authorization = response.data.token;
            token = response.data.token;

            //$log.debug(response);
            return response.data;

            }, function(response) {

            return $q.reject(response);

            });
        }



        return {
            'login': login2,
            'getToken': getToken
        };
    }

    angular.module('neighbourhoodAvatarCreatorApp')
        .service('authenticate', auth);

})();
