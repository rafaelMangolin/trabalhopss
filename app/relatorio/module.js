'use strict';

angular.module('app.relatorio', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('relatorio.lista', {
                url: "/lista"
                , templateUrl: 'relatorio/lista.html'
                ,controller:'RelatorioListaController'
            })
    })
    .controller('RelatorioListaController', [function () {
    }])