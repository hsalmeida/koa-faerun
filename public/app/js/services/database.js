angular.module('koa-fearun')
    .factory('Personagens',function($mongolabResourceHttp){
        return $mongolabResourceHttp('personagens');
    });
