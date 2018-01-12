/**
 * Controleur pour la liste de poke
 */
angular.module('moke').controller('pokeCtrl', function($scope, $http, $timeout, $q, PokemonService) {
	$scope.list = [];
	var p = $http.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
	p.then(function(response) {
		for (var index in response.data.results) {
			$scope.list.push(response.data.results[index]);
		}
	});
	
	/**
	 * Les promesses
	 */
	/*console.log('AVANT');
	var p2 = p.then(function() {
		console.log('response OK');
	}, function() {
		console.log('response KO');
	});
	p2.then(function() { //si on a un return de p, il faudra mettre le retour de p en paramètre de p2
		console.log('Ok2');
	})
	console.log('APRES');
	p.then(function() {
		console.log('OK (bis) !');
	});
	p.then(undefined, function() {
		console.log('KO (bis) !');
	});
	$timeout(function() {
		p.then(function() {
			console.log('*roulements de tambour*  ET VOILA !');
		});
	}, 5000);*/
	
	var po = toto();
	var bb = ['Yep', 'Nope', 123];
	function toto() {
		var defer = $q.defer();
		$timeout(function() {
			if (Math.random()>0.5) {
				defer.resolve(bb);
			} else {
				defer.reject('NOPE !!');
			}
		}, Math.random()*5000);
		return defer.promise;
	};
	po.then(function(datas) {
		console.log(datas);
	})
});