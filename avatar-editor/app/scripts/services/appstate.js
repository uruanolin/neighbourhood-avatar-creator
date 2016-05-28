'use strict';

/**
 * @ngdoc service
 * @name neighbourhoodAvatarCreatorApp.appState
 * @description
 * # appState
 * Service in the neighbourhoodAvatarCreatorApp.
 */


(function() {

    function appState($q) {

        var state = {
            district: null,
            name: null,
            gender: null,
            avatarConf: null,
            answer: null
        };

        function setDistrict(district) {
            state.district = district;
        }

        function getDistrict() {
            return state.district;
        }

        function setName(name) {
            state.name = name;
        }

        function getName() {
            return state.name;
        }

        function setGender(gender) {
            state.gender = gender;
        }

        function getGender() {
            return state.gender;
        }

        function setAvatarConf(conf) {
            state.avatarConf = conf;
        }

        function getAvatarConf() {
            return state.avatarConf;
        }

        function setAnswer(answer) {
            state.answer = answer;
        }

        function getAnswer() {
            return state.answer;
        }

        function setImage(image) {
            state.image = image;
        }

        function getImage() {
            return state.image;
        }

        function getState() {
            return state;
        }

        function getDistrictPromise() {
//CHANGE !!!!!!!!!!
            return 'algoo';
            if (state.district === null) {
                return $q.reject();
            }
            //return state.district;
        }

        function getAvatarConfPromise() {

            if (state.avatarConf === null) {
                return $q.reject();
            }
            return state.avatarConf;
        }

        function getAnswerPromise() {
console.log('dsdsdsds');
            if (state.answer === null) {
                return $q.reject();
            }
            return state.answer;
        }

        return {
            setDistrict: setDistrict,
            getDistrict: getDistrict,
            setName: setName,
            getName: getName,
            setGender: setGender,
            getGender: getGender,
            setAvatarConf: setAvatarConf,
            getAvatarConf: getAvatarConf,
            setAnswer: setAnswer,
            getAnswer: getAnswer,
            setImage: setImage,
            getImage: getImage,
            getDistrictPromise: getDistrictPromise,
            getAvatarConfPromise: getAvatarConfPromise,
            getAnswerPromise: getAnswerPromise,
            getState: getState
        };
    }

    angular.module('neighbourhoodAvatarCreatorApp')
        .service('appState', appState);
})();
