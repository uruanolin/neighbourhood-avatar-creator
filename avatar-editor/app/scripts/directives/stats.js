'use strict';

/**
 * @ngdoc directive
 * @name neighbourhoodAvatarCreatorApp.directive:stats
 * @description
 * # stats
 */
angular.module('neighbourhoodAvatarCreatorApp')
    .directive('stats', function(api) {
        return {
            templateUrl: 'views/stats.html',
            restrict: 'E',
            controllerAs: 'stats',
            controller: function() {

            },
            link: function postLink(scope, element /*, attrs*/ ) {

                var dataSet1 = [],
                    dataSet2 = [];

                api.getAvatarStats().then(function(response) {

                        console.log(response);

                        for (var district in response) {
                            if (response.hasOwnProperty(district)) {
                                dataSet1.push({
                                    district: district,
                                    sex: 'homes',
                                    num: response[district].count.homes
                                });

                                dataSet1.push({
                                    district: district,
                                    sex: 'dones',
                                    num: response[district].count.dones
                                });

                                //-------------------------

                                dataSet2.push({
                                    district: district,
                                    sex: 'homes',
                                    pregunta: 'ok',
                                    num: response[district].preguntes.encertades.homes
                                });

                                dataSet2.push({
                                    district: district,
                                    sex: 'homes',
                                    pregunta: 'fail',
                                    num: response[district].preguntes.fallades.homes
                                });

                                dataSet2.push({
                                    district: district,
                                    sex: 'dones',
                                    pregunta: 'ok',
                                    num: response[district].preguntes.encertades.dones
                                });

                                dataSet2.push({
                                    district: district,
                                    sex: 'dones',
                                    pregunta: 'fail',
                                    num: response[district].preguntes.fallades.dones
                                });
                            }
                        }
                        /*
                                                $('#pivot-table').pivot(
                                                    [{
                                                        color: 'blue',
                                                        shape: 'circle'
                                                    }, {
                                                        color: 'red',
                                                        shape: 'triangle'
                                                    }], {
                                                        rows: ['color'],
                                                        cols: ['shape']
                                                    }
                                                );
                        */

                        var count = function(data, rowKey, colKey) {
                            return {
                                count: 0,
                                push: function(record) {
                                    this.count += record.num;
                                },
                                value: function() {
                                    return this.count;
                                },
                                format: function(x) {
                                    return x;
                                },
                            };
                        };

                        $('#pivot-table-1').pivot(dataSet1, {
                            rows: ['district'],
                            cols: ['sex'],
                            aggregator: count
                        });

                        $('#pivot-table-2').pivot(dataSet2, {
                            rows: ['district'],
                            cols: ['pregunta', 'sex'],
                            aggregator: count
                        });

                    },
                    function() {

                    });

            }
        };
    });
