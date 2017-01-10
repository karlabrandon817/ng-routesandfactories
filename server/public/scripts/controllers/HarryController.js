console.log('hi');

angular.module('myApp').controller('HarryController', ['$scope', 'HighfiveFactory', function($scope, HighfiveFactory) {
    console.log('HighfiveFactory:', HighfiveFactory.skills);
    $scope.success = HighfiveFactory.successful.harry;
    $scope.attempts = HighfiveFactory.attempts.harry;
    console.log($scope.success + ' out of ' + $scope.attempts);
    $scope.highfiveHarry = function() {
        console.log('Clicked on high five with harry');
        $scope.status = HighfiveFactory.highfive('harry');
        $scope.success = HighfiveFactory.successful.harry;
        $scope.attempts = HighfiveFactory.attempts.harry;
    };
}]);
