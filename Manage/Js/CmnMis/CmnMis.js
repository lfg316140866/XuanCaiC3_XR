/// <reference path="../jquery.js"/>
/// <reference path="../Cmn.js"/>
/// <reference path="../CmnAjax.js"/>

CmnMis = {
    /// <field name="CurUserFormInfo" type="CmnMis.UserForm">当前显示的用户表单信息</field>
    CurUserForm: null,
    /// <field name="UI" type="CmnMis.UI">用户界面类库(主要是用户控件)</field>
    UI: null,
    /// <field name="Frame" type="CmnMis.Frame">页面框架</field>
    Frame: null,
    /// <field name="Func" type="CmnMis.Func">当前显示的用户界面信息</field>
    Func: null,
    /// <field name="UserForm" type="CmnMis.UserForm">用户表单</field>
    UserForm: null,
    /// <field name="UserForm" type="CmnMis.TableOpt">用户表单</field>
    TableOpt:null
};


//CmnMis.UserFormInfo = function () {
//    /// <field name="ItfUrl" type="String">接口地址</field>
//    /// <field name="UserFormID" type="String">用户表单代码</field>
//    /// <field name="UserFormDesc" type="String">用户表单名称</field>
//    /// <field name="UserFormUrl" type="String">用户表单Url</field>
//    /// <field name="RecPageSize" type="String">数据列表每页的记录数</field>
//    /// <field name="CheckRegular" type="Json">输入字段的检测正则</field>
//    /// <field name="ColInfo" type="Array">字段信息</field>
//    /// <field name="ColInfoRecList" type="Array">记录列表需要显示的字段信息</field>
//    /// <field name="KeyColName" type="String">主键字段名</field>
//    /// <field name="CurRecID" type="String">当前记录代码</field>
//    /// <field name="CurViewState" type="CmnMis.Cfg.ViewState">当前ViewState</field>
//    /// <field name="SearchCol" type="String">搜索字段</field>
//    /// <field name="SearchContent" type="String">搜索内容</field>
//    /// <field name="Condition" type="String">搜索条件</field>
//    /// <field name="DataPaging" type="CmnAjax.DataPaging">数据填充翻页，主要用户查看上一次的页面填充状态</field>
//    /// <field name="ModuleDesc" type="String">模块名称</field>
//    /// <field name="ModuleID" type="String">模块代码</field>
//    /// <field name="SortByColName" type="String">排序字段</field>
//    /// <field name="SortByDirection" type="String">排序方向</field>
//    /// <field name="TableName" type="String">表名</field>
//    /// <field name="TableCache" type="CmnMis.TableCache11">表数据缓存</field>
//    /// <field name="ListTemplateFileName" type="String">列表界面模板文件名</field>
//    /// <field name="EditTemplateFileName" type="String">编辑界面模板文件名</field>
//    /// <field name="ListTemplateContent" type="String">列表界面模板内容</field>
//    /// <field name="EditTemplateContent" type="String">编辑界面模板内容</field>
//    /// <field name="EventAfterRecListLoad" type="function">记录列表加载完事件</field>
//    /// <field name="EventAfterSave" type="function">保存后调用的事件</field>
//    /// <field name="EventInitComplete" type="function">用户表单加载完事件</field>
//    /// <field name="EventUpdateInitComplete" type="function">编辑界面初始化完成事件</field>
//    /// <field name="EventAddInitComplete" type="function">新增界面初始化完成事件</field>
//    /// <field name="EventAfterAddSave" type="function">新增记录保存后事件</field>
//    /// <field name="EventAfterUpdateSave" type="function">修改记录保存后事件</field>
//    /// <field name="EventBeforeDelete" type="function">删除之前触发的事件,当这个事件处理函数返回false的时候，框架默认的删除代码就不执行了</field>
//    /// <field name="EventBeforeFillRecList" type="function">记录列表填充之前触发，可接受参数data,改写列表中的数据</field>

//    this.ItfUrl = ""; //接口地址
//    this.UserFormID = "";  //用户表单代码
//    this.UserFormDesc = ""; //用户表单名称
//    this.UserFormUrl = ""; //用户表单Url
//    this.RecPageSize = "15"; //数据列表每页的记录数
//    this.CheckRegular = {}; //输入字段的检测正则
//    this.ColInfo = new Array(); //字段信息
//    this.ColInfoRecList = new Array(); //记录列表需要显示的字段信息
//    this.KeyColName = ""; //主键字段名
//    this.CurRecID = ""; //当前记录代码
//    this.CurViewState = CmnMis.UserForm.Cfg.ViewState.RecList; //当前ViewState
//    this.SearchCol = ""; //搜索字段
//    this.SearchContent = ""; //搜索内容
//    this.Condition = ""; //搜索条件
//    this.DataPaging = null; //数据填充翻页，主要用户查看上一次的页面填充状态
//    this.ModuleDesc = ""; //模块名称
//    this.ModuleID = ""; //模块代码
//    this.RootModuleDesc = ""; //根模块名称
//    this.RootModuleID = ""; //根模块代码
//    this.SortByColName = "";//排序字段
//    this.SortByDirection = ""; //排序方向
//    this.TableName = ""; //表名 
//    this.IsDetailUserForm = false; //是否是明细用户界面
//    this.ParentUserFormID = ""; //父用户界面代码（只有明细用户界面才会有）
//    this.TableCache = null; //表数据的缓存
//    this.ViewStateData = null; //ShowUserForm传递过来的显示状态数据（可能在新增记录等的时候用到的，所以保存起来）


