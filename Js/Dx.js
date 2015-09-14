/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="Cmn.js" />
/// <reference path="CmnAjax.js" />
/// <reference path="CmnFuncExd.js" />
/// <reference path="animate/AnimateFrame.js" />
/// <reference path="animate/Scenes.js" />
/// <reference path="animate/ScenesSwitch.js" />


$(document).ready(function () {    
    Cmn.PageIsLock = true;
    AnimateFrame.Init(500, SwitchMode.Shifting, Direction.Up, Direction.Down);
    //左侧导航切换
        $(".Jsc_side_nav li").hover(function (e) {
            $(this).find("a").stop(false, false).animate({left:"0px"}),300;
            $(this).find("i").hide();
            event.stopPropagation();
        },function(e){
            $(this).find("a").stop(true, true).animate({ left: "-180px" });
            $(this).find("i").show();
            event.stopPropagation();
        });

        $(".Jsc_side_nav li i").click(function () {
            $(this).css("left","0px")
            $(this).prev("a").hide();
        });
    //首页按钮跳转到秀出来
        $(".js_out_btn,.Jsc_out_nav").click(function () {
            AnimateFrame.SlideTo("out");
        });
    //首页按钮跳转到嗨翻天
        $(".js_hey_btn,.Jsc_hey_nav").click(function () {
            AnimateFrame.SlideTo("hey");
        });
    //首页按钮跳转到炫缤纷
        $(".js_riotous_btn,.Jsc_riotous_nav").click(function () {
            AnimateFrame.SlideTo("riotous");
        });
    //首页按钮跳转到引潮流
        $(".js_trend_btn,.Jsc_trend_nav").click(function () {
            AnimateFrame.SlideTo("trend");
        });
    //首页导航隐藏
        AnimateFrame.OnScenesAfterShow = function () {
            if (AnimateFrame.CurScenes.ID == "home") {
                $(".Jsc_side_box").fadeOut();
            } else {
                $(".Jsc_side_box").fadeIn();
            }
        }

});