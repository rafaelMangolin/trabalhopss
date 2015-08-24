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
    .controller('PedidoCompraNovoController', ['$scope',function ($scope) {

    }])