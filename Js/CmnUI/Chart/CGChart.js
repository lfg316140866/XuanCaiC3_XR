/// <reference path="Highcharts/highcharts.js" />
/// <reference path="../../Cmn.js" />
/// <reference path="../CmnUI.js" />
/// <reference path="../../jquery1_9_1.js" />
 

(function (window, undefined) {

    var _Cg = window.Cmn;

    if (!_Cg.UI) { alert("请引用CmnUI.js"); return; };
    
    _Cg.UI.ChartType = {
        Scatter:"scatter",   //散列图
        Pie:"pie",          //饼图
        Area: "area",       //区域
        Bar: "bar",          //条形图    
        Column: "column",    //柱状图
        Line: "line"        //线
    }

    Highcharts.setOptions({
        lang: {
            downloadJPEG: "下载保存为JGEP",
            downloadPDF: "下载保存为PDF",
            downloadPNG: "下载保存为PNG",
            downloadSVG: "下载保存为SVG",
            printChart: "打印图表"
        }
    });

    _Cg.UI.CGChart = function (id, dataOrItf, chartType, mapping, param, option) {
        /// <summary>图表生成</summary>
        /// <param name="id" type="String">容器id</param>
        /// <param name="dataOrItf" type="Array or string">数据源 可以是json数组 也可以是一个借口地址</param>
        /// <param name="type" type="String">图表类型</param>
        /// <param name="mapping" type="json">多组数据的映射关系</param>
        /// <param name="param" type="json">如果dataOrItf是接口地址的话 此处传带过去的参数</param>
        /// <param name="option" type="Json">扩展参数json 参数列表跟原生Highcjarts 配置json一样</param>

        var _self = this;

        //图表配置
        _self.ChartsOption = $.extend({
            title: { text: '' },
            subtitle: {  text: ''  },
            chart: {
                renderTo: id,
                type: chartType,
                width: $("#" + id).attr("width") || 500,
                height: $("#" + id).attr("height") || 300
            },
            yAxis: {
                title: { text: '' }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            credits: {
                enabled: false
            },
            series:[]
        },option);

        //当前图表对象
        _self.CurChart = null;
  
        //隐射关系配置
        _self.MappingOption = mapping||[];

        //是否初始化完毕
        _self.IsInitConplete = false;

        //缓存处理图表数据 length 长度 treatment：待处理的图表数据
        _self.CacheSeriesData = { length:0,treatment:0  };


        //初始化图表数据
        //_self.GetFormatSeriesDataData(dataOrItf, param, function (seriesData) {

        //    if (seriesData.length > 0) {
        //        _self.ChartsOption.series = seriesData;
        //    }
             
        //    _self.CurChart = new Highcharts.Chart(_self.ChartsOption);
  
        //    _self.IsInitConplete = true;

        //});

        _self.AddSeries(dataOrItf,mapping, param);

    }
   

    _Cg.UI.CGChart.prototype.GetFormatSeriesDataData = function (dataOrItf,param,complete) {
        /// <summary>获取数据 并且格式化为图表专用数据格式</summary>
        /// <param name="dataOrItf" type="Array or string">数据源 可以是json数组 也可以是一个借口地址</param>
        /// <param name="complete" type="function">处理完毕的回调函数</param>
 
        var _self = this;

        //判断是否是字符串
        if (_Cg.Object.IsType(dataOrItf, "string")) {

            //判断是否为json字符串
            if (/^[\],:{}\s]*$/
                     .test(dataOrItf.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                         .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                         .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                complete && complete.call(this,_self.FormatSeriesData($.parseJSON(dataOrItf)));
            }
            else{
            
                CmnAjax.PostData(dataOrItf, param, function (data) {
                    data = _Cg.Object.IsType(data, "string") ? $.parseJSON(data) : data;
                    data = !!data.data ? data.data : data;
                    complete && complete.call(this, _self.FormatSeriesData(data));
                });
            }

        }
        //如果是json
        else if (_Cg.Object.IsType(dataOrItf, "object")) {
            //转成json数组
            complete && complete.call(this, _self.FormatSeriesData([dataOrItf]));
        }
        // json数组
        else if( _Cg.Object.IsType(dataOrItf, "array")){
            complete && complete.call(this, _self.FormatSeriesData(dataOrItf));
        }


    }

    _Cg.UI.CGChart.prototype.FormatSeriesData = function (data) {
        /// <summary>格式化为图表专用数据格式，把我们的数据格式转换成图表插件需要的数据格式！</summary>
        /// <param name="data" type="Array">需要格式化的数据 </param>

        var _self = this,
            _tempData = [],
            _xAxis = {categories:[]}

        //判断隐射配置项是否存在 如果不存在的话就默认第一个字段是y轴 第二个字段是x轴
        if (!_self.MappingOption || !_self.MappingOption.length || _self.MappingOption.length == 0) {

            $.each(data, function (index, item) {

                if (_Cg.Object.IsType(item, "object")) {

                    var _item = {},  _index = 0;
                    $.each(item, function (key, val) {

                        if (_index == 0) { _item["y"] = val * 1; }
                        else if (_index == 1) {
                            _item["name"] = val;
                            _xAxis.categories.push(val);
                        }
                        else { _item[key] = val; }
                        _index++;

                    });
                    if (!_tempData[0]) { _tempData.push({ data: [] }); }
                    _tempData[0].data.push(_item);
                     
                }
                else {
                    if (!_tempData[0]) { _tempData.push({ data: [] }); }
                    _tempData[0].data.push(item);
                }

            });

        }
        else {
            //遍历配置数组
            $.each(_self.MappingOption, function (i, option) {

                //遍历数据
                $.each(data, function (index, item) {
                    var _item = {};
                    //遍历每条数据
                    $.each(item, function (key, val) {
                        
                        if (option["YFieldName"] == key) { _item["y"] = val * 1; }
                        else if (option["XFieldName"] == key) {
                            _item["name"] = val;
                            _xAxis.categories.push(val);
                        }
                        else { _item[key] = val; }

                    });

                    if (!_tempData[i]) {  _tempData.push({ data: [] });  }
                    _tempData[i].data.push(_item);
                    if (!!option.Desc) { _tempData[i].name = option.Desc; }
                
                });
                 
            });
        }

        if (_xAxis.categories.length > 0) {
    
            _self.ChartsOption.xAxis = $.extend(_self.ChartsOption.xAxis, _xAxis);
        }
       
        return _tempData;
    }

    _Cg.UI.CGChart.prototype.DarwCharts = function (darwComplete) {
        /// <summary>画图表</summary>
        /// <param name="darwComplete" type="function">渲染玩的回调</param>
        var _self = this;

        _darwCharts(darwComplete);

        function _darwCharts(callback) {
            /// <summary>根据每一组数据渲染图表</summary>
            /// <param name="callback" type="function">每一组数据渲染完毕的回调</param>

            //判断当前是否渲染完所有的缓存数据
            if (_self.CacheSeriesData.treatment >= _self.CacheSeriesData.length) { return;}

            //当前的图片渲染数据
            var _treatmentData = _self.CacheSeriesData[_self.CacheSeriesData.treatment + ""];
            _self.MappingOption = _treatmentData.MappingOption

            _self.GetFormatSeriesDataData(_treatmentData.DataOrItf, _treatmentData.Param, function (seriesData) {

                if (_self.CacheSeriesData.treatment <= _self.CacheSeriesData.length - 1) {

                    _self.CacheSeriesData.treatment++;
                  
                    callback && callback(seriesData);

                    _darwCharts(callback);
                }

            });

        }

    }



    _Cg.UI.CGChart.prototype.AddSeries = function (dataOrItf, mappingOption, param) {
        /// <summary>添加一组数据</summary>
        /// <param name="dataOrItf" type="Array or string">数据源 可以是json数组 也可以是一个借口地址</param>
        /// <param name="mapping" type="json">多组数据的映射关系</param>
        /// <param name="param" type="json">如果dataOrItf是接口地址的话 此处传带过去的参数</param>

        var _self = this;

        //未初始化完毕 放入缓存区域等待
        _self.CacheSeriesData[_self.CacheSeriesData.length + ""] = { DataOrItf: dataOrItf, Param: param, MappingOption: mappingOption };
        _self.CacheSeriesData.length++;
 
            //初始化完毕之后 直接setSeries

        _self.DarwCharts(function (seriesData) {
            
                if (!_self.CurChart) {
                    if (seriesData.length > 0) {
                        _self.ChartsOption.series = seriesData;
                    }

                    _self.CurChart = new Highcharts.Chart(_self.ChartsOption);
                   
                }
                else {
                    
                    _self.CurChart.addSeries(seriesData[0], true);
                   
                }

        });

 
    }

})(window);