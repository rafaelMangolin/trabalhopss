'use strict';

angular.module('app.pedidocompra', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('pedidocompra.novo', {
                url: "/novo"
                , templateUrl: 'pedidodecompra/form.html'
                , controller: 'PedidoCompraNovoController'
            })
    })
    .controller('PedidoCompraListaController', [function () {

    }])
    .controller('PedidoCompraNovoController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }])
    .controller('PedidoCompraEditarController', ['$scope',function ($scope) {
        $scope.opts = [
            'MATÉRIA-PRIMA'
            , 'REVENDA'
            , 'MANUFATURA'
        ]
    }]);