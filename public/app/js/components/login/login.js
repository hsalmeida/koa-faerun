angular.module("koa-fearun").controller('LoginController', ['$scope','$state', function ($scope, $state) {
    let vm = this;
    vm.submit = function(login) {
        $state.go('workspace.home')
    };
}]);