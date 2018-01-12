/**
 * Controleur de l'app
 */
angular.module('momo').controller('bodyCtrl', function($scope) {
	$scope.$on('choix', function(event, nom) {
		$scope.yourName = nom;
	});
});