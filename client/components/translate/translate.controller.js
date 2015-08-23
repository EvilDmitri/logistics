'use strict';

var app = angular.module('logistaApp');

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    ALL: 'All',
    TRUCKS: 'Trucks',
    LOAD: 'Load',
    NEW_TRUCK: 'Start a new round',
    NEW_TRUCK_TEXT: 'Start your own round and be visible on the map',
    LOOK: 'See',
    BUTTON_TEXT_EN: 'eng',
    BUTTON_TEXT_RU: 'rus',
    BUTTON_TEXT_EE: 'est'
  })
    .translations('ee', {
      ALL: 'Kõik',
      TRUCKS: 'Veod',
      LOAD: 'Koormus',
      NEW_TRUCK: 'Alusta oma veo',
      NEW_TRUCK_TEXT: 'Alusta oma uue veo ja sai nähtav kaardil.',
      LOOK: 'Vaata',
      BUTTON_TEXT_EN: 'eng',
      BUTTON_TEXT_RU: 'rus',
      BUTTON_TEXT_EE: 'est'
    })
  .translations('ru', {
      ALL: 'Все',
      TRUCKS: 'Перевозчик',
      LOAD: 'Груз',
      NEW_TRUCK: 'Начни новый маршрут',
      NEW_TRUCK_TEXT: 'Начни новый маршрут и стань видимым на карте',
      LOOK: 'Посмотреть',
      BUTTON_TEXT_EN: 'eng',
      BUTTON_TEXT_RU: 'rus',
      BUTTON_TEXT_EE: 'est'
    });
  $translateProvider.preferredLanguage('ee');

  //$translateProvider.determinePreferredLanguage(function () {
  //  // define a function to determine the language
  //  // and return a language key
  //});

});

