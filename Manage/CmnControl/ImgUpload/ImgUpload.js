/// <reference path="../../../Js/jquery.js" />
/// <reference path="../../../Js/Cmn.js" />
/// <reference path="../../../Js/CmnUI/CmnUI.js" />
/// <reference path="../../../Js/CmnUI/FileUpload/FileUpload.js" />
 


//--------------------------------ImgUpload控件类----------------------

(function (control, object) {

    control.ImgUpload = function (controlContainer, colName, controlCfg) {
        /// <summary>HtmlEditor控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "ImgUpload", colName, controlCfg]);
    }
    //初始化控件配置
    control.ImgUpload.prototype.InitControl = function (controlCfg) {
        var _self = this;
        _self.ControlCfg = _self.InitControlConfig(controlCfg);

        //加载所需js文件
        if (!Cmn.UI || !Cmn.UI.BasPlugin) {
            CmnAjax.Func.LoadJs(Cmn.Func.GetRoot() + "Js/CmnUI/CmnUI.js");
        }
        if (!Cmn.UI || !Cmn.UI.FileUpload) {
            CmnAjax.Func.LoadJs(Cmn.Func.GetRoot() + "Js/CmnUI/FileUpload/FileUpload.js");
        }


        if (!!_self.ControlCfg.ItfUrl) {
            _self.ControlCfg.ItfUrl = _self.ControlCfg.ItfUrl.indexOf("method=") > 1 ? _self.ControlCfg.ItfUrl : _self.ControlCfg.ItfUrl + "?method=File";
        }

        _self.fileUpload = Cmn.UI.FileUpload(_self.ControlDom.find(".jscUploadImgModulesWrap"), _self.ControlCfg.ItfUrl, false);

        _self.fileUpload.LimitFileSuffix = !!_self.ControlCfg.FileExt ? _self.ControlCfg.FileExt.split(",") : _self.fileUpload.LimitFileSuffix;

        _self.fileUpload.LimitSize = (parseInt(_self.ControlCfg.FileSize) || 3) * 1048576;
        _self.fileUpload.Data = {
            limitSize: _self.fileUpload.LimitSize / 1048576,
            rootPath: _self.ControlCfg.SavePath,
            suffix: _self.fileUpload.LimitFileSuffix.toString(),
            isSaveRealFileName: _self.ControlCfg.IsSaveRealFileName
        }
        //设置控件宽度
        _self.ControlDom.css({ height: "auto" }).find(CmnMis.UI.Control.Selector.CtlContent).css({ height: "auto", "border": "none", "text-align": "left" });
            //.find(this.fileUpload.Selector.SelectFile)
            //.css({ width: _self.ControlCfg.Width, height: _self.ControlCfg.Height, "line-height": _self.ControlCfg.Height + "px" });
         
        _self.ControlDom.find(_self.fileUpload.Selector.FilePreview).css({
            width: _self.ControlCfg.Width, height: _self.ControlCfg.Height, "overflow": "hidden"
        });

        _self.ControlDom.find(".cmn-ProgressContainer").css({ width: _self.ControlCfg.Width });
         
        _self.fileUpload.SelectComplete = function () {
            _self.ControlDom.find(".cg-Ctl-ProgressContainer").show();
            _self.SelectComplete();
        }

        _self.fileUpload.OnFilter = function (e) {
            if (!e.state) { _self.ControlDom.find(".cg-Ctl-ProgressContainer").hide(); }
            _self.OnFilter(e);
           
        }

        _self.fileUpload.OnComplete = function (event) {
             
            _self.SetValue({ path:event.data.path });
            _self.OnComplete(event.data);
        }

        _self.fileUpload.OnClickDelBtn = function () {
            _self.OnClickDelBtn();
        }

    }

    //文件选择完毕的事件
    control.ImgUpload.prototype.SelectComplete = function () {

    }
    //文件选择完毕的事件
    control.ImgUpload.prototype.OnFilter = function () {

    }
    //文件上传完毕的事件
    control.ImgUpload.prototype.OnComplete = function () {

    }
    //点击删除按钮的事件
    control.ImgUpload.prototype.OnClickDelBtn = function () {

    }
    //获取控件的值
    control.ImgUpload.prototype.GetValue = function () {
        return this.ControlDom.find(this.fileUpload.Selector.SelectFile).data("path");
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.ImgUpload.prototype.SetValue = function (value) {
        if (!!value) {
            //如果设置的是对象 就做下处理
            if (object.IsType(value, "object")) { value = !!value.path ? value.path : ""; }
            this.fileUpload.SetFileInfo({ path: Cmn.Func.AddSiteRoot(value) });
            this.ControlDom.find(".cg-Ctl-ProgressContainer").hide();
            this.ControlDom.find(this.fileUpload.Selector.SelectFile).data("path", value);

        }
    }
    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.ImgUpload.prototype.SetWidth = function (Width) {
        this.ControlDom.find(this.fileUpload.Selector.SelectFile).css({ width: Width });
    }

    //控件初始化
    control.ImgUpload.prototype.Init = function () {
        this.ControlDom.find(this.fileUpload.Selector.SelectFile).data("path", "");
        this.ControlDom.find(".cg-Ctl-ProgressContainer").hide();
        this.ControlDom.find(this.fileUpload.Selector.FilePreview).empty();
        this.fileUpload.SetFileInfo();
    }
})(CmnMis.UI.Control, Cmn.Object);
