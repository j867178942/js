angular.module("myApp")
    .controller("get_list2",function ($scope,$http,$state,$stateParams) {
            //公共函数
            $scope.seek = $stateParams;
            $scope.seek.size = 8;
            http();
            function http() {
                $http({
                    method: "GET",
                    url: "/carrots-admin-ajax/a/article/search",
                    params: $scope.seek
                }).then(function (response) {
                    console.log(response) ;
                    if (response.data.code === 0) {
                        $scope.records = response.data.data.articleList;
                        // $scope.give_me_page =response.data.data.page ;
                        $scope.num_all = response.data.data.total;
                        $scope.page = Math.ceil($scope.num_all / 8);
                        $scope.list_button = [];
                        if ($scope.page < 5) {
                            for (i = 0; i < $scope.page; i++) {
                                $scope.list_button[i] = i + 1;
                            }
                        } else {
                            if($stateParams.page == undefined){
                                $stateParams.page  = 1 ;
                            }
                            if ($stateParams.page <= 3) {
                                $scope.list_button = [1, 2, 3, 4, 5];
                            } else if ($stateParams.page >= ($scope.page - 3)) {
                                $scope.list_button = [
                                    $scope.page - 4,
                                    $scope.page - 3,
                                    $scope.page - 2,
                                    $scope.page - 1,
                                    $scope.page
                                ]
                            } else {
                                $stateParams.page = parseInt($stateParams.page) ;
                                $scope.list_button = [
                                    $stateParams.page - 2,
                                    $stateParams.page - 1,
                                    $stateParams.page,
                                    $stateParams.page + 1,
                                    $stateParams.page + 2
                                ]
                            }
                        }
                    } else {
                        alert("出错了！");
                    }
                });
            }
            $scope.clear = function () {
                $state.go(
                    "home.text2",
                    {
                        startAt:"" ,
                        endAt:"",
                        type:"",
                        status:"",
                        page:""
                    }
                )
            };
            $scope.search = function () {
                if (!$scope.startAt || !$scope.endAt) {
                    $scope.startAt = "";
                    $scope.endAt = "";
                }else {
                    $scope.startAt = Date.parse($scope.startAt) ;
                    $scope.endAt = Date.parse($scope.endAt) ;
                }
                $state.go("home.text2", {
                    startAt: $scope.startAt,
                    endAt: $scope.endAt,
                    type: $scope.type,
                    status: $scope.status,
                    page:"1"
                })
            };
            $scope.type_my = [
                {value: 0, text: "首页banner"},
                {value: 1, text: "找职位banner"},
                {value: 2, text: "找精英banner"},
                {value: 3, text: "行业大图"}
            ];
            $scope.status_my = {
                1: "草稿",
                2: "上线"
            };
            $scope.go_to_page = function (x) {
                $state.go("home.text2",
                    {
                        page:x
                    }) ;
            } ;
            $scope.go_to_page_last = function () {
                if( $stateParams.page == 1){
                    alert("没有上一页了！") ;
                }else {
                    $state.go("home.text2",{
                        page:$stateParams.page - 1
                    })
                }
            };
            $scope.go_to_page_next = function () {
                if($stateParams.page == $scope.page){
                    alert("没有下一页了")
                }else {
                    $state.go("home.text2",{
                        page:parseInt($stateParams.page) + 1
                    })
                }
            };
            $scope.change = function (a) {
                for(i = 0 ; i < 8 ; i++){
                    if($scope.records[i].id ===a ){
                        $scope.end_line = $scope.records[i].status ;
                    }
                }

                if($scope.end_line=== 1){
                    var params_this = {"id":a,"status":2} ;
                    $http({
                        method:"put",
                        url: "/carrots-admin-ajax/a/u/article/status",
                        params:params_this
                    }).then(function (response) {
                        if(response.data.code ===0){
                            alert("上线成功") ;
                            $state.reload("home.text2");
                        }
                    })
                }else{
                    var params_this = {"id":a,"status":1} ;
                    $http({
                        method:"put",
                        url: "/carrots-admin-ajax/a/u/article/status",
                        params:params_this
                    }).then(function (response) {
                        if(response.data.code ===0){
                            alert("下线成功") ;
                            $state.reload("home.text2");

                        }
                    })
                }
            };
            $scope.delete = function (a) {
                var url_this =   "/carrots-admin-ajax//a/u/article/"+ a ;
                $http({
                    method:"delete",
                    url:url_this
                }).then(function (response) {
                    if(response.data.code === 0 ){
                        alert("删除成功");
                        $state.reload("home.text2");
                    }
                })
            };

            $scope.edit = function (a){
                $scope.edit_url = "/carrots-admin-ajax/a/article/"+a ;
                $http({
                    method:"GET",
                    url:$scope.edit_url
                }).then(function (response) {
                    console.log(response) ;
                    $state.go("home.add",{
                        change:"10000",
                        id:a,
                        title:response.data.data.article.title,
                        status:response.data.data.article.status,
                        img:response.data.data.article.img,
                        content:response.data.data.article.content,
                        url:response.data.data.article.url,
                        type:response.data.data.article.type,
                        industry:response.data.data.article.industry
                    })
                });
            } ;

        }
    ) ;
