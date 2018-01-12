/**
 * Directive pour le type de pokemon
 */
angular.module('moke').directive('pokeAbility', function() {
	return {
		priority: 0,
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
			scope.$watch(attrs.pokeAbility, function (value) {
				element.text('');
				for (var i=0; i<value; i++) {
					var bolt = angular.element('<span>')
						.addClass('fa')
						.addClass('fa-bolt');
					element.append(bolt);
				}
			});
		}
	};
});