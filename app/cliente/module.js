'use strict';

angular.module('app.cliente', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('cliente.lista', {
                url: "/lista"
                , templateUrl: 'cliente/lista.html'
                ,controller:'ClienteListaController'
            })
            .state('cliente.novo', {
                url: "/novo"
                , templateUrl: 'cliente/form.html'
                , controller: 'ClienteNovoController'
            })
            .state('cliente.editar', {
                url: "/{id}"
                , templateUrl: 'cliente/form.html'
                , controller: 'ClienteEditarController'
            });
    })
    .controller('ClienteListaController', [function () {
    }])
    .controller('ClienteNovoController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }])
    .controller('ClienteEditarController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }]);