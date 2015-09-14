/// <reference path="../../../Js/ThirdLib/jquery.js" />
/// <reference path="../../Js/CmnMis/CmnMis.js" />
/// <reference path="../../../Js/md5.js" />
/// <reference path="../../Js/CmnMis/CmnMisUserForm.js" />

CmnMis.CurUserForm.BeforeFillRecList.Add(function (data) {
    for (var _i = 0; _i < data.length; _i++) {
        if (data[_i]["isshowhtml"] == "1" || data[_i]["isshowhtml"] == "True") { data[_i]["isshowhtml"] = "yescheck"; }
        else { data[_i]["isshowhtml"] = "nocheck"; }

        if (data[_i]["isshowingrid"] == "1" || data[_i]["isshowingrid"] == "True") {
            data[_i]["isshowingrid"] = "yescheck";
            data[_i]["isshowcol"] = "";
        }
        else {
            data[_i]["isshowingrid"] = "nocheck";
            data[_i]["isshowcol"] = "hide";
        }

        if (data[_i]["isshowinedit"] == "1" || data[_i]["isshowinedit"] == "True") {
            data[_i]["isshowinedit"] = "yescheck";
            data[_i]["isShowEditCol"] = "jscEdit";
        }
        else {
            data[_i]["isshowinedit"] = "nocheck";
            data[_i]["isShowEditCol"] = "";
        }
    } 

    $(".jscUserFromDesc").html(data[0] && data[0]["userformdesc"]);
});

//jquery
$.fn.RadioButton = function () {
    $(this).each(function (index,item) {
        if ($(item).hasClass("yescheck")) {
            $(this).attr("value", "1");
        } else {
            $(this).attr("value", "0");
        }
    });

    $(this).off("click").on("click", function () {
        if ($(this).hasClass("yescheck")) {
            $(this).removeClass("yescheck").addClass("nocheck");
            $(this).attr("value", "0");
            $(this).trigger("change");
        }
        else {
            $(this).removeClass("nocheck").addClass("yescheck");
            $(this).attr("value", "1");
            $(this).trigger("change");
        }
    });
}


