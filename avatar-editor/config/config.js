'use strict';

angular.module('services.config', [])
    .constant('configuration', {
        inProduction: @@inProduction,
        //UrlBase: '@@UrlBase',
        //ApiUrlBase: '@@ApiUrlBase',
        //ApiUrlBaseOLD: '@@ApiUrlBaseOLD',
        //supportEmail: '@@supportEmail'
        //apiPath: '/backenddev/api'
        apiPath: @@apiPath
    });
