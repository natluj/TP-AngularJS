/**
 * Service pour afficher la liste avec une promesse
 */
angular.module('moke').service('PokemonService', ['$http', 'pokedexId', function($http, pokedexId){
	var p1 = $http.get('https://pokeapi.co/api/v2/pokemon/?limit=25');
	this.getAll = function() {
		var p2 = p1.then(function(response) {
			var liste = response.data.results;
			var listeAvecId = liste.map(function(poke) {
				poke.id = pokedexId.calculateId(poke);
				return poke;
			});
			console.log('Ok Id');
			return listeAvecId;
		});
		console.log('Ok promise');
		return p2;
	};
	var vus = {};
	this.getOne = function(pokeNum) {
		if (!vus[pokeNum]) {
			vus[pokeNum] = $http.get('https://pokeapi.co/api/v2/pokemon/'+pokeNum);
		}
		var p2 = vus[pokeNum].then(function(response) {
			return response.data;
		});
		return p2;
	};
}]);