var UserFormColManage = {
    SaveUserFormID: CmnMis.Func.GetUserFormIDByDesc("用户表单字段管理"),
    RegularUserFormID: CmnMis.Func.GetUserFormIDByDesc("正则表达式管理"),
    ControlTypeUserFormID: CmnMis.Func.GetUserFormIDByDesc("控件类型管理"),
    Update: function (curFormDom, onUpdate, updateComplete) {

        var _recDom = $(curFormDom).find(".jscRec"),
            _updateCount = 0,
            _updateTotalCount = _recDom.length;

        $(curFormDom).find(".jscRec").each(function (index, item) {
            var _param = { CurUserFormID: UserFormColManage.SaveUserFormID, RecID: $(item).attr("recid") };
            $(item).find(".jscColDOM").each(function (i, v) {
                var _val = "";
                if (v.nodeName == "INPUT" || v.nodeName == "SELECT") {
                    _val = $(v).val();
                    if (v.nodeName == "INPUT") { _val = _val || $(v).text(); }
                }
                else if (v.nodeName == "SPAN" && $(v).hasClass("jscRadio")) { _val = $(v).attr("value")||'1'; }
                else { _val = $(v).text(); }
                _param[$(v).attr("colname")] = _val;
            });

            (function (param) {
                CmnAjax.PostData(InterfaceUrl + "?method=UpdateRec", param, function (data) {
                    _updateCount++;
                    if (data.IsSuccess == '1') {
                        onUpdate && onUpdate({ state: true, msg: "更新成功", colName: param["coltitle"] });
                    }
                    else {
                        onUpdate && onUpdate({ state: false, msg: "更新失败", colName: param["coltitle"] });
                    }
                    if (_updateTotalCount == _updateCount) {
                        updateComplete && updateComplete({ state: true, msg: "更新完成"});
                    }
                });
            })(_param);

        });
    },
    Add: function (curFormDom, onAdd) {

        var _param = { CurUserFormID: UserFormColManage.SaveUserFormID, userid: '1', userformid: CmnMis.Func.GetUserFormIDByDesc($(".jscUserFromDesc").text()) };

        $(curFormDom).find(".jscCol").each(function (i, v) {

            var _val = "";
            if (v.nodeName == "INPUT" || v.nodeName == "SELECT") {
                _val = $(v).val() ;
                if (v.nodeName == "INPUT") { _val = _val || $(v).text(); }
                $(v).val((!!$(v).attr("default")?$(v).attr("default"):""));
            }
            else if (v.nodeName == "SPAN" && $(v).hasClass("jscRadio")) { _val = $(v).attr("value"); }
            else { _val = $(v).text(); $(v).text("");}
            if (!!_val && _val!=0) _param[$(v).attr("colname")] = _val;
        });
        
        (function (param) {

            var _p = $.extend({ colname: "",  coltitle: "", colalign: 1, colwidth: "100",  is_required: 1,  isshowingrid: 1, isshowinedit: 1,  isshowhtml: 1 }, param);

            CmnAjax.PostData(InterfaceUrl + "?method=AddRec", _p, function (data) {
               if (data.IsSuccess == '1') {
                   onAdd && onAdd({ state: true, msg: "添加成功" });
               }
               else {
                   onAdd && onAdd({ state: false, msg: "添加失败" + data.ErrMsg });
               }
           });
       })(_param);
    },
    Del: function (recDom, onDel) {

        if (!window.confirm("确认删除" + recDom.find(".jscColDOM[colname=colname]").val() + "吗？")) { return; }

        var _userFormColId = recDom.attr("recid"),
            _param = { CurUserFormID: UserFormColManage.SaveUserFormID, RecID: _userFormColId };

        CmnAjax.PostData(InterfaceUrl + "?method=DeleteRec", _param, function (data) {
            if (data.IsSuccess == '1') {
                onDel && onDel({ state: true, msg: "删除成功" });
            }
            else {
                onDel && onDel({ state: false, msg: "删除失败" + data.ErrMsg });
            }
        });

    }
}
 
 
CmnMis.CurUserForm.AfterRecListLoad.Add(function () {

    var _curFormDom = $(CmnMis.CurUserForm.GetUserFormSelector());
 
    //修正字段对齐方式填充无法设置的问题
    _curFormDom.find(".cmn-RecListView").find(".jscColDOM[colname=colalign]").not(".jscColDOM[v=1]").each(function () {
        $(this).val($(this).attr("v"));
    });

    //绑定自定义单选按钮
    _curFormDom.find(".jscRadio").RadioButton();


    //是否只显示列表字段
    _curFormDom.find(".jscShowListCol").off("change").on("change", function () {
        _curFormDom.find(".jscShowEditCol").removeClass("yescheck").addClass("nocheck");
        _curFormDom.find(".jscShowEditCol").attr("value", "0");

        if ($(this).attr("value") == "0") {
            //显示非列表字段
            _curFormDom.find(".jscRec.hide").show();
            _curFormDom.find(".jscRec.jscEdit").show();
        }
        else {
            _curFormDom.find(".jscRec").show();
            _curFormDom.find(".jscRec.hide").hide();
        }
    });

    //是否只显示编辑字段
    _curFormDom.find(".jscShowEditCol").off("change").on("change", function () {
        _curFormDom.find(".jscShowListCol").removeClass("yescheck").addClass("nocheck");
        _curFormDom.find(".jscShowListCol").attr("value", "0");

        if ($(this).attr("value") == "0") { _curFormDom.find(".jscRec").show(); }
        else {
            _curFormDom.find(".jscRec").hide();
            _curFormDom.find(".jscRec.jscEdit").show();
        }
    });


    //拖动排序
    if (_curFormDom.find(".jscRecContainer").find(".ui-widget-content").length > 0) { _curFormDom.find(".jscRecContainer").sortable('destroy'); }
    _curFormDom.find(".jscRecContainer").sortable({
        opacity: 0.8,                //设置拖动时候的透明度
        axis: "y",                    //拖动方向
        cursor: 'move',              //拖动的时候鼠标样式
        stop: function (event, ui) { //完成拖动之后自动排序
            $(".jscRec").each(function (index, item) {
                $(item).find("td.dat-sortid").html(index);
            });
        }
    });


    var _layer = {

        show: function (selector) {

            if (!_curFormDom.find(".cg-UI-LayerContainer").hasClass(Cmn.UI.GetSelectorName(selector))) {

                if (_curFormDom.find(".cg-UI-LayerContent").find("div").length > 0) {
                    _curFormDom.find(".cg-UI-LayerContent").find("div").eq(0).hide().insertAfter(".cg-UI-LayerContainer");
                }

                _curFormDom.find(selector).appendTo(_curFormDom.find(".cg-UI-LayerContent")).show();
            }

            _curFormDom.find(".cg-UI-LayerContentContainer").css({ "right": "-500px", "opacity": "0" });
            _curFormDom.find(".cg-UI-LayerContainer").show().find(".cg-UI-LayerContentContainer").animate({ "right":"0%", "opacity": "1" });

        },
        hide: function () {
            _curFormDom.find(".cg-UI-LayerContainer").fadeOut(700);
            _curFormDom.find(".cg-UI-LayerContainer").find(".cg-UI-LayerContentContainer").animate({ "right": "-500px" });
        }

    }

    _curFormDom.find(".cg-UI-LayerMask").off("click").on("click", function () { _layer.hide(); })


    //添加字段信息
    _curFormDom.undelegate(".jscAddBtn", "click").delegate(".jscAddBtn", "click", function (e) {
        _layer.show(".jscAddColContainer");
        //设置默认排序
        $(".jscAddColContainer").find(".jscCol[colname=sortid]").val(($(".jscRec").last().find(".jscColDOM[colname=sortid]").text() * 1 + 1));
    });

    //控件配置
    _curFormDom.undelegate(".jscColCtlCfgBtn", "click").delegate(".jscColCtlCfgBtn", "click", function (e) {

        var _cfg = $(this).parents(".jscRec").find(".jscControlcfg").html();

        _layer.show(".jscControlCfgContainer");

        $(".jscControlSelectContent").data("controlCfg", _cfg);
        $(".jscControlSelectContent").data("formDOM", $(this).parents(".jscRec").find(".jscControlcfg"));

        $(".jscControlSelectContent").attr("recid", $(this).parents(".jscRec").attr("recid"));

        $(".jscCurColName").html($(this).parents(".jscRec").find(".dat-colname-value").val());
        $(".jscCurColTitle").html($(this).parents(".jscRec").find(".dat-coltitle-value").val());

        $(".jscControlTypeSelect").val($(this).parents(".jscRec").find(".jscControlcfg").attr("colcontroltypeid"));
        $(".jscControlTypeSelect").change();
    });


    //更新控件配置
    _curFormDom.find(".cg-UI-LayerContainer").undelegate("click").delegate(".jscSavaSubmitControl", "click", function () {

        var _param = { CurUserFormID: UserFormColManage.SaveUserFormID, RecID: $(".jscControlSelectContent").attr("recid") };
        _param.controlcfg = CreateCtlCfgPanel.GetJsonStr();
        _param.colcontroltypeid = $(".jscControlTypeSelect").val();


        CmnAjax.PostData(InterfaceUrl + "?method=UpdateRec", _param, function (data) {
            if (data.IsSuccess == '1') {
                alert("更新成功！");
                $(".jscControlSelectContent").data("controlCfg", _param.controlcfg);
                $(".jscControlSelectContent").data("formDOM") && $(".jscControlSelectContent").data("formDOM").html(_param.controlcfg);
                $(".jscControlSelectContent").data("formDOM") && $(".jscControlSelectContent").data("formDOM").parents(".jscRec").find(".jscControlcfg").attr("colcontroltypeid", _param.colcontroltypeid);
            }
            else { alert("更新失败！"); }

            _layer.hide();
        });

    });

    //控件配置
    $(".jscControlSelectContent").undelegate("change").delegate(".jscControlTypeSelect", "change", function () {

        CmnAjax.PostData(InterfaceUrl + "?method=GetRecList", { "CurUserFormID": UserFormColManage.ControlTypeUserFormID, "Condition": "[controltypeid]=" + $(this).val() }, function (data) {


            var _panelCfg = data.data[0] && data.data[0].controltypeparam,
                _controlCfg = $(".jscControlSelectContent").data("controlCfg");

            CreateCtlCfgPanel.Init(_panelCfg, _controlCfg);

        });
    });


    _curFormDom.undelegate(".jscAddBtn", "mouseenter").delegate(".jscMoreBtn", "mouseenter", function (e) {
        $(this).parent(".jscTools").find(".jscMorePanel").fadeIn();
    });

    _curFormDom.undelegate(".jscTools", "mouseleave").delegate(".jscTools", "mouseleave", function (e) {
        $(this).find(".jscMorePanel").hide();
    });



    //提交更新
    _curFormDom.find(".jscSavaSubmit").off("click").on("click", function () {
        UserFormColManage.Update(_curFormDom, function (e) {
            console.log(e.colName + ":" + e.msg);
        }, function (e) {
            if (e.state) { Cmn.alert(e.msg);}
        });
    });

    //提交添加
    _curFormDom.find(".jscSavaAddSubmit").off("click").on("click", function () {
        UserFormColManage.Add(_curFormDom, function (e) {
            if (e.state) {
                _layer.hide();
                CmnMis.CurUserForm.GetRecList();
            }
            else { alert(e.msg); }
        });
    });

    //删除
    _curFormDom.find(".jscDelRecByID").off("click").on("click", function () {
       
        UserFormColManage.Del($(this).parents(".jscRec"), function (e) {
            if (e.state) {
                CmnMis.CurUserForm.GetRecList();
            }
            else { alert(e.msg); }
        });
       
    });

    //填充控件类型
    CmnAjax.PostData(InterfaceUrl + "?method=GetRecList", { "CurUserFormID": UserFormColManage.ControlTypeUserFormID }, function (data) {
        Cmn.FillData(".jscControlType", data.data);
    });

    //填充正则表达式
    CmnAjax.PostData(InterfaceUrl + "?method=GetRecList", { "CurUserFormID": UserFormColManage.RegularUserFormID }, function (data) {
        Cmn.FillData(".jscRegular", data.data);
    });
});
 
