angular.module("koa-fearun").controller('PersonagensController', ['$scope', '$state', 'Personagens', function ($scope, $state, Personagens) {
    let vm = this;
    vm.characters = [];

    Personagens.all().then(function (characters) {
        vm.characters = characters;
    });

    $scope.addPerson = function () {
        $state.go('workspace.character', {add: true, id: 0})
    };

    $scope.detalhes = function (character) {
        $state.go('workspace.character', {add: false, id: character._id.$oid});
    }
}]);