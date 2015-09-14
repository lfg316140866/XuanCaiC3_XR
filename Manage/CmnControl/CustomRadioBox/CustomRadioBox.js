/// <reference path="../../../Js/jquery.js" />
/// <reference path="../../../Js/Cmn.js" />
/// <reference path="../../../Js/CmnUI/CmnUI.js" />
/// <reference path="../../../Js/CmnMis/CmnMisControl.js" />
/// <reference path="../../../Js/CmnUI/FileUpload/FileUpload.js" />


//--------------------------------CustomRadioBox控件类----------------------

(function (control, object) {

    control.CustomRadioBox = function (controlContainer, colName, controlCfg) {
        /// <summary>HtmlEditor控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "CustomRadioBox", colName, controlCfg]);
    }
    //初始化控件配置
    control.CustomRadioBox.prototype.InitControl = function (controlCfg) {
        var _self = this;
        _self.ControlCfg = _self.InitControlConfig(controlCfg);

        //加载所需js文件
        if (!Cmn.UI || !Cmn.UI.BasPlugin) {
            CmnAjax.Func.LoadJs(Cmn.Func.GetRoot() + "Js/CmnUI/CmnUI.js");
        }
 
        _self.ControlDom.find(control.Selector.CtlContent).css({ "border": "none", "text-align": "left" });

        //绑定数据
        _self.BindData();
    }

    //-----------------------------
    //---------绑定数据
    control.CustomRadioBox.prototype.BindData = function (where) {
        /// <summary>绑定数据</summary>
        /// <param name="where" type="String">填充查询的条件</param>
        var _self = this;
        //如果不是必填加空选项
        //if (_self.ControlCfg.IsRequired == "0") { _self.customRadio.opt.IsRequired = false; }
        //else { _self.customRadio.opt.IsRequired = true; }

        //获取控件数据
        CmnMis.UI.Control.GetControlData(_self.ControlCfg, where, function (data) {
            _self.customRadio = Cmn.UI.CustomRadioBox(_self.ControlDom.find(".cg-radio-wrap"), data, {
                IsRequired: parseInt(_self.ControlCfg.IsRequired)
            });
        });
    }

    //重新加载数据
    control.CustomRadioBox.prototype.ReLoadData = function (where) {
        /// <summary>重新加载数据</summary>
        /// <param name="where" type="String">条件</param>
        this.BindData(where);
    }



    //获取控件的值
    control.CustomRadioBox.prototype.GetValue = function () {
        return this.customRadio.GetValue();
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.CustomRadioBox.prototype.SetValue = function (value) {
        this.customRadio.SetValue(value)
    }
    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.CustomRadioBox.prototype.SetWidth = function (Width) {
        this.ControlDom.find(this.fileUpload.Selector.Selector).css({ width: Width });
    }

    //控件初始化
    control.CustomRadioBox.prototype.Init = function () {
        this.customRadio.SetValue("");
    }
})(CmnMis.UI.Control, Cmn.Object);
 