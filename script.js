var app = angular.module('myApp', ['ngAnimate']);

app.controller('appCtrl', ['$scope', function($scope){
	$scope.array = [{'path': 'images/1.jpg'}];	
	$scope.type = true;		

	$scope.startAnimation = function (type) {
		if (type) {
			$scope.array = [];
			for (var i = 1; i <= 50; i++) {
				$scope.array.push(
					{'path': 'images/' + i + '.jpg'}
				);
			}
			$scope.type = false;
		} else {
			$scope.array = [];
			for (var i = 50; i >= 1; i--) {
				$scope.array.push(
					{'path': 'images/' + i + '.jpg'}
				);
			}
			$scope.type = true;
		}
	}
}]);