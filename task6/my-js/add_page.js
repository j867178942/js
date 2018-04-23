app.controller('add_page',function ($scope,$state,$http,$stateParams,$httpParamSerializerJQLike) {
    $scope.change  = $stateParams.change ;
    $scope.id = $stateParams.id;
    console.log($stateParams) ;
    var E = window.wangEditor ;
    var editor = new E(document.getElementById('editor'));
    editor.customConfig.zIndex = 0 ;
    editor.create();
    $scope.type_my = [
        {value: 0, text: "首页banner"},
        {value: 1, text: "找职位banner"},
        {value: 2, text: "找精英banner"},
        {value: 3, text: "行业大图"}
    ];
    $scope.industry = [
        {value: 0, text: "移动互联网"},
        {value: 1, text: "电子商务"},
        {value: 2, text: "企业服务"},
        {value: 3, text: "O2O"},
        {value: 4, text: "教育"},
        {value: 5, text: "金融"},
        {value: 6, text: "游戏"}

    ];
    $scope.title = '' ;
    $scope.content = '' ;
    $scope.url_1 = '';
    $scope.imgshow =  function (source) {
        // $state.go('home.add');
        $scope.file = source.files[0] ;
        $scope.size = source.files[0].size ;
        if( $scope.size > 500*1024){
            alert("图片应小于500kb");
        }else {
            // $scope.size = (source.files[0].size/(1024)).toFixed(2) +"kb"  ;
            // $scope.img_name = source.files[0].name ;
            var file = source.files[0];
            var imageid = source.id ;
            if (!/image\/\w+/.test(file.type)) {
                alert("请您选择图片");
                return;
            }
            if(window.FileReader){
                var fr = new FileReader() ;
                fr.onerror = function () {
                    alert("error") ;
                } ;
                fr.onloadend = function (e) {
                    document.getElementById("portrait" +　imageid).src = e.target.result ;
                };
                fr.readAsDataURL(file) ;
            }
            document.getElementById("portrait1").style.display = "block" ;
            $scope.$apply(function () {
                $scope.img_name = source.files[0].name ;
                $scope.size = (source.files[0].size/(1024)).toFixed(2) +"kb"  ;
            })
        }
    };
    $scope.upline = function (title,type,type2,content,url_1) {
        if(parseInt($scope.change) ===10000){
            if(confirm("确定上线么")){
                var c  = "/carrots-admin-ajax/a/u/article/"+$scope.id ;
                var my_date = Date.parse(new Date()) ;
                if($scope.img_url ==undefined) {
                    $scope.img_url = $scope.img
                }
                var change_params = {
                    title: title,
                    type: type,
                    content: content,
                    industry:type2,
                    status: 2,
                    url: url_1,
                    img: $scope.img_url,
                    createAt:my_date
                };
                $http({
                    method:"put",
                    url:c,
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    // params:change_params
                    data : $.param(change_params)
                    //序列化方法
                }).then(function (response) {
                    console.log(response) ;
                });
                $state.go("home.text2");
            }
        }else {
            if (type2 === undefined) {
                type2 = "";
            }
            console.log(title);
            $http({
                method: "POST",
                url: "/carrots-admin-ajax/a/u/article",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                // params: $scope.params_new
                data: "title=" + title + "&type=" + type + "&industry=" + type2 +
                "&content=" + content + "&status=" + 2 + "&url=" + url_1 + "&img=" + $scope.img_url
            }).then(function (response) {
                if (response.data.code === 0) {
                    alert("已上线！");
                    $state.go("home.text2");
                    console.info($scope.params_new);
                } else {
                    alert("1211121");
                }
            })
        }
    };
    $scope.draft = function (title,type,type2,content,url_1) {
        if(parseInt($scope.change) ===10000){
            if(confirm("确定存为草稿么？")){
                var c  = "/carrots-admin-ajax/a/u/article/"+$scope.id ;
                var my_date = Date.parse(new Date()) ;
                if($scope.img_url == undefined) {
                    $scope.img_url = $scope.img ;
                }
                var change_params = {
                    title: title,
                    type: type,
                    content: content,
                    industry:type2,
                    status: 1,
                    url: url_1,
                    img: $scope.img_url,
                    createAt:my_date
                };
                $http({
                    method:"PUT",
                    url:c,
                    params:$.param(change_params)
                });
                $state.go("home.text2");
            }
        }else {
            if (type2 === undefined) {
                type2 = "";
            }
            $scope.params_new =
                {
                    title: title,
                    type: type,
                    content: content,
                    status: 1,
                    url: url_1,
                    img: $scope.img_url
                };
            $http({
                method: "post",
                url: "/carrots-admin-ajax/a/u/article",
                data: $scope.params_new
            }).then(function successCallback(response) {
                if (response.data.code === 0) {
                    alert("已存为草稿！");
                    $state.go("home.text2");
                }
            })
        }
    };
    $scope.cancel = function () {
        $state.go( "home.text2");
    };
    $scope.upload = function () {
        var fileObj = document.getElementById("1").files[0] ;
        if(fileObj == undefined){
            alert("请选择图片！") ;
        }else {
            var form = new FormData() ;
            form.append("file",fileObj) ;
            $http({
                method:"post",
                url:"/carrots-admin-ajax/a/u/img/task",
                data:form,
                headers:{"Content-Type" : undefined}
                // , transformRequest:angular.identity
            }).then(function (respond) {
                $scope.img_url = respond.data.data.url ;
                alert("上传成功") ;
            });
        }
    };
    $scope.isB = true ;
    $scope.isA = false ;
    $scope.industryshow = function () {
        if($scope.type !== 3 ){
            $scope.isB = true ;
            $scope.isA = false ;
            $scope.industry.value = undefined ;
        }else {
            $scope.isA = true ;
            $scope.isB = false   ;
        }
    };
    if(parseInt($scope.change) ===10000){
        $scope.title = $stateParams.title ;
        $scope.content = $stateParams.content;
        $scope.img = $stateParams.img ;
        $scope.type2 = parseInt($stateParams.industry);
        $scope.page = $stateParams.page ;
        $scope.type =parseInt($stateParams.type);
        $scope.url_1 = $stateParams.url;
        editor.txt.html( $scope.content) ;
        if($scope.type !== 3 ){
            $scope.isB = true ;
            $scope.isA = false ;
            $scope.industry.value = undefined ;
        }else {
            $scope.isA = true ;
            $scope.isB = false   ;
        }
    }
}) ;





