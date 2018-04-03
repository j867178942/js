$(document).ready(function(){
    $("#art").click(function(){
        $("#Article_list").animate({
            height:'toggle'
        });
    });
});
angular.module("routingDemoApp",["ngRoute"])
.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
        .when("/",{templateUrl:"Welcome.html"})
        .when("/list",{templateUrl:"Details_page.html"})
        .otherwise({redirectTo:"/"});
}]) ;