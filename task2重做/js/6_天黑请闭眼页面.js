var fsm =new StateMachine({


    transitions:[
        {name:'kill' , from:'none' , to:'step1'},
        {name:'talk1', from:'step1' , to:'step2'},
        {name:'talk2', from:'step2' ,to: 'step3'},
        {name:'vote', from:'step3' ,to: 'step4'},
    ]
});
console.log('fsm初始化完毕');


function s1() {
    fsm.kill();
    document.getElementsByClassName("process")[0].style.backgroundColor="gray";
}
function s2() {
    fsm.talk1();
    document.getElementsByClassName("process")[1].style.backgroundColor="gray";
}
function s3() {
    fsm.talk2();
    document.getElementsByClassName("process")[2].style.backgroundColor="gray";
}
function s4() {
    fsm.vote();
    document.getElementsByClassName("process")[3].style.backgroundColor="gray";
}

// function button_s1() {
//     document.getElementsByClassName("process")[0].style.display="block";
//     document.getElementById("hidden_button")[0].style.display="none";
// }
//
function jump_to_n() {
    alert("杀人")
    location.href ="../html/7_杀人页面.html";
}