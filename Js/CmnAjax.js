///Version:2.1  几个填充函数都增加了beforFillDataEvent事件
///Version:2.0  增加了跨域处理
/// <reference path="Cmn.js"/>
/// <reference path="jquery.js"/>

//检查CmnMis有没有定义，如果没有定义就定义下
if (typeof (CmnMis) == "undefined") { CmnMis = {}; }

var CmnAjax =Cmn.Ajax = {
    Cfg: {
        //请求代理url,目前主要用于Tmall
        ProxyUrl: ""
    },
    //处理方法名，如果不是全路劲处理成全路劲
    MethodNameToUrl: function (methodName) {
        /// <summary>处理方法名，如果不是全路劲处理成全路劲</summary>
        /// <param name="methodName" type="String">方法名</param>
        /// <returns type="String" />

        if (methodName.indexOf("/") > -1) { return methodName; }

        var _curUrl = window.location.href;
        if (_curUrl.indexOf("?") > -1) { _curUrl = _curUrl.substring(0, _curUrl.indexOf("?")); } 
        if (_curUrl.indexOf("#") > -1) { _curUrl = _curUrl.substring(0, _curUrl.indexOf("#")); }

        if (_curUrl[_curUrl.length - 1] == "/") { return _curUrl + methodName; } //最后是斜杠
        else { return _curUrl + "/" + methodName; }
    },
    //用Class填充单条数据    
    FillDataByClass: function (containerSelector, methodName, param, successFunc, errorFunc, loadingSelector) {
        /// <summary>用Class填充单条数据</summary>
        /// <param name="containerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID(如果是多条记录的话不能用id否则在二次填充的时候会多出记录)等)</param>
        /// <param name="methodName" type="String">函数名</param>
        /// <param name="param" type="String">调用webmethod的参数，例如：{id:'1',name:'name'}(可为空或不传)</param>
        /// <param name="successFunc" type="function">成功时调用的函数，参数为jason格式的数据例如：{"data":[{"id":"1","name":"chi"},{"id":"2","name":"chi2"}]} (可以不传)</param>
        /// <param name="errorFunc" type="function">错误时调用的函数 (可以不传)</param>
        /// <param name="loadingSelector" type="String">正在加载提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>

        return CmnAjax.FillData(containerSelector, methodName, param, successFunc, errorFunc, loadingSelector);

        //methodName = CmnAjax.MethodNameToUrl(methodName);
        //methodName = CmnAjax.Func.GetProxyUrl(methodName);

        //var _isWebMethod = Cmn.Func.IsWebMethod(methodName);
        //if (param == "") { param = "{}"; }

        //CmnAjax.ShowAjaxHandleHint(loadingSelector, containerSelector); //显示正在加载提示

        //$.ajax({
        //    type: "Post",
        //    url:methodName,
        //    data: (_isWebMethod ? param : eval("(" + param + ")")),
        //    contentType: (_isWebMethod ? "application/json;charset=uft-8" : "application/x-www-form-urlencoded"),
        //    dataType: "text",
        //    success: function (retData) {
        //        CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在加载提示

        //        var _tmpVal = "";

        //        try { _tmpVal = eval("(" + retData + ")").d; if (!_tmpVal) { _tmpVal = retData; } } //是json
        //        catch (err) { _tmpVal = retData; } //不是json

        //        Cmn.FillDataByClass(containerSelector, eval("(" + _tmpVal + ")").data);
        //        if (successFunc) { successFunc(eval("(" + _tmpVal + ")")); } //如果有成功函数就调用   

        //        return true;
        //    },
        //    error: function (httpRequest) {
        //        CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在加载提示

        //        if (errorFunc) { errorFunc(); }              

        //        Cmn.Log("FillDataByClass填充数据时Ajax报错！containerSelector:" + containerSelector + " methodName:" + methodName +
        //            " param:" + param + "  错误详细信息：" + httpRequest.responseText);

        //        return false;
        //    }
        //});
    },
    //填充数据    
    FillData: function (containerSelector, methodName, param, successFunc, errorFunc, loadingSelector, beforFillDataEvent) {
        /// <summary>填充数据</summary>
        /// <param name="containerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID(如果是多条记录的话不能用id否则在二次填充的时候会多出记录)等)</param>
        /// <param name="methodName" type="String">WebMethod函数名</param>
        /// <param name="param" type="String">调用webmethod的参数，例如：{id:'1',name:'name'}(可为空或不传)</param>
        /// <param name="successFunc" type="function">成功时调用的函数，参数为jason格式的数据例如：{"data":[{"id":"1","name":"chi"},{"id":"2","name":"chi2"}]} (可以不传)</param>
        /// <param name="errorFunc" type="function">错误时调用的函数 (可以不传)</param>
        /// <param name="loadingSelector" type="String">正在加载提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="beforFillDataEvent" type="function">填充数据之前触发的事件，接收参数data,可以改写填充数据</param>

        //填充空数据，目的把数据区块隐藏，用户就看不到占位符了
        Cmn.FillData(containerSelector, []);

        CmnAjax.ShowAjaxHandleHint(loadingSelector, containerSelector); //显示正在加载提示

        CmnAjax.PostData(methodName, param, function (data) {
            CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在加载提示

            if (beforFillDataEvent) { beforFillDataEvent(data.data); }
            Cmn.FillData(containerSelector, data.data);
            if (successFunc) { successFunc(data); } //如果有成功函数就调用  

            return true;
        }, function () {
            CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在加载提示

            if (errorFunc) { errorFunc(); }

            return false;
        });


        //methodName = CmnAjax.MethodNameToUrl(methodName);
        //methodName = CmnAjax.Func.GetProxyUrl(methodName);

        //var _isWebMethod = Cmn.Func.IsWebMethod(methodName);
        //if (param == "") { param = "{}"; }

        ////填充空数据，目的把数据区块隐藏，用户就看不到占位符了
        //Cmn.FillData(containerSelector, []);

        //CmnAjax.ShowAjaxHandleHint(loadingSelector, containerSelector); //显示正在加载提示

        //$.ajax({
        //    type: "Post",
        //    url: methodName,
        //    data: (_isWebMethod ? param : eval("(" + param + ")")),
        //    contentType: (_isWebMethod ? "application/json;charset=uft-8" : "application/x-www-form-urlencoded"),
        //    dataType: "text",
        //    success: function (retData) {
        //        CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在加载提示

        //        var _tmpVal = "";

        //        try { _tmpVal = eval("(" + retData + ")").d; if (!_tmpVal) { _tmpVal = retData; } } //是json
        //        catch (err) { _tmpVal = retData; } //不是json

        //        Cmn.FillData(containerSelector, eval("(" + _tmpVal + ")").data);
        //        if (successFunc) { successFunc(eval("(" + _tmpVal + ")")); } //如果有成功函数就调用                

        //        return true;
        //    },
        //    error: function (httpRequest) {
        //        CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在加载提示

        //        if (errorFunc) { errorFunc(); }               

        //        Cmn.Log("FillData填充数据时Ajax报错！containerSelector:" + containerSelector + " methodName:" + methodName +
        //            " param:" + param + "  错误详细信息：" + httpRequest.responseText);

        //        return false;
        //    }
        //});
    },
    //存放DataPaging变量，翻页的时候用
    //DataPagingList: new Array(),
    //填充数据带翻页控件
    DataPaging: function (dataContainerSelector, methodName, param, pageContainerSelector, pageSize, successFunc, errorFunc,
        loadingSelector, curPageNo, beforFillDataEvent) {
        /// <summary>填充数据带翻页控件</summary>
        /// <param name="dataContainerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID(如果是多条记录的话不能用id否则在二次填充的时候会多出记录)等)</param>
        /// <param name="methodName" type="String">后台WebMethod名，也可以是全路径</param>
        /// <param name="param" type="String">调用webmethod的参数，例如：{id:'1',name:'name'}(可为空或不传)  </param>
        /// <param name="pageContainerSelector" type="String">翻页控件容器选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="pageSize" type="int">每页显示的记录条数</param>
        /// <param name="successFunc" type="function">成功时调用的函数，参数为jason格式的数据例如：{"data":[{"id":"1","name":"chi"},{"id":"2","name":"chi2"}]} (可以不传)</param>
        /// <param name="errorFunc" type="function">错误时调用的函数 (可以不传)</param>
        /// <param name="loadingSelector" type="String">正在加载提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="curPageNo" type="int">当前页为第几页</param>
        /// <param name="beforFillDataEvent" type="function">填充数据之前触发的事件，接收参数data,可以改写填充数据</param>
        /// <field name="Paging" type="Cmn.Paging">翻页控件</field>

        this.EventBeforePaging = null; //在翻页之前触发事件

        //填充空数据，目的把数据区块隐藏，用户就看不到占位符了
        Cmn.FillData(dataContainerSelector, []);

        if (!curPageNo) { curPageNo = 1; }

        methodName = CmnAjax.MethodNameToUrl(methodName);

        //CmnAjax.DataPagingList[CmnAjax.DataPagingList.length] = this;
        var _Self = this;
        //var _dataPagingVarName = "CmnAjax.DataPagingList[" + (CmnAjax.DataPagingList.length - 1) + "]";

        function PagingFunction(pageNo) {
            //触发翻页前事件
            //eval("if(" + _dataPagingVarName + ".EventBeforePaging!=null) { " + _dataPagingVarName + ".EventBeforePaging(); }");
            if (_Self.EventBeforePaging != null) { _Self.EventBeforePaging(); }

            methodName = Cmn.Func.AddParamToUrl(methodName, "CurPage=" + pageNo);            
            methodName = Cmn.Func.AddParamToUrl(methodName, "PageSize=" + pageSize);

            CmnAjax.ShowAjaxHandleHint(loadingSelector, dataContainerSelector); //显示正在加载提示

            CmnAjax.PostData(methodName, param, function (data) {
                CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在加载提示

                if (beforFillDataEvent) { beforFillDataEvent(data.data); }
                Cmn.FillData(dataContainerSelector, data.data);

                if (successFunc) { successFunc(data); }

                return true;
            }, function (httpRequest) {
                CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在加载提示

                if (errorFunc) { errorFunc(httpRequest); }

                Cmn.Log("DataPaging填充数据时Ajax报错！dataContainerSelector:" + dataContainerSelector + " methodName:" + methodName +
                    " param:" + param + " 错误详细信息：" + httpRequest.responseText);
                return false;
            });
        }
        
        this.Paging = new Cmn.Paging(pageContainerSelector, 0, pageSize, PagingFunction);


        //刷新数据和翻页控件
        this.Refresh = function (paging) {
            /// <summary>刷新数据和翻页控件</summary>

            methodName = Cmn.Func.AddParamToUrl(methodName, "CurPage=" + curPageNo);
            methodName = Cmn.Func.AddParamToUrl(methodName, "PageSize=" + pageSize);

            CmnAjax.ShowAjaxHandleHint(loadingSelector, dataContainerSelector); //显示正在加载提示

            CmnAjax.PostData(methodName, param, function (data) {
                CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在加载提示

                //eval(_dataPagingVarName + ".Paging.RecCount=" + data.RecCount + ";");
                _Self.Paging.RecCount = parseInt(data.RecCount);
                //eval(_dataPagingVarName + ".Paging.ToPage(" + curPageNo + ",false);");
                _Self.Paging.ToPage(curPageNo,false);

                if (beforFillDataEvent) { beforFillDataEvent(data.data); }
                Cmn.FillData(dataContainerSelector, data.data);
                if (successFunc) { successFunc(data); }

                return true;
            }, function (httpRequest) {
                CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在加载提示

                if (errorFunc) { errorFunc(httpRequest); }

                Cmn.Log("DataPaging填充数据时Ajax报错！dataContainerSelector:" + dataContainerSelector + " methodName:" + methodName +
                    " param:" + param + "  错误详细信息：" + httpRequest.responseText);
                return false;
            });
        }

        this.Refresh(this.Paging);
    },
    //存放图片分布加载PicStepLoad对象，
    //PicStepLoadList: new Array(),
    //图片分步加载
    DataStepLoad: function (dataContainerSelector, methodName, param, pageContainerSelector, pageSize, blockSize, successFunc,
        errorFunc,loadingSelector,beforFillDataEvent) {
        /// <summary>图片分步加载</summary>
        /// <param name="dataContainerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID(如果是多条记录的话不能用id否则在二次填充的时候会多出记录)等)</param>
        /// <param name="methodName" type="String">后台WebMethod名，也可以是全路径</param>
        /// <param name="param" type="String">调用webmethod的参数，例如：{id:'1',name:'name'}(可为空或不传)</param>
        /// <param name="pageContainerSelector" type="String">翻页控件容器选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="pageSize" type="int">每页显示的记录条数</param>
        /// <param name="blockSize" type="int">每块加载的记录条数</param>
        /// <param name="successFunc" type="function">成功时调用的函数，参数为jason格式的数据例如：{"data":[{"id":"1","name":"chi"},{"id":"2","name":"chi2"}]} (可以不传)</param>
        /// <param name="errorFunc" type="function">错误时调用的函数 (可以不传)</param>
        /// <param name="loadingSelector" type="String">正在加载提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="beforFillDataEvent" type="function">填充数据之前触发的事件，接收参数data,可以改写填充数据</param>

        /********************************************************* 
         * 2014-04-16 黄启 添加属性： ScrollContainerSelector  LoadingSensitivity
         * 2014-04-16 黄启 重写 ScrollHandle方法
        **********************************************************/

        this.CurrBlockNo = 0; //当前的块号
        this.IsNewPage = true; //是否是一个新页
        this.IsAddingBlock = false; //是否正在加载块
        this.RecCount = 100; //记录条数        
        this.Destroyed = false; //是否已经删除了
        this.ScrollContainerSelector = ""; //需要监听scroll 的容器选择器 默认为window
        this.LoadingSensitivity = 50;       //图片加载的灵敏度 越大越灵敏

        //填充空数据，目的把数据区块隐藏，用户就看不到占位符了
        Cmn.FillData(dataContainerSelector, []);

        methodName = CmnAjax.MethodNameToUrl(methodName);

        //CmnAjax.PicStepLoadList[CmnAjax.PicStepLoadList.length] = this;
        //var _picStepLoadListVarName = "CmnAjax.PicStepLoadList[" + (CmnAjax.PicStepLoadList.length - 1) + "]";
        var _Self = this;

        //获取一个选择器，主要用于找到他的parent
        var _dataContainerSelectorOne = dataContainerSelector;
        if (Cmn.Func.IsArray(dataContainerSelector)) { _dataContainerSelectorOne = dataContainerSelector[0]; }

        //增加一块函数
        this.AddBlock = function () {
            if (this.Destroyed == true) { console.log("已经删除(刚进入AddBlock)"); return true; }

            if (this.IsAddingBlock) { return; } //如果正在加载，就直接退出，防止重入
            else { this.IsAddingBlock = true; }

            if (this.CurrBlockNo!=0 && this.CurrBlockNo % (pageSize / blockSize) == 0 && 
                this.IsNewPage == false) { this.IsAddingBlock = false;  return; } //当前页块已经加完，不能再加载

            //如果所有的记录已经加载完就不加载了
            if (this.CurrBlockNo >= parseInt((this.RecCount + blockSize - 1) / blockSize)) { this.IsAddingBlock = false; return; }

            methodName = Cmn.Func.AddParamToUrl(methodName, "CurPage=" + (this.CurrBlockNo+1));
            methodName = Cmn.Func.AddParamToUrl(methodName, "PageSize=" + blockSize);
            
            var _isNewPage = this.IsNewPage;

            CmnAjax.ShowAjaxHandleHint(loadingSelector, _dataContainerSelectorOne); //显示正在加载提示            

            CmnAjax.PostData(methodName, param, function (data) {
                CmnAjax.HideAjaxHandleHint(loadingSelector);  //隐藏正在加载

                //if (eval("(" + _picStepLoadListVarName + ".Destroyed)") == true) { console.log("已经删除"); return true; }
                if (_Self.Destroyed == true) { console.log("已经删除"); return true; }

                if (beforFillDataEvent) { beforFillDataEvent(data.data); } //触发填充前事件

                Cmn.FillData(dataContainerSelector, data.data, _isNewPage ? false : true, true);
                if (successFunc) { successFunc(data); }

                //eval(_picStepLoadListVarName + ".CurrBlockNo++;" +
                //    _picStepLoadListVarName + ".IsNewPage=false;" +
                //    _picStepLoadListVarName + ".IsAddingBlock=false;" +
                //    _picStepLoadListVarName + ".RecCount=" + data.RecCount + ";");
                _Self.CurrBlockNo++;
                _Self.IsNewPage = false;
                _Self.IsAddingBlock = false;
                _Self.RecCount = parseInt(data.RecCount);


                return true;
            }, function (httpRequest) {
                CmnAjax.HideAjaxHandleHint(loadingSelector);  //隐藏正在加载

                if (errorFunc) { errorFunc(httpRequest); }

                Cmn.Log("PicStepLoad填充数据时Ajax报错！dataContainerSelector:" + dataContainerSelector + " methodName:" + methodName +
                    " param:" + param + " 错误详细信息：" + httpRequest.responseText);
                return false;
            });
        }
        
        //滚动条事件处理
        //绑定滚动条加载数据
        this.BindScrollLoadData = function (containerSelector, sensitivity) {
            /// <summary>绑定滚动条事件</summary>
            /// <param name="containerSelector" type="String">内容容器选择器</param>
            /// <param name="sensitivity" type="String">加载内容的灵敏度（默认50）</param>

            if (containerSelector) { this.ScrollContainerSelector = containerSelector; }
            if (sensitivity) { this.LoadingSensitivity = sensitivity; }

            var _scrollHeight = 0;  //滚动条的总高度
            var _sensitivity = this.LoadingSensitivity;  //临时存储灵敏度
            var _$scrollContainer = $(window);          //默认监听window的scroll

            //判断是否传进来scroll容器选择器
            if (this.ScrollContainerSelector != "") {
                _$scrollContainer = $(this.ScrollContainerSelector);
                _scrollHeight = _$scrollContainer[0].scrollHeight;
            }
            else {  _scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight; }

            function _scrollHeader() {
                if (_Self.ScrollContainerSelector != "") {  _scrollHeight = _$scrollContainer[0].scrollHeight; }
                else { _scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight; }

                if (_$scrollContainer.scrollTop() + _$scrollContainer.height() + _sensitivity >= _scrollHeight) {
                    //eval(_picStepLoadListVarName + ".AddBlock();");
                    _Self.AddBlock();
                }
            }

            //绑定scroll事件
            _$scrollContainer.off("scroll", _scrollHeader).on("scroll", _scrollHeader);

            return {
                Destroy: function () {  _$scrollContainer.off("scroll", _scrollHeader); }
            }
        };

        //bangding
        this.BindScrollLoadData();
        //解除所有绑定(在多次绑定的时候防止重复触发一些事件)
        this.Destroy = function () {
            if (Cmn.Func.IsArray(dataContainerSelector)) {
                for (var _i = 0; _i < dataContainerSelector.length; _i++) {
                    $(dataContainerSelector[_i]).siblings().html("");
                }
            }
            else { $(dataContainerSelector).siblings().html(""); }

            this.BindScrollLoadData().Destroy();
            this.Destroyed = true;
        }

        //判断是否有翻页控件
        if (pageContainerSelector == null || typeof(pageContainerSelector) == "undefind" || pageContainerSelector == "") {            
            this.AddBlock();            
            return;
        }


        


        //翻页触发函数
        var PagingFunction = function(pageNo) {
            //eval(_picStepLoadListVarName + ".CurrBlockNo=" + ((pageNo - 1) * pageSize / blockSize) + ";" +
            //     _picStepLoadListVarName + ".IsNewPage=true;" +
            //     _picStepLoadListVarName + ".IsAddingBlock=false;"+
            //     _picStepLoadListVarName + ".AddBlock();");

            _Self.CurrBlockNo = ((pageNo - 1) * pageSize / blockSize);
            _Self.IsNewPage = true;
            _Self.IsAddingBlock = false;
            _Self.AddBlock();
        }        

        this.Paging = new Cmn.Paging(pageContainerSelector, 0, pageSize, PagingFunction);


        //刷新数据和翻页控件
        this.Refresh = function () {
            //eval(_picStepLoadListVarName + ".AddBlock();");
            _Self.AddBlock();

            methodName = Cmn.Func.AddParamToUrl(methodName, "CurPage=1");
            methodName = Cmn.Func.AddParamToUrl(methodName, "PageSize=" + pageSize);

            CmnAjax.PostData(methodName, param, function (data) {
                //eval(_picStepLoadListVarName + ".Paging.RecCount=" + data.RecCount + ";");
                _Self.Paging.RecCount = parseInt(data.RecCount);
                //eval(_picStepLoadListVarName + ".Paging.ToPage(1,false);");
                _Self.Paging.ToPage(1,false);

                return true;
            }, function (httpRequest) {
                if (errorFunc) { errorFunc(httpRequest); }
                Cmn.Log("picStepLoad填充数据时Ajax报错！dataContainerSelector:" + dataContainerSelector + " methodName:" + methodName +
                    " param:" + param + "  错误详细信息：" + httpRequest.responseText);
                return false;
            });
        }

        this.Refresh();
    },
    //提交数据
    SubmitData: function (containerSelector, methodName, param, checkRegular, errDispSelector, submitingHintSelector,
        successFunc, errorFunc) {
        /// <summary>提交数据</summary>
        /// <param name="containerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="methodName" type="String">服务器端Webmethod名，也可以是全路径</param>
        /// <param name="param" type="String">调用webmethod的参数，例如：{id:'1',name:'name'}(可为空或不传)</param>
        /// <param name="checkRegular" type="Array">验证正则</param>
        /// <param name="errDispSelector" type="String">错误显示容器选择器</param>
        /// <param name="submitingHintSelector" type="String">正在提交提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="successFunc" type="function">成功时调用的函数，参数为jason格式的数据例如：{"data":[{"id":"1","name":"chi"},{"id":"2","name":"chi2"}]} (可以不传)</param>
        /// <param name="errorFunc" type="function">错误时调用的函数 (可以不传)</param>

        var _data = "";
        var _errMsg = "";
        var _radioLst = new Array(); //存放radio的name列表


        methodName = CmnAjax.MethodNameToUrl(methodName);

        //获取容器中的input中的数据
        $(containerSelector).find("input[id][type!='button'][id!='__VIEWSTATE']").add(containerSelector + " textarea").add(containerSelector + " select").each(function () {
            var _name = $(this).attr("id").toString();

            if (_name != null && _name != undefined && _name.length > 3) {
                _name = _name.substring(3);

                if ($(this).attr("type") == "checkbox") { //是checkbox                    
                    if ($(this).attr("checked")) { _value = "1"; }
                    else { _value = "0"; }
                }
                else if ($(this).attr("type") == "radio") { //是radio
                    var _isExists = false;
                    var _tmpName = $(this).attr("name");

                    if (_tmpName.length <= 3) { return; }

                    for (var _i = 0; _i < _radioLst.length; _i++) {
                        if (_radioLst[_i] == _tmpName) { _isExists = true; break; }
                    }

                    if (!_isExists) { _radioLst.push(_tmpName); }

                    return;
                }
                else { _value = $(this).val(); }

                //查看有没有Check如果有需要check
                if (checkRegular != null && checkRegular != undefined) {
                    if (checkRegular[_name] != null && checkRegular[_name] != undefined) {
                        var _checkRet = Cmn.CheckValid(checkRegular[_name], _value);

                        if (_checkRet != true) { //错误    
                            _errMsg += _checkRet;

                            return false;
                        }

                        //var _reg = new RegExp(checkRegular[_name].Regular);

                        //if (!_reg.test(_value)) { alert(checkRegular[_name].ErrMsg); return false; }
                    }
                }

                if (_data.length > 1) { _data += ","; }
                _data += "'" + _name + "':'" + Cmn.Func.FormatJsonData(_value) + "'";
            }
        });

        //如果没有错误，把错误显示框清空
        if (_errMsg != "") {
            if (errDispSelector) { $(errDispSelector).html(_errMsg); }
            else { alert(_errMsg); }

            return false;
        }
        else { if (errDispSelector) { $(errDispSelector).html(""); } }

        //加radio的值
        for (var _i = 0; _i < _radioLst.length; _i++) {
            //如果没有选中的话，返回空字符串
            var _tmpDom = $("input[name='" + _radioLst[_i] + "']:checked");
            var _tmpValue = "";

            if (_tmpDom.length > 0) { _tmpValue = _tmpDom.val(); }

            if (_data.length > 1) { _data += ","; }
            _data += "'" + _radioLst[_i].substring(3) + "':'" + _tmpValue + "'";
        }

        if (_data == "") { return false; }

        //在data中加入param
        if (!Cmn.Func.IsString(param)) { param = Cmn.Func.JsonToStr(param); }

        if (param && param != "") {
            param = Cmn.Func.Trim(param);
            param = param.substring(1);
            param = param.substring(0, param.length - 1);

            if (param != "") { _data = _data + "," + param; }
        }

        var _retText = "";
        methodName = CmnAjax.Func.GetProxyUrl(methodName);
        var _isWebMethod = Cmn.Func.IsWebMethod(methodName);
        var _execComplete = false; //是否已经执行完成


        //处理参数
        var _tmpData = "{" + _data + "}";
        if (!_isWebMethod) {
            try{ _tmpData = eval("({" + _data + "})"); }
            catch (err) { Cmn.alert("输入的内容可能存在问题！错误信息："+err.message); }
        }

        CmnAjax.ShowAjaxHandleHint(submitingHintSelector); //显示正在提交提示

        _retText = CmnAjax.GetData(methodName, _tmpData, submitingHintSelector,successFunc,errorFunc);

        //$.ajax({type: "Post", url:methodName, dataType: "text",
        //    contentType: (_isWebMethod ? "application/json;charset=uft-8" : "application/x-www-form-urlencoded"),
        //    data: _tmpData, async: false,
        //    success: function (retData) {
        //        CmnAjax.HideAjaxHandleHint(submitingHintSelector); //隐藏正在提交提示

        //        try { _retText = eval("(" + retData + ")").d; if (!_retText) { _retText = eval("(" + retData + ")"); } } //是json
        //        catch (err) { _retText = retData; } //不是json
                
        //        _execComplete = true;

        //        if (successFunc) { successFunc(_retText); }
        //    },
        //    error: function (httpRequest) {
        //        CmnAjax.HideAjaxHandleHint(submitingHintSelector); //隐藏正在提交提示

        //        _execComplete = true;

        //        if (errorFunc) { errorFunc(); }

        //        Cmn.Log("GetData！ methodName:" + methodName +
        //            " param:" + param + "  错误详细信息：" + httpRequest.responseText);
        //    }
        //});

        //for (; ;) { if (_execComplete) { break; } } //等待ajax执行完成

        return _retText;
    },    
    //获取远程数据(阻塞方式)
    GetData: function (methodName, param, getingHintSelector,successFunc,errorFunc) {
        /// <summary>获取远程数据(阻塞方式)</summary>
        /// <param name="methodName" type="String">服务器端Webmethod名，也可以是全路径</param>
        /// <param name="param" type="String">调用webmethod的参数，例如：{id:'1',name:'name'}(可为空或不传)</param>
        /// <param name="getingHintSelector" type="String">正在获取数据提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="successFunc" type="function">成功回调函数</param>
        /// <param name="errorFunc" type="function">错误回调函数</param>
        /// <returns type="String" />

        methodName = CmnAjax.MethodNameToUrl(methodName);
        methodName = CmnAjax.Func.GetProxyUrl(methodName);

        var _isWebMethod = Cmn.Func.IsWebMethod(methodName);
        var _retText = "";
        var _hasExecComplete = false; //是否已经执行完成

        //参数处理
        var _paramJson = null; //参数的json对象

        if (param != undefined) {
            if (Cmn.Func.IsString(param)) { //参数是字符串
                if (param == "") { param = "{}"; }

                if (_isWebMethod == false) { param = eval("(" + param + ")"); _paramJson = param; } //不是WebMethod的话，需要转成对象
                else { _paramJson = eval("(" + param + ")"); }
            }
            else { //是json对象 
                _paramJson = param;
                if (_isWebMethod) { param = Cmn.Func.JsonToStr(param); }
            }
        }

        CmnAjax.ShowAjaxHandleHint(getingHintSelector); //显示正在获取数据提示

        var _dataType = "text";

        //if (Cmn.Func.IsSameMainDomain(methodName) === false) { //不同域，需要跨域
        //    _dataType = "jsonp";
        //}

        $.ajax({
            type: "Post", "url": methodName, dataType: _dataType,
            jsonp:"callback",
            contentType: (_isWebMethod ? "application/json;charset=uft-8" : "application/x-www-form-urlencoded"),
            data: param, async: false,
            success: function (retData) {
                CmnAjax.HideAjaxHandleHint(getingHintSelector); //隐藏正在获取数据提示

                if (_isWebMethod) {
                    _retText = eval("(" + retData + ")").d;

                    if (_retText == null) { _retText = ""; }
                    else {
                        try { _retText = eval("(" + _retText + ")"); } catch (er) { }
                    }
                }
                else {
                    try { _retText = eval("(" + retData + ")"); } catch (err) { _retText = retData; }
                }

                if (successFunc) { successFunc(_retText); }

                _hasExecComplete = true;
            },
            error: function (httpRequest) {
                _hasExecComplete = true;
                CmnAjax.HideAjaxHandleHint(getingHintSelector); //隐藏正在获取数据提示

                Cmn.Log("GetData！ methodName:" + methodName +
                    " param:" + Cmn.Func.JsonToStr(param) + "  错误详细信息：" + httpRequest.responseText);

                if (errorFunc) { errorFunc(httpRequest); }
            }
        });

        //for (; ;) { if (_hasExecComplete) { break; } } //等待ajax执行完成

        return _retText;
    },
    //发送数据(非阻塞方式)       
    PostData: function (methodName, param, successFunc, errorFunc,loadingSelector) {
        /// <summary>发送数据(非阻塞方式)</summary>
        /// <param name="methodName" type="String">WebMethod函数名</param>
        /// <param name="param" type="String">调用webmethod的参数(字符串)，例如："{id:'1',name:'name'}"(可为空或不传)</param>
        /// <param name="successFunc" type="String">成功时调用的函数，参数为jason格式的数据例如：{"data":[{"id":"1","name":"chi"},{"id":"2","name":"chi2"}]} (可以不传)</param>
        /// <param name="errorFunc" type="String">错误时调用的函数 (可以不传)</param>
        /// <param name="loadingSelector" type="String">正在加载提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>

        methodName = CmnAjax.MethodNameToUrl(methodName);
        methodName = CmnAjax.Func.GetProxyUrl(methodName); //如果有代理加代理

        var _isWebMethod = Cmn.Func.IsWebMethod(methodName);

        //参数处理
        var _paramJson = null; //参数的json对象

        if (param != undefined) {
            if (Cmn.Func.IsString(param)) { //参数是字符串
                if (param == "") { param = "{}"; }

                if (_isWebMethod == false) { param = eval("(" + param + ")"); _paramJson = param; } //不是WebMethod的话，需要转成对象
                else { _paramJson = eval("(" + param + ")"); }
            }
            else { //是json对象 
                _paramJson = param;
                if (_isWebMethod) { param = Cmn.Func.JsonToStr(param); }
            }
        }

        CmnAjax.ShowAjaxHandleHint(loadingSelector); //显示正在获取数据提示

        var _dataType = "text";

        if (Cmn.Func.IsSameMainDomain(methodName) === false) { //不同域，需要跨域
            _dataType = "jsonp";
        }

        $.ajax({
            type: "Post",
            jsonp: "callback",
            url: methodName,
            data: param,
            contentType: (_isWebMethod ? "application/json;charset=uft-8" : "application/x-www-form-urlencoded"),
            dataType: _dataType,
            success: function (retData) {
                CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在获取数据提示

                var _retVal = "";

                if (_isWebMethod) {
                    _retVal = eval("(" + retData + ")").d;

                    if (_retVal == null) { _retVal = ""; }
                    else {
                        try { _retVal = eval("(" + _retVal + ")"); }  catch (er) { }
                    }
                }
                else {
                    try { _retVal = eval("(" + retData + ")"); }
                    catch (err) { _retVal = retData; }
                }

                if (successFunc) { successFunc(_retVal); } //如果有成功函数就调用                

                return true;
            },
            error: function (httpRequest) {
                CmnAjax.HideAjaxHandleHint(loadingSelector); //隐藏正在获取数据提示

                if (errorFunc) { errorFunc(httpRequest); }
                Cmn.Log("PostData填充数据时Ajax报错！ methodName:" + methodName +
                    " param:" + Cmn.Func.JsonToStr(param) + "  错误详细信息：" + httpRequest.responseText);

                return false;
            }
        });
    },
    //获取远程文件
    GetFile: function (fileUrl, successFunc, errorFunc,isBlock) {
        /// <summary>获取远程文件，返回文件内容</summary>
        /// <param name="fileUrl" type="String">远程文件的url</param>
        /// <param name="successFunc" type="function">成功回调函数</param>
        /// <param name="errorFunc" type="function">失败回调函数</param>
        /// <param name="isBlock" type="bool">是否是阻塞方式获取（默认是阻塞方式）</param>
        /// <returns type="String" />

        var _fileContent = ""; //文件内容
        var _fileSuffix = "text"; //文件后缀

        if (fileUrl == "") { return ""; }

        var _suffixLoc = fileUrl.lastIndexOf(".");
        if (_suffixLoc != -1) { //找到了
            _fileSuffix = Cmn.Func.Trim(fileUrl.substring(_suffixLoc + 1));

            if (_fileSuffix == "js") { _fileSuffix = "script"; }
            else if (_fileSuffix == "htm") { _fileSuffix = "html"; }
            else { _fileSuffix = "text"; }
        }

        //设置阻塞方式
        var _async = false;

        if (isBlock === false) { _async = true; }


        CmnAjax.ShowAjaxHandleHint(""); //显示正在获取数据提示

        $.ajax({
            type: "GET", url: fileUrl, 
            async: _async,
            dataType: _fileSuffix,
            success: function (retData) {
                CmnAjax.HideAjaxHandleHint(""); //隐藏正在获取数据提示

                _fileContent = retData;

                if (successFunc) { successFunc(_fileContent); }
            },
            error: function (httpRequest, textStatus) {
                CmnAjax.HideAjaxHandleHint(""); //隐藏正在获取数据提示

                if (errorFunc) { errorFunc(); }

                Cmn.Log("GetFile！ fileUrl:" + fileUrl + "； dataType:" + _fileSuffix + "；  错误详细信息：" + textStatus+"------" + httpRequest.responseText);
            }
        });

        return _fileContent;
    },
    //获取某一个字段的值
    GetField: function (fieldName, tableName, condition, orderBy) {
        /// <summary>获取某一个字段的值</summary>
        /// <param name="fieldName" type="String">字段名</param>
        /// <param name="tableName" type="String">表名</param>
        /// <param name="condition" type="String">条件</param>
        /// <param name="orderBy" type="String">排序</param>
        /// <returns type="String" />

        if (!condition) { condition = ""; }
        else { condition = condition.replace(new RegExp("'", "g"), "\\'"); }

        if (!orderBy) { orderBy = ""; }
        else { orderBy = orderBy.replace(new RegExp("'", "g"), "\\'"); }

        var _retText = "";

        var _retVal = $.ajax({ type: "Post", "url": "/CmnAjax/CmnAjax.aspx/GetField", dataType: "text",
            contentType: "application/json;charset=uft-8",
            async: false,
            data: "{fieldName:'" + fieldName + "',tableName:'" + tableName + "',condition:'" + condition + "',orderBy:'" + orderBy + "'}",
            success: function (retData) {
                try { _retText = eval("(" + retData + ")").d; if (!_retText) { _retText = retData; } } //是json
                catch (err) { _retText = retData; } //不是json             
            },
            error: function (httpRequest) {
                Cmn.Log("GetField ajax调用错误！ fieldName:" + fieldName + "  tableName：" + tableName +
                    "  错误明细：" + httpRequest.responseText);
            }
        });

        return _retText;
    },
    //显示默认ajax提示的次数（框架内部用）
    ShowDefaultAjaxHintCount: 0,
    //显示正在加载提示(框架内部用)   
    ShowAjaxHandleHint: function (ajaxHandleHintSelector, dataContainerSelector) {
        /// <summary>显示正在加载提示(框架内部用)</summary>
        /// <param name="ajaxHandleHintSelector" type="String">正在加载提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="dataContainerSelector" type="String">数据控件容器选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>

        //显示正在加载，如果在同一父节点下，移到最后
        if (ajaxHandleHintSelector != null && ajaxHandleHintSelector != "" && typeof (ajaxHandleHintSelector) != "undefind") {
            if (dataContainerSelector != null && dataContainerSelector != "" && typeof (dataContainerSelector) != "undefind") {
                if (Cmn.Func.IsArray(dataContainerSelector)) {
                    dataContainerSelector = dataContainerSelector[0];
                }

                //如果在数据填充的容器中，要移到最后
                if ($(ajaxHandleHintSelector).parent().children(dataContainerSelector).length > 0) {
                    //$(ajaxHandleHintSelector).parent().append($(ajaxHandleHintSelector));
                    $(ajaxHandleHintSelector).parent().each(function () {
                        $(this).append($(this).children(ajaxHandleHintSelector));
                    });
                }
            }

            $(ajaxHandleHintSelector).show(); //显示正在加载
        }
        else { //显示默认提示
            if (CmnAjax.ShowDefaultAjaxHintCount == 0) {
                $("body").append("<div class='body_loading' style='position:fixed;right:4px;bottom:4px;font-size:12px;z-index:10001;color:#ffffff;padding:2px;padding-left:6px;padding-right:6px; background:rgba(33, 33, 33, 0.4) none repeat scroll 0 0 !important;filter:Alpha(opacity=40);background:#333333;'> <span style='position:relative;'> Loading... </span></div>");
            }
            CmnAjax.ShowDefaultAjaxHintCount++;
        }
    },
    //隐藏正在加载提示(框架内部用)
    HideAjaxHandleHint: function (ajaxHandleHintSelector) {
        /// <summary>隐藏正在加载提示(框架内部用)</summary>
        /// <param name="ajaxHandleHintSelector" type="String">正在加载提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>

        //隐藏正在加载
        if (ajaxHandleHintSelector != null && ajaxHandleHintSelector != "" && typeof (ajaxHandleHintSelector) != "undefind") {
            $(ajaxHandleHintSelector).hide();
        }
        else {
            CmnAjax.ShowDefaultAjaxHintCount--;
            if (CmnAjax.ShowDefaultAjaxHintCount == 0) { $("body .body_loading").remove(); }
        }
    },
    Func: {
        //获取代理url
        GetProxyUrl: function (url) {
            /// <summary>获取代理url</summary>
            /// <param name="url" type="String">网址</param>
            /// <returns type="String" />

            if (CmnAjax.Cfg.ProxyUrl == "") { return url; }

            if (url.indexOf("?TargetUrl=") >= 0) { return url; }
            else { return CmnAjax.Cfg.ProxyUrl + "?TargetUrl=" + encodeURIComponent(url); }
        },
        HasLoadJsUrl: {},
        HasLoadCss:{},
        LoadJs: function (jsUrl, callback, isAllowRepeatLoad) {
            /// <summary>动态加载Js</summary>
            /// <param name="jsUrl" type="String">jsUrl</param>
            /// <param name="callback" type="function">加载完回调函数</param>
            /// <param name="isAllowRepeatLoad" type="bool">是否允许重复加载，默认为允许</param>

            if (typeof (isAllowRepeatLoad) == "undefined") { isAllowRepeatLoad = false; }

            if (isAllowRepeatLoad == false) { //不允许重复加载
                var _jsUrl = CmnAjax.Func.HasLoadJsUrl[jsUrl];

                if (_jsUrl == null || _jsUrl == undefined) { //没有加载过    
                    CmnAjax.Func.HasLoadJsUrl[jsUrl] = jsUrl;
                    //$.getScript(jsUrl, callback);
                    return CmnAjax.GetFile(jsUrl,callback,callback);
                }
            }
            else {
                return CmnAjax.GetFile(jsUrl, callback, callback);
                //$.getScript(jsUrl, callback);
            }
        },
        LoadCss: function (path) {
            /// <summary>动态加载Css</summary>
            /// <param name="path" type="String">css路径</param>
            if (!path || path.length === 0) {
                throw new Error('argument "path" is required !');
            }

            var _path = CmnAjax.Func.HasLoadCss[path];

            if (!_path) { //没有加载过    
                var _head = document.getElementsByTagName('head')[0];
                var _link = document.createElement('link');
                _link.href = path;
                _link.rel = 'stylesheet';
                _link.type = 'text/css';
                _head.appendChild(_link);
                CmnAjax.Func.HasLoadCss[path] = path;
            }

        }

    }
};