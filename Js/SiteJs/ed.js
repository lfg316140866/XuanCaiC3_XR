/// <reference path="CmnSite.js" />
/// <reference path="../jquery-1.9.1.js" />

//首页业务逻辑 此处名称可以和页面对应起来 也可以和场景ID对应
$(document).ready(function () {
    //弹出部分滚动内容绑定滚动条
    $(".events_bar").css("height", "51%");
    setTimeout(function () {
        $(".events_bar").mCustomScrollbar("destroy");
        $(".events_bar").mCustomScrollbar({
            autoDraggerLength: false,
            scrollButtons: {
                enable: false,
                scrollType: "continuous",
                scrollSpeed: "auto",
                scrollAmount: 40
            },
            theme: "light" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
        });
    }, 200);
    alert();
});