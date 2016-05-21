'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:adminLogin
 * @description
 * # adminLogin
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('adminLogin', function(authenticate) {
        return {
            templateUrl: 'views/adminlogin.html',
            restrict: 'E',
            scope: {
                'logged': '='
            },
            controllerAs: 'adminLogin',
            controller: function(/*$scope*/){

                this.errorMessage = 'The username or password is incorrect';
            },
            link: function postLink(scope/*, element, attrs*/) {

                scope.adminLogin.login = function(username, password) {

                    authenticate.login(username, password).then(
                        function(response) {

                            console.log(response.success);
                            if (response.success){
                                //ocultar formulario y mostrar otros datos
                                console.log('OK');

                                scope.logged = true;

                            }else{
                                console.log('KO');
                                scope.adminLogin.error = true;

                                //limpiar los dos campos del form !!!
                                //meter puntero en el username
                            }

                        },
                        function() {

                            console.log('HTTP post failed');
                        });
                };
            }
        };
    });
