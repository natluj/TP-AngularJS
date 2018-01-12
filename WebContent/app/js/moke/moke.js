/**
 * Module moke
 */
angular.module('moke', ['ngRoute']).config(function($routeProvider) {
	$routeProvider
		.when('/poke', {
			templateUrl: './html/poke.html',
			controller: 'pokeCtrl'
		}).when('/pokeGBE', {
			templateUrl: './html/poke2.html',
			controller: 'poke2Ctrl'
		}).when('/poke/:num', {
			templateUrl: './html/pokemon.html',
			controller: 'pokemonCtrl'
		}).when('/poke#', {
			templateUrl: './html/pokemon.html',
			controller: 'pokeCtrl'
		}).otherwise({
			redirectTo: '/poke'
		});
});