var CreateCtlCfgPanel = {
    Type: {
        TextArea: "textarea",
        HasMap: "hasMap",
        Text: "text",
        Select: "select"
    },
    Init: function (PanelCfgJson,DataJson) {
        /// <summary>初始化</summary>

        var _html = "";
        if (!PanelCfgJson) { return ""; }
        if (typeof PanelCfgJson == "string") { PanelCfgJson = $.parseJSON(PanelCfgJson); }

        $.each(PanelCfgJson, function (index, item) {
            _html += CreateCtlCfgPanel.GetControlHtml(index, item);
        });


        $(".jscControlCfgContent").html(_html);

        $(".jscAddOptionListItem").off("click").on("click", function () {
            $(this).parent("div").find(".jscOptionListItem").append('<div class="jscOptionListItemInput">key:<input type="text" class="key"style="width:60px;border: 1px solid #ccc;" />   value:<input type="text" style="width:100px;border: 1px solid #ccc;"  class="value" /> <button style="border: 1px solid #ccc;display:inline;zoom:1;" class="jscDelOptionListItem">删除</button> </div>');
        });
        $(".jscDelOptionListItemAll").off("click").on("click", function () {
            $(this).parent("div").find(".jscOptionListItem").html("");
        });
        

        $(".jscOptionListItem").undelegate(".jscDelOptionListItem", "click").delegate(".jscDelOptionListItem", "click", function () {
            $(this).parent("div").remove();
        });

        

        CreateCtlCfgPanel.SetControlValue(DataJson);
    },
    GetControlHtml: function (key, cfg) {
        /// <summary>生成控件配置界面每个小表单HTML</summary>
    var _html = '';

    if (cfg.type == CreateCtlCfgPanel.Type.TextArea) {
        var _value = "";
        if (!!cfg.val) { if (typeof cfg.val == "string") { _value = cfg.val; } }

        _html = '<div><textarea style="width:300px;height:100px; font-size:12px;border: 1px solid #ccc;" value="' + _value + '">' + _value + '</textarea></div>';
    }
    else if (cfg.type == CreateCtlCfgPanel.Type.HasMap) {
        _html = '<div class="jscOptionListItem" ></div><button class="jscAddOptionListItem"  style="border: 1px solid #ccc;">添加</button><button class="jscDelOptionListItemAll"  style="border: 1px solid #ccc;">删除所有</button></br>';
    }

    else if (cfg.type == CreateCtlCfgPanel.Type.Text) {
        var _value = "";
        if (!!cfg.val) {
            if (typeof cfg.val == "string") { _value = cfg.val; }
        }

        var _tip = "";
        if (!!cfg.sqlDefault) {
            if (typeof cfg.sqlDefault == "string") { _tip = "数据库默认值为：" + cfg.sqlDefault; }
        }
        _html = '<div><input style="width:300px;border: 1px solid #ccc;" type="text" value="' + _value + '" /> ' + _tip + '</div>';
    }
    else if (cfg.type == CreateCtlCfgPanel.Type.Select) {
        _html = '<div> <select style="width:300px;border: 1px solid #ccc;" >';
        if (!!cfg.val) {
            if (typeof cfg.val == "object") {
                $.each(cfg.val, function (index, item) {
                    _html += "<option value='" + item.val + "'>" + item.key + "</option>";
                });
            }
        }

        _html += ' </select></div>';
    }

    return "<div style='margin-top: 10px;' class='ControlCfgCol' key= '" + key + "' type='" + cfg.type + "'><b>" + cfg.desc + "</b>:" + _html + "</div>";
},
    GetJsonStr: function () {
        /// <summary>获取控件配置的json字符串</summary>
        var _json = "{";
        $(".ControlCfgCol").each(function (index, item) {
            var _delimiter = ",";
            if (index == $(".ControlCfgCol").size() - 1) { _delimiter = ""; }
            _json += '"' + $(item).attr("key") + '"' + ":" + CreateCtlCfgPanel.GetControlValue($(item)) + _delimiter;
        });

        _json += "}";
        return _json;
    },
    GetControlValue: function ($control) {
        /// <summary>获取控件的值</summary>
        var _val = '';
        var _type = $control.attr("type");
        if (_type == CreateCtlCfgPanel.Type.TextArea) {
            var _textarea = $control.find("textarea").val();
            if (!_textarea) {
                _textarea = $control.find("textarea").html();
            }

            _val = '"' + _textarea + '"';
        }
        else if (_type == CreateCtlCfgPanel.Type.HasMap) {
            _val = "["
            $control.find(".jscOptionListItemInput").each(function (index, item) {
                var _delimiter = ",";
                if (index == $control.find(".jscOptionListItemInput").size() - 1) { _delimiter = ""; }
                _val += "{" + '"' + "key" + '":"' + $(item).find(".key").val() + '"' + "," + '"' + "value" + '":"' + $(item).find(".value").val() + "\"}" + _delimiter;
            })
            _val += "]";
        }
        else if (_type == CreateCtlCfgPanel.Type.Text) {
            _val = '"' + $control.find("input").val() + '"';
        }
        else if (_type == CreateCtlCfgPanel.Type.Select) {
            _val = '"' + $control.find("select").val() + '"';
        }
        return _val;

    },
    SetControlValue: function (cfg) {
        if (!cfg) { return ""; }
        if (typeof cfg == "string") { cfg = JSON.parse(cfg); }
        $(".ControlCfgCol").each(function (index, item) {
            if ($(item).attr("type") == CreateCtlCfgPanel.Type.Text) {
                $(item).find("input").val(cfg[$(item).attr("key")]);
            }
            else if ($(item).attr("type") == CreateCtlCfgPanel.Type.TextArea) {
                $(item).find("textarea").val(cfg[$(item).attr("key")]).html(cfg[$(item).attr("key")]);
            }
            else if ($(item).attr("type") == CreateCtlCfgPanel.Type.Select) {
                $(item).find("select").val(cfg[$(item).attr("key")]);
            }
            else if ($(item).attr("type") == CreateCtlCfgPanel.Type.HasMap) {
                if (typeof cfg[$(item).attr("key")] == "object") {
                    $.each(cfg[$(item).attr("key")], function (index, val) {
                        $(item).parent("div").find(".jscOptionListItem").append('<div class="jscOptionListItemInput">key:<input type="text" value="' + val.key + '" class="key"style="width:60px;border: 1px solid #ccc;" />   value:<input value="' + val.value + '"  type="text" style="width:100px;border: 1px solid #ccc;"  class="value" /> <button style="border: 1px solid #ccc;display:inline;zoom:1;" class="jscDelOptionListItem">删除</button> </div>');
                    });
                }
            }
        })
    }
}
 