/**
 * Controleur pour un seul poke avec promesses
 */
angular.module('moke').controller('pokemonCtrl', ['$scope', '$routeParams', 'PokemonService', function($scope, $routeParams, PokemonService) {
	$scope.poke = undefined;
	var pokeNum = $routeParams.num;
	console.log(pokeNum);
	PokemonService.getOne(pokeNum).then(function(poke) {
		$scope.poke = poke;
	});
}]);