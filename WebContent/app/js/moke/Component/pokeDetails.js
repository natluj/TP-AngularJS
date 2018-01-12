/**
 * Component pour les détails d'un poke
 */
angular.module('moke').component('pokeDetails', {
	templateUrl: './html/pokeFiche.html',
	bindings: {
		pokemon: '=value'
	}
});