var app = angular.module('WhoWhatWhere', ['ui.router', 'ngMap']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider

        .state('data', {
            url: '/data',
            templateUrl: 'views/displayData.html',
            controller: 'viewDataController'
        }).state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
    });
});

