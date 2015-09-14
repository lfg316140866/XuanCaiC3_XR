/// <reference path="../../../Js/jquery.js" />
/// <reference path="../../../Js/Cmn.js" />
/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="../../../Js/CmnMis/CmnMisControl.js" />
/// <reference path="../../../Js/jquery-ui.js" />
/// <reference path="../../../Js/mobiscroll.custom-2.6.2.min.js" />
/// <reference path="jquery-ui-timepicker-addon.js" />


//--------------------------------DateSelect控件类----------------------
(function (control, object) {

    control.DateSelect = function (controlContainer, colName, controlCfg) {
        /// <summary>DateSelect控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "DateSelect", colName, controlCfg]);

    }
    //初始化控件配置
    control.DateSelect.prototype.InitControl = function (controlCfg) {
        var _self = this,
            _$dateInput = _self.ControlDom.find(".cmn_dateSelect_input");
        controlCfg = object.IsType(controlCfg, "string") ? $.parseJSON(controlCfg) : controlCfg;
        _self.ControlCfg = $.extend(_self.ControlCfg, $.parseJSON(_self.ControlDom.attr("control-config") || "{}"), controlCfg);
        var _dateType = _self.ControlCfg.DateType;

        //CmnAjax.Func.LoadJs("/manage/CmnControl/DateSelect/jquery-ui-timepicker-addon.js");

        if (_dateType == "datetime") {
            if (typeof _$dateInput.datetimepicker == "function") {
                _$dateInput.datetimepicker({
                    numberOfMonths: 1,
                    showSecond: true,
                    showMillisec: true,
                    timeFormat: 'hh:mm:ss'
                    //, altField: $(thisControl)  这个会导致时间显示不出来
                });
            }
        } else {
            _$dateInput.datepicker({
                dateFormat: "yy-mm-dd",
                altField: _self.ControlDom
            });
        }



    }

    //获取控件的值
    control.DateSelect.prototype.GetValue = function () {
        return this.ControlDom.find(".cmn_dateSelect_input").val();
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.DateSelect.prototype.SetValue = function (value) { this.ControlDom.find(".cmn_dateSelect_input").val(value); }
    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.DateSelect.prototype.SetWidth = function (Width) { this.ControlDom.find(".cmn_dateSelect_input").width(Width); }
    //初始化控件
    control.DateSelect.prototype.Init = function () { this.ControlDom.find(".cmn_dateSelect_input").val(""); }
    //设置输入焦点
    control.DateSelect.prototype.SetFocus = function () { this.ControlDom.find(".cmn_dateSelect_input").focus(); }

})(CmnMis.UI.Control, Cmn.Object);

 

 