///Version:1.0
/// <reference path="../../../Js/ThirdLib/jquery.js" />
/// <reference path="CmnMis.js" />
/// <reference path="CmnMisFrame.js" />
/// <reference path="CmnMisUserForm.js" />

 


//检查CmnMis有没有定义，如果没有定义就定义下
if (typeof (CmnMis) == "undefined") { CmnMis = {}; }
if (!CmnMis.UI) { CmnMis.UI = {}; }
//--------------------------------控件工厂类
(function (object, event) {
    //控件库
    CmnMis.UI.Control = {
        //控件布局选择器
        Selector: {
            //控件最外层容器
            Container: ".cmn-Ctl-Container",
            //控件字段容器
            ColNameContainer: ".cmn-Ctl-ColNameContainer",
            //控件字段名称 
            ColName: ".cmn-Ctl-ColName",
            //是否必填容器
            ColIsRequired: ".cmn-Ctl-ColIsRequired",
            //控件主体容器
            CtlContent: ".cmn-Ctl-Content",
            //控件提示
            CtlTipContainer: ".cmn-Ctl-TipContainer",
            //控件验证结果容器
            CtlVerifyContainer: ".cmn-Ctl-VerifyContainer",
            //控件验证正确
            CtlVerifyRight: ".cmn-Ctl-VerifyRight",
            //控件验证错误
            CtlVerifyError: ".cmn-Ctl-VerifyError",
            //错误提示文案
            CtlErrTipDesc: ".cmn-Ctl-TipErrDesc",
            //提示文案
            CtlTipDesc: ".cmn-Ctl-TipDesc"
        },
        //空间布局的模板
        CtlLayoutTemplete: [],
        /// <field name="CustomControlPath" type="String">自定义控件存放路径</field>
        CustomControlPath: "CmnControl/",
        //自定义控件缓存
        CustomControlCache: {},

        //根据dom新建控件
        NewControl: function (controlContainer, controlType, colName, controlCfg) {
            /// <summary>获取创建控件的html代码</summary>
            /// <param name="controlContainer" type="String">空间容器选择器</param>
            /// <param name="controlType" type="String">控件类型</param>
            /// <param name="colName" type="String">字段名称</param>
            /// <param name="controlCfg" type="Json">控件配置</param>
            /// <returns type="String" />

            var _control = null,
                _controlContainer = controlContainer,
                _controlType = controlType,
                //函数签名
                _controlTypeSignature = CmnMis.UI.Control[controlType],
                _colName = colName,
                _controlCfg = object.IsType(controlCfg, "string") ? $.parseJSON(controlCfg) : controlCfg;

            if (arguments.length < 4) { alert("创建控件错误！参数个数不对！"); return; }

            //默认为text输入框
            if (!_controlTypeSignature) {
                //检查服务器上有没有自定义的，如果有的话就加载进来
                var _controlHtml = CmnMis.UI.Control.CustomControlCache[_controlType];

                if (!_controlHtml && _controlType) {//需要加载
                    CmnMis.UI.Control.CustomControlCache[_controlType] = CmnAjax.GetFile(CmnMis.UI.Control.CustomControlPath + _controlType + "/" + _controlType + ".htm");
                    CmnAjax.GetFile(CmnMis.UI.Control.CustomControlPath + _controlType + "/" + _controlType + ".js");

                    _controlTypeSignature = CmnMis.UI.Control[_controlType];

                    if (_controlTypeSignature != undefined) { _control = new _controlTypeSignature(_controlContainer, _colName, _controlCfg); }
                    else { //已经有了，但没加载成功，就用默认文本输入框
                        _control = new CmnMis.UI.Control.Text(_controlContainer, _colName, _controlCfg);
                    }
                }
                else { //已经有了，但没加载成功，就用默认文本输入框
                    _control = new CmnMis.UI.Control.Text(_controlContainer, _colName, _controlCfg);
                }
            }
            else {

                _control = new _controlTypeSignature(_controlContainer, _colName, _controlCfg);

            }

            //默认为文本输入框
            if (_control == null) { _control = new CmnMis.UI.Control.Text(_controlContainer, colName, _controlCfg); }

            return _control;
        },
        //根据字段定义创建控件列表
        CreateControls: function (userFormInfo) {
            /// <summary>根据字段定义创建控件列表</summary>
            /// <param name="userFormInfo" type=" CmnMis.UserForm">控件类型</param>

            if (!userFormInfo.ColInfo) { return false; } //如果没有字段信息就直接返回

            var _$editPane = $(userFormInfo.GetSelector(userFormInfo.Selector.EditControlPanel)),
                _self = this;
            var _isHasEditTempLate = false; //是否有自定义的编辑界面

            //找不到编辑界面的时候直接返回不作处理
            if (_$editPane.length <= 0) { return; };

            if (userFormInfo.EditTemplateFileName != null && userFormInfo.EditTemplateFileName != "" && userFormInfo.EditTemplateFileName != undefined) {
                _isHasEditTempLate = true;
            }


            for (var _i = 0; _i < userFormInfo.ColInfo.length; _i++) {
                //字段项
                var _col = userFormInfo.ColInfo[_i];
                //判断是否是详情页面
                if (_col.IsShowInEdit != "1") { continue; }

                var _control = null;

                if (_isHasEditTempLate) { //有自定义模板的话替换原先的控件

                    _control = this.NewControl(_$editPane, _col.ColControlName, _col.ColName, _col.ControlCfg);

                    //cmn-control dom对象
                    var _cmncontrol = $(userFormInfo.GetSelector(".cmn-control[name='" + _col.ColName +
                       "'][data-control-type='" + _col.ColControlName + "']"));
                    //判断里面是否有内容 没有则生成内容 并且重新初始化
                    if (!_cmncontrol.html()) {
                        _cmncontrol.html(_control.GetInitHtml());
                        _control.InitControl();
                    }

                }
                else {

                    if (!!_col.ControlCfg) {
                        if (object.IsType(_col.ControlCfg, "string")) {
                            _col.ControlCfg = $.parseJSON(_col.ControlCfg);
                        }
                    } else { _col.ControlCfg = {}; }
 
                    _control = this.NewControl(_$editPane, _col.ColControlName, _col.ColName, _col.ControlCfg);
                    //设置主键为只读
                    if (userFormInfo.KeyColName == _col.ColName) {
                        _control.SetEnabled(false);
                        _control.ControlCfg.IsRequired = "0";
                    }

                    _control.SetColDesc(_col.ColTitle);
                }
            }
        },
        //把值设置到控件列表中
        SetValueList: function (containerSelector, data, userFormInfo) {
            /// <summary>把值设置到控件列表中</summary>
            /// <param name="containerSelector" type="String">容器选择器</param>
            /// <param name="data" type="Json">json数据</param>
            /// <param name="userFormInfo" type=" CmnMis.UserForm">控件类型</param>
            var _self = this;
            $(containerSelector).find(this.Selector.Container).each(function () {
                var _control = _self.GetControl($(this));
                var _name = $(this).find(".cmn-control").attr("name");

                if (_control != undefined) {
                    if (_control.Type == "DetailUserForm" || _control.Type == "EditExd"
                        || _control.Type == "DetailMultiCheckbox") { //是明细用户表单,设置给主键的值
                        if (userFormInfo != undefined) { _name = userFormInfo.KeyColName; }
                    }

                    for (var _key in data) {
                        if (_key == _name) {
                            _control.SetValue(data[_key]);

                            break;
                        }
                    }
                }
                else { Cmn.Log("在设置值的时候，找不到name为" + _name + "的控件"); }
            });
        },
        //获取值列表
        GetValueList: function (containerSelector) {
            /// <summary>获取值列表</summary>
            /// <param name="containerSelector" type="String">容器选择器</param>
            ///	<returns type='String'/>

            var _valueList = {},
                _self = this,
                  //先找到容器下面所以的控件容器
                _allControlContainer = $(containerSelector).find(_self.Selector.Container),
                //去除明细里面的控件
                _controlContainer = _allControlContainer.not(_allControlContainer.find(CmnMis.Frame.Cfg.Selector.UserFormTemplate).find(_self.Selector.Container));

            _controlContainer.each(function () {
                var _control = _self.GetControl($(this));
               // console.log(_control.ColName);
                if (_control != undefined && _control != null) {
                    //if (_valueList != "") { _valueList += ","; }

                    //_valueList += "\"" + $(this).find(".cmn-control").attr("name") + "\":\"" + Cmn.Func.FormatJsonData(_control.GetValue()) + "\"";

                    _valueList[$(this).find(".cmn-control").attr("name")] = _control.GetValue();
                }
                else { Cmn.Log("在获取值列表的时候，没有找到对应的控件对象。控件名：" + $(this).attr("name")); }
            });

            return _valueList;
        },
        InitValueList: function (containerSelector) {
            /// <summary>初始化选择器中所有控件的值</summary>
            /// <param name="containerSelector" type="String">容器选择器</param>
            var _self = this;
            $(containerSelector).find(this.Selector.Container).each(function () {
                _self.GetControl($(this)).Init();
            });
        },
        VerifyControlInput: function (containerSelector,tipSelector,errCallback) {
            /// <summary>控件输入验证</summary>
            /// <param name="containerSelector" type="String">容器选择器</param>
            /// <param name="tipSelector" type="String">提示容器选择器</param>
            /// <param name="errCallback" type="function">错误信息的回调</param>

            var _self = this,
                //先找到容器下面所以的控件容器
                _allControlContainer = $(containerSelector).find(_self.Selector.Container),
                //去除明细里面的控件
                _controlContainer = _allControlContainer.not(_allControlContainer.find(CmnMis.Frame.Cfg.Selector.UserFormTemplate).find(_self.Selector.Container));

            for (var _i = 0; _i < _controlContainer.length; _i++) {
                var _control = _self.GetControl(_controlContainer.eq(_i));

                if (!_control.VerifyInput(tipSelector, errCallback)) {

                    return false;
                }
            }

            return true;
        },
        GetControl: function (controlDom) {
            /// <summary>根据Dom返回对应的控件对象</summary>
            /// <param name="controlDom" type="String">控件Dom或选择器</param>
            ///	<returns type='CmnMis.UI.Control.BasControl'/>

            return $(controlDom).data("control");
        },
        GetControlData: function (controlCfg, where, successFunc) {
            /// <summary>根据字段名找到编辑界面上对应的控件</summary>
            /// <param name="controlCfg" type="jsons">控件配置</param>
            /// <param name="successFunc" type="function">回调函数</param>

            var _fillSql = controlCfg.FillSql,
                _OptionList = controlCfg.OptionList,
                _param = { "ExecSql": _fillSql },  //参数
                _datas = "";  //数据集

            if (object.IsType(controlCfg,"string")) {
                Cmn.Log("控件配置错误：controlCfg应该为json数组而不是字符串");
                return;
            }
            else if (typeof _OptionList == "object" && _OptionList.length > 0) {
                successFunc && successFunc(_OptionList);
                return;
            }

            if (!!where) { _param["where"] = where; }

            if (object.IsType(controlCfg.FillSql, "string") && controlCfg.FillSql != "") {     //是否是填充的sql
                CmnAjax.PostData(InterfaceUrl + "?method=ExecSql",_param , function (data) {
                    successFunc && successFunc(data.data);
                });
                  
            } else {
                successFunc && successFunc([]);
            }
        }

    }

})(Cmn.Object, Cmn.Event);

