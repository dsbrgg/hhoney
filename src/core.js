// MODULE
var core = angular.module('core', [ 'ngRoute' ]);

core.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');

	$routeProvider
		.when('/', {
			templateUrl : '/pages/construction.htm',
			controller  : 'mainController'
		});
});

// CONTROLLERS
core.controller('mainController', ['$scope', '$filter', '$log',
	function($scope, $filter, $log) {
        $scope.generalInfo = {
            email   : 'hawaiianhoney@bol.com.br',
            number  : '(351) 912 340 636',
            sign    : 'Abelhinha Inc. ©'
        };
	}
]);
