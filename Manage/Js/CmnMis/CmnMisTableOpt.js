/// <reference path="CmnMis.js" />
/// <reference path="CmnMisFunc.js" />
/// <reference path="CmnMisUserForm.js" />



//检查CmnMis有没有定义，如果没有定义就定义下
if (typeof (CmnMis) == "undefined") { CmnMis = {}; }

CmnMis.TableCache = function () {
    /// <summary>表缓存，存放表数据</summary>
    /// <field name="ForeignKeyFieldName" type="String">外键字段名</field>
    /// <field name="UserFormInfo" type="CmnMis.UserForm">用户表单信息</field>

    var _Self = this;
    var _TableData = new Array();
    var _ChangeRecList = new Array(); //存放增删改的记录

    this.ForeignKeyFieldName = "";
    this.UserFormInfo = null;
    this.MaxNewRecID = 1; //最大的记录代码（临时）

    //--------------------------------------
    this.Init = function (userFormInfo, foreignKeyField, foreignKeyValue, onSuccess) {
        /// <summary>初始化表</summary>
        /// <param name="userFormInfo" type="CmnMis.UserForm">用户表单信息</param>
        /// <param name="foreignKeyField" type="String">外键字段名</param>
        /// <param name="foreignKeyValue" type="String">外键值</param>

        _Self.UserFormInfo = userFormInfo;
        _Self.ForeignKeyFieldName = foreignKeyField;
        _Self.MaxNewRecID = 1;
        _TableData.length = 0;
        _ChangeRecList.length = 0;

        CmnAjax.PostData(CmnMis.Func.GetItfUrl(_Self.UserFormInfo,userFormInfo.Cfg.MethodName.GetRecList),
            { "Condition": "[" + foreignKeyField + "]='" + foreignKeyValue + "'" }, function (data) {
                _TableData = data.data;

                if (onSuccess) { onSuccess(); }
            });
    };
    //--------------------------------------
    var AddColForNewRec = function (newRec) {
        /// <summary>为新记录加上其他相关的字段，否则显示占位符，比较难看</summary>
        /// <returns type="json" />

        for (var _i = 0; _i < _Self.UserFormInfo.ColInfoRecList.length; _i++) {
            var _isExists = false;

            for (var _key in newRec) {
                if (_Self.UserFormInfo.ColInfoRecList[_i].ColName == _key) {
                    _isExists = true; break;
                }
            }

            if (!_isExists) { newRec[_Self.UserFormInfo.ColInfoRecList[_i].ColName] = ""; }
        }

        return newRec;
    };
    //--------------------------------------
    this.Add = function () {
        /// <summary>增加记录</summary>

        var _recNew = CmnMis.UI.Control.GetValueList(_Self.UserFormInfo.GetSelector(_Self.UserFormInfo.Selector.EditControlPanel));

        _recNew = AddColForNewRec(_recNew);

        _recNew[_Self.UserFormInfo.KeyColName] = "ID_" + _Self.MaxNewRecID++;

        _TableData[_TableData.length] = _recNew;
        _ChangeRecList[_ChangeRecList.length] = _recNew;
        _ChangeRecList[_ChangeRecList.length - 1].CmnOpt = "Add";
    };
    //--------------------------------------
    this.Update = function (recID) {
        /// <summary>更新某个记录</summary>

        var _recNew = CmnMis.UI.Control.GetValueList(_Self.UserFormInfo.GetSelector(_Self.UserFormInfo.Selector.EditControlPanel));

        _recNew = AddColForNewRec(_recNew);

        for (var _i = 0; _i < _TableData.length; _i++) {
            if (_TableData[_i][_Self.UserFormInfo.KeyColName] == recID) {
                _TableData[_i] = _recNew;

                //更新“更改记录列表”
                _recNew.CmnOpt = "Update";

                var _isExists = false;

                for (var _k = 0; _k < _ChangeRecList.length; _k++) {
                    if (_ChangeRecList[_k][_Self.UserFormInfo.KeyColName] == recID) {
                        //如果原先是新增的记录的话,还是保持新增
                        if (_ChangeRecList[_k].CmnOpt == "Add") { _recNew.CmnOpt = "Add"; }

                        _ChangeRecList[_k] = _recNew;
                        _isExists = true;

                        break;
                    }
                }

                if (!_isExists) { _ChangeRecList[_ChangeRecList.length] = _recNew; }

                break;
            }
        }
    };
    //--------------------------------------
    this.Delete = function (recID) {
        /// <summary>删除某个记录</summary>

        for (var _i = 0; _i < _TableData.length; _i++) {
            if (_TableData[_i][_Self.UserFormInfo.KeyColName] == recID) {
                //删除本来存在的
                for (var _k = 0; _k < _ChangeRecList.length; _k++) {
                    if (_ChangeRecList[_k][_Self.UserFormInfo.KeyColName] == recID) {
                        _ChangeRecList.splice(_k--, 1);
                    }
                }

                if (recID.indexOf("ID_") < 0) { //如果不是新加的记录，就添加删除记录
                    _ChangeRecList[_ChangeRecList.length] = _TableData[_i];
                    _ChangeRecList[_ChangeRecList.length - 1].CmnOpt = "Delete";
                }

                _TableData.splice(_i, 1);

                break;
            }
        }
    };
    //--------------------------------------
    this.GetData = function (param) {
        /// <summary>获取数据</summary>
        /// <param name="param" type="json">参数，例如:{RecID:23}</param>

        if (param == undefined || param == null || param == "") { return _TableData; }

        var _recID = param["RecID"];
        var _retData = new Array();

        if (_recID != undefined && _recID != "") {
            for (var _i = 0; _i < _TableData.length; _i++) {
                if (_TableData[_i][_Self.UserFormInfo.KeyColName] == _recID) {
                    _retData[_retData.length] = _TableData[_i];
                    break;
                }
            }
        }

        return _retData;
    };
    //--------------------------------------
    this.DataPaging = function (dataContainerSelector, param, pageContainerSelector, pageSize, successFunc,
        curPageNo, beforFillDataEvent) {
        /// <summary>填充数据带翻页控件</summary>
        /// <param name="dataContainerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID(如果是多条记录的话不能用id否则在二次填充的时候会多出记录)等)</param>
        /// <param name="param" type="String">调用webmethod的参数，例如：{id:'1',name:'name'}(可为空或不传)  </param>
        /// <param name="pageContainerSelector" type="String">翻页控件容器选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="pageSize" type="int">每页显示的记录条数</param>
        /// <param name="successFunc" type="function">成功时调用的函数，参数为jason格式的数据例如：{"data":[{"id":"1","name":"chi"},{"id":"2","name":"chi2"}]} (可以不传)</param>
        /// <param name="curPageNo" type="int">当前页为第几页</param>
        /// <param name="beforFillDataEvent" type="function">填充数据之前触发的事件，接收参数data,可以改写填充数据</param>

        this.EventBeforePaging = null; //在翻页之前触发事件

        //填充空数据，目的把数据区块隐藏，用户就看不到占位符了
        Cmn.FillData(dataContainerSelector, []);

        if (!curPageNo) { curPageNo = 1; }

        var _Self = this;

        function PagingFunction(pageNo) {
            //触发翻页前事件
            if (_Self.EventBeforePaging != null) { _Self.EventBeforePaging(); }

            var _data = new Array();

            for (var _i = (pageNo - 1) * pageSize; _i < _TableData.length; _i++) {
                _data[_data.length] = _TableData[_i];
                if (_data.length >= pageSize) { break; }
            }

            if (beforFillDataEvent) { beforFillDataEvent(_data); }
            Cmn.FillData(dataContainerSelector, _data);

            if (successFunc) { successFunc({ IsSuccess: 1, RecCount: _TableData.length, data: _data }); }

            return true;
        }

        this.Paging = new Cmn.Paging(pageContainerSelector, 0, pageSize, PagingFunction);


        //刷新数据和翻页控件
        this.Refresh = function (paging) {
            /// <summary>刷新数据和翻页控件</summary>

            var _data = new Array();

            for (var _i = (curPageNo - 1) * pageSize; _i < _TableData.length; _i++) {
                _data[_data.length] = _TableData[_i];
                if (_data.length >= pageSize) { break; }
            }

            _Self.Paging.RecCount = _TableData.length;
            _Self.Paging.ToPage(curPageNo, false);

            if (beforFillDataEvent) { beforFillDataEvent(_data); }
            Cmn.FillData(dataContainerSelector, _data);
            if (successFunc) { successFunc({ IsSuccess: 1, RecCount: _TableData.length, data: _data }); }

            return true;
        }

        //这个需要延时下，否则会有问题，例如beforFillDataEvent 事件中用到了Paging对象，会报错
        setTimeout(function () { _Self.Refresh(_Self.Paging); }, 30);
    };
    //--------------------------------------
    this.GetChangeRecList = function () {
        /// <summary>获取变更数据列表</summary>

        //删除重复操作记录，保留最后一次的操作记录
        //for (var _i = _ChangeRecList.length-1; _i >=0; _i--) {
        //    for (var _k = 0; _k < _i; _k++) {
        //        if (_ChangeRecList[_i][_Self.UserFormInfo.KeyColName] == _ChangeRecList[_k][_Self.UserFormInfo.KeyColName]) {
        //            _ChangeRecList.splice(_k, 1);
        //            _k--; _i--;
        //        }
        //    }
        //}

        return _ChangeRecList;
    };
    //--------------------------------------
};


