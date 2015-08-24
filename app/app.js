'use strict';

angular.module('myApp', [
    'ui.router'
    , 'ui.utils.masks'
    , 'app.login'
    , 'app.produto'
    , 'app.cliente'
    , 'app.funcionario'
    , 'app.venda'
    , 'app.pedidocompra'
    , 'app.ordemproducao'
    , 'app.relatorio'

]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login', {
            url: "/login"
            ,templateUrl:'login/login.html'
            ,controller:'LoginController'
        })
        .state('produto', {
            url: "/produto"
            ,templateUrl:'base.html'
        })
        .state('cliente', {
            url: "/cliente"
            ,templateUrl:'base.html'
        })
        .state('funcionario', {
            url: "/funcionario"
            ,templateUrl:'base.html'
        })
        .state('venda', {
            url: "/venda"
            ,templateUrl:'base.html'
        })
        .state('pedidocompra', {
            url: "/pedidocompra"
            ,templateUrl:'base.html'
        })
        .state('ordemproducao', {
            url: "/ordemproducao"
            ,templateUrl:'base.html'
        })
        .state('relatorio', {
            url: "/relatorio"
            ,templateUrl:'base.html'
        })
    ;
});
