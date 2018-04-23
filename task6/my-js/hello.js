var app = angular.module('myApp');

//点击退出
app.controller("hid2",function ($scope,$http,$state) {
    //点击隐藏Articael
    $scope.Article1 =false;
    $scope.hid1 = function () {
        $scope.Article1 = !$scope.Article1 ;
    };
    //    退出发请求！！
    $scope.logout = function () {
        if(confirm("你确定退出么？"))
            //confirm用户点击，为true
            $http({
                method:"POST",
                url:"/carrots-admin-ajax/a/logout"
            }).then(function successCallback(response) {
                if(response.data.code===0){
                    console.log(response.data);
                    $state.go("login",{reload:true})
                }
            })
    }
});
// //点击隐藏Articael
// app.controller('hid2',function ($scope) {
//     //点击隐藏Articael
//     $scope.Article1 =false;
//     $scope.hid1 = function () {
//         $scope.Article1 = !$scope.Article1 ;
//     };
// });