angular.module('contatosApp').controller('contatosController', contatosController);

contatosController.$inject = ['$scope'];

function contatosController($scope)
{
    $scope.listaContatos = [];

    $scope.adicionar = function(){

        var nome = $scope.nome;
        var email = $scope.email;
        var idade = $scope.idade;
    
        $scope.listaContatos.push({ 'nome': nome, 'email': email, 'idade': idade });

        $scope.nome = '';
        $scope.email = '';
        $scope.idade = '';
    }

    $scope.deletar = function(index){
        
        $scope.listaContatos.splice(index, 1);
    }
}