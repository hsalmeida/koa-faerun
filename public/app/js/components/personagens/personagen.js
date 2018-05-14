angular.module("koa-fearun").controller('PersonagenController', ['$scope', '$state', '$stateParams', 'Tables', function ($scope, $state, $stateParams, Tables) {
    let vm = this;
    vm.character = {};
    $scope.add = $stateParams.add;

    $scope.generateCharacter = function () {
        vm.character = {
            name: '',
            race: '',
            gender: '',
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
        };
        vm.character.level = getRandomInt(6, 16);

        vm.character.strength = getRandomInt(8, 18) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.dexterity = getRandomInt(8, 18) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.constitution = getRandomInt(8, 18) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.intelligence = getRandomInt(8, 18) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.wisdom = getRandomInt(8, 18) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.charisma = getRandomInt(8, 18) + (vm.character.lv >= 10 ? 1 : 0);


        vm.character.gender = getRandomInt(0, 2) === 0 ? "M" : "F";
        const racas = Tables.racas;
        let tempraca = racas[getRandomInt(0, racas.length)];
        vm.character.race = tempraca.nome;
        vm.character.name = "";
        let names = tempraca[vm.character.gender];
        if(names) {
            vm.character.name = names[getRandomInt(0, names.length)];
            if(tempraca.sur && tempraca.sur.length > 0) {
                vm.character.name += " " + tempraca.sur[getRandomInt(0,(tempraca.sur.length - 1))];
            }
        }

        for(let q = 0; q < tempraca.attrs.length; q++) {
            vm.character[tempraca.attrs[q].at] += tempraca.attrs[q].bn;
        }

        vm.character.strengthModifier = Math.floor((vm.character.strength - 10) / 2);
        vm.character.dexterityModifier = Math.floor((vm.character.dexterity - 10) / 2);
        vm.character.constitutionModifier = Math.floor((vm.character.constitution - 10) / 2);
        vm.character.intelligenceModifier = Math.floor((vm.character.intelligence - 10) / 2);
        vm.character.wisdomModifier = Math.floor((vm.character.wisdom - 10) / 2);
        vm.character.charismaModifier = Math.floor((vm.character.charisma - 10) / 2);

        let sobra = vm.character.level;
        const classesList = Tables.classes;
        while(sobra > 0) {
            let lvrandom = getRandomInt(1, sobra);
            sobra = sobra - lvrandom;
            let clget = getRandomInt(1, 12);
            if(vm.character.classes.length > 0) {
                let have = false;
                for (let j = 0; j < vm.character.classes.length; j++) {
                    if(vm.character.classes[j]) {
                        if(classesList[clget].nome === vm.character.classes[j].cl.nome) {
                            vm.character.classes[j].qtd = vm.character.classes[j].qtd + lvrandom;
                            have = true;
                            break;
                        }
                    }
                }
                if(!have) {
                    vm.character.classes.push({cl: classesList[clget], qtd: lvrandom});
                }
            } else {
                vm.character.classes.push({cl: classesList[clget], qtd: lvrandom});
            }
        }
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}]);