angular.module("koa-fearun", ["ngMaterial", "ngMessages", "ngSanitize", "ui.router", "angular.filter", "angularMoment", "angularUtils.directives.dirPagination", "mongolabResourceHttp"])
    .run(['amMoment', function (amMoment) {
        amMoment.changeLocale('pt-br');
    }])
    .config(function (paginationTemplateProvider) {
        paginationTemplateProvider.setPath('public/vendor/angularUtils-pagination/dirPagination.tpl.html');
    })
    .constant('MONGOLAB_CONFIG', {API_KEY: 'YXgR-q92vuVCKlSm-ji3nplDTE7rHIQh', DB_NAME: 'koa'})
    .config(function ($mdDateLocaleProvider) {
        $mdDateLocaleProvider.formatDate = function(date) {
            let m = moment(date);
            return m.isValid() ? m.format('L') : '';
        };
    });