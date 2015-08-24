'use strict';
angular.module('app.venda', ['ui.router','ui.bootstrap'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('venda.lista', {
                url: "/lista"
                , templateUrl: 'venda/list.html'
                ,controller:'VendaController'
            })
    })
    .controller('VendaController', ['$scope','$modal',function ($scope,$modal) {
        $scope.open = function(){
          var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'modaltemplate.html',
            controller: 'ModalController',
            size: 'md'
          })
        }
    }])
    .controller('ModalController',['$scope','$modalInstance',function($scope,$modalInstance){

    }])
