/// <reference path="../../../Js/CmnMis/CmnMis.js" />
/// <reference path="../../../Js/md5.js" />
/// <reference path="../../../Js/CmnMis/CmnMisUserForm.js" />

//console.log("员工管理js模板加载成功");

//CmnMis.CurUserForm.EventAfterRecListLoad = function () {
       
    
//    $(CmnMis.CurUserForm.GetSelector(".dat-itfdesc")).unbind("click").bind("click", function () {
//        CmnMis.Frame.ShowUserForm("1", { ReturnUserFormID: CmnMis.CurUserForm.UserFormID,IsReloadWhenReturn:false });
//    //    alert("dkk");
//    });
//}

CmnMis.CurUserForm.BeforeFillRecList.Add(function (data) {
    for (var _i = 0; _i < data.length; _i++) {
        data[_i]["itfname"] = "<b>"+data[_i]["itfname"] + "</b><br/>" +
            "<a style='margin-top:6px;display: block;' href='Tools/InterfaceTest.htm?interfaceid=" + data[_i]["interfaceid"] + "&SysName=" +
            Cmn.Func.GetParamFromUrl("SysName") + "' target='_blank' >->接口调试</a>" +
            "<a style='margin-top:4px;display: block;cursor: pointer;' class='btnViewExecLog'>->查看接口日志</a>";

        data[_i]["exec_success_count"] = "<b>" + data[_i]["exec_success_count"] + "</b>";

        if (data[_i]["exec_error_count"] != "0") {
            data[_i]["exec_error_count"] = "<span style='color:red;'><b>"+data[_i]["exec_error_count"]+"</b></span>";
        }
        else { data[_i]["exec_error_count"] = "<b>" + data[_i]["exec_error_count"] + "</b>"; }
    }
});

CmnMis.CurUserForm.AfterRecListLoad.Add(function () {
    $(".btnViewExecLog").unbind("click").bind("click", function () {
        CmnMis.Frame.ShowUserForm(CmnMis.Func.GetUserFormIDByDesc("接口执行日志管理"), 
            {
                VewState: CmnMis.CurUserForm.Cfg.ViewState.RecList, Condition: "[interfaceid]=" +
                  CmnMis.CurUserForm.GetCurRecKeyVal(this)
            });
    });
});


var ShowByItfType = function () {
    /// <summary>根据接口类型显示对应的输入控件</summary>

    var _itfType = $(CmnMis.CurUserForm.GetSelector("input[name=rad-interfacetype]:checked")).val();

    if (_itfType == 1) {
        $(CmnMis.CurUserForm.GetSelector("[name=sql]")).parent(".cmn-Ctl-Container").show();
        $(CmnMis.CurUserForm.GetSelector("[name=itfurl]")).parent(".cmn-Ctl-Container").hide();
    }
    else {
        $(CmnMis.CurUserForm.GetSelector("[name=sql]")).parent(".cmn-Ctl-Container").hide();
        $(CmnMis.CurUserForm.GetSelector("[name=itfurl]")).parent(".cmn-Ctl-Container").show();
    }
}

CmnMis.CurUserForm.OnUpdateInitComplete.Add(function () {
    ShowByItfType();

    //选择不同类型，显示不同输入框
    $(CmnMis.CurUserForm.GetSelector("input[name=rad-interfacetype]")).unbind("change").change(function () {
        ShowByItfType();
    });
});

CmnMis.CurUserForm.OnAddInitComplete.Add(function () {
    ShowByItfType();

    //选择不同类型，显示不同输入框
    $(CmnMis.CurUserForm.GetSelector("input[name=rad-interfacetype]")).unbind("change").change(function () {
        ShowByItfType();
    });
});
