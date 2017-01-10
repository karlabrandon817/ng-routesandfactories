console.log('hi');

angular.module('myApp').controller('JarjarController', ['$scope', 'HighfiveFactory', function($scope, HighfiveFactory) {
    console.log('HighfiveFactory:', HighfiveFactory.skills);
    $scope.success = HighfiveFactory.successful.jarjar;
    $scope.attempts = HighfiveFactory.attempts.jarjar;
    console.log($scope.success + ' out of ' + $scope.attempts);
    $scope.highfiveJarjar = function() {
        console.log('Clicked on high five with jarjar');
        $scope.status = HighfiveFactory.highfive('jarjar');
        $scope.success = HighfiveFactory.successful.jarjar;
        $scope.attempts = HighfiveFactory.attempts.jarjar;
    };
}]);