(function (window, undefined) {
    var $ = window.$;

    CmnMis.TableOpt = {
        GetUserForm: function (tableNameOrUserFormInfo) {
            /// <summary>获取userfrominfo的信息</summary>
            /// <param name="tableNameOrUserFormInfo" type="CmnMis.UserForm">表名或用户表单信息对象</param>
            /// <returns type="CmnMis.UserForm" />

            //不是string说明是UserFormInfo直接返回
            if (Cmn.Func.IsString(tableNameOrUserFormInfo) == false) { return tableNameOrUserFormInfo; } 
           
            var _userforminfo =  $(document).data(tableNameOrUserFormInfo);

            if(typeof _userforminfo == "object") { return _userforminfo; }
            else {
                var _data = CmnAjax.GetData(InterfaceUrl + "?method=GetUserFormInfo", "{TableName:'" + tableNameOrUserFormInfo + "'}");

                CmnMis.Func.IsLoginFromAjax(_data);
                _userforminfo = new CmnMis.UserForm();

                _userforminfo.ColInfo = _data.data;
                _userforminfo = CmnMis.Func.CheckColInfo(_userforminfo);


                _userforminfo.KeyColName = _data.KeyColName;

                _userforminfo.ItfUrl = InterfaceUrl;
                _userforminfo.UserFormUrl = _data.formurl;

                _userforminfo.UserFormID = _data.userformid;
                _userforminfo.UserFormDesc = _data.formdesc;
                _userforminfo.ModuleDesc = _data.userformmoduledesc;
                _userforminfo.ModuleID = _data.userformmoduleid;
                _userforminfo.TableName = _data.tablename;
                _userforminfo.ListTemplateFileName = _data.ListTemplateFileName;
                _userforminfo.EditTemplateFileName = _data.EditTemplateFileName;


                if (_data.pagesize == null) { _userforminfo.RecPageSize = 15; }
                else { _userforminfo.RecPageSize = _data.pagesize; }

                $(document).data(tableNameOrUserFormInfo, _userforminfo);

                return _userforminfo;
            }
        },
        GetUserFromInfo: function (tableName) {
            /// <summary>(这个已经删除，不能再用了，应该用GetUserFormInfo)根据表名获取用户表单信息</summary>
            /// <param name="tableName" type="String">表名</param>

            return CmnMis.TableOpt.GetUserForm(tableName);
        },
        InitAddPanel: function (tableName, selector) {
            /// <summary>初始化添加界面</summary>
            /// <param name="tableName" type="CmnMis.UserForm">表名</param>
            /// <param name="where" type="String">最外层的选择器</param>
            var _userFormInfo = CmnMis.TableOpt.GetUserForm(tableName);

            if ($(selector).parents(CmnMis.Frame.Cfg.Selector.UserFormTemplate).length <= 0) {
                $(selector).addClass(CmnMis.Frame.Cfg.Selector.UserFormTemplate.replace(/[\s\S]*([\.]|[\#])/g, ""));
                $(selector).attr("name", "cmn-UserForm" + _userFormInfo.UserFormID);
            }

            $.each(_userFormInfo.ColInfo, function (index, item) {
                var _$controlDom = $(selector).find(CmnMis.UI.Control.Selector.Container);
                var _$crlContrnt = _$controlDom.find(CmnMis.UI.Control.Selector.CtlContent+"[name=" + item.ColName + "]");
                if (_$crlContrnt.attr("name") == item.ColName) {
                    CmnMis.UI.Control.NewControl($(selector), _$crlContrnt.attr("data-control-type"), item.ColName, item.ControlCfg);
                }
            });
        },
        InitEidtPanel: function (tableName, selector, recId,onSuccess) {
            /// <summary>初始化编辑界面</summary>
            /// <param name="tableName" type="String">表名</param>
            /// <param name="where" type="String">最外层的选择器</param>
            /// <param name="onSuccess" type="function">成功回调函数（参数是当前记录数据）</param>

            var _userFormInfo = CmnMis.TableOpt.GetUserForm(tableName);

            if ($(selector).parents(CmnMis.Frame.Cfg.Selector.UserFormTemplate).length <= 0) {
                $(selector).addClass(CmnMis.Frame.Cfg.Selector.UserFormTemplate.replace(/[\s\S]*([\.]|[\#])/g, ""));
                $(selector).attr("name", "cmn-UserForm" + _userFormInfo.UserFormID);
            }

            $.each(_userFormInfo.ColInfo, function (index, item) {
                var _$controlDom = $(selector).find(CmnMis.UI.Control.Selector.Container);
                var _$crlContrnt = _$controlDom.find(CmnMis.UI.Control.Selector.CtlContent+"[name=" + item.ColName + "]");
                if (_$crlContrnt.attr("name") == item.ColName) {
                    CmnMis.UI.Control.NewControl($(selector), _$crlContrnt.attr("data-control-type"), item.ColName, item.ControlCfg);
                }
            });

            _userFormInfo.FillEditPanelData(recId, onSuccess);
        },
        GetData: function (tableNameOrUserFormInfo, param, isBlock, successFunc, errorFunc) {
            /// <summary>获取某个表中的数据</summary>
            /// <param name="tableNameOrUserFormInfo" type="CmnMis.UserForm">表名或UserFormInfo</param>
            /// <param name="param" type="json">参数（json格式）</param>
            /// <param name="isBlock" type="bool">是否为阻塞方式，默认为不是阻塞方式</param>
            /// <param name="successFunc" type="function">执行成功调用的函数,并返回data参数</param>
            /// <param name="errorFunc" type="function">执行错误调用的函数</param>

            var _userFormInfo = CmnMis.TableOpt.GetUserForm(tableNameOrUserFormInfo);
            
            if (_userFormInfo == null) { Cmn.Log("在TableOpt.GetData函数中没有取到用户表单信息！"); return; }

            if (_userFormInfo.TableCache != null) {
                var _data = _userFormInfo.TableCache.GetData(param);

                _data = { IsSuccess: 1, data: _data };

                if (successFunc) { successFunc(_data); }

                return _data;
            }
            else {
                if (isBlock === true) { //阻止方式
                    return CmnAjax.GetData(CmnMis.Func.GetItfUrl(_userFormInfo,_userFormInfo.Cfg.MethodName.GetRecList),
                        param, "", successFunc, errorFunc);
                }
                else { //不是阻止方式
                    CmnAjax.PostData(CmnMis.Func.GetItfUrl(_userFormInfo,_userFormInfo.Cfg.MethodName.GetRecList),
                        param, successFunc, errorFunc);
                }
            }
        },
        GetRec: function (tableName, where, orderBy, successFunc, errorFunc, curPageNo) {
            /// <summary>根据表名称获取数据并填充到用户表单对应的数据列表中</summary>
            /// <param name="tableName" type="CmnMis.UserForm">表名</param>
            /// <param name="where" type="String">查询的条件 可为空 标准sql写法</param>
            /// <param name="orderBy" type="String">查询的排序 可为空 标准sql写法</param>
            /// <param name="successFunc" type="function">执行成功的回调函数</param>
            /// <param name="errorFunc" type="function">执行失败的回调函数</param>
            /// <param name="curPageNo" type="String">当前第几页</param>

            var _userFormInfo = CmnMis.TableOpt.GetUserForm(tableName);
            _userFormInfo.SetCondition(where);

            if (orderBy != undefined && orderBy != null && orderBy != "") {
                var _orderBy = orderBy.split(" ");

                if (_orderBy.length == 2) {
                    _userFormInfo.SortByColName = _orderBy[0];
                    _userFormInfo.SortByDirection = _orderBy[0];
                }
            }

            if (_userFormInfo == null) { return; }

            _userFormInfo.GetRecList( successFunc, errorFunc, curPageNo);
        },
        FillData: function (containerSelector, tableNameOrUserFormInfo, param, successFunc, errorFunc, loadingSelector) {
            /// <summary>根据表名称获取数据并且根据选择器填充</summary>
            /// <param name="containerSelector" type="String">填充主容器的选择器</param>
            /// <param name="tableNameOrUserFormInfo" type="CmnMis.UserForm">表名或UserFormInfo</param>
            /// <param name="param" type="json">参数（json格式）</param>
            /// <param name="successFunc" type="function">执行成功的回调函数</param>
            /// <param name="errorFunc" type="function">执行失败的回调函数</param>
            /// <param name="loadingSelector" type="String">正在加载提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>

            var _userFormInfo = CmnMis.TableOpt.GetUserForm(tableNameOrUserFormInfo);

            if (_userFormInfo == null) { Cmn.Log("在TableOpt.GetData函数中没有取到用户表单信息！"); return; }

            CmnAjax.FillData(containerSelector, CmnMis.Func.GetItfUrl(_userFormInfo,_userFormInfo.Cfg.MethodName.GetRecList),
                param, successFunc, errorFunc, loadingSelector);
        },
        DataPaging: function (dataContainerSelector, tableNameOrUserFormInfo, param, pageContainerSelector, pageSize,
            successFunc, errorFunc, loadingSelector, curPageNo, beforFillDataEvent) {
            /// <summary>填充数据带翻页控件</summary>
            /// <param name="dataContainerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID(如果是多条记录的话不能用id否则在二次填充的时候会多出记录)等)</param>
            /// <param name="tableNameOrUserFormInfo" type="CmnMis.UserForm">表名或UserFormInfo</param>
            /// <param name="param" type="String">调用webmethod的参数，例如：{id:'1',name:'name'}(可为空或不传)  </param>
            /// <param name="pageContainerSelector" type="String">翻页控件容器选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
            /// <param name="pageSize" type="int">每页显示的记录条数</param>
            /// <param name="successFunc" type="function">成功时调用的函数，参数为jason格式的数据例如：{"data":[{"id":"1","name":"chi"},{"id":"2","name":"chi2"}]} (可以不传)</param>
            /// <param name="errorFunc" type="function">错误时调用的函数 (可以不传)</param>
            /// <param name="loadingSelector" type="String">正在加载提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
            /// <param name="curPageNo" type="int">当前页为第几页</param>
            /// <param name="beforFillDataEvent" type="function">填充数据之前触发的事件，接收参数data,可以改写填充数据</param>

            var _userFormInfo = CmnMis.TableOpt.GetUserForm(tableNameOrUserFormInfo);

            if (_userFormInfo == null) { Cmn.Log("在TableOpt.GetData函数中没有取到用户表单信息！"); return; }

            if (_userFormInfo.TableCache != null) {
                return new _userFormInfo.TableCache.DataPaging(dataContainerSelector, param, pageContainerSelector, pageSize,
                    successFunc, curPageNo, beforFillDataEvent);
            }
            else {
                return new CmnAjax.DataPaging(dataContainerSelector,
                    CmnMis.Func.GetItfUrl(_userFormInfo,_userFormInfo.Cfg.MethodName.GetRecList), param,
                    pageContainerSelector, pageSize, successFunc, errorFunc, loadingSelector, curPageNo, beforFillDataEvent);
            }
        },
        Update: function (tableNameOrUserFormInfo, recId, successFunc, errorFunc,param) {
            /// <summary>根据表名称更新数据(提交的是用户表单对应编辑界面上的数据)</summary>
            /// <param name="tableNameOrUserFormInfo" type="CmnMis.UserForm">表名或UserFormInfo</param>
            /// <param name="recId" type="String">更新记录单id</param>
            /// <param name="successFunc" type="function">执行成功的回调函数</param>
            /// <param name="errorFunc" type="function">执行失败的回调函数</param>
            /// <param name="param" type="json">参数</param>

            var _userFormInfo = CmnMis.TableOpt.GetUserForm(tableNameOrUserFormInfo);

            if (_userFormInfo == null) { Cmn.Log("在TableOpt.Update函数中没有取到用户表单信息！"); return; }

            if (_userFormInfo.TableCache != null) {
                _userFormInfo.TableCache.Update(recId);
                if (successFunc) { successFunc({ IsSuccess: 1 }); }
            }
            else {
                var _param = param;

                if (_param == undefined) { _param = {}; }

                _param["RecID"] = recId;

                CmnMis.Func.SubmitData(_userFormInfo.GetSelector(_userFormInfo.Selector.EditControlPanel),
                    _userFormInfo.GetItfUrl(_userFormInfo.Cfg.MethodName.UpdateRec),
                    _param, "", "", "", function (data) {

                        if (data.IsSuccess == "1") {
                            if (successFunc != null && successFunc != undefined) { successFunc(data); }
                        }
                        else {
                            if (errorFunc != null && errorFunc != undefined) { errorFunc(data); }
                        }
                    },errorFunc);
            }
        },
        UpdateRec: function (tableNameOrUserFormInfo, recID, param,onSuccess,onError) {
            /// <summary>根据表名称更新数据(需要更新的具体数据通过param传进来)</summary>
            /// <param name="tableNameOrUserFormInfo" type="CmnMis.UserForm">表名或UserFormInfo</param>
            /// <param name="recID" type="String">要更新记录的id</param>
            /// <param name="param" type="json">要更新的字段数据</param>
            /// <param name="onSuccess" type="function">执行成功的回调函数</param>
            /// <param name="onError" type="function">执行失败的回调函数</param>
            
            var _userFormInfo = CmnMis.TableOpt.GetUserForm(tableNameOrUserFormInfo);

            if (_userFormInfo == null) { Cmn.Log("在TableOpt.Update函数中没有取到用户表单信息！"); return; }

            param["RecID"] = recID;

            CmnAjax.PostData(_userFormInfo.GetItfUrl(_userFormInfo.Cfg.MethodName.UpdateRec), param, function (data) {
                if (data.IsSuccess == "1") {
                    if (onSuccess) { onSuccess(data); }
                }
                else {
                    if (onError) { onError(data); }
                }
            }, onError);
        },
        Delete: function (tableNameOrUserFormInfo, recId, successFunc, errorFunc) {
            /// <summary>根据表名称删除数据</summary>
            /// <param name="tableNameOrUserFormInfo" type="CmnMis.UserForm">表名或UserFormInfo</param>
            /// <param name="recId" type="String">删除记录单id</param>
            /// <param name="successFunc" type="function">执行成功的回调函数</param>
            /// <param name="errorFunc" type="function">执行失败的回调函数</param>

            var _userFormInfo = CmnMis.TableOpt.GetUserForm(tableNameOrUserFormInfo);

            if (_userFormInfo == null) { return; }

            _userFormInfo.CurRecID = recId;

            if (_userFormInfo.TableCache != null) {
                _userFormInfo.TableCache.Delete(recId);
                if (successFunc) { successFunc({ IsSuccess: 1 }); }
            }
            else {
                return CmnAjax.PostData(CmnMis.Func.GetItfUrl(_userFormInfo,_userFormInfo.Cfg.MethodName.DeleteRec), "{RecID:'" +
                    _userFormInfo.CurRecID + "'}", successFunc, errorFunc);
            }
        },
        Add: function (tableNameOrUserFormInfo,param, successFunc, errorFunc) {
            /// <summary>根据表添加获取数据</summary>
            /// <param name="tableNameOrUserFormInfo" type="CmnMis.UserForm">表名或UserFormInfo</param>
            /// <param name="param" type="json">参数</param>
            /// <param name="successFunc" type="function">执行成功的回调函数</param>
            /// <param name="errorFunc" type="function">执行失败的回调函数</param>

            var _userFormInfo = CmnMis.TableOpt.GetUserForm(tableNameOrUserFormInfo);

            if (_userFormInfo == null) { return; }

            if (_userFormInfo.TableCache != null) {
                _userFormInfo.TableCache.Add();
                if (successFunc) { successFunc({ IsSuccess: 1 }); }
            }
            else {
                CmnMis.Func.SubmitData(_userFormInfo.GetSelector(_userFormInfo.Selector.EditControlPanel),
                    CmnMis.Func.GetItfUrl(_userFormInfo, _userFormInfo.Cfg.MethodName.AddRec), param, "", "", "", function (data) {

                        if (data.IsSuccess == "1") {
                            if (successFunc != null && successFunc != undefined) { successFunc(data); }
                        }
                        else {
                            if (errorFunc != null && errorFunc != undefined) { errorFunc(data); }
                        }
                    }, errorFunc);
            }
        },
        BatchUpdate: function (tableNameOrUserForm,updateRecList,onSuccess,onError) {
            /// <summary>批量更新记录</summary>
            /// <param name="tableNameOrUserForm" type="CmnMis.UserForm">表名或UserForm</param>
            /// <param name="updateRecList" type="array">需要跟新的记录数据</param>
            /// <param name="onSuccess" type="function">执行成功的回调函数</param>
            /// <param name="onError" type="function">执行失败的回调函数</param>

            var _userForm = CmnMis.TableOpt.GetUserForm(tableNameOrUserForm);

            if (_userForm == null) { Cmn.Log("在TableOpt.Update函数中没有取到用户表单信息！"); return; }

            CmnAjax.PostData(_userForm.GetItfUrl(_userForm.Cfg.MethodName.UpdateRec), {
                IsBatchOpt: "1",
                RecList: Cmn.Func.JsonToStr({ data: updateRecList })
            },onSuccess, onError);
        }
    };



})(window);