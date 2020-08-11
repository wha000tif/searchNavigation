function googleHackGenerate() {
    //获取模板,过滤注释整合输入
    var rules = $("#googletemplate")[0].innerText.split("\n").filter(function (str) { return '#' !== str[0] });
    //获取输入转化为字典
    var search_dict = JSON.parse($.trim($("#searchKeyGoogle").val()));
    //替换字典:输入格式为 {key:value[,key:value]}，支持多组替换，一般值为target.com:baidu.com即可满足需求 ， 使用value替换规则中的[key],同时命中的才输出链接
    //先检测是否包含全部key
    var q_links = rules.filter(function (rule) {
        for (var key in search_dict) {
            if (rule.indexOf("[" + key + "]") == -1) {
                return false;
            }
        }
        return true;
    }).map(function (hitted_link) {
        //替换全部key
        var temp_link = hitted_link;
        for (var key in search_dict) {
            var key_regexp = new RegExp("\\[" + key + "\\]","ig");
            temp_link = temp_link.replace(key_regexp, search_dict[key]);
            // alert(hitted_link+"->"+temp_link);
        }
        return temp_link;
    })

    //更改链接输出区
    $("#googlelinks ul").empty();
    for (var i in q_links) {
        var pattern_link = `<li><span><a id="googleSite" href="https://www.google.com.hk/search?q=${q_links[i]}" target="_blank">${q_links[i]}</a></span></li>`;
        $("#googlelinks ul").append(pattern_link);
    }
}

function baiduHackGenerate() {
    //获取模板
    //整合输入
    //更改链接输出区
}