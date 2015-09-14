/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="ueditor1_4_3/ueditor.config.js" />
 
//--------------------------------UEdit控件类----------------------
(function (control, object) {

    control.UEdit = function (controlContainer, colName, controlCfg) {
        /// <summary>UEdit控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "UEdit", colName, controlCfg]);

    }
    //初始化控件配置
    control.UEdit.prototype.InitControl = function (controlCfg) {
        var _self = this, 
            _$uEidtDom = _self.ControlDom.find(".cg-UEdit-script");

        //随机id避免重复
        var _randID = "cg-UEdit" + new Date().getTime() + "-" + Math.floor(Math.random() * 1000);
        _$uEidtDom.attr("id", _randID);

        //合并配置 
        _self.ControlCfg = _self.InitControlConfig(controlCfg);
 

        //设置控件大小
        _self.ControlDom.css("height", "auto").find(control.Selector.CtlContent).css({ "height": "auto", width: "auto","text-align": "left" });
        _$uEidtDom.css({ "height": _self.ControlCfg.Height, width: _self.ControlCfg.Width });


        //加载所需js文件
        CmnAjax.Func.LoadJs(Cmn.Func.GetRoot() + "manage/CmnControl/UEdit/ueditor1_4_3/ueditor.config.js");
        CmnAjax.Func.LoadJs(Cmn.Func.GetRoot() + "manage/CmnControl/UEdit/ueditor1_4_3/editor_api.js");
      
        //初始化uedit
        _self.Edit = UE.getEditor(_randID);

 
 
    }
    //获取控件的值
    control.UEdit.prototype.GetValue = function () {
        
        return this.Edit.getContent();
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.UEdit.prototype.SetValue = function (value) {
        this.Edit.setContent(value);
    }
    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.UEdit.prototype.SetWidth = function (Width) { this.ControlDom.find(".cg-UEdit-script").width(Width); }
    //初始化控件
    control.UEdit.prototype.Init = function () { this.Edit.setContent(""); }
    //设置输入焦点
    control.UEdit.prototype.SetFocus = function () { this.Edit && this.Edit.focus(); }
})(CmnMis.UI.Control, Cmn.Object);
 