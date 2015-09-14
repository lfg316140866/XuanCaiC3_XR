/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="../../../Js/CmnMis/CmnMisFunc.js" />
/// <reference path="../../../Js/jquery.js" />
/// <reference path="../../../Js/Cmn.js" />
/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="../../../Js/CmnMis/CmnMisControl.js" />



//--------------------------------HtmlEditor控件类----------------------
(function (control, object) {

    control.HtmlEditor = function (controlContainer, colName, controlCfg) {
        /// <summary>HtmlEditor控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "HtmlEditor", colName, controlCfg]);

    }
    //初始化控件配置
    control.HtmlEditor.prototype.InitControl = function (controlCfg) {
        var _self = this, 
            _$htmlEidtDom = _self.ControlDom.find(".cmn_htmlEidt_TextArea");
        //合并配置
        _self.ControlCfg = _self.InitControlConfig(controlCfg);
        if (!!_self.ControlCfg.ItfUrl) {
            _self.ControlCfg.ItfUrl = _self.ControlCfg.ItfUrl.indexOf("method=") > 1 ? _self.ControlCfg.ItfUrl : _self.ControlCfg.ItfUrl + "?method=File";
        }
        //设置控件大小
        _self.ControlDom.css({ "height": "auto", width: "auto" }).find(control.Selector.CtlContent).css({ "height": "auto", width: "auto" });
        _self.ControlCfg.Tools = _self.ControlCfg.Tools||"Removeformat,Blocktag,Fontface,FontSize,|,Bold,Italic,Underline,Strikethrough,FontColor,BackColor,|,Align,List,Outdent,Indent,Hr,|,Link,Unlink,Anchor,Img,Media,Emot,Table,Source,Fullscreen";
        _self.Edit = _$htmlEidtDom.css({ width: "100%", height: _self.ControlCfg.Height }).xheditor({
                            tools: _self.ControlCfg.Tools,
                            width: _self.ControlCfg.Width,
                            height: _self.ControlCfg.Height,
                            upLinkUrl: _self.ControlCfg.ItfUrl + "&rootPath="+(!!_self.ControlCfg.SavePath?_self.ControlCfg.SavePath:"/Upload/HtmlEdit/"),
                            upLinkExt: "zip,rar,txt",
                            upImgUrl: _self.ControlCfg.ItfUrl + "&rootPath=" + (!!_self.ControlCfg.SavePath ? _self.ControlCfg.SavePath : "/Upload/HtmlEdit/"),
                            upImgExt: "jpg,jpeg,gif,png",
                            upFlashUrl: _self.ControlCfg.ItfUrl + "&rootPath=" + (!!_self.ControlCfg.SavePath ? _self.ControlCfg.SavePath : "/Upload/HtmlEdit/"),
                            upFlashExt: "swf",
                            upMediaUrl: _self.ControlCfg.ItfUrl + "&rootPath=" + (!!_self.ControlCfg.SavePath ? _self.ControlCfg.SavePath : "/Upload/HtmlEdit/"),
                            upMediaExt: "wmv,avi,wma,mp3,mid,mp4"
                        });
       
        //为了解决chrome滚动条假死的问题
        setTimeout(function () {
            _self.Edit.exec("Img");
            $("#xheCancel").click();
            _self.Edit.appendHTML("<span></span>");
        }, 500);
      
        //存在验证正则表达式的时候
        if (!!_self.ControlCfg.RegexContent) {
            //焦点移开之后执行正则验证
            _self.ControlDom.unbind("click").click(function () {
                _self.ControlDom.find(control.Selector.CtlTipDesc).show();
                _self.ControlDom.find(control.Selector.CtlErrTipDesc).hide().html("");
            });

        }
 
    }
    //获取控件的值
    control.HtmlEditor.prototype.GetValue = function () {
        var _$val = $("<div>" + this.Edit.getSource() + "</div>"),
            _self = this;
        _$val.find("img").each(function (index, item) {
            if ($(item).attr("src") && $(item).attr("src").indexOf("base64") != -1) {
                //"/CmnMisItf.aspx?method=UploadBase64Img"
                var _src = CmnAjax.GetData(_self.ControlCfg.ItfUrl, { "inputFileName": "ImageData", "ImageData": $(item).attr("src") });
                $(item).attr("src", _src.path); 
                $(item).attr("_xhe_src", "");
            } 
            else if ($(item).attr("src") && $(item).attr("src").indexOf("xheditor_emot") !=-1) {
              
                var _rootPath = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1),
                    _src = _rootPath + $(item).attr("_xhe_src");
                    $(item).attr("src", _src);
            }

        });
        return _$val.html();
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.HtmlEditor.prototype.SetValue = function (value) {
        if (value == null) { value = "";}
        this.Edit.setSource(value + " ");
    }
    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.HtmlEditor.prototype.SetWidth = function (Width) { this.ControlDom.find(".cmn_htmlEidt_TextArea").width(Width); }
    //初始化控件
    control.HtmlEditor.prototype.Init = function () { this.ControlDom.find(".cmn_htmlEidt_TextArea").val(" "); }
    //设置输入焦点
    control.HtmlEditor.prototype.SetFocus = function () { this.Edit && this.Edit.focus(); }
})(CmnMis.UI.Control, Cmn.Object);
 