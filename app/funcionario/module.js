'use strict';

angular.module('app.funcionario', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('funcionario.lista', {
                url: "/lista"
                , templateUrl: 'funcionario/lista.html'
                ,controller:'FuncionarioListaController'
            })
            .state('funcionario.novo', {
                url: "/novo"
                , templateUrl: 'funcionario/form.html'
                , controller: 'FuncionarioNovoController'
            })
            .state('funcionario.editar', {
                url: "/{id}"
                , templateUrl: 'funcionario/form.html'
                , controller: 'FuncionarioEditarController'
            });
    })
    .controller('FuncionarioListaController', [function () {
    }])
    .controller('FuncionarioNovoController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }])
    .controller('FuncionarioEditarController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }]);