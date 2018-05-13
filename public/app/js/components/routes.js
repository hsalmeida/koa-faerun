angular.module("koa-fearun").config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'public/partials/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .state('workspace', {
            templateUrl: 'public/partials/workspace.html',
            controller: function ($rootScope) {

            }
        })
        .state('workspace.home', {
            url: '/home',
            templateUrl: 'public/partials/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });
});