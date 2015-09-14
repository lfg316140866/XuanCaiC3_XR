
/// <reference path="../../../Js/Cmn.js" />

/// <reference path="../../../Js/CmnMis/CmnMisControl.js" />

/// <reference path="../../Js/jquery.js" />
/// <reference path="../../Js/jquery-ui.js" />
CmnMis.UI.Control.CustomCheckBox = function (thisControl) {
    //控件类型
    this.Type = "CustomCheckBox";
    //radioBox对象
    this.checkBoxBox = new Object();
    //要连接了控件名称
    this.LinkControlName = "";

    var that = this;
    //初始化控件配置
    this.InitControl = function (controlCfg) {
        /// <param name="controlCfg" type="josn">controlCfg:{FillSql,OptionList}</param>
        if (typeof controlCfg != 'object') {
            Cmn.Log("AutoComplete:控件配置信息错误可能controlCfg类型不对或者controlCfg.InitCfg类型错误");
        }

        if (typeof $(thisControl).attr("linkcontrolname") == "string") {
            this.LinkControlName = $(thisControl).attr("linkcontrolname");
        }

        this.ControlCfg = controlCfg;

        //控件初始化
        this.ResetInitControl(this.ControlCfg, thisControl, "");
    }

    //重新初始化
    this.ResetInitControl = function (controlCfg, thisControl, where) {

        //获取控件数据
        CmnMis.UI.GetControlData(controlCfg, where, function (data) {

            that.checkBoxBox = CmnMis.UI.RadioBox(thisControl, data);
            that.checkBoxBox.change = function (val, text) {
                if (typeof that.LinkControlName != "undefined") {
                    var _parm = "[" + $(thisControl).attr("name") + "]";
                    var _where = _parm + "=" + val;
                    var _parmName = that.LinkControlName;
                    if (_parmName == "") { return false; }
                    var _control = CmnMis.UI.GetControl($(".cmn-control[name=" + _parmName + "]"));
                    _control.ReLoadData(_where);
                }

            }
            //绑定数据
            that.checkBoxBox.bindData(thisControl, data);

            //初始化配置
            that.checkBoxBox.initControlConfig();


        });

    }

    //重新加载数据
    this.ReLoadData = function (where) {

        this.ResetInitControl(this.ControlCfg, thisControl, where);
    }


    //获取控件的值
    this.GetValue = function () { return this.checkBoxBox.GetValue(); }

    //设置控件的值
    //value:需要往控件中设置选中的值
    this.SetValue = function (value) {
        this.checkBoxBox.SetValue(value);
    }

    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    this.SetWidth = function (Width) { $(thisControl).find(".cmn_control_customCheckBox_item").width(Width); }
    //初始化控件
    this.Init = function () { $(thisControl).find(".cmn_control_customCheckBox_item").removeClass(this.radioBox.toggleClass) }

    //设置是否可用
    //isEnabled:是否可用，true:可用；false:不可用
    this.SetEnabled = function (isEnabled) {

        this.checkBoxBox.SetEnabled(isEnabled);
    }

    //设置输入焦点
    this.SetFocus = function () { }

};

CmnMis.UI.Control.CustomCheckBox.prototype = new CmnMis.UI.Control.BasControl();