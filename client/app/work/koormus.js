'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('koormus', {
        url: '/koormus',
        data: {pageTitle: 'Koormus'},
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          }
          ,
          'content@koormus': {
            templateUrl: 'app/work/koormus.html',
            controller: 'EhitusCtrl'
          }
        }
      });
  });
