/**
 * Created by lenovo on 2017/2/19.
 */
/* 不会使用闭包的时候写的
window.onload =  function moveIn() {
    var add = document.getElementsByClassName("skill-in");
//            var ul = document.getElementsByTagName("ul");
//            alert(add.length);
    for (var i = 0; i < add.length; i++) {
        add[i].onmouseover = function () {
            var ul = document.getElementsByClassName("skill-show");
            for (var j = 0; j < ul.length; j++) {
                ul[j].style.display = "block";
            }
//                    alert(ul.length); 这里可以输出2，为什么下面不能运行呢？
//                    基础知识不熟，这里取的ul是一个数组，并不是一个div。
        };
        add[i].onmouseout = function () {
            var ul = document.getElementsByClassName("skill-show");
            for (var j = 0; j < ul.length; j++) {
                ul[j].style.display = "none";
            }
        }
    }
};
*/
/*
function moveIn(){
    var one = document.getElementById("js-skill-show") ;
    //one.style.backgroundColor = "red";
    //one.style.width = "100px";
    //one.style.height ="20px" ;
    //one.style.backgroundColor = "red";
    //one.innerHTML="www";
    //one.style.position ="absolute";
    //one.style.right ="300px";
    one.style.display ="block" ;

}
function moveOut(){
    var one = document.getElementById("js-skill-show") ;
    //下面这两句话被第三句话代替了。
    //one.innerHTML = "";
    //one.style.backgroundColor = "";
    one.style.display="none" ;
}
*/
window.onload = function () {
    var div = document.getElementsByClassName("skill-in") ;
    for(var i = 0 ; i<div.length ; i++){
        (function(j){
            div[j].onmouseover = function(){
                var ul = document.getElementsByClassName("skill-show") ;
                ul[j].style.display = "block" ;
            }
        })(i);
        (function(j){
            div[j].onmouseout = function(){
                var ul = document.getElementsByClassName("skill-show") ;
                ul[j].style.display = "none" ;
            }
        })(i);
    }
}
window.onscroll=ShowNav;
function ShowNav(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var one = document.getElementById("topNav") ;
    //var h = document.documentElement.scrollTop ;
    //上面中的scrollTop只能在ff中使用
    if(scrollTop > 500) {
        one.style.display = "block";
    }
    else{
        one.style.display = "none";
    }
}
