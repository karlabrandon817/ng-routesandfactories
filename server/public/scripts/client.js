var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/harry', {
        templateUrl: 'views/partials/harry.html',
        controller: 'HarryController'
    }).when('/jarjar', {
        templateUrl: 'views/partials/jarjar.html',
        controller: 'JarjarController'
    }).when('/wilee', {
        templateUrl: 'views/partials/wilee.html',
        controller: 'WileeController'
    }).otherwise({
        redirectTo: 'harry'
    }); //end $routeProvider
}]); //end myApp.config

myApp.factory('HighfiveFactory', function() {
    var factory = {};

    var randomNumber = function() {
        Math.floor(Math.random() * 10 + 1);
        return Math.floor(Math.random() * 10 + 1);
    }; //end factory.randomNumber

    factory.skills = {
        harry: randomNumber(),
        jarjar: randomNumber(),
        wilee: randomNumber()
    };

    factory.attempts = {
        harry: 0,
        jarjar: 0,
        wilee: 0
    };

    factory.successful = {
        harry: 0,
        jarjar: 0,
        wilee: 0
    };

    factory.highfive = function(character) {
        var attempt = randomNumber();
        console.log('Attempted with', attempt, 'against', factory.skills[character]);
        if (attempt >= factory.skills[character]) {
            factory.attempts[character]++;
            factory.successful[character]++;
            return 'success';
        } else {
            factory.attempts[character]++;
            return 'failure';
        }
    };

    return factory;
});
