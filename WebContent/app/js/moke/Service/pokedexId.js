/**
 * Service pour stocker la liste de pokemons
 */
angular.module('moke').value('pokedexId', { 
	calculateId: function(poke){
		return poke.id
	}
});