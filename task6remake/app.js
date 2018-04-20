//安排路由
var myApp = angular.module("myApp",['ui.router']);
//指定设置  方法1：提供状态 提供路由
//模块，路由er 我的模块，文件上传，控件；
myApp.config(function ($stateProvider,$urlRouterProvider) {
    //提供路由 其他的路由（‘/login)
    // 限制    状态提供者   网址路由提供者
    $urlRouterProvider.when("",'/login');
    //提供状态  登陆
    $stateProvider
        .state('login',{
            //状态：登陆页
            url:'/login',
            templateUrl:'html/login.html',
            //模板url
            controller:'loginCtrl'
            //控制器
        })
        //主页，跳转过来的 ；
        .state('home',{
            url:'/listPages/home',
            templateUrl:'html/home.html',
            controller:'hid2'
        })
        .state('home.text',{
            url:'/text',
            templateUrl:'html/hello.html'
        })
        .state('home.text2',{
            url:'/text2?status&type&startAt&endAt&page',
            templateUrl:'html/hello2.html',
            controller:"get_list2"
        })
        .state('home.add',{
            url:'/add_page?page&title&status&img&content&url&industry&type&change&id',
            templateUrl:'html/add_page.html',
            controller:"add_page"
        })
    });