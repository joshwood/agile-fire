var sprints = angular.module('sprints', ['firebase']);

sprints.controller('SprintsController', ['$scope', '$firebase', function($scope, $firebase) {

	$scope.sprintsRef = new Firebase('https://joshwood.firebaseio.com/sprints');

	$scope.sprints = $firebase($scope.sprintsRef.limit(15));

	$scope.removeSprint = function(u){
		$scope.sprints.$remove(u.sprintId);
	};

	$scope.addSprint = function() {
		$scope.sprintsRef.child($scope.sprint.sprintId).transaction(function(currentSprintData){
			if(currentSprintData === null){
				return $scope.sprint;
			}
		}, function(error, committed){
			if(!committed){
				window.alert("Sprint id exists already");
			}else{
				$scope.sprint = null;
				$scope.$apply();
			}
		});

	}

}]);
