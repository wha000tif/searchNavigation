$(function () {
    //自动加载模板规则
    $("#googletemplate").load('./txt/google_rules.txt');
    $("#baidutemplate").load('./txt/baidu_rules.txt');
});

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function reset() {
    window.location.href = "/";
}

<<<<<<< HEAD
function goSearch(){
    var kw = document.getElementById("searchKeyGoogle").value;
    if(kw && kw!= null && kw!="null"){
        // window.location.href = encodeURI(encodeURI("list.html?kw=" + kw));
        googleSite(kw);
        googleSubdomain(kw);
        githubSearch(kw);
    } else{
=======
function goSearch() {
    var kw = document.getElementById("searchKey").value;
    if (kw && kw != null && kw != "null") {
        // window.location.href = encodeURI(encodeURI("list.html?kw=" + kw));
        alert("success");
    } else {
>>>>>>> aa67a79e787acd1f83bbfe2ee03f46d61fd34341
        // window.location.href = "index.html";
        alert("failed");
    }
}

function openAlllinks(links_div_name) {
    $("#" + links_div_name + " ul li a").each(function () {
        window.open($(this).attr('href')).location
    });

}


function googleSite(keyword){
    var query = "https://www.google.com.hk/search?q=site%3A"+keyword+"&rlz=1C1CHWL_zh-CNIQ879IQ879" 
    document.getElementById("googleSite").href=query;
}


function googleSubdomain(keyword){
    var query = "https://www.google.com.hk/search?q=site%3A*."+keyword+"&rlz=1C1CHWL_zh-CNIQ879IQ879" 
    document.getElementById("googleSubdomain").href=query;
}

function githubSearch(keyword){
    var query = "https://github.com/search?q="+keyword+"&type=Code"
    document.getElementById("githubSearch").href=query;
}
