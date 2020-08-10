$(function () {
    //自动加载模板规则
    $("#googletemplate").load('./txt/google_rules.txt');

    $(document).keyup(function(event){
        var kw = document.getElementById("searchKey").value;
        if(kw && kw!= null && kw!="null") {
            if (event.keyCode == 13) {
                goSearch();
            }
        }
        if(!kw || kw== null || kw=="null"){
            if (event.keyCode == 8) {
                window.location.href = "index.html";
            }
        }
    });
});

function getUrlParam(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function clearSearch(){
    window.location.href = "index.html";
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

function getSearch(data, kw){
    for(var i in data){
        var newItems = new Array();
        var jData = data[i];
        if(!jData){
            continue;
        }
        var items = jData.items;
        for(var j in items){
            var item = items[j];
            if(!item){
                continue;
            }
            if((jData.type.toLowerCase()).indexOf(kw.toLowerCase()) >-1){
                //匹配分类名称
                newItems.push(item);
            } else if((jData.description.toLowerCase()).indexOf(kw.toLowerCase()) >-1){
                //匹配分类详情
                newItems.push(item);
            } else if((item.name.toLowerCase()).indexOf(kw.toLowerCase()) >-1){
                //匹配名称
                newItems.push(item);
            } else if((item.url.toLowerCase()).indexOf(kw.toLowerCase()) >-1){
                //匹配链接地址
                newItems.push(item);
            } else if((item.description.toLowerCase()).indexOf(kw.toLowerCase()) >-1){
                //匹配详情
                newItems.push(item);
            }
        }
        data[i].items = newItems;
    }
}