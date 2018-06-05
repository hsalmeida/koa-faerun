angular.module("koa-fearun", ["ngMaterial", "ngMessages", "ngSanitize", "ui.router", "angular.filter", "angularMoment", "angularUtils.directives.dirPagination", "mongolabResourceHttp"])
    .run(['amMoment', function (amMoment) {
        amMoment.changeLocale('pt-br');
    }])
    .config(["paginationTemplateProvider", function (paginationTemplateProvider) {
        paginationTemplateProvider.setPath('public/vendor/angularUtils-pagination/dirPagination.tpl.html');
    }])
    .constant('MONGOLAB_CONFIG', {API_KEY: 'YXgR-q92vuVCKlSm-ji3nplDTE7rHIQh', DB_NAME: 'koa'})
    .config(["$mdDateLocaleProvider", function ($mdDateLocaleProvider) {
        $mdDateLocaleProvider.formatDate = function(date) {
            let m = moment(date);
            return m.isValid() ? m.format('L') : '';
        };
    }]);
angular.module('koa-fearun')
    .factory('Personagens',["$mongolabResourceHttp", function($mongolabResourceHttp){
        return $mongolabResourceHttp('personagens');
    }]);

angular.module("koa-fearun").factory('Tables', function () {
    return {
        racas: [
            {
                nome: "Dragonborn", attrs: [{at: "strength", bn: 2}, {at: "charisma", bn: 1}],
                M: ["Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Mehen", "Nadarr", "Pandjed", "Patrin", "Rhogar", "Shamash", "Shedinn", "Tarhun", "Torinn"],
                F: ["Akra", "Biri", "Daar", "Farideh", "Harann", "Havilar", "Jheri", "Kava", "Korinn", "Mishann", "Nala", "Perra", "Raiann", "Sora", "Surina", "Thava", "Uadjit"],
                sur: ["Clethtinthiallor", "Daardendrian", "Delmirev", "Drachedandion", "Fenkenkabradon", "Kepeshkmolik", "Kerrhylon", "Kimbatuul", "Linxakasendalor", "Myastan", "Nemmonis", "Norixius", "Ophinshtalajiir", "Prexijandilin", "Shestendeliath", "Turnuroth", "Verthisathurgiesh", "Yarjerit"]
            },
            {
                nome: "Anão Colina", attrs: [{at: "constitution", bn: 2}, {at: "wisdom", bn: 1}],
                M: ["Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"],
                F: ["Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"],
                sur: ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart"]
            },
            {
                nome: "Anão Montanha", attrs: [{at: "constitution", bn: 2}, {at: "strength", bn: 2}],
                M: ["Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"],
                F: ["Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"],
                sur: ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart"]
            },
            {
                nome: "Elfo Drow", attrs: [{at: "dexterity", bn: 2}, {at: "charisma", bn: 1}],
                M: ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"],
                F: ["Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"],
                sur: ["Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon", "Meliamne", "Naïlo", "Siannodel", "Xiloscient"]
            },
            {
                nome: "Alto Elfo", attrs: [{at: "dexterity", bn: 2}, {at: "intelligence", bn: 1}],
                M: ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"],
                F: ["Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"],
                sur: ["Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon", "Meliamne", "Naïlo", "Siannodel", "Xiloscient"]
            },
            {
                nome: "Elfo Florestal", attrs: [{at: "dexterity", bn: 2}, {at: "wisdom", bn: 1}],
                M: ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"],
                F: ["Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"],
                sur: ["Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon", "Meliamne", "Naïlo", "Siannodel", "Xiloscient"]
            },
            {
                nome: "Gnomo Florestal", attrs: [{at: "intelligence", bn: 2}, {at: "dexterity", bn: 1}],
                M: ["Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook"],
                F: ["Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna"],
                sur: ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Timbers", "Turen"]
            },
            {
                nome: "Gnomo Rocha", attrs: [{at: "intelligence", bn: 2}, {at: "constitution", bn: 1}],
                M: ["Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook"],
                F: ["Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna"],
                sur: ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Timbers", "Turen"]
            },
            {
                nome: "Meio-Elfo", attrs: [{at: "charisma", bn: 2}, {at: "dexterity", bn: 1}, {at: "strength", bn: 1}],
                M: ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis", "Aseir", "Bardeid", "Haseid", "Khemed", "Mehmen", "Sudeiman", "Zasheir", "Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd", "Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor", "Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer", "Stor", "Taman", "Urth", "Aoth", "Bareris", "Ehput-Ki", "Kethoth", "Mumed", "Ramas", "So-Kehur", "Thazar-De", "Urhur"],
                F: ["Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida", "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele", "Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", "Tana", "Zora", "Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra", "Arizima", "Chathi", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis", "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"],
                sur: ["Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon", "Meliamne", "Naïlo", "Siannodel", "Xiloscient", "Basha", "Dumein", "Jassan", "Khalid", "Mostana", "Pashar", "Rein", "Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag", "Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nemetsk", "Shemov", "Starag", "Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver", "Ankhalab", "Anskuld", "Fezim", "Hahpet", "Nathandem", "Sepret", "Uuthrakt"]
            },
            {
                nome: "Meio-Orc", attrs: [{at: "strength", bn: 2}, {at: "constitution", bn: 1}],
                M: ["Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thokk"],
                F: ["Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda"],
                sur: []
            },
            {
                nome: "Halfling Pes-leves", attrs: [{at: "dexterity", bn: 2}, {at: "charisma", bn: 1}],
                M: ["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby"],
                F: ["Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"],
                sur: ["Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"]
            },
            {
                nome: "Halfling Robusto", attrs: [{at: "dexterity", bn: 2}, {at: "constitution", bn: 1}],
                M: ["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby"],
                F: ["Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"],
                sur: ["Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"]
            },
            {
                nome: "Humano", attrs: [{at: "strength", bn: 1}, {at: "dexterity", bn: 1}, {at: "constitution", bn: 1}, {at: "intelligence", bn: 1}, {at: "wisdom", bn: 1}, {at: "charisma", bn: 1}],
                M: ["Aseir", "Bardeid", "Haseid", "Khemed", "Mehmen", "Sudeiman", "Zasheir", "Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd", "Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor", "Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer", "Stor", "Taman", "Urth", "Aoth", "Bareris", "Ehput-Ki", "Kethoth", "Mumed", "Ramas", "So-Kehur", "Thazar-De", "Urhur"],
                F: ["Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida", "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele", "Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", "Tana", "Zora", "Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra", "Arizima", "Chathi", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis"],
                sur: ["Basha", "Dumein", "Jassan", "Khalid", "Mostana", "Pashar", "Rein", "Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag", "Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nemetsk", "Shemov", "Starag", "Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver", "Ankhalab", "Anskuld", "Fezim", "Hahpet", "Nathandem", "Sepret", "Uuthrakt"]
            },
            {
                nome: "Tiefling", attrs: [{at: "charisma", bn: 2}, {at: "intelligence", bn: 1}],
                M: ["Akmenos", "Amnon", "Barakas", "Damakos", "Ekemon", "Iados", "Kairon", "Leucis", "Melech", "Mordai", "Morthos", "Pelaios", "Skamos", "Therai"],
                F: ["Akta", "Anakis", "Bryseis", "Criella", "Damaia", "Ea", "Kallista", "Lerissa", "Makaria", "Nemeia", "Orianna", "Phelaia", "Rieta"],
                sur: ["Art", "Carrion", "Chant", "Creed", "Despair", "Excellence", "Fear", "Glory", "Hope", "Ideal", "Music", "Nowhere", "Open", "Poetry", "Quest", "Random", "Reverence", "Sorrow", "Temerity", "Torment", "Weary"]
            }
        ],
        aparencia: ["Jóias distintivas: brincos, colar, argola, pulseiras", "Piercings", "Roupas extravagantes ou extravagante", "Roupa formal e limpa", "Roupas sujas e esfarrapadas", "Cicatriz pronunciada", "Dentes perdidos", "Dedos faltando", "Cor dos olhos incomum (ou duas cores diferentes)", "Tatuagens", "Marca de nascença", "Cor da pele incomum", "Careca", "Barba ou cabelo trançado", "Cor do cabelo incomum", "Contração do olho nervoso", "Nariz distintivo", "Postura distintiva (torta ou rígida)", "Excepcionalmente bonito", "Excepcionalmente feio"],
        maneirism: ["Propenso a cantar, assobiar ou cantarolar baixinho", "Fala em rima ou alguma outra maneira peculiar", "Particularmente baixa ou alta voz", "Insulta palavras, bate na língua ou gagueja", "Enuncia claramente demais", "Fala alto", "Sussurros", "Usa discurso florido ou palavras longas", "Frequentemente usa a palavra errada", "Usa juramentos e exclamações coloridas", "Faz piadas constantes ou trocadilhos", "Propenso a previsões de desgraça", "Inquietas", "Estrabismo", "Olha para a distância", "Mastiga algo", "Toca os dedos", "Morde as unhas", "Torce o cabelo ou puxa barba"],
        classes: {
            1: {name: 'barbarian', nome: "Barbaro", atributos: ["strength"], dv: 12, mdv: 4},
            2: {name: 'bard', nome: "Bardo", atributos: ["charisma"], dv: 8, mdv: 2},
            3: {name: 'warlock', nome: "Bruxo", atributos: ["charisma"], dv: 8, mdv: 2},
            4: {name: 'cleric', nome: "Clerigo", atributos: ["wisdom"], dv: 8, mdv: 2},
            5: {name: 'druid', nome: "Druida", atributos: ["wisdom"], dv: 8, mdv: 2},
            6: {name: 'sorcerer', nome: "Feiticeiro", atributos: ["charisma"], dv: 6, mdv: 1},
            7: {name: 'figher', nome: "Guerreiro", atributos: ["strength"], dv: 10, mdv: 3},
            8: {name: 'rogue', nome: "Ladino", atributos: ["dexterity"], dv: 8, mdv: 2},
            9: {name: 'mage', nome: "Mago", atributos: ["intelligence"], dv: 6, mdv: 1},
            10: {name: 'monk', nome: "Monge", atributos: ["dexterity", "wisdom"], dv: 8, mdv: 2},
            11: {name: 'paladin', nome: "Paladino", atributos: ["strength", "charisma"], dv: 10, mdv: 2},
            12: {name: 'ranger', nome: "Ranger", atributos: ["dexterity", "wisdom"], dv: 10, mdv: 2}
        },
        items: [
            {tabela: "a", valores: [1, 1, 1, 1]},
            {tabela: "b", valores: [1, 1, 2, 2]},
            {tabela: "c", valores: [1, 2, 3, 3]},
            {tabela: "d", valores: [2, 2, 3, 3]},
            {tabela: "e", valores: [2, 3, 3, 4]},
            {tabela: "f", valores: [2, 3, 4, 4]},
            {tabela: "g", valores: [3, 3, 4, 4]},
            {tabela: "h", valores: [3, 4, 4, 5]},
            {tabela: "i", valores: [4, 4, 5, 5]}
        ],
        magItens: [
            [
                ["Potion of healing", "Spell scroll (cantrip)"],
                ["Potion of climbing", "Spell scroll (1st level)"],
                ["Spell scroll (2nd level)", "Potion of greater healing"],
                ["Bag of holding", "Driftglobe"]
            ],
            [
                ["Potion of greater healing", "Potion of fire breath", "Potion of resistance", "Ammunition , +1", "Potion of animal friendship", "Potion of hill giant strength", "Potion of growth", "Potion of water breathing"],
                ["Spell scroll (2nd level)", "Spell scroll (3rd leve l)", "Bag of holding", "Keoghtom's ointment", "Oil of slipperiness", "Dust of disappearance", "Dust ·of dryness", "Dust of sneezing and choking", "Elemental gem"],
                ["Philter of love", "Alchemy jug", "Cap of water breathing", "Cloak of the manta ray", "Driftglobe", "Goggles of night", "Helm of comprehending languages", "Immovable rod", "Lantern of revealing"],
                ["Mariner's armor", "Mithral armor", "Potion of poison", "Ring of swimming", "Robe of useful items", "Rope of climbing", "Saddle of the cavalier", "Wand of magic detection", "Wand of secrets"]
            ],
            [
                ["Potion of superior healing", "Spell scroll (4th level)", "Ammunition, +2", "Potion of clairvoyance", "Potion of diminution", "Potion of gaseous form", "Potion of frost giant strength"],
                ["Potion of stone giant strength", "Potion of heroism", "Potion of invulnerability", "Potion of mind reading", "Spell scroll (5th le vel)", "Elixir of health"],
                ["Oil of etherealness", "Potion of fire giant strength", "Quaal's feather token", "Scroll of protection", "Bag of beans", "Bead of force", "Chime of opening"],
                ["Decanter of endless water", "Eyes of minute seeing", "Folding boat", "Hewa rd's handy haversack", "Horseshoes of speed", "Necklace of fireballs", "Periapt of health", "Sending stones"]
            ],
            [
                ["Potion of supreme healing", "Potion of invisibility", "Potion of speed", "Spell scroll (6th level)"],
                ["Spell scroll (7th level)", "Ammunition, +3", "Oil of sharpness", "Potion of fl yi ng"],
                ["Potion of cloud giant strength", "Potion of longevity", "Potion of vitality", "Spell scroll (8th level)"],
                ["Horseshoes of a zephyr", "Nolzur's marvelous pigments", "Bag of devouring", "Portable hole"]
            ],
            [
                ["Spell scroll (8th level)", "Potion of storm giant strength"],
                ["Potion of supreme healing", "Spell scroll (9th level)"],
                ["Universal solvent", "Arrow of slaying"],
                ["Sovereign glue"]
            ],
            [
                ["Weapon, +1", "Shield,+ 1", "Sentinel shield", "Amulet of proof against detection and location", "Boots of elvenkind", "Boots of striding and springing", "Bracers of archery", "Brooch of shielding", "Broom of flying", "Cloak of elvenkind", "Cloak of protection", "Gauntlets of ogre power", "Hat of disguise", "Javelin of lightning", "Pearl of power", "Rod of the pact keeper, + 1"],
                ["Slippers of spider climbing", "Staff of the adder", "Staff of the python", "Sword of vengeance", "Trident of fish command", "Wand of magic missiles", "Wand of the war mage, + 1", "Wand of web", "Weapon of warning", "Adamantine armor (chain mail)", "Adamantine armor (chain shirt)", "Adamantine armor (scale mail)", "Bag of tricks (gray)", "Bag of tricks (rust)"],
                ["Bag of tricks (tan)", "Boots of the winterlands", "Circlet of blasting", "Deck of illusions", "Eversmoking bottle", "Eyes of charming", "Eyes of the eagle", "Figurine of wondrous power (silver raven)", "Gem of brightness", "Gloves of missile snaring", "Gloves of swimming and climbing", "Gloves of thievery", "Headband of intellect", "Helm of telepathy", "Instrument of the bards (Doss lute)", "Instrument of the bards (Fochlucan bandore)"],
                ["Instrument of the bards (Mac-Fuimidh cittern)", "Medallion of thoughts", "Necklace of adaptation", "Periapt of wound closure", "Pipes of haunting", "Pipes of the sewers", "Ring of jumping", "Ring of mind shielding", "Ring of warmth", "Ring of water walking", "Quiver of Ehlonna", "Stone of good luck", "Wind fan", "Winged boots"]
            ],
            [
                ["Weapon, +2","Figurine of wondrous power Bronze griffon","Figurine of wondrous power Ebony fly","Figurine of wondrous power Golden lions","Figurine of wondrous power Ivory goats","Figurine of wondrous power Marble elephant","Figurine of wondrous power Onyx dog","Serpentine owl","Adamantine armor (breastplate)","Adamantine armor (splint)","Amulet of health","Armor of vulnerability","Arrow-catching shield","Belt of dwarvenkind","Belt of hill giant strength","Berserker axe","Boots of levitation","Boots of speed","Bowl of commanding water elementals","Bracers of defense","Brazier of commanding fire elementals","Cape of the mountebank","Censer of controlling air elementals","Armor, +1 chain mail"],
                ["Armor of resistance (chain mail)","Armor,+ 1 chain shirt","Armor of resistance (chain shirt)","Cloak of displacement","Cloak of the bat","Cube afforce","Daern's instant fortress","Dagger of venom","Dimensional shackles","Dragon slayer","Elven chain","Flame tongue","Gem of seeing","Giant slayer","Clamoured studded leather","Helm of teleportation","Horn of blasting","Horn of Valhalla (silver or brass)","Instrument of the bards (Canaith mandolin)","Instrument ofthe bards (Cii lyre)","loun stone (awareness)","loun stone (protection)","loun stone (reserve) ","loun stone (sustenance)"],
                ["Iron bands of Bilarro","Armor, + 1 leather","Armor of resistance (leather)","Mace of disruption","Mace of smiting","Mace of terror","Mantle of spell resistance","Necklace of prayer beads","Peri apt of proof against poison","Ring of animal influence","Ring of evasion","Ring of feather falling","Ring of free action","Ring of protection","Ring of resistance","Ring of spell storing","Ring of the ram","Ring of X-ray vision","Robe of eyes","Rod of rulership","Rod of the pact keeper, +2","Rope of entanglement","Armor, +1 scale mail"],
                ["Armor of resistance (scale mail)","Shield, +2","Shield of missile attraction","Staff of charming","Staff of healing","Staff of swarming insects","Staff of the woodlands","Staff of withering","Stone of controlling earth elementals","Sun blade","Sword of life stealing","Sword of wounding","Tentacle rod","Vicious weapon","Wand of binding","Wand of enemy detection","Wand of fear","Wand of fireballs","Wand of lightning bolts","Wand of paralysis","Wand of the war mage, +2","Wand of wonder","Wings of flying"]
            ],
            [
                ["Weapon, +3","Amulet of the planes","Carpet of flying","Crystal ball (very rare version)","Ring of regeneration","Ring of shooting stars","Ring of telekinesis","Robe of scintillating colors","Robe of stars","Rod of absorption","Rod of alertness","Rod of security","Rod of the pact keeper, +3","Scimitar of speed","Shield, +3","Staff of fire","Staff of frost"],
                ["Staff of power","Staff of striking","Staff of thunder and lightning","Sword of sharpness","Wand of polymorph","Wand of the war mage, +3","Adamantine armor (half plate)","Adamantine armor (plate)","Animated shield","Belt of fire giant strength","Belt of frost (or stone) giant strength","Armor, + 1 breastplate","Armor of resistance (breastplate)","Candle of invocation","Armor, +2 chain mail","Armor, +2 chain shirt"],
                ["Cloak of arachnida","Dancing sword","Demon armor","Dragon scale mail","Dwarven plate","Dwarven thrower","Efreeti bottle","Figurine of wondrous power (obsidian steed)","Frost brand","Helm of brilliance","Horn ofValhalla (bronze)","Instrument of the bards (Anstruth harp)","loun stone (absorption)","loun stone (agility)","loun stone (fortitude)","loun stone (insight)","loun stone (intellect)","loun stone (leadership)"],
                ["loun stone (strength)","Armor, +2 leather","Manual of bodily health","Manual of gainful exercise","Manual of golems","Manual of quickness of action","Mirror of life trapping","Nine li ves stealer","Oath bow","Armor, +2 scale mail","Spellguard shield","Armor, + 1 splint","Armor of resistance (splint)","Armor, + 1 studded leather","Armor of resistance (studded leather)","Tome of clear thought","Tome of leadership and influence","Tome of understanding"]
            ],
            [
                ["Defender","Hammer of thunderbolts","Luck blade","Sword of answering","Holy avenger","Ring of djinni summoning","Ring of invisibility","Ring of spell turning","Rod of lordly might","Staff of the magi","Vorpal sword","Belt of cloud giant strength","Armor, +2 breastplate","Armor, +3 chain mail","Armor, +3 chain shirt","Cloak of invisibility"],
                ["Crystal ball (legendary version)","Armor, + 1 half plate","Iron flask","Armor, +3 leather","Armor, +1 plate","Robe of the archmagi","Rod of resurrection","Armor, +1 scale mail","Scarab of protection","Armor, +2 splint","Armor, +2 studded leather","Well of many worlds","Armor, +2 half plate","Armor, +2 plate","Armor, +3 studded leather"],
                ["Armor, +3 breastplate","Armor, +3 splint","Armor, +3 half plate","Armor, +3 plate","Apparatus of Kwalish","Armor of invulnerability","Belt of storm giant strength","Cubic gate","Deck of many things","Efreeti chain","Armor of resistance (half plate)","Horn ofValhalla (iron)","Instrument of the bards (OIIamh harp)","loun stone (greater absorption)","loun stone (mastery)"],
                ["loun stone (regeneration)","Plate armor of etherealness","Plate armor of resistance","Ring of air elemental command","Ring of earth elemental command","Ring of fire elemental command","Ring of three wishes","Ring of water elemental command","Sphere of annihilation","Talisman of pure good","Talisman of the sphere","Talisman of ultimate evil","Tome of the stilled tongue"]
            ]
        ],
        lvs: [
            {lv: 6, mod: 1}, {lv: 7, mod: 1}, {lv: 8, mod: 2},
            {lv: 9, mod: 2}, {lv: 10, mod: 3}, {lv: 11, mod: 3},
            {lv: 12, mod: 4}, {lv: 13, mod: 4}, {lv: 14, mod: 5},
            {lv: 15, mod: 5}, {lv: 16, mod: 6}
        ]
    }
});
angular.module("koa-fearun").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'public/partials/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .state('workspace', {
            templateUrl: 'public/partials/workspace.html',
            controller: ["$rootScope", function ($rootScope) {

            }]
        })
        .state('workspace.home', {
            url: '/home',
            templateUrl: 'public/partials/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .state('workspace.personagens', {
            url: '/personagens',
            templateUrl: 'public/partials/personagens.html',
            controller: 'PersonagensController',
            controllerAs: 'vm'
        })
        .state('workspace.character', {
            url: '/personagen/:add/:id',
            templateUrl: 'public/partials/personagen.html',
            controller: 'PersonagenController',
            controllerAs: 'vm'
        });

}]);
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
angular.module("koa-fearun").controller('LoginController', ['$scope','$state', function ($scope, $state) {
    let vm = this;
    vm.submit = function(login) {
        $state.go('workspace.home')
    };
}]);
angular.module("koa-fearun").controller('PersonagenController', ['$scope', '$state', '$stateParams', 'Tables', 'Personagens', function ($scope, $state, $stateParams, Tables, Personagens) {
    let vm = this;
    vm.character = {};
    $scope.newChar = false;
    $scope.addNew = $stateParams.add;

    if(!$stateParams.add) {
        //carregar o char.
        Personagens.getById($stateParams.id).then(function (char) {
            vm.character = char;
        })
    }
    console.log('$scope.addNew', $scope.addNew);

    $scope.generateCharacter = function () {
        $scope.newChar = true;
        vm.character = new Personagens();
        angular.extend(vm.character, {
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
            items: [],
            power: 0,
            hp: 0
        });
        vm.character.level = getRandomInt(6, 17);

        vm.character.appearance = Tables.aparencia[getRandomInt(0, Tables.aparencia.length)];
        vm.character.maneirism = Tables.maneirism[getRandomInt(0, Tables.maneirism.length)];

        vm.character.strength = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.dexterity = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.constitution = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.intelligence = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.wisdom = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);
        vm.character.charisma = getRandomInt(8, 19) + (vm.character.lv >= 10 ? 1 : 0);

        vm.character.gender = getRandomInt(1, 11) > 3 ? "M" : "F";
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

        vm.character.power += (Tables.lvs[(vm.character.level - 6)].mod +
            vm.character.strengthModifier +
            vm.character.dexterityModifier +
            vm.character.constitutionModifier +
            vm.character.intelligenceModifier +
            vm.character.wisdomModifier +
            vm.character.charismaModifier);

        const attrs = vm.character.classes[0].cl.atributos;
        for(let a = 0; a < attrs.length; a++) {
            vm.character.power += vm.character[attrs[a] + 'Modifier'];
        }


        let templv = 1;
        let tempclmod = 0;
        vm.character.hp = 0;
        for(let i = 0; i < vm.character.classes.length; i++) {
            for(let b = 0; b < vm.character.classes[i].qtd; b++) {
                tempclmod += vm.character.classes[i].cl.mdv;
                if(templv === 1 || templv === 5 || templv === 10 || templv === 15) {
                    vm.character.hp += vm.character.classes[i].cl.dv;
                } else {
                    let min = Math.floor(vm.character.classes[i].cl.dv / 2);
                    vm.character.hp += getRandomInt(min, (vm.character.classes[i].cl.dv + 1));
                }
                templv++;
            }
        }

        vm.character.hp += (vm.character.constitutionModifier * vm.character.level);
        vm.character.power += Math.floor(tempclmod / vm.character.level);

        for(let j = 0; j < vm.character.items.length; j++) {
            vm.character.power += vm.character.items[j].poder;
        }

    };

    $scope.saveCharacter = function () {
        vm.character.$saveOrUpdate().then(function () {
            $scope.newChar = false;
        });
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}]);
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
