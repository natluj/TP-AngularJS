/**
 * Service pour la mémorisation des recherches
 */
angular.module('moke').service('searchHistory', function() {
	var history = {};
	this.get = function(pokeName) {
		if (!history[pokeName]) {
			history[pokeName] = {};
		}
		return history[pokeName];
	}
});