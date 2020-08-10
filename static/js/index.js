$(function () {
    //自动加载模板规则
    $("#googletemplate").load('./txt/google_rules.txt');

});

function getUrlParam(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function reset(){
    window.location.href = "/";
}

function goSearch(){
    var kw = document.getElementById("searchKey").value;
    if(kw && kw!= null && kw!="null"){
        // window.location.href = encodeURI(encodeURI("list.html?kw=" + kw));
        alert("success");
    } else{
        // window.location.href = "index.html";
        alert("failed");
    }
}

function openAlllinks(links_div_name){
    //根据传入的div name遍历其中的a标签并打开

}
