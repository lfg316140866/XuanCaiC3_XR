/// <reference path="jquery.js"/>
/// <reference path="../Cmn.js" />
/// <reference path="maps.js" />
//检查Cmn有没有定义，如果没有定义就定义下
if (typeof (Cmn) == "undefined") { Cmn = {}; }
if (typeof (Cmn.Map) == "undefined") { Cmn.Map = {}; }
if (typeof (Cmn.Map.Bing) == "undefined") { Cmn.Map.Bing = {}; }


Cmn.Map.Bing.Distance = (function () {
    var EARTH_RADIUS = 6378137.0;    //单位M
    var PI = Math.PI;

    function Calc(lng1, lat1, lng2, lat2, unit) {
        /// <summary>计算两点距离</summary>
        /// <param name="lng1" type="String">点1 经度</param>
        /// <param name="lat1" type="String">点1 纬度</param>
        /// <param name="lng2" type="String">点2 经度</param>
        /// <param name="lat2" type="String">点2 纬度</param>
        /// <param name="unit" type="String">返回距离单位（1：公里；2：米）默认公里</param>
        /// <returns type="String" />

        var f = getRad((lat1 + lat2) / 2);
        var g = getRad((lat1 - lat2) / 2);
        var l = getRad((lng1 - lng2) / 2);

        var sg = Math.sin(g);
        var sl = Math.sin(l);
        var sf = Math.sin(f);

        var s, c, w, r, d, h1, h2;
        var a = EARTH_RADIUS;
        var fl = 1 / 298.257;

        sg = sg * sg;
        sl = sl * sl;
        sf = sf * sf;

        s = sg * (1 - sl) + (1 - sf) * sl;
        c = (1 - sg) * (1 - sl) + sf * sl;

        w = Math.atan(Math.sqrt(s / c));
        r = Math.sqrt(s * c) / w;
        d = 2 * w * a;
        h1 = (3 * r - 1) / 2 / c;
        h2 = (3 * r + 1) / 2 / s;

        var _ret = d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
        if (typeof(unit) == "undefined" || unit == "1") {
            _ret = (_ret /1000).toFixed(1);
        }

        return _ret;
    } 

    function getRad(d) {
        return d * PI / 180.0;
    }

    return {
        Calc:Calc
    }

})();


