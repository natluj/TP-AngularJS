/**
 * Controleur de la liste
 */
angular.module('momo').controller('listCtrl', function($scope) {
	$scope.list = [
		{name: 'Mizuno'},
		{name: 'Ellana'},
		{name: 'Arzenfeil'},
		{name: 'Rudiel'}];
	$scope.add = function(name) {
		$scope.list.push({name: name});
	}
	$scope.gimmeYourName = function(nom) {
		console.log('Je m\'appelle ', nom);
		$scope.$emit('choix', nom);
	}
});