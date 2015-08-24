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
        });

})
.factory('seed',function(){
  return {
    'produtos': [
      {name: 'Bolacha turma da mônica', id: ~~Math.random()*100000, value: 5.99},
      {name: 'Negresco', id: ~~Math.random()*100000, value: 2.99},
      {name: 'Coxinha de Frango', id: ~~Math.random()*100000, value: 3.50},
      {name: 'Arroz 5kg', id: ~~Math.random()*100000, value: 12.00},
      {name: 'Kibe', id: ~~Math.random()*100000, value: 3.50},
      {name: 'Suco de Laranja Purity', id: ~~Math.random()*100000, value: 4.00},
      {name: 'Farinha 5k Tio João', id: ~~Math.random()*100000, value: 8.00},
    ],
    'clientes': [
      {name: 'João', sobrenome: 'Silva', idade: ~~Math.random()*60},
      {name: 'Tião', sobrenome: 'Carreiro', idade: ~~Math.random()*60},
      {name: 'Maria', sobrenome: 'dos Santos', idade: ~~Math.random()*60},
      {name: 'Lucas', sobrenome: 'Amaral', idade: ~~Math.random()*60},
      {name: 'Geninha', sobrenome: 'Bialin', idade: ~~Math.random()*60},
    ]
  }
});
