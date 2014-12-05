var myDirectives = angular.module('myDirectives', []);
myDirectives.directive('hello', function() {
    return {
        restrict: 'AEMC',
        template: '<div>Hello Angular</div>',
        replace: true
    };
});