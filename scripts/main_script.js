var app = angular.module('myApp', ['ngRoute', 'angularUtils.directives.dirPagination']);
app.controller('myController', function ($scope, $location, $routeParams) {

    app.classCtrl($scope, $location, $routeParams);
    app.classExpandCtrl($scope, $location, $routeParams);
    app.classExpandDeleteCtrl($scope, $location, $routeParams);

    app.studentCtrl($scope, $location, $routeParams);
    app.studentExpandCtrl($scope, $location, $routeParams);

});
