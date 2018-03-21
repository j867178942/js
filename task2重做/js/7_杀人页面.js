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

function z123() {
    for (i = 0; i < 17; i++) {
        document.getElementsByClassName("id1-1")[i].style.backgroundColor = "#f5c97b";
    }
}

function choose(id) {
    if(id.innerText === "狗贼"){
        alert("队友不能杀啊！") ;
    } else{
        id.style.backgroundColor = "#b0b0b0" ;
        console.log(id) ;
    }
}
// function radio_get_value() {
//
//     for(i = 0 ; i <17 ; i++){
//         var s_arr = [] ;
//         bak_color =    document.getElementsByClassName("id1-1")[i].style.backgroundColor ;
//         console.log(bak_color)
//         if ( gray  == bak_color ){
//            s_arr[i]=i ;
//         }
//     }
// }