/// <reference path="../Cmn.js" />

//检查Cmn有没有定义，如果没有定义就定义下
if (typeof (Cmn) == "undefined") { Cmn = {}; }

/// <summary>SNS相关的函数库</summary>
Cmn.SNS = {
    SNSType:{
        qqzone: "qqzone",
        sina: "tsina",
        douban: "douban",
        kaixin: "kaixin",
        tenxun: "tenxun",
        weixin: "weixin",
        renren: "renren"
    },
    Share:function(snsType, content,imgUrl) {
        var _appkey = "";
        var _title, _summary;

        if (content == "") { return; } //内容为空返回

        _title = content + "";

        var _shareUrl = location.href;
        _title = _title + " " + _shareUrl;
        _summary = _title;

        var _sharePic = "";

        //判断有没有imgUrl
        if (imgUrl != undefined) {  _sharePic = Cmn.Func.GetAbsoluteUrl(imgUrl); }
        else { _sharePic = Cmn.Func.GetAbsoluteUrl('/images/sharePic.jpg'); }//默认分享图片

        var _shareOnlyUrl = location.href;


        if (snsType == "qqzone") {
            window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' +
                encodeURIComponent(_shareOnlyUrl) + '&title=' + '&pics=' + encodeURIComponent(_sharePic) + '&summary=' +
                encodeURIComponent(_title));
        }
        else if (snsType == "tsina") {
            window.open('http://service.weibo.com/share/share.php?title=' + encodeURIComponent(_title + "") + '&url=' + encodeURIComponent(_shareOnlyUrl) + '&source=&appkey=&pic=' + encodeURIComponent(_sharePic));
        }
        else if (snsType == "renren") {
            window.open('http://s.jiathis.com/?webid=' + snsType + '&summary=' + encodeURIComponent(_title) + '&url=' +
                encodeURIComponent(_shareOnlyUrl) + '&title=' + '&pic=' + encodeURIComponent(_sharePic) + "&appkey=" + _appkey);
        }
        else if (snsType == "douban") {
            window.open('http://s.jiathis.com/?webid=' + snsType + '&summary=' + '&title=' + encodeURIComponent(_title) +
                '&pic=' + encodeURIComponent(_sharePic) + "&url=" + encodeURIComponent(_shareOnlyUrl) + "&appkey=" + _appkey);
        }
        else if (snsType == "kaixin") {
            window.open('http://www.kaixin001.com/rest/records.php?content=' + encodeURIComponent(_summary) +
                '&starid=&aid=&style=11&pic=' + encodeURIComponent(_sharePic) + '&t=10&url=' + encodeURIComponent(_shareOnlyUrl));
        }
        else if (snsType == "tenxun") {
            window.open("http://share.v.t.qq.com/index.php?c=share&a=index&title=" + encodeURIComponent(_title) + "&url=" +
                encodeURIComponent(_shareOnlyUrl) + "&appkey=&site=&pic=" + encodeURIComponent(_sharePic));
        }
        else if (snsType == "weixin") {
            window.open("http://s.jiathis.com/?webid=weixin&uid=0&jtss=0&appkey=&ralateuid=&url=" +
                encodeURIComponent(_shareOnlyUrl) + "&title=" + encodeURIComponent(_title) + "&pic=" +
                encodeURIComponent(_sharePic) + "&acn=&acu=&summary=&isexit=false");
        }
    }
}