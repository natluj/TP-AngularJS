/**
 * Controleur du filtre
 */
angular.module('momo').filter('choixLongueur', function() {
	return function(input, lg) {
		var output = [];
		for (var i in input) {
			if (input[i].length === lg || lg === undefined) {
				output.push(input[i]);
			}
		}
		return output;
	}
});