//---------------------------------------
// 获取坐标
Cmn.Map.Bing.GeoCoder = (function () {
    var _ContainerId;
    var _CallBackFunc;
    var _BingMap;
    var _SearchManager;
    var _Addr;

    function GetByAddress(addr, callBackFunc) {
        /// <summary>根据地址获取坐标</summary>
        /// <param name="addr" type="String">地址</param>
        /// <param name="callBackFunc" type="String">回调函数</param>
        /// <returns type="String" />
        _ContainerId = "bingmap_" + Math.round(1+ Math.random() * 1000000000000000, 15);
        
        $("<div id='" + _ContainerId + "' style='height:1px;width:1px;'><div>").appendTo($("body"));
        _Addr = addr;
        _CallBackFunc = callBackFunc;
        _BingMap = new Microsoft.Maps.Map(document.getElementById(_ContainerId), { credentials: "AumeNeUhh-3vCNJPaImVXxGiF50Ii5J5nVViYW0N6u0dQK19W6OrcUIWVrizJSIa" });

        Microsoft.Maps.loadModule('Microsoft.Maps.Search', { callback: geocodeRequest })
    }

    function createSearchManager() {
        _BingMap.addComponent('searchManager', new Microsoft.Maps.Search.SearchManager(_BingMap));
        _SearchManager = _BingMap.getComponent('searchManager');
    }

    function geocodeRequest() {
        createSearchManager();
        var userData = { name: 'MapsUser', id: 'ABC' };
        var request =
        {
            where: _Addr,
            count: 5,
            bounds: _BingMap.getBounds(),
            callback: onGeocodeSuccess,
            errorCallback: onGeocodeFailed,
            userData: userData
        };
        _SearchManager.geocode(request);
    }
    function onGeocodeSuccess(result, userData) {
        $("#" + _ContainerId).remove();
        var _data = { "Return": 0 };
        if (result) {
            //map.entities.clear();

            var topResult = result.results && result.results[0];
            if (topResult) {
                _data = { "Return": 1, "Lng": topResult.location.longitude, "Lat": topResult.location.latitude };
                //var pushpin = new Microsoft.Maps.Pushpin(topResult.location, null);
                //map.setView({ center: topResult.location, zoom: 10 });
                //map.entities.push(pushpin);
            }
        }
        if (_CallBackFunc) {
            _CallBackFunc(_data);
        } else {
            alert("回调函数未定义！");
        }
    }
    function onGeocodeFailed(result, userData) {
        alert('Geocode failed');
    }


    //function GetByLocation(callBackFunc) {
    //    /// <summary>获取定位位置坐标</summary>
    //    /// <param name="addr" type="String">地址</param>
    //    /// <param name="callBackFunc" type="String">回调函数</param>
    //    /// <returns type="String" />
    //    _ContainerId = "bingmap_" + Math.round(1 + Math.random() * 1000000000000000, 15);
    //    //_CallBackFunc = callBackFunc;
    //    $("<div id='" + _ContainerId + "'><div>").appendTo($("body"));
    //    var mapObj = new AMap.Map(_ContainerId);
    //    var toolBar;
    //    mapObj.plugin(["AMap.ToolBar"], function () {
    //        toolBar = new AMap.ToolBar(); //设置地位标记为自定义标记  
    //        mapObj.addControl(toolBar);
    //        AMap.event.addListener(toolBar, 'location', function callback(e) {
    //            var _data = { "Return": 0 };
    //            if (e.lnglat) {
    //                _data = { "Return": 1, "Lng": e.lnglat.lng, "Lat": e.lnglat.lat };
    //            }
    //            $("#" + _ContainerId).remove();
    //            callBackFunc(_data);

    //        });
    //        toolBar.doLocation();
    //    });

    //}

    //function GetByLocationCallBack(data) {

    //}



    return {
        GetByAddress: GetByAddress
    }
})();

