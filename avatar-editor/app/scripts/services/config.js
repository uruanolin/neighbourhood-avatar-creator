'use strict';

angular.module('services.config', [])
    .constant('configuration', {
        inProduction: false,
        //UrlBase: '@@UrlBase',
        //ApiUrlBase: '@@ApiUrlBase',
        //ApiUrlBaseOLD: '@@ApiUrlBaseOLD',
        //supportEmail: '@@supportEmail'
        //apiPath: '/backenddev/api'
        apiPath: '/backenddev/api'
    });
