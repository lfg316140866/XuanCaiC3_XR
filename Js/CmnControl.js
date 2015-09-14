/// <reference path="jquery.js"/>
/// <reference path="Cmn.js"/>
var filename = "CmnControl.js";

var CmnControl = {
    //控件类型
    Type: {
        Text: "Text",
        RadioButton: "RadioButton",
        CheckBox: "CheckBox",
        Select: "Select",
        TextArea: "TextArea"
    },
    //播放视频
    //containerSelector： 视频的容器选择器
    //height: 视频的高度
    //width：视频的宽度
    //videoUrl: 视频url可以是数组
    //videoSelector: video标签的选择器(如果没有自动会创建通用的video标签)
    //flashPlayerSelector: flash视频播放器（如果没有会创建默认的flash视频播放器）
    ShowVideo: function (containerSelector, width, height, videoUrl, videoSelector, flashPlayerSelector) {
        if (!Cmn.Func.IsArray(videoUrl)) {
            var _tmpArray = videoUrl;
            videoUrl = new Array();
            videoUrl[0] = _tmpArray;
        }
        var _curFileInDir = getAbsolutePath().toString().replace(filename, "");

        if (Cmn.Func.IsMobile()) { //是移动设备
            //隐藏pc上用的播放器
            if (flashPlayerSelector != "undefined" && flashPlayerSelector != "") {
                $(containerSelector).children(flashPlayerSelector).hide();
            }
            else if ($(containerSelector).children(".CmnControl_FlashPlayer").length > 0) {
                $(containerSelector).children(".CmnControl_FlashPlayer").hide();
            }

            //显示移动设备上用的播放器
            var _video = null;

            if (typeof (videoSelector) != "undefined" && videoSelector != "") {
                _video = $(containerSelector).children(videoSelector);
                _video.show();

            }
            else if ($(containerSelector).children(".CmnControl_Video").length > 0) {
                _video = $(containerSelector).children(".CmnControl_Video");
                _video.show();

            }
            else { //新插入video标签
                var _videoSrc = new Array();
                _videoSrc = videoUrl;

                var _strVideoTemp = "";
                //遍历videoSrc
                $.each(_videoSrc, function (key, value) {
                    var _tmpStr = value.toString().toLocaleLowerCase();
                    if (_tmpStr.indexOf("ogg") >= 0 || _tmpStr.indexOf("mp4") >= 0 || _tmpStr.indexOf("webm") >= 0) {
                        _strVideoTemp += '<source src="' + value + '" type="video/' + _tmpStr.substring(_tmpStr.lastIndexOf(".") + 1) + '" ></source>';
                    }
                });

                var _outVideoHtml = '<video width="' + width + '" height="' + height + '" controls="controls"> ' +
                    _strVideoTemp + ' 您的浏览器不支持 video 标签。 </video>';
                //  alert(_outVideoHtml);
                $(containerSelector).html(_outVideoHtml);
                // _video = $(containerSelector).children(".CmnControl_Video");
            }
        }
        else { //是pc  
            var _videoSrc = new Array();
            _videoSrc = videoUrl;

            var _useVideo = "";
            $.each(_videoSrc, function (key, value) {
                if (value.toString().indexOf("flv") >= 0 || value.toString().indexOf("mp4") >= 0) {   //  
                    if ($.trim(_useVideo) == "") {
                        _useVideo = value;
                    }
                }
            });

            var _outVideoHtml = '<object id="vcastr3" data="' + _curFileInDir + '/CmnControlRes/player_vcastr/player_vcastr.swf" width="' + width + '" height="' + height + '" type="application/x-shockwave-flash">' +
                           ' <param name="movie" value="' + _curFileInDir + '/CmnControlRes/player_vcastr/player_vcastr.swf"/> ' +
                           ' <param name="allowFullScreen" value="true" />' +
                           ' <param name="FlashVars" value="xml= ' +
                                 ' <vcastr>' +
	                                  '<channel> ' +
		                                 ' <item>' +
			                                 ' <source>' + _useVideo + '</source>  ' +
			                                 ' <duration></duration>' +
			                                  '<title></title>' +
		                                 '</item>' +
	                                 ' </channel> ' +
	                                 ' <config>  ' +
		                                 ' <bufferTime>4</bufferTime>' +
		                                 ' <contralPanelAlpha>0.75</contralPanelAlpha>  ' +
		                                 ' <controlPanelBgColor>0x333333</controlPanelBgColor>' +
		                                  '<controlPanelBtnColor>0xffffff</controlPanelBtnColor>' +
		                                 ' <contralPanelBtnGlowColor>0x333333</contralPanelBtnGlowColor>' +
		                                 ' <controlPanelMode>float</controlPanelMode>' +
		                                 ' <defautVolume>1</defautVolume>' +
		                                 ' <isAutoPlay>false</isAutoPlay> ' +
		                                 ' <isLoadBegin>true</isLoadBegin>' +
		                                 ' <isShowAbout>true</isShowAbout>' +
		                                 ' <scaleMode>showAll</scaleMode> ' +
		                                 ' <isRepeat>false</isRepeat> ' +
	                                 ' </config> ' +
	                                 ' <plugIns> ' +
		                                 ' <logoPlugIn>  ' +
			                                 ' <url>' + _curFileInDir + '/CmnControlRes/player_vcastr/logoPlugIn.swf</url>' +
			                                  '<logoClipUrl></logoClipUrl>  ' +            //http://www.opple.com.cn/images/logo.png
			                                  '<logoClipAlpha>1</logoClipAlpha>' +
			                                 ' <clipMargin>15 15 auto auto</clipMargin>' +
		                                 ' </logoPlugIn> ' +
		                                 ' <javaScriptPlugIn> ' +
			                                  '<url>' + _curFileInDir + '/CmnControlRes/player_vcastr/javaScriptPlugIn.swf</url> ' +
		                                 ' </javaScriptPlugIn>' +
	                                 ' </plugIns>' +
                                 ' </vcastr>" /> ' +
                         ' </object>';

            $(containerSelector).html(_outVideoHtml);
        }
    }
};

// 获取当前文件绝对路径
function getAbsolutePath() {
    var scripts = document.getElementsByTagName('script');
    var script = null;
    var len = scripts.length;

    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf(filename) != -1) {
            script = scripts[i];
            break;
        }
    }
    if (script) {
        var src = script.src;
        // 不是绝对路径需要修正
        if (src.indexOf("http://") != 0 && src.indexOf("/") != 0) {
            var url = location.href;
            var index = url.indexOf("?");
            if (index != -1) {
                url = url.substring(0, index - 1);
            }
            src = getPath(src, url);
        }
        return src;
    }
    return null;
}

