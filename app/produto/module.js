'use strict';

angular.module('app.produto', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('produto.lista', {
                url: "/lista"
                , templateUrl: 'produto/lista.html'
                ,controller:'ProdutoListaController'
            })
            .state('produto.novo', {
                url: "/novo"
                , templateUrl: 'produto/form.html'
                , controller: 'ProdutoNovoController'
            })
            .state('produto.editar', {
                url: "/{id}"
                , templateUrl: 'produto/form.html'
                , controller: 'ProdutoEditarController'
            });
    })
    .controller('ProdutoListaController', [function () {
    }])
    .controller('ProdutoNovoController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }])
    .controller('ProdutoEditarController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }]);