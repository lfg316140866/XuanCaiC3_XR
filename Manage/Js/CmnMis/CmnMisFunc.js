/// <reference path="CmnMis.js" />
/// <reference path="CmnMisUserForm.js" />


//检查CmnMis有没有定义，如果没有定义就定义下
if (typeof (CmnMis) == "undefined") { CmnMis = {}; }

/// <summary>CmnMis用到的函数库</summary>
CmnMis.Func = {
    //获取用户表单和方法对应的接口地址
    GetItfUrl: function (userForm, method) {
        /// <summary>获取用户表单和方法对应的接口地址</summary>
        /// <param name="userForm" type="CmnMis.UserForm">用户表单信息</param>
        /// <param name="method" type="String">方法名</param>

        return Cmn.Func.AddParamToUrl(Cmn.Func.AddParamToUrl(userForm.ItfUrl, "CurUserFormID=" +
            userForm.UserFormID), "method=" + method);
    },
    //设置控件的值
    //SetControlValue: function (selector, controlType, value) {
    //    if (controlType == CmnMis.Cfg.ControlType.CheckBox) {
    //        if (value == "1") { $(selector).attr("checked", true); }
    //        else { $(selector).attr("checked", false); }
    //    }
    //    else if (controlType == CmnMis.Cfg.ControlType.RadioButton) {
    //        $(selector+"[value="+value+"]").attr("checked", true);
    //    }
    //    else {  $(selector).val(value); }
    //},
    //判断ajax返回是否是未登录状态
    IsLoginFromAjax: function (data) {
        /// <summary>判断ajax返回是否是未登录状态</summary>
        /// <param name="data" type="json">ajax返回的json数据</param>
        /// <returns type="bool" />

        if (data.IsSuccess == "0" && data.HasNoLogin != undefined && data.HasNoLogin == "1") {
            Cmn.alert("由于长时间未操作，需要重新登录！");
            window.location.href = Cmn.Func.GetRoot()+ "Manage/Login.html?SysName=" + Cmn.Func.GetParamFromUrl("SysName", window.location.href);

            return false;
        }
        else { return true; }
    },
    //设置网页标题
    SetTitle: function () {
        /// <summary>设置网页标题</summary>
        document.title = CmnMis.Func.GetSysCfg("SysName") + "管理后台";
    },
    
    //根据用户表单代码获取用户表单信息
    GetUserFormByID: function (userFormID) {
        /// <summary>根据用户表单代码获取用户表单信息</summary>
        /// <param name="userFormID" type="String">用户表单代码</param>
        /// <returns type="CmnMis.UserForm" />

        //找到对应的userForm
        for (var _i = 0; _i < CmnMis.Frame.UserFormList.length; _i++) {
            if (CmnMis.Frame.UserFormList[_i].UserFormID == userFormID) {
                return CmnMis.Frame.UserFormList[_i];
            }
        }

        return null;
    },
    GetUserFormIDByDesc:function(userFormDesc) {
        /// <summary>通过用户表单名称获取用户表单代码(注：此函数请慎用,一般用于框架固定名称的表单，如果几个表单名称相同拿到的可能是不对的)</summary>
        /// <param name="userFormDesc" type="String">用户表单名称</param>
        /// <returns type="String" />

        var _userFormID = "";

        //找到对应的userForm
        for (var _i = 0; _i < CmnMis.Frame.UserFormList.length; _i++) {
            if (CmnMis.Frame.UserFormList[_i].UserFormDesc == userFormDesc) {
                _userFormID = CmnMis.Frame.UserFormList[_i].UserFormID;
                break;
            }
        }

        if (_userFormID == "") {
            CmnMis.TableOpt.GetData("cmn_usr_userform", { Condition: "[formdesc]='" + userFormDesc + "'" }, true, function (data) {
                if (data.data.length > 0) {
                    _userFormID = data.data[0]["userformid"];
                }
            });
        }

        return _userFormID;
    },
    //存放设置用户表单字段的用户表单代码，避免重复访问服务器
    SetUserFormCol_UserFormID: "",
    ShowSetUserFormCol: function (userFormID, returnUserFormID) {
        /// <summary>显示设置用户表单字段界面</summary>
        /// <param name="userFormID" type="String">需要被管理的用户表单的用户表单代码</param>
        /// <param name="returnUserFormID" type="String">返回用户表单代码</param>

        if(CmnMis.Func.SetUserFormCol_UserFormID=="") { 
            CmnMis.Func.SetUserFormCol_UserFormID = CmnMis.Func.GetUserFormIDByDesc("表单字段配置");

            if (CmnMis.Func.SetUserFormCol_UserFormID == "") {
                Cmn.alert("找不到用户表单名称为'表单字段配置'的用户表单，请到用户表单管理中检查表单名称。");
                return;
            }
        }

        CmnMis.Frame.ShowUserForm(CmnMis.Func.SetUserFormCol_UserFormID, 
            { ViewState: CmnMis.CurUserForm.Cfg.ViewState.RecList, Condition: "[userformid]=" + userFormID,
                ReturnUserFormID:returnUserFormID });
    },
    //用户表单列表
    DetailUserFormList: new Array(),
    GetDetailUserFormInfoByID:function(userFormID) {
        /// <summary>根据用户表单代码获取明细用户表单信息</summary>
        /// <param name="userFormID" type="String">用户表单代码</param>
        /// <returns type="CmnMis.UserForm" />

        var _retUserFormInfo = null;

        //先充缓存中找
        for (var _i = 0; _i < CmnMis.Func.DetailUserFormList.length; _i++) {
            if (CmnMis.Func.DetailUserFormList[_i].UserFormID == userFormID) {
                _retUserFormInfo = CmnMis.Func.DetailUserFormList[_i];
                break;
            }
        }

        if (_retUserFormInfo == null) { //如果缓存中没有的话需要加载
            var _data = CmnAjax.GetData(InterfaceUrl + "?method=GetUserFormInfo", "{UserFormID:'" + userFormID + "'}");

            CmnMis.Func.IsLoginFromAjax(_data);

            _retUserFormInfo = new CmnMis.UserForm();

            _retUserFormInfo.IsDetailUserForm = true; //是明细用户界面
            _retUserFormInfo.ParentUserFormID = CmnMis.CurUserForm.UserFormID; //设置父用户界面代码
            _retUserFormInfo.ColInfo = _data.data;
            _retUserFormInfo = CmnMis.Func.CheckColInfo(_retUserFormInfo);

            _retUserFormInfo.KeyColName = _data.KeyColName;

            _retUserFormInfo.ItfUrl = InterfaceUrl;
            _retUserFormInfo.UserFormUrl = _data.formurl;

            _retUserFormInfo.UserFormID = _data.userformid;
            _retUserFormInfo.UserFormDesc = _data.formdesc;
            _retUserFormInfo.ModuleDesc = _data.userformmoduledesc;
            _retUserFormInfo.ModuleID = _data.userformmoduleid;
            _retUserFormInfo.TableName = _data.tablename;
            _retUserFormInfo.ListTemplateFileName = _data.ListTemplateFileName;
            _retUserFormInfo.EditTemplateFileName = _data.EditTemplateFileName;

            //获取权限
            _retUserFormInfo.AllowAdd = _data["AllowAdd"];
            _retUserFormInfo.AllowDell = _data["AllowDell"];
            _retUserFormInfo.AllowModify = _data["AllowModify"];
            _retUserFormInfo.AllowToExcel = _data["AllowToExcel"];

            if (_data.pagesize == null) { _retUserFormInfo.RecPageSize = 15; }
            else { _retUserFormInfo.RecPageSize = _data.pagesize; }

            //获取记录列表需要显示的字段
            for (var _i = 0; _i < _retUserFormInfo.ColInfo.length; _i++) {
                if (_retUserFormInfo.ColInfo[_i].IsShowInGrid == "1") {
                    _retUserFormInfo.ColInfoRecList[_retUserFormInfo.ColInfoRecList.length] = _retUserFormInfo.ColInfo[_i];
                }
            }

            //生成TableCache
            _retUserFormInfo.TableCache = new CmnMis.TableCache();

            CmnMis.Func.DetailUserFormList[CmnMis.Func.DetailUserFormList.length] = _retUserFormInfo;
        }
        
        return _retUserFormInfo;
    },
    //获取系统配置
    GetSysCfg: function (cfgKey) {
        /// <summary>获取系统配置</summary>
        /// <param name="cfgKey" type="String">键</param>
        /// <returns type="String" />

        if (cfgKey == "" || cfgKey == undefined || cfgKey == null) { return ""; }

        var _cfgValue = CmnAjax.GetData(Cmn.Func.AddParamToUrl(CmnMis.Func.GetCmnItfUrl(), "method=GetSysCfg"), "{CfgKey:'" + cfgKey + "'}");

        if (_cfgValue != undefined && _cfgValue.IsSuccess == "1") { return _cfgValue.CfgValue; }
        else { return ""; }
    },
    //提交数据
    SubmitData: function (containerSelector, methodName, param, checkRegular, errDispSelector, submitingHintSelector,
        successFunc, errorFunc) {
        /// <summary>提交数据</summary>
        /// <param name="containerSelector" type="String">容器选择器</param>
        /// <param name="methodName" type="String">方法名称</param>
        /// <param name="param" type="String">参数</param>
        /// <param name="checkRegular" type="String">验证正则</param>
        /// <param name="errDispSelector" type="String">错误显示容器选择器</param>
        /// <param name="submitingHintSelector" type="String">显示正在提交提示的选择器</param>
        /// <param name="successFunc" type="function">执行成功回调函数</param>
        /// <param name="errorFunc" type="function">执行失败回调函数</param>
         
        if (CmnMis.UI.Control.VerifyControlInput(containerSelector, errDispSelector,
            function (errMsg) {
                if (errorFunc) {
                    if (!errorFunc(errMsg) === false) { Cmn.alert(errMsg.Msg); }
                }
                else { Cmn.alert(errMsg.Msg); }

            }
        ) === false) { return; }

        var _data = CmnMis.UI.Control.GetValueList(containerSelector);

        //在data中加入param
        if (param && param != "") {
            //param = Cmn.Func.Trim(param);
            //param = param.substring(1);
            //param = param.substring(0, param.length - 1);

            //if (param != "") { _data = _data + "," + param; }

            if (Cmn.Func.IsString(param)) { param = eval("(" + param + ")"); }

            $.extend(_data, param);
        }

        //_data = "{" + _data + "}";

        CmnAjax.PostData(methodName, _data, function (data) {
            CmnMis.Func.IsLoginFromAjax(data);

            if (successFunc != null && successFunc != undefined) { successFunc(data); }
        }, errorFunc);
    },
    CheckColInfo: function (userforminfo) {
        /// <summary>检查字段信息是否合法</summary>
        /// <param name="userforminfo" type="CmnMis.UserForm">用户表信息</param>

        $.each(userforminfo.ColInfo, function (index, item) {
            if (item.ControlCfg == "") { item.ControlCfg = {}; }
            else if (typeof item.ControlCfg == "string" ) {
                userforminfo.ColInfo[index].ControlCfg = eval("(" + item.ControlCfg + ")");

                ////把是否是必须的放到ControlCfg中，主要为了解决select等空选项问题
                //if (userforminfo.ColInfo[index].ControlCfg != null) {
                //    userforminfo.ColInfo[index].ControlCfg.IsRequired = userforminfo.ColInfo[index].IsRequired;
                //}
            }

            //宽度加上px
            userforminfo.ColInfo[index].ColWidth = userforminfo.ColInfo[index].ColWidth + "px";

            //如果控件配置中没有默认值，就取字段中的配置值
            if (userforminfo.ColInfo[index].ControlCfg["Default"] == undefined) {
                if (userforminfo.ColInfo[index].DefaultValue != "") {
                    userforminfo.ColInfo[index].ControlCfg["Default"] = userforminfo.ColInfo[index].DefaultValue;
                }
            }

            //复制正则信息到控件配置中
            userforminfo.ColInfo[index].ControlCfg["IsRequired"] = userforminfo.ColInfo[index].IsRequired;
            userforminfo.ColInfo[index].ControlCfg["RegexContent"] = userforminfo.ColInfo[index].RegexContent;
            userforminfo.ColInfo[index].ControlCfg["RegexErrorMsg"] = userforminfo.ColInfo[index].RegexErrorMsg;
            userforminfo.ColInfo[index].ControlCfg["ColTitle"] = userforminfo.ColInfo[index].ColTitle;
            userforminfo.ColInfo[index].ControlCfg["ColHint"] = userforminfo.ColInfo[index].ColHint;

            //设置主键为不是必填字段
            if (userforminfo.KeyColName == userforminfo.ColInfo[index].ColName) {
                userforminfo.ColInfo[index].ControlCfg["IsRequired"] = "0";
            }
        });

        return userforminfo;
    },
    GetLoginUserID: function () {
        /// <summary>获取当前登录用户代码</summary>

        var _data = CmnAjax.GetData(Cmn.Func.AddParamToUrl(CmnMis.Func.GetCmnItfUrl(), "method=GetUserID"));

        return _data.UserID;
    },
    //当前用户是否是系统管理员,缓存，主要是为了加快速度
    CurUserIsSysAdmin: null,
    IsSysAdmin: function () {
        /// <summary>是否是系统管理员</summary>

        if (CmnMis.Func.CurUserIsSysAdmin == null) {
            var _data = CmnAjax.GetData(Cmn.Func.AddParamToUrl(CmnMis.Func.GetCmnItfUrl(), "method=IsSysAdmin"));

            if (_data["IsSysAdmin"] == "1") { CmnMis.Func.CurUserIsSysAdmin = true; }
            else { CmnMis.Func.CurUserIsSysAdmin = false; }
        }

        return CmnMis.Func.CurUserIsSysAdmin;
    },
    //默认接口地址
    CmnInterfaceUrl: InterfaceUrl,
    //是否已经设置过默认接口地址
    HasSetCmnInterfaceUrl: false,
    GetCmnItfUrl: function (methodName) {
        /// <summary>获取默认接口地址</summary>
        
        //解决，InterfaceUrl后设置的问题
        if (CmnMis.Func.HasSetCmnInterfaceUrl == false) {
            CmnMis.Func.CmnInterfaceUrl = InterfaceUrl;
            CmnMis.Func.HasSetCmnInterfaceUrl = true;
        }

        if (CmnMis.Func._Cmn == "" || CmnMis.Func.CmnInterfaceUrl == undefined) {
            CmnMis.Func.SetCmnItfUrl(InterfaceUrl);
        }

        var _retUrl = CmnMis.Func.CmnInterfaceUrl;

        if (methodName != undefined && methodName != "") { //有方法名的话，加上方法名
            _retUrl = Cmn.Func.AddParamToUrl(_retUrl,"method="+methodName);
        }

        return _retUrl;
    },
    SetCmnItfUrl: function (interfaceUrl) {
        /// <summary>设置默认接口地址</summary>
        /// <param name="interfaceUrl" type="String">默认接口地址</param>

        CmnMis.Func.CmnInterfaceUrl = interfaceUrl;
        CmnMis.Func.HasSetCmnInterfaceUrl = true;
    },
    HasRight: function (userFormIDOrUserFormInfo,rightName) {
        /// <summary>判断是否有某个特殊权限</summary>
        /// <param name="userFormIDOrUserFormInfo" type="CmnMis.UserForm">用户表单代码或UserFormInfo</param>
        /// <param name="rightName" type="String">权限名</param>
        /// <returns type="bool" />

        var _userFormID = "";

        if (Cmn.Func.IsString(userFormIDOrUserFormInfo)) { _userFormID = userFormIDOrUserFormInfo; }
        else { _userFormID = userFormIDOrUserFormInfo.UserFormID; }

        var _retData = CmnAjax.GetData(CmnMis.Func.GetCmnItfUrl("HasRight"), { "UserFormID": _userFormID, "RightName": rightName });

        if (_retData != undefined && _retData.HasRight == "1") { return true; }
        else { return false; }
    },
    Translate: function (txt) {
        /// <summary>翻页文本</summary>
        /// <param name="txt" type="String">需要翻译的文本</param>

        var _url = "method=Translate";

        _url = Cmn.Func.AddParamToUrl(CmnMis.Func.GetCmnItfUrl(), _url);

        _retData = CmnAjax.GetData(_url, { "Txt": txt });

        return _retData.TranslateTxt;
    },
    LanguageType: { Chinese: "chinese", English: "english" },
    CurLanguageType:"", //当前语言类型
    GetCurLanguage: function () {
        /// <summary>获取当前语言</summary>
        /// <returns type="CmnMis.Func.LanguageType" />

        if (CmnMis.Func.CurLanguageType === "") {
            _retData = CmnAjax.GetData(Cmn.Func.AddParamToUrl(CmnMis.Func.GetCmnItfUrl(), "method=GetCurLanguageType"));
            CmnMis.Func.CurLanguageType = _retData.CurLanguageType;
        }

        return CmnMis.Func.CurLanguageType;
    },
    FormatString: function (str,format) {
        /// <summary>格式化字符串</summary>
        /// <param name="str" type="String">需要被格式化的字符串</param>
        /// <param name="format" type="String">字符串格式</param>

        var _retVal = str;

        if (_retVal == "") { return _retVal; }

        //处理老后台中的.net中的格式例如：{0:yyyy-MM-dd}
        format = Cmn.Func.Trim(format.replace("{0:","").replace("}",""));

        if (format.indexOf("-") > 0 || format.indexOf("/") > 0) { //是日期
            _retVal = CmnMis.Func.FormatDate(str, format);
        }
        else if (format[0] == 'f') { //浮点数 例如：f2
            _retVal = parseFloat(str).toFixed(parseInt(format.replace("f", "")));
        }

        return _retVal;
    },
    FormatDate: function (date, format) {
        /// <summary>格式化日期格式</summary>
        /// <param name="date" type="String">日期</param>
        /// <param name="format" type="String">需要转换成的日期格式</param>

        if (!date) return;   
        if (!format) format = "yyyy-MM-dd";

        switch(typeof date) {   
            case "string":   
                date = new Date(date.replace(/-/g, "/"));   
                break;   
            case "number":   
                date = new Date(date);   
                break;   
        }

        if (!date instanceof Date) return;   

        var _dict = {
            "yyyy": date.getFullYear(),   
            "M": date.getMonth() + 1,   
            "d": date.getDate(),   
            "H": date.getHours(),   
            "m": date.getMinutes(),   
            "s": date.getSeconds(),   
            "MM": ("" + (date.getMonth() + 101)).substr(1),   
            "dd": ("" + (date.getDate() + 100)).substr(1),   
            "HH": ("" + (date.getHours() + 100)).substr(1),   
            "mm": ("" + (date.getMinutes() + 100)).substr(1),   
            "ss": ("" + (date.getSeconds() + 100)).substr(1)   
        };

        return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {   
            return _dict[arguments[0]];
        });                   
    },
    RootPathToManageDir : function (path) {
        /// <summary>把相对于根的路径转成相对于Manage目录的路劲（主要用于模板路径的转换）</summary>

        path = Cmn.Func.Trim(path);

        if (path.charAt(0) == "/") { path = Cmn.Func.AddSiteRoot(path); }
        else if (path.match(/^http:/i) == null ) {
            path = "../" + path;
        }

        return path;
    }
}