Cmn.Map.Bing.Marker = (function () {
    var _BingMap;
    var _Data = [];

    function Init(containerId, markerData) {
        /// <summary>在未初始化地图上添加点标记</summary>
        /// <param name="containerId" type="String">Map容器ID</param>
        /// <param name="markerData" type="String">Marker坐标数据 例如{ data: [{ "Name": "北京南站", "Lng": 116.379018, "Lat": 39.865026, "Phone": "18917151818", "Post": "201100", "Address": "上海市徐泾镇盈港东路2218弄258号", "PicUrl": "http://api.amap.com/Developers/Tpl/default/Public/Images/JS/image003.png" }, { "Name": "北京西站", "Lng": 116.321139, "Lat": 39.896028, "Phone": "18917151818", "Post": "201101", "Address": "上海市徐泾镇盈港东路2218弄259号", "PicUrl": "http://api.amap.com/Developers/Tpl/default/Public/Images/JS/image003.png" }] }</param>
        //markerData = { data: [{ "Name": "北京南站", "Lng": 116.379018, "Lat": 39.865026, "Phone": "18917151818", "Post": "201100", "Address": "上海市徐泾镇盈港东路2218弄258号", "PicUrl": "http://api.amap.com/Developers/Tpl/default/Public/Images/JS/image003.png" }, { "Name": "北京西站", "Lng": 116.321139, "Lat": 39.896028, "Phone": "18917151818", "Post": "201101", "Address": "上海市徐泾镇盈港东路2218弄259号", "PicUrl": "http://api.amap.com/Developers/Tpl/default/Public/Images/JS/image003.png" }] };
        try {
            if (typeof (_BingMap) != "undefined") {
                _BingMap.dispose();
                _BingMap = null;
            } 
        } catch (ex) {
            alert(ex);
        }

        var _width = $("#" + containerId).width();
        var _height = $("#" + containerId).height();

        _BingMap = new Microsoft.Maps.Map(document.getElementById(containerId), { credentials: "AumeNeUhh-3vCNJPaImVXxGiF50Ii5J5nVViYW0N6u0dQK19W6OrcUIWVrizJSIa", width: _width, height: _height });
        
        Add(markerData);
    }

    function Add(markerData) {
        /// <summary>在已初始化地图上添加点标记</summary>
        /// <param name="markerData" type="String">Marker坐标数据 例如{data:[{"Name":"北京南站","Lng":116.379018,"Lat":39.865026, "Phone": "18917151818", "Post":"201100","Address":"上海市徐泾镇盈港东路2218弄258号"},{"Name":"北京西站","Lng":116.321139,"Lat":39.896028,"Phone": "18917151818", "Post":"201100","Address":"上海市徐泾镇盈港东路2218弄258号"}]}</param>

        if (typeof (markerData) == "string") {
            if (markerData != "") {
                markerData = eval("(" + markerData + ")");
                if (typeof(markerData.data) == "undefined") {
                    return alert("没有data节点，请参考函数说明。");
                }
                if (markerData.data.length <= 0) {
                    return alert("data节点需要传递至少一组坐标信息，请参考函数说明。");
                }
            }
        }

        var _centerLng = 0;
        var _centerLat = 0;

        var _maxLng = 0;
        var _minLng = 9999;
        var _maxLat = 0;
        var _minLat = 9999;

        for (var _i = 0; _i < _Data.length; _i++) {
            _centerLng += _Data[_i].Lng - 0;
            _centerLat += _Data[_i].Lat - 0;

            if (_Data[_i].Lng > _maxLng) { _maxLng = _Data[_i].Lng; }
            if (_Data[_i].Lng < _minLng) { _minLng = _Data[_i].Lng; }
            if (_Data[_i].Lat > _maxLat) { _maxLat = _Data[_i].Lat; }
            if (_Data[_i].Lat < _minLat) { _minLat = _Data[_i].Lat; }
        }

        for (var _i = 0; _i < markerData.data.length; _i++) {
            _centerLng += markerData.data[_i].Lng - 0;
            _centerLat += markerData.data[_i].Lat - 0;

            if (markerData.data[_i].Lng > _maxLng) { _maxLng = markerData.data[_i].Lng; }
            if (markerData.data[_i].Lng < _minLng) { _minLng = markerData.data[_i].Lng; }
            if (markerData.data[_i].Lat > _maxLat) { _maxLat = markerData.data[_i].Lat; }
            if (markerData.data[_i].Lat < _minLat) { _minLat = markerData.data[_i].Lat; }
            _Data.push(markerData.data[_i]);
        }
        _centerLng /= _Data.length;
        _centerLat /= _Data.length;

        _BingMap.setView({ center: new Microsoft.Maps.Location(_centerLat, _centerLng), zoom: 10 });

        for (var _i = 0; _i < markerData.data.length; _i++) {
            var _pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(markerData.data[_i].Lat, markerData.data[_i].Lng), null);
            _BingMap.entities.push(_pushpin);
        }
    }

    return {
        Init: Init,
        Add: Add
    }

})();

//---------------------------------------
// 驾车
//Cmn.Map.Bing.DriveRoute = (function () {

//    var mapObj;
//    var MDrive;
//    var start_xy, end_xy;
//    var start_name, end_name;
//    var steps, polyline;

