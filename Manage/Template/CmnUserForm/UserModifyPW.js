/// <reference path="../../../Js/CmnMis/CmnMis.js" />
/// <reference path="../../../Js/md5.js" />
/// <reference path="../../../Js/CmnMis/CmnMisUserForm.js" />

//console.log("员工管理js模板加载成功");

CmnMis.CurUserForm.OnInitComplete.Add(function () {

    $(CmnMis.CurUserForm.GetSelector(".btnOK")).unbind("click").bind("click", function () {
        if (Cmn.Func.Trim($("#txtOldPW").val()) == "") { alert("原密码不能为空！"); return; }
        if (Cmn.Func.Trim($("#txtNewPW").val()) == "") { alert("新密码不能为空！"); return; }
        if (Cmn.Func.Trim($("#txtConfirmPW").val()) == "") { alert("确认密码不能为空！"); return; }
        if (Cmn.Func.Trim($("#txtNewPW").val()).length < 6) { alert("新密码长度不能小于6！"); return; }

        if (Cmn.Func.Trim($("#txtNewPW").val()) != Cmn.Func.Trim($("#txtConfirmPW").val())) {
            alert("新密码和确认密码必须一致！");
            return;
        }

        var _curUserID = CmnMis.Func.GetLoginUserID();

        CmnMis.TableOpt.GetRec(CmnMis.CurUserForm, "[password]='" + $.md5($("#txtOldPW").val()) + "' and [userid]='" + _curUserID + "'",
            "", function (data) {
                if (data.data.length > 0) {
                    CmnAjax.PostData(CmnMis.CurUserForm.GetItfUrl((CmnMis.CurUserForm.Cfg.MethodName.UpdateRec)),
                        { RecID: _curUserID, password: $.md5($("#txtNewPW").val()) }, function (data) {
                            if (data.IsSuccess == "1") {
                                alert("密码修改成功！");
                                $("#txtOldPW").val("");
                                $("#txtNewPW").val("");
                                $("#txtConfirmPW").val("");
                            }
                            else { alert("密码修改失败！请重新尝试。"); }
                        });
                }
                else { alert("原密码错误！"); }
            });
    });

    $(CmnMis.CurUserForm.GetSelector(".btnReset")).unbind("click").bind("click", function () {
        $("#txtOldPW").val("");
        $("#txtNewPW").val("");
        $("#txtConfirmPW").val("");
    });
});