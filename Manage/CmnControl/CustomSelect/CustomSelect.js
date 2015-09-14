///<reference path="../../../Js/Cmn.js" />
///<reference path="../../../Js/CmnMis/CmnMisControl.js" />
/// <reference path="../../Js/jquery.js" />
/// <reference path="../../Js/jquery-ui.js" />
/// <reference path="../../../Js/CmnMis/CmnMisTableOpt.js" />
/// <reference path="../../../Js/CmnMisUI.js" />
 



CmnMis.UI.Control.CustomSelect = function (thisControl) {
    //控件类型
    this.Type = "CustomSelect";
    //控件配置
    this.ControlCfg = null;
    //select插件
    this.SelectBox = ""
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
            if (that.SelectBox == "") { that.SelectBox = CmnMis.UI.SelectBox(thisControl, data); }
            that.SelectBox.change = function (val, text) {

                if (typeof that.LinkControlName != "undefined" ) {
                    var _parm = "[" + $(thisControl).attr("name") + "]";
                    var _where = _parm + "=" + val;
                    var _parmName = that.LinkControlName;
                    if (_parmName == "") { return false; }
                    var _control = CmnMis.UI.GetControl($(".cmn-control[name=" + _parmName + "]"));
                    _control.ReLoadData(_where);
                }
                    
            }
                //绑定数据
            that.SelectBox.bindData(thisControl, data);

            //初始化选项面板的高度
            that.SelectBox.initOptionListHeight();

            //初始化配置
            that.SelectBox.initControlConfig();

            that.Init();
        });

    }

    //重新加载数据
    this.ReLoadData = function (where) {
 
        this.ResetInitControl(this.ControlCfg, thisControl, where);
    }


    //获取控件的值
    this.GetValue = function () { return this.SelectBox.GetValue(); }

    //设置控件的值
    //value:需要往控件中设置选中的值
    this.SetValue = function (value) {
        this.SelectBox.SetValue(value);
    }

    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    this.SetWidth = function (Width) { $(thisControl).find(".cmn_contorl_CustomSelect").width(Width); }
    //初始化控件
    this.Init = function () { $(thisControl).find(".cmn_contorl_CustomSelect_input").html("").attr("value",""); }

    //设置是否可用
    //isEnabled:是否可用，true:可用；false:不可用
    this.SetEnabled = function (isEnabled) {
        
        this.SelectBox.SetEnabled(isEnabled);
    }

    //设置输入焦点
    this.SetFocus = function () { this.SelectBox.focusInput.focus(); }

};

CmnMis.UI.Control.CustomSelect.prototype = new CmnMis.UI.Control.BasControl();