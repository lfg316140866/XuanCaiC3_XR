/// <reference path="CmnMis.js" />
/// <reference path="CmnMisFunc.js" />
/// <reference path="CmnMisTableOpt.js" />
/// <reference path="CmnMisFrame.js" />
/// <reference path="../../CmnControl/DateSelect/DateSelect.js" />


//检查CmnMis有没有定义，如果没有定义就定义下
if (typeof (CmnMis) == "undefined") { CmnMis = {}; }

CmnMis.UserForm =  function () {   
    /// <field name="ItfUrl" type="String">接口地址</field>
    /// <field name="UserFormID" type="String">用户表单代码</field>
    /// <field name="UserFormDesc" type="String">用户表单名称</field>
    /// <field name="UserFormUrl" type="String">用户表单Url</field>
    /// <field name="RecPageSize" type="String">数据列表每页的记录数</field>
    /// <field name="ColInfo" type="Array">字段信息</field>
    /// <field name="ColInfoRecList" type="Array">记录列表需要显示的字段信息</field>
    /// <field name="KeyColName" type="String">主键字段名</field>
    /// <field name="CurRecID" type="String">当前记录代码</field>
    /// <field name="CurViewState" type="CmnMis.Cfg.ViewState">当前ViewState</field>
    /// <field name="SearchCol" type="String">搜索字段</field>
    /// <field name="SearchContent" type="String">搜索内容</field>
    /// <field name="_Condition" type="String">搜索条件</field>
    /// <field name="DataPaging" type="CmnAjax.DataPaging">数据填充翻页，主要用户查看上一次的页面填充状态</field>
    /// <field name="ModuleDesc" type="String">模块名称</field>
    /// <field name="ModuleID" type="String">模块代码</field>
    /// <field name="SortByColName" type="String">排序字段</field>
    /// <field name="SortByDirection" type="String">排序方向</field>
    /// <field name="TableName" type="String">表名</field>
    /// <field name="TableCache" type="CmnMis.TableCache11">表数据缓存</field>
    /// <field name="ListTemplateFileName" type="String">列表界面模板文件名</field>
    /// <field name="EditTemplateFileName" type="String">编辑界面模板文件名</field>
    /// <field name="ListTemplateContent" type="String">列表界面模板内容</field>
    /// <field name="EditTemplateContent" type="String">编辑界面模板内容</field>
    /// <field name="EventBeforeGetRecList" type="function">已弃用（请使用BeforeGetRecList），在获取记录列表前调用(可以加筛选条件，查询条件等)</field>
    /// <field name="EventAfterRecListLoad" type="function">已弃用（请使用AfterRecListLoad）,记录列表加载完事件</field>
    /// <field name="EventAfterSave" type="function">已弃用（请使用AfterSave）,保存后调用的事件</field>
    /// <field name="EventInitComplete" type="function">已弃用（请使用OnInitComplete）,用户表单加载完事件</field>
    /// <field name="EventUpdateInitComplete" type="function">已弃用（请使用OnUpdateInitComplete）,编辑界面初始化完成事件,可以接收RecID参数，是当前修改记录的主键值</field>
    /// <field name="EventAddInitComplete" type="function">已弃用（请使用OnAddInitComplete）,新增界面初始化完成事件</field>
    /// <field name="EventAfterAddSave" type="function">已弃用（请使用AfterAddSave）,新增记录保存后事件</field>
    /// <field name="EventAfterUpdateSave" type="function">已弃用（请使用AfterUpdateSave）,修改记录保存后事件</field>
    /// <field name="EventBeforeDelete" type="function">已弃用（请使用BeforeDelete）,删除之前触发的事件,当这个事件处理函数返回false的时候，框架默认的删除代码就不执行了</field>
    /// <field name="EventBeforeFillRecList" type="function">已弃用（请使用BeforeFillRecList）,记录列表填充之前触发，可接受参数data,改写列表中的数据</field>
    /// <field name="EventOnLeave" type="function">已弃用（请使用OnLeave）,在离开当前用户表单时触发</field>
    /// <field name="EventAfterDelete" type="function">已弃用（请使用AfterDelete）,在删除记录之后触发</field>
    /// <field name="EventBeforeAddSave" type="function">已弃用（请使用BeforeAddSave）,在增加保存之前触发</field>
    /// <field name="EventBeforeUpdateSave" type="function">已弃用（请使用OnInitComplete）,在更新保存之前触发</field>
    /// <field name="EventBeforeSave" type="function">已弃用（请使用OnInitComplete）,在保存之前触发</field>
    /// <field name="EventOnCancel" type="function">已弃用（请使用OnInitComplete）,在取消的时候触发</field>
    /// <field name="BeforeGetRecList" type="Cmn.Event">在获取记录列表前调用(可以加筛选条件，查询条件等)</field>
    /// <field name="AfterRecListLoad" type="Cmn.Event">记录列表加载完事件</field>
    /// <field name="AfterSave" type="Cmn.Event">保存后调用的事件</field>
    /// <field name="OnInitComplete" type="Cmn.Event">用户表单加载完事件</field>
    /// <field name="OnUpdateInitComplete" type="Cmn.Event">编辑界面初始化完成事件,可以接收RecID参数，是当前修改记录的主键值</field>
    /// <field name="OnAddInitComplete" type="Cmn.Event">新增界面初始化完成事件</field>
    /// <field name="AfterAddSave" type="Cmn.Event">新增记录保存后事件</field>
    /// <field name="AfterUpdateSave" type="Cmn.Event">修改记录保存后事件</field>
    /// <field name="BeforeDelete" type="Cmn.Event">删除之前触发的事件,当这个事件处理函数返回false的时候，框架默认的删除代码就不执行了</field>
    /// <field name="BeforeFillRecList" type="Cmn.Event">记录列表填充之前触发，可接受参数data,改写列表中的数据</field>
    /// <field name="OnLeave" type="Cmn.Event">在离开当前用户表单时触发</field>
    /// <field name="AfterDelete" type="Cmn.Event">在删除记录之后触发</field>
    /// <field name="BeforeAddSave" type="Cmn.Event">在增加保存之前触发</field>
    /// <field name="BeforeUpdateSave" type="Cmn.Event">在更新保存之前触发</field>
    /// <field name="BeforeSave" type="Cmn.Event">在保存之前触发</field>
    /// <field name="OnCancel" type="Cmn.Event">在取消的时候触发</field>


    //------------------------------------
    this.Cfg = {
        //后台对应的方法名
        MethodName: {
            //获取字段信息
            GetColumnInfo: "GetColumnInfo",
            //获取数据列表
            GetRecList: "GetRecList",
            //增加记录
            AddRec: "AddRec",
            //更新记录
            UpdateRec: "UpdateRec",
            //删除记录
            DeleteRec: "DeleteRec",
            //搜索记录
            SearchRec: "SearchRec"
        },
        //用户表单显示状态
        ViewState: {
            //记录列表
            RecList: "RecList",
            //增加记录
            Add: "Add",
            //修改，更新记录
            Update: "Update",
            //查看记录
            View: "View"
        }
    };
    //------------------------------------
    var _Self = this;

    this.ItfUrl = ""; //接口地址
    this.UserFormID = "";  //用户表单代码
    this.UserFormDesc = ""; //用户表单名称
    this.UserFormUrl = ""; //用户表单Url
    this.UserFormIcon = ""; //用户表单图标
    this.RecPageSize = "15"; //数据列表每页的记录数
    this.ColInfo = new Array(); //字段信息
    this.ColInfoRecList = new Array(); //记录列表需要显示的字段信息
    this.KeyColName = ""; //主键字段名
    this.CurRecID = ""; //当前记录代码
    this.CurViewState = _Self.Cfg.ViewState.RecList; //当前ViewState
    this.SearchCol = ""; //搜索字段
    this.SearchContent = ""; //搜索内容
    this.DataPaging = null; //数据填充翻页，主要用户查看上一次的页面填充状态
    this.ModuleDesc = ""; //模块名称
    this.ModuleID = ""; //模块代码
    this.ModuleIcon = ""; //模块图标
    this.RootModuleDesc = ""; //根模块名称
    this.RootModuleID = ""; //根模块代码
    this.RootModuleIcon = ""; //根模块图标
    this.SortByColName = "";//排序字段
    this.SortByDirection = ""; //排序方向
    this.TableName = ""; //表名 
    this.IsDetailUserForm = false; //是否是明细用户界面
    this.ParentUserFormID = ""; //父用户界面代码（只有明细用户界面才会有）
    this.TableCache = null; //表数据的缓存
    this.IsShowInMenu = true; //是否在菜单中可见

    var _Condition = ""; //搜索条件
    var _FixedCondition = ""; //固定的搜索条件
    var _ViewStateData = null; //ShowUserForm传递过来的显示状态数据（可能在新增记录等的时候用到的，所以保存起来）
    var _IsHasSortCol = false; //是否有排序列字段
    var _SortColName = ""; //排序列字段名称


    //模板
    this.ListTemplateFileName = null; //列表界面模板文件名
    this.EditTemplateFileName = null; //编辑界面模板文件名
    this.JsTemplateFileName = null; //js模板文件名
    this.ListTemplateContent = null; //列表界面模板内容
    this.EditTemplateContent = null; //编辑界面模板内容
    this.JsTemplateContent = null; //js模板内容

     
    //事件
    this.EventBeforeGetRecList = null; //在获取记录列表前调用(可以加筛选条件，查询条件等)
    this.EventBeforeFillRecList = null; //在填充数据列表前调用
    this.EventAfterRecListLoad = null; //记录列表加载完事件
    this.EventAfterSave = null; //保存后调用的事件
    this.EventAfterAddSave = null; //增加保存后调用的事件
    this.EventAfterUpdateSave = null; //更新保存后调用的事件
    this.EventInitComplete = null; //初始化完成
    this.EventUpdateInitComplete = null; //编辑界面初始化完成
    this.EventAddInitComplete = null; //增加界面初始化完成
    this.EventBeforeDelete = null; //在删除记录之前触发
    this.EventAfterDelete = null; //在删除记录之后触发
    this.EventBeforeAddSave = null; //在增加保存之前触发
    this.EventBeforeUpdateSave = null; //在更新保存之前触发
    this.EventBeforeSave = null; //在保存之前触发
    this.EventOnCancel = null; //在取消的时候触发
    this.EventOnLeave = null; //在离开当前用户表单的时候触发

    this.BeforeGetRecList = new Cmn.Event(this);//在获取记录列表前调用(可以加筛选条件，查询条件等)
    this.BeforeFillRecList = new Cmn.Event(this);//在填充数据列表前调用
    this.AfterRecListLoad = new Cmn.Event(this);//记录列表加载完事件
    this.AfterSave = new Cmn.Event(this); //保存后调用的事件
    this.AfterAddSave = new Cmn.Event(this); //增加保存后调用的事件
    this.AfterUpdateSave = new Cmn.Event(this); //更新保存后调用的事件
    this.OnInitComplete = new Cmn.Event(this); //初始化完成
    this.OnUpdateClick = new Cmn.Event(this); //当点击编辑（更新）按钮时触发
    this.OnUpdateInitComplete = new Cmn.Event(this); //编辑界面初始化完成
    this.OnAddClick = new Cmn.Event(this); //当点击增加按钮时触发
    this.OnAddInitComplete = new Cmn.Event(this); //增加界面初始化完成
    this.BeforeDelete = new Cmn.Event(this); //在删除记录之前触发
    this.AfterDelete = new Cmn.Event(this); //在删除记录之后触发
    this.BeforeAddSave = new Cmn.Event(this); //在增加保存之前触发
    this.BeforeUpdateSave = new Cmn.Event(this); //在更新保存之前触发
    this.BeforeSave = new Cmn.Event(this); //在保存之前触发
    this.OnCancel = new Cmn.Event(this); //在取消的时候触发
    this.OnLeave = new Cmn.Event(this); //在离开当前用户表单的时候触发

    //权限
    this.AllowAdd = "0";
    this.AllowDell = "0";
    this.AllowModify = "0";
    this.AllowToExcel = "0";

    //选择器
    this.Selector = {
        //列标题选择器
        ColTitle: ".cmn-ColTitle",
        //列名选择器
        ColName: ".cmn-ColName",

        //数据列表容器选择器
        RecContainer: ".cmn-Rec",
        //数据翻页容器选择器
        RecPager: ".cmn-RecPage",
        //编辑和增加界面容器选择器
        EditControlPanel: ".cmn-EditPanel",
        //记录列表视图
        RecListView: ".cmn-RecListView",
        //增加修改视图
        AddEditView: ".cmn-AddEditView",
        //返回按钮选择器
        btnReturn: ".cmn-btnReturn",
        //保存按钮选择器
        btnSave: ".cmn-btnSave",
        //搜索按钮选择器 
        btnSearch: ".cmn-btnSearch",
        //搜索内容选择器
        SearchContent: ".cmn-SearchContent",
        //在区间搜索的时候，开始值
        StartSearchValue:".cmn-StartSearchValue",
        //搜索字段选择选择器
        SearchColSelect: ".cmn-SearchColSelect",
        //取消搜索选择器
        btnCancelSearch: ".cmn-btnCancelSearch",
        //是否在结果中搜索
        cbxIsSearchInResult: ".cmn-IsSearchInResult",
        //是否区间搜索
        cbxIsIntervalSearch: ".cmn-IsIntervalSearch",
        //记录条数选择器
        RecCount: ".cmn-RecCount",

        //删除按钮选择器
        OptDelete: ".cmn-opt-Delete",
        //更新按钮选择器
        OptUpdate: ".cmn-opt-Update",
        //查看按钮选择器
        OptView: ".cmn-opt-View",
        //增加按钮选择器
        OptAdd: ".cmn-opt-Add",

        //下载csv文件
        btnDownloadCsv: ".cmn-DownloadCsv",
        //配置用户界面按钮
        btnSetUserForm: ".cmn-btnSetUserForm",
        //调试表单SelectSql
        btnDebugSelectSql:".cmn-btnDebugSelectSql"
    };

    //------------------------------------
    this.GetUserFormSelector = function () {
        /// <summary>获取当前用户表单的选择器</summary>
        /// <returns type="String" />

        var _selector = ".cmn-UserFormTemplate[name='cmn-UserForm" + this.UserFormID +
            (this.IsDetailUserForm ? "_" + this.ParentUserFormID : "") + "']";

        return _selector;
    };
    //------------------------------------
    this.GetSelector = function (selector) {
        /// <summary>获取加上UserForm前缀的选择器</summary>
        /// <param name="selector" type="String">选择器</param>
        /// <returns type="String" />

        var _retVal = this.GetUserFormSelector();

        if (selector != undefined && selector != "") {
            _retVal += " " + selector + ":not(" + this.GetUserFormSelector() +  " .cmn-UserFormTemplate " + selector + ")";
        }

        return _retVal;
    };
    //------------------------------------
    var CheckIsInSortable = function () {
        /// <summary>检测是否处于可排序状态</summary>

        var _sortDirection = "desc";
        var _sortColInfo = _Self.GetColInfo(_SortColName);

        //默认为降序
        if (_sortColInfo["ControlCfg"]["Direction"] == "asc") { _sortDirection = "asc"; }

        if (_Self.SortByColName == _SortColName && _Self.SortByDirection == _sortDirection) {
            return true;
        }
        else {
            if (confirm("现在未处于排序状态！是否要进入排序状态？") == true) {
                _Self.SortByColName = _SortColName;
                _Self.SortByDirection = _sortDirection;

                _Self.GetRecList(null, null, _Self.DataPaging.Paging.CurrPage);

                //清空所有字段排序箭头
                $(_Self.GetSelector(_Self.Selector.ColTitle)).each(function () {
                    $(this).html($(this).html().replace("↓", "").replace("↑", ""));
                });
            }

            return false;
        }
    }
    //------------------------------------
    var GetRecAjaxParam = function () {
        /// <summary>获取取得记录的Ajax参数</summary>

        var _param = {};

        //搜索
        if (_Self.SearchContent != "") {
            _param["SearchCol"] = _Self.SearchCol;
            _param["SearchContent"] = _Self.SearchContent;
        }

        //加查询条件
        var _sqlCondition = "";

        if (_FixedCondition != "") {
            _sqlCondition = _FixedCondition;

            if (_Condition != "") { _sqlCondition = "(" + _sqlCondition + ") and (" + _Condition + ")"; }
        }
        else {  if (_Condition != "") { _sqlCondition = _Condition; } }

        if (_sqlCondition != "") { _param["Condition"] = _sqlCondition; }

        //排序
        if (_Self.SortByColName != "") {
            _param["SortBy"] = "[" + _Self.SortByColName + "] " + _Self.SortByDirection ;
        }

        return _param;
    }
    //------------------------------------
    var SetSortButtonState = function () {
        /// <summary>设置排序按钮状态</summary>

        if (!_IsHasSortCol === true) { return; }

        $(".cg-SortUp img").attr("src", "Image/SortUp.gif");
        $(".cg-SortDown img").attr("src", "Image/SortDown.gif");

        var _tmpDoms = "";

        if (_Self.DataPaging.Paging.CurrPage == 1) {
            _tmpDoms = $(_Self.GetSelector(".cg-SortUp img"));

            if (_tmpDoms.length > 0) { _tmpDoms.eq(0).attr("src", "Image/SortUpGray.gif"); }
        }

        if (_Self.DataPaging.Paging.GetPageCount() == _Self.DataPaging.Paging.CurrPage) {
            _tmpDoms = $(_Self.GetSelector(".cg-SortDown img"));

            if (_tmpDoms.length > 0) { _tmpDoms.eq(_tmpDoms.length - 1).attr("src", "Image/SortDownGray.gif"); }
        }
    }
    //------------------------------------
    this.GetRecList = function ( successFunc, errorFunc, curPageNo) {
        /// <summary>显示记录列表</summary>
        /// <param name="successFunc" type="function">成功获取数据回调函数</param>
        /// <param name="errorFunc" type="function">获取数据失败回调函数</param>
        /// <param name="curPageNo" type="int">当前页面</param>
      
        if (_Self.EventBeforeGetRecList) { _Self.EventBeforeGetRecList(); }
        _Self.BeforeGetRecList.Trigger();

        if (CmnMis.Frame.EventBeforeEveryGetRecList) { CmnMis.Frame.EventBeforeEveryGetRecList(); }
        CmnMis.Frame.BeforeEveryGetRecList.Trigger([_Self]);

        if (!curPageNo) { curPageNo = 1; }

        var _ajaxParam = GetRecAjaxParam();

        //csv的下载链接
        if (_Self.AllowToExcel == "1") {
            var _downCsvUrl = CmnMis.Func.GetItfUrl(_Self, _Self.Cfg.MethodName.GetRecList);

            for (var _key in _ajaxParam) {
                _downCsvUrl = Cmn.Func.AddParamToUrl(_downCsvUrl, _key + "=" + encodeURIComponent(_ajaxParam[_key]));
            }

            //解决缓存冲突问题
            //$(_Self.RecContainerSelector).addClass("cmn-Rec-" + _Self.UserFormID);

            //设置下载csv链接
            $(_Self.GetSelector(_Self.Selector.btnDownloadCsv)).attr("href", Cmn.Func.AddParamToUrl(CmnAjax.Func.GetProxyUrl(_downCsvUrl), "method=GetCSV"));
        }
        else { $(_Self.GetSelector(_Self.Selector.btnDownloadCsv)).hide(); }

        $(_Self.GetSelector(_Self.Selector.RecListView)).hide();
        
        _Self.DataPaging = new CmnMis.TableOpt.DataPaging(_Self.GetSelector(_Self.Selector.RecContainer),
            _Self, _ajaxParam, _Self.GetSelector(_Self.Selector.RecPager), _Self.RecPageSize,
            function (data) {
                if (CmnMis.Func.IsLoginFromAjax(data) === false) { return; }

                //绑定操作列事件

                //修改记录
                if (_Self.AllowModify == "1") {
                    $(_Self.GetSelector(_Self.Selector.OptUpdate)).unbind("click").bind("click", function () {
                        var _recID = _Self.GetCurRecKeyVal(this);

                        if (_Self.OnUpdateClick.Trigger([_recID]) === false) { return; }
                        if (CmnMis.Frame != null && CmnMis.Frame.OnEveryUpdateClick.Trigger([_Self]) === false) { return; }

                        _Self.FillEditPanelData(_recID);
                        _Self.CurRecID = _recID;

                        _Self.ShowViewState(_Self.Cfg.ViewState.Update);

                        $(_Self.GetSelector(_Self.Selector.btnSave)).show();
                    });
                }
                else { $(_Self.GetSelector(_Self.Selector.OptUpdate)).hide(); }

                //增加记录
                if (_Self.AllowAdd == "1") {
                    $(_Self.GetSelector(_Self.Selector.OptAdd)).unbind("click").bind("click", function () {
                        if (_Self.OnAddClick.Trigger() === false) { return; }
                        if (CmnMis.Frame != null && CmnMis.Frame.OnEveryAddClick.Trigger([_Self]) === false) { return; };

                        _Self.ShowViewState(_Self.Cfg.ViewState.Add);
                        InitEditPanelData();

                        //根据ShowUserForm传递过来的显示信息，初始化控件的值
                        if (_ViewStateData != undefined && _ViewStateData != null
                            && _ViewStateData.data != undefined && _ViewStateData.data != null) {
                            for (var _key in _ViewStateData.data) {
                                for (var _k = 0; _k < _Self.ColInfo.length; _k++) {
                                    if (_Self.ColInfo[_k].ColName == _key) { //找到对应的控件信息   
                                        var _tmpControl = _Self.GetControlByName(_key);
                                        if (_tmpControl != null) {
                                            _tmpControl.SetValue(_ViewStateData.data[_key]);
                                            _tmpControl.SetEnabled(false);
                                        }

                                        break;
                                    }
                                }
                            }
                        }

                        if (_Self.EventAddInitComplete != null) { _Self.EventAddInitComplete(); }
                        _Self.OnAddInitComplete.Trigger();
                        if (CmnMis.Frame != null && CmnMis.Frame.EventEveryAddInitComplete != null) { CmnMis.Frame.EventEveryAddInitComplete(); }
                        if (CmnMis.Frame != null) { CmnMis.Frame.OnEveryAddInitComplete.Trigger([_Self]); }

                        $(_Self.GetSelector(_Self.Selector.btnSave)).show();
                    });
                }
                else { $(_Self.GetSelector(_Self.Selector.OptAdd)).hide(); }


                //查看记录
                $(_Self.GetSelector(_Self.Selector.OptView)).unbind("click").bind("click", function () {
                    var _recID = _Self.GetCurRecKeyVal(this);

                    _Self.ShowViewState(_Self.Cfg.ViewState.View);
                    _Self.FillEditPanelData( _recID);
                    _Self.CurRecID = _recID;

                    $(_Self.GetSelector(_Self.Selector.btnSave)).hide();
                });


                //删除记录
                if (_Self.AllowDell == "1") {
                    $(_Self.GetSelector(_Self.Selector.OptDelete)).unbind("click").bind("click", function () {
                        var _recID = _Self.GetCurRecKeyVal(this);

                        _Self.ShowViewState(_Self.Cfg.ViewState.RecList, true);
                        _Self.CurRecID = _recID;

                        if (confirm("是否确定要删除 \"" + GetKeyColTitle() + "\" 为 \"" +
                            _Self.CurRecID + "\" 记录？")) {

                            if (_Self.EventBeforeDelete) { //有删除之前事件
                                if (_Self.EventBeforeDelete(_Self.CurRecID) === false) { return; }
                            }

                            if (_Self.BeforeDelete.Trigger([_Self.CurRecID]) === false) { return; }

                            if (CmnMis.Frame != null && CmnMis.Frame.EventBeforeEveryDelete) {
                                if (CmnMis.Frame.EventBeforeEveryDelete(_Self.CurRecID) == false) { return; }
                            }

                            if (CmnMis.Frame != null && CmnMis.Frame.BeforeEveryDelete.Trigger([_Self,_Self.CurRecID]) === false) { return; }

                            DeleteRec(function (data) {
                                if (data.IsSuccess == "1") { Cmn.alert("删除成功！"); }
                                else { Cmn.alert("删除失败！"); }

                                if (_Self.EventAfterDelete) { //删除记录之后触发的事件
                                    _Self.EventAfterDelete((data.IsSuccess=="1"?true:false), _Self.CurRecID);
                                }

                                _Self.AfterDelete.Trigger([(data.IsSuccess == "1" ? true : false), _Self.CurRecID]);

                                _Self.GetRecList(null, null, _Self.DataPaging.Paging.CurrPage);
                            });
                        }
                    });
                }
                else { $(_Self.GetSelector(_Self.Selector.OptDelete)).hide(); }

                //绑定返回按钮
                $(_Self.GetSelector(_Self.Selector.btnReturn)).unbind("click").bind("click", function () {
                    _Self.ShowViewState(_Self.Cfg.ViewState.RecList);

                    if (_Self.EventOnCancel) { _Self.EventOnCancel(); }
                    _Self.OnCancel.Trigger();
                    if (CmnMis.Frame != null && CmnMis.Frame.EventOnEveryCancel) { CmnMis.Frame.EventOnEveryCancel(); }
                    if (CmnMis.Frame != null) { CmnMis.Frame.OnEveryCancel.Trigger([_Self]); }
                });

                //绑定保存按钮
                var _isSaving = false; //是否正在保存

                $(_Self.GetSelector(_Self.Selector.btnSave)).unbind("click").bind("click", function () {
                    if (_isSaving) { Cmn.alert("正在保存中...，请不要重复提交！"); return; }

                    _isSaving = true;

                    if (_Self.EventBeforeSave != null) {
                        if (_Self.EventBeforeSave() === false) { _isSaving = false; return; }
                    }

                    if (_Self.BeforeSave.Trigger() === false) { _isSaving = false; return; }

                    if (CmnMis.Frame != null && CmnMis.Frame.EventBeforeEverySave != null) {
                        if (CmnMis.Frame.EventBeforeEverySave() === false) { _isSaving = false; return; }
                    }

                    if (CmnMis.Frame != null && CmnMis.Frame.BeforeEverySave.Trigger([_Self]) === false) { _isSaving = false; return; }

                    if (_Self.CurViewState == _Self.Cfg.ViewState.Update) { //修改保存
                        if (_Self.EventBeforeUpdateSave != null) {
                            if (_Self.EventBeforeUpdateSave(_Self.CurRecID) === false) { _isSaving = false; return; }
                        }

                        if (_Self.BeforeUpdateSave.Trigger([_Self.CurRecID]) === false) { _isSaving = false; return; }


                        if (CmnMis.Frame != null && CmnMis.Frame.EventBeforeEveryUpdateSave != null) {
                            if (CmnMis.Frame.EventBeforeEveryUpdateSave(_Self.CurRecID) === false) { _isSaving = false; return; }
                        }

                        if (CmnMis.Frame != null && CmnMis.Frame.BeforeEveryUpdateSave.Trigger([_Self,_Self.CurRecID]) === false) { _isSaving = false; return; }

                        UpdateRec(function () { _isSaving = false; }, function () { _isSaving = false; });
                    }
                    else if (_Self.CurViewState == _Self.Cfg.ViewState.Add) { //添加保存
                        if (_Self.EventBeforeAddSave != null) {
                            if (_Self.EventBeforeAddSave(_Self.CurRecID) === false) { _isSaving = false; return; }
                        }

                        if (_Self.BeforeAddSave.Trigger([_Self.CurRecID]) === false) { _isSaving = false; return; }

                        if (CmnMis.Frame != null && CmnMis.Frame.EventBeforeEveryAddSave != null) {
                            if (CmnMis.Frame.EventBeforeEveryAddSave(_Self.CurRecID) === false) { _isSaving = false; return; }
                        }

                        if (CmnMis.Frame != null && CmnMis.Frame.BeforeEveryAddSave.Trigger([_Self, _Self.CurRecID]) === false) { _isSaving = false; return; }

                        AddRec(function () { _isSaving = false; }, function () { _isSaving = false; });
                    }
                });


                //拖动排序
                if (_IsHasSortCol) { //存在排序列
                    var _startIndex = null;
                    var _isAsc = false; //是否升序排序

                    //默认为降序
                    if (_Self.GetColInfo(_SortColName)["ControlCfg"]["Direction"] == "asc") { _isAsc = true; }

                    var GetSortColVal = function (recDom) {
                        /// <summary>获取某个记录的排序字段的值</summary>
                        /// <param name="recDom" type="dom">记录dom对象</param>

                        var _tmpSortVal = Cmn.Func.Trim($(recDom).find(".dat-" + _SortColName + " .cg-tmp-" + _SortColName).html());

                        if (_tmpSortVal == "") { //排序字段的值为空,尝试获取主键代码
                            try { _tmpSortVal = parseInt(_Self.GetCurRecKeyVal(recDom)); }
                            catch (error) { Cmn.alert("排序字段的值存在问题！请联系系统维护人员。"); return; }
                        }
                        else { _tmpSortVal = parseInt(_tmpSortVal); }

                        return _tmpSortVal;
                    }

                    var GetSortMoveRec = function (startIndex,endIndex) {
                        /// <summary>获取所有排序移动的记录</summary>
                        /// <param name="startIndex" type="int">开始索引</param>
                        /// <param name="endIndex" type="int">结束索引</param>

                        var _moveRecList = new Array(); //保存移动过的记录列表
                        var _sortColName = _SortColName.toLowerCase(); //解决字段大小写的问题

                        startIndex--, endIndex--; //由于第一行是标题，所有要减一

                        for (var _i = startIndex; _i <= endIndex; _i++) {
                            var _tmpDom = $(_Self.GetSelector(_Self.Selector.RecContainer)).eq(_i);//$(ui.item).parent().find(_Self.Selector.RecContainer).eq(_i - 1);
                            var _tmpRecData = {};

                            _tmpRecData[_Self.KeyColName.toLowerCase()] = _Self.GetCurRecKeyVal(_tmpDom);
                            _tmpRecData[_sortColName] = GetSortColVal(_tmpDom);

                            _moveRecList[_moveRecList.length] = _tmpRecData;
                        }

                        //对记录排序列进行排序调整
                        for (var _i = 0; _i < _moveRecList.length; _i++) {
                            var _maxminSortID = _moveRecList[_i][_sortColName];

                            for (var _k = _i + 1; _k < _moveRecList.length; _k++) {
                                if ((_isAsc == false && _moveRecList[_k][_sortColName] > _maxminSortID) || 
                                    (_isAsc == true && _moveRecList[_k][_sortColName] < _maxminSortID)) {
                                    var _tmpSortID = _moveRecList[_k][_sortColName];

                                    _moveRecList[_k][_sortColName] = _maxminSortID;
                                    _maxminSortID = _tmpSortID;
                                }
                            }

                            _moveRecList[_i][_sortColName] = _maxminSortID;

                            //更新显示的数据列表 
                            var _tmpDom = $(_Self.GetSelector(_Self.Selector.RecContainer)).eq(startIndex + _i);//$(ui.item).parent().find(_Self.Selector.RecContainer).eq(startIndex + _i - 1);
                            $(_tmpDom).find(".dat-" + _SortColName + " .cg-tmp-" + _SortColName).html(_moveRecList[_i][_sortColName]);
                        }

                        return _moveRecList;
                    }

                    //排序容器
                    var _sortableContainer = $(_Self.GetSelector(_Self.Selector.RecContainer)).eq(0).parent();

                    //绑定排序事件
                    _sortableContainer.sortable({
                        opacity: 0.8, //设置拖动时候的透明度
                        axis: "y",
                        cursor: 'move', //拖动的时候鼠标样式
                        // cancel: '.category',
                        start: function (event, ui) {
                            _startIndex = $(ui.item).index(); //记录开始拖动行的位置
                        },
                        cancel: '.MenuFunctionLoacitionListTitle', //排除标题
                        stop: function (event, ui) { //完成拖动之后自动排序
                            //$(".jscRec").each(function (index, item) {
                            //    $(item).find("td.dat-sortid").html(index);
                            //});

                            //检查是否处于排序状态，如果不是取消操作的排序
                            if (CheckIsInSortable() == false) {
                                _sortableContainer.sortable("cancel");
                                return;
                            }

                            var _endIndex = $(ui.item).index();

                            if (_endIndex == 0) { //拖到了标题上面，不允许，退回去
                                _sortableContainer.sortable("cancel");
                                return;
                            }


                            //生成更新记录列表
                            var _tmpIndex = null;

                            if (_startIndex == _endIndex) { return; }

                            if (_endIndex < _startIndex) {
                                _tmpIndex = _startIndex;
                                _startIndex = _endIndex;
                                _endIndex = _tmpIndex;
                            }

                            var _moveRecList = GetSortMoveRec(_startIndex, _endIndex);

                            CmnMis.TableOpt.BatchUpdate(_Self,_moveRecList, function () {
                               // alert("排序更新成功！");

                               // _Self.GetRecList(null, null, _Self.DataPaging.Paging.CurrPage);
                            }, function () { alert("排序更新失败！请刷新页面后重新排序。"); });

                            SetSortButtonState();
                        }
                    });


                    var SortUpDownClick = function (sender,isUp) {
                        /// <summary>点击向上或向下排序按钮</summary>
                        /// <param name="sender" type="dom">被点击的dom对象</param>
                        /// <param name="isUp" type="bool">是否是点击了向上按钮</param>

                        //检查是否处于排序状态，如果不是取消操作的排序
                        if (CheckIsInSortable() == false) { return; }

                        var _tmpDom = $(sender).parents(_Self.Selector.RecContainer).eq(0);
                        var _moveRecList = null;
                        var _onSuccess = null; //更新成功后回调函数，

                        if (isUp===false && $(_tmpDom).next().length > 0) {
                            _tmpDom.insertAfter($(_tmpDom).next());
                            _moveRecList = GetSortMoveRec($(_tmpDom).index() - 1, $(_tmpDom).index());
                        }
                        else if (isUp === true && $(_tmpDom).prev().length > 0 && $(_tmpDom).prev().index() > 0) {
                            //必须去除第一行标题列

                            _tmpDom.insertBefore($(_tmpDom).prev());
                            _moveRecList = GetSortMoveRec($(_tmpDom).index(), $(_tmpDom).index() + 1);
                        }
                        else { //是本页的最后一条或第一条记录
                            _moveRecList = new Array();

                            var _tmpRecData = {};

                            _tmpRecData[_Self.KeyColName.toLowerCase()] = _Self.GetCurRecKeyVal(_tmpDom);
                            _tmpRecData[_SortColName.toLowerCase()] = GetSortColVal(_tmpDom);

                            _moveRecList[_moveRecList.length] = _tmpRecData;

                            //获取下一页的第一条或上一页的最后一条记录
                            var _param = GetRecAjaxParam();

                            if (_param.Condition == undefined) {
                                _param.Condition = "[" + _SortColName + "]" + 
                                    ((_isAsc==false && isUp === true) || (_isAsc==true && isUp===false) ? ">" : "<") +
                                    _tmpRecData[_SortColName.toLowerCase()];
                            }
                            else {
                                _param.Condition = "(" + _param.Condition + ") and ([" + _SortColName + "]" +
                                    ((_isAsc == false && isUp === true) || (_isAsc == true && isUp === false) ? ">" : "<") +
                                    _tmpRecData[_SortColName.toLowerCase()] + ")";
                            }

                            if ((_isAsc == false && isUp === true) || (_isAsc == true && isUp === false)) { //是向上按钮 ,排序方式要反过来,就是正排                      
                                _param.SortBy = "[" + _SortColName + "]";
                            }
                            else { _param.SortBy = "[" + _SortColName + "] desc "; }


                            _param["PageSize"] = "1";
                            _param["CurPage"] = "1";

                            CmnMis.TableOpt.GetData(_Self, _param, true, function (data) {
                                if (data.data.length < 1) {
                                    if (isUp === true) { alert("这已经是第一条记录了！"); }
                                    else { alert("这已经是最后一条记录了！"); }
                                }
                                else {
                                    _tmpRecData = {};

                                    _tmpRecData[_Self.KeyColName.toLowerCase()] = data.data[0][_Self.KeyColName];
                                    _tmpRecData[_SortColName.toLowerCase()] = data.data[0][_SortColName];

                                    _moveRecList[_moveRecList.length] = _tmpRecData;

                                    //交换两条记录的排序列
                                    var _tmpSortID = _moveRecList[0][_SortColName.toLowerCase()];
                                    _moveRecList[0][_SortColName.toLowerCase()] = _moveRecList[1][_SortColName.toLowerCase()];
                                    _moveRecList[1][_SortColName.toLowerCase()] = _tmpSortID;
                                }
                            });

                            //排序成功，刷新当前页
                            _onSuccess = function () { _Self.GetRecList(null, null, _Self.DataPaging.Paging.CurrPage); };
                        }

                        if (_moveRecList.length >= 2) {
                            CmnMis.TableOpt.BatchUpdate(_Self, _moveRecList, _onSuccess, function () {
                                alert("排序更新失败！请刷新页面后重新排序。");
                            });
                        }

                        SetSortButtonState();
                    }

                    //绑定上下排序调整按钮
                    $(_Self.GetSelector(".cg-SortUp")).unbind("click").bind("click", function () {
                        SortUpDownClick(this,true);
                    });

                    $(_Self.GetSelector(".cg-SortDown")).unbind("click").bind("click", function () {
                        SortUpDownClick(this,false);
                    });
                }

                //执行记录加载完事件
                if (_Self.EventAfterRecListLoad != null) { _Self.EventAfterRecListLoad(); }
                _Self.AfterRecListLoad.Trigger();
                if (CmnMis.Frame != null && CmnMis.Frame.EventAfterEveryRecListLoad != null) { CmnMis.Frame.EventAfterEveryRecListLoad(); }
                if (CmnMis.Frame != null) { CmnMis.Frame.AfterEveryRecListLoad.Trigger([_Self]); }

                //显示记录条数
                $(_Self.GetSelector(_Self.Selector.RecCount)).html(data.RecCount);

                $(_Self.GetSelector(_Self.Selector.RecListView)).stop(true,true).slideDown(1000);

                SetSortButtonState(); //设置排序按钮状态

                if (successFunc != null && successFunc != undefined) { successFunc(data); }
            }, function () { //错误
                Cmn.alert("数据填充失败！可能是网络原因，请重试。");
            }, null, curPageNo, function (data) {
                if (_Self.EventBeforeFillRecList) { _Self.EventBeforeFillRecList(data); }
                _Self.BeforeFillRecList.Trigger([data]);
                if (CmnMis.Frame != null && CmnMis.Frame.EventBeforeEveryFillRecList) { CmnMis.Frame.EventBeforeEveryFillRecList(data); }
                if (CmnMis.Frame != null) { CmnMis.Frame.BeforeEveryFillRecList.Trigger([ _Self,data]); }

                if (_IsHasSortCol) { //有排序列，加上下箭头
                    var _pageCount = _Self.DataPaging.Paging.GetPageCount();

                    for (var _i = 0; _i < data.length; _i++) {
                        var _tmpStr = "";

                        if (_i == 0 && _Self.DataPaging.Paging.CurrPage == 1) { //第一页的第一条数据
                            _tmpStr = " <span class='cg-SortUp' style='cursor:pointer;padding:2px;'><img src='Image/SortUpGray.gif' /></span>";
                        }
                        else { _tmpStr = " <span class='cg-SortUp' style='cursor:pointer;padding:2px;'><img src='Image/SortUp.gif' /></span>"; }

                        if (_i == data.length - 1 && _Self.DataPaging.Paging.CurrPage == _pageCount) {
                            _tmpStr += "<span class='cg-SortDown' style='cursor:pointer;padding:2px;'><img src='Image/SortDownGray.gif' /></span>";
                        }
                        else { _tmpStr += "<span class='cg-SortDown' style='cursor:pointer;padding:2px;'><img src='Image/SortDown.gif' /></span>"; }

                        data[_i][_SortColName] = _tmpStr+
                            "<span class='cg-tmp-" + _SortColName + "'  style='display: none;' >" + data[_i][_SortColName] + "</span>";
                    }
                }

                //格式化列表中的数据显示格式
                for (var _i = 0; _i < _Self.ColInfoRecList.length; _i++) {
                    var _colInfo = _Self.ColInfoRecList[_i];

                    for (var _k = 0; _k < data.length; _k++) {
                        if (_colInfo["ColFormat"] != "") {
                            data[_k][_colInfo["ColName"]] =
                                CmnMis.Func.FormatString(data[_k][_colInfo["ColName"]], _colInfo["ColFormat"]);
                        }

                        //显示ImgUpload的图片在列表中
                        if (_colInfo["ColControlName"] == "ImgUpload") {
                            if (data[_k][_colInfo["ColName"]]) {
                                data[_k][_colInfo["ColName"]] = "<img src='" +
                                    CmnMis.Func.RootPathToManageDir(data[_k][_colInfo["ColName"]]) + "' width='" +
                                    _colInfo["ColWidth"] + "' />";
                            }
                        }
                        else if (_colInfo["ColControlName"] == "RadioButton" || _colInfo["ColControlName"] == "Select") {
                            for (var _n = 0; _n < _colInfo["ControlCfg"]["OptionList"].length; _n++) {
                                if (data[_k][_colInfo["ColName"]] == _colInfo["ControlCfg"]["OptionList"][_n]["key"]) {
                                    data[_k][_colInfo["ColName"]] = _colInfo["ControlCfg"]["OptionList"][_n]["value"];

                                    break;
                                }
                            }
                        }
                    }
                }
            });


        //增加翻页前事件
        _Self.DataPaging.EventBeforePaging = function () {
            $(_Self.GetSelector(_Self.Selector.RecListView)).hide();
        };

        //加翻页数字active样式
        var _activeClass = $(_Self.GetSelector(_Self.Selector.RecPager)).attr("ActiveClass");

        if (_activeClass && _activeClass != "") {
            _Self.DataPaging.Paging.ActiveClass = _activeClass;
        }
    };
    //-----------------------------------------------
    var AddDetailUserFormInfoToParam = function (param) {
        /// <summary>添加明细表单信息到ajax参数中</summary>
        /// <param name="param" type="json">参数</param>

        for (var _i = 0; _i < _Self.ColInfo.length; _i++) {
            if (_Self.ColInfo[_i]["ColControlName"] == "DetailUserForm" ||
                _Self.ColInfo[_i]["ColControlName"] == "EditExd" || _Self.ColInfo[_i]["ColControlName"] == "DetailMultiCheckbox") {
                if (param["cg_DetailUserForm"] == undefined) { param["cg_DetailUserForm"] = new Array(); }

                var _tmpObj = {};

                _tmpObj["ColName"] = _Self.ColInfo[_i]["ColName"];

                if (_Self.ColInfo[_i]["ControlCfg"]["UserFormID"] != undefined) {
                    _tmpObj["UserFormID"] = _Self.ColInfo[_i]["ControlCfg"]["UserFormID"];
                }
                else if (_Self.ColInfo[_i]["ControlCfg"]["SaveTableName"] != undefined) {
                    var _userForm = CmnMis.TableOpt.GetUserForm(_Self.ColInfo[_i]["ControlCfg"]["SaveTableName"]);
                    _tmpObj["UserFormID"] = _userForm.UserFormID;
                }
                else if (_Self.ColInfo[_i]["ControlCfg"]["TableName"] != undefined) {
                    var _userForm = CmnMis.TableOpt.GetUserForm(_Self.ColInfo[_i]["ControlCfg"]["TableName"]);
                    _tmpObj["UserFormID"] = _userForm.UserFormID;
                }

                _tmpObj["ForeignKeyFieldName"] = _Self.ColInfo[_i]["ControlCfg"]["ForeignKeyFieldName"];

                if (_Self.ColInfo[_i]["ControlCfg"]["MainKeyFieldName"] == undefined) {
                    _tmpObj["MainKeyFieldName"] = _Self.KeyColName;
                }
                else { _tmpObj["MainKeyFieldName"] = _Self.ColInfo[_i]["ControlCfg"]["MainKeyFieldName"]; }

                param["cg_DetailUserForm"][param["cg_DetailUserForm"].length] = _tmpObj;
            }
        }

        //数组需要转成字符串
        if (param["cg_DetailUserForm"] != undefined) {
            param["cg_DetailUserForm"] = Cmn.Func.JsonToStr(param["cg_DetailUserForm"]);
        }
    };
    //-----------------------------------------------
    var AddRec = function ( successFunc, errorFunc) {
        /// <summary>增加记录</summary>
        /// <param name="successFunc" type="function">成功回调函数</param>
        /// <param name="errorFunc" type="function">失败回调函数</param>
        var _param = {};

        AddDetailUserFormInfoToParam(_param);

        if (_IsHasSortCol === true) { _param["Cg_SortFieldName"] = _SortColName; }
            
        CmnMis.TableOpt.Add(_Self, _param, function (data) { //增加成功
            if (_Self.EventAfterSave != null) {
                if (_Self.EventAfterSave(data.NewRecID) === false) {
                    if (successFunc != null && successFunc != undefined) { successFunc(data); }
                    return;
                }
            }

            if (_Self.AfterSave.Trigger([data.NewRecID]) === false) {
                if (successFunc != null && successFunc != undefined) { successFunc(data); }
                return;
            }

            if (CmnMis.Frame != null && CmnMis.Frame.EventAfterEverySave != null) {
                if (CmnMis.Frame.EventAfterEverySave(data.NewRecID) === false) {
                    if (successFunc != null && successFunc != undefined) { successFunc(data); }
                    return;
                }
            }

            if (CmnMis.Frame != null && CmnMis.Frame.AfterEverySave.Trigger([_Self, data.NewRecID]) === false) {
                if (successFunc != null && successFunc != undefined) { successFunc(data); }
                return;
            }

            if (_Self.EventAfterAddSave != null) {
                if (_Self.EventAfterAddSave(data.NewRecID) === false) {
                    if (successFunc != null && successFunc != undefined) { successFunc(data); }
                    return;
                }
            }

            if (_Self.AfterAddSave.Trigger([data.NewRecID])===false) {
                if (successFunc != null && successFunc != undefined) { successFunc(data); }
                return;
            }

            if (CmnMis.Frame != null && CmnMis.Frame.EventAfterEveryAddSave != null) {
                if (CmnMis.Frame.EventAfterEveryAddSave(data.NewRecID) === false) {
                    if (successFunc != null && successFunc != undefined) { successFunc(data); }
                    return;
                }
            }

            if (CmnMis.Frame != null && CmnMis.Frame.AfterEveryAddSave.Trigger([_Self, data.NewRecID]) === false) {
                if (successFunc != null && successFunc != undefined) { successFunc(data); }
                return;
            }


            Cmn.alert("增加成功！");
            _Self.ShowViewState(_Self.Cfg.ViewState.RecList, true);
            _Self.GetRecList();

            if (successFunc != null && successFunc != undefined) { successFunc(data); }
        }, function (data) { //增加失败
            Cmn.alert("增加失败！错误信息：" + data.ErrMsg);

            if (errorFunc != null && errorFunc != undefined) { errorFunc(data); }
        });
    };
    //-----------------------------------------------
    var UpdateRec= function ( successFunc, errorFunc) {
        /// <summary>更新记录</summary>
        /// <param name="successFunc" type="function">成功回调函数</param>
        /// <param name="errorFunc" type="function">失败回调函数</param>

        var _param = {};

        AddDetailUserFormInfoToParam(_param)

        CmnMis.TableOpt.Update(_Self, _Self.CurRecID, function (data) {
            if (_Self.EventAfterSave != null) {
                if (_Self.EventAfterSave(_Self.CurRecID) === false) {
                    if (successFunc != null && successFunc != undefined) { successFunc(data); }
                    return;
                }
            }

            if (_Self.AfterSave.Trigger([_Self.CurRecID]) === false) {
                if (successFunc != null && successFunc != undefined) { successFunc(data); }
                return;
            }

            if (CmnMis.Frame != null && CmnMis.Frame.EventAfterEverySave != null) {
                if (CmnMis.Frame.EventAfterEverySave(_Self.CurRecID) === false) {
                    if (successFunc != null && successFunc != undefined) { successFunc(data); }
                    return;
                }
            }

            if (CmnMis.Frame != null && CmnMis.Frame.AfterEverySave.Trigger([_Self, _Self.CurRecID]) === false) {
                if (successFunc != null && successFunc != undefined) { successFunc(data); }
                return;
            }

            if (_Self.EventAfterUpdateSave != null) {
                if (_Self.EventAfterUpdateSave(_Self.CurRecID) === false) {
                    if (successFunc != null && successFunc != undefined) { successFunc(data); }
                    return;
                }
            }

            if (_Self.AfterUpdateSave.Trigger([_Self.CurRecID]) === false) {
                if (successFunc != null && successFunc != undefined) { successFunc(data); }
                return;
            }

            if (CmnMis.Frame != null && CmnMis.Frame.EventAfterEveryUpdateSave != null) {
                if (CmnMis.Frame.EventAfterEveryUpdateSave(_Self.CurRecID) === false) {
                    if (successFunc != null && successFunc != undefined) { successFunc(data); }
                    return;
                }
            }

            if (CmnMis.Frame != null && CmnMis.Frame.AfterEveryUpdateSave.Trigger([_Self, _Self.CurRecID]) === false) {
                if (successFunc != null && successFunc != undefined) { successFunc(data); }
                return;
            }

            Cmn.alert("更新成功！");
            _Self.ShowViewState(_Self.Cfg.ViewState.RecList, true);
            _Self.GetRecList(null, null, _Self.DataPaging.Paging.CurrPage);

            if (successFunc != null && successFunc != undefined) { successFunc(data); }
        }, function (data) {
            Cmn.alert("更新失败！错误信息：" + data.ErrMsg);

            if (errorFunc != null && errorFunc != undefined) { errorFunc(data); }
        }, _param);
    };
    //-----------------------------------------------
    var DeleteRec = function ( successFunc, errorFunc) {
        /// <summary>删除记录</summary>
        /// <param name="successFunc" type="function">成功回调函数</param>
        /// <param name="errorFunc" type="function">失败回调函数</param>

        CmnMis.TableOpt.Delete(_Self, _Self.CurRecID, successFunc, errorFunc);
    };
    //-----------------------------------------------
    //获取用户表单信息
    var GetUserFormInfo= function ( successFunc) {
        /// <summary>获取用户表单信息</summary>
        /// <param name="userFormInfo" type="CmnMis.UserForm">用户表单信息</param>
        /// <param name="successFunc" type="function">获取成功回调函数</param>

        //var _userFormInfo = new CmnMis.UserForm();

        //_userFormInfo.UserFormID = userFormID;

        //获取字段信息
        CmnAjax.PostData(CmnMis.Func.GetItfUrl(_Self, _Self.Cfg.MethodName.GetColumnInfo), "{}", function (data) {
            if (CmnMis.Func.IsLoginFromAjax(data) === false) { return; }

            if (data.IsSuccess == "1") {
                _Self.ColInfo = data.data;
                _Self.KeyColName = data.KeyColName;
                _Self.ColInfoRecList = [];

                //获取记录列表需要显示的字段
                for (var _i = 0; _i < _Self.ColInfo.length; _i++) {
                    if (_Self.ColInfo[_i].IsShowInGrid == "1") {
                        _Self.ColInfoRecList[_Self.ColInfoRecList.length] = _Self.ColInfo[_i];
                    }
                }

                CmnMis.Func.CheckColInfo(_Self);

                //获取权限
                _Self.AllowAdd = data["AllowAdd"];
                _Self.AllowDell = data["AllowDell"];
                _Self.AllowModify = data["AllowModify"];
                _Self.AllowToExcel = data["AllowToExcel"];

                if (successFunc) { successFunc(data.data); }
            }
            else { //获取数据失败，没有取到字段信息
                Cmn.DebugLog("获取用户表单信息错误！可能没有字段信息。");
                _Self.ColInfo = [];
                _Self.ColInfoRecList = [];

                if (successFunc) { successFunc(data.data); }
            }
        });
    };
    //-----------------------------------------------
    var ClearAllEvent = function () {
        /// <summary>清空所有的事件</summary>

        _Self.BeforeGetRecList.Remove();
        _Self.BeforeFillRecList.Remove();
        _Self.AfterRecListLoad.Remove();
        _Self.AfterSave.Remove(); 
        _Self.AfterAddSave.Remove(); 
        _Self.AfterUpdateSave.Remove(); 
        _Self.OnInitComplete.Remove();
        _Self.OnUpdateClick.Remove();
        _Self.OnUpdateInitComplete.Remove();
        _Self.OnAddClick.Remove();
        _Self.OnAddInitComplete.Remove(); 
        _Self.BeforeDelete.Remove(); 
        _Self.AfterDelete.Remove(); 
        _Self.BeforeAddSave.Remove(); 
        _Self.BeforeUpdateSave.Remove(); 
        _Self.BeforeSave.Remove(); 
        _Self.OnCancel.Remove(); 
        _Self.OnLeave.Remove(); 
    }
    //-----------------------------------------------
    //根据用户表单信息初始化界面
    this.InitUserForm= function () {
        /// <summary>根据用户表单信息初始化界面</summary>

        ClearAllEvent();

        LoadListTemplate(function () {
            LoadEditTemplate( function () {
                LoadJsTemplate( function () {
                    InitAfterLoadTpl();
                });
            });
        });
    };
    //-----------------------------------------------
    var LoadListTemplate = function (onComplete) {
        /// <summary>加载js模板</summary>
        /// <param name="onComplete" type="function">加载js完成后的回调函数，如果没有js模板也会调用此函数</param>

        //加载模板
        if (_Self.ListTemplateFileName != null && _Self.ListTemplateFileName != ""
            && _Self.ListTemplateFileName != undefined) { //说明有模板
            if (_Self.ListTemplateContent != null) { //说明已经获取过了
                $(_Self.GetUserFormSelector()).html(_Self.ListTemplateContent);
                onComplete();
            }
            else { //没有模板需要从服务器上获取
                $(_Self.GetUserFormSelector()).load(CmnMis.Func.RootPathToManageDir(_Self.ListTemplateFileName) +
                    "?rnd=" + Math.random(), null, function (response, status, xhr) {
                        if (status == "success") {
                            _Self.ListTemplateContent = response; //保存列表界面模板内容
                            onComplete();
                        }
                    });
            }
        }
        else { //使用默认模板
            $(_Self.GetUserFormSelector()).html(CmnMis.Frame.UserFormHtmlCache.DefaultUserFormTemplate);

            onComplete();
        }
    }
    //-----------------------------------------------
    var LoadEditTemplate = function ( onComplete) {
        /// <summary>加载编辑界面模板</summary>
        /// <param name="onComplete" type="function">加载编辑模板完成后的回调函数</param>

        //加载模板
        if (_Self.EditTemplateFileName != null && _Self.EditTemplateFileName != ""
            && _Self.EditTemplateFileName != undefined) { //说明有模板
            if (_Self.EditTemplateContent != null) { //说明已经获取过了
                $(_Self.GetSelector(_Self.Selector.AddEditView)).html(_Self.EditTemplateContent);
                onComplete();
            }
            else { //没有模板需要从服务器上获取
                $(_Self.GetSelector(_Self.Selector.AddEditView)).load(CmnMis.Func.RootPathToManageDir(_Self.EditTemplateFileName) +
                    "?rnd=" + Math.random(), null, function (response, status, xhr) {
                        if (status == "success") {
                            _Self.EditTemplateContent = response;

                            onComplete();
                        }
                    });
            }
        }
        else { //使用默认模板
            $(_Self.GetSelector(_Self.Selector.AddEditView)).html(CmnMis.Frame.UserFormHtmlCache.DefaultAddEditTemplate);
             
            onComplete();
        }
    }
    //-----------------------------------------------
    var LoadJsTemplate = function(onComplete) {
        /// <summary>加载js模板</summary>
        /// <param name="onComplete" type="function">加载js完成后的回调函数，如果没有js模板也会调用此函数</param>

        if (_Self.JsTemplateFileName != null && _Self.JsTemplateFileName != ""
            && _Self.JsTemplateFileName != undefined) { //说明有js模板
            if (_Self.JsTemplateContent != null && _Self.JsTemplateContent != "") { //已经加载过了
                eval(_Self.JsTemplateContent + " \r\n//@ sourceURL=" + _Self.JsTemplateFileName);
            }
            else { //没有加载过
                //_Self.JsTemplateContent = CmnAjax.Func.LoadJs(_templatePath + _Self.JsTemplateFileName,
                //    onComplete, true);

                _Self.JsTemplateContent = CmnAjax.GetFile(Cmn.Func.AddParamToUrl(
                    CmnMis.Func.RootPathToManageDir(_Self.JsTemplateFileName), "r_=" + Math.random()));

                _Self.JsTemplateContent = "(function(curUserForm){" +
                    _Self.JsTemplateContent.replace(/CmnMis\.CurUserForm/g, 'curUserForm') +
                    "})(CmnMis.Func.GetUserFormByID('" + _Self.UserFormID + "'))";
                  
                eval(_Self.JsTemplateContent + " \r\n//@ sourceURL=" + _Self.JsTemplateFileName);
            }
        }

        onComplete();
    };
    //-----------------------------------------------
    //初始化用户表单（在加载完模板后执行）
    var InitAfterLoadTpl= function () {
        /// <summary>初始化用户表单（在加载完模板后执行）</summary>

        //清空原先的缓存
        Cmn.RemoveFillHtml(_Self.GetSelector(_Self.Selector.ColTitle));
        Cmn.RemoveFillHtml(_Self.GetSelector(_Self.Selector.ColName));
        Cmn.RemoveFillHtml(_Self.GetSelector(_Self.Selector.RecContainer));


        ////保存到缓存
        //if (CmnMis.HtmlCache.RecContainerHtml == "") {
        //    CmnMis.HtmlCache.RecContainerHtml = Cmn.Func.GetOuterHtml($(_Self.RecContainerSelector));
        //}
        //else {
        //    //删除记录列表,保留一个
        //    $(_Self.RecContainerSelector).first().attr("id", "recList_Temp");
        //    $(_Self.RecContainerSelector + "[id!=recList_Temp]").replaceWith("");

        //    $(_Self.RecContainerSelector).replaceWith(CmnMis.HtmlCache.RecContainerHtml);
        //}

        //增加行隐藏域，保存每条记录的
        var _hid = "<input type=\"hidden\" class=\"cmn-KeyVal-" + _Self.KeyColName + "\" name=\"hid" +
            _Self.KeyColName + "\"  value=\"{" + _Self.KeyColName + "}\" />";

        $(_Self.GetSelector(_Self.Selector.RecContainer)).append(_hid);

        //增加列标题隐藏域
        $(_Self.GetSelector(_Self.Selector.ColTitle)).append("<input type=\"hidden\" class=\"cmn-hid-CoName\" value=\"{ColName}\" />");


        //获取列标题
        Cmn.FillData(_Self.GetSelector(_Self.Selector.ColTitle), _Self.ColInfoRecList);
        Cmn.FillData(_Self.GetSelector(_Self.Selector.ColName), _Self.ColInfoRecList);

        _Self.ShowViewState(_Self.Cfg.ViewState.RecList);

        //初始化编辑界面
        InitEditPanelControl();

        //填充搜索下拉字段
        var _searchColList = "";
        var _beforeThreeColName = "";
        var _beforeThreeColTitle = "";

        for (var _i = 0; _i < _Self.ColInfoRecList.length; _i++) {
            _searchColList += "<option value=\"" + _Self.ColInfoRecList[_i].ColName + "\">" +
                _Self.ColInfoRecList[_i].ColTitle + "</option>";

            if (_Self.ColInfoRecList[_i].ColControlName == "Sort") {
                _IsHasSortCol = true;
                _SortColName = _Self.ColInfoRecList[_i].ColName;
            }

            if (_i < 3) {
                if (_beforeThreeColName != "") { _beforeThreeColName += "/"; }
                _beforeThreeColName += _Self.ColInfoRecList[_i].ColName;
                if (_beforeThreeColTitle != "") { _beforeThreeColTitle += "/"; }
                _beforeThreeColTitle += _Self.ColInfoRecList[_i].ColTitle;
            }
        }

        _searchColList = "<option value=\"" + _beforeThreeColName + "\">" +_beforeThreeColTitle + "</option>" + _searchColList;

        $(_Self.GetSelector(_Self.Selector.SearchColSelect)).html(_searchColList);

        //清空排序列
        _Self.SortByColName = "";

        if (_IsHasSortCol == true) {
            _Self.SortByColName = _SortColName;

            var _sortColInfo = _Self.GetColInfo(_SortColName);

            //默认为降序
            if (_sortColInfo["ControlCfg"]["Direction"] == "asc") { _Self.SortByDirection = "asc"; }
            else { _Self.SortByDirection = "desc"; }
        }


        //绑定列标题排序
        $(_Self.GetSelector(_Self.Selector.ColTitle)).unbind("click").bind("click", function () {
            var _colName = "";

            if ($(this).find(".cmn-hid-CoName").length > 0) {
                _colName = $(this).find(".cmn-hid-CoName").val();
            }

            if (_colName == "") { Cmn.Log("未找到对应的字段名！"); return; }
            else {
                //清空所有字段排序箭头
                $(_Self.GetSelector(_Self.Selector.ColTitle)).each(function () {
                    $(this).html($(this).html().replace("↓", "").replace("↑", ""));
                });

                if (_Self.SortByColName == _colName) {
                    if (_Self.SortByDirection == "asc") {
                        _Self.SortByDirection = "desc"
                        $(this).html($(this).html() + "↓");
                    }
                    else { _Self.SortByDirection = "asc"; $(this).html($(this).html() + "↑"); }
                }
                else {
                    _Self.SortByColName = _colName;
                    _Self.SortByDirection = "desc";
                    $(this).html($(this).html() + "↓");
                }

                _Self.GetRecList();
            }
        });

        //默认隐藏区间选项
        $(_Self.GetSelector(_Self.Selector.cbxIsIntervalSearch)).parent().hide();

        //绑定字段选择改变事件
        $(_Self.GetSelector(_Self.Selector.SearchColSelect)).unbind("change").bind("change", function () {
            var _colName = $(_Self.GetSelector(_Self.Selector.SearchColSelect)).val();

            //默认区间不选中
            $(_Self.GetSelector(_Self.Selector.cbxIsIntervalSearch)).attr("checked", false);
            $(_Self.GetSelector(".FromToInputWrap")).hide();

            $(_Self.GetSelector(_Self.Selector.SearchContent)).datetimepicker("destroy");
            $(_Self.GetSelector(_Self.Selector.StartSearchValue)).datetimepicker("destroy");

            $(_Self.GetSelector(".cmn-SearchContentSelect")).removeClass("cmn-SearchContent");
            $(_Self.GetSelector(".cmn-SearchContentSelect")).hide();
            $(_Self.GetSelector(".cmn-SearchContentText")).addClass("cmn-SearchContent");
            $(_Self.GetSelector(".cmn-SearchContentText")).show();


            if (_colName.indexOf("/") >= 0) { $(_Self.GetSelector(_Self.Selector.cbxIsIntervalSearch)).parent().hide(); }
            else {
                $(_Self.GetSelector(_Self.Selector.cbxIsIntervalSearch)).parent().show();

                var _colInfo = _Self.GetColInfo(_colName);

                if (_colInfo != null) {
                    if (_colInfo["ColControlName"] == "DateSelect") { //日期控件
                        $(_Self.GetSelector(_Self.Selector.SearchContent)).datetimepicker();
                        $(_Self.GetSelector(_Self.Selector.StartSearchValue)).datetimepicker();

                        //是日期，默认显示区间
                        $(_Self.GetSelector(_Self.Selector.cbxIsIntervalSearch)).attr("checked", true);
                        $(_Self.GetSelector(".FromToInputWrap")).show();
                    }
                    if (_colInfo["ColControlName"] == "RadioButton" || _colInfo["ColControlName"] == "Select") { //选项字段
                        var _optionListHtml = "";

                        for (var _i = 0; _i < _colInfo["ControlCfg"]["OptionList"].length; _i++) {
                            _optionListHtml += "<option value=\"" + _colInfo["ControlCfg"]["OptionList"][_i]["key"] + "\">" +
                                 _colInfo["ControlCfg"]["OptionList"][_i]["value"] + "</option>";
                        }

                        if (_optionListHtml != "") {
                            $(_Self.GetSelector(".cmn-SearchContentSelect")).html(_optionListHtml).addClass(
                                "cmn-SearchContent").show();
                            $(_Self.GetSelector(".cmn-SearchContentText")).removeClass("cmn-SearchContent").hide();
                            $(_Self.GetSelector(_Self.Selector.cbxIsIntervalSearch)).parent().hide();
                        }
                    }
                    else if (_colName.match(/disp$/i) != null) { //以disp结尾的，说明可能是选择控件的化名
                        var _tmpColName = _colName.replace(/_disp$/i, "").replace(/disp$/i, "");

                        _colInfo = _Self.GetColInfo(_tmpColName, false);

                        if (_colInfo != null) {
                            if (_colInfo["ColControlName"] == "RadioButton" || _colInfo["ColControlName"] == "Select") {
                                var _optionListHtml = "";

                                for (var _i = 0; _i < _colInfo["ControlCfg"]["OptionList"].length; _i++) {
                                    _optionListHtml += "<option value=\"" + _colInfo["ControlCfg"]["OptionList"][_i]["value"] + "\">" +
                                         _colInfo["ControlCfg"]["OptionList"][_i]["value"] + "</option>";
                                }

                                if (_optionListHtml != "") {
                                    $(_Self.GetSelector(".cmn-SearchContentSelect")).html(_optionListHtml).addClass(
                                        "cmn-SearchContent").show();
                                    $(_Self.GetSelector(".cmn-SearchContentText")).removeClass("cmn-SearchContent").hide();
                                    $(_Self.GetSelector(_Self.Selector.cbxIsIntervalSearch)).parent().hide();
                                }
                            }
                        }
                    }
                }
            }
        });

        //绑定搜索按钮
        $(_Self.GetSelector(_Self.Selector.btnSearch)).unbind("click").bind("click", function () {
            var _searchContent = Cmn.Str.ToSqlStr($(_Self.GetSelector(_Self.Selector.SearchContent)).val());

            //内容为空的话，显示全部，相当于取消筛选
            //_Self.SearchContent = _searchContent;
            //_Self.SearchCol = $(_Self.GetSelector(_Self.Selector.SearchColSelect)).val();

            //在结果集中查找
            if ($(_Self.GetSelector(_Self.Selector.cbxIsSearchInResult)).attr("checked") != "checked") {
                _Self.ClearCondition();
            }

            //是否是区间查找
            if ($(_Self.GetSelector(_Self.Selector.cbxIsIntervalSearch)).attr("checked") == "checked") {
                var _startSearchValue = Cmn.Str.ToSqlStr($(_Self.GetSelector(_Self.Selector.StartSearchValue)).val());

                if (_searchContent != "" && _startSearchValue != "") {
                    _Self.AddCondition("[" + $(_Self.GetSelector(_Self.Selector.SearchColSelect)).val() + "] between '" +
                         _startSearchValue + "' and '" + _searchContent + "'");
                }
                else if (_startSearchValue != "") {
                    _Self.AddCondition("[" + $(_Self.GetSelector(_Self.Selector.SearchColSelect)).val() + "] >= '" + _startSearchValue + "'");
                }
                else if (_searchContent != "") {
                    _Self.AddCondition("[" + $(_Self.GetSelector(_Self.Selector.SearchColSelect)).val() + "] <= '" + _searchContent + "'");
                }
            }
            else { //不是区间查找
                var _colName = $(_Self.GetSelector(_Self.Selector.SearchColSelect)).val();

                if (_searchContent != "") {
                    if (_colName.indexOf("/") >= 0) { //是多字段
                        _colName = _colName.split("/");

                        var _where = "";

                        for (var _i = 0; _i < _colName.length; _i++) {
                            if (_where != "") { _where += " or "; }

                            _where += "[" + _colName[_i] + "] like '%" + _searchContent + "%'";
                        }

                        _Self.AddCondition(_where);
                    }
                    else { //一个字段
                        if ($(_Self.GetSelector(_Self.Selector.SearchContent)).hasClass("cmn-SearchContentSelect")) {
                            _Self.AddCondition("[" + _colName + "] = '" + _searchContent + "'");
                        }
                        else { _Self.AddCondition("[" + _colName + "] like '%" + _searchContent + "%'"); }
                    }
                }
            }

            _Self.ShowViewState(_Self.Cfg.ViewState.RecList);
            _Self.GetRecList();
        });

        //绑定取消搜索按钮
        $(_Self.GetSelector(_Self.Selector.btnCancelSearch)).unbind("click").bind("click", function () {
            $(_Self.GetSelector(_Self.Selector.SearchContent)).val("");
            _Self.SearchContent = "";
            _Self.ShowViewState(_Self.Cfg.ViewState.RecList);
            _Self.GetRecList();
        });

        //搜索框回车默认搜索
        $(_Self.GetSelector(_Self.Selector.SearchContent)).keypress(function (event) {
            if (event.keyCode == 13) { $(_Self.GetSelector(_Self.Selector.btnSearch)).click(); }
        });

        //绑定是否是区间搜索
        var _isIntervalSearchDom = $(_Self.GetSelector(_Self.Selector.cbxIsIntervalSearch));

        _isIntervalSearchDom.unbind("change").bind("change", function () {
            if (_isIntervalSearchDom.attr("checked") == "checked") {
                $(_Self.GetSelector(".FromToInputWrap")).show();
            }
            else { $(_Self.GetSelector(".FromToInputWrap")).hide(); }
        });

        //设置配置用户界面链接
        //$(_Self.GetSelector(_Self.Selector.btnSetUserForm)).attr("href",
        //    "Template/CmnUserForm/UserformEdit.htm?UserFormID=" + _Self.UserFormID + "&SysName=" + Cmn.Func.GetParamFromUrl("SysName"));
        
        

        if (CmnMis.Func.IsSysAdmin()) {
            $(_Self.GetSelector(_Self.Selector.btnDebugSelectSql)).attr("href",
                "Tools/UserFormSqlTest.htm?SysName=" + Cmn.Func.GetParamFromUrl("SysName") + "&userformid=" + _Self.UserFormID);

            $(_Self.GetSelector(_Self.Selector.btnSetUserForm)).unbind("click").bind("click", function () {
                CmnMis.Func.ShowSetUserFormCol(_Self.UserFormID, _Self.UserFormID);
            });
        }
        else {
            $(_Self.GetSelector(_Self.Selector.btnDebugSelectSql)).hide();
            $(_Self.GetSelector(_Self.Selector.btnSetUserForm)).hide();
        }

        //用户表单初始状态处理
        var _isProcessed = false; //保存是否初始化处理过

        //加筛选条件
        if (_isProcessed == false && _ViewStateData != undefined && _ViewStateData != null) {
            if (_ViewStateData.Condition != undefined && _ViewStateData.Condition != null) {
                _Self.SetFixedCondition(_ViewStateData.Condition);
            }

            //防止先跳到list页面
            if (_ViewStateData.ViewState != undefined && _ViewStateData.ViewState == _Self.Cfg.ViewState.Add
                        || _ViewStateData.ViewState == _Self.Cfg.ViewState.Update
                        || _ViewStateData.ViewState == _Self.Cfg.ViewState.View) {
                _Self.ShowViewState(_ViewStateData.ViewState);
            }
        }

        _Self.GetRecList( function (data) {
            if (_isProcessed == false) {
                if (_ViewStateData != undefined && _ViewStateData != null) {
                    if (_ViewStateData.ViewState == _Self.Cfg.ViewState.Add
                        || _ViewStateData.ViewState == _Self.Cfg.ViewState.Update
                        || _ViewStateData.ViewState == _Self.Cfg.ViewState.View) {
                        _Self.ShowViewState(_ViewStateData.ViewState);
                        InitEditPanelData();

                        //填充数据
                        if (_ViewStateData.data != undefined && _ViewStateData.data != null) {
                            if (_ViewStateData.ViewState == _Self.Cfg.ViewState.Add) {
                                for (var _key in _ViewStateData.data) {
                                    for (var _k = 0; _k < _Self.ColInfo.length; _k++) {
                                        if (_Self.ColInfo[_k].ColName == _key) { //找到对应的控件信息   
                                            var _tmpControl = _Self.GetControlByName( _key);
                                            if (_tmpControl != null) { _tmpControl.SetValue(_ViewStateData.data[_key]); }

                                            break;
                                        }
                                    }
                                }
                            }
                            else { //是修改或者是查看
                                if (_ViewStateData.data.RecID != undefined) {
                                    _Self.FillEditPanelData(_ViewStateData.data.RecID);
                                    _Self.CurRecID = _ViewStateData.data.RecID;
                                }
                            }
                        }

                        //返回用户表单代码
                        if (_ViewStateData.ReturnUserFormID != undefined && _ViewStateData.ReturnUserFormID != null) {
                            ////绑定返回按钮
                            //$(_Self.GetSelector(_Self.Selector.btnReturn)).unbind("click").bind("click", function () {
                            //     CmnMis.Frame.ShowUserForm(_ViewStateData.ReturnUserFormID,null,_ViewStateData.IsReloadWhenReturn);
                            //});

                            //_Self.EventAfterSave = function () { 
                            //    CmnMis.Frame.ShowUserForm(_ViewStateData.ReturnUserFormID,null, _ViewStateData.IsReloadWhenReturn);
                            //};

                            _Self.AfterSave.Add(function () {
                                CmnMis.Frame.ShowUserForm(_ViewStateData.ReturnUserFormID, null, _ViewStateData.IsReloadWhenReturn);
                            });
                        }
                    }

                    //返回用户表单代码
                    if (_ViewStateData.ReturnUserFormID != undefined && _ViewStateData.ReturnUserFormID != null) {
                        //绑定返回按钮
                        $(_Self.GetSelector(_Self.Selector.btnReturn)).unbind("click").bind("click", function () {
                            CmnMis.Frame.ShowUserForm(_ViewStateData.ReturnUserFormID, null, _ViewStateData.IsReloadWhenReturn);
                        });
                    }
                }

                _isProcessed = true;
            }

            //调用用户表单加载完事件
            if (_Self.EventInitComplete != null) { _Self.EventInitComplete(); }
            _Self.OnInitComplete.Trigger();
            if (CmnMis.Frame != null && CmnMis.Frame.EventEveryInitComplete != null) { CmnMis.Frame.EventEveryInitComplete(); }
            if (CmnMis.Frame != null) { CmnMis.Frame.OnEveryInitComplete.Trigger([_Self]); }
        });


    };
    //-----------------------------------------------
    //初始化编辑界面
    var InitEditPanelControl= function () {
        /// <summary>初始化编辑界面</summary>

        if (!_Self.ColInfo) { return false; }

        CmnMis.UI.Control.CreateControls(_Self);
    };
    //-----------------------------------------------
    //显示状态
    this.ShowViewState = function ( viewState, isNoAnim) {
        /// <summary>显示状态</summary>
        /// <param name="viewState" type="String">显示状态</param>
        /// <param name="isNoAnim" type="bool">是否不显示动画</param>
   
        var _speed = (isNoAnim == true?0:1000);

        if (viewState == _Self.Cfg.ViewState.RecList) {
            $(_Self.GetSelector(_Self.Selector.RecListView)).hide().stop(true,true).slideDown(_speed);
            $(_Self.GetSelector(_Self.Selector.AddEditView)).hide();
        }
        else {
            $(_Self.GetSelector(_Self.Selector.RecListView)).hide();
            $(_Self.GetSelector(_Self.Selector.AddEditView)).hide().stop(true,true).slideDown(_speed);
        }

        _Self.CurViewState = viewState;
    };
    //-----------------------------------------------
    //填充编辑界面数据
    this.FillEditPanelData= function ( recID,onSuccess) {
        /// <summary>填充编辑界面数据</summary>
        /// <param name="recID" type="String">记录代码(主键)</param>
        /// <param name="onSuccess" type="function">成功回调函数（参数是当前记录数据）</param>

        InitEditPanelData();

        CmnMis.TableOpt.GetData(_Self, { RecID: recID }, false,
            function (data) {
                if (CmnMis.Func.IsLoginFromAjax(data) === false) { return; }

                if (data.data) {
                    if (data.data.length > 0) {
                        CmnMis.UI.Control.SetValueList(_Self.GetSelector(_Self.Selector.EditControlPanel),
                            data.data[0], _Self);

                        if (_Self.EventUpdateInitComplete != null) { _Self.EventUpdateInitComplete(recID, data.data[0]); }
                        _Self.OnUpdateInitComplete.Trigger([recID, data.data[0]]);
                        if (CmnMis.Frame != null && CmnMis.Frame.EventEveryUpdateInitComplete != null) { CmnMis.Frame.EventEveryUpdateInitComplete(recID, data.data[0]); }
                        if (CmnMis.Frame != null) { CmnMis.Frame.OnEveryUpdateInitComplete.Trigger([_Self ,recID, data.data[0]]); }

                        if (onSuccess) { onSuccess(data.data[0]); }
                    }
                }
                else { Cmn.Log("FillEditPanelData中GetRecList的时候data为空,FormDesc:" + _Self.UserFormDesc + " RecID:" + recID); }
            });
    };
    //-----------------------------------------------
    //初始化编辑界面数据
    var InitEditPanelData = function () {
        /// <summary>初始化编辑界面数据</summary>

        ////
        //_data = {};

        //for (var _k = 0; _k < _Self.ColInfo.length; _k++) {
        //    var _value = "";

        //    //以控件配置优先
        //    if (_Self.ColInfo[_k].ControlCfg["Default"] != undefined) {
        //        _value = _Self.ColInfo[_k].ControlCfg["Default"] ;
        //    }
        //    else { _value = _Self.ColInfo[_k].DefaultValue ; }

        //    _data[_Self.ColInfo[_k].ColName] = _value;
        //}

        //CmnMis.UI.Control.SetValueList(_Self.GetSelector(_Self.Selector.EditControlPanel), [_data]);

        //初始化一下控件的值, 由于控件中有默认值，还可能有控件行内配置,所以改成这种方式
        CmnMis.UI.Control.InitValueList(_Self.GetSelector(_Self.Selector.EditControlPanel));
    };
    //-----------------------------------------------
    this.AddFixedCondition = function (condition) {
        /// <summary>增加固定的条件(框架内部使用)，ClearCondition不会清除他，直到UserForm销毁</summary>

        if (condition && condition != "") {
            if (_FixedCondition != "") { _FixedCondition += " and "; }
            _FixedCondition += "(" + condition + ")";
        }
    }
    //-----------------------------------------------
    this.SetFixedCondition = function (condition) {
        /// <summary>设置固定的条件（框架内部使用），ClearCondition不会清除他，直到UserForm销毁</summary>

        _FixedCondition = condition;
    }
    //-----------------------------------------------
    this.AddCondition = function ( condition) {
        /// <summary>增加获取记录列表的sql条件</summary>
        /// <param name="condition" type="String">条件</param>

        if (condition && condition != "") {
            if (_Condition != "") { _Condition += " and "; }
            _Condition += "(" + condition + ")";
        }
    };
    //-----------------------------------------------
    this.SetCondition = function (condition) {
        /// <summary>设置条件（这个函数会覆盖原先设置的条件）</summary>

        _Condition = condition;
    }
    //-----------------------------------------------
    this.ClearCondition = function () {
        /// <summary>清除获取记录列表的sql条件</summary>

        _Condition = "";
    }
    //-----------------------------------------------
    this.Show = function (viewStateData) {
        /// <summary>显示</summary>
        /// <param name="viewStateData" type="json">刚显示的时候处于什么状态及初始数据，例如在增加或修改记录的时候需要初始化的数据。格式例如：{ViewState:"Add",ReturnUserFormID:"",data:{"FieldName":"FieldValue"}}</param>
        /// <param name="isReload" type="bool">是否重新加载，如果为是的话，即使用户表单已经存在也会重新加载（默认为是）</param>

        if (CmnMis.CurUserForm != null && CmnMis.CurUserForm != _Self) {
            if (CmnMis.CurUserForm.EventOnLeave) { CmnMis.CurUserForm.EventOnLeave(); }
            CmnMis.CurUserForm.OnLeave.Trigger();
        }

        //设置当前显示的用户表单 
        CmnMis.CurUserForm = _Self;

        //保存传递过来的viewStateData
        _ViewStateData = null; //先把viewstatedata清空，否则点左边菜单直接进入，会保留上次的状态

        if (viewStateData != null) { //不等于空才去保存，因为显示用户表单的话是不需要更新的
            if (viewStateData == undefined) { _ViewStateData = null; }
            else { _ViewStateData = viewStateData; }
        }

        //隐藏其他用户表单，显示当前的
        CmnMis.Frame.ActiveUserForm(_Self, true, false);

        //隐藏记录列表，避免用户看到占位符
        $(_Self.GetSelector(_Self.Selector.RecListView)).hide();

        //清空搜索条件
        _Self.SearchContent = "";
        $(_Self.GetSelector(_Self.Selector.SearchContent)).val("");
        _Condition = "";
        _FixedCondition = "";

        //临时注释下，到时候再优化
        //if (_userFormInf.ColInfo.length <= 0) { //还没有初始化
        GetUserFormInfo( function () {
            _Self.InitUserForm();

            //_userFormInf.RecPageSize = 5;

            //setTimeout(function () {
            //CmnMis.GetRecList();
            //}, 300);

            //设置用户表单标题
            //$(CmnMis.Frame.Cfg.Selector.UserFormDesc).html(_userFormInf.UserFormDesc);
        });
        //}
        //else {

        //    CmnMis.InitUserForm(_userFormInf);

        //    //_userFormInf.RecPageSize = 5;

        //    //setTimeout(function () {
        //    CmnMis.GetRecList();
        //    //}, 300);

        //    //设置用户表单标题
        //    $(_userFormInf.UserFormDescSelector).html(_userFormInf.UserFormDesc);
        //}
    }
    //-----------------------------------------------
    //获取当前记录的主键的值
    this.GetCurRecKeyVal = function ( optDom) {
        /// <summary>获取当前记录的主键的值</summary>
        /// <param name="optDom" type="String">Dom对象或选择器</param>

        optDom = $(optDom);

        for (var _i = 0; _i < 10; _i++) {
            if (optDom.find(".cmn-KeyVal-" + _Self.KeyColName).length > 0) {
                return optDom.find(".cmn-KeyVal-" + _Self.KeyColName).val();
            }

            optDom = optDom.parent();
        }

        return "";
    };
    //-----------------------------------------------
    //获取主键的列标题
    var GetKeyColTitle = function () {
        /// <summary>获取主键列标题</summary>
        /// <returns type="String" />

        for (var _i = 0; _i < _Self.ColInfo.length; _i++) {
            if (_Self.ColInfo[_i].ColName == _Self.KeyColName) { return _Self.ColInfo[_i].ColTitle; }
        }

        return "";
    };
    //-----------------------------------------------
    //根据字段名找到编辑界面上对应的控件
    this.GetControlByName = function ( name) {
        /// <summary>根据字段名找到编辑界面上对应的控件</summary>
        /// <param name="name" type="String">字段名</param>
        ///	<returns type='CmnMis.UI.Control.BasControl'/>

        var _control = $(_Self.GetSelector(_Self.Selector.EditControlPanel))
            .find(".cmn-control[name='" + name + "']").parents(CmnMis.UI.Control.Selector.Container);
        
        if (_control.length > 0) { return CmnMis.UI.Control.GetControl($(_control)); }
        else { return null; }
    };
    //-----------------------------------------------
    this.GetItfUrl = function (method) {
        /// <summary>获取用户表单和方法对应的接口地址</summary>
        /// <param name="method" type="String">方法名</param>

        return Cmn.Func.AddParamToUrl(Cmn.Func.AddParamToUrl(_Self.ItfUrl, "CurUserFormID=" +
            _Self.UserFormID), "method=" + method);
    };
    //-----------------------------------------------
    this.GetCurRecFieldVal = function (fieldName) {
        /// <summary>获取当前记录某个字段的值</summary>
        /// <param name="fieldName" type="String">字段名</param>

        if (_Self.CurRecID == "") { Cg.Log("警告：CurRecID 为空"); }

        return $(_Self.GetUserFormSelector()).find(".cmn-KeyVal-info_id[value=" + _Self.CurRecID +
            "]").parents(".cmn-Rec").find(".cmn-ColName.dat-" + fieldName).text();
    };
    //-----------------------------------------------
    this.RefreshData = function () {
        /// <summary>刷新数据</summary>

        _Self.GetRecList();
    };
    //-----------------------------------------------
    this.GetShowViewStateData = function () {
        /// <summary>获取ShowUserForm传递过来的ViewStateData</summary>
        /// <returns type="json" />

        return _ViewStateData;
    };
    //-----------------------------------------------
    this.GetColInfo = function (colName,isOnlySearchRecListCol) {
        /// <summary>根据字段名获取字段信息</summary>
        /// <param name="colName" type="String">字段名</param>
        /// <param name="isOnlySearchRecListCol" type="bool">是否只是搜索列表中显示的字段（默认为是）</param>

        if (isOnlySearchRecListCol === false) {
            for (var _i = 0; _i < _Self.ColInfo.length; _i++) {
                if (_Self.ColInfo[_i]["ColName"] == colName) {
                    return _Self.ColInfo[_i];
                }
            }
        }
        else {
            for (var _i = 0; _i < _Self.ColInfoRecList.length; _i++) {
                if (_Self.ColInfoRecList[_i]["ColName"] == colName) {
                    return _Self.ColInfoRecList[_i];
                }
            }
        }

        return null;
    }
    //-----------------------------------------------
};


//CmnMis.UserForm = new UserFormProcess();