//--------------------------------后台控件基类---------------------
(function (control, object) {

    control.BasControl = function (controlContainer, type, colName, controlCfg) {
        /// <summary>后台控件基类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="type" type="String">控件类型</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        /// <field name="Type" type="String">控件类型</field>
        /// <field name="ColName" type="String">字段名称</field>
        /// <field name="ControlCfg" type="JSON">控件配置</field>
        /// <field name="ControlDom" type="JSON">控件容器dom对象</field>
         
        this.Type = type;
        this.ColName = colName;

        //控件配置
        this.ControlCfg = $.extend({
            //填充数据查询的sql语句
            FillSql: undefined,
            //选项数据集合
            OptionList: [],
            //宽度
            Width: undefined,
            //高度
            Height: undefined,
            //接口地址
            ItfUrl: undefined,
            //文件类型
            FileType: undefined,
            //文件大小
            FileSize: "3",
            //保存地址
            SavePath: "/Upload/" + (CmnMis.CurUserForm && CmnMis.CurUserForm.TableName || "Temp") + "/" + colName + "/",
            //事件类型
            DateType: "datetime",
            //文件扩展名
            FileExt: undefined,
            //隐藏字段名称
            HideFields: undefined,
            //翻页
            Limit: undefined,
            //显示字段名称
            DisplayFields: undefined,
            //主键名称
            KeyField: undefined,
            //外键字段名称
            ForeignKeyFieldName: undefined,
            //默认值
            Default: undefined,
            //联动字段名称
            LinkControlName: undefined,
            //是否必填
            IsRequired: "0",
            //正则内容
            RegexContent: undefined,
            //验证错误信息
            RegexErrorMsg: undefined,
            //字段提示
            ColHint: undefined

        }, object.IsType(controlCfg, "string") ? $.parseJSON(controlCfg) : controlCfg);


        //----------事件----------------------------------------

        //内容发生改变的时候触发
        this.OnChange = new Cg.Event(this);

        //------------------------------------------------------
   
        var _controlDom = $(controlContainer).find(".cmn-control[name=" + this.ColName + "]").parents(control.Selector.Container);

        //检测是否存在dom 并且控件不存在 不存在即创建
        if (_controlDom.size() > 0) {
          
            if ($.trim(_controlDom.find(control.Selector.CtlContent).html()) == "") {
                _controlDom.find(control.Selector.CtlContent).html(this.GetInitHtml())
            }

            this.ControlDom = _controlDom;
        }
        else { this.ControlDom = this.GetCreateHtml(controlContainer);  }
      

        //初始化控件配置
        this.InitControl(controlCfg);

        if (this.ControlCfg.IsRequired != "1") {
            this.ControlDom.find(control.Selector.ColIsRequired).hide();
        }

        if (!this.ControlCfg.ColHint) { this.ControlDom.find(control.Selector.CtlTipDesc).hide(); }
        else {
            this.ControlDom.find(control.Selector.CtlTipDesc).show().html(this.ControlCfg.ColHint);
        }
        this.ControlDom.find(control.Selector.CtlContent).addClass("cmn-control").attr("data-control-type", this.Type);
        this.ControlDom.find(control.Selector.CtlContent).attr("name", this.ColName);
        this.ControlDom.data("control", this);
     
        //ColTitle
        this.ControlCfg.RegexErrorMsg = this.ControlCfg.RegexErrorMsg || "录入数据有误！";
        this.ControlCfg.RegexErrorMsg = "【"+this.ControlCfg.ColTitle + " ， " + this.ControlCfg.RegexErrorMsg + "】";


    }
    //----------------------------------------------------
    //-----------------获取创建控件的html代码
    control.BasControl.prototype.GetCreateHtml = function (eidtorContainer) {
        /// <summary>获取创建控件的html代码</summary>
        /// <param name="eidtorContainer" type="jQuery">控件容器</param>
        /// <returns type="String" />

        if (!!$(eidtorContainer).find(control.Selector.Container).length) {
            if (!$(eidtorContainer).find(control.Selector.CtlContent).hasClass("cmn-control")) {
                control.CtlLayoutTemplete = $(eidtorContainer).find(control.Selector.Container).remove();
            }
        }

        var _self = this,
            //空间容器选择器
            _ctlContainerSelector = control.Selector.Container.replace(/[\s\S]*([\.]|[\#])/g, ""),
            //控件容器
            _$ctlContainer = control.CtlLayoutTemplete.length ? control.CtlLayoutTemplete.clone(true, true) : $("<div>");

        $(eidtorContainer).append(_$ctlContainer);

        //如果是不存在控件布局模板的话
        if (!$(_$ctlContainer).hasClass(_ctlContainerSelector)) {
            $(_$ctlContainer).addClass(_ctlContainerSelector).css({ "margin-top": "20px" });
            //字段名称容器
            var _colNameContainer = $("<span>").addClass(control.Selector.ColNameContainer.replace(/[\s\S]*([\.]|[\#])/g, ""))
            .css({ "display": "inline-block", "width": "200px", "text-align": " right", " margin-right": "20px" });
            //-----------------------------
            //字段描述
            var _colName = $("<div>").addClass(control.Selector.ColName.replace(/[\s\S]*([\.]|[\#])/g, ""));
            //字段是否必填提示容器 
            var _colIsRequired = $("<font color='red'> * </font>").addClass(control.Selector.ColIsRequired.replace(/[\s\S]*([\.]|[\#])/g, ""));
            //添加必填提示
            _colNameContainer.append(_colIsRequired);
            //添加字段名称
            _colNameContainer.append(_colName);
            //添加字段容器
            $(_$ctlContainer).append(_colNameContainer);
            //-----------------------------
            //控件主体容器
            var _ctlContent = $("<span style='display: inline-block;'></span>").addClass(control.Selector.CtlContent.replace(/[\s\S]*([\.]|[\#])/g, ""))
             .css({ "display": "inline-block" });

            //添加控件主体容器
            $(_$ctlContainer).append(_ctlContent);
            //-----------------------------
            //添加提示容器
            var _tipContainer = $("<span>").addClass(control.Selector.CtlTipContainer.replace(/[\s\S]*([\.]|[\#])/g, ""))
                .css({ "display": "inline-block", "margin-left": " 20px" });

            //验证提示容器
            var _verifyContainer = $("<span>").addClass(control.Selector.CtlVerifyContainer.replace(/[\s\S]*([\.]|[\#])/g, ""))
                .css({ "display": "inline-block" });

            //验证提示错误容器
            var _verifyError = $("<div>").addClass(control.Selector.CtlVerifyError.replace(/[\s\S]*([\.]|[\#])/g, ""))
                .css({ "display": "inline-block", "color": "red" }).html("√");
            //验证提示正确容器
            var _verifyRight = $("<div>").addClass(control.Selector.CtlVerifyRight.replace(/[\s\S]*([\.]|[\#])/g, ""))
                .css({ "display": "inline-block", "color": "#0CAA38" }).html("×");

            //添加验证的提示
            _verifyContainer.append(_verifyRight);
            _verifyContainer.append(_verifyError);

            //提示文案容器
            var _tipDesc = $("<span>").addClass(control.Selector.CtlTipDesc.replace(/[\s\S]*([\.]|[\#])/g, ""));
            //错误提示文案
            var _tipErrDesc = $("<span>").addClass(control.Selector.CtlErrTipDesc.replace(/[\s\S]*([\.]|[\#])/g, ""));
            //添加验证提示容器以及 提示文案
            _tipContainer.append(_verifyContainer);
            _tipContainer.append(_tipDesc);
            _tipContainer.append(_tipErrDesc.hide());
            //添加提示容器
            $(_$ctlContainer).append(_tipContainer);
            //-----------------------------
        }
 
        $(_$ctlContainer).find(control.Selector.ColName).html(_self.ColName + " : ");
        $(_$ctlContainer).find(control.Selector.CtlContent).html(_self.GetInitHtml());
        $(_$ctlContainer).find(control.Selector.CtlVerifyContainer).hide();
        $(_$ctlContainer).find(control.Selector.CtlVerifyRight).hide()
        $(_$ctlContainer).find(control.Selector.CtlVerifyError).hide();
        $(_$ctlContainer).find(control.Selector.CtlErrTipDesc).hide();
     
        return $(_$ctlContainer);
    }
    //----------------------------------------------------
    //-----------------设置字段描述
    control.BasControl.prototype.SetColDesc = function (colDesc) {
        /// <summary>初始化控件</summary>
        /// <param name="colDesc" type="String">字段描述</param>

        if (!!colDesc) {
            this.ControlDom.find(control.Selector.ColName).html(colDesc + " : ");
        }
    }
    //----------------------------------------------------
    //-----------------初始化控件
    control.BasControl.prototype.Init = function () {
        /// <summary>初始化控件</summary>
    }

    //----------------------------------------------------
    //-----------------初始化控件配置
    control.BasControl.prototype.InitControl = function (controlCfg) {
        /// <summary>初始化控件配置</summary>
        /// <param name="controlCfg" type="Json">控件配置</param>
        
        var _self = this,
            //空间大小的样式json
            _sizeCss = {};
        //合并配置
        _self.ControlCfg = _self.InitControlConfig(controlCfg);
        if (!!_self.ControlCfg.Height) { _sizeCss["height"] = _self.ControlCfg.Height; }
        _self.ControlDom.css(_sizeCss);
        if (!!_self.ControlCfg.Width) { _sizeCss["width"] = _self.ControlCfg.Width; }
        //设置控件大小
        _self.ControlDom.find(control.Selector.CtlContent).css(_sizeCss);
         
    }
    //----------------------------------------------------
    //-----------------重新加载数据
    control.BasControl.prototype.ReLoadData = function () {
        /// <summary>重新加载数据</summary>
        return true;
    }
    //----------------------------------------------------
    //-----------------初始化检测合并好的控件配置
    control.BasControl.prototype.InitControlConfig = function (controlCfg) {
        /// <summary>获取控件初始化的html代码</summary>
        /// <param name="controlCfg" type="Json">控件配置</param>
        /// <returns type="JOSN" />

        if (object.IsType(controlCfg, "string")) { controlCfg = $.parseJSON(controlCfg); }
        var _domCfg = this.ControlDom.attr("cg-ctl-cfg");
        _domCfg = _domCfg || this.ControlDom.attr("control-config");
        if (object.IsType(_domCfg, "string")) { _domCfg = $.parseJSON(_domCfg); }
        if (!!_domCfg) { if (!_domCfg["Default"]) { _domCfg["Default"] = undefined; } }
        if (typeof controlCfg == "object" && controlCfg!=null) {
            $.each(controlCfg, function (index, item) {
                if (!controlCfg[index] && controlCfg[index] != 0 && index != "Default") { controlCfg[index] = undefined; }
            });
        }

        this.ControlCfg = $.extend(this.ControlCfg, _domCfg, controlCfg);
        return this.ControlCfg;
    }

    //----------------------------------------------------
    //-----------------获取控件初始化的html代码
    control.BasControl.prototype.GetInitHtml = function (colName, controlCfg) {
        /// <summary>获取控件初始化的html代码</summary>
        /// <param name="colName" type="String">字段名</param>
        /// <param name="controlCfg" type="Json">控件配置</param>
        /// <returns type="String" />

        return control.CustomControlCache[this.Type];
    }
    //----------------------------------------------------
    //-----------------数据验证
    control.BasControl.prototype.VerifyInput = function (tipSelector, errCallback) {
        /// <summary>数据验证</summary>
        /// <param name="tipSelector" type="String">提示容器选择器</param>
        /// <param name="errCallback" type="function">错误信息的回调</param>
        var _self = this,
            _regex = "",                //正则表达式
            _val = Cmn.Func.GetNoHTMLFormatStr(_self.GetValue()),
            _isVerify = true,
            _msg = "";
 
        //必填
        if (_self.ControlCfg.IsRequired == "1") {
            _regex = /\S/;
            if (!_val) { _val = ""; }
            if (!_regex.test($.trim(_val))) {
                _msg = _self.ControlCfg.ColTitle + " : " + "为必填项！";
                _isVerify = false;
            }
        }

        _regex = _self.ControlCfg.RegexContent;

        if (!!_regex && _isVerify) {
          
            if (object.IsType(_regex, "string")) {
                if (_regex[0] == "/") { _regex = _regex.substr(1, _regex.length - 2);  }
                _regex = new RegExp(_regex);
            }
            else {
                console.error(_regex.toString() + "正则表达式类型不对！");

                return true;
            }

            if (!_val) { _val = ""; }
            if (!_regex.test($.trim(_val))) {
                _isVerify = false;
                _msg = _self.ControlCfg.RegexErrorMsg;
            }
             
        }

        //验证通过
        if (_isVerify) {
            _self.ControlDom.find(control.Selector.CtlVerifyRight).show();
            _self.ControlDom.find(control.Selector.CtlVerifyError).hide();
            $(tipSelector).hide().html("");
        }
        else {
            _self.ControlDom.find(control.Selector.CtlVerifyError).show();
            _self.ControlDom.find(control.Selector.CtlVerifyRight).hide();
            _self.ControlDom.find(control.Selector.CtlErrTipDesc).html(_msg);
            _self.ControlDom.find(control.Selector.CtlErrTipDesc).show();
            _self.ControlDom.find(control.Selector.CtlTipDesc).hide();

            $(tipSelector).show().html(_msg);

            errCallback && errCallback.call(_self, $.extend(new Cmn.ErrMsg(_msg), { control: _self }));
            return false;
        }

        _self.ControlDom.find(control.Selector.CtlVerifyContainer).show();

        return true;
    }
    //----------------------------------------------------
    //-----------------获取控件的值
    control.BasControl.prototype.GetValue = function () {
        /// <summary>获取控件的值</summary>
        return "";
    }
    //----------------------------------------------------
    //-----------------设置控件的值
    control.BasControl.prototype.SetValue = function (value) {
        /// <summary>设置控件的值</summary>
        /// <param name="value" type="String">需要往控件中设置的值</param>
    }
    //----------------------------------------------------
    //-----------------设置控件的宽度
    control.BasControl.prototype.SetWidth = function (width) {
        /// <summary>设置控件的宽度</summary>
        /// <param name="Width" type="Int">需要往控件中设置的宽度值</param>
    }
    //----------------------------------------------------
    //-----------------设置控件的高度
    control.BasControl.prototype.SetHeight = function (height) {
        /// <summary>设置控件的高度</summary>
        /// <param name="height" type="String">高度</param>
    }
    //----------------------------------------------------
    //-----------------设置是否可用
    control.BasControl.prototype.SetEnabled = function (isEnabled) {
        /// <summary>设置是否可用</summary>
        /// <param name="isEnabled" type="bool">是否可用，true:可用；false:不可用</param>
    }
    //----------------------------------------------------
    //-----------------设置输入焦点 
    control.BasControl.prototype.SetFocus = function () {
        /// <summary>设置输入焦点</summary>
    }

})(CmnMis.UI.Control, Cmn.Object);

//--------------------------------------------------------
//*****************     Text控件类  **********************
//***************** @controlContainer 控件容器
//***************** @colName 字段名称
//***************** @controlCfg 控件配置
//--------------------------------------------------------
(function (control, object) {
    control.Text = function (controlContainer, colName, controlCfg) {
        /// <summary>Text控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "Text", colName, controlCfg]);

    }

    //获取创建控件的html代码
    control.Text.prototype.GetInitHtml = function () {
 
        return "<input type='text' class='cmn-control-text' style = 'width:100%;height:100%' />";
    }
    //----------------------------------------------------
    //-----------------初始化控件配置
    control.Text.prototype.InitControl = function (controlCfg) {
        /// <summary>初始化控件配置</summary>
        /// <param name="controlCfg" type="Json">控件配置</param>
 
        var _self = this,
            //空间大小的样式json
            _sizeCss = {};

        //合并配置
        _self.ControlCfg = _self.InitControlConfig(controlCfg);

        if (!!_self.ControlCfg.Height) {
            _sizeCss["height"] = _self.ControlCfg.Height;
            _sizeCss["line-height"] = _self.ControlCfg.Height.replace(/[px]|[%]/,"")+"px";
        }
        _self.ControlDom.css(_sizeCss);
        if (!!_self.ControlCfg.Width) { _sizeCss["width"] = _self.ControlCfg.Width; }

        //设置控件大小
        _self.ControlDom.find(control.Selector.CtlContent).css(_sizeCss);

        //存在验证正则表达式的时候
        if (!!_self.ControlCfg.RegexContent) {
            //焦点移开之后执行正则验证
            _self.ControlDom.find(".cmn-control-text").unbind("blur").blur(function () {
                var _regex = _self.ControlCfg.RegexContent,
                    _val = _self.GetValue();
     
                if (object.IsType(_regex, "string")) {
                    if (_regex[0] == "/") {
                        _regex = _regex.substr(1, _regex.length - 2);
                    }
                    _regex = new RegExp(_regex);
                }
                else {
                    console.error(_regex.toString() + "正则表达式类型不对！");
                    return;
                }

                if (!_val) { _val = "";}
                if (_regex.test($.trim(_val))) {
                    _self.ControlDom.find(control.Selector.CtlVerifyRight).show();
                    _self.ControlDom.find(control.Selector.CtlVerifyError).hide();
                }
                else {
                    _self.ControlDom.find(control.Selector.CtlVerifyError).show();
                    _self.ControlDom.find(control.Selector.CtlVerifyRight).hide();
                    _self.ControlDom.find(control.Selector.CtlErrTipDesc).html(_self.ControlCfg.RegexErrorMsg);
                    _self.ControlDom.find(control.Selector.CtlErrTipDesc).show();
                    _self.ControlDom.find(control.Selector.CtlTipDesc).hide()
                    return false;
                }
                _self.ControlDom.find(control.Selector.CtlVerifyContainer).show();
            });
             
            _self.ControlDom.find(".cmn-control-text").unbind("focus").focus(function () {
                _self.ControlDom.find(control.Selector.CtlTipDesc).show();
                _self.ControlDom.find(control.Selector.CtlErrTipDesc).hide().html("");
            });
        }
        //初始化控件
        _self.Init();
 
        //绑定控件change事件
        _self.ControlDom.find(".cmn-control-text").off("change").on("change", function () { _self.OnChange.Trigger([_self.GetValue()]); });

    }
    //获取控件的值
    control.Text.prototype.GetValue = function () { return this.ControlDom.find(".cmn-control-text").val(); }

    //设置控件的值
    //value:需要往控件中设置的值
    control.Text.prototype.SetValue = function (value) { this.ControlDom.find(".cmn-control-text").val(value); }

    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.Text.prototype.SetWidth = function (Width) { this.ControlDom.find(".cmn-control-text").width(Width); }
    //初始化控件
    control.Text.prototype.Init = function () {
        this.ControlDom.find(control.Selector.CtlVerifyRight).hide()
        this.ControlDom.find(control.Selector.CtlVerifyError).hide();
        this.ControlDom.find(control.Selector.CtlVerifyContainer).hide();
        this.ControlDom.find(".cmn-control-text").val("");
        if (!!this.ControlCfg.Default) { this.SetValue(this.ControlCfg.Default); }
    }

    //设置是否可用
    //isEnabled:是否可用，true:可用；false:不可用
    control.Text.prototype.SetEnabled = function (isEnabled) {
        if (isEnabled) { this.ControlDom.find(".cmn-control-text").attr("disabled", false); }
        else { this.ControlDom.find(".cmn-control-text").attr("disabled", true); }
    }
    //设置输入焦点
    control.Text.prototype.SetFocus = function () { this.ControlDom.find(".cmn-control-text").focus(); }

})(CmnMis.UI.Control, Cmn.Object);
//--------------------------------------------------------
//*****************     Sort控件类  **********************
//***************** @controlContainer 控件容器
//***************** @colName 字段名称
//***************** @controlCfg 控件配置
//--------------------------------------------------------
(function (control, object) {
    control.Sort = function (controlContainer, colName, controlCfg) {
        /// <summary>Text控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.Text, [controlContainer, colName, controlCfg]);

    }

})(CmnMis.UI.Control, Cmn.Object);
//--------------------------------------------------------
//*****************     Hidden 控件类  **********************
//***************** @controlContainer 控件容器
//***************** @colName 字段名称
//***************** @controlCfg 控件配置
//--------------------------------------------------------
(function (control, object) {
    control.Hidden = function (controlContainer, colName, controlCfg) {
        /// <summary>Text控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "Hidden", colName, controlCfg]);

    }

    //获取创建控件的html代码
    control.Hidden.prototype.GetInitHtml = function () {

        return "<input type='hidden' class='cmn-control-hidden' style = 'width:100%;height:100%' />";
    }
 
    //获取控件的值
    control.Hidden.prototype.GetValue = function () { return this.ControlDom.find(".cmn-control-hidden").val(); }

    //设置控件的值
    //value:需要往控件中设置的值
    control.Hidden.prototype.SetValue = function (value) { this.ControlDom.find(".cmn-control-hidden").val(value); }

    //初始化控件
    control.Hidden.prototype.Init = function () {
        this.ControlDom.find(".cmn-control-hidden").val("");
        if (!!this.ControlCfg.Default) { this.SetValue(this.ControlCfg.Default); }
    }
 

})(CmnMis.UI.Control, Cmn.Object);
//--------------------------------------------------------
//*****************     Select控件类  **********************
//***************** @controlContainer 控件容器
//***************** @colName 字段名称
//***************** @controlCfg 控件配置
//--------------------------------------------------------
(function (control, object, event) {
    control.Select = function (controlContainer, colName, controlCfg) {
        /// <summary>Select控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        /// <field name="Type" type="String">控件类型</field>
        /// <field name="ColName" type="String">字段名称</field>
        /// <field name="ControlCfg" type="JSON">控件配置</field>
        /// <field name="ControlDom" type="JSON">控件容器dom对象</field>
        object.Inherit(this, control.BasControl, [controlContainer, "Select", colName, controlCfg]);

    }

    //获取创建控件的html代码
    control.Select.prototype.GetInitHtml = function () {
       
        var _cfg = this.ControlCfg;

        return _controlHtml = "<select style = 'width:100%;height:100%' ><select/>";
    }

    //----------------------------------------------------
    //-----------------初始化控件配置
    control.Select.prototype.InitControl = function (controlCfg) {
        /// <summary>初始化控件配置</summary>
        /// <param name="controlCfg" type="Json">控件配置</param>
 
        var _self = this,
            //系统下拉框dom对象
            _selectDom = _self.ControlDom.find("select"),
            //空间大小的样式json
            _sizeCss = {};

        _self.ControlCfg = _self.InitControlConfig(controlCfg);

        if (!!_self.ControlCfg.Height) {
            _sizeCss["height"] = _self.ControlCfg.Height;
            _sizeCss["line-height"] = _self.ControlCfg.Height;
        }
        _self.ControlDom.css(_sizeCss);
        if (!!_self.ControlCfg.Width) { _sizeCss["width"] = _self.ControlCfg.Width; }

        //设置控件大小
        _self.ControlDom.find(control.Selector.CtlContent).css(_sizeCss);
     
        //绑定数据
        _self.BindData();

        //绑定事件
        _selectDom.off("change").on("change", function () {

            if (!!_self.ControlCfg.LinkControlName &&
                object.IsType(_self.ControlCfg.LinkControlName, "string")) {

                var _parm = "[" + _self.ControlDom.find(control.Selector.CtlContent).attr("name") + "]",
                    _where = _parm + "=" + $(this).val(),
                    //目标控件的dom对象
                    _formControlDom = _self.ControlDom.siblings(control.Selector.Container)
                                .find(control.Selector.CtlContent + "[name=" + _self.ControlCfg.LinkControlName + "]")
                                .parents(control.Selector.Container),
                    _control = CmnMis.UI.Control.GetControl(_formControlDom);

                if (!!_control) { _control.ReLoadData(_where); }
            }

            _self.OnChange.Trigger([_self.GetValue()]);
            
        });

    }

 
    //-----------------------------
    //---------绑定数据
    control.Select.prototype.BindData = function (where) {
        /// <summary>绑定数据</summary>
        /// <param name="where" type="String">填充查询的条件</param>

        var _self = this,
             //系统下拉框dom对象
            _selectDom = _self.ControlDom.find("select");

        _selectDom.empty();
 
        //如果不是必填加空选项
        if (_self.ControlCfg.IsRequired == "0") { _selectDom.append($("<option value=''></option>")); }
 
        //获取控件数据
        CmnMis.UI.Control.GetControlData(_self.ControlCfg, where, function (data) {
            var _data = data,
                _option = "";

            if (!!_data) {

                if (!(typeof _data == "object")) { _data = $.parseJSON(_data); };

                $.each(_data, function (index, items) {     //遍历集合拿到每个json
                    var _key = "", _val = "", _len = 0;        // 项的key val 以及数据的的长度每个json只能有两个值

                    if (!object.IsType(items, "object")) { Cmn.Log("OptionList : 数据格式违法！必须为json数组"); return; }

                    $.each(items, function (i, item) {       //遍历json
                        if (_len == 0) { _key = item; }        //拿到第一个给key
                        else if (_len == 1) { _val = item; }   //拿到第二个给value
                        else { return; }                    // 丢掉多余的数据
                        _len++;
                    });

                    _option += "<option value=\"" + _key + "\">" + _val + "</option>";

                });
            }
           

            _selectDom.append($(_option));
 
            //初始化控件
            _self.Init();
 
            //检测是否赋值

            if (_self.ControlDom.find("select").data("setValue")) {
                _self.SetValue(_self.ControlDom.find("select").data("setValue"));
                _self.ControlDom.find("select").data("setValue", undefined);
            }


        });

    }

    //重新加载数据
    control.Select.prototype.ReLoadData = function (where) {
        /// <summary>重新加载数据</summary>
        /// <param name="where" type="String">条件</param>
        this.BindData(where);
    }


    //获取控件的值
    control.Select.prototype.GetValue = function () { return this.ControlDom.find("select").val(); }

    //设置控件的值
    //value:需要往控件中设置的值
    control.Select.prototype.SetValue = function (value) {
        this.ControlDom.find("select").data("setValue", value);
        this.ControlDom.find("select").val(value);
    }

    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.Select.prototype.SetWidth = function (Width) { this.ControlDom.find("select").width(Width); }
    //初始化控件
    control.Select.prototype.Init = function () {
        this.ControlDom.find("select").val("");
        if (!!this.ControlCfg.Default) { this.SetValue(this.ControlCfg.Default); }
    }

    //设置是否可用
    //isEnabled:是否可用，true:可用；false:不可用
    control.Select.prototype.SetEnabled = function (isEnabled) {
        if (isEnabled) { this.ControlDom.find("select").attr("disabled", false); }
        else { this.ControlDom.find("select").attr("disabled", true); }
    }
    //设置输入焦点
    control.Select.prototype.SetFocus = function () { this.ControlDom.find("select").focus(); }

})(CmnMis.UI.Control, Cmn.Object, Cmn.Event);

//--------------------------------CheckBox控件类----------------------
(function (control, object, event) {
    control.CheckBox = function (controlContainer, colName, controlCfg) {
        /// <summary>CheckBox控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "CheckBox", colName, controlCfg]);
    }

    //获取创建控件的html代码
    control.CheckBox.prototype.GetInitHtml = function () {
        return _controlHtml = "<div class='cmn-control-checkBox' name=\"rad-" + this.ColName + "\" ></div>";
    }
    //----------------------------------------------------
    //-----------------初始化控件配置
    control.CheckBox.prototype.InitControl = function (controlCfg) {
        /// <summary>初始化控件配置</summary>
        /// <param name="controlCfg" type="Json">控件配置</param>
        var _self = this,

            _controlHtml = '',
            _checkBoxDom = _self.ControlDom.find(".cmn-control-checkBox"),
             //空间大小的样式json
            _sizeCss = {};
        
        _self.ControlCfg = _self.InitControlConfig(controlCfg);

        if (!!_self.ControlCfg.Height) {
            _sizeCss["height"] = _self.ControlCfg.Height;
            _sizeCss["line-height"] = _self.ControlCfg.Height;
        }
        _self.ControlDom.css(_sizeCss);
        if (!!_self.ControlCfg.Width) { _sizeCss["width"] = _self.ControlCfg.Width; }

        //设置控件大小
        _self.ControlDom.find(control.Selector.CtlContent).css(_sizeCss);

        //初始化
        _checkBoxDom.empty();

      
        var _fillSql = _self.ControlCfg.FillSql;
        if (_fillSql != "" && object.IsType(_fillSql, "string")) {

            var _data = CmnAjax.GetData(InterfaceUrl + "?method=ExecSql", "{ 'ExecSql': '" + _fillSql + "' }");
            if (!object.IsType(_data, "object")) { _data = $.parseJSON(_data); };
            _data = _data.data;
            if (object.IsType(_data, "string")) { _data = $.parseJSON(_data); }

            $.each(_data, function (index, items) {     //遍历集合拿到每个json
                var _key = "", _val = "", _len = 0;        // 项的key val 以及数据的的长度每个json只能有两个值
                if (typeof items != "object") {            //检查数据是否合法
                    Cmn.Log("controlCfg.OptionList:数据格式违法！必须为json数组");
                    return;
                }
                $.each(items, function (i, item) {       //遍历json
                    if (_len == 0) { _key = item; }        //拿到第一个给key
                    else if (_len == 1) { _val = item; }   //拿到第二个给value
                    else { return; }                    // 丢掉多余的数据
                    _len++;
                });

                _controlHtml += "<input style='width:auto;height:auto;' type=\"checkbox\" name=\"" + _checkBoxDom.attr("name") + "\"  value=\"" + _key + "\" class='cmn-control-checkBox' />" +
                                 "<b style='margin: 10px;'>" + _val + "</b>";

            });
        } else {
            $.each(_self.ControlCfg.OptionList, function (index, item) {
                _controlHtml += "<input  style='width:auto;height:auto;' type=\"checkbox\" name=\"" + _checkBoxDom.attr("name") + "\"  value=\"" + item.key + "\" class='cmn-control-checkBox' />" +
                                "<b style='margin: 10px;'>" + item.value + "</b>";
            });
        }

        _checkBoxDom.html(_controlHtml);

        //初始化
        _self.Init();
        //绑定checkbox的change事件
        _checkBoxDom.find("input[type=checkbox]").off("click").on("click", function () {
            _self.OnChange.Trigger([_self.GetValue()]);
        });

       

    }
    //获取控件的值
    control.CheckBox.prototype.GetValue = function () { return this.ControlDom.find(".cmn-control-checkBox:checked").val(); }

    //设置控件的值
    //value:需要往控件中设置的值
    control.CheckBox.prototype.SetValue = function (value) {
        if (value == '1') { this.ControlDom.find(".cmn-control-checkBox").attr("checked", "checked"); }
        else if (value == '0') { this.ControlDom.find(".cmn-control-checkBox").attr("checked", false); }
    }
    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.CheckBox.prototype.SetWidth = function (Width) { this.ControlDom.find(".cmn-control-checkBox").width(Width); }
    //初始化控件
    control.CheckBox.prototype.Init = function () {
        this.ControlDom.find(".cmn-control-checkBox").attr("checked", false);
        if (!!this.ControlCfg.Default) { this.SetValue(this.ControlCfg.Default); }
    }
    //设置是否可用
    //isEnabled:是否可用，true:可用；false:不可用
    control.CheckBox.prototype.SetEnabled = function (isEnabled) {
        if (isEnabled) { this.ControlDom.find(".cmn-control-checkBox").attr("disabled", false); }
        else { this.ControlDom.find(".cmn-control-checkBox").attr("disabled", true); }
    }
    //设置输入焦点
    control.CheckBox.prototype.SetFocus = function () { this.ControlDom.find(".cmn-control-checkBox").focus(); }

})(CmnMis.UI.Control, Cmn.Object, Cmn.Event);

//--------------------------------radioButton控件类----------------------
(function (control, object, event) {
    control.RadioButton = function (controlContainer, colName, controlCfg) {
        /// <summary>RadioButton控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "RadioButton", colName, controlCfg]);
    }

    //获取创建控件的html代码
    control.RadioButton.prototype.GetInitHtml = function () {
        this.ControlCfg = $.extend(this.ControlCfg, { Width: 220 });
        return _controlHtml = "<div class='cmn-control-radioButton' name=\"rad-" + this.ColName + "\" ></div>";
    }
    //----------------------------------------------------
    //-----------------初始化控件配置
    control.RadioButton.prototype.InitControl = function (controlCfg) {
        /// <summary>初始化控件配置</summary>
        /// <param name="controlCfg" type="Json">控件配置</param>
        var _self = this,
            _controlHtml = '',
            _radioButtonDom = _self.ControlDom.find(".cmn-control-radioButton"),
             //空间大小的样式json
            _sizeCss = {};

        _self.ControlCfg = _self.InitControlConfig(controlCfg);

        if (!!_self.ControlCfg.Height) {
            _sizeCss["height"] = _self.ControlCfg.Height;
            _sizeCss["line-height"] = _self.ControlCfg.Height;
        }
        _self.ControlDom.css(_sizeCss);
        if (!!_self.ControlCfg.Width) { _sizeCss["width"] = _self.ControlCfg.Width; }

        //设置控件大小
        _self.ControlDom.find(control.Selector.CtlContent).css({width: "auto",border: "none"});

        //初始化
        _radioButtonDom.empty();
  
        var _fillSql = _self.ControlCfg.FillSql;
        if (_fillSql != "" && object.IsType(_fillSql, "string")) {

            var _data = CmnAjax.GetData(InterfaceUrl + "?method=ExecSql", "{ 'ExecSql': '" + _fillSql + "' }");
            if (!object.IsType(_data, "object")) { _data = $.parseJSON(_data); };
            _data = _data.data;
            if (object.IsType(_data, "string")) { _data = $.parseJSON(_data); }

            $.each(_data, function (index, items) {     //遍历集合拿到每个json
                var _key = "", _val = "", _len = 0;        // 项的key val 以及数据的的长度每个json只能有两个值
                if (typeof items != "object") {            //检查数据是否合法
                    Cmn.Log("controlCfg.OptionList:数据格式违法！必须为json数组");
                    return;
                }
                $.each(items, function (i, item) {       //遍历json
                    if (_len == 0) { _key = item; }        //拿到第一个给key
                    else if (_len == 1) { _val = item; }   //拿到第二个给value
                    else { return; }                    // 丢掉多余的数据
                    _len++;
                });

                _controlHtml += "<input  style='width:auto;height:auto;' type=\"radio\" name=\"" + _radioButtonDom.attr("name") + "\"  value=\"" + _key + "\" />" +
                                 "<b style='margin: 10px;'>" + _val + "</b>";

            });
        } else {
            $.each(_self.ControlCfg.OptionList, function (index, item) {
                _controlHtml += "<input  style='width:auto;height:auto;' type=\"radio\" name=\"" + _radioButtonDom.attr("name") + "\"  value=\"" + item.key + "\"  />" +
                                "<b style='margin: 10px;'>" + item.value + "</b>";
            });
        }

        _radioButtonDom.html(_controlHtml);

        //初始化
        _self.Init();

        //绑定radiobutton change事件
        _radioButtonDom.find("input[type=radio]").off("click").on("click", function () {
            _self.OnChange.Trigger([_self.GetValue()]);
        });
    }
    //获取控件的值
    control.RadioButton.prototype.GetValue = function () { return this.ControlDom.find(".cmn-control-radioButton input:checked").val(); }

    //设置控件的值
    //value:需要往控件中设置的值
    control.RadioButton.prototype.SetValue = function (value) {
        //判断是否需要把“true” || "false" 转成0-1 为了解决sqlserver bit  数据类型的怪异
        var _needConvert = true;
        if (this.ControlDom.find(".cmn-control-radioButton input").length == 2) {

            this.ControlDom.find(".cmn-control-radioButton input").each(function (index, item) {
                if ($(item).val() == '1' || $(item).val() == '0') {
                } else { _needConvert = false; }
            });

            if (_needConvert && (value == 'True' || value == 'False')) { value = value == 'True' ? "1" : "0"; }

        }


        this.ControlDom.find(".cmn-control-radioButton input").each(function (index, item) {
            if ($(item).val() == value) {
                $(item).attr("checked", "checked");
            }
        });
    }
    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.RadioButton.prototype.SetWidth = function (Width) { this.ControlDom.find(".cmn-control-radioButton").width(Width); }
    //初始化控件
    control.RadioButton.prototype.Init = function () {
        this.ControlDom.find(".cmn-control-radioButton").attr("checked", false);
        if (!!this.ControlCfg.Default) { this.SetValue(this.ControlCfg.Default); }
    }
    //设置是否可用
    //isEnabled:是否可用，true:可用；false:不可用
    control.RadioButton.prototype.SetEnabled = function (isEnabled) {
        if (isEnabled) { this.ControlDom.find(".cmn-control-radioButton").attr("disabled", false); }
        else { this.ControlDom.find(".cmn-control-radioButton").attr("disabled", true); }
    }
    //设置输入焦点
    control.RadioButton.prototype.SetFocus = function () { this.ControlDom.find(".cmn-control-radioButton").focus(); }

})(CmnMis.UI.Control, Cmn.Object, Cmn.Event);

//--------------------------------TextArea控件类----------------------
(function (control, object) {
    control.TextArea = function (controlContainer, colName, controlCfg) {
        /// <summary>TextArea控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "TextArea", colName, controlCfg]);
    }

    //获取创建控件的html代码
    control.TextArea.prototype.GetInitHtml = function () {
        this.ControlCfg = $.extend(this.ControlCfg, { Height:150 });
        return "<textarea  class='cmn-control-textArea' style = 'width:100%;height:100%' /></textarea>";
    }

    //获取控件的值
    control.TextArea.prototype.GetValue = function () {
        return this.ControlDom.find(".cmn-control-textArea").val();
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.TextArea.prototype.SetValue = function (value) {
        this.ControlDom.find(".cmn-control-textArea").val(value);
    }

    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.TextArea.prototype.SetWidth = function (Width) { this.ControlDom.find(".cmn-control-textArea").width(Width); }
    //初始化控件
    control.TextArea.prototype.Init = function () {
        this.ControlDom.find(".cmn-control-textArea").val("");
        if (!!this.ControlCfg.Default) { this.SetValue(this.ControlCfg.Default); }
    }

    //设置是否可用
    //isEnabled:是否可用，true:可用；false:不可用
    control.TextArea.prototype.SetEnabled = function (isEnabled) {
        if (isEnabled) { this.ControlDom.find(".cmn-control-textArea").attr("disabled", false); }
        else { this.ControlDom.find(".cmn-control-textArea").attr("disabled", true); }
    }
    //设置输入焦点
    control.TextArea.prototype.SetFocus = function () { this.ControlDom.find(".cmn-control-textArea").focus(); }

})(CmnMis.UI.Control, Cmn.Object);

//--------------------------------Label控件类----------------------
(function (control, object) {
    control.Label = function (controlContainer, colName, controlCfg) {
        /// <summary>Label控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "TextArea", colName, controlCfg]);

    }

    //获取创建控件的html代码
    control.Label.prototype.GetInitHtml = function () {

        return "<label class='cmn-control-label' style = 'width:100%;height:100%' /></label>";
    }

    //获取控件的值
    control.Label.prototype.GetValue = function () { return this.ControlDom.find(".cmn-control-label").html(); }

    //设置控件的值
    //value:需要往控件中设置的值
    control.Label.prototype.SetValue = function (value) { this.ControlDom.find(".cmn-control-label").html(value); }

    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.Label.prototype.SetWidth = function (Width) { this.ControlDom.find(".cmn-control-label").width(Width); }
    //初始化控件
    control.Label.prototype.Init = function () {
        this.ControlDom.find(".cmn-control-label").html("");
        if (!!this.ControlCfg.Default) { this.SetValue(this.ControlCfg.Default); }
    }

})(CmnMis.UI.Control, Cmn.Object);

//--------------------------------DetailUserForm控件类----------------------
(function (control, object) {
    control.DetailUserForm = function (controlContainer, colName, controlCfg) {
        /// <summary>DetailUserForm控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>

        object.Inherit(this, control.BasControl, [controlContainer, "DetailUserForm", colName, controlCfg]);
    }

    //获取创建控件的html代码
    control.DetailUserForm.prototype.GetInitHtml = function () {
        this.ControlCfg = $.extend(this.ControlCfg, { Width: 749, Height: '100%' });
        return "<div class='cmn-UserFormTemplate' style='height:100%;'   name='cmn-UserForm" +
            this.ControlCfg.UserFormID + "_" + CmnMis.CurUserForm.UserFormID + "'></div>";
    }

    //获取控件的值
    control.DetailUserForm.prototype.GetValue = function () {
        var _self = this; 
        var _userFormInfo = CmnMis.Func.GetDetailUserFormInfoByID(_self.ControlCfg.UserFormID);

        return Cmn.Func.JsonToStr(_userFormInfo.TableCache.GetChangeRecList());
    }
   
    var BindUserFormEvent = function (userFormInfo,value,thisControl) {
        /// <summary>绑定用户表单事件</summary>
        /// <param name="userFormInfo" type="CmnMis.UserForm">用户表单信息</param>

        var _self = thisControl;

        userFormInfo.OnAddInitComplete.Add(function () {
            //外键字段设置成不能修改
            var _foreignKeyControl = userFormInfo.GetControlByName(_self.ControlCfg.ForeignKeyFieldName);

            if (_foreignKeyControl != null) {
                _foreignKeyControl.SetValue(value);
                _foreignKeyControl.SetEnabled(false);
            }

            $(userFormInfo.GetSelector(".AddMenuBtn")).show();
        });

        userFormInfo.OnUpdateInitComplete.Add(function () { $(userFormInfo.GetSelector(".AddMenuBtn")).show(); });
        userFormInfo.BeforeGetRecList.Add(function () { $(userFormInfo.GetSelector(".AddMenuBtn")).hide(); });
        userFormInfo.OnCancel.Add(function () { $(userFormInfo.GetSelector(".AddMenuBtn")).hide(); });

        $(userFormInfo.GetSelector(".AddMenuBtn")).hide();
        $(userFormInfo.GetSelector(".ConfigurationFormBtn")).hide();
        $(userFormInfo.GetSelector(".SearchWrap")).hide();
        $(userFormInfo.GetSelector(".FilterSelect")).hide();
        $(userFormInfo.GetSelector(".FindRangeWrap")).hide();

        //加上DetailForm的特殊class,主要是解决样式问题
        $(userFormInfo.GetSelector(".RightContentWrap")).addClass("DetailedFormWrap");

        //20150324/Dx添加属性
        //$(".DetailedFormWrap").parents(".Label2").css({ "height": "100%", "width": "100%", "background": "rgba(0,0,0,0.8)", "z-index": "2", "left": "0", "top": "0", "position": "fixed", "border": "none","display":"none" });


        //-----让明细弹出显示
        var _detailFormDom = $(userFormInfo.GetSelector()).parent();

        //加上明细表单的Mask
        if (_detailFormDom.find(".DetailedFormWrap").find(".DetailFormMask").length < 1) {
            _detailFormDom.find(".DetailedFormWrap").append("<div class='DetailFormMask' style='width:100%;height:100%;position:absolute;top:0;left:0;background: url(Image/Public/load.png) repeat;'></div>");
        }

        //明细表单mask跟随滚动条
        _detailFormDom.find(".DetailedFormWrap").off("scroll").on("scroll",function () {
            _detailFormDom.find(".DetailedFormWrap").find(".DetailFormMask").css("top", 
                _detailFormDom.find(".DetailedFormWrap").scrollTop()+"px");
        });

        //明细表单点击事件
        _detailFormDom.find(".DetailedFormWrap").find(".DetailFormMask").unbind("click").bind("click", function () {
            ShowDetailFormPop();
        });

        var ShowDetailFormPop = function () {
            /// <summary>弹出明细表单浮层</summary>
            
            //保存原先的宽高
            var _oldWidth = _detailFormDom.width();
            var _oldHeight = _detailFormDom.height();

            //显示明细表单
            _detailFormDom.addClass("DetailedFormPopWrap");
            _detailFormDom.width("100%");
            _detailFormDom.height("100%");
            $(".CloseDetailedFormPopBtn").show();
            _detailFormDom.find(".DetailedFormWrap").find(".DetailFormMask").hide();

            //绑定关闭明细表单按钮
            $(".CloseDetailedFormPopBtn").unbind("click").bind("click", function () {
                _detailFormDom.removeClass("DetailedFormPopWrap");
                _detailFormDom.width(_oldWidth);
                _detailFormDom.height(_oldHeight);
                $(".CloseDetailedFormPopBtn").hide();
                _detailFormDom.find(".DetailedFormWrap").find(".DetailFormMask").show();
                userFormInfo.ShowViewState(userFormInfo.Cfg.ViewState.RecList, true);
            });
        }
    }

    var InitDetailUserForm = function (value,thisControl) {
        /// <summary>初始化明细表单</summary>
        /// <param name="value" type="String">主键的值</param>
        
        if (value == "") { return; }

        var _self = thisControl;

        var _userFormInfo = CmnMis.Func.GetDetailUserFormInfoByID(_self.ControlCfg.UserFormID);

        _userFormInfo.SetFixedCondition("[" + _self.ControlCfg.ForeignKeyFieldName + "]='" + value + "'");

        if (_userFormInfo.TableCache != null) {
            _userFormInfo.TableCache.Init(_userFormInfo, _self.ControlCfg.ForeignKeyFieldName, value, function () {
                _userFormInfo.InitUserForm(); //必须在Init完成后初始化UserForm
                BindUserFormEvent(_userFormInfo,value,_self);
            });
        }
        else {
            _userFormInfo.InitUserForm();
            BindUserFormEvent(_userFormInfo,value,_self);
        }

        ////加上DetailForm的特殊class,主要是解决样式问题
        //_userFormInfo.AfterRecListLoad.Add(function () {
        //    $(_userFormInfo.GetSelector(".RightContentWrap")).addClass("DetailedFormWrap");
        //});

    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.DetailUserForm.prototype.SetValue = function (value) {
        var _self = this;

        //需要延时下，因为可能和init会冲突，就是这个地方先执行了，导致显示了空的数据
        setTimeout(function () { InitDetailUserForm(value, _self); }, 500);
    }

    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.DetailUserForm.prototype.SetWidth = function (Width) { this.ControlDom.find(".cmn-UserFormTemplate").width(Width); }
    //初始化控件
    control.DetailUserForm.prototype.Init = function () {
        InitDetailUserForm("99999999",this); //需要初始化下界面，临时设置下，但这个方法不是很好，后期修改
    }

})(CmnMis.UI.Control, Cmn.Object);


//--------------------------------------------------------
//*****************     EditExd控件类  **********************
//***************** @controlContainer 控件容器
//***************** @colName 字段名称
//***************** @controlCfg 控件配置
//--------------------------------------------------------
(function (control, object) {

    control.EditExd = function (controlContainer, colName, controlCfg) {
        /// <summary>Text控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>
        object.Inherit(this, control.BasControl, [controlContainer, "EditExd", colName, controlCfg]);

    }

    control.EditExd.prototype.InitControl = function (controlCfg) {
        var _self = this;

        //合并配置
        _self.ControlCfg = _self.InitControlConfig($.extend(controlCfg, { "UserFormID": CmnMis.TableOpt.GetUserForm(_self.ControlCfg.SaveTableName).UserFormID }));

        _self.ExdFieldContainer = $("<div></div>");
        _self.ExdFieldContainer.insertAfter(_self.ControlDom.hide());
       
        _self.BindData();
    }

    control.EditExd.prototype.BindData = function (where) {
        /// <summary>绑定数据</summary>
        var _self = this;
        $(_self.ExdFieldContainer).empty();

        //是表名
        if (_self.ControlCfg.FieldSourceType == '1') {
            var _useformid = CmnMis.TableOpt.GetUserForm(_self.ControlCfg.ItfUrl).UserFormID;

            CmnAjax.PostData(InterfaceUrl + "?method=GetColumnInfo", { CurUserFormID: _useformid }, function (data) {
                _self.CreateExdPanel(data.data);
            });
        }
            //是接口名称
        else if (_self.ControlCfg.FieldSourceType == '2') {

            var _param = {};

            if (!!where) {
                _param[_self.ControlCfg.ForeignKeyFieldName] = where.split("=")[1];
            }

            CmnMis.Itf.GetData(_self.ControlCfg.ItfUrl, _param, false, function (data) {
                _self.CreateExdPanel(data.data);
            });
        }

    }


    control.EditExd.prototype.CreateExdPanel = function (colinfo) {
        /// <summary>创建扩展界面</summary>
        var _self = this;
        $(_self.ExdFieldContainer).empty().css({ height: "auto" });

        if (!colinfo) { return false; }

        for (var _i = 0; _i < colinfo.length; _i++) {
            //字段项
            var _col = colinfo[_i];
            //判断是否是详情页面
            if (_col.IsShowInEdit != "1") { continue; }

            var _control = null;

            if (!!_col.ControlCfg) {
                if (object.IsType(_col.ControlCfg, "string")) {
                    _col.ControlCfg = $.parseJSON(_col.ControlCfg);
                }
            } else { _col.ControlCfg = {}; }

            _control = control.NewControl($(_self.ExdFieldContainer), _col.ColControlName, _col.ColName, _col.ControlCfg);

            _control.SetColDesc(_col.ColTitle);
        }
    }

    //初始化控件
    control.EditExd.prototype.Init = function () { control.InitValueList(this.ExdFieldContainer); }

    //获取控件的值
    control.EditExd.prototype.GetValue = function () {
        var _state = CmnMis.CurUserForm.CurViewState == CmnMis.CurUserForm.Cfg.ViewState.Add,
            _param = {"CmnOpt":_state?"Add":"Update"};

        _param[(this.ControlCfg.ForeignKeyFieldName || CmnMis.CurUserForm.KeyColName)] = CmnMis.CurUserForm.GetControlByName(this.ControlCfg.ForeignKeyFieldName).GetValue();

        return Cmn.Func.JsonToStr([$.extend(control.GetValueList(this.ExdFieldContainer), _param)]);
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.EditExd.prototype.SetValue = function (keyField) {

        var _self = this,
            _useformid = _self.ControlCfg.UserFormID,
            _recid = !!_self.ControlCfg.ForeignKeyFieldName ? CmnMis.CurUserForm.GetControlByName(_self.ControlCfg.ForeignKeyFieldName).GetValue() : keyField;
        if (!!_recid) {
            CmnAjax.PostData(InterfaceUrl + "?method=GetRecList", { CurUserFormID: _useformid, RecID: _recid }, function (data) {
                $.each(data.data, function () {  control.SetValueList(_self.ExdFieldContainer, this);  });
            });
        }

    }

})(CmnMis.UI.Control, Cmn.Object);



//--------------------------------DetailMultiCheckbox控件类----------------------
(function (control, object) {
    control.DetailMultiCheckbox = function (controlContainer, colName, controlCfg) {
        /// <summary>DetailMultiCheckbox控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>

        this.SelectDataKeyField = ""; //选择项数据列表中的主键字段名
        this.SaveKeyField = ""; //保存记录的表的主键字段名
        this.ForeignKeyValue = ""; //外键的值

        object.Inherit(this, control.BasControl, [controlContainer, "DetailMultiCheckbox", colName, controlCfg]);
    }

    //获取创建控件的html代码
    control.DetailMultiCheckbox.prototype.GetInitHtml = function () {
        return "<div class='cmn-DetailMultiCheckbox' style='width:100%;height:100%;text-align:left;'  name='dmc-" +
            this.ColName + "'></div>";
    }

    control.DetailMultiCheckbox.prototype.InitControl = function () {
        /// <summary>初始化控件</summary>

        var _self = this;

        CmnMis.UI.Control.GetControlData(this.ControlCfg, "", function (data) {
            if (data.length > 0) {
                var _descField = ""; //描述字段名
                var _keyNo = 0; //第几个key

                for (var _key in data[0]) {
                    if (_keyNo == 0) { _self.SelectDataKeyField = _key; }
                    else if (_keyNo == 1) { _descField = _key; }

                    _keyNo++;
                }

                var _itemWidth =  _self.ControlCfg["ItemWidth"] || "100";

                for (var _i = 0; _i < data.length; _i++) {
                    _self.ControlDom.find(".cmn-DetailMultiCheckbox").append(
                        "<div style='display: inline-block;*display:inline;zoom:1; width:" + _itemWidth +
                        "px;vertical-align:middle;margin:auto 5px;'><input type='checkbox' style='width:auto; vertical-align:middle;display:inline-block;'  value='" +
                        data[_i][_self.SelectDataKeyField] + "' id='" + _self.ColName + "_" + data[_i][_self.SelectDataKeyField]
                        + "' /><label style='width:"+(_itemWidth-20)+"px;vertical-align:middle;display:inline-block;line-height:13px;word-break:break-all;word-wrap:break-word;' for='" + _self.ColName + "_" + data[_i][_self.SelectDataKeyField] + "'>" +
                        data[_i][_descField] + "</label></div>");
                }

                //设置父亲的高度
                _self.ControlDom.find(".cmn-DetailMultiCheckbox").parent().css("height", "auto").parent().css("height", "auto");
                _self.ControlDom.find(".cmn-DetailMultiCheckbox").parent().css("width", _self.ControlCfg["Width"] + "px");
            }
        });
    }

    //获取控件的值
    control.DetailMultiCheckbox.prototype.GetValue = function () {
        var _self = this;
        var _retVal = new Array();

        this.ControlDom.find("input[type=checkbox]").each(function () {
            if ($(this).attr("OldValue") == "1") { //说明原先已经存在
                if ($(this).attr("checked") != "checked") { //需要删除记录
                    // [{ "InterfaceParamID": "ID_1", "InterfaceID": "146", "ParamName": "dkk", "ParamDesc": "", "Memo": "", "Interfacedesc": "", "CmnOpt": "Add" }]

                    var _rec = {};

                    _rec[_self.SaveKeyField] = $(this).attr(_self.SaveKeyField);
                    _rec["CmnOpt"] = "Delete";

                    _retVal[_retVal.length] = _rec;
                }
            }
            else { //说明原先不存在
                if ($(this).attr("checked") == "checked") { //需要增加记录
                    var _rec = {};

                    _rec[_self.SelectDataKeyField] = $(this).val();
                    _rec[_self.ControlCfg["ForeignKeyFieldName"]] = _self.ForeignKeyValue;
                    _rec["CmnOpt"] = "Add";

                    _retVal[_retVal.length] = _rec;
                }
            }
        });


        return Cmn.Func.JsonToStr(_retVal);
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.DetailMultiCheckbox.prototype.SetValue = function (value) {
        var _self = this;

        _self.ForeignKeyValue = value;

        CmnMis.TableOpt.GetData(_self.ControlCfg["SaveTableName"], {Condition: "[GoodsID]='"+value+"'" }, false, function (data) {
            if (data.data.length > 0) {
                for (var _key in data.data[0]) {
                    _self.SaveKeyField = _key;
                    break;
                }

                for (var _i = 0; _i < data.data.length; _i++) {
                    var _checkbox = _self.ControlDom.find("#" + _self.ColName + "_" + data.data[_i][_self.SelectDataKeyField]);

                    if (_checkbox.length > 0) {
                        _checkbox.attr("checked", "checked");
                        _checkbox.attr("OldValue", "1");
                        _checkbox.attr(_self.SaveKeyField, data.data[_i][_self.SaveKeyField]);
                    }
                }
            }
        });
    }

    //初始化控件
    control.DetailMultiCheckbox.prototype.Init = function () {
        this.ControlDom.find("input[type=checkbox]").attr("checked", false);
        this.ControlDom.find("input[type=checkbox]").attr("OldValue", "");
    }

})(CmnMis.UI.Control, Cmn.Object);