/// <reference path="../../../Js/CmnMis/CmnMis.js" />
/// <reference path="../../../Js/md5.js" />
/// <reference path="../../../Js/CmnMis/CmnMisUserForm.js" />

CmnMis.CurUserForm.BeforeFillRecList.Add(function (data) {
    for (var _i = 0; _i < data.length; _i++) {
        data[_i]["username"] = data[_i]["username"] + "</br>" +
            "<b style='cursor: pointer; color: #00f;margin-left:2px;' class='jscRightCfgBtn'>[配置权限]</b>";
    }

});

CmnMis.CurUserForm.AfterRecListLoad.Add(function () {
    var _curFormDom = $(CmnMis.CurUserForm.GetUserFormSelector());

    _curFormDom.find(".jscRightCfgBtn").off("click").on("click", function () {

        var _recid = CmnMis.CurUserForm.GetCurRecKeyVal(this);

        CmnMis.Frame.ShowUserForm(CmnMis.TableOpt.GetUserForm("cmn_usr_userright").UserFormID,
					{ ViewState: "List", Condition: "[userid=" + _recid + "]", data: { "userid": _recid } });
    })

});


CmnMis.CurUserForm.BeforeSave.Add(function () {
    var _pwControl = CmnMis.CurUserForm.GetControlByName("password");
    var _passWord = _pwControl.GetValue();

    if (_passWord.length < 16) { _pwControl.SetValue($.md5(_passWord)); }
});