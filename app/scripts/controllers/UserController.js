var users = angular.module('users', ['firebase']);

users.controller('UserController', ['$scope', '$firebase', function($scope, $firebase) {

	$scope.userRef = new Firebase('https://joshwood.firebaseio.com/users');

	$scope.users = $firebase($scope.userRef.limit(15));

	$scope.removeUser = function(u){
		$scope.users.$remove(u.userId);
	};

	$scope.addUser = function() {
		$scope.userRef.child($scope.user.userId).transaction(function(currentUserData){
			if(currentUserData === null){
				return $scope.user;
			}
		}, function(error, committed){
			if(!committed){
				window.alert("User id exists already");
			}else{
				$scope.user = null;
				$scope.$apply();
			}
		});

	}

}]);
