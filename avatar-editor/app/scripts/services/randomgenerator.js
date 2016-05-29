'use strict';

/**
 * @ngdoc service
 * @name neighbourhoodAvatarCreatorApp.randomGenerator
 * @description
 * # randomGenerator
 * Service in the neighbourhoodAvatarCreatorApp.
 */

 (function() {

     function randomGenerator() {

         function getRandomInt(min, max) {
             return Math.floor(Math.random() * (max - min + 1)) + min;
         }

         return {
             getRandomInt: getRandomInt
         };
     }

     angular.module('neighbourhoodAvatarCreatorApp')
         .service('randomGenerator', randomGenerator);
 })();
