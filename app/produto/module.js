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
            })
            .state('produto.emfalta', {
                url: "/falta"
                , templateUrl: 'produto/lista.html'
                , controller: 'ProdutoEmFaltaController'
            });
    })
    .controller('ProdutoListaController', ['$scope',function ($scope) {
        $scope.valores=[
            {
                nome:'Bolacha Passatempo'
                ,tipo:'REVENDA'
                ,valor: 12.50
                ,qntdMin: 3
            }
        ]
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
    }])
    .controller('ProdutoEmFaltaController', ['$scope',function ($scope) {
        $scope.is = true;
        $scope.valores=[
            {
                nome:'Farinha Aviação'
                ,tipo:'MATERIA PRIMA'
                ,valor: 12.50
                ,qntdMin: 3
            }
        ]
    }]);