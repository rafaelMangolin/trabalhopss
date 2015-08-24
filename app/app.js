'use strict';

angular.module('myApp', [
    'ui.router'
    , 'ui.utils.masks'
    , 'app.login'
    , 'app.produto'
    , 'app.cliente'
    , 'app.funcionario'
    , 'app.venda'
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
        });
});
