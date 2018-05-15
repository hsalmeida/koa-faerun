angular.module("koa-fearun").controller('PersonagensController', ['$scope', '$state', function ($scope, $state) {
    let vm = this;
    vm.characters = [];
    for (let i = 0; i < 8; i++) {
        vm.characters.push({
            name: 'Exemplo de Personagem ' + i,
            race: 'Dragonborn',
            primaryClass: '',
            level: 0,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
            strengthModifier: 0,
            dexterityModifier: 0,
            constitutionModifier: 0,
            intelligenceModifier: 0,
            wisdomModifier: 0,
            charismaModifier: 0,
            classes: [],
            appearance: '',
            maneirism: '',
            items: []
        });
    }
    $scope.addPerson = function () {
        $state.go('workspace.character', {add: true, id: 0})
    };
}]);