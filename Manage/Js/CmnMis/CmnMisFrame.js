/// <reference path="../../../Js/ThirdLib/jquery.js" />
/// <reference path="../../../Js/Cmn.js" />
/// <reference path="../../../CmnAjax.js"/>
/// <reference path="CmnMisControl.js" />
/// <reference path="CmnMisFunc.js" />
/// <reference path="CmnMisUserForm.js" />

//检查CmnMis有没有定义，如果没有定义就定义下
if (typeof (CmnMis) == "undefined") { CmnMis = {}; }

CmnMis.Frame =new function(){
    /// <field name="EventFrameInitComplete" type="function">已弃用（请使用OnFrameInitComplete），框架加载完成事件</field>
    /// <field name="EventBeforeEveryGetRecList" type="function">已弃用（请使用BeforeEveryGetRecList），在每个用户界面获取记录列表前调用(可以加筛选条件，查询条件等)</field>
    /// <field name="EventBeforeEveryFillRecList" type="function">已弃用（请使用BeforeEveryFillRecList），在填充数据列表前调用</field>
    /// <field name="EventAfterEveryRecListLoad" type="function">已弃用（请使用AfterEveryRecListLoad），记录列表加载完事件</field>
    /// <field name="EventAfterEverySave" type="function">已弃用（请使用AfterEverySave），保存后调用的事件</field>
    /// <field name="EventAfterEveryAddSave" type="function">已弃用（请使用AfterEveryAddSave），增加保存后调用的事件</field>
    /// <field name="EventAfterEveryUpdateSave" type="function">已弃用（请使用AfterEveryUpdateSave），更新保存后调用的事件</field>
    /// <field name="EventEveryInitComplete" type="function">已弃用（请使用OnEveryInitComplete），初始化完成</field>
    /// <field name="EventEveryUpdateInitComplete" type="function">已弃用（请使用OnEveryUpdateInitComplete），编辑界面初始化完成</field>
    /// <field name="EventEveryAddInitComplete" type="function">已弃用（请使用OnEveryAddInitComplete），增加界面初始化完成</field>
    /// <field name="EventBeforeEveryDelete" type="function">已弃用（请使用BeforeEveryDelete），在删除记录之前触发</field>
    /// <field name="EventBeforeEveryAddSave" type="function">已弃用（请使用BeforeEveryAddSave），在增加保存之前触发</field>
    /// <field name="EventBeforeEveryUpdateSave" type="function">已弃用（请使用BeforeEveryUpdateSave），在更新保存之前触发</field>
    /// <field name="EventBeforeEverySave" type="function">已弃用（请使用BeforeEverySave），在保存之前触发</field>
    /// <field name="EventOnEveryCancel" type="function">已弃用（请使用OnEveryCancel），在取消的时候触发</field>
    /// <field name="OnFrameInitComplete" type="Cmn.Event">框架加载完成事件</field>
    /// <field name="BeforeEveryGetRecList" type="Cmn.Event">在每个用户界面获取记录列表前调用(可以加筛选条件，查询条件等)</field>
    /// <field name="BeforeEveryFillRecList" type="Cmn.Event">在填充数据列表前调用</field>
    /// <field name="AfterEveryRecListLoad" type="Cmn.Event">记录列表加载完事件</field>
    /// <field name="AfterEverySave" type="Cmn.Event">保存后调用的事件</field>
    /// <field name="AfterEveryAddSave" type="Cmn.Event">增加保存后调用的事件</field>
    /// <field name="AfterEveryUpdateSave" type="Cmn.Event">更新保存后调用的事件</field>
    /// <field name="OnEveryInitComplete" type="Cmn.Event">初始化完成</field>
    /// <field name="OnEveryUpdateInitComplete" type="Cmn.Event">编辑界面初始化完成</field>
    /// <field name="OnEveryAddInitComplete" type="Cmn.Event">增加界面初始化完成</field>
    /// <field name="BeforeEveryDelete" type="Cmn.Event">在删除记录之前触发</field>
    /// <field name="BeforeEveryAddSave" type="Cmn.Event">在增加保存之前触发</field>
    /// <field name="BeforeEveryUpdateSave" type="Cmn.Event">在更新保存之前触发</field>
    /// <field name="BeforeEverySave" type="Cmn.Event">在保存之前触发</field>
    /// <field name="OnEveryCancel" type="Cmn.Event">在取消的时候触发</field>

    this.EventFrameInitComplete = null;
    this.EventBeforeEveryGetRecList = null; //在每个用户界面获取记录列表前调用(可以加筛选条件，查询条件等)
    this.EventBeforeEveryFillRecList = null; //在填充数据列表前调用
    this.EventAfterEveryRecListLoad = null; //记录列表加载完事件
    this.EventAfterEverySave = null; //保存后调用的事件
    this.EventAfterEveryAddSave = null; //增加保存后调用的事件
    this.EventAfterEveryUpdateSave = null; //更新保存后调用的事件
    this.EventEveryInitComplete = null; //初始化完成
    this.EventEveryUpdateInitComplete = null; //编辑界面初始化完成
    this.EventEveryAddInitComplete = null; //增加界面初始化完成
    this.EventBeforeEveryDelete = null; //在删除记录之前触发
    this.EventBeforeEveryAddSave = null; //在增加保存之前触发
    this.EventBeforeEveryUpdateSave = null; //在更新保存之前触发
    this.EventBeforeEverySave = null; //在保存之前触发
    this.EventOnEveryCancel = null; //在取消的时候触发

    this.OnFrameInitComplete = new Cmn.Event(this);
    this.BeforeEveryGetRecList = new Cmn.Event(this); //在每个用户界面获取记录列表前调用(可以加筛选条件，查询条件等)
    this.BeforeEveryFillRecList = new Cmn.Event(this); //在填充数据列表前调用
    this.AfterEveryRecListLoad = new Cmn.Event(this); //记录列表加载完事件
    this.AfterEverySave = new Cmn.Event(this); //保存后调用的事件
    this.AfterEveryAddSave = new Cmn.Event(this); //增加保存后调用的事件
    this.AfterEveryUpdateSave = new Cmn.Event(this); //更新保存后调用的事件
    this.OnEveryInitComplete = new Cmn.Event(this); //初始化完成
    this.OnEveryUpdateClick = new Cmn.Event(this); //当点击编辑（更新）按钮时触发
    this.OnEveryUpdateInitComplete = new Cmn.Event(this); //编辑界面初始化完成
    this.OnEveryAddClick = new Cmn.Event(this); //当点击增加按钮时触发
    this.OnEveryAddInitComplete = new Cmn.Event(this); //增加界面初始化完成
    this.BeforeEveryDelete = new Cmn.Event(this); //在删除记录之前触发
    this.BeforeEveryAddSave = new Cmn.Event(this); //在增加保存之前触发
    this.BeforeEveryUpdateSave = new Cmn.Event(this); //在更新保存之前触发
    this.BeforeEverySave = new Cmn.Event(this); //在保存之前触发
    this.OnEveryCancel = new Cmn.Event(this); //在取消的时候触发

    /// <field name="Itfurl" type="String">接口地址</field>
    this.Itfurl= "";
    //用户表单列表
    this.UserFormList = new Array();
    //表单信息
    this.Cfg = {
        //选择器
        Selector: {
            MenuList: ".cmn-MenuList",
            ModuleList: ".cmn-ModuleList",
            SubMenuContainer: ".cmn-SubMenuContainer",

            LoginUserName: ".cmn-LoginUserName",
            LoginPassWord: ".cmn-LoginPassWord",
            LoginbtnLogin: ".cmn-LoginbtnLogin",
            btnExitLogin: ".cmn-btnExitLogin",
            //当前登录用户名
            CurLoginUserName: ".cmn-CurLoginUsername",

            UserFormDesc: ".cmn-UserFormDesc",
            UserFormTemplate: ".cmn-UserFormTemplate",

            UserFormMoudleDesc: ".cmn-UserFormMoudleDesc",
            SysName: ".cmn-SysName",
            CopyRight: ".cmn-CopyRight"
        },
        TemplatePath: ""
    };
    //html缓存（防止冲突）
    this.UserFormHtmlCache = {
        //默认用户表单模板
        DefaultUserFormTemplate: "",
        //默认增加修改模板
        DefaultAddEditTemplate: "",
        //记录列表的html代码
        RecContainerHtml: ""
    };

    var _Self = this;
    var _MenuTree = null; //保存菜单树

    //tab中每个项的html代码
    this.TabItemHtml = "";
    //----------------------------------------
    this.Init = function (itfUrl) {
        /// <summary>初始化整个页面,包括菜单模块、菜单、用户表单等</summary>
        /// <param name="itfUrl" type="String">接口地址</param>

        CmnMis.Frame.Itfurl = itfUrl; //保存接口地址

        CmnMis.Func.SetTitle(); //设置标题
        $(CmnMis.Frame.Cfg.Selector.SysName).html(CmnMis.Func.GetSysCfg("SysName"));
        $(CmnMis.Frame.Cfg.Selector.CopyRight).html(CmnMis.Func.GetSysCfg("CopyRight"));

        //保存默认模板
        _Self.UserFormHtmlCache.DefaultUserFormTemplate = $(CmnMis.Frame.Cfg.Selector.UserFormTemplate).html();
        _Self.UserFormHtmlCache.DefaultAddEditTemplate = $(CmnMis.Frame.Cfg.Selector.UserFormTemplate + " " +
            (new CmnMis.UserForm()).Selector.AddEditView).html();

        //增加menu的隐藏域
        $(CmnMis.Frame.Cfg.Selector.MenuList).append("<input type=\"hidden\" class=\"cmn-menu-UserFormID\" value=\"{userformid}\" />");

        $(CmnMis.Frame.Cfg.Selector.ModuleList).hide();

        //加载全局模板
        LoadGlobalTemplate(function () {
            //获取菜单
            CmnAjax.PostData(Cmn.Func.AddParamToUrl(itfUrl, "method=GetMenu"),
                { "UserFormModuleID": Cmn.Func.GetParamFromUrl("UserFormModuleID") }, function (data) {
                CmnMis.Func.IsLoginFromAjax(data);

                //保存UserFormInfo
                CmnMis.Frame.UserFormList.length = 0; //清空


                var TraversalMenuTree = function (menuArray, rootModule) {
                    /// <summary>遍历菜单树，生成用户表单</summary>

                    for (var _i = 0; _i < menuArray.length;_i++){
                        if (menuArray[_i]["Sons"]) { //说明有子模块
                            TraversalMenuTree(menuArray[_i]["Sons"], rootModule ? rootModule : menuArray[_i]);
                        }

                        var _userFormList = null;
                        var _rootModule = rootModule;

                        if (menuArray[_i]["UserForms"]) { //说明有用户表单列表
                            _userFormList = menuArray[_i]["UserForms"];
                            if (!_rootModule) { _rootModule = menuArray[_i]; }
                        }
                          
                        if (_userFormList != null) {
                            for (var _k = 0; _k < _userFormList.length; _k++) {
                                var _userFormInf = new CmnMis.UserForm();

                                _userFormInf.UserFormID = _userFormList[_k]["UserFormID"];
                                _userFormInf.UserFormDesc = _userFormList[_k]["FormDesc"];
                                _userFormInf.UserFormIcon = Cmn.Func.AddSiteRoot(_userFormList[_k]["UserFormIcon"]);

                                _userFormInf.ModuleDesc = menuArray[_i]["ModuleDesc"];
                                _userFormInf.ModuleID = menuArray[_i]["ModuleID"];
                                _userFormInf.ModuleIcon = (menuArray[_i]["ModuleIcon"] == undefined ? "" :
                                    Cmn.Func.AddSiteRoot(menuArray[_i]["ModuleIcon"]));

                                _userFormInf.RootModuleDesc = _rootModule["ModuleDesc"];
                                _userFormInf.RootModuleID = _rootModule["ModuleID"];
                                _userFormInf.RootModuleIcon = (_rootModule["ModuleIcon"] == undefined ? "" :
                                    Cmn.Func.AddSiteRoot(_rootModule["ModuleIcon"]));

                                _userFormInf.TableName = _userFormList[_k]["TableName"];
                                _userFormInf.ListTemplateFileName = _userFormList[_k]["ListTpl"];
                                _userFormInf.EditTemplateFileName = _userFormList[_k]["EditTpl"];
                                _userFormInf.JsTemplateFileName = _userFormList[_k]["JsTpl"];

                                if (_userFormList[_k]["PageSize"] == null) { _userFormInf.RecPageSize = 15; }
                                else { _userFormInf.RecPageSize = _userFormList[_k]["PageSize"]; }

                                _userFormInf.ItfUrl = itfUrl;
                                _userFormInf.UserFormUrl = _userFormList[_k]["FormUrl"];

                                if (_userFormList[_k]["IsShow"] != undefined && (_userFormList[_k]["IsShow"] == "0"
                                    || _userFormList[_k]["IsShow"].toLowerCase() == "false")) {
                                    _userFormInf.IsShowInMenu = false;
                                }
                                else { _userFormInf.IsShowInMenu = true; }

                                CmnMis.Frame.UserFormList[CmnMis.Frame.UserFormList.length] = _userFormInf;
                            }
                        }
                    }
                }

                _MenuTree = data.data; //保存菜单树
                TraversalMenuTree(data.data);

                ////for (var _i = 0; _i < data.data.length; _i++) {
                ////    var _userFormInf = new CmnMis.UserForm();

                ////    _userFormInf.UserFormID = data.data[_i].userformid;
                ////    _userFormInf.UserFormDesc = data.data[_i].formdesc;
                ////    _userFormInf.UserFormIcon = data.data[_i].userform_icon;
                ////    _userFormInf.ModuleDesc = data.data[_i].userformmoduledesc;
                ////    _userFormInf.ModuleID = data.data[_i].userformmoduleid;
                ////    _userFormInf.ModuleIcon = (data.data[_i].userformmodule_icon == undefined ? "" : data.data[_i].userformmodule_icon);

                ////    if (data.data[_i].RootModuleID != "" && data.data[_i].RootModuleID != null) { //有根用户表单模块
                ////        _userFormInf.RootModuleDesc = data.data[_i].RootModuleDesc;
                ////        _userFormInf.RootModuleID = data.data[_i].RootModuleID;
                ////        _userFormInf.RootModuleIcon = (data.data[_i].RootModuleIcon == undefined ? "" : data.data[_i].RootModuleIcon);
                ////    }
                ////    else if (data.data[_i].SecondModuleID != "" && data.data[_i].SecondModuleID != null) {
                ////        _userFormInf.RootModuleDesc = data.data[_i].SecondModuleDesc;
                ////        _userFormInf.RootModuleID = data.data[_i].SecondModuleID;
                ////        _userFormInf.RootModuleIcon = (data.data[_i].SecondModuleIcon == undefined ? "" : data.data[_i].SecondModuleIcon);
                ////    }
                ////    else { //没有根用户表单模块的话就默认自己为根模块
                ////        _userFormInf.RootModuleDesc = data.data[_i].userformmoduledesc;
                ////        _userFormInf.RootModuleID = data.data[_i].userformmoduleid;
                ////        _userFormInf.RootModuleIcon = (data.data[_i].userformmodule_icon == undefined ? "" : data.data[_i].userformmodule_icon);
                ////    }

                ////    _userFormInf.TableName = data.data[_i].tablename;
                ////    _userFormInf.ListTemplateFileName = data.data[_i].ListTemplateFileName;
                ////    _userFormInf.EditTemplateFileName = data.data[_i].EditTemplateFileName;
                ////    _userFormInf.JsTemplateFileName = data.data[_i].JsTemplateFileName;


                ////    if (data.data[_i].pagesize == null) { _userFormInf.RecPageSize = 15; }
                ////    else { _userFormInf.RecPageSize = data.data[_i].pagesize; }

                ////    _userFormInf.ItfUrl = itfUrl;
                ////    _userFormInf.UserFormUrl = data.data[_i].formurl;

                ////    if (data.data[_i].isshowinmenu != undefined && (data.data[_i].isshowinmenu == "0"
                ////        || data.data[_i].isshowinmenu.toLowerCase() == "false")) {
                ////        _userFormInf.IsShowInMenu = false;
                ////    }
                ////    else { _userFormInf.IsShowInMenu = true; }

                ////    CmnMis.Frame.UserFormList[CmnMis.Frame.UserFormList.length] = _userFormInf;
                ////}

                //注释掉了，主要是由于触发了两次用户表单的显示
                //if (CmnMis.Frame.UserFormList.length > 0) { CmnMis.UserForm.ShowUserForm(CmnMis.Frame.UserFormList[0].UserFormID); }


                InitMenu();

                //显示当前登录用户名
                CmnAjax.PostData(Cmn.Func.AddParamToUrl(itfUrl, "method=GetLoginUserName"), "{}", function (data) {
                    $(CmnMis.Frame.Cfg.Selector.CurLoginUserName).html("用户：" + data.UserName);
                });


                //绑定退出登录
                $(CmnMis.Frame.Cfg.Selector.btnExitLogin).unbind("click").bind("click", function () {
                    CmnAjax.PostData(Cmn.Func.AddParamToUrl(itfUrl, "method=ExitLogin"), "{}", function (data) {
                        if (data.IsSuccess == "1") {
                            window.location.href = "Login.html?SysName=" + Cmn.Func.GetParamFromUrl("SysName", window.location.href);
                        }
                        else { Cmn.alert("退出登录错误！错误信息：" + data.ErrMsg); }
                    });
                });

                //框架加载完成事件
                if (CmnMis.Frame.EventFrameInitComplete != null) { CmnMis.Frame.EventFrameInitComplete(); }
                CmnMis.Frame.OnFrameInitComplete.Trigger();
            });
        });
    };
    //----------------------------------------
    var LoadGlobalTemplate = function(onComplete){
        /// <summary>加载全局js,html模板</summary>

        CmnMis.TableOpt.GetData("cmn_template", { "Condition": "[template_type_id]=5 or [template_type_id]=6" }, false, function (data) {
            for (var _i = 0; _i < data.data.length; _i++) {
                if (data.data[_i]["template_type_id"] == "5") { //全局js模板
                    var _jsTpContent = CmnAjax.GetFile(Cmn.Func.AddParamToUrl(
                        data.data[_i]["file_name"], "r_=" + Math.random()));

                    eval(_jsTpContent + " \r\n//@ sourceURL=" + data.data[_i]["file_name"]);
                }
                else if(data.data[_i]["template_type_id"] == "6"){ //全局html模板
                    var _htmlTpContent = CmnAjax.GetFile(Cmn.Func.AddParamToUrl(
                      data.data[_i]["file_name"], "r_=" + Math.random()));

                    $(_htmlTpContent).insertAfter($("body").children().last());
                }
            }

            if (onComplete) { onComplete(); }
        });
    }
    //----------------------------------------
    var BindSubMenuClick = function () {
        /// <summary>绑定子菜单点击事件</summary>

        var _menuActiveClass = $(CmnMis.Frame.Cfg.Selector.SubMenuContainer).attr("CmnMenuActiveClass");
        

        //加菜单点击事件
        //删除记录
        $(".dat-formdesc").unbind("click").bind("click", function () {
            var _userFormID = "";

            var _tmpDom = $(this).parent();

            for (var _i = 0; _i < 4; _i++) {
                if (_tmpDom.find(".cmn-menu-UserFormID").length > 0) {
                    _userFormID = _tmpDom.find(".cmn-menu-UserFormID").val();
                    break;
                }

                _tmpDom = _tmpDom.parent();
            }


            if (_userFormID == "") { Cmn.Log("点击菜单的时候找不到对应的用户表单代码！"); return; }
            else {
                var _userFormInfo = CmnMis.Func.GetUserFormByID(_userFormID);

                if (_userFormInfo != null && _userFormInfo.UserFormUrl != "" && _userFormInfo.UserFormUrl!=null) {
                    if (_userFormInfo.UserFormUrl.indexOf("http:") >= 0) { window.open(_userFormInfo.UserFormUrl); }
                    else { eval(_userFormInfo.UserFormUrl); }
                }
                else { _Self.ShowUserForm(_userFormID); }

                //加上activeclass
                if (_menuActiveClass != "") {
                    $(CmnMis.Frame.Cfg.Selector.SubMenuContainer).find("."+_menuActiveClass).removeClass(_menuActiveClass);
                    $(this).parent().addClass(_menuActiveClass);
                }

                //画面滚到顶部
                //$(window).scrollTop(0);
            }
        });
    }
    //----------------------------------------
    var GetModuleByID = function (moduleID,menuArray) {
        /// <summary>获取某个模块代码对应的模块对象</summary>

        for (var _i = 0; _i < menuArray.length; _i++) {
            if (menuArray[_i]["ModuleID"] == moduleID) { return menuArray[_i]; }

            if (menuArray[_i]["Sons"]) { //说明有子模块
                var _moduleID = GetModuleByID(moduleID, menuArray[_i]["Sons"]);

                if (_moduleID != null) { return _moduleID; }
            }
        }

        return null;
    }
    //----------------------------------------
    var InitMenu = function () {
        /// <summary>初始化菜单</summary>

        //初始化模块
        //增加模块代码隐藏域
        $(CmnMis.Frame.Cfg.Selector.ModuleList).append("<input type=\"hidden\" class=\"cmn-menu-UserFormModuleID\" value=\"{userformmoduleid}\" />");

        var _moduleData = new Array();
        var _lastModuleID = "";

        //for (var _i = 0; _i < CmnMis.Frame.UserFormList.length; _i++) {
        //    if (CmnMis.Frame.UserFormList[_i].ModuleID != _lastModuleID && CmnMis.Frame.UserFormList[_i].IsShowInMenu==true) {
        //        _lastModuleID = CmnMis.Frame.UserFormList[_i].ModuleID;

        //        _moduleData[_moduleData.length] = {
        //            userformmoduledesc:CmnMis.Frame.UserFormList[_i].ModuleDesc ,
        //            userformmoduleid: CmnMis.Frame.UserFormList[_i].ModuleID,
        //            userformmoduleicon: CmnMis.Frame.UserFormList[_i].ModuleIcon
        //        };
        //    }
        //}

        for (var _i = 0; _i < _MenuTree.length; _i++) {
            _moduleData[_moduleData.length] = {
                userformmoduledesc: _MenuTree[_i].ModuleDesc,
                userformmoduleid: _MenuTree[_i].ModuleID,
                userformmoduleicon: _MenuTree[_i].ModuleIcon
            };
        }

        Cmn.FillData(CmnMis.Frame.Cfg.Selector.ModuleList, _moduleData );


        if ($(CmnMis.Frame.Cfg.Selector.ModuleList).find(CmnMis.Frame.Cfg.Selector.MenuList).length > 0) { //级联菜单
            //填充子菜单
            $(CmnMis.Frame.Cfg.Selector.ModuleList).each(function () {
                var _moduleID = $(this).find(".cmn-menu-UserFormModuleID").val();
                var _menuData = new Array();

                _module = GetModuleByID(_moduleID,_MenuTree);

                if (_module["UserForms"]) {
                    for (var _i = 0; _i < _module["UserForms"].length; _i++) {
                        if (_module["UserForms"][_i]["IsShow"] != undefined && (_module["UserForms"][_i]["IsShow"] == "0"
                                    || _module["UserForms"][_i]["IsShow"].toLowerCase() == "false")) {
                            
                        }
                        else {
                            _menuData[_menuData.length] = {
                                userformid: _module["UserForms"][_i].UserFormID,
                                formdesc: _module["UserForms"][_i].FormDesc,
                                userformicon: _module["UserForms"][_i].UserFormIcon
                            };
                        }
                    }
                }

                Cmn.FillData($(this).find(CmnMis.Frame.Cfg.Selector.MenuList), _menuData);

                _menuData.length = 0;

                if (_module["Sons"]) {
                    for (var _i = 0; _i < _module["Sons"].length; _i++) {
                        _menuData[_menuData.length] = {
                            userformmoduleid: _module["Sons"][_i].ModuleID,
                            userformmoduledesc: _module["Sons"][_i].ModuleDesc,
                            userformmoduleicon: _module["Sons"][_i].ModuleIcon
                        };
                    }
                }

                Cmn.FillData($(this).find(".cmn-SubModuleList"), _menuData);

                //for (var _i = 0; _i < CmnMis.Frame.UserFormList.length; _i++) {
                //    if ((CmnMis.Frame.UserFormList[_i].ModuleID == _moduleID || _moduleID == "") && 
                //        CmnMis.Frame.UserFormList[_i].IsShowInMenu==true) {
                //        _menuData[_menuData.length] = {
                //            userformid: CmnMis.Frame.UserFormList[_i].UserFormID,
                //            formdesc: CmnMis.Frame.UserFormList[_i].UserFormDesc,
                //            userformicon:CmnMis.Frame.UserFormList[_i].UserFormIcon
                //        };
                //    }
                //}

                //Cmn.FillData($(this).find(CmnMis.Frame.Cfg.Selector.MenuList), _menuData);
            });

            BindSubMenuClick();

            //模块点击事件绑定
            $(".dat-userformmoduledesc").unbind("click").bind("click", function () {
                var _userFormModuleID = "";

                var _tmpDom = $(this).parent();

                for (var _i = 0; _i < 4; _i++) {
                    if (_tmpDom.find(".cmn-menu-UserFormModuleID").length > 0) {
                        _userFormModuleID = _tmpDom.find(".cmn-menu-UserFormModuleID").val();
                        break;
                    }

                    _tmpDom = _tmpDom.parent();
                }

                if (_userFormModuleID == "") { Cmn.Log("点击菜单的时候找不到对应的用户表单模块代码！"); return; }
                else {
                    $(CmnMis.Frame.Cfg.Selector.SubMenuContainer).hide();
                    _tmpDom.find(CmnMis.Frame.Cfg.Selector.SubMenuContainer).slideDown(500);
                    _tmpDom.find(CmnMis.Frame.Cfg.Selector.SubMenuContainer).find(".dat-formdesc").eq(0).click();
                }
            });

            $(CmnMis.Frame.Cfg.Selector.ModuleList).find(".dat-userformmoduledesc").eq(0).click();
        }
        else { //一级二级分离的菜单(例如：一级菜单在头部，二级菜单在左侧)
            //为了兼容奖金宝自己加载菜单，不用显示默认用户表单，所以加了后面的判断
            if (CmnMis.Frame.UserFormList.length > 0 && $(CmnMis.Frame.Cfg.Selector.ModuleList).length > 0) {
                ShowSubMenu(CmnMis.Frame.UserFormList[0].RootModuleID);
            }


            //模块点击事件绑定
            $(".dat-userformmoduledesc").unbind("click").bind("click", function () {
                var _userFormModuleID = "";

                var _tmpDom = $(this).parent();

                for (var _i = 0; _i < 4; _i++) {
                    if (_tmpDom.find(".cmn-menu-UserFormModuleID").length > 0) {
                        _userFormModuleID = _tmpDom.find(".cmn-menu-UserFormModuleID").val();
                        break;
                    }

                    _tmpDom = _tmpDom.parent();
                }

                if (_userFormModuleID == "") { Cmn.Log("点击菜单的时候找不到对应的用户表单模块代码！"); return; }
                else { ShowSubMenu(_userFormModuleID); }
            });
        }

        $(CmnMis.Frame.Cfg.Selector.ModuleList).slideDown(500);
    }
    //----------------------------------------
    var ShowSubMenu = function (moduleID) {
        /// <summary>显示菜单</summary>
        /// <param name="moduleID" type="String">模块代码</param>

        $(CmnMis.Frame.Cfg.Selector.MenuList).hide();

        var _menuData = "";
        var _firstUserFormID = "";
        var _userFormMoudleDesc = "";

        for (var _i = 0; _i < CmnMis.Frame.UserFormList.length; _i++) {
            if ((CmnMis.Frame.UserFormList[_i].ModuleID == moduleID || moduleID == "") &&
                CmnMis.Frame.UserFormList[_i].IsShowInMenu==true) {
                if (_userFormMoudleDesc == "") { _userFormMoudleDesc = CmnMis.Frame.UserFormList[_i].ModuleDesc; }

                if (_menuData != "") { _menuData += ","; }

                _menuData += "{userformid:'" + CmnMis.Frame.UserFormList[_i].UserFormID + "',formdesc:'" +
                    CmnMis.Frame.UserFormList[_i].UserFormDesc + "'}";

                if (_firstUserFormID == "") { _firstUserFormID = CmnMis.Frame.UserFormList[_i].UserFormID; }
            }
        }

        Cmn.FillData(CmnMis.Frame.Cfg.Selector.MenuList, eval("[" + _menuData + "]"));

        //显示模块名称
        $(CmnMis.Frame.Cfg.Selector.UserFormMoudleDesc).html(_userFormMoudleDesc);

        if (_firstUserFormID != "") { _Self.ShowUserForm(_firstUserFormID); } //默认显示第一个用户表单

        BindSubMenuClick();

        $(CmnMis.Frame.Cfg.Selector.MenuList).show(600);
    };
    //----------------------------------------
    this.InitLogin = function (itfUrl, returnFunction) {
        /// <summary>初始化登录界面</summary>
        /// <param name="itfUrl" type="String">接口地址</param>
        /// <param name="returnFunction" type="function">回调函数</param>

        CmnMis.Frame.Itfurl = itfUrl; //保存接口地址

        CmnMis.Func.SetTitle(); //设置标题
        $(CmnMis.Frame.Cfg.Selector.CopyRight).html(CmnMis.Func.GetSysCfg("CopyRight"));

        $(CmnMis.Frame.Cfg.Selector.LoginbtnLogin).unbind("click").bind("click", function () {
            var _userName = $(CmnMis.Frame.Cfg.Selector.LoginUserName).val();
            var _passWord = $(CmnMis.Frame.Cfg.Selector.LoginPassWord).val();

            if (_userName == "") { Cmn.alert("用户名不能为空！"); return; }
            if (_passWord == "") { Cmn.alert("密码不能为空！"); return; }

            CmnAjax.PostData(Cmn.Func.AddParamToUrl(itfUrl, "method=Login"), "{UserName:'" + _userName + "',PassWord:'" + _passWord + "'}", function (data) {
                if (data.IsSuccess == "0") {
                    if (data.ErrMsg.indexOf("软件序列号非法") >= 0) {
                        Cmn.alert("软件序列号非法！");
                        window.location.href = "Tools/SetSN.htm?SysName=" + Cmn.Func.GetParamFromUrl("SysName");
                    }
                    else { Cmn.alert("登录错误！错误信息：" + data.ErrMsg); }
                }

                if (returnFunction) { returnFunction(data); }
            });
        });

        window.onload = function () {
            //默认光标在用户名输入框
            $(CmnMis.Frame.Cfg.Selector.LoginUserName).focus();
        }
    };
    //----------------------------------------
    this.ActiveUserForm= function (userFormInfo,isHideOther,isShowAnimate) {
        /// <summary>激活某个用户表单</summary>
        /// <param name="userFormInfo" type="CmnMis.UserForm">用户表单信息</param>
        /// <param name="isHideOther" type="bool">是否隐藏其他的用户表单，默认为是</param>

        if (isHideOther == null || isHideOther == undefined) { isHideOther = true; }
        if (isShowAnimate == undefined || isShowAnimate == null) { isShowAnimate = true; }

        //保存tab的html代码
        if (CmnMis.Frame.TabItemHtml == "") { CmnMis.Frame.TabItemHtml = Cmn.Func.GetOuterHtml($(".cmn-tab-item")); }

        if (isHideOther) { CmnMis.Frame.HideUserForm(); }

        //清掉所有的用户表单dom,为了解决ie8下面，菜单打开多了会报错的问题
        $(CmnMis.Frame.Cfg.Selector.UserFormTemplate + ":gt(0)").remove();

        var _userForm = $(userFormInfo.GetUserFormSelector());

        if (_userForm.length > 0) {
            if (isShowAnimate == true) { _userForm.slideDown(500); }
            else { _userForm.show(); }
        }
        else { //没有,需要新建
            if ($(".cmn-UserFormTemplate[name='cmn-UserForm']").length > 0) { //存在默认的用户表单，直接用
                $(".cmn-UserFormTemplate[name='cmn-UserForm']").attr("name", "cmn-UserForm" + userFormInfo.UserFormID);

                //已经隐藏掉了，需要显示出来
                $(userFormInfo.GetUserFormSelector()).show();
            }
            else {
                $(CmnMis.Frame.Cfg.Selector.UserFormTemplate + ":first").parent().append(
                    "<div><div class=\"cmn-UserFormTemplate\" name=\"cmn-UserForm"+userFormInfo.UserFormID+"\">" + 
                    _Self.UserFormHtmlCache.DefaultUserFormTemplate + "</div></div>");                
            }

            //处理tab
            if ($(".cmn-tab-item-id").length <= 0) { $(".cmn-tab-item:first").parent().append(CmnMis.Frame.TabItemHtml); }

            var _tabItem = $(".cmn-tab-item-id");

            _tabItem.removeClass("cmn-tab-item-id");
            _tabItem.addClass("cmn-tab-item" + userFormInfo.UserFormID);
            _tabItem.attr("UserFormID", userFormInfo.UserFormID);

            var _setTimeOutTabItemClick = null; //存放单击时候的timeout

            _tabItem.children("a").unbind("click").bind("click", function (e) {
                clearTimeout(_setTimeOutTabItemClick);
                _setTimeOutTabItemClick = setTimeout(function () {
                    _Self.ShowUserForm(userFormInfo.UserFormID, null, false);
                }, 300);
            });


            //双击关闭用户表单
            _tabItem.children("a").unbind("dblclick").bind("dblclick", function () {
                clearTimeout(_setTimeOutTabItemClick);
                //alert("双击关闭：" + userFormInfo.UserFormID);
                CmnMis.Frame.CloseUserForm(userFormInfo);
            });

            //鼠标进入事件
            _tabItem.mouseenter(function () {
                _tabItem.children("a").html(_tabItem.children("a").html() + "<span class='cmn-CloseUserForm' UserFormID='" +
                    userFormInfo.UserFormID + "' style='font-size:16px;font-weight:bold;'> × </span>");

                $(".cmn-CloseUserForm").unbind("click").bind("click", function (e) {
                    e.preventDefault();
                    //alert("关闭窗口：" + $(this).attr("UserFormID"));
                    CmnMis.Frame.CloseUserForm(userFormInfo);

                    return false;
                });
            });

            //鼠标离开事件
            _tabItem.mouseleave(function () {
                var _tmpAContent = _tabItem.children("a").html();

                _tmpAContent = _tmpAContent.substring(0, _tmpAContent.toLowerCase().indexOf("<span"));

                _tabItem.children("a").html(_tmpAContent);
            });


            $(".cmn-tab-item" + userFormInfo.UserFormID + " " + CmnMis.Frame.Cfg.Selector.UserFormDesc).html(userFormInfo.UserFormDesc);
        }


        //设置当前用户表单的tab为选中
        $(".cmn-tab-item a").removeClass("Selected");
        $(".cmn-tab-item a").addClass("NoSelected");
        $(".cmn-tab-item" + userFormInfo.UserFormID + " a").removeClass("NoSelected");
        $(".cmn-tab-item" + userFormInfo.UserFormID + " a").addClass("Selected");
    };
    //----------------------------------------
    this.CloseUserForm = function (userFormInfo) {
        /// <summary>关闭用户表单</summary>
        /// <param name="userFormInfo" type="CmnMis.UserForm">用户表单</param>

        if ($(".cmn-UserFormTemplate").length <= 1) { Cmn.alert("不能关闭！至少要留一个用户表单。"); }
        else {
            $(userFormInfo.GetUserFormSelector()).remove();
            $(".cmn-tab-item" + userFormInfo.UserFormID).remove();

            if (userFormInfo == CmnMis.CurUserFormInfo) { //关闭的是当前激活的用户表单
                _Self.ShowUserForm($(".cmn-tab-item").first().attr("UserFormID"), null, false);
            }
        }
    };
    //----------------------------------------
    this.HideUserForm= function (userFormInfo) {
        /// <summary>隐藏用户表单</summary>
        /// <param name="userFormInfo" type="CmnMis.UserForm">用户表单信息(如果不传隐藏所有的用户表弟那)</param>

        if (userFormInfo == null || userFormInfo == undefined) {
            $(CmnMis.Frame.Cfg.Selector.UserFormTemplate + "[display!='none']").hide();
        }
        else { $(userFormInfo.GetUserFormSelector()).hide(); }
    };
    //----------------------------------------
    this.IsExistUserForm= function (userFormInfo) {
        /// <summary>判断用户表单是否存在</summary>
        /// <param name="userFormInfo" type="CmnMis.UserForm">用户表单信息</param>
        /// <returns type="bool" />

        if ($(userFormInfo.GetUserFormSelector()).length > 0) { return true; }
        else { return false; }
    };
    //----------------------------------------
    //显示用户表单
    this.ShowUserForm = function (userFormID, viewStateData, isReload) {
        /// <summary>显示用户表单</summary>
        /// <param name="userFormID" type="String">用户表单代码</param>
        /// <param name="viewStateData" type="json">刚显示的时候处于什么状态及初始数据，例如在增加或修改记录的时候需要初始化的数据。格式例如：{ViewState:"Add",Condition:"",ReturnUserFormID:"",data:{"FieldName":"FieldValue"}}</param>
        /// <param name="isReload" type="bool">是否重新加载，如果为是的话，即使用户表单已经存在也会重新加载（默认为是）</param>

        var _userFormInf = CmnMis.Func.GetUserFormByID(userFormID);

        if (_userFormInf == null) { return false; }

        if (CmnMis.CurUserForm!=null && CmnMis.CurUserForm != _userFormInf) {
            if (CmnMis.CurUserForm.EventOnLeave) { CmnMis.CurUserForm.EventOnLeave(); }
        }

        //设置当前显示的用户表单 
        CmnMis.CurUserForm = _userFormInf;

        if (isReload == null || isReload == undefined) { isReload = true; }

        if (isReload == false) { //不需要重新加载
            //如果已经存在，显示就ok了
            if (_Self.IsExistUserForm(_userFormInf)) {
                _Self.ActiveUserForm(_userFormInf);

                return;
            }
        }

        _userFormInf.Show(viewStateData, isReload);
    };
    //-----------------------------------------------
}();


