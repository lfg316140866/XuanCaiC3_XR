/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="../../../Js/jquery.js" />

Array.prototype.unique = function () {
    var temp = new Array();
    this.sort();
    for (i = 0; i < this.length; i++) {
        if (this[i] == this[i + 1]) {
            continue;
        }
        temp[temp.length] = this[i];
    }
    return temp;

}
CmnMis.UI.Control.TreeSelect = function (thisControl) {
    //控件类型
    this.Type = "TreeSelect";

    var level = 0;

    //初始化控件配置
    this.InitControl = function (controlCfg) {
 
        var _cfg = $.extend({ FillSql: "", OptionList: "" }, controlCfg);
        //初始化
        $(thisControl).find(".cmn-control-TreeSelect").empty().html("<option>    </option>");
        CmnMis.UI.GetControlData(_cfg, "", function (data) {
            var _childData = _GetFirst(data);
            _GetChild(data, _childData)
        });
        
 
    }
 

    function _GetFirst(data) {
        var _data = new Array();
        $.each(data, function (index, item) {
            if (item.ParentID == "") {
                var _val = "■" + item.Value;
                var _option = $("<option id='" + item.Key + "' parentid='' value='" + item.Key + "'>" + _val + "</option>")
                $(thisControl).find(".cmn-control-TreeSelect").append(_option);
            } else {
                _data.push(item);
            }
          
        });
        return _data;
    }
 
    function _GetLevel(_index,id) {
       
        if ($(thisControl).find(".cmn-control-TreeSelect").find("#" + id).length > 0) {
                if ($(thisControl).find(".cmn-control-TreeSelect").find("#" + id).attr("parentid") == "") {
                    return _index;
                }
                _index += 1;
                var _pid = parseInt($(thisControl).find(".cmn-control-TreeSelect").find("#" + id).attr("parentid"));
                
                return _GetLevel(_index, _pid);
            }
    }

    function _GetChild(data, cdata) {

        var _cdata = [];

            $.each(data, function (index, item) {
                $.each(cdata, function (index1, item1) {
 
                    if (item1.ParentID == item.Key) {
                        if ($(thisControl).find(".cmn-control-TreeSelect").find("#" + item1.ParentID).length > 0) {
                            _cdata.push(index1);
                            var _val = "", level = _GetLevel(0, item1.ParentID);
                           
                            for (var _i = 0; _i < level; _i++) {
                                _val += "　";
                            }
                            _val += "┗" + item1.Value;
                            var _option = $("<option  parentid='" + item1.ParentID + "' id='" + item1.Key + "' value='" + item1.Key + "'>" + _val + "</option>")
                            $(thisControl).find(".cmn-control-TreeSelect").find("#" + item1.ParentID).after(_option);

                        }
                          
                    }
 
                });
 
                if (index == data.length - 1) {
                    _cdata = _cdata.unique();
                    for (var i = 0; i < _cdata.length; i++) {
                        cdata.splice(_cdata[i] - i, 1);
                    }
                   
                    if (cdata.length > 0) {
                        _GetChild(data, cdata);
                    }
                }
            });
       
    }

    //获取控件的值
    this.GetValue = function () { return $(thisControl).find(".cmn-control-TreeSelect").val(); }

    //设置控件的值
    //value:需要往控件中设置的值
    this.SetValue = function (value) {
　
        $(thisControl).find(".cmn-control-TreeSelect").val(value);
    }

    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    this.SetWidth = function (Width) { $(thisControl).width(Width); }
    //初始化控件
    this.Init = function () {
        $(thisControl).find(".cmn-control-TreeSelect").empty();
   　
    }

    //设置是否可用
    //isEnabled:是否可用，true:可用；false:不可用
    this.SetEnabled = function (isEnabled) {
        if (isEnabled) {   }
        else {   }
    }

    //设置输入焦点
    this.SetFocus = function () {  }

    //重新加载数据
    this.ReLoadData = function () { return true; }
};

CmnMis.UI.Control.TreeSelect.prototype = new CmnMis.UI.Control.BasControl();