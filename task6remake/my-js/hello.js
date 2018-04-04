var app = angular.module('myApp');
app.controller('hid2',function ($scope) {
    $scope.Article1 =false;
    $scope.hid1 = function () {

        $scope.Article1 = !$scope.Article1 ;
    }
});