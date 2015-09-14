/// <reference path="../../../Js/CmnMis/CmnMis.js" />
/// <reference path="../../../Js/md5.js" />
/// <reference path="../../../Js/CmnMis/CmnMisUserForm.js" />

CmnMis.CurUserForm.BeforeFillRecList.Add(function (data) {
    for (var _i = 0; _i < data.length; _i++) {
        if ("用户字段配置" != data[_i]["formdesc"]) {
            data[_i]["formdesc"] = data[_i]["formdesc"] +
                "<div class='jscToUserFormCfgBtn' style='margin-top:3px;padding:3px;cursor:pointer;color:blue;'>→字段配置</div>"+
                "<div class='btnSqlTest' style='padding:3px;cursor:pointer;color:red;'><a href='" +
                "Tools/UserFormSqlTest.htm?SysName=" + Cmn.Func.GetParamFromUrl("SysName") +
                "&userformid=" + data[_i]["userformid"] + "' target='_blank'>→SelectSql调试</a></div>";
        }

        //一键隐藏和一键显示功能
        data[_i]["isshowinmenudisp"] = data[_i]["isshowinmenudisp"]+
            "<div class='btnIsShowInMenu' style='margin-top:3px;padding:3px;cursor:pointer;color:blue;'>→"+(
            data[_i]["isshowinmenudisp"]=="是"?"隐藏":"显示") + "</div>";
    }

});

CmnMis.CurUserForm.AfterRecListLoad.Add(function () {
    $(".jscToUserFormCfgBtn").off("click").on("click", function () {
        var _recid = $(this).parents(".cmn-Rec").find("input").val();

        CmnMis.Func.ShowSetUserFormCol(_recid, CmnMis.CurUserForm.UserFormID);
    });

    $(CmnMis.CurUserForm.GetSelector(CmnMis.CurUserForm.Selector.RecContainer)).undelegate();
    $(CmnMis.CurUserForm.GetSelector(CmnMis.CurUserForm.Selector.RecContainer)).delegate(".btnIsShowInMenu", "click", function () {
        var _clickDom = this;

        if ($(_clickDom).html() == "→隐藏") {
            CmnMis.TableOpt.UpdateRec(CmnMis.CurUserForm, CmnMis.CurUserForm.GetCurRecKeyVal(this), 
                {"isshowinmenu":"0"}, function () {
                    $(_clickDom).parent().html(
                        "否<div class='btnIsShowInMenu' style='margin-top:3px;padding:3px;cursor:pointer;color:blue;'>→显示</div>");
                }, function () {
                    alert("隐藏失败！请重新尝试。");
                });
        }
        else { //显示
            CmnMis.TableOpt.UpdateRec(CmnMis.CurUserForm, CmnMis.CurUserForm.GetCurRecKeyVal(this),
                { "isshowinmenu": "1" }, function () {
                    $(_clickDom).parent().html(
                        "是<div class='btnIsShowInMenu' style='margin-top:3px;padding:3px;cursor:pointer;color:blue;'>→隐藏</div>");
                }, function () {
                    alert("显示失败！请重新尝试。");
                });
        }
    });
});