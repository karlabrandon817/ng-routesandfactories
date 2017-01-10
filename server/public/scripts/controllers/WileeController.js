console.log('hi');

angular.module('myApp').controller('WileeController', ['$scope', 'HighfiveFactory', function($scope, HighfiveFactory) {
    console.log('HighfiveFactory:', HighfiveFactory.skills);
    $scope.success = HighfiveFactory.successful.wilee;
    $scope.attempts = HighfiveFactory.attempts.wilee;
    console.log($scope.success + ' out of ' + $scope.attempts);
    $scope.highfiveWilee = function() {
        console.log('Clicked on high five with wilee');
        $scope.status = HighfiveFactory.highfive('wilee');
        $scope.success = HighfiveFactory.successful.wilee;
        $scope.attempts = HighfiveFactory.attempts.wilee;
    };
}]);
