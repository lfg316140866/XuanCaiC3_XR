/// <reference path="../../../Js/CmnMis/CmnMis.js" />
/// <reference path="../../../Js/md5.js" />
/// <reference path="../../../Js/CmnMis/CmnMisUserForm.js" />

CmnMis.CurUserForm.BeforeFillRecList.Add(function (data) {
    for (var _i = 0; _i < data.length; _i++) {
        data[_i]["usergroupdesc"] = data[_i]["usergroupdesc"] + "</br>" +
            "<b style='cursor: pointer; color: #00f;margin-left:10px;' class='jscRightCfgBtn'>[配置权限]</b>";
    }
});

CmnMis.CurUserForm.AfterRecListLoad.Add(function () {
    var _curFormDom = $(CmnMis.CurUserForm.GetUserFormSelector());

    _curFormDom.find(".jscRightCfgBtn").off("click").on("click", function () {

        var _recid = CmnMis.CurUserForm.GetCurRecKeyVal(this);

        CmnMis.Frame.ShowUserForm(CmnMis.TableOpt.GetUserForm("cmn_usr_usergroupright").UserFormID,
					{ ViewState: "List", Condition: "[ug.usergroupid=" + _recid + "]", data: { "usergroupid": _recid } }); 
    });
     
});


