


//公共方法库
(SiteFunc = new function () {
    /// <summary>公共方法库</summary>
    this.Alert = function (message) {
        alert(message);
    };
    this.ProvinceCityStr = {
        "Province": "-省份-",
        "City": "-城市-",
        "County": "-区-"
    };


    this.InputFouseBlur = function (selector) {
        ///<summary>input获取失去焦点切换颜色</summary>      
        ///<returns type="Date" />
        //页面加载的时候，将input颜色置为灰色
        $(selector).css("color", "#ccc");
        //获取焦点的时候
        $(selector).focus(function () {
            if ($(this).val() == $(this).attr("value")) {
                $(this).val("").css("color", "#000");
                if ($(this).attr("ispwd") == "1") { $(this).attr("type", "password"); }
            }
        });
        //失去焦点的时候
        $(selector).blur(function () {
            if ($(this).val() == "") {
                $(this).val($(this).attr("value")).css("color", "#ccc");
                if ($(this).attr("ispwd") == "1") { $(this).attr("type", "text"); }
            }
        });
    }
    this.Share = function () {
        var _title = "#自由派站出来#给世界点颜色看看，C3-XR自由炫.彩绘之旅   由你开启。精彩好礼送不停。";
        var _sharePic = "http://" + Cmn.Func.GetMainDomain(location.href) + "/images/ShareImg.jpg";
        var _shareOnlyUrl = "http://" + Cmn.Func.GetMainDomain(location.href) + "/";
        var _SinaShare = 'http://service.weibo.com/share/share.php?title=' + encodeURIComponent(_title) + '&url=' + _shareOnlyUrl + '&source=&appkey=&pic=' + _sharePic;
        $(".sinaShare").attr("href", _SinaShare);
        var _renrenShare = 'http://s.jiathis.com/?webid=renren&title=&summary=' + encodeURIComponent(_title) + '&url=' + _shareOnlyUrl + '&pic=' + _sharePic;
        $(".renrenShare").attr("href", _renrenShare);
        var _tenxunShare = "http://share.v.t.qq.com/index.php?c=share&a=index&title=" + encodeURIComponent(_title) + "&url=" + _shareOnlyUrl + "&site=&pic=" + _sharePic;
        $(".tenxunShare").attr("href", _tenxunShare);
        //var _kaixinShare = 'http://www.kaixin001.com/rest/records.php?webid=kaixin&title=&content=' + encodeURIComponent(_title) + '&pic=' + _sharePic + '&starid=&aid=&style=11&t=10&url=' + _shareOnlyUrl;
        //$("#kaixinShare").attr("href", _kaixinShare);
        var _doubanShare = 'http://s.jiathis.com/?webid=douban&summary=' + '&title=' + encodeURIComponent(_title) +'&pic=' + encodeURIComponent(_sharePic) + "&url=" + encodeURIComponent(_shareOnlyUrl) + "&appkey=";
        $(".doubanShare").attr("href", _doubanShare);
 
    }
});

