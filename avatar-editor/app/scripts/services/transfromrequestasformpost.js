'use strict';

/**
 * @ngdoc service
 * @name neighbourhoodAvatarCreatorApp.transfromRequestAsFormPost
 * @description
 * # transfromRequestAsFormPost
 * Service in the neighbourhoodAvatarCreatorApp.
 */


(function() {

    function transformRequestAsFormPost() {

        function serializeData(data) {
            var buffer = [],
                value,
                source;

            // If this is not an object, defer to native stringification.
            if (!angular.isObject(data)) {
                return ((data === null) ? '' : data.toString());
            }

            // Serialize each key in the object.
            for (var name in data) {
                if (!data.hasOwnProperty(name)) {
                    continue;
                }

                value = data[name];

                buffer.push(
                    encodeURIComponent(name) +
                    '=' +
                    encodeURIComponent((value === null) ? '' : value)
                );

            }

            // Serialize the buffer and clean it up for transportation.
            source = buffer
                .join('&')
                .replace(/%20/g, '+');

            return source;
        }

        // I prepare the request data for the form post.
        function transformRequest(data, getHeaders) {
            var headers = getHeaders();

            headers['Content-type'] = 'application/x-www-form-urlencoded; charset=utf-8';

            return serializeData(data);
        }

        // Return the factory value.
        return transformRequest;
    }


    angular.module('neighbourhoodAvatarCreatorApp')
        .factory('transformRequestAsFormPost', transformRequestAsFormPost);
})();
