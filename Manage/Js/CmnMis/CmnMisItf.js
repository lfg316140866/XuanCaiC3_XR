/// <reference path="CmnMis.js" />
/// <reference path="CmnMisUserForm.js" />


//检查CmnMis有没有定义，如果没有定义就定义下
if (typeof (CmnMis) == "undefined") { CmnMis = {}; }

/// <summary>CmnMis用到的函数库</summary>
CmnMis.Itf = {
    GetData: function (itfName, param,isBlock, successFunc, errorFunc) {
        /// <summary>获取sql类型接口返回的数据</summary>
        /// <param name="itfName" type="String">接口名</param>
        /// <param name="isBlock" type="bool">是否为阻塞方式，默认为不是阻塞方式</param>
        /// <param name="successFunc" type="function">执行成功调用的函数,并返回data参数</param>
        /// <param name="errorFunc" type="function">执行错误调用的函数</param>

        var _url = "method=GetSqlData&ItfName=" + itfName;

        _url = Cmn.Func.AddParamToUrl(CmnMis.Func.GetCmnItfUrl(), _url);

        if (isBlock === true) { return CmnAjax.GetData(_url, param); }
        else { CmnAjax.PostData(_url, param, successFunc, errorFunc); }
    },
    FillData: function (containerSelector, itfName, param, successFunc, errorFunc, loadingSelector) {
        /// <summary>用sql类型的接口填充数据</summary>
        /// <param name="containerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID(如果是多条记录的话不能用id否则在二次填充的时候会多出记录)等)</param>
        /// <param name="itfName" type="String">接口名</param>
        /// <param name="param" type="String">调用webmethod的参数，例如：{id:'1',name:'name'}(可为空或不传)</param>
        /// <param name="successFunc" type="function">成功时调用的函数，参数为jason格式的数据例如：{"data":[{"id":"1","name":"chi"},{"id":"2","name":"chi2"}]} (可以不传)</param>
        /// <param name="errorFunc" type="function">错误时调用的函数 (可以不传)</param>
        /// <param name="loadingSelector" type="String">正在加载提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>

        itfName = "method=GetSqlData&ItfName=" + itfName;
        itfName = Cmn.Func.AddParamToUrl(CmnMis.Func.GetCmnItfUrl(), itfName);

        CmnAjax.FillData(containerSelector, itfName, param, successFunc, errorFunc, loadingSelector);
    },
    DataPaging: function (dataContainerSelector, itfName, param, pageContainerSelector, pageSize, successFunc, errorFunc,
       loadingSelector, curPageNo) {
        /// <summary>填充数据带翻页控件</summary>
        /// <param name="dataContainerSelector" type="String">控件容器选择器(和jquery的选择器一样，例如：.className或#controlID(如果是多条记录的话不能用id否则在二次填充的时候会多出记录)等)</param>
        /// <param name="itfName" type="String">接口名</param>
        /// <param name="param" type="String">调用webmethod的参数，例如：{id:'1',name:'name'}(可为空或不传)  </param>
        /// <param name="pageContainerSelector" type="String">翻页控件容器选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="pageSize" type="int">每页显示的记录条数</param>
        /// <param name="successFunc" type="function">成功时调用的函数，参数为jason格式的数据例如：{"data":[{"id":"1","name":"chi"},{"id":"2","name":"chi2"}]} (可以不传)</param>
        /// <param name="errorFunc" type="function">错误时调用的函数 (可以不传)</param>
        /// <param name="loadingSelector" type="String">正在加载提示选择器(和jquery的选择器一样，例如：.className或#controlID等)</param>
        /// <param name="curPageNo" type="int">当前页为第几页</param>
        /// <field name="Paging" type="Cmn.Paging">翻页控件</field>
        
        itfName = "method=GetSqlData&ItfName=" + itfName;
        itfName = Cmn.Func.AddParamToUrl(CmnMis.Func.GetCmnItfUrl(), itfName);

        return new CmnAjax.DataPaging(dataContainerSelector, itfName, param, pageContainerSelector, pageSize, successFunc, errorFunc,
            loadingSelector, curPageNo);
    },
    GetValue: function (itfName, param, isBlock, successFunc, errorFunc) {
        /// <summary>获取sql类型接口返回的数据</summary>
        /// <param name="itfName" type="String">接口名</param>
        /// <param name="isBlock" type="bool">是否为阻塞方式，默认为不是阻塞方式</param>
        /// <param name="successFunc" type="function">执行成功调用的函数,并返回data参数</param>
        /// <param name="errorFunc" type="function">执行错误调用的函数</param>

        var _url = "method=GetSqlData&ItfName=" + itfName;

        _url = Cmn.Func.AddParamToUrl(CmnMis.Func.GetCmnItfUrl(), _url);

        if (isBlock === true) {
            var _data = CmnAjax.GetData(_url, param);

            if (_data.data != undefined && _data.data != null && _data.data.length > 0 ) {
                for (var _key in _data.data[0]) {
                    return _data.data[0][_key];
                }
            }
            
            return ""; 
        }
        else {
            if (successFunc == undefined || successFunc == null) {
                Cmn.alert("GetValue非阻塞方式必须提供successFunc回调函数！");
                return;
            }

            CmnAjax.PostData(_url, param, function (data) {
                var _data = "";

                if (data.data != undefined && data.data != null && data.data.length > 0) {
                    for (var _key in data.data[0]) {
                        _data = data.data[0][_key];
                        break;
                    }
                }

                successFunc(_data);
            }, errorFunc);
        }
    },
    Execute: function (itfName, param, isBlock, successFunc, errorFunc) {
        /// <summary>执行一个接口</summary>
        /// <param name="itfName" type="String">接口名</param>
        /// <param name="isBlock" type="bool">是否为阻塞方式，默认为不是阻塞方式</param>
        /// <param name="successFunc" type="function">执行成功调用的函数,并返回IsSuccess和data参数</param>
        /// <param name="errorFunc" type="function">执行错误调用的函数</param>

        if (isBlock === true) { //阻塞
            var _retData = CmnMis.Itf.GetData(itfName, param, true);
            if (_retData.SqlExecIsOk != undefined && _retData.SqlExecIsOk == "1") { return true; }
            else { return false; }
        }
        else { //非阻塞
            CmnMis.Itf.GetData(itfName, param, false, function (data) {
                if ( data.SqlExecIsOk != undefined && data.SqlExecIsOk == "1") { successFunc(true, data); }
                else { successFunc(false,data); }
            }, errorFunc);
        }
    }
}
