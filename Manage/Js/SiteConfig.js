/// <reference path="../../Js/Cmn.js" />
/// <reference path="../../Js/CmnAjax.js" />
/// <reference path="../../Js/CmnMis/CmnMis.js" />
/// <reference path="../../Js/jquery.js" />

InterfaceUrl = "";

$(document).ready(function () {
    //如果网站有子目录，用下面的函数设置下具体的子目录,默认获取Manage前面的，认为是子目录
    var _curUrl = window.location.href;

    _curUrl = _curUrl.replace(/http\:\/\//i,"");

    var _subDir = _curUrl.match(/\/[\s\S]*?\/(?=Manage\/)/i);
   
    if (_subDir != null) {
        Cmn.Func.SetRoot(_subDir[1]);
    }

    CmnAjax.Cfg.ProxyUrl = "";
    //CmnAjax.Cfg.ProxyUrl = "/TmallAjaxProxy.aspx";
    // CmnAjax.Cfg.ProxyUrl = "";
    var _url = (location.href);
    var _sysName = Cmn.Func.GetParamFromUrl("SysName", _url);
    // InterfaceUrl = "http://csharpframework.cagoe.com/CmnMisItf.aspx";
    InterfaceUrl = "http://" + Cmn.Func.GetMainDomain(location.href) + "/Itf/Php/AjaxItf.php";

    if ((_url + "").indexOf("Default.html") >= 0) {
        CmnMis.Frame.Init(InterfaceUrl);
    }
    else if ((_url + "").indexOf("Login.html") >= 0) {
        CmnMis.Frame.InitLogin(InterfaceUrl, function (data) {
            if ($("#TwoCodeValue").val() == $(".TwoCode").html()) {
                if (data.IsSuccess == "1") {
                    //系统切换的差异暂时通过系统名称取处理 这里只是暂时的 后续要调整方案
                    if (_sysName == "Wct") {
                        window.location.href = "/Wct/Manage/AccountManage.html";
                    }
                    else {
                        window.location.href = "Default.html?SysName=" + _sysName;
                    }
                }
            } else {
                Cmn.alert("验证码错误");
                $(".TwoCode").html(Code(4));
            }
        });

        $(".txt").keypress(function (event) {
            if (event.keyCode == 13) {
                $("#login").click();
            }
        });
        $("#UserName").focus();
    }
});


// 处理当前系统时间
$(document).ready(function () {
    function showtime() {
        var today, year, month, day, hour, minute, second, weekday, strDate;
        today = new Date();
        weekday = today.getDay();
        switch (weekday) {
            case 0: {
                strDate = "星期日";
            } break;
            case 1: {
                strDate = "星期一";
            } break;
            case 2: {
                strDate = "星期二";
            } break;
            case 3: {
                strDate = "星期三";
            } break;
            case 4: {
                strDate = "星期四";
            } break;
            case 5: {
                strDate = "星期五";
            } break;
            case 6: {
                strDate = "星期六";
            } break;
        }
        year = today.getYear();
        month = today.getMonth() + 1;
        day = today.getDate();
        hour = today.getHours();
        minute = today.getMinutes();
        second = today.getSeconds();
        if (month.toString().length < 2) month = "0" + month;
        if (day.toString().length < 2) day = "0" + day;
        if (hour.toString().length < 2) hour = "0" + hour;
        if (minute.toString().length < 2) minute = "0" + minute;
        if (second.toString().length < 2) second = "0" + second;
        $(".cmn-CurrentSysDate").text((year < 2000 ? year + 1900 : year) + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + " " + strDate);

        setTimeout(showtime, 1000);
    }

    showtime();
    $(".cmn-ModuleList").on("click", function () {
        //  $(".cmn-ModuleList > div").removeClass("Currenttab1");

        $(".cmn-ModuleList").each(function (i) {
            $(this).find("div").removeClass("Currenttab" + (i + 1)).addClass("tab" + (i + 1));
            $(this).find("div").find("a").removeClass("CurrentHoverTab" + (i + 1));
        });

        $(this).find("div").removeClass("tab" + $(this).index()).addClass("Currenttab" + ($(this).index()));
        $(this).find("div").find("a").addClass("CurrentHoverTab" + ($(this).index()));
    });
});