//    function Init(containerId, geocoderData, resultId) {
//        /// <summary>获取驾车路线</summary>
//        /// <param name="containerId" type="String">Map容器ID</param>
//        /// <param name="resultId" type="String">路线容器ID</param>
//        /// <param name="geocoderData" type="String">起止两个坐标数据 例如{data:[{"Name":"北京南站","Lng":116.379018,"Lat":39.865026},{"Name":"北京西站","Lng":116.321139,"Lat":39.896028}]}</param>
//        /// <returns type="String" />
//        //geocoderData = { data: [{ "Name": "北京南站", "Lng": 116.379018, "Lat": 39.865026 }, { "Name": "北京西站", "Lng": 116.321139, "Lat": 39.896028 }] };
//        if (typeof (geocoderData) == "string") {
//            geocoderData = eval("("+geocoderData+")");
//        }
//        if (typeof (geocoderData.data) == "undefined") {
//            return alert("没有data节点，请参考函数说明。");
//        }
//        if (geocoderData.data.length != 2) {
//            return alert("data节点需要传递起止两组坐标，请参考函数说明。");
//        }

//        //基本地图加载  
//        var opt = {
//            //level: 13, //设置地图缩放级别    
//            center: new AMap.LngLat((geocoderData.data[0].Lng + geocoderData.data[1].Lng) / 2, (geocoderData.data[0].Lat + geocoderData.data[1].Lat) / 2) //设置地图中心点   
//        }
//        try {
//            if (typeof(mapObj) != "undefined") {
//                mapObj.destroy();
//            } 
//        } catch (ex) {
//            alert(ex);
//        }

//        mapObj = new AMap.Map(containerId, opt);
//        //起、终点  
//        start_name = geocoderData.data[0].Name;
//        start_xy = new AMap.LngLat(geocoderData.data[0].Lng, geocoderData.data[0].Lat);
//        end_name = geocoderData.data[0].Name;
//        end_xy = new AMap.LngLat(geocoderData.data[1].Lng, geocoderData.data[1].Lat);
//        try {
//            // 导航插件
//            mapObj.plugin(["AMap.Driving"], function () {
//                var _drivingOption = {
//                    //驾车策略，包括 LEAST_TIME，LEAST_FEE, LEAST_DISTANCE,REAL_TRAFFIC  
//                    policy: AMap.DrivingPolicy.LEAST_TIME
//                };
//                MDrive = new AMap.Driving(_drivingOption); //构造驾车导航类   
//                AMap.event.addListener(MDrive, "complete", driving_routeCallBack); //返回导航查询结果  
//                MDrive.search(start_xy, end_xy); //根据起终点坐标规划驾车路线  
//            });
//            //加载比例尺插件  
//            mapObj.plugin(["AMap.Scale"], function () {
//                scale = new AMap.Scale();
//                mapObj.addControl(scale);
//            });
//            //在地图中添加ToolBar插件  
//            mapObj.plugin(["AMap.ToolBar"], function () {
//                toolBar = new AMap.ToolBar();
//                mapObj.addControl(toolBar);
//            });

//            //在地图中添加鹰眼插件  
//            mapObj.plugin(["AMap.OverView"], function () {
//                //加载鹰眼  
//                overView = new AMap.OverView({
//                    visible: true, //初始化显示鹰眼  默认显示
//                    isOpen: true   //初始化展开鹰眼  默认不展开
//                });
//                mapObj.addControl(overView);
//            });
//        } catch (ex) {
//            //alert(ex);
//        }
//    }