//    //模板
//    this.ListTemplateFileName = null; //列表界面模板文件名
//    this.EditTemplateFileName = null; //编辑界面模板文件名
//    this.JsTemplateFileName = null; //js模板文件名
//    this.ListTemplateContent = null; //列表界面模板内容
//    this.EditTemplateContent = null; //编辑界面模板内容
//    this.JsTemplateContent = null; //js模板内容


//    //事件
//    this.EventBeforeGetRecList = null; //在获取记录列表前调用(可以加筛选条件，查询条件等)
//    this.EventBeforeFillRecList = null; //在填充数据列表前调用
//    this.EventAfterRecListLoad = null; //记录列表加载完事件
//    this.EventAfterSave = null; //保存后调用的事件
//    this.EventAfterAddSave = null; //增加保存后调用的事件
//    this.EventAfterUpdateSave = null; //更新保存后调用的事件
//    this.EventInitComplete = null; //初始化完成
//    this.EventUpdateInitComplete = null; //编辑界面初始化完成
//    this.EventAddInitComplete = null; //增加界面初始化完成
//    this.EventBeforeDelete = null; //在删除记录之前触发
//    this.EventBeforeAddSave = null; //在增加保存之前触发
//    this.EventBeforeUpdateSave = null; //在更新保存之前触发
//    this.EventBeforeSave = null; //在保存之前触发

//    //选择器
//    this.Selector = {
//        //列标题选择器
//        ColTitle: ".cmn-ColTitle",
//        //列名选择器
//        ColName: ".cmn-ColName",

//        //数据列表容器选择器
//        RecContainer: ".cmn-Rec",
//        //数据翻页容器选择器
//        RecPager: ".cmn-RecPage",
//        //编辑和增加界面容器选择器
//        EditControlPanel: ".cmn-EditPanel",
//        //记录列表视图
//        RecListView: ".cmn-RecListView",
//        //增加修改视图
//        AddEditView: ".cmn-AddEditView",
//        //返回按钮选择器
//        btnReturn: ".cmn-btnReturn",
//        //保存按钮选择器
//        btnSave: ".cmn-btnSave",
//        //搜索按钮选择器 
//        btnSearch: ".cmn-btnSearch",
//        //搜索内容选择器
//        SearchContent: ".cmn-SearchContent",
//        //搜索字段选择选择器
//        SearchColSelect: ".cmn-SearchColSelect",
//        //取消搜索选择器
//        btnCancelSearch: ".cmn-btnCancelSearch",
//        //记录条数选择器
//        RecCount: ".cmn-RecCount",

//        //删除按钮选择器
//        OptDelete: ".cmn-opt-Delete",
//        //更新按钮选择器
//        OptUpdate: ".cmn-opt-Update",
//        //查看按钮选择器
//        OptView: ".cmn-opt-View",
//        //增加按钮选择器
//        OptAdd: ".cmn-opt-Add",

//        //下载csv文件
//        btnDownloadCsv: ".cmn-DownloadCsv",
//        //配置用户界面按钮
//        btnSetUserForm: ".cmn-btnSetUserForm"
//    };


//    this.GetUserFormSelector = function () {
//        /// <summary>获取当前用户表单的选择器</summary>
//        /// <returns type="String" />

//        var _selector = ".cmn-UserFormTemplate[name='cmn-UserForm" + this.UserFormID +
//            (this.IsDetailUserForm ? "_" + this.ParentUserFormID : "") + "']";

//        return _selector;
//    };

//    this.GetSelector = function (selector) {
//        /// <summary>获取加上UserForm前缀的选择器</summary>
//        /// <param name="selector" type="String">选择器</param>
//        /// <returns type="String" />

//        return this.GetUserFormSelector() + " " + selector + ":not(" + this.GetUserFormSelector() +
//            " .cmn-UserFormTemplate " + selector + ")";
//    };
//};



//解决代码自动提示
//if (typeof (CmnMisUI) != "undefined") { CmnMis.UI = CmnMisUI; }
//if (typeof (CmnMisFunc) != "undefined") { CmnMis.Func = CmnMisFunc; }
