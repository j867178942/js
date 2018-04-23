angular.module("myApp")
    .controller('loginCtrl',function ($scope,$http,$state) {
        $scope.login = function () {
            //$http向后端传递状态
            $http({
                method:'post',
                url:'carrots-admin-ajax/a/login',
                params:$scope.params
            }).then(function successCallback(response) {
                if(response.data.code === -5003){
                    alert("账号未注册");
                }else if(response.data.message === -5004){
                    alert("密码错误");
                }else if(response.data.name ===""||response.data.pwd ===""){
                    alert("请输入正确的用户名和密码");
                }else if(response.data.code === 0){
                    $state.go('home');
                }else {
                    alert(response.data.message);
                }
            },function errorCallback(response) {
                //请求执行代码失败
                alert("请求服务器失败，请重试！");
                }
            )
        }
    });