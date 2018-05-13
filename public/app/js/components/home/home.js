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