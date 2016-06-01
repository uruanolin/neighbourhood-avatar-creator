'use strict';

angular.module('services.config', [])
    .constant('configuration', {
        inProduction: true,
        //UrlBase: '@@UrlBase',
        //ApiUrlBase: '@@ApiUrlBase',
        //ApiUrlBaseOLD: '@@ApiUrlBaseOLD',
        //supportEmail: '@@supportEmail'
        apiPath: '/backenddev/api'
    });
