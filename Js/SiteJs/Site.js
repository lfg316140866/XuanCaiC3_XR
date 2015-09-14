/// <reference path="../jquery-1.9.1.js" />
/// <reference path="../ThirdLib/jquery.js" />
/// <reference path="../Cmn.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../CmnTools/VideoPlayer/VideoProcess.js" />
/// <reference path="../animate/AnimateFrame.js" />
/// <reference path="SiteFunc.js" />



$(document).ready(function () {
    SiteFunc.Share();

    Home.Init();

});

//首页业务逻辑 此处名称可以和页面对应起来 也可以和场景ID对应
(Home = new function () {
    /// <summary>首页业务逻辑</summary>

    //调用测试检测
    //  SiteFunc.Testing("进入首页场景");
    this.Init = function () {
        /// <summary>页面或者场景的初始化</summary>

        //进入网站将所有浮层隐藏
        $(".js_pop_box_float").hide();     //最外层浮层
        $(".js_inf_float").hide();         //留资外层浮层
        $(".js_drive_box").hide();         //试驾
        $(".js_schedule_box").hide();      //预定
        $(".js_events_float").hide();      //活动声明
        $(".js_preferential_float").hide();//优惠

        //炫彩之旅点击按钮
        $(".JscJourney_drop_1,.JscJourney_pop_1,.journey_people_1").mouseover(function (e) {
            $(".JscJourney_pop_1").show();
            $(".JscJourney_drop_1").hide();
            $(".journey_people_name1").hide();
            e.stopPropagation();
        });
        $(".JscJourney_pop_1,.journey_people_1").mouseleave(function (e) {
            $(".JscJourney_pop_1").hide();
            $(".JscJourney_drop_1").show();
            $(".journey_people_name1").show();
            e.stopPropagation();
        });

        //炫彩之旅点击按钮
        $(".JscJourney_drop_2,.JscJourney_pop_2,.journey_people_2").mouseover(function (e) {
            $(".JscJourney_pop_2").show();
            $(".JscJourney_drop_2").hide();
            $(".journey_people_name2").hide();
            e.stopPropagation();
        });
        $(".JscJourney_pop_2,.journey_people_2").mouseleave(function (e) {
            $(".JscJourney_pop_2").hide();
            $(".JscJourney_drop_2").show();
            $(".journey_people_name2").show();
            e.stopPropagation();
        });

        //炫彩之旅点击按钮
        $(".JscJourney_drop_3,.JscJourney_pop_3,.journey_people_3").mouseover(function (e) {
            $(".JscJourney_pop_3").show();
            $(".JscJourney_drop_3").hide();
            $(".journey_people_name3").hide();
            e.stopPropagation();
        });
        $(".JscJourney_pop_3,.journey_people_3").mouseleave(function (e) {
            $(".JscJourney_pop_3").hide();
            $(".JscJourney_drop_3").show();
            $(".journey_people_name3").show();
            e.stopPropagation();
        });

        //炫彩之旅点击按钮(未开放)
        $(".JscJourney_drop_2,.JscJourney_drop_3").click(function () {
            alert("精彩内容，敬请期待！");
        });
        $(".Colorfuldetails_video").click(function () {
            Answer();
        });
        //答题浮层关闭
        $(".Jcs_answer_closeBtn").click(function () {
            $(".Jsc_answer_float").hide();
            $(".js_pop_box_float").hide();
        });

        //此处为弹出答题浮层方法
        var _Floating = 0;
        function Answer() {
            BindAnswerSelect();
            if (_Floating == 0) {
                _Floating = 1;
                $(".js_pop_box_float>div").hide();
                $(".Jsc_answer_float>div").hide();
                $(".answer_msg2>img").hide();
                $(".answer_msg>img").hide();
                $(".Jsc_continue_btn").hide();
                $(".js_pop_box_float").show();
                $(".Jsc_answer_float").show();
                $(".Jsc_answer_one").show();
                $(".Jcs_answer_closeBtn").show();
            } else {
                _Floating = 0;
                $(".js_pop_box_float>div").hide();
                $(".Jsc_answer_float>div").hide();
                $(".answer_msg2>img").hide();
                $(".answer_msg>img").hide();
                $(".Jsc_continue_btn").hide();
                $(".js_pop_box_float").show();
                $(".Jsc_answer_float").show();
                $(".Jsc_answer_two").show();
                $(".Jcs_answer_closeBtn").show();
            }

        }

        ///选择题目
        function BindAnswerSelect() {
            $(".Jsc_check_select").unbind("click").click(function () {
                $(".Jsc_check_select").removeClass("checkbox_set");
                $(".Jsc_problem").removeClass("check_set");
                $(this).addClass("checkbox_set");
                $(this).next("span").addClass("check_set");
                //判断第一题
                if ($(this).attr("properone") == "1") {
                    $(".error_msg").hide();
                    $(".proper_msg").show();
                    $(".continue_btn").show();
                    $(".Jsc_check_select").unbind("click");
                } else {
                    $(".continue_btn").hide();
                    $(".congratulate_box").hide();
                    $(".proper_msg").hide();
                    $(".error_msg").show();
                }

                //判断第二题
                if ($(this).attr("propertwo") == "1") {
                    $(".error_msg2").hide();
                    $(".congratulate_box").show();
                    $(".continue2_btn").show();
                    $(".Jsc_check_select").unbind("click");
                } else {
                    $(".continue2_btn").hide();
                    $(".congratulate_box").hide();
                    $(".error_msg2").show();
                }
            });
        }

        //继续观看
        $(".Jsc_continue_btn").on("click", function () {
            $(".Jsc_answer_float").hide();
            $(".js_pop_box_float").hide();
        });

        //分享
        $(".Jsc_answer_share_btn").on("click", function () {
            var _title = "当C3-XR 1.6THP发动机迸发出彭拜动力之时，何不与C3-XR一起去创造一个五彩斑斓的世界，用色彩激发创作，释放激情，昂扬自由。\n参与活动，有机会赢取C3-XR车模、印花T恤、印花马克杯以及土豆映像节门票等奖品！@东风雪铁龙C3XR";
            var _shareOnlyUrl = "http://" + Cmn.Func.GetMainDomain(location.href) + "/";
            var _sharePic = "http://" + Cmn.Func.GetMainDomain(location.href) + "/images/ShareImg2.jpg";
            var _SinaShare = 'http://service.weibo.com/share/share.php?title=' + encodeURIComponent(_title) + '&url=' + _shareOnlyUrl + '&source=&appkey=&pic=' + _sharePic;
            $("#sinaShare").attr("href", _SinaShare);
        });

        //答题留资
        $(".Jsc_answer_gift_btn").on("click", function () {
            $(".js_pop_box_float>div").hide();
            $(".js_inf_float").show();
            $(".js_drive_box").show();
        });

        //炫彩之旅左侧导航
        $(".JscColorfuldetails_bar").hover(function (e) {
            $(this).stop(false, false).animate({ left: '0%' });
            e.stopPropagation();
        }, function (e) {
            $(this).stop(false, false).animate({ left: '-7%' });
            e.stopPropagation();
        });

        //点击预约试驾
        $(".js_nav_btn5").click(function () {
            $(".js_pop_box_float>div").hide();
            $(".js_inf_float>div").hide();
            $(".js_drive_box,.js_inf_float,.js_pop_box_float").show();
            $(".js_inf_float>div").css("margin-top", "-248px");
            $(".js_inf_float>div").css("margin-top", "-247px");

        });

        //点击即刻预定
        $(".js_nav_btn6").click(function () {

            $(".js_pop_box_float>div").hide();
            $(".js_inf_float>div").hide();
            $(".js_schedule_box,.js_inf_float,.js_pop_box_float").show();
            $(".js_inf_float>div").css("margin-top", "-248px");
            $(".js_inf_float>div").css("margin-top", "-247px");
        });

        //点击活动声明
        $(".js_events_btn").click(function () {

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

            $(".js_pop_box_float>div").hide();
            $(".js_inf_float>div").hide();
            $(".js_events_float,.js_pop_box_float").show();

        });

        //点击新闻详情
        //$(".js_checking_btn").click(function () {
        //    $(".js_pop_box_float>div").hide();
        //    $(".js_inf_float>div").hide();
        //    $(".js_mesage_float,.js_pop_box_float").show();

        //    $(".mesage_bar").css("height", "100%");
        //    setTimeout(function () {
        //        $(".mesage_bar").mCustomScrollbar("destroy");
        //        $(".mesage_bar").mCustomScrollbar({
        //            autoDraggerLength: false,
        //            scrollButtons: {
        //                enable: false,
        //                scrollType: "continuous",
        //                scrollSpeed: "auto",
        //                scrollAmount: 40
        //            },
        //            theme: "light" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
        //        });
        //    }, 200);

        //});

        //点击优惠贷款图层
        $(".js_icon").click(function () {
            $(".js_pop_box_float>div").hide();
            $(".js_inf_float>div").hide();
            $(".js_preferential_float,.js_pop_box_float").show();
        });

        //点击XX关闭浮层
        $(".js_closeBtn").click(function () {
            $(".js_inf_float").hide();
            $(".js_drive_box").hide();         //试驾
            $(".js_schedule_box").hide();      //预定
            $(".js_events_float").hide();      //活动声明
            $(".js_preferential_float").hide();//优惠 
            $(".js_mesage_float").hide();      //优惠
            $(".js_pop_box_float").hide();
            $(".js_mesage_float").hide();      //查看详情浮层
            $(".Js_GiftBox").hide();           //参与互动留资浮层
            $(".Js_CreditFloat").hide();       //信贷浮层
        });

        //播放视频
        var _videopath = Cmn.Func.GetAbsoluteUrl("video/video.flv");
        var _videoHtml = Cmn.Video.GetVideoPlayerHtml(_videopath, 387, 294, "", false);
        $(".Js_VideoBox").html(_videoHtml);

    ///点击Mirror页面中 查看详情
        $(".js_checking_btn").click(function () {
            $(".js_pop_box_float>div").hide();
            $(".js_inf_float>div").hide();
            $(".js_mesage_float").show();
            $(".js_inf_float").show();
            $(".js_pop_box_float").show();
            $(".mesage_bar").css("height", "100%");
                setTimeout(function () {
                    $(".mesage_bar").mCustomScrollbar("destroy");
                    $(".mesage_bar").mCustomScrollbar({
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
        });
    }

});
