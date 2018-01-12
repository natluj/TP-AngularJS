/**
 * Controleur pour la liste de poke avec promesses
 */
angular.module('moke').controller('poke2Ctrl', ['$scope', 'PokemonService', 'searchHistory', function($scope, PokemonService, searchHistory) {

	$scope.list = [];
	PokemonService.getAll().then(function(liste) {
		$scope.list = liste;
		console.log('Ok');
	});
	$scope.recherche = searchHistory.get('pipi');
}]);