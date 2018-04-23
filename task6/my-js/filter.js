//过滤器！！！
var app = angular.module("myApp") ;
app.filter("typeFilter",function () {
    var typeList = ["首页banner","找职位banner","找精英banner","行业大图"];
    return  function (type) {
        return typeList[type] ;
    }
});
app.filter("statusFilter",function () {
    var statusFilter  =  ["草稿","上线"];
    return function (status) {
        return status = statusFilter[status - 1] ;
    }
}) ;
app.filter("lineFilter",function () {
    var statusFilter = ["上线","下线"] ;
    return function (status) {
        return status = statusFilter[status - 1];
    }
});
app.filter("timeFilter",function () {
    return function timestampToTime(publishat) {
        var date = new Date(publishat);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        Y = date.getFullYear() + '-';
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours();
        // m = date.getMinutes() + ':';
        // s = date.getSeconds();
        return publishat = Y+M+D+h
            // + m + s
            ;
    }
}) ;