//    //导航结果展示  
//    function driving_routeCallBack(data) {
//        console.log(data);
//        var routeS = data.routes;
//        if (routeS.length <= 0) {
//            alert("未查找到任何结果!请确保所有所有参数正确。");
//        }
//        else {
//            route_text = "";
//            for (var v = 0; v < routeS.length; v++) {
//                //驾车步骤数  
//                steps = routeS[v].steps
//                var route_count = steps.length;
//                //行车距离（米）  
//                var distance = routeS[v].distance;
//                //拼接输出html  
//                for (var i = 0 ; i < steps.length; i++) {
//                    route_text += "<tr><td align=\"left\" onMouseover=\"Cmn.Map.Bing.DriveRoute.driveDrawFoldline('" + i + "')\" onclick=\"Cmn.Map.Bing.DriveRoute.driveDrawFoldline('" + i + "')\">" + i + "." + steps[i].instruction + "</td></tr>";
//                }
//            }
//            if ( typeof( resultId )!= "undefined") {
//                //输出行车路线指示  
//                route_text = "<table cellspacing=\"5px\"><td><img src=\"http://code.mapabc.com/images/start.gif\" />&nbsp;&nbsp;" + start_name + "</td></tr>" + route_text + "<tr><td><img src=\"http://code.mapabc.com/images/end.gif\" />&nbsp;&nbsp;" + end_name + "</td></tr></table>";
//                document.getElementById(resultId).innerHTML = route_text;
//            }
//            drivingDrawLine();
//        }
//    }
//    //绘制驾车导航路线  
//    function drivingDrawLine(s) {
//        //起点、终点图标  
//        var sicon = new AMap.Icon({
//            image: "http://api.amap.com/Public/images/js/poi.png",
//            size: new AMap.Size(44, 44),
//            imageOffset: new AMap.Pixel(-334, -180)
//        });
//        var startmarker = new AMap.Marker({
//            icon: sicon, //复杂图标  
//            visible: true,
//            position: start_xy,
//            map: mapObj,
//            offset: {
//                x: -16,
//                y: -40
//            }
//        });
//        var eicon = new AMap.Icon({
//            image: "http://api.amap.com/Public/images/js/poi.png",
//            size: new AMap.Size(44, 44),
//            imageOffset: new AMap.Pixel(-334, -134)
//        });
//        var endmarker = new AMap.Marker({
//            icon: eicon, //复杂图标  
//            visible: true,
//            position: end_xy,
//            map: mapObj,
//            offset: {
//                x: -16,
//                y: -40
//            }
//        });
//        //起点到路线的起点 路线的终点到终点 绘制无道路部分  
//        var extra_path1 = new Array();
//        extra_path1.push(start_xy);
//        extra_path1.push(steps[0].path[0]);
//        var extra_line1 = new AMap.Polyline({
//            map: mapObj,
//            path: extra_path1,
//            strokeColor: "#9400D3",
//            strokeOpacity: 0.7,
//            strokeWeight: 4,
//            strokeStyle: "dashed",
//            strokeDasharray: [10, 5]
//        });

//        var extra_path2 = new Array();
//        var path_xy = steps[(steps.length - 1)].path;
//        extra_path2.push(end_xy);
//        extra_path2.push(path_xy[(path_xy.length - 1)]);
//        var extra_line2 = new AMap.Polyline({
//            map: mapObj,
//            path: extra_path2,
//            strokeColor: "#9400D3",
//            strokeOpacity: 0.7,
//            strokeWeight: 4,
//            strokeStyle: "dashed",
//            strokeDasharray: [10, 5]
//        });

//        var drawpath = new Array();
//        for (var s = 0; s < steps.length; s++) {
//            drawpath = steps[s].path;
//            var polyline = new AMap.Polyline({
//                map: mapObj,
//                path: drawpath,
//                strokeColor: "#9400D3",
//                strokeOpacity: 0.7,
//                strokeWeight: 4,
//                strokeDasharray: [10, 5]
//            });
//        }
//        mapObj.setFitView();
//    }
//    //绘制驾车导航路段  
//    function driveDrawFoldline(num) {
//        var drawpath1 = new Array();
//        drawpath1 = steps[num].path;
//        if (polyline != null) {
//            polyline.setMap(null);
//        }
//        polyline = new AMap.Polyline({
//            map: mapObj,
//            path: drawpath1,
//            strokeColor: "#FF3030",
//            strokeOpacity: 0.9,
//            strokeWeight: 4,
//            strokeDasharray: [10, 5]
//        });

//        mapObj.setFitView(polyline);
//    }

//    return {
//        Init: Init,
//        driveDrawFoldline: driveDrawFoldline
//    }
//})();;


