'use strict';

(function() {
    function auth($q, $http, configuration) {

        /*
        function login(user, passwd) {
            var formData = new FormData(),
                req;

            formData.append('user', user);
            formData.append('passwd', passwd);

            req = {
                method: 'POST',
                url: configuration.apiPath + '/authenticate',
                headers: {
                    //'Content-Type': undefined     --> el content type ya lo rellena Angular (en este caso form data)
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                transformRequest: transformRequestAsFormPost,
                data: {
                    user: user,
                    passwd: passwd
                } //formData
            };

            return $http(req).then(function(response) {
                //$log.debug(response);

                return response.data;
            }, function(response) {
                return $q.reject(response);
            });

        }*/

        function login2(user, passwd){

            return $http.post( configuration.apiPath + '/authenticate', {username: user, password: passwd})

            .then(function(response) {

            //$log.debug(response);
            return response.data;

            }, function(response) {

            return $q.reject(response);

            });
        }



        return {
            'login': login2,
            //'login2': login2
        };
    }

    angular.module('neighbourhoodAvatarCreatorApp')
        .service('authenticate', auth);

})();
