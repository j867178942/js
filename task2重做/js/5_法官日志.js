var result1 = JSON.parse(sessionStorage.getItem("new_arr"));
//得到数组后隐藏盒子(盒子是写好的）
var i;
for(i = 17 ; i > result1.length - 1 ; i-- ){
    document.getElementsByClassName("id12f")[i].style.display="none";
}
//给每个盒子的身份赋值
var a =1 ;
for(i = 0;i< result1.length;i++ ) {
    if (result1.length < 7) {
        if (a !== result1[0]) {
            document.getElementsByClassName("id1-1")[i].innerHTML = "平民";
        } else {
            document.getElementsByClassName("id1-1")[i].innerHTML = "狗贼";
        }
        a++;
    }
    if ( 6 < result1.length  &&  result1.length < 10) {
        if (a !== result1[0]   && a !== result1[1]) {
            document.getElementsByClassName("id1-1")[i].innerHTML = "平民";
        } else {
            document.getElementsByClassName("id1-1")[i].innerHTML = "狗贼";
        }
        a++;
    }

    if ( 9 < result1.length  &&  result1.length < 13) {
        if (a !== result1[0] && a !== result1[1]  && a !== result1[2]   ) {
            document.getElementsByClassName("id1-1")[i].innerHTML = "平民";
        } else {
            document.getElementsByClassName("id1-1")[i].innerHTML = "狗贼";
        }
        a++;
    }
    if ( 12 < result1.length  &&  result1.length < 19) {
        if (a !== result1[0] && a !== result1[1]  && a !== result1[2]  && a !== result1[3] ) {
            document.getElementsByClassName("id1-1")[i].innerHTML = "平民";
        } else {
            document.getElementsByClassName("id1-1")[i].innerHTML = "狗贼";
        }
        a++;
    }
}

function start() {
    location.href = "../html/6_天黑请闭眼页面.html" ;
}