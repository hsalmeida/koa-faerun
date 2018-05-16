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
            primaryClass: '',
            appearance: '',
            maneirism: '',
            items: []
        };
        vm.character.level = getRandomInt(6, 17);

        vm.character.appearance = Tables.aparencia[getRandomInt(0, Tables.aparencia.length)];
        vm.character.maneirism = Tables.maneirism[getRandomInt(0, Tables.maneirism.length)];

        vm.character.strength = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.dexterity = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.constitution = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.intelligence = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.wisdom = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.charisma = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);

        vm.character.gender = getRandomInt(0, 2) === 0 ? "M" : "F";
        const racas = Tables.racas;
        let tempraca = racas[getRandomInt(0, racas.length)];
        vm.character.race = tempraca.nome;
        vm.character.name = "";
        let names = tempraca[vm.character.gender];
        if (names) {
            vm.character.name = names[getRandomInt(0, names.length)];
            if (tempraca.sur && tempraca.sur.length > 0) {
                vm.character.name += " " + tempraca.sur[getRandomInt(0, tempraca.sur.length)];
            }
        }

        for (let q = 0; q < tempraca.attrs.length; q++) {
            vm.character[tempraca.attrs[q].at] += tempraca.attrs[q].bn;
        }

        vm.character.strengthModifier = Math.floor((vm.character.strength - 10) / 2);
        vm.character.dexterityModifier = Math.floor((vm.character.dexterity - 10) / 2);
        vm.character.constitutionModifier = Math.floor((vm.character.constitution - 10) / 2);
        vm.character.intelligenceModifier = Math.floor((vm.character.intelligence - 10) / 2);
        vm.character.wisdomModifier = Math.floor((vm.character.wisdom - 10) / 2);
        vm.character.charismaModifier = Math.floor((vm.character.charisma - 10) / 2);

        const classesList = Tables.classes;
        let singleClass = getRandomInt(1, 3) === 1;

        if (singleClass) {
            //classe unica
            let clsingleget = getRandomInt(1, 13);
            vm.character.primaryClass = classesList[clsingleget].name;
            vm.character.classes.push({cl: classesList[clsingleget], qtd: vm.character.level});
        } else {
            //multiclasse
            let sobra = vm.character.level;
            while (sobra > 0) {
                let lvrandom = getRandomInt(1, (sobra + 1));
                sobra = sobra - lvrandom;
                let clget = getRandomInt(1, 13);
                if (vm.character.classes.length > 0) {
                    let have = false;
                    for (let j = 0; j < vm.character.classes.length; j++) {
                        if (vm.character.classes[j]) {
                            if (classesList[clget].nome === vm.character.classes[j].cl.nome) {
                                vm.character.classes[j].qtd = vm.character.classes[j].qtd + lvrandom;
                                have = true;
                                break;
                            }
                        }
                    }
                    if (!have) {
                        vm.character.classes.push({cl: classesList[clget], qtd: lvrandom});
                    }
                } else {
                    vm.character.primaryClass = classesList[clget].name;
                    vm.character.classes.push({cl: classesList[clget], qtd: lvrandom});
                }
            }
        }

        const qtdI = getRandomInt(1, 4);
        for (let z = 1; z <= qtdI; z++) {
            let tabela = getRandomInt(0, 9);
            let coluna = getRandomInt(0, 4);
            let listaItem = Tables.magItens[tabela][coluna];
            let itStr = listaItem[getRandomInt(0, listaItem.length)];
            let it = Tables.items[tabela];
            vm.character.items.push({tabela: it.tabela, poder: it.valores[coluna], nome: itStr});
        }

    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}]);