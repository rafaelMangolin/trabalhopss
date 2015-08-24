'use strict';

angular.module('app.encomenda', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('encomenda.lista', {
                url: "/lista"
                , templateUrl: 'encomenda/lista.html'
                ,controller:'EncomendaListaController'
            })
            .state('encomenda.novo', {
                url: "/novo"
                , templateUrl: 'encomenda/form.html'
                , controller: 'EncomendaNovoController'
            })
            .state('encomenda.editar', {
                url: "/{id}"
                , templateUrl: 'encomenda/form.html'
                , controller: 'EncomendaEditarController'
            });
    })
    .controller('EncomendaListaController', [function () {
    }])
    .controller('EncomendaNovoController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }])
    .controller('EncomendaEditarController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }]);