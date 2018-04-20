//本页页面的父级页面已经var过app所以不var
angular.module("myApp")
    .controller("articleCtrl",function (
        $scope,
        $http,
        $stateParams,
        $state,
        $type,
        $states,
        articleState) {
        $scope.params = $state.params;
        $scope.status = states ;
        $scope.type = type;
        $scope.startAt = $scope.params.startAt;
        $scope.endAt = $scope.params.endAt ;
        $scope.params.startAt = $scope.startAt
        ?Data.parse($scope.statrAt) - 8* 60*60 *1000
            :"" ;
        $scope.params.endAt = $scope.endAt
        ?Data.parse($scope.endAt) + (16*60*60*1000 - 1)
            :"";
        $scope.params.page = $stateParams.pageid ;
        //发送请求
        $http({
            method:"GET",
            url:"/carrots-admin-ajax/a/article/search",
            params:$scope.params    //序列化
        }).then(function (response) {
            if(response.data.code ===0){
                $scope.article = response.data.data.articleList ;//获取数据
                $scope.article.status = "";
                $scope.size = response.data.data.size;    //每个页数
                $scope.bigTotalItems = $scope.total ;//总个数
                $scope.page = response.data.data.page ;
                $scope.pages = Math.ceil(
                    response.data.data.total/rensponse.data.data.size
                );//总页数
            }
            //分页个数
            var newpageList = [] ;
            var pageid = $scope.page ;
            if(pageif < 3){
                for(var m = 0 ; m < ( $scope.pages > 5 ? 5 $scope.pages); m++){
                    newpageList.push(m+1);
                }
            }else if($scope.page - pageid > 3){
                for(
                    var n = pageid - 2 ;
                    n < (pageid+ 3)
                )
            }
        })


})