/// <reference path="../../../Js/ThirdLib/jquery.js" />
/// <reference path="../../../Js/Cmn.js" />
/// <reference path="../../Js/CmnMis/CmnMis.js" />
/// <reference path="../../Js/CmnMis/CmnMisUserForm.js" />


var RightManage = {
    CatchData: null,
    RecID:null,
    FiledName:null,
    UseRightItf:null,
    NotUseRightItf: null,
    Model: null,
    //没有的权限
    SelectNotUseRight: function (curFormDom,param) {
        CmnMis.Itf.GetData(RightManage.NotUseRightItf, param, false, function (data) {

            var _userFormModel = [],
                _userFormModelData = {},
                _curId = "";

            for (var _i = data.data.length - 1; _i >= 0; _i--) {
                if (data.data[_i].userformmoduleid != _curId) {
                    _curId = data.data[_i].userformmoduleid;
                    _userFormModel.push(data.data[_i]);
                }
                if (!_userFormModelData[_curId]) { _userFormModelData[_curId] = []; };
                _userFormModelData[_curId].push(data.data[_i]);
            }

            Cmn.FillData(".jscFormModel", _userFormModel);
            curFormDom.find(".jscFormModel").fadeIn();
            curFormDom.find(".jscFormModel").each(function (index, item) {
                _curId = $(item).attr("recid");
                Cmn.FillData(".jscUserFormDesc" + _curId, _userFormModelData[_curId]);
            });

        });
    },
    AddRight: function (userformid,callback) {
        _param = {
            CurUserFormID: CmnMis.TableOpt.GetUserForm(RightManage.Model).UserFormID,
            userformid: userformid,
            usergroupid: RightManage.RecID,
            isshow: '1',
            allowadd: '1',
            allowdell: '1',
            allowmodify: '1',
            allowtoexcel: '1'
        };

        CmnAjax.PostData(InterfaceUrl + "?method=AddRec", _param,callback);
    },
    UpdateRight: function (recid,filed,val, callback) {
        _param = { RecID: recid, CurUserFormID: CmnMis.TableOpt.GetUserForm(RightManage.Model).UserFormID };
        _param[filed] = val;
        CmnAjax.PostData(InterfaceUrl + "?method=UpdateRec", _param, callback);
    },
    DeleteRight: function (recid, callback) {
        _param = { RecID: recid, CurUserFormID: CmnMis.TableOpt.GetUserForm(RightManage.Model).UserFormID, };
        CmnAjax.PostData(InterfaceUrl + "?method=DeleteRec", _param, callback);
    }

} 

CmnMis.CurUserForm.BeforeFillRecList.Add(function (data) { RightManage.CatchData = data[0]; });




CmnMis.CurUserForm.AfterRecListLoad.Add(function () {
    var _curFormDom = $(CmnMis.CurUserForm.GetUserFormSelector()),
         //查询的参数
        _param = {};

        //记录代码
    RightManage.RecID = RightManage.CatchData.RecID;
        //查询的字段名称
    RightManage.FiledName = RightManage.CatchData.FiledName;
        //获取已使用权限的接口名称
    RightManage.UseRightItf = RightManage.CatchData.UseRightItf;
         //获取没使用权限的接口名称
    RightManage.NotUseRightItf = RightManage.CatchData.NotUseRightItf;
        //模块
    RightManage.Model = RightManage.CatchData.Model == "UserGroup" ? "cmn_usr_usergroupright" : "cmn_usr_userright";
    //查询的参数
    _param[RightManage.FiledName] = RightManage.RecID;

    _curFormDom.find(".jscTargetDesc").html(RightManage.CatchData.ViewDesc);

    //已有的权限
    CmnMis.Itf.GetData(RightManage.UseRightItf, _param, false, function (data) {
        var _userFormModel = [],
           _userFormModelData = {},
           _curId = "";

        for (var _i = data.data.length - 1; _i >= 0; _i--) {

            if (data.data[_i].userformmoduleid != _curId) {
                _curId = data.data[_i].userformmoduleid;
                _userFormModel.push(data.data[_i]);
                
            }
            if (!_userFormModelData[_curId]) { _userFormModelData[_curId] = []; };
            _userFormModelData[_curId].push(data.data[_i]);
        }
      
        Cmn.FillData(".jscCurUserRightModel", _userFormModel);
        _curFormDom.find(".jscCurUserRightModel").fadeIn();
        _curFormDom.find(".jscCurUserRightModel").each(function (index, item) {
            _curId = $(item).attr("recid");
            Cmn.FillData(".jscCurUserRightForm" + _curId, _userFormModelData[_curId]);
        });

    });

    //没有的权限
    RightManage.SelectNotUseRight(_curFormDom,_param);
    //CmnMis.Itf.GetData(RightManage.NotUseRightItf, _param, false, function (data) {

    //    var _userFormModel = [],
    //        _userFormModelData = {},
    //        _curId = "";
       
    //    for (var _i = data.data.length - 1; _i >= 0; _i--) {
    //        if (data.data[_i].userformmoduleid != _curId) {
    //            _curId = data.data[_i].userformmoduleid;
    //            _userFormModel.push(data.data[_i]);
    //        }
    //        if (!_userFormModelData[_curId]) { _userFormModelData[_curId] = []; };
    //        _userFormModelData[_curId].push(data.data[_i]);
    //    }

    //    Cmn.FillData(".jscFormModel", _userFormModel);
    //    _curFormDom.find(".jscFormModel").fadeIn();
    //    _curFormDom.find(".jscFormModel").each(function (index, item) {
    //        _curId = $(item).attr("recid");
    //        Cmn.FillData(".jscUserFormDesc" + _curId, _userFormModelData[_curId]);
    //    });

    //});


    //用户已有权限的列表
    _curFormDom.find(".jscCurUserFormContainer").delegate(".jscCurUserFormModeDesc", "click", function () {
        var _isopen = false;
        if (!$(this).parents(".jscCurUserRightModel").hasClass("curOpen")) { _isopen = true; };
        _curFormDom.find(".jscCurUserRightModel.curOpen").removeClass("curOpen").find(".jscCurUserRightForm").stop(true, true).slideUp(150);
        _curFormDom.find(".jscCurUserFormModeSwitch").html("+");
        if (_isopen) {
            $(this).parents(".jscCurUserRightModel").addClass("curOpen").find(".jscCurUserRightForm").stop(true, true).slideDown(150);
            $(this).parents(".jscCurUserRightModel").find(".jscCurUserFormModeSwitch").html("-");
            
        };
    });

    //用户没有权限的列表
    _curFormDom.find(".jscFormContainer").undelegate(".jscOpenFormModel", "click").delegate(".jscOpenFormModel", "click", function () {
        var _isopen = false;
        if (!$(this).parents(".jscFormModel").hasClass("curOpen")) { _isopen = true; };
        _curFormDom.find(".jscFormModel.curOpen").removeClass("curOpen").find(".jscFormContent").stop(true,true).slideUp(150);
        _curFormDom.find(".jscOpenFormModel b").html("+");
        if (_isopen) {
            $(this).parents(".jscFormModel").addClass("curOpen").find(".jscFormContent").stop(true, true).slideDown(150);
            $(this).parents(".jscFormModel").find(".jscOpenFormModel b").html("-");
        };
    });

    //添加权限
    _curFormDom.find(".jscFormContainer").undelegate(".jscAddUserRight", "click").delegate(".jscAddUserRight", "click", function (e) {

        var _targetDom = $(e.target).parents(".dat-userformid-recid").eq(0),
            _userformid = _targetDom.attr("recid"),
            _userformDesc = _targetDom.find(".dat-formdesc").text();
       
        RightManage.AddRight(_userformid, function (d) {
            if (d.IsSuccess == '1') {

                var _modelid = _targetDom.parents(".jscFormModel").attr("recid");

                _targetDom.stop(true, true).slideUp(100, function () { $(this).remove();});

                var _model = _curFormDom.find(".jscCurUserRightModel[recid=" + _modelid + "]");

                //存在这个模块
                if (_model.length > 0) {

                    if (!_model.hasClass("curOpen")) { _model.find(".jscCurUserFormModeDesc").click(); }

                    var _clone = _model.find(".jscCurUserRightForm").last().eq(0).clone(true, true);
                    _clone.find(".dat-formdesc").attr("title", _userformDesc);
                    _clone.find(".dat-formdesc").text(_userformDesc);
                    _clone.find(".jscAddFormRight").attr("class", "jscAddFormRight select1");
                    _clone.show().insertAfter(_model.find(".jscCurUserRightForm").last());

                    if (_targetDom.parents(".jscFormModel").find(".dat-userformid-recid").length < 2) {
                        _targetDom.parents(".jscFormModel").remove();
                    }
                    else { _targetDom.parents(".dat-userformid-recid").remove(); }
                }
                  //不存在
                else {
                    _model = _curFormDom.find(".jscCurUserRightModel").eq(0).clone(true, true);

                    if (!_model.hasClass("curOpen")) { _model.find(".jscCurUserFormModeDesc").click(); }

                    var _clone = _model.find(".jscCurUserRightForm").last().eq(0).clone(true, true);
                    _clone.find(".dat-formdesc").attr("title", _userformDesc);
                    _clone.find(".dat-formdesc").text(_userformDesc);
                    _clone.find(".jscAddFormRight").attr("class", "jscAddFormRight select1");

                    _clone.show().insertAfter(_model.find(".jscCurUserRightForm").last());

                    _model.attr("recid", _targetDom.parents(".jscFormModel").attr("recid"));
                    _model.find(".jscCurUserFormModeDesc").text(_targetDom.parents(".jscFormModel").find(".dat-userformmoduledesc").text());
                    
                    _model.show().insertAfter(_curFormDom.find(".jscCurUserRightModel").last());

                    if (_targetDom.parents(".jscFormModel").find(".dat-userformid-recid").length < 2) {
                        _targetDom.parents(".jscFormModel").remove();
                    }
                    else { _targetDom.parents(".dat-userformid-recid").remove(); }
                }


            } else {
                Cmn.alert("添加失败")
            }
        });

    });

    //模块下面所有表单
    _curFormDom.find(".jscFormContainer").undelegate(".jscAddModelToUserRight", "click").delegate(".jscAddModelToUserRight", "click", function (e) {
        e.stopPropagation();
        $(this).parents(".jscFormModel").find(".jscAddUserRight").click();
        
    });

    //修改权限
    _curFormDom.find(".jscCurUserFormContainer").undelegate(".jscAddFormRight", "click").delegate(".jscAddFormRight", "click", function (e) {
        e.stopPropagation();
        
        var _self = $(this),
            _recid = _self.parents(".jscCurUserRightForm").attr("rid");

        //是否显示 相当于删除该权限
        if (_self.hasClass("jscIsShow")) {
            RightManage.DeleteRight(_recid, function (d) {
                if (d.IsSuccess == "1") {
                    if (_self.parents(".jscCurUserRightModel").find(".jscCurUserRightForm").length < 2) {
                        _self.parents(".jscCurUserRightModel").remove();
                    }
                    else { _self.parents(".jscCurUserRightForm").remove(); }
                    RightManage.SelectNotUseRight(_curFormDom, _param);
                }
            });
        }
        else {
            var _filed = _self.attr("colname"),
                _val = "0";

            if (_self.hasClass("select0")) { _val = "1"; _self.removeClass("select0").addClass("select1"); }
            else { _self.removeClass("select1").addClass("select0");}
            RightManage.UpdateRight(_recid, _filed, _val);
        }


    });
    
    


});
 







