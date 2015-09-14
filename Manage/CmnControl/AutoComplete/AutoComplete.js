/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="../../../Js/jquery.js" />
 


//--------------------------------AutoComplete控件类----------------------
(function (control, object) {

    control.AutoComplete = function (controlContainer, colName, controlCfg) {
        /// <summary>AutoComplete控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "AutoComplete", colName, controlCfg]);

        this.onSelect = function () { }
    }
    //初始化控件配置
    control.AutoComplete.prototype.InitControl = function (controlCfg) {
        var _self = this,
            _$autoCompleteInput = _self.ControlDom.find(".Cg_autoComplete_input");
        controlCfg = object.IsType(controlCfg, "string") ? $.parseJSON(controlCfg) : controlCfg;
        _self.ControlCfg = $.extend(_self.ControlCfg, $.parseJSON(_self.ControlDom.attr("control-config") || "{}"), controlCfg);
 
        CmnAjax.Func.LoadJs(Cmn.Func.GetRoot() + "manage/CmnControl/AutoComplete/autoComplete.1.0.js");

        _$autoCompleteInput.autocomplete({
            appendTo: _self.ControlDom,
            source: function () {
                var _param = _$autoCompleteInput.val();
                if (_param == "") { return _param }
                var _options = CmnAjax.GetData(InterfaceUrl + "?method=ExecSql", "{ 'ExecSql': '" + _self.ControlCfg.FillSql + "','param':'" + _param + "' }");
                return _options.data;

            },
            change: function () {

            },
            select: function (event, ui) {
                _$autoCompleteInput.attr("data-key", ui.item.value);
                _self.onSelect&&_self.onSelect();
            }
        });

        //_uploadObject.die().live("click", function () {
        //    $(thisControl).css({ "position": "absolute", "z-index": "2" });
        //});

        //_uploadObject.blur(function () {
        //    $(thisControl).css({ "position": "absolute", "z-index": "1" });
        //});

    }

    //获取控件的值
    control.AutoComplete.prototype.GetValue = function () {
        return this.ControlDom.find(".Cg_autoComplete_input").attr("data-key");
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.AutoComplete.prototype.SetValue = function (value) {
        var _self = this;
        CmnAjax.PostData(InterfaceUrl + "?method=ExecSql", "{ 'ExecSql': '" + _self.ControlCfg.FillSql + "','param':'" + value + "' }", function (data) {
            var _key = "", _val = "", _count = 0;
            $.each(data.data[0], function (index, ite) {
                if (_count == 0) { _key = ite; }
                else { _val += " - " + ite; }
                _count++;
            });
            var _text = _key + _val;
            _self.ControlDom.find(".Cg_autoComplete_input").attr("data-key", _key);
            _self.ControlDom.find(".Cg_autoComplete_input").val(_text);
        });
    }
    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.AutoComplete.prototype.SetWidth = function (Width) { this.ControlDom.find(".Cg_autoComplete_input").width(Width); }
    //初始化控件
    control.AutoComplete.prototype.Init = function () { this.ControlDom.find(".Cg_autoComplete_input").val(""); }
    //设置输入焦点
    control.AutoComplete.prototype.SetFocus = function () { this.ControlDom.find(".Cg_autoComplete_input").focus(); }

})(CmnMis.UI.Control, Cmn.Object);


 