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
            answer: null,
            avatarHtml: null,
            finalScreenshotHtml: null,
            finalScreenshotURI: null,
            imageName: null
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

        // there's no set method
        function getState() {
            return state;
        }

        function setAvatarHtml(html) {
            state.avatarHtml = html;
        }

        function getAvatarHtml() {
            return state.avatarHtml;
        }

        function setFinalScreenshotHtml(html) {
            state.finalScreenshotHtml = html;
        }

        function getFinalScreenshotHtml() {
            return state.finalScreenshotHtml;
        }



        function setFinalScreenshotURI(uri) {
            state.finalScreenshotURI = uri;
        }

        function getFinalScreenshotURI(){
            return state.finalScreenshotURI;
        }

        function getDistrictPromise() {

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

            if (state.answer === null) {
                return $q.reject();
            }
            return state.answer;
        }

        function initAvatarConf() {
            state.avatarConf = {

                skinColor: null,
                hair: null,
                glasses: null,
                moustacheOrLips: null,
                selectTopClothe: null,
                selectBottomClothe: null,
                shoes: null
            };
        }

        function setImageName (name) {
            state.imageName = name;
        }

        function getImageName () {
            return state.imageName;
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
            getState: getState,
            setAvatarHtml: setAvatarHtml,
            getAvatarHtml: getAvatarHtml,
            setFinalScreenshotHtml: setFinalScreenshotHtml,
            getFinalScreenshotHtml: getFinalScreenshotHtml,
            setFinalScreenshotURI: setFinalScreenshotURI,
            getFinalScreenshotURI: getFinalScreenshotURI,
            initAvatarConf: initAvatarConf,
            setImageName: setImageName,
            getImageName: getImageName
        };
    }

    angular.module('neighbourhoodAvatarCreatorApp')
        .service('appState', appState);
})();
