angular.module("koa-fearun").controller('HomeController', ['$scope', function ($scope) {
    let vm = this;
    vm.combates = [];
    for (let i = 0; i < 11; i++) {
        vm.combates.push({
            tipo: 'Eliminatoria',
            numero: (i + 1),
            concluido: i * 10
        });
    }
    vm.combates.push({
        tipo: 'Campeonato',
        numero: 1,
        concluido: 0
    });
    vm.combates.push({
        tipo: 'Campeonato',
        numero: 2,
        concluido: 0
    });
}]);