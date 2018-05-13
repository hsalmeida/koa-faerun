angular.module("koa-fearun", ["ngMaterial", "ngMessages", "ngSanitize", "ui.router", "angular.filter", "angularMoment", "angularUtils.directives.dirPagination"])
    .run(['amMoment', function (amMoment) {
        amMoment.changeLocale('pt-br');
    }])
    .config(["$mdDateLocaleProvider", function ($mdDateLocaleProvider) {
        $mdDateLocaleProvider.formatDate = function(date) {
            let m = moment(date);
            return m.isValid() ? m.format('L') : '';
        };
    }]);
angular.module("koa-fearun").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
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
            controller: ["$rootScope", function ($rootScope) {

            }]
        })
        .state('workspace.home', {
            url: '/home',
            templateUrl: 'public/partials/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });
}]);
angular.module("koa-fearun").controller('HomeController', ['$scope', function ($scope) {
    let vm = this;
    vm.combates = [];
    for (let i = 0; i < 10; i++) {
        vm.combates.push({
            numero: i,
            concluido: i * 10
        })
    }
}]);
angular.module("koa-fearun").controller('LoginController', ['$scope','$state', function ($scope, $state) {
    let vm = this;
    vm.submit = function(login) {
        $state.go('workspace.home')
    };
}]);
angular.module("koa-fearun")
    .directive('koaNavbar', [function () {
        let ddo = {};
        ddo.restrict = "AE";
        ddo.replace = true;
        ddo.templateUrl = 'public/partials/koa-nav.html';
        ddo.controller = function ($scope, $rootScope, $state) {

        };
        return ddo;
    }])
    .directive('koaMenuNavbar', [function () {
        let ddo = {};
        ddo.restrict = "AE";
        ddo.replace = true;
        ddo.templateUrl = 'public/partials/koa-menu-nav.html';
        ddo.controller = function ($scope, $rootScope, $state) {
            $scope.currentNavItem = 'combates';
        };
        return ddo;
    }]);