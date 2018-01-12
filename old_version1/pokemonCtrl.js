/**
 * Controleur pour un seul poke
 */
angular.module('moke').controller('pokemonCtrl', function($scope, $http, $routeParams, pokedexId) {
	$scope.poke = undefined;
	var pokeNum = $routeParams.num;
	console.log(pokeNum);
	$http.get('https://pokeapi.co/api/v2/pokemon/'+pokeNum).then(function(response) {
		$scope.poke = response.data;
		console.log($scope.poke);
		console.log(pokedexId.calculateId($scope.poke));
	});
});