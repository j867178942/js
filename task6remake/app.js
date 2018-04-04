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
        .state('listPages',{
            //状态：清单页
            url:'/listPages',
            templateUrl:'html/home.html',
            cantroller:'listPage'
        })
        .state('listPages.text',{
            url:'/Hello',
            templateUrl:'html/Hello.html'
        })
        .state('listPages.article',{
            //文章页
            url:'/article?type&status&pageid&starAt&endAt&total',
            templateUrl:'html/page.html',
            controller:'articleCtrl'
    })
        .state('listPages.newAdd',{
            //新增页
            url:'/listPages/newAdd?id',
            templateUrl:'html/page2.html',
            controller:'newPage'
        })
        .state('listPages.company',{
            //公司页面
            url:'listPages/company',
            templateUrl:'html/page3.html'
        })
        .state('listPages.position',{
            //职业页
            url:'/listPages/position',
            template:'职业页面构造中'
        })
        .state('hello',{
            url:'/listPages/hello',
            templateUrl:'html/hello.html',
            controller:'hid2'
        })
    });