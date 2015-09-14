/// <reference path="../../../Js/jquery.js" />
/// <reference path="../../../Js/Cmn.js" />
/// <reference path="../../../Js/CmnUI/CmnUI.js" />
/// <reference path="../../../Js/CmnUI/FileUpload/FileUpload.js" />


//--------------------------------UploadFile控件类----------------------
 
(function (control, object) {

    control.UploadFile = function (controlContainer, colName, controlCfg) {
        /// <summary>HtmlEditor控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "UploadFile", colName, controlCfg]);
    } 
    //初始化控件配置
    control.UploadFile.prototype.InitControl = function (controlCfg) {
        var _self = this;
        _self.ControlCfg = _self.InitControlConfig(controlCfg);
         
        //加载所需js文件
        if (!Cmn.UI || !Cmn.UI.BasPlugin) {  CmnAjax.Func.LoadJs(Cmn.Func.GetRoot() + "Js/CmnUI/CmnUI.js");   }
        if (!Cmn.UI || !Cmn.UI.FileUpload) {  CmnAjax.Func.LoadJs(Cmn.Func.GetRoot() + "Js/CmnUI/FileUpload/FileUpload.js"); }
       
      
        if (!!_self.ControlCfg.ItfUrl) {
            _self.ControlCfg.ItfUrl = _self.ControlCfg.ItfUrl.indexOf("method=") > 1 ? _self.ControlCfg.ItfUrl : _self.ControlCfg.ItfUrl + "?method=File";
        }

        //设置控件宽度
        _self.ControlDom.css({ height: "auto" }).find(CmnMis.UI.Control.Selector.CtlContent)
            .css({ height: "auto", "border": "none", "text-align": "left" });

        //实例化上传插件
        _self.fileUpload = Cmn.UI.FileUpload(_self.ControlDom.find(".cg-Ctl-UploadFileContainer"), _self.ControlCfg.ItfUrl, true);
       
        //设置文件过滤后缀名
        _self.fileUpload.LimitFileSuffix = !!_self.ControlCfg.FileExt ? _self.ControlCfg.FileExt.split(",") : _self.fileUpload.LimitFileSuffix;
    
        //设置文件过滤大小
        _self.fileUpload.LimitSize = (parseInt(_self.ControlCfg.FileSize) || 3) * 1048576;

        //设置上传的参数
        _self.fileUpload.Data = {
            limitSize: _self.fileUpload.LimitSize / 1048576,
            rootPath: _self.ControlCfg.SavePath,
            suffix: _self.fileUpload.LimitFileSuffix.toString(),
            isSaveRealFileName: _self.ControlCfg.IsSaveRealFileName
        };

      
        //选择完毕的回调
        _self.fileUpload.SelectComplete = function () {
            _self.ControlDom.find(".cg-Ctl-FileViewContainer").show();
            _self.ControlDom.find(".cg-Ctl-ProgressContainer").show();
            _self.SelectComplete();
        }

        //过滤完毕的回调
        _self.fileUpload.OnFilter = function (e) {
            if (!e.state) {  _self.ControlDom.find(".cg-Ctl-ProgressContainer").hide(); }
            _self.OnFilter(e);
            _self.ControlDom.find(control.Selector.CtlTipDesc).show();
            _self.ControlDom.find(control.Selector.CtlErrTipDesc).hide().html("");
        }

        //上传完毕的回调
        _self.fileUpload.OnComplete = function (event) {
            _self.SetValue({ path: event.data.path });
            _self.OnComplete(event.data);
        }

        //点击删除的事件
        _self.fileUpload.OnClickDelBtn = function () {
            _self.SetValue({ path: "" });
            _self.ControlDom.find(".cg-Ctl-FileViewContainer").hide();
            _self.ControlDom.find(".cg-Ctl-SelectFileBtn").show();
            _self.OnClickDelBtn();
        }

    }

    //文件选择完毕的事件
    control.UploadFile.prototype.SelectComplete = function () {

    }
    //文件选择完毕的事件
    control.UploadFile.prototype.OnFilter = function () {

    }
    //文件上传完毕的事件
    control.UploadFile.prototype.OnComplete = function () {

    }
    //点击删除按钮的事件
    control.UploadFile.prototype.OnClickDelBtn = function () {

    }

    //获取控件的值
    control.UploadFile.prototype.GetValue = function () { 
        return this.ControlDom.find(this.fileUpload.Selector.SelectFile).data("path");
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.UploadFile.prototype.SetValue = function (value) {
        if (!!value) {

            //如果设置的是对象 就做下处理
            if (object.IsType(value, "object")) {  value = !!value.path ? value.path : "";  }
            else { this.fileUpload.SetFileInfo({ path:Cmn.Func.AddSiteRoot(value)}); }
            this.ControlDom.find(".cg-Ctl-SelectFileBtn").hide();
            this.ControlDom.find(".cg-Ctl-ProgressContainer").hide();
            this.ControlDom.find(".cg-Ctl-FileViewContainer").show();
            this.ControlDom.find(this.fileUpload.Selector.SelectFile).data("path", value);

        }
    }
    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.UploadFile.prototype.SetWidth = function (Width) {  
        this.ControlDom.find(this.fileUpload.Selector.SelectFile).css({ width: Width });
    }
 
    //控件初始化
    control.UploadFile.prototype.Init = function () {
        this.ControlDom.find(this.fileUpload.Selector.SelectFile).data("path", "");
        this.fileUpload.SetFileInfo();
        this.ControlDom.find(".cg-Ctl-SelectFileBtn").show();
        this.ControlDom.find(".cg-Ctl-ProgressContainer").hide();
        this.ControlDom.find(".cg-Ctl-FileViewContainer").hide();
    }
})(CmnMis.UI.Control, Cmn.Object);
