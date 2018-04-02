// 双修混写
$(document).ready(function() {
  $("#on").click(function() {
    var xmlhttp = new XMLHttpRequest();
    var params = {};
    params.name = $("#user").val();
    params.pwd = $("#password").val();
    console.log(params);

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var jsons = JSON.parse(xmlhttp.responseText); //以JSON字符串形式响应
        console.log(jsons);
        if (params.name == "" || params.pwd == "") {
          alert("账号密码不能为空");
        } else if (jsons.code === 0) {
          alert("搞个页面跳转吧,大爷!");
        } else {
          alert(jsons.manager);
        }
      }
    };
    xmlhttp.open("POST", "/carrots-admin-ajax/a/login", true); //请求的类型,是否异步
    xmlhttp.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    xmlhttp.send($.param(params)); //序列化之后 将请求发送到服务器
  });
});
//http://www.w3school.com.cn/jquery/ajax_param.asp
//jQuery写法
// $(document).ready(function () {
//   $("#on").click(function () {
//     $ajax({
//       type: "POST",
//       dataType: "js"
  

//     });
//   });
// });
