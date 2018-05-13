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