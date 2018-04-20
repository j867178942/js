// angular.module("myApp")
//     .controller("get_list",function ($scope,$http,$state,$stateParams
//         ) {
//             //公共部分！
//             $scope.seek  =  $stateParams ;
//             $scope.seek.size = 8 ;
//             http() ;
//             function http() {
//                 $http({
//                     method: "GET",
//                     url: "/carrots-admin-ajax/a/article/search",
//                     params: $scope.seek
//                 }).then(function (response) {
//                         if (response.data.code === 0) {
//                             //时间戳转换！！！
//                             //下面直接打印这个数组了，
//                             $scope.records = response.data.data.articleList;
//                             $scope.num_all = response.data.data.total;
//                             console.log(response.data.data.articleList);
//                             $scope.page = Math.ceil($scope.num_all / 8);
//                             $scope.list_button = [];
//                             if ($scope.page > 5) {
//                                 for (i = 0; i < 5; i++) {
//                                     $scope.list_button[i] = $scope.x_x + i;
//                                 }
//                             } else {
//                                 for (i = 0; i < 5; i++) {
//                                     $scope.list_button[i] = $scope.x_x + i;
//                                 }
//                             }
//                         }
//                     }
//                 );
//             }
//             //时间选择器！
//             // $("#pickdate").dateDropper({
//             //     animate: false,
//             //     format: 'Y-m-d',
//             //     maxYear: '2050'
//             // });
//             // $("#pickdate2").dateDropper({
//             //     animate: false,
//             //     format: 'Y-m-d',
//             //     maxYear: '2050'
//             // });
//             //一个数组一个对象  两个下拉框
//             $scope.type = [
//                 { value:0 ,text:"首页banner"},
//                 { value:1 ,text:"找职位banner"},
//                 { value:2 ,text:"找精英banner"},
//                 { value:3 ,text:"行业大图"}
//             ] ;
//             $scope.state ={
//                 1:"草稿",
//                 2:"上线"
//             } ;
//             //翻页部分
//             $scope.go_to_page = function (x) {
//                 $scope.params = x;
//                 console.log($scope.params);
//                 //重载
//                 $http({
//                     method: "GET",
//                     url: "/carrots-admin-ajax/a/article/search",
//                     params: {page: $scope.params, size: 8}
//                 }).then(function (response) {
//                         if (response.data.code === 0) {
//                             //时间戳转换！！！
//                             //下面直接打印这个数组了，
//                             $scope.records = response.data.data.articleList;
//                             var num_all;
//                             //看看总数是多少 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!总数
//                             $scope.num_all = response.data.data.total;
//                             console.log(response.data.data.articleList);
//                             //设置分页。
//                             $scope.page = Math.ceil($scope.num_all / 8);
//                             console.log($scope.page);
//
//                             //如果第一次进入就x_x就是1，大于五页就5个摁钮，小于五页就页个摁扭
//                             // $scope.list_button = [];
//                             // if ($scope.x_x == undefined) {
//                             //     $scope.x_x = 1;
//                             // }
//                             if ($scope.page > 5) {
//                                 if (x < 3) {
//                                     $scope.list_button = [
//                                         1,
//                                         2,
//                                         3,
//                                         4,
//                                         5
//                                     ]
//                                 } else if (x > $scope.page - 3) {
//                                     $scope.list_button = [
//                                         $scope.page - 4,
//                                         $scope.page - 3,
//                                         $scope.page - 2,
//                                         $scope.page - 1,
//                                         $scope.page
//                                     ]
//                                 } else {
//                                     $scope.list_button = [
//                                         x - 2,
//                                         x - 1,
//                                         x,
//                                         x + 1,
//                                         x + 2
//                                     ]
//                                 }
//                             } else {
//                                 for (i = 0; i < $scope.page; i++) {
//                                     $scope.list_button[i] = $scope.x_x + i;
//                                 }
//                                 console.log($scope.list_button);
//                             }
//                         }
//                         $scope.color = function () {
//                             angular.element(document.querySelector(".go_to_page_my"))
//                         }
//                     }
//                 );
//             };
//             $scope.go_to_page_last = function () {
//                 if ($scope.params != 1) {
//                     $scope.params = $scope.params - 1;
//                     $scope.go_to_page($scope.params);
//                 } else {
//                     alert("到头了！");
//                 }
//                 // if($scope.params == )
//             };
//             $scope.go_to_page_next = function () {
//                 if ($scope.params != $scope.page) {
//                     $scope.params = $scope.params + 1;
//                     $scope.go_to_page($scope.params);
//                 } else {
//                     alert("到头了！");
//                 }
//             };
//             //搜索部分
//             $scope.search =function (startAt,endAt,type,status) {
//
//                 if(!$scope.lookfor.start_1  ||  !$scope.loolfor.end_1 ){
//                     $scope.lookfor.start_1 = "" ;
//                     $scope.lookfor.end_1 = "" ;
//                 }
//                 $state.go("home.text2",{
//                         startAt:$scope.lookfor.start_1,
//                         endAt:$scope.lookfor.end_1  ,
//                         type:$scope.lookfor.type_1  ,
//                         status:$scope.lookfor.state_1
//                     }
//                 )
//             } ;
//             $scope.clear_all = function () {
//                 $state.go(
//                     "home.text2"
//                 )
//             };
//
//         }
//
//     );
//
//
//
//
