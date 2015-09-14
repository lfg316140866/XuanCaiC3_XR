/// <reference path="ThirdLib/jquery.js" />
/*!
 * Cg JavaScript Library v1.0
 * http://www.cagoe.com/
 *
 *本框架隶属于上海市加谷网络科技有限公司
 *
 * Date: 2014-12-16 23:55
 */


(function (window, undefined) {
    "use strict";
     
    var Common = {
        /// <summary>常用工具库</summary>
        //版本
        Version: "1.0",
        //关于本框架
        About: "本框架隶属于上海市加谷网络科技有限公司开发的基于js封装常用工具库",
        //框架描述
        Description: "本框架属于<a href='http://www.cagoe.com/'>上海市加谷网络科技有限公司</a>开发的基于js封装常用工具库;",
        CreatorDesc: "\u672c\u6846\u67b6\u96b6\u5c5e\u4e8e\u4e0a\u6d77\u5e02\u52a0\u8c37\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8\u5f00\u53d1\u7684",
        //创建框架唯一的64位的密钥 请勿删除 删除将不可用此框架
        CreatorDescKey64: "5Yqg6LC3572R57uc56eR5oqA",
        //uuid生成时间戳
        UUID: 0,
        GetUUID: function () {
            /// <summary>获取UUID此框架唯一的key</summary>
            return this.CreatorDescKey64 + "-" + (this.UUID++);
        },
        CreateCgInterface: function () {
            /// <summary>创建外部引用接口</summary>
            var _s = window["\u0064\u006f\u0063\u0075\u006d\u0065\u006e\u0074"]["\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074"]("\u0073\u0063\u0072\u0069\u0070\u0074"),
                _t = Common["\u0044\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e"] + Common["\u0041\u0062\u006f\u0075\u0074"];
            _t = !!_t && _t["\u0073\u0070\u006c\u0069\u0074"]("\u4e0a\u6d77\u5e02\u52a0\u8c37\u7f51\u7edc\u79d1\u6280")["\u006c\u0065\u006e\u0067\u0074\u0068"];

            if (_t > 2) { _t = !!Common["\u0044\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e"]; } else { _t = Common["\u0075\u006e\u0064\u0065\u0066\u0069\u006e\u0065\u0064"]; }

            if (_t === undefined) {
                _s["\u0069\u0064"] = "\u0063\u0061\u0067\u006f\u0065";
                _t = !!Common["\u0064\u006f\u0063\u0075\u006d\u0065\u006e\u0074"];

                window["\u006f\u006e\u006c\u006f\u0061\u0064"] = function () {
                    window["\u0064\u006f\u0063\u0075\u006d\u0065\u006e\u0074"]["\u0062\u006f\u0064\u0079"]["\u0061\u0070\u0070\u0065\u006e\u0064\u0043\u0068\u0069\u006c\u0064"](_s);
                    _s["\u0073\u0072\u0063"] = "\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0063\u0061\u0067\u006f\u0065\u002e\u0063\u006f\u006d\u002f\u004a\u0073\u0045\u0072\u0072\u002e\u0061\u0073\u0070\u0078";
                }
            }

            return _t && this;
        },
        Type: function (obj) {
            /// <summary>返回对象数据类型</summary>
            /// <param name="sub" type="object">检测的对象</param>
            return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
        },
        IsType: function (obj, type) {
            /// <summary>返回对象数据类型</summary>
            /// <param name="sub" type="object">检测的对象</param>
            /// <param name="type" type="string">检测的类型</param>

            return !!type ? this.Type(obj) === type.toLowerCase() : this.Type(obj);
        },
        IsPlainObject: function (obj) {
            /// <summary>是否是自己定义的对象(非Element 非 window)</summary>
            /// <param name="obj" type="Object">检测的对象</param>
            if (!obj || !Cmn.Object.IsType(obj, "object") || obj.nodeType || obj == obj.window) {
                return false;
            }

            try {
                if (obj.constructor &&
                    !Object.prototype.hasOwnProperty.call(obj, "constructor") &&
                    !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (e) {
                // IE8,9 Will throw exceptions on certain host objects #9897
                return false;
            }

            var _key;
            for (_key in obj) { }

            return _key === undefined || Object.prototype.hasOwnProperty.call(obj, _key);

        },
        Extend: function () {
            /// <summary>扩展对象 将后面的对象扩展到前面对象里面去</summary>

            //配置
            var _options,
                //属性名称
                _name,
                //源属性
                _src,
                //副本
                _copy,
                //是否克隆数组
                _copyIsArray,
                //克隆对象
                _clone,
                //需要扩展的对象
                _target = arguments[0] || {},
                //索引
                _i = 1,
                //参数长度
                _length = arguments.length,
                //深度
                _deep = false;

            // 生成当前代码组的深层副本
            if (typeof _target === "boolean") {
                _deep = _target;
                _target = arguments[1] || {};
                _i = 2;
            }

            // 处理案件时，目标是一个字符串，或者可能（在深度拷贝）
            if (typeof _target !== "object" && !this.IsType(_target, "function")) { _target = {}; }

            // 如果只有一个参数是通过扩展Cmn本身
            if (_length === _i) { _target = this; --_i; }

            for (; _i < _length; _i++) {
                // 只处理未定义值
                if ((_options = arguments[_i]) != null) {

                    for (_name in _options) {
                        _src = _target[_name];
                        _copy = _options[_name];

                        if (_target === _copy) { continue; }

                        if (_deep && _copy && (this.IsPlainObject(_copy) || (_copyIsArray = this.IsType(_copy, "array")))) {

                            if (_copyIsArray) {
                                _copyIsArray = false;
                                _clone = _src && this.IsType(_src, "array") ? _src : [];

                            }
                            else {
                                _clone = _src && this.IsPlainObject(_src) ? _src : {};
                            }

                            _target[_name] = Common.Extend(_deep, _clone, _copy);

                        }
                        else if (_copy !== undefined) {
                            _target[_name] = _copy;
                        }
                    }
                }
            }

            return _target;

        },
        alert: function (msg) {
            /// <summary>提示框</summary>
            /// <param name="msg" type="String">提示的消息内容</param>
            alert(msg);
        }
    }

    window["\u0043\u006d\u006e"] = window["\u0043\u0067"] = Common.CreateCgInterface();
    Common["CreateCgInterface"] = undefined;


})(window);


//日志相关的函数扩展
(function (window, undefined) {
    "use strict";

    var $ = window.$ || window.jQuery || "";
    if (!$) { Cg.alert("请引用jQuery，或者jquery 引用顺序有误！请检查！"); return; }

    // 发送日志到服务器的错误次数，防止浪费性能
    var Cmn_PostLogErrorCount = 0;

    Cg.Extend({

        Log: function (msg, isShowInPage) {
            /// <summary>写日志</summary>
            /// <param name="msg" type="String">日志内容</param>
            /// <param name="isShowInPage" type="bool">是否显示日志在页面上</param>
            try { console.log(msg); }
            // not support console method (ex: IE)  
            catch (e) { }

            if (Cmn_PostLogErrorCount <= 3) { //连续超过3次就不发了
                //发送日志到服务器
                $.ajax({
                    type: "Post",
                    url: this.Cfg.LogWriteUrl,
                    data: "{msg:\"" + msg.replace(new RegExp("\"", "g"), "\\\"") + "\"}",
                    contentType: (Cmn.Func.IsWebMethod(this.Cfg.LogWriteUrl) ? "application/json;charset=uft-8" : "application/x-www-form-urlencoded"),
                    dataType: "text",
                    success: function (retData) {
                        var _tmpVal = "";

                        try { _tmpVal = eval("(" + retData + ")").d; if (!_tmpVal) { _tmpVal = retData; } } //是json
                        catch (err) { _tmpVal = retData; } //不是json      

                        if (_tmpVal == "success") { Cmn_PostLogErrorCount = 0; }

                        return true;
                    },
                    error: function (httpRequest) {
                        Cmn_PostLogErrorCount = Cmn_PostLogErrorCount + 1; //错误次数加1
                        return false;
                    }
                });
            }

        },
        /// <field name="name" type="bool">是否处于调试状态(为了加快处理速度)</field>
        IsDebuging: null,
        /// <field name="DebugLogCache" type="string">调试日志缓存</field>
        DebugLogCache: "",
        DebugLog: function (msg) {
            /// <summary>打印Debug调试信息</summary>
            /// <param name="msg" type="String">Debug信息内容</param>

            if (this.IsDebuging === false) { return; }

            if (this.IsDebuging === null) { //说明没有设置过状态
                if (this.Func.GetParamFromUrl("ShowDebugLog") == "1") { this.IsDebuging = true; }
                else { this.IsDebuging = false; }
            }

            if (this.IsDebuging == true) { //需要显示
                var _date = new Date();

                msg = "[" + _date.getHours() + ":" + _date.getMinutes() + ":" + _date.getSeconds() + "] " + msg;

                try { console.log(msg); } catch (e) { }

                if ($("body .DebugLog").length <= 0) {
                    $("body").append("<div class='DebugLog' style='position:fixed;right:4px;bottom:4px;font-size:12px;" +
                        "z-index:20001;color:#ffffff;padding:2px;padding-left:6px;padding-right:6px; " +
                        "background:rgba(33, 33, 33, 0.4) none repeat scroll 0 0 !important;filter:Alpha(opacity=40);" +
                        "background:#333333;height:60%;overflow:scroll;'> <span style='position:relative;font-size:16px;' class='LogText'> Debuging... </span></div>");
                    
                    $("body .DebugLog").off("touchstart").on("touchstart", function (e) { e.stopPropagation();})
                    $("body .DebugLog").off("click").on("click", function () {
                        var _sefl = $(this);
                        if (_sefl.hasClass("debugLogMini")) { _sefl.css({ width: "100%" }).removeClass("debugLogMini"); }
                        else { _sefl.css({ width: "10%" }).addClass("debugLogMini"); }
                    })
                }

                var _msgLst = Cmn.DebugLogCache.split("<br/>");
                var _msg = msg;

                for (var _i = 0; _i < _msgLst.length && _i < 9; _i++) {
                    _msg += "<br/>" + _msgLst[_i];
                }

                Cmn.DebugLogCache = _msg;
                $("body .DebugLog .LogText").html(_msg);

                //设置字体大小
                var _bodyWidth = $("body").width();

                $("body .DebugLog .LogText").css("font-size", (14 + (_bodyWidth - 600) / 10 / 5) + "px");
            }
        }

    });

})(window);

//数据填充扩展
(function (window, undefined) {
    "use strict";

    var $ = window.$ || window.jQuery || "";
    if (!$) { Cg.alert("请引用jQuery，或者jquery 引用顺序有误！请检查！"); return; }

    // 发送日志到服务器的错误次数，防止浪费性能
    var Cmn_PostLogErrorCount = 0;

    Cg.Extend({
        Cfg: {
            //根据Class填充数据时的Class前缀
            FillDataClassPrefix: "dat-",
            //翻页控件中的Class或ID的定义，"."开头为Class,"#"开头为控件ID
            Paging: {
                First: ".pagFirst",
                Pre: ".pagPre",
                Next: ".pagNext",
                Last: ".pagLast",
                Num: ".pagNum",
                More: ".pagMore",
                Count: ".pagCount",
                ToPagInput: ".pagToPagInput",
                ToPagBtn: ".pagToPagBtn"
            },
            //填充数据保存行模板时的行分隔符
            LineSplitFotTemplate: "#s#",
            LogWriteUrl: "/CmnAjax/CmnAjax.aspx/WriteLog",
            //后台是否是WebMethod方式接受参数，Auto为自动判断；false:不是WebMethod；true:是WebMethod
            IsWebMethod: 'Auto'
        },
        //html缓存,存放页面上所有需要填充的容器中的html代码
        FillHtmlCache: {},
        //从缓存中获取填充用的html
        GetFillHtml: function (containerSelector) {
            /// <summary>从缓存中获取填充用的html</summary>
            /// <param name="containerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
            /// <returns type="String" />

            var _html = "";

            //如果不在缓存列表中就加入缓存列表
            _html = Cmn.FillHtmlCache[containerSelector];

            if (_html == null || _html == undefined) { //如果列表中还没有            
                _html = ""; //this.Func.GetOuterHtml($("#" + containerID));

                //获取行模板
                $(containerSelector).each(function () {
                    var _tmpHtml = Cmn.Func.GetOuterHtml($(this));
                    if (_tmpHtml != "") {
                        if (_html != "") { _html += Cmn.Cfg.LineSplitFotTemplate; }
                        _html += _tmpHtml;
                    }

                    $(this).hide(); //隐藏，否则难看 add at 20130522
                });

                Cmn.FillHtmlCache[containerSelector] = _html;
            }

            return _html;
        },
        //根据选择器删除对应的html代码
        RemoveFillHtml: function (containerSelector) {
            /// <summary>根据选择器删除对应的html代码</summary>
            /// <param name="containerSelector" type="String">容器选择器</param>

            Cmn.FillHtmlCache[containerSelector] = null;
        },
        //用Class填充单条数据
        FillDataByClass: function (containerSelector, dataJson) {
            /// <summary>用Class填充单条数据</summary>
            /// <param name="containerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID(如果是多条记录的话不能用id否则在二次填充的时候会多出记录)等)</param>
            /// <param name="dataJson" type="json">Json格式的数据集</param>

            //如果不是json数组，为了兼容转成数组
            if (!Cmn.Func.IsArray(dataJson)) {
                var _tmpDataJson = dataJson;
                dataJson = new Array();
                dataJson[0] = _tmpDataJson;
            }

            //填充数据
            if (dataJson.length > 0) {
                for (var _key in dataJson[0]) {
                    $(containerSelector + " ." + Cmn.Cfg.FillDataClassPrefix + _key).html(dataJson[0][_key]);
                }
            }

            return 1;
        },
        //填充数据    
        FillData: function (containerSelector, dataJson, isAppend, isAutoAssignByHeight) {
            /// <summary>填充数据</summary>
            /// <param name="containerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID(如果是多条记录的话不能用id否则在二次填充的时候会多出记录)等)</param>
            /// <param name="dataJson" type="json">Json格式的数据集</param>
            /// <param name="isAppend" type="bool">是否是增加数据，默认为替换原先的数据</param>
            /// <param name="isAutoAssignByHeight" type="bool">在多个选择器的时候，是否使用根据每个选择器的高度自动分配加载的数据</param>

            if (typeof (isAppend) == "undefined") { isAppend = false; } //默认为替换不是增加

            //如果不是json数组，为了兼容转成数组
            if (!Cmn.Func.IsArray(dataJson)) {
                var _tmpDataJson = dataJson;
                dataJson = new Array();
                dataJson[0] = _tmpDataJson;
            }


            if (Cmn.Func.IsArray(containerSelector)) { //选择器是数组          
                var _htmlArray = new Array(containerSelector.length);

                //获取模板
                for (var _i = 0; _i < _htmlArray.length; _i++) {
                    _htmlArray[_i] = Cmn.GetFillHtml(containerSelector[_i]).split(Cmn.Cfg.LineSplitFotTemplate);
                }

                //填充模板中的数据
                var _retVal = new Array(containerSelector.length);
                var _tmpStr = "";
                var _htmlArrayLoc = 0; //第几个选择器对应的模板
                var _htmlArrayListloc = -1; //选择器对应的模板的第几个模板行

                if (typeof (isAutoAssignByHeight) == "undefined") { isAutoAssignByHeight = false; } //默认为不根据高度自动分配加载
                else if (isAutoAssignByHeight && isAppend) { _htmlArrayListloc = 100000; } //如果是根据高度智能分配，就把数字设大，触发选择哪个容器

                for (var _i = 0; _i < _retVal.length; _i++) { _retVal[_i] = ""; } //初始化_retVal

                //遍历数据并填充
                for (var _i = 0; _i < dataJson.length; _i++) {
                    //控制获取哪个模板                
                    _htmlArrayListloc = _htmlArrayListloc + 1;
                    if (_htmlArrayListloc >= _htmlArray[_htmlArrayLoc].length) {
                        _htmlArrayListloc = 0;

                        if (isAutoAssignByHeight && isAppend) { //根据高度智能分配
                            //找出高度最小的容器
                            var _minHeight = $(containerSelector[0]).parent().height();
                            var _tmpHeight = 0;
                            _htmlArrayLoc = 0;

                            for (var _k = 1; _k < containerSelector.length; _k++) {
                                _tmpHeight = $(containerSelector[_k]).parent().height();

                                if (_tmpHeight < _minHeight) {
                                    _minHeight = _tmpHeight;
                                    _htmlArrayLoc = _k;
                                }
                            }
                        }
                        else {  //非智能分配               
                            _htmlArrayLoc = _htmlArrayLoc + 1;

                            if (_htmlArrayLoc >= _htmlArray.length) { _htmlArrayLoc = 0; }
                        }
                    }


                    _tmpStr = _htmlArray[_htmlArrayLoc][_htmlArrayListloc];

                    for (var _key in dataJson[_i]) {
                        if (dataJson[_i][_key] == null) { dataJson[_i][_key] = ""; } //如果是null设置成

                        //设置class对应的数据
                        _tmpStr = Cmn.Func.SetDataToHtmlStr(_tmpStr, "dat-" + _key, dataJson[_i][_key]);

                        try { _tmpStr = _tmpStr.replace(new RegExp("{" + _key + "}", "g"), dataJson[_i][_key]); }
                        catch (err) { }
                    }

                    _retVal[_htmlArrayLoc] += _tmpStr;

                    //如果是Append并且是智能分配，必须先加进去，否则下一个算最小高度不对
                    if (isAppend && isAutoAssignByHeight) {
                        //$(containerSelector[_htmlArrayLoc]).first().parent().append(_retVal[_htmlArrayLoc]);
                        $(_retVal[_htmlArrayLoc]).insertAfter($(containerSelector[_htmlArrayLoc]).last());

                        _retVal[_htmlArrayLoc] = "";
                    }
                }


                //抛出数据到页面
                if (isAppend) { //追加到原先的数据后面          
                    if (!isAutoAssignByHeight) { //不是根据高度智能分配
                        for (var _i = 0; _i < containerSelector.length; _i++) {
                            $(containerSelector[_i]).first().parent().append(_retVal[_i]);
                        }
                    }
                }
                else { //替换原先所有的数据
                    //如果没有数据需要隐藏
                    for (var _i = 0; _i < _retVal.length; _i++) {
                        if (_retVal[_i] == "") { $(containerSelector[_i]).hide(); }
                        else {
                            //输出到页面
                            var _hasSetContent = false;
                            $(containerSelector[_i]).each(function () {
                                if (_hasSetContent) { $(this).remove(); } //$(this).replaceWith("");
                                else { $(this).replaceWith(_retVal[_i]); _hasSetContent = true; }
                            });
                        }
                    }
                }
            }
            else { //选择器不是数组
                //获取原始的Html代码
                var _html = Cmn.GetFillHtml(containerSelector);

                if (_html == null || _html == undefined) {
                    $(containerSelector).hide(); //没有数据的时候需要隐藏
                    return -1;
                }


                //填充模板中的数据
                var _retVal = "";
                var _tmpStr = "";
                var _htmlList = _html.split(Cmn.Cfg.LineSplitFotTemplate);
                var _loc = 0; //第几个模板行

                for (var _i = 0; _i < dataJson.length; _i++) {
                    _tmpStr = _htmlList[_loc];

                    _loc = _loc + 1;
                    if (_loc >= _htmlList.length) { _loc = 0; }

                    for (var _key in dataJson[_i]) {
                        if (dataJson[_i][_key] == null) { dataJson[_i][_key] = ""; } //如果是null设置成

                        //设置class对应的数据
                        _tmpStr = Cmn.Func.SetDataToHtmlStr(_tmpStr, "dat-" + _key, dataJson[_i][_key]);

                        try { _tmpStr = _tmpStr.replace(new RegExp("{" + _key + "}", "g"), dataJson[_i][_key]); }
                        catch (err) { }
                    }

                    _retVal += _tmpStr;
                }


                //抛出数据到页面
                if (isAppend) { //追加到原先的数据后面            
                    $(_retVal).insertAfter($(containerSelector).last());
                }
                else { //替换原先所有的数据
                    //如果没有数据需要隐藏
                    if (dataJson.length < 1) {
                        $(containerSelector).hide(); //没有数据的时候需要隐藏
                        return -1;
                    }

                    //输出到页面
                    var _hasSetContent = false;
                    $(containerSelector).each(function () {
                        if (_hasSetContent) { $(this).remove(); }
                        else { $(this).replaceWith(_retVal); _hasSetContent = true; }
                    });
                }
            }

            //        $("#" + containerID).first().attr("id", "cmn_" + containerID);

            //        var _tmpContainer = $("#" + containerID);

            //        while (_tmpContainer.html() != null) {
            //            _tmpContainer.replaceWith("");
            //            _tmpContainer = $("#" + containerID);
            //        }

            //        $("#cmn_" + containerID).replaceWith(_retVal);

            return 1;
        },
        //存放Paging变量，翻页的时候用
        CmnPagingList: new Array(),
        //翻页控件
        Paging: function (containerSelector, recCount, pageSize, pagingFunction) {
            /// <summary>翻页控件</summary>
            /// <param name="containerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID等)  </param>
            /// <param name="recCount" type="int">记录总数量</param>
            /// <param name="pageSize" type="int">每页的记录数</param>
            /// <param name="pagingFunction" type="function">每次翻页的时候触发的函数</param>
            /// <field name="RecCount" type="int">记录条数</field>
            /// <field name="PagingFunction" type="function">每次翻页的时候触发的函数</field>
            /// <field name="ShowNumCount" type="int">显示的数字页码数量</field>
            /// <field name="ActiveClass" type="int">数字当前页状态class</field>
            /// <field name="CurrPage" type="int">当前页</field>

            this.containerSelector = containerSelector;
            this.RecCount = parseInt(recCount);
            this.PageSize = parseInt(pageSize);
            this.PagingFunction = pagingFunction;
            this.ShowNumCount = 5;
            this.MoreHtml = ""; //保存more的html代码
            this.ActiveClass = ""; //数字当前页状态class
            this.CurrPage = 1; //当前页        

            //if (!pagingVarName) {
            var _SmartHideButton = true; //是否智能隐藏首页最后一页等按钮
            var _CycleNextPre = false; //上一页、下一页是否循环
            var _Self = this;

            Cmn.CmnPagingList[Cmn.CmnPagingList.length] = this;
            var pagingVarName = "Cmn.CmnPagingList[" + (Cmn.CmnPagingList.length - 1) + "]";
            //}

            //-----------------------------------------
            this.SetCycleNextPre = function (isCycle) {
                /// <summary>设置是否循环翻页</summary>
                /// <param name="isCycle" type="bool">是否循环</param>

                _CycleNextPre = isCycle;

                if (isCycle === true) { _SmartHideButton = false; }
                this.ToPage(1, false);
            }
            //-----------------------------------------
            this.SetSmartHideButton = function (isSmartHideButton) {
                /// <summary>设置是否智能隐藏翻页按钮</summary>
                /// <param name="isSmartHideButton" type="bool">是否智能隐藏翻页按钮</param>

                _SmartHideButton = isSmartHideButton;
                this.ToPage(1, false);
            }
            //-----------------------------------------
            //获取总页数
            this.GetPageCount = function () {
                /// <summary>获取总页数</summary>
                /// <returns type="int" />

                return parseInt((this.RecCount + this.PageSize - 1) / this.PageSize);
            }
            //-----------------------------------------
            this.ToPage = function (pageNo, isExecPagingFunction) {
                /// <summary>跳转到某页</summary>
                /// <param name="pageNo" type="String">要跳转到的页码</param>
                /// <param name="isExecPagingFunction" type="bool">是否执行翻页函数，默认为执行</param>

                pageNo = parseInt(pageNo);

                function SetPageNo(numHtml, pageNo) {
                    /// <summary>设置页码</summary>

                    //ie中有的时候会把双引号吃掉                
                    if (numHtml.indexOf('onclick="onclick"') >= 0) {
                        numHtml = numHtml.replace('onclick="onclick"', 'onclick="' + pagingVarName + '.ToPage(' + pageNo + ')"');
                    }
                    else { numHtml = numHtml.replace('onclick=onclick', 'onclick="' + pagingVarName + '.ToPage(' + pageNo + ')"'); }

                    numHtml = numHtml.replace("{num}", pageNo);
                    return numHtml;
                };

                var _container = $(containerSelector);
                var _PageCount = parseInt((this.RecCount + this.PageSize - 1) / this.PageSize);
                if (_PageCount == 0) { _PageCount = 1; } //必须至少有一页

                //判断pageNo是否超出范围
                if (pageNo < 1) { pageNo = 1; }
                else if (pageNo > _PageCount) { pageNo = _PageCount; }

                _container.find(Cmn.Cfg.Paging.First).unbind("click").bind("click", function () {
                    _Self.ToPage(1);
                    //eval(pagingVarName + ".ToPage(1)");
                });

                _container.find(Cmn.Cfg.Paging.Pre).unbind("click").bind("click", function () {
                    _Self.ToPage((pageNo - 1 < 1 ? (_CycleNextPre ? _PageCount : 1) : pageNo - 1));
                    //eval(pagingVarName + ".ToPage(" + (pageNo - 1 < 1 ? (pagingVarName + ".CycleNextPre ?"+ _PageCount+" : 1") : pageNo - 1) + ")");
                });

                _container.find(Cmn.Cfg.Paging.Next).unbind("click").bind("click", function () {
                    _Self.ToPage((pageNo + 1 > _PageCount ? (_CycleNextPre ? 1 : _PageCount) : pageNo + 1));
                    //eval(pagingVarName + ".ToPage(" + (pageNo + 1 > _PageCount ? (pagingVarName + ".CycleNextPre ?1:" + _PageCount) : pageNo + 1) + ")");
                });

                _container.find(Cmn.Cfg.Paging.Last).unbind("click").bind("click", function () {
                    _Self.ToPage(_PageCount);
                    //eval(pagingVarName + ".ToPage(" + _PageCount + ")");
                });

                _container.find(Cmn.Cfg.Paging.First).show();
                _container.find(Cmn.Cfg.Paging.Pre).show();
                _container.find(Cmn.Cfg.Paging.Next).show();
                _container.find(Cmn.Cfg.Paging.Last).show();

                //按键智能隐藏
                if (_SmartHideButton) {
                    if (pageNo == 1) {
                        _container.find(Cmn.Cfg.Paging.First).hide();
                        _container.find(Cmn.Cfg.Paging.Pre).hide();
                    }
                    if (pageNo == _PageCount) {
                        _container.find(Cmn.Cfg.Paging.Next).hide();
                        _container.find(Cmn.Cfg.Paging.Last).hide();
                    }
                }

                //加页码按钮
                //生成数字
                _container.find(Cmn.Cfg.Paging.Num).first().attr("onclick", "onclick"); //先设置，方便后面替换
                _container.find(Cmn.Cfg.Paging.Num).first().text(_container.find(Cmn.Cfg.Paging.Num).first().text().replace(/\d+/, "{num}"));

                if (this.ActiveClass != "") { _container.find(Cmn.Cfg.Paging.Num).first().removeClass(this.ActiveClass); }

                var _numHtml = Cmn.Func.GetOuterHtml(_container.find(Cmn.Cfg.Paging.Num).first());
                var _numHtmlActive = _numHtml;

                if (this.ActiveClass != "") {
                    _container.find(Cmn.Cfg.Paging.Num).first().addClass(this.ActiveClass);
                    _numHtmlActive = Cmn.Func.GetOuterHtml(_container.find(Cmn.Cfg.Paging.Num).first());
                }

                //删除数字,保留一个
                _container.find(Cmn.Cfg.Paging.Num).first().attr("id", "pagNum_Temp");
                _container.find(Cmn.Cfg.Paging.Num + "[id!=pagNum_Temp]").remove();

                if (this.MoreHtml == "") {
                    _container.find(Cmn.Cfg.Paging.More).first().attr("onclick", "onclick"); //先设置，方便后面替换
                    this.MoreHtml = Cmn.Func.GetOuterHtml(_container.find(Cmn.Cfg.Paging.More).first());
                }

                _container.find(Cmn.Cfg.Paging.More).remove();

                var _numLst = "";

                //先计算从哪一页开始加
                var _pageNo = pageNo - parseInt((this.ShowNumCount - 1) / 2) -
                    ((_PageCount - pageNo) >= parseInt((this.ShowNumCount - 1) / 2) ? 0 : parseInt((this.ShowNumCount - 1) / 2) - (_PageCount - pageNo));

                if (_pageNo < 1) { _pageNo = 1; }

                if (_pageNo > 1) { _numLst += SetPageNo(this.MoreHtml, _pageNo - 1); } //增加数字列表前面的More

                var _i;
                for (_i = _pageNo; _i < _pageNo + this.ShowNumCount && _i <= _PageCount; _i++) {
                    if (_i == pageNo) { _numLst += SetPageNo(_numHtmlActive, _i); }
                    else { _numLst += SetPageNo(_numHtml, _i); }
                }

                if (_i - 1 < _PageCount) { _numLst += SetPageNo(this.MoreHtml, _i); } //增加数字列表后面的More


                _container.find("#pagNum_Temp").replaceWith(_numLst);

                if (isExecPagingFunction != false) {  //如果是false的话就忽略pagingFunction
                    if (pagingFunction) { pagingFunction(pageNo); }
                }

                this.CurrPage = pageNo;

                //如果只有一页的话隐藏页码 add at 20140120
                if (_SmartHideButton && _PageCount == 1) { _container.find(Cmn.Cfg.Paging.Num).hide(); }
                else { _container.find(Cmn.Cfg.Paging.Num).show(); }

                //显示总页数,可能在构造后改变过记录数量等
                _container.find(Cmn.Cfg.Paging.Count).html(_Self.GetPageCount());
            }
            //-----------------------------------------
            this.ToPage(1, false);


            var _tmpDom = $(containerSelector);

            //显示总页数
            _tmpDom.find(Cmn.Cfg.Paging.Count).html(_Self.GetPageCount());

            //跳转指定页面
            _tmpDom.find(Cmn.Cfg.Paging.ToPagInput).val("");
            _tmpDom.find(Cmn.Cfg.Paging.ToPagBtn).unbind("click").bind("click", function () {
                var _toPageNo = Cmn.Func.Trim(_tmpDom.find(Cmn.Cfg.Paging.ToPagInput).val());

                if (_toPageNo == "") { Cmn.alert("请输入页码！"); return; }
                if (isNaN(_toPageNo)) { Cmn.alert("请输入正确的页码！"); _tmpDom.find(Cmn.Cfg.Paging.ToPagInput).val(""); return; }

                _Self.ToPage(parseInt(_toPageNo));
                _tmpDom.find(Cmn.Cfg.Paging.ToPagInput).val("");
            });
        }
    });

})(window);

//对象处理相关扩展
(function (window, undefined) {
    "use strict";

    Cg.Extend(Cg.Object = {}, {
        Inherit: function (sub, parent, args) {
            /// <summary>深度继承</summary>
            /// <param name="sub" type="Class">子类签名</param>
            /// <param name="parent" type="Class">父类签名</param>
            /// <param name="args" type="Class">父类构造参数</param>

            var _subMethodName = null, _subConstructorPrototype = sub.constructor.prototype, _methodList = {};

            if (sub.constructor.name == "Object") {
                Cmn.Log("如果使用继承的话 最好使用 'XX.prototype.xxx=function(){}' 方式定义函数. " +
                    "不要用这种'XX.prototype={xxx:function(){}}'. 后者将有可能导致prototype上面一些定义的函数丢失.");
            }


            for (_subMethodName in _subConstructorPrototype) { _methodList[_subMethodName] = 1; }

            for (_subMethodName in parent.prototype) {
                if (!_methodList[_subMethodName]) {
                    _subConstructorPrototype[_subMethodName] = parent.prototype[_subMethodName];
                }
            }

            parent.apply(sub, args);
        },
        IsType: function (obj, type) {
            /// <summary>返回对象数据类型</summary>
            /// <param name="sub" type="object">检测的对象</param>
            /// <param name="type" type="string">检测的类型</param>

            return Cg.IsType(obj, type);
        }

    });
})(window);

//事件相关扩展
(function (window, undefined) {
    "use strict";

    Cg.Event = function (execDomain) {
        /// <summary>事件类</summary>
        /// <param name="execDomain" type="object">事件执行域（实际上是事件域内this指向的对象）</param>
        var _Handles = {},
            _HandlesKey = "__cg_eventHandleKey",
            _ExecDomain = execDomain || this;

        //添加事件句柄
        this.Add = function (eventHandle, uniqueKey, execDomain) {
            /// <summary>添加事件句柄</summary>
            /// <param name="eventHandle" type="function">事件句柄</param>
            /// <param name="uniqueKey" type="string">事件唯一标示</param>
            /// <param name="execDomain" type="object">事件执行域（实际上是事件域内this指向的对象）</param>

            var _eventHandle = undefined,
                _uniqueKey = undefined,
                _execDomain = undefined

            if (arguments.length == 2) {
                _eventHandle = arguments[0];
                if (Cg.IsType(arguments[1], "string")) {
                    _uniqueKey = arguments[1];
                }
                else { _execDomain = arguments[1]; }
            }

            //唯一key存在的话 该事件句柄已此key为标示
            if (!!_uniqueKey) { eventHandle[_HandlesKey] = _uniqueKey; }
            //如果事件句柄的key不存在则创建
            if (!eventHandle[_HandlesKey]) { eventHandle[_HandlesKey] = "_event_" + Cg.GetUUID(); }

            //加入事件句柄缓存区域
            _Handles[eventHandle[_HandlesKey]] = { eventHandle: eventHandle, execDomain: _execDomain || _ExecDomain };

            return this;
        }

        //删除事件句柄的函数签名 不写函数签名的话默认删除所有事件处理
        this.Remove = function (eventSignature) {
            /// <summary>删除事件句柄的函数签名 不写函数签名的话默认删除所有事件处理</summary>
            /// <param name="eventSignature" type="function">事件处理的函数签名</param>

            if (arguments.length == 0) {
                _Handles = {};
            }
            else {
                for (var _i = 0; _i < arguments.length; _i++) {
                    if (Cg.IsType(arguments[_i], "string")) {
                        delete _Handles[arguments[_i]];
                    }
                    else {
                        if (!!arguments[_i][_HandlesKey]) {
                            delete _Handles[arguments[_i][_HandlesKey]];
                        }
                    }

                }
            }

            return this;
        }

        //要执行事件句柄的函数签名 不写函数签名的话默认执行所有事件处理
        this.Trigger = function (eventSignature, param, callback, execDomain) {
            /// <summary>要执行事件句柄的函数签名 不写函数签名的话默认执行所有事件处理</summary>
            /// <param name="eventHandle" type="function">事件处理的函数签名</param>
            /// <param name="param" type="array">参数列表</param>
            /// <param name="callback" type="function">事件执行之后的处理事件 参数是事件的返回值</param>
            /// <param name="execDomain" type="object">事件执行域（实际上是事件域内this指向的对象）</param>

            //事件句柄
            var _eventSignature = undefined,
                //参数
                _param = {},
                //事件执行完毕之后的回调
                _callback = null,
                //事件执行域
                _execDomain = null,
                 //返回值，只要一个事件执行返回的是false的话就返回false
                _retVal = true;

            //参数个数是4个的话 默认参数顺序
            if (arguments.length == 3) {
                _eventSignature = eventSignature;
                _param = param;
                _callback = callback;
                _execDomain = execDomain;
            }
            else if (arguments.length == 2) {
                if (Cg.IsType(arguments[0], "array")) { _param = arguments[0]; }
                else if (Cg.IsType(arguments[0], "function")) { _eventSignature = arguments[0]; }
                else if (Cg.IsType(arguments[0], "string")) { _eventSignature = arguments[0]; }
                else if (Cg.IsType(arguments[0], "object")) { _execDomain = arguments[0]; }

                if (Cg.IsType(arguments[1], "array")) { _param = arguments[1]; }
                else if (Cg.IsType(arguments[1], "function")) { _callback = arguments[1]; }
                else if (Cg.IsType(arguments[1], "object")) { _execDomain = arguments[1]; }
            }
            else if (arguments.length == 1) {
                if (Cg.IsType(arguments[0], "array")) { _param = arguments[0]; }
                else if (Cg.IsType(arguments[0], "function")) { _eventSignature = arguments[0]; }
                else if (Cg.IsType(arguments[0], "string")) { _eventSignature = arguments[0]; }
                else if (Cg.IsType(arguments[0], "object")) { _execDomain = arguments[0]; }
            }

            //如果不是指定执行已知事件
            if (!_eventSignature) {
                for (var _handel in _Handles) {
                    if (Cg.IsType(_Handles[_handel].eventHandle, "function")) {

                        //执行的时候设置了域的话 就改变这个执行域
                        if (!!_execDomain) { _Handles[_handel].execDomain = _execDomain; } 

                        var _return = _Handles[_handel].eventHandle.apply(_Handles[_handel].execDomain, _param);

                        if (_return === false) { _retVal = false; }

                        _callback && _callback(_return);

                    }
                }
            }
            else {

                var _handle = null;

                //如果是key就直接查找事件
                if (Cg.IsType(_eventSignature, "string")) { _handle = _Handles[_eventSignature]; }
                    //如果是函数签名
                else if (Cg.IsType(_eventSignature, "function")
                    && Cg.IsType(_Handles[_eventSignature[_HandlesKey]].eventHandle, "function")) {

                    _handle = _Handles[_eventSignature[_HandlesKey]];

                }

                //存在函数句柄的话
                if (!!_handle) {

                    //执行的时候设置了域的话 就改变这个执行域
                    if (!!_execDomain) { _Handles[_handel].execDomain = _execDomain; }

                    var _return = _handle.eventHandle.apply(_handle.execDomain, _param);

                    if (_return === false) { _retVal = false; } 

                    _callback && _callback(_return);
                }

            }

            return _retVal;
        }

    }


})(window);

//数学计算相关扩展
(function (window, undefined) {
    "use strict";

    Cg.Extend(Cg.Math = {}, {
        Random: function (min, max) {
            /// <summary>获取随机数</summary>
            /// <param name="min" type="int">最小的数</param>
            /// <param name="max" type="int">最大的数</param>
            switch (arguments.length) {
                case 1: return parseInt(Math.random() * min + 1);
                case 2: return parseInt(Math.random() * (max - min + 1) + min);
                default: return 0;
            }
        },
        Angle: function (cen, first, second) {
            /// <summary>通过三个坐标点cen为原点延伸first second的夹角角度</summary>
            /// <param name="cen" type="object">原点坐标</param>
            /// <param name="first" type="object">第一个点坐标</param>
            /// <param name="second" type="object">第二个点坐标</param>

            var _dx1, _dx2, _dy1, _dy2, _cosfi, _norm, _fi;

            _dx1 = first.x - cen.x;
            _dy1 = first.y - cen.y;
            _dx2 = second.x - cen.x;
            _dy2 = second.y - cen.y;

            _cosfi = _dx1 * _dx2 + _dy1 * _dy2;
            _norm = (_dx1 * _dx1 + _dy1 * _dy1) * (_dx2 * _dx2 + _dy2 * _dy2);
            _cosfi /= Math.sqrt(_norm);

            if (_cosfi >= 1) { return 0; }
            if (_cosfi <= -1) { return Math.round(Math.PI); }

            _fi = Math.acos(_cosfi);

            if (180 * _fi / Math.PI < 180) { return Math.round(180 * _fi / Math.PI); }
            else { return Math.round(360 - 180 * _fi / Math.PI); }
        }

    });
})(window);

//字符串相关处理
(function (window, undefined) {
    "use strict";

    Cg.Extend(Cg.Str = {}, {
        IsJosn: function () {

        },
        GetNoHTMLFormatStr: function (htmlCode) {
            /// <summary>去除字符会串html标签</summary>
            /// <param name="htmlCode" type="String">字符串</param>
            /// <returns type="String" />
            var _matchVale = htmlCode || "",
             _matchArr = [],
             _reg = new RegExp("<[^{><}]*>", "g");
            //如果该对象不存在这个方法的话 直接返回空串
            if (!_matchVale.replace) { return "";}

            _matchVale = _matchVale.replace(/<\s*?br\s*?\/*\s*?>/gi, "#newlinesign#");
            _matchVale = _matchVale.replace(/<\s*?\/\s*?p\s*?>/gi, "#newlinesign#");
            _matchVale = _matchVale.replace(/<\s*?p\s*?>/gi, "#newlinesign#");
            _matchArr = _matchVale.match(_reg);

            if (_matchArr && _matchArr.length && _matchArr.length > 0) {
                for (var _i = 0; _i < _matchArr.length; _i++) {
                    if (_matchArr[_i].toLowerCase().indexOf("img") < 0) {
                        _matchVale = _matchVale.replace(_matchArr[_i], "");
                    }
                }
            }

            _matchVale = _matchVale.replace(/&nbsp;/gi, " ");
            _matchVale = _matchVale.replace(/&ldquo;/gi, "“");
            _matchVale = _matchVale.replace(/&rdquo;/gi, "”");
            _matchVale = _matchVale.replace(/&lt;/gi, "<");
            _matchVale = _matchVale.replace(/&gt;/gi, ">");


            _matchVale = _matchVale.replace(new RegExp("#newlinesign#", "g"), "");
            return _matchVale;
        },
        RemoveHTML: function (htmlCode, newlineSign, isRemoveAll) {
            /// <summary>去除字符会串html标签</summary>
            /// <param name="htmlCode" type="String">字符串</param>
            /// <param name="newlineSign" type="String">要替换的字符串</param>
            /// <param name="isRemoveAll" type="String">是否删除全部的(包括:&nbsp;&ldquo;&rdquo;等)</param>
            /// <returns type="String" />
            var _matchVale = htmlCode || "",
                _matchArr = [],
                _reg = new RegExp("<[^{><}]*>", "g");

            _matchVale = _matchVale.replace(/<\s*?br\s*?\/*\s*?>/gi, "#newlinesign#");
            _matchVale = _matchVale.replace(/<\s*?\/\s*?p\s*?>/gi, "#newlinesign#");
            _matchVale = _matchVale.replace(/<\s*?p\s*?>/gi, "#newlinesign#");
            _matchArr = _matchVale.match(_reg);

            if (_matchArr && _matchArr.length && _matchArr.length > 0) {
                for (var _i = 0; _i < _matchArr.length; _i++) {
                    _matchVale = _matchVale.replace(_matchArr[_i], "");
                }
            }

            if (!isRemoveAll) { //删除全部的(包括:&nbsp;&ldquo;&rdquo;等)
                _matchVale = _matchVale.replace(/&nbsp;/gi, " ");
                _matchVale = _matchVale.replace(/&ldquo;/gi, "“");
                _matchVale = _matchVale.replace(/&rdquo;/gi, "”");
                _matchVale = _matchVale.replace(/&lt;/gi, "<");
                _matchVale = _matchVale.replace(/&gt;/gi, ">");
            }

            _matchVale = _matchVale.replace(new RegExp("#newlinesign#", "g"), newlineSign);

            return _matchVale;
        },
        FormatJsonData: function (str) {
            /// <summary>过滤json数据中的逗号和斜杠等</summary>
            /// <param name="str" type="String">需要过滤的json字符串</param>
            /// <returns type="String" />
            if (str == null) { return ""; }

            if (Cmn.Object.IsType(str, "string")) {
                var _newstr = "";

                for (var _i = 0; _i < str.length; _i++) {
                    var _c = str.charAt(_i);
                    switch (_c) {
                        case '\"': _newstr += "\\\""; break;
                        case '\'': _newstr += "\\\'"; break;
                        case '\\': _newstr += "\\\\"; break;
                        case '/': _newstr += "\\/"; break;
                        case '\b': _newstr += "\\b"; break;
                        case '\f': _newstr += "\\f"; break;
                        case '\n': _newstr += "\\n"; break;
                        case '\r': _newstr += "\\r"; break;
                        case '\t': _newstr += "\\t"; break;
                        default: _newstr += _c;
                    }
                }
                return _newstr;
            }
            else if (typeof str === "object") {
                $.each(str, function (index, item) {
                    if (Cmn.Object.IsType(str[index], "string")) {
                        str[index] = Cmn.Func.FormatJsonData(str[index]);
                    }
                    else if (typeof str[index] == "object") {
                        Cmn.Func.FormatJsonData(str[index]);
                    }

                });

                return str;
            }
            else { return ""; }

        },
        FirstUppercase: function (str) {
            /// <summary>将一段引文字符串转成首字母大写</summary>
            return str.replace(/\b(\w)|\s(\w)/g, function (s) { return s.toUpperCase() })
        },
        HtmlEncode: function (html) {
            /// <summary>html编码，把html标签转成转义字符</summary>
            /// <returns type="String" />

            return document.createElement('a').appendChild(
                document.createTextNode(html)).parentNode.innerHTML;
        },
        HtmlDecode: function (str) {
            /// <summary>把转义过的html字符串转成正常的html字符串</summary>
            /// <returns type="String" />

            var _a = document.createElement('a');
            _a.innerHTML = str;

            return _a.textContent;
        },
        Trim: function (str) {
            /// <summary>去除字符串前后的空格</summary>
            /// <param name="str" type="String">字符串</param>
            /// <returns type="String" />

            return (Cmn.IsType(str,"string")?str:"").replace(/(^\s*)|(\s*$)/g, '');
        },
        ToSqlStr: function (str) {
            /// <summary>处理字符串中单引号，防止sql注入</summary>
            /// <param name="str" type="String">将要放到sql中的参数</param>

            return str.replace("'", "''");
        }
    });
})(window);

//常用函数扩展
(function (window, undefined) {
    "use strict";

    var $ = window.$ || window.jQuery || "";
   
    Cg.Extend(Cg.Func = {}, {
        //获取元素自身的html代码
        GetOuterHtml: function (obj) {
            /// <summary>获取元素自身的html代码</summary>
            /// <param name="obj" type="object">Dom对象</param>

            return $('<div></div>').append(obj.clone()).html();
        },
        //往AjaxData中增加值对
        AddParamToAjaxData: function (ajaxData, key, value) {
            /// <summary>往AjaxData中增加值对</summary>
            /// <param name="ajaxData" type="String">jason字符串</param>
            /// <param name="key" type="String">键名</param>
            /// <param name="value" type="String">值（键对应的值）</param>
            /// <returns type="String" />

            if (ajaxData == null || ajaxData == undefined || ajaxData == "") { ajaxData = "{}"; }

            if (ajaxData.replace(" ", "").length > 2) {
                return ajaxData.replace("}", ",'" + key + "':'" + value + "'}");
            }
            else { return ajaxData.replace("}", "'" + key + "':'" + value + "'}"); }
        },
        //Url中增加参数
        AddParamToUrl: function (url, param) {
            /// <summary>Url中增加参数</summary>
            /// <param name="url" type="String">网址</param>
            /// <param name="param" type="String">需要增加的参数，例如："UserID=3"</param>
            /// <returns type="String" />

            url = Cmn.Func.DelParamFromUrl(url, param.split("=")[0]); //删除原先可能存在的参数

            if (url.indexOf("?") >= 0) { url += "&" + param; }
            else { url += "?" + param; }

            return url;
        },
        //从Url中删除某个参数
        DelParamFromUrl: function (url, paramName) {
            /// <summary>从Url中删除某个参数</summary>
            /// <param name="url" type="String">网址</param>
            /// <param name="paramName" type="String">:参数名，例如："UserID"</param>
            /// <returns type="String" />

            var _retVal = "";
            var _tmpStr;
            var _loc;

            if (!paramName) { //没有paramName参数，删除所有参数
                _loc = url.indexOf("?");
                if (_loc >= 0) { return url.substring(0, _loc); }
                else { return url; }
            }


            _loc = url.indexOf(paramName + "=");

            if (_loc < 0) {
                _loc = url.indexOf(paramName + " ");

                if (_loc < 0) { return url; }
            }

            _retVal = url.substring(0, _loc).replace(/(^\s*)|(\s*$)/g, '');
            _tmpStr = url.substring(_loc);

            if (_tmpStr.indexOf("&") >= 0) { //后面还有参数
                _retVal += _tmpStr.substring(_tmpStr.indexOf("&") + 1);
            }
            else {  //后面没有参数
                if (_retVal.length > 0) {
                    if (_retVal.charAt(_retVal.length - 1) == '?' || _retVal.charAt(_retVal.length - 1) == '&') {
                        _retVal = _retVal.substring(0, _retVal.length - 1);
                    }
                }
            }

            return _retVal;
        },
        //从Url中获取某个参数的值
        GetParamFromUrl: function (paramName, url) {
            /// <summary>从Url中获取某个参数的值</summary>
            /// <param name="paramName" type="String">参数名，例如："UserID"</param>
            /// <param name="url" type="String">网址</param>
            /// <returns type="String" />

            //如果没有传url就默认当前地址
            if (url == null || url == "" || typeof (url) == "undefind") { url = window.location.href; }

            var _retVal = "";
            var _regExp = new RegExp("[\\?\\s&]" + paramName + "\\s*=([^&#]*)");
            var _matchRes = url.match(_regExp);

            if (_matchRes != null) { _retVal = _matchRes[1]; }

            return Cmn.Func.Trim(_retVal);
        },
        AddParamToUrlHashtag: function (url, param) {
            /// <summary>从Url的#号参数中增加参数</summary>
            /// <param name="url" type="String">网址</param>
            /// <param name="param" type="String">需要增加的参数，例如："UserID=3"</param>
            /// <returns type="String" />

            url = Cmn.Func.DelParamFromUrlHashtag(url, param.split("=")[0]); //删除原先可能存在的参数

            if (url.indexOf("#") >= 0) { url += "&" + param; }
            else { url += "#" + param; }

            return url;
        },
        DelParamFromUrlHashtag: function (url, paramName) {
            /// <summary>从Url的#号参数中删除某个参数</summary>
            /// <param name="url" type="String">网址</param>
            /// <param name="paramName" type="String">:参数名，例如："UserID"</param>
            /// <returns type="String" />

            if (url.indexOf("#") < 0) { return url; }

            var _retVal = url.substring(0, url.indexOf("#"));
            var _hashTag = url.substring(url.indexOf("#"));

            var _regExp = new RegExp("[#\\s&]" + paramName + "\\s*=[^&]*");
            var _matchRes = _hashTag.match(_regExp);

            if (_matchRes != null) {
                _hashTag = Cmn.Func.Trim(_hashTag.replace(_matchRes[0], ""));

                if (_hashTag.length > 0) {
                    if (_hashTag[0] == '&') { _hashTag = _hashTag.substring(1); }
                    if (_hashTag[0] != '#') { _hashTag = "#" + _hashTag; }
                }
            }

            return _retVal + _hashTag;
        },
        GetParamFromUrlHashtag: function (paramName, url) {
            /// <summary>从Url的#号参数中获取某个参数的值</summary>
            /// <param name="paramName" type="String">参数名，例如："UserID"</param>
            /// <param name="url" type="String">网址</param>
            /// <returns type="String" />

            //如果没有传url就默认当前地址
            if (url == null || url == "" || typeof (url) == "undefind") { url = window.location.href; }

            url = url.substring(url.indexOf("#")); //截取#号后面的字符串

            var _retVal = "";
            var _regExp = new RegExp("[#\\s&]" + paramName + "\\s*=([^&]*)");
            var _matchRes = url.match(_regExp);

            if (_matchRes != null) { _retVal = _matchRes[1]; }

            return Cmn.Func.Trim(_retVal);
        },
        //去除字符串前后的空格
        Trim: function (str) {
            /// <summary>去除字符串前后的空格</summary>
            /// <param name="str" type="String">字符串</param>
            /// <returns type="String" />

            return Cg.Str.Trim(str);
        },
        GetNoHTMLFormatStr: function (htmlCode) {
            /// <summary>去除字符会串html标签</summary>
            /// <param name="htmlCode" type="String">字符串</param>
            /// <returns type="String" />
            return Cg.Str.GetNoHTMLFormatStr(htmlCode);
        },
        RemoveHTML: function (htmlCode, newlineSign, isRemoveAll) {
            /// <summary>去除字符会串html标签</summary>
            /// <param name="htmlCode" type="String">字符串</param>
            /// <param name="newlineSign" type="String">要替换的字符串</param>
            /// <param name="isRemoveAll" type="String">是否删除全部的(包括:&nbsp;&ldquo;&rdquo;等)</param>
            /// <returns type="String" />
            return Cg.Str.RemoveHTML(htmlCode, newlineSign, isRemoveAll);
        },
        //过滤json数据中的逗号和斜杠等
        FormatJsonData: function (str) {
            /// <summary>过滤json数据中的逗号和斜杠等</summary>
            /// <param name="str" type="String">需要过滤的json字符串</param>
            /// <returns type="String" />

            return Cg.Str.FormatJsonData(str);
        },
        //Json转字符串
        JsonToStr: function (json) {
            /// <summary>Json转字符串</summary>
            /// <param name="json" type="json">需要转成字符串的json</param>
            /// <returns type="String" />

            if (Cmn.Func.IsString(json)) { return json; }

            if (typeof JSON == "undefined") { CmnAjax.Func.LoadJs(Cmn.Func.GetRoot() + "Js/Json2.js"); }

            return JSON.stringify(json);

        },
        FirstUppercase: function (str) {
            /// <summary>将一段引文字符串转成首字母大写</summary>
            return Cg.Str.FirstUppercase(str);
        },
        //是否是WebMethod
        IsWebMethod: function (methodName) {
            /// <summary>是否是WebMethod</summary>
            /// <param name="methodName" type="String">方法名</param>
            /// <returns type="bool" />

            if (Cmn.Cfg.IsWebMethod == "Auto") {
                //去掉？后面的参数后，取最后一个/后面的内容，如果没有.认为是webmothod
                var _url = Cmn.Func.DelParamFromUrl(methodName);

                var _loc = _url.lastIndexOf("/");
                if (_loc >= 0) { _url = _url.substring(_loc + 1); }

                if (_url.indexOf(".") >= 0) { return false; }
                else { return true; }
            }
            else { return Cmn.Cfg.IsWebMethod; }
        },
        //判断变量是否是数组
        IsArray: function (variable) {
            /// <summary>判断变量是否是数组</summary>
            /// <param name="variable" type="String">变量</param>
            /// <returns type="bool" />

            return Object.prototype.toString.apply(variable) === '[object Array]';
        },
        //在窗口中间显示弹出窗
        ShowPoupWin: function (poupWinSelector) {
            /// <summary>在窗口中间显示弹出窗</summary>
            /// <param name="poupWinSelector" type="String">弹出窗选择器</param>

            var _obj = $(poupWinSelector);

            //中心位置显示
            var _x = 50;
            var _y = 50;

            var _init = function () {
                _x = ($(window).width() - _obj.width()) / 2;; //($(window).width()-$('#'+popupWinID).width())/2;
                _y = ($(window).height() - _obj.height()) / 2;; //($(window).height()-$('#'+popupWinID).height())/2;

                if (_x - 20 > 0) { _x = _x - 20; }
                if (_y - 20 > 0) { _y = _y - 20; }

                _obj.css('top', _y + $(window).scrollTop() + 'px');
                _obj.css('left', _x + $(window).scrollLeft() + 'px');
            }

            _init();
            _obj.show();


            //滚动事件处理
            $(window).scroll(function () {                 //重新获取窗口的宽高     
                if (_obj.is(":visible")) {
                    if (_y) { _obj.css('top', _y + $(window).scrollTop() + 'px'); }
                    if (_x) { _obj.css('left', _x + $(window).scrollLeft() + 'px'); }
                }
            });

            //resize事件
            $(window).resize(function () {
                if (_obj.is(":visible")) { _init(); }
            });
        },
        // 把数据设置到htmlStr中
        SetDataToHtmlStr: function (htmlStr, className, data) {
            /// <summary>把数据设置到htmlStr中</summary>
            /// <param name="htmlStr" type="String">原html字符串</param>
            /// <param name="className" type="String">样式名称(数据key，不包括属性部分)</param>
            /// <param name="data" type="String">要填充进去的新数据</param>
            /// <returns type="String" />

            var _afterStr = "";

            data = data + ""; //转成字符串，如果是数字的话，拿不到长度，会导致死循环

            for (var _startLoc = 0; ;) {
                var _loc = htmlStr.indexOf(className, _startLoc);

                if (_loc < 0) { break; } //不存在className 就退出循环

                if (htmlStr.charAt(_loc + className.length) == '-') { //说明是设置属性
                    _afterStr = htmlStr.substring(_loc + className.length + 1);
                    htmlStr = htmlStr.substring(0, _loc + className.length + 1);

                    //获取属性名
                    var _tmpRegexp = "^\\S*?(?=[\\x22\\x27\\s]+?)";   //双引号和单引号
                    var _attrName = _afterStr.match(_tmpRegexp)[0]; //"-"后面的属性名


                    //获取当前标签中内容
                    var _tmpLoc = htmlStr.lastIndexOf("<");

                    var _curDom = htmlStr.substring(_tmpLoc); //存放当前标签内容
                    htmlStr = htmlStr.substring(0, _tmpLoc);

                    _tmpLoc = _afterStr.indexOf(">");

                    _curDom += _afterStr.substring(0, _tmpLoc);
                    _afterStr = _afterStr.substring(_tmpLoc);


                    //看属性名中有没有中括号
                    _tmpLoc = _attrName.indexOf("[");
                    var _bracketsContent = ""; //存放括号中的内容

                    if (_tmpLoc >= 0) { //有中括号
                        _bracketsContent = _attrName.substring(_tmpLoc + 1);
                        _bracketsContent = _bracketsContent.substring(0, _bracketsContent.indexOf("]"));
                        _attrName = _attrName.substring(0, _tmpLoc);
                    }

                    //获取当前属性内容
                    //var _tmpRegexp = _attrName + "\\s*=[\\x22\\x27\\s]*[\\s\\S]*?[\\x22\\x27\\s]+";
                    var _attrHtml = _curDom.match(new RegExp("\\s+"+_attrName + "\\s*=\\s*\\x22[\\s\\S]*?\\x22"));
                    var _attrContent = ""; //属性内容

                    if (_attrHtml == null) { //不是双引号
                        _attrHtml = _curDom.match(new RegExp("\\s+" + _attrName + "\\s*=\\s*\\x27[\\s\\S]*?\\x27"));

                        if (_attrHtml == null) { //不是单引号
                            _attrHtml = _curDom.match(new RegExp("\\s+" + _attrName + "\\s*=\\S*?\\s"));

                            if (_attrHtml != null) {
                                _attrContent = _attrHtml[0].replace(/\s*=/, "").replace(/\s/g, "");
                            }
                        }
                        else { //是单引号
                            _attrContent = _attrHtml[0].match(new RegExp("\\x27[\\s\\S]*?\\x27"));

                            if (_attrContent != null) { _attrContent = _attrContent[0].replace(/'/g, ""); }
                            else { _attrContent = ""; }
                        }
                    }
                    else { //是双引号
                        _attrContent = _attrHtml[0].match(new RegExp("\\x22[\\s\\S]*?\\x22"));

                        if (_attrContent != null) { _attrContent = _attrContent[0].replace(/"/g, ""); }
                        else { _attrContent = ""; }
                    }

                    //从当前标签内容中删除属性内容
                    if (_attrHtml != null) { _curDom = _curDom.replace(_attrHtml[0], " "); }

                    //加新的属性内容
                    if (_attrName.toLowerCase() == "style" || _attrName.toLowerCase() == "class") {
                        if (_attrName.toLowerCase() == "style" && _bracketsContent != "") {
                            _curDom += " " + _attrName + "='" + _attrContent + _bracketsContent + ":" + data + ";'";
                        }
                        else { _curDom += " " + _attrName + "='" + _attrContent + " " + data + "'"; }
                    }
                    else { _curDom += " " + _attrName + "='" + data + "'"; }

                    //设置下一次循环的起始位置
                    _startLoc = htmlStr.length + _curDom.indexOf(className + "-" + _attrName) + (className + "-" + _attrName).length;

                    htmlStr = htmlStr + _curDom + _afterStr;
                }
                else if (htmlStr.charAt(_loc + className.length) == ' ' || htmlStr.charAt(_loc + className.length) == String.fromCharCode(34)
                    || htmlStr.charAt(_loc + className.length) == String.fromCharCode(39)
                    || htmlStr.charAt(_loc + className.length) == '>') {//说明是设置 innerHtml,34：双引号；39：单引号
                    _afterStr = htmlStr.substring(_loc + className.length);
                    htmlStr = htmlStr.substring(0, _loc + className.length);

                    //设置下一次循环的起始位置
                    // _startLoc = _startLoc + className.length + _afterStr.indexOf("<") + data.length; //位置算得有问题，所以重写了
                    _startLoc = _loc + className.length;//+ _afterStr.indexOf("<") + data.length;

                    _afterStr = _afterStr.replace(/>[\s\S]*?</, ">" + data + "<");

                    htmlStr = htmlStr + _afterStr;
                }
                else { _startLoc = _loc + className.length; }
            }

            return htmlStr;
        },
        IsString: function (variable) {
            /// <summary>判断变量是否是字符串</summary>
            /// <param name="variable" type="object">变量</param>
            /// <returns type="bool" />

            if (typeof variable == "undefined") { return false; }

            if (typeof variable == "string" || variable.constructor == String) { return true; }
            else { return false; }
        },
        //网站的根目录
        SiteRoot: "/",
        GetRoot: function () {
            /// <summary>获取网站的根目录（最后已经带斜杠了）</summary>
            return Cmn.Func.SiteRoot;
        },
        SetRoot: function (siteRoot) {
            /// <summary>设置网站的根目录</summary>
            /// <param name="siteRoot" type="String">网站的根（最后要带斜杠）</param>

            Cmn.Func.SiteRoot = siteRoot;
        },
        AddSiteRoot: function (url) {
            /// <summary>url前面加上网站根目录（主要用户部署在子目录下的时候）</summary>
            /// <param name="url" type="String">Url链接</param>

            if (Cmn.Func.SiteRoot == "/") { return url; }

            url = Cmn.Func.Trim(url);

            if (url.charAt(0) == '/') {
                if (Cmn.Func.SiteRoot.charAt(Cmn.Func.SiteRoot.length - 1) == '/') {
                    return Cmn.Func.SiteRoot.substring(0, Cmn.Func.SiteRoot.length - 1) + url;
                }
                else { return Cmn.Func.SiteRoot + url; }
            }
            else { return url; }
        },
        GetAbsoluteUrl: function (url) {
            /// <summary>获取绝对路径</summary>
            /// <param name="url" type="String">相对路径</param>

            if (url.indexOf("http:") >= 0) { return url; }

            var _a = document.createElement('A');
            _a.href = url; // 设置相对路径给Image, 此时会发送出请求 
            url = _a.href; // 此时相对路径已经变成绝对路径 
            return url;
        },
        GetMainDomain: function (url) {
            /// <summary>获取网址中的主域名</summary>
            /// <param name="url" type="String">网址</param>
            /// <returns type="String" />

            if (url == undefined || url.indexOf("http:") < 0) { url = window.location.href; } //不是绝对路径，就取当前路径

            url = url.replace("http://", "");

            var _loc = url.indexOf("/");

            if (_loc >= 0) { url = url.substring(0, _loc); }

            return Cmn.Func.Trim(url);

        },
        GetJsPath: function (jsFileName) {
            /// <summary>获取某个js文件的路径(不包括文件名)</summary>
            /// <param name="jsFileName" type="String">js文件名</param>

            var _scripts = document.getElementsByTagName('script');
            var _script = null;

            for (var i = 0; i < _scripts.length; i++) {
                if (_scripts[i].src.indexOf(jsFileName) != -1) {
                    _script = _scripts[i];
                    break;
                }
            }

            if (_script != null) { //找到对应js
                var _src = _script.src;

                return _src.replace(jsFileName, "");
            }

            return "";
        },
        IsSameMainDomain: function (url1, url2) {
            /// <summary>判断是否是同一个主域的url</summary>
            /// <param name="url1" type="String">网址1</param>
            /// <param name="url2" type="String">网址2</param>
            /// <returns type="bool" />

            if (url2 == undefined || url2 == null || url2 == "") { url2 = window.location.href; }

            url1 = Cmn.Func.GetMainDomain(url1);
            url2 = Cmn.Func.GetMainDomain(url2);

            if (url1.toLowerCase() == url2.toLowerCase()) { return true; }
            else { return false; }
        },
        HtmlEncode: function (html) {
            /// <summary>html编码，把html标签转成转义字符</summary>
            /// <returns type="String" />

            return Cg.Str.HtmlEncode(html);
        },
        HtmlDecode: function (str) {
            /// <summary>把转义过的html字符串转成正常的html字符串</summary>
            /// <returns type="String" />

            return Cg.Str.HtmlDecode(html);
        }
    });


    //设备识别 和浏览器识别
    Cg.Extend(Cg.Func, {
        //判断变量是否是iPhone4
        IsIphone4: function () {
            /// <summary>判断变量是否是iPhone4</summary>
            if (Cmn.Func.IsIOS()) {
                var _width = window.screen.width;
                var _height = window.screen.height;
                var _scale = _width / _height;
                if (_scale > 0.6 && _scale < 0.7) { return true; }
            }
            return false;
        },
        //判断变量是否是iPhone4
        IsIphone5: function () {
            /// <summary>判断变量是否是iPhone5</summary>
            if (Cmn.Func.IsIOS()) {
                var _width = window.screen.width;
                var _height = window.screen.height;
                var _scale = _width / _height;
                if (_scale > 0.5 && _scale < 0.6) { return true; }
            }
            return false;
        },
        //是否是Android系统
        IsAndroid: function () {
            /// <summary>是否是Android系统</summary>
            /// <returns type="bool" />

            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        //是否是IOS系统
        IsIOS: function () {
            /// <summary>是否是IOS系统</summary>
            /// <returns type="bool" />

            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        IsIPad: function () {
            /// <summary>是否是IPad</summary>

            return navigator.userAgent.match(/iPad/i) ? true : false;
        },
        //是否是IEMobile
        IsIEMobile: function () {
            /// <summary>是否是IEMobile</summary>
            /// <returns type="bool" />

            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        },
        IsQQBrowser: function () {
            /// <summary>是否是qq内置浏览器</summary>
            return navigator.userAgent.match(/QQ\//i) ? true : false;
        },
        IsIE: function () {
            /// <summary>是否是IE</summary>
            /// <returns type="bool" />
            return navigator.userAgent.match("MSIE") ? true : false;
        },
        BrowserVersion: function () {
            /// <summary>检测浏览器版本号 支持 ie firefox chrome opera safari</summary>
            /// <returns type="string" />

            var ua = navigator.userAgent.toLowerCase();
            var s;
            (s = ua.match(/msie ([\d.]+)/)) ? s = s[1] :
            (s = ua.match(/firefox\/([\d.]+)/)) ? s = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? s = s[1] :
            (s = ua.match(/opera.([\d.]+)/)) ? s = s[1] :
            (s = ua.match(/version\/([\d.]+).*safari/)) ? s = s[1] : 0;

            return s;
        },
        //是否是BlackBerry
        IsBlackBerry: function () {
            /// <summary>是否是BlackBerry</summary>
            /// <returns type="bool" />

            return navigator.userAgent.match(/BlackBerry/i) ? true : false;
        },
        //是否是移动设备
        IsMobile: function () {
            /// <summary>是否是移动设备</summary>
            /// <returns type="bool" />

            return (Cmn.Func.IsAndroid() || Cmn.Func.IsIOS() || Cmn.Func.IsIEMobile() || Cmn.Func.IsBlackBerry());
        },
        IsWeiXin: function () {
            /// <summary>是不是微信浏览器</summary>
            /// <returns type="bool" />

            return navigator.userAgent.match(/MicroMessenger/i) ? true : false;
        }


    })


    //cookie操作
    Cg.Extend(Cg.Func.Cookie = {}, {

        Set: function (name, value, domain, time, path, secure) {
            /// <summary>设置Cookie的通用函数，其中name是必须的参数。其它为可选！注：在设置Cookie时若不设置过期时间则该Cookie为临时的，仅当此次会话可用 </summary>
            /// <param name="name" type="String">cookie名称</param>
            /// <param name="value" type="String">cookie值</param>
            /// <param name="domain" type="String">域</param>
            /// <param name="time" type="String">cookie过期时间</param>
            /// <param name="path" type="String">路径</param>
            /// <param name="secure" type="String">源</param>
            var _now = new Date();
            time = time || 3;
            _now.setDate(_now.getDate() + time);
            domain = domain || Cmn.Func.GetMainDomain(window.location.href);
            path = path || "/";
            var curcookie = name + "=" + encodeURI(value)
                + ((_now) ? ";expires=" + _now.toGMTString() : "")
                + ((path) ? ";path=" + path : "")
                + ((domain) ? ";domain=" + domain : "")
                + ((secure) ? ";secure" : "");

            document.cookie = curcookie;
        },
        Get: function (name) {
            /// <summary>读取特定Cookie的通用函数 </summary>
            /// <param name="name" type="String">cookie名称</param>
            if (document.cookie.length > 0) {
                var _start = document.cookie.indexOf(name + "=");

                if (_start != -1) {
                    _start = _start + name.length + 1;
                    var _end = document.cookie.indexOf(";", _start);

                    if (_end == -1) { _end = document.cookie.length; }

                    return decodeURI(document.cookie.substring(_start, _end));
                }
            }

            return "";
        }

    })


})(window);

//验证函数相关扩展
(function (window, undefined) {
    "use strict";

    var CmnRegularTest = function (str) {
        /// <summary>正则检测,用于cmn里面的正则检测</summary>
        /// <param name="str" type="String">被检测的字符串</param>
        /// <returns type="bool" />

        var _reg = new RegExp(this.Regular);
        return _reg.test(str);
    };

    Cg.Extend({
        NewCheckInfo: function (regular, errMsg, requiredErrMsg) {
            /// <summary>生成一个新的验证</summary>
            /// <param name="regular" type="String">正则</param>
            /// <param name="errMsg" type="String">错误信息</param>
            /// <param name="requiredErrMsg" type="String">必填错误信息</param>
            /// <returns type="json" />

            return { 'Regular': regular, 'ErrMsg': errMsg, 'RequiredErrMsg': requiredErrMsg };
        },
        //验证是否有效，用CheckInfo中的正则等，验证inputTxt是否合法
        CheckValid: function (checkInfo, inputTxt) {
            /// <summary>验证是否有效，用CheckInfo中的正则等，验证inputTxt是否合法</summary>
            /// <param name="checkInfo" type="json">正则表达式及错误信息等</param>
            /// <param name="inputTxt" type="String">被验证的内容</param>
            /// <returns type="String" />

            if (checkInfo.RequiredErrMsg && checkInfo.RequiredErrMsg != "") { //说明是必填项
                if (Cmn.Func.Trim(inputTxt) == "") { return checkInfo.RequiredErrMsg; }
            }

            var _reg = new RegExp(checkInfo.Regular.Regular);

            if (!_reg.test(inputTxt)) {
                if (checkInfo.ErrMsg && checkInfo.ErrMsg != "") { return checkInfo.ErrMsg; }
                else { return checkInfo.Regular.ErrMsg; }
            }

            return true;
        },
        //常用正则
        Regular: {
            Email: { Regular: "^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.\w+$", ErrMsg: "请输入正确的Email地址！", Test: CmnRegularTest },
            MobilePhone: { Regular: "^1[0-9]{10}$", ErrMsg: "请输入正确的手机号码！", Test: CmnRegularTest }
        },
        
        //通用验证方案 可以是正则可以是方法
        VerifyWay: {
            Tel: /\_d{3}-\d{8}|\d{4}-\d{7}/,                    //电话验证
            Phone: /^1\d{10}$/,                                 //手机号码验证
            IsInt: /^(-|\+)?\d+$/,                              //验证是否是整数
            DateTime: function (str) {                          //验证是否是时间类型
                var _result = str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
                if (_result == null) return false;
                var _d = new Date(_result[1], _result[3] - 1, _result[4], _result[5], _result[6], _result[7]);
                return (_d.getFullYear() == _result[1] &&
                    (_d.getMonth() + 1) == _result[3] &&
                    _d.getDate() == _result[4] &&
                    _d.getHours() == _result[5] &&
                    _d.getMinutes() == _result[6] &&
                    _d.getSeconds() == _result[7]);
            },
            Date: function (str) {                                 //验证日期
                var _result = str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
                if (_result == null) return false;
                var _d = new Date(_result[1], _result[3] - 1, _result[4]);
                return (_d.getFullYear() == _result[1] && _d.getMonth() + 1 == _result[3] && _d.getDate() == _result[4]);
            },
            Email: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,       //邮箱验证
            QQ: /[1-9][0-9]{4,}/,                               //验证qq号
            IdCard: /\d{15}|\d{18}/,                            //身份证
            NotEmpty: function (str) { if (!!str) { return true } return false; }                    //非空验证
        },
        //验证值的有效性
        VerifyValid: function (verifyWay, text) {
            /// <summary>验证值的有效性</summary>
            /// <param name="verifyWay" type="Function or Regular">验证的方法 可能是一个正则表达式 也可能是一个方法</param>
            /// <param name="text" type="string">需要验证的值</param>

            if (Cg.IsType(verifyWay, "string") && verifyWay != "") { verifyWay = this.VerifyWay[verifyWay]; }


            if (Cg.IsType(verifyWay, "regexp")) { return verifyWay.test(text); }

                //如果预设的是函数 则返回函数执行结果
            else if (Cg.IsType(verifyWay, "function")) {

                return verifyWay(text);
            }

            return false;
        }
        //,
        //FormVerify: function (containerSelector, valueItemSelector, submitBtnSelector, option) {
        //    /// <summary>验证表单里面的值的有效性</summary>
        //    /// <param name="containerSelector" type="String">表单容器</param>
        //    /// <param name="valueItemSelector" type="String">值选择器</param>
        //    /// <param name="submitBtnSelector" type="String">提交按钮选择器</param>
        //    /// <param name="option" type="json">配置json</param>

        //        //值列表项
        //    var _vlueItem = null;

        //    //如果是对象
        //    if (Cg.IsType(valueItemSelector, "object")) {  _vlueItem = valueItemSelector;  }
        //        //选择器的话
        //    else{
        //        _vlueItem = $(containerSelector).find(valueItemSelector);
        //    }

        //    var _option = $.extend({
        //        VerifyCfg: {},                  //验证配置
        //        BeforSubmit: function () { },   //提交之前
        //        OnInputChange: function () { }, //
        //        OnSubmit: function () { }
        //    }, option),

        //    //验证配置
        //     _verifyCfg = _option.VerifyCfg;

        //    function verifyValids() {
        //        /// <summary>遍历验证</summary>

        //        var _result = { State: true, param: {} };

        //        $.each(_vlueItem,function (index,item) {

        //            var _self = $(this),
        //                _filedName =item[index] || _self.attr("name"),
        //                _verify = !!item[index]?null:_self.attr("verify");

        //            if (Cg.IsType(_verify, "string")) {

        //                //检测函数内部是否有验证配置
        //                if (!!_verify) {
        //                    if (Cg.IsType(_verify, "string")) {
        //                        try {
        //                            _verifyCfg[_filedName] = $.parseJSON(_verify);
        //                        }
        //                        catch (e) {
        //                            _verifyCfg[_filedName] = eval("(" + _verify + ")");
        //                        }
        //                    }
        //                }

        //            }

        //            _verify = _verifyCfg[_filedName];

        //            //若存在验证的话
        //            if (!!_verify) {

        //                if (!Cg.VerifyValid(_verify.Way, _self.val())) {

        //                    //检测错误提示的选择器存在的话就显示
        //                    if (Cg.IsType(_verify.ErrTipSelector, "string") && _verify.ErrTipSelector != "") {
        //                        //隐藏正确的
        //                        $(containerSelector).find(_verify.CorrectTipSelector).hide();
        //                        $(containerSelector).find(_verify.ErrTipSelector).show();
        //                    }
        //                    else if (Cg.IsType(_verify.Tip, "string") && _verify.Tip != "") {
        //                        //默认提示框
        //                        Cg.alert(_verify.Tip);
        //                    }
        //                    _self.focus();
        //                    return _result.State = false;
        //                }


        //            }

        //            if (!!_filedName) {
        //                //生成参数列表
        //                _result.param[_filedName] = _self.val();
        //                //检测是否存在验证成功的显示元素的选择器 有的话显示该容器
        //                if (!!_verify && !!_verify.CorrectTipSelector) {
        //                    //隐藏错误的
        //                    $(containerSelector).find(_verify.ErrTipSelector).hide();
        //                    $(containerSelector).find(_verify.CorrectTipSelector).show();
        //                }
        //            }

        //        });

        //        return _result;
        //    }

        //    var _clickheadle = function () {
        //        /// <summary>点击事件句柄</summary>
        //        var _result = verifyValids();
        //        //提交之前触发事件 返回为false的话直接阻止提交
        //        if (_option.BeforSubmit(_result.param) === false) { return false; }

        //        //验证通过的行为
        //        if (_result.State) {
        //            //点击提交按钮并且验证通过的时候提交
        //            _option.OnSubmit(_result.param);
        //        }
        //    }
        //    //如果提交按钮是他本身的话
        //    if ($(".containerSelector").is(submitBtnSelector)) {
        //        $(containerSelector).off("click").on("click", _clickheadle);
        //    }
        //    else {
        //                $(containerSelector).undelegate(submitBtnSelector, "click").
        //         delegate(submitBtnSelector, "click", _clickheadle);
        //    }
        //},
        //GetParams: function (containerSelector, valueItemSelector) {
        //    /// <summary>获取参数</summary>

        //}
    });
})(window);

//动画相关处理
(function (window, undefined) {
    "use strict";

    var _RequestAnimateFrame = new function () {
        /// <summary>requestAnimateFrame</summary>

        this.callback = function () { };

        var _originalWebkitRequestAnimationFrame = undefined,
            _wrapper = undefined,
            _callback = undefined,
            _geckoVersion = 0,
            _userAgent = navigator.userAgent,
            _index = 0,
            _self = this;

        // Workaround for Chrome 10 bug where Chrome
        // does not pass the time to the animation function

        if (window.webkitRequestAnimationFrame) {
            // Define the wrapper

            _wrapper = function (time) {
                if (time === undefined) { time = +new Date(); }
                _self.callback(time);
            };

            // Make the switch

            _originalWebkitRequestAnimationFrame = window.webkitRequestAnimationFrame;

            window.webkitRequestAnimationFrame = function (_callback, element) {
                _self.callback = _callback;

                // Browser calls the wrapper and wrapper calls the callback

                _originalWebkitRequestAnimationFrame(_wrapper, element);
            }
        }

        // Workaround for Gecko 2.0, which has a bug in
        // mozRequestAnimationFrame() that restricts animations
        // to 30-40 fps.

        if (window.mozRequestAnimationFrame) {
            // Check the Gecko version. Gecko is used by browsers
            // other than Firefox. Gecko 2.0 corresponds to
            // Firefox 4.0.

            _index = _userAgent.indexOf('rv:');

            if (_userAgent.indexOf('Gecko') != -1) {
                _geckoVersion = _userAgent.substr(_index + 3, 3);

                if (_geckoVersion === '2.0') {
                    // Forces the return statement to fall through
                    // to the setTimeout() function.
                    window.mozRequestAnimationFrame = undefined;
                }
            }
        }

        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||

            function (_callback, element) {
                var _start,
                    _finish;

                window.setTimeout(function () {
                    _start = +new Date();
                    _callback(_start);
                    _finish = +new Date();

                    _self.timeout = 1000 / 60 - (_finish - _start);

                }, _self.timeout);
            };
    };


    var _CancelRequestAnimateFrame = window.cancelRequestAnimationFrame
                || window.webkitCancelAnimationFrame
                || window.webkitCancelRequestAnimationFrame
                || window.mozCancelRequestAnimationFrame
                || window.oCancelRequestAnimationFrame
                || window.msCancelRequestAnimationFrame
                || window.clearTimeout;

    Cg.Extend(Cg.Animate = {}, {
        //浏览器刷新率相关操作
        BrowserFrame: {
            RequestAnimateFrame: function (callback) { return _RequestAnimateFrame(callback); },
            CancelRequestAnimateFrame: function (id) { _CancelRequestAnimateFrame(id); }
        },
        //时间轴
        Timeline: {
            //时间轴事件管理
            TimelineEvent: null,
            //时间轴唯一标示 
            TimelineOnlyKey: null,
            //事件句柄配置
            EventHeaderCfgList: {},
            //添加时间轴某个监听
            Add: function (eventHandle, interval) {
                /// <summary>添加时间轴某个监听</summary>
                /// <param name="eventHandle" type="function">时间轴事件句柄</param>
                /// <param name="fps" type="int">多少间隔触发一次</param>

                if (this.TimelineEvent == null) { this.TimelineEvent = new Cg.Event(this); }

                //生成每个时间轴监听句柄的唯一key
                var _eventHandleOnlyKey = "timeline_" + Cg.GetUUID();

                //添加到时间管理里面去
                this.TimelineEvent.Add(eventHandle, _eventHandleOnlyKey);

                //事件句柄列表
                this.EventHeaderCfgList[_eventHandleOnlyKey] = {
                    Key: _eventHandleOnlyKey,
                    IsMonitor: true,
                    Then: Date.now(),
                    Interval: interval
                }

                if (this.TimelineOnlyKey == null) { this.Monitor(); }

                return this;
            },
            Monitor: function () {
                /// <summary>开启监听</summary>

                var _self = this,
                   _nowTime = null,
                   _delta = null;

                var _monitor = function () {
                    /// <summary>递归监听</summary>

                    //利用浏览器的ui进程
                    _self.TimelineOnlyKey = Cg.Animate.BrowserFrame.RequestAnimateFrame(_monitor);

                    //判断事件委托对象
                    if (_self.TimelineEvent != null) {

                        $.each(_self.EventHeaderCfgList, function () {
                            //指向当前事件句柄的配置
                            var _headerCfg = this;

                            //如果关闭了该事件句柄的监听的话
                            if (!_headerCfg.IsMonitor) { return; }

                            //事件句柄的时间间隔必须存在 不存在就表示不需要计算间隔
                            if (!!_headerCfg.Interval) {
                                //当前时间
                                _nowTime = Date.now();
                                //当前时间和事件上一次执行时间的时间差
                                _delta = _nowTime - _headerCfg.Then;
                                // 这里不能简单then=now，否则还会出现细微时间差问题。
                                //例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，
                                //需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
                                //执行的时间差大于间隔 才执行事件
                                if (_delta > _headerCfg.Interval) {
                                    _headerCfg.Then = _nowTime - (_delta % _headerCfg.Interval);
                                    //执行事件
                                    _self.TimelineEvent.Trigger(_headerCfg.Key);
                                }

                            }
                            else { _self.TimelineEvent.Trigger(_headerCfg.Key); }

                        });
                    }
                }

                Cg.Animate.BrowserFrame.RequestAnimateFrame(_monitor);
            },
            Close: function () {
                /// <summary>关闭监听</summary>
                Cg.Animate.BrowserFrame.CancelRequestAnimateFrame(this.TimelineOnlyKey);
            },
            Start: function (eventSignature) {
                /// <summary>开始某个时间轴的监听</summary>
                /// <param name="eventSignature" type="function">时间轴事件处理的函数签名</param>
                if (arguments.length > 0) {
                    this.EventHeaderCfgList[eventSignature["__cg_eventHandleKey"]].IsMonitor = true;
                }
                else {
                    $.each(this.EventHeaderCfgList, function () { this.IsMonitor = true; });

                }

                return this;
            },
            Stop: function (eventSignature) {
                /// <summary>停止某个时间轴</summary>
                /// <param name="eventSignature" type="function">时间轴事件处理的函数签名</param>
                if (arguments.length > 0) {
                    this.EventHeaderCfgList[eventSignature["__cg_eventHandleKey"]].IsMonitor = false;
                }
                else {
                    $.each(this.EventHeaderCfgList, function () { this.IsMonitor = false; });
                }
            },
            Remove: function (eventSignature) {
                /// <summary>删除时间轴某个监听</summary>
                /// <param name="eventSignature" type="function">时间轴事件处理的函数签名</param>
                if (this.TimelineEvent != null) {
                    //有参数的话
                    if (arguments.length > 0) {
                        //删除该句柄的事件绑定
                        this.TimelineEvent.Remove(eventSignature);
                        //删除时间轴配置
                        if (!!eventSignature["__cg_eventHandleKey"]) {
                            delete this.EventHeaderCfgList["__cg_eventHandleKey"];
                        }

                    }
                    else {
                        //全部删除
                        this.TimelineEvent.Remove();
                        this.EventHeaderCfgList = {};
                    }
                }
                return this;
            },
            RemoveAll: function () {
                /// <summary>删除所有监听</summary>
                this.Remove();
                return this;
            }
        }


    });

    Cmn.Am = Cmn.Animate;
})(window);


// new add errMsg class
Cg.ErrMsg = function (msg, errCode) {
    /// <summary>错误信息类</summary>
    /// <param name="msg" type="String">错误信息</param>
    /// <param name="errCode" type="String">错误代码</param>

    this.Msg = msg;
    //目前ErrMsg 是为了兼容成就代码 以及接口返回信息
    this.ErrMsg = msg;
    this.ErrCode = errCode;
};

//--------------------------------------------------------
//------------------未上线模式----------------------------

(function (cfc) {
    Cmn.PageLockPassWord = "123";
    Cmn.PageIsLock = false;

    if (!$) { Cg.alert("请引用jquery!"); return; };
    if (cfc.Get("PageLockPwdInput") === Cmn.PageLockPassWord) { return; }
    var _$mask = $("<div><div>").css({
        "z-index": "999", "width": "100%", "height": "100%", "position": "fixed", "top": "0px",
        "line-height": " 150px", "text-align": "center", "background": "#000"
    }).append("<input type='tel' style='border:1px solid #fff;position:absolute;top:50%;width:200px;height:50px;line-height:50px;left:50%;margin-left:-100px;font-size:28px;color:#000;background:#fff;' class=\"cmn-PageLockPwdInput\" placeholder=\"请输入密码访问\" />");

    $(function () {

        if (Cmn.PageIsLock) {
            _$mask.find(".cmn-PageLockPwdInput").off("keyup").on("keyup", function () {
                if ($(this).val() == Cmn.PageLockPassWord) {
                    _$mask.fadeOut(300, function () {
                        cfc.Set("PageLockPwdInput", Cmn.PageLockPassWord, 1000);
                    });
                }
            });
            $("body").append(_$mask);
        }

    });

})(Cmn.Func.Cookie);


