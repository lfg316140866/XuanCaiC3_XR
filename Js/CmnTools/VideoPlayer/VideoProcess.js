///Version:1.0
/// <reference path="../../Cmn.js" />

/// <summary>视频处理</summary>
Cmn.Video = {
    Init: function (containerSelector) {
        /// <summary>初始化当前页面中视频标签，如果是pc的话自动替换成flash播放器</summary>
        /// <param name="containerSelector" type="String">容器选择器（不传的话处理页面上所有的video标签）</param>
        
        if (Cmn.Func.IsMobile()) { return; } //如果是移动设备就不做处理

        var _allVideo = null;

        if (containerSelector != undefined) { _allVideo = $(containerSelector).find("video"); }
        else { _allVideo = $("video"); }

        _allVideo.each(function () {
            var _src = $(this).attr("src");
            var _width = $(this).attr("width");
            var _height = $(this).attr("height");
            var _classAttr = $(this).attr("class");
            var _isAutoPlay = false; //是否自动播放，默认为否

            if (_src == undefined) { _src = $(this).find("source").attr("src"); }
            if (_width == undefined) { _width = $(this).width(); }
            if (_height == undefined) { _height = $(this).height(); }
            if (_classAttr == undefined) { _classAttr = ""; }

            if ($(this).attr("autoplay") == "autoplay") { _isAutoPlay = true; }

            $(this).replaceWith(Cmn.Video.GetVideoFlashPlayer(_src, _width, _height, _classAttr, _isAutoPlay));
        }); 
    },
    //------------------------------------
    GetVideoFlashPlayer: function (videoUrl, width, height,classAttr,isAutoPlay) {
        /// <summary>获取视频flash播放器html代码</summary>
        /// <param name="videoUrl" type="String">视频Url</param>
        /// <param name="width" type="String">宽度</param>
        /// <param name="height" type="String">高度</param>

        videoUrl = Cmn.Func.GetAbsoluteUrl(videoUrl);

        var _curFileInDir = Cmn.Video.GetJsPath("VideoProcess.js");

        var _pcVideoHtml = '<object id="vcastr3" class="'+classAttr+'" data="' + _curFileInDir + 'player_vcastr/player_vcastr.swf" width="' + width + '" height="' + height + '" type="application/x-shockwave-flash">' +
            ' <param name="movie" value="' + _curFileInDir + 'player_vcastr/player_vcastr.swf"/> ' +
            ' <param name="allowFullScreen" value="true" />' +
            '<param name="wmode" value="transparent">' +
            ' <param name="FlashVars" value="xml= ' +
                    ' <vcastr>' +
	                    '<channel> ' +
		                    ' <item>' +
			                    ' <source>' + videoUrl + '</source>  ' +
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
		                    ' <isAutoPlay>' + (isAutoPlay===true?'true':'false') + '</isAutoPlay> ' +
		                    ' <isLoadBegin>true</isLoadBegin>' +
		                    ' <isShowAbout>true</isShowAbout>' +
		                    ' <scaleMode>showAll</scaleMode> ' +
		                    ' <isRepeat>false</isRepeat> ' +
	                    ' </config> ' +
	                    ' <plugIns> ' +
		                    ' <logoPlugIn>  ' +
			                    ' <url>' + _curFileInDir + 'player_vcastr/logoPlugIn.swf</url>' +
			                    '<logoClipUrl></logoClipUrl>  ' +            //http://www.opple.com.cn/images/logo.png
			                    '<logoClipAlpha>1</logoClipAlpha>' +
			                    ' <clipMargin>15 15 auto auto</clipMargin>' +
		                    ' </logoPlugIn> ' +
		                    ' <javaScriptPlugIn> ' +
			                    '<url>' + _curFileInDir + 'player_vcastr/javaScriptPlugIn.swf</url> ' +
		                    ' </javaScriptPlugIn>' +
	                    ' </plugIns>' +
                    ' </vcastr>" /> ' +
            ' </object>';

        return _pcVideoHtml;
    },
    //------------------------------------
    GetJsPath: function (jsFileName) {
        /// <summary>获取某个js文件的路径(不包括文件名)</summary>
        /// <param name="jsFileName" type="String">js文件名</param>

        var _scripts = document.getElementsByTagName('script');
        var _script = null;

        for (var i = 0; i < _scripts.length; i++) {
            if (_scripts[i].src.indexOf(jsFileName) != -1) {
                _script = _scripts[i];
                break;
            }
        }

        if (_script!=null) { //找到对应js
            var _src = _script.src;

            // 不是绝对路径需要修正
            //if (src.indexOf("http://") != 0 && src.indexOf("/") != 0) {
            //    var url = location.href;
            //    var index = url.indexOf("?");

            //    if (index != -1) { url = url.substring(0, index - 1); }

            //    src = getPath(src, url);
            //}

            return _src.replace(jsFileName, "");
        }

        return "";
    },
    //------------------------------------
    GetVideoPlayerHtml: function (videoUrl, width, height, classAttr, isAutoPlay) {
        /// <summary>获取视频播放器的html代码（会判断是pc还是移动设备返回不同的播放器）</summary>
        /// <param name="videoUrl" type="String">视频Url</param>
        /// <param name="width" type="String">宽度</param>
        /// <param name="height" type="String">高度</param>


        videoUrl = Cmn.Func.GetAbsoluteUrl(videoUrl);

        if (Cmn.Func.IsMobile()) { //是移动设备
            return '<video src="' + videoUrl + '" width="' + width + '" height="' + height + '" class="' + classAttr +
                '" controls="controls"> </video>';
        }
        else { //是pc
            return Cmn.Video.GetVideoFlashPlayer(videoUrl,width,height,classAttr,isAutoPlay);
        }
    }
    //------------------------------------
};

//页面加载完成后，执行初始化
$(document).ready(function () {
    Cmn.Video.Init();
});