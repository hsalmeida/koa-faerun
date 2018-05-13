angular.module("koa-fearun", ["ngMaterial", "ngMessages", "ngSanitize", "ui.router", "angular.filter", "angularMoment", "angularUtils.directives.dirPagination"])
    .run(['amMoment', function (amMoment) {
        amMoment.changeLocale('pt-br');
    }])
    .config(function ($mdDateLocaleProvider) {
        $mdDateLocaleProvider.formatDate = function(date) {
            let m = moment(date);
            return m.isValid() ? m.format('L') : '';
        };
    });