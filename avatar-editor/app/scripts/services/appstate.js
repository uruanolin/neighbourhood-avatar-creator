'use strict';

/**
 * @ngdoc service
 * @name neighbourhoodAvatarCreatorApp.appState
 * @description
 * # appState
 * Service in the neighbourhoodAvatarCreatorApp.
 */


(function() {

    function appState() {

        var state = {
            district: null,
            name: null,
            gender: null,
            avatarConf: {

            },
            question: null,
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

        function setQuestion(question) {
            state.question = question;
        }

        function getQuestion() {
            return state.question;
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

        return {
            setDistrict: setDistrict,
            getDistrict: getDistrict,
            setName: setName,
            getName: getName,
            setGender: setGender,
            getGender: getGender,
            setAvatarConf: setAvatarConf,
            getAvatarConf: getAvatarConf,
            setQuestion: setQuestion,
            getQuestion: getQuestion,
            setAnswer: setAnswer,
            getAnswer: getAnswer,
            setImage: setImage,
            getImage: getImage
        };
    }

    angular.module('neighbourhoodAvatarCreatorApp')
        .service('appState', appState);
})();
