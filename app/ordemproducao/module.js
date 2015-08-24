'use strict';

angular.module('app.ordemproducao', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('ordemproducao.lista', {
                url: "/lista"
                , templateUrl: 'ordemproducao/lista.html'
                ,controller:'OrdemProducaoListaController'
            })
            .state('ordemproducao.novo', {
                url: "/novo"
                , templateUrl: 'ordemproducao/form.html'
                , controller: 'OrdemProducaoNovoController'
            })
            .state('ordemproducao.editar', {
                url: "/{id}"
                , templateUrl: 'ordemproducao/form.html'
                , controller: 'OrdemProducaoEditarController'
            });
    })
    .controller('OrdemProducaoListaController', [function () {
    }])
    .controller('OrdemProducaoNovoController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }])
    .controller('OrdemProducaoEditarController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }]);