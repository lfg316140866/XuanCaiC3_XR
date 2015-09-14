/// <reference path="Cmn.js" />
/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="MblFunc.js" />
/// <reference path="quo.debug.js" />
/// <reference path="CmnImg.js" />

//检查Cmn有没有定义，如果没有定义就定义下
if (typeof (Cmn) == "undefined") { Cmn = {}; }
if (typeof (Cmn.Img) == "undefined") { Cmn.Img = {}; }

Cmn.Img.BindFileOnChange = function (fileInputID, canvasCut) {
    /// <summary>绑定FileInput的onChange事件</summary>
    /// <param name="fileInputID" type="String">FileInput的ID</param>
    /// <param name="canvasCut" type="Cmn.Img.CanvasCut">CanvasCut对象</param>

    Cmn.DebugLog("BingFileOnChange");

    $("#" + fileInputID).unbind("change").bind("change", function () {
        Cmn.DebugLog("进入OnChange");

        Cmn.Img.GetFileUrl(fileInputID, function (url) {
            if (url != undefined && url != "") {
                canvasCut.Init( url);
            }
            else { alert("图片读取失败！"); }
        });
    });
}


//canvas 图片裁剪
Cmn.Img.CanvasCut = function (canvasSelector) {
    /// <param name="canvasId" type="String">canvas id 属性</param>

    var _CanvasSelector = canvasSelector;
    var _Canvas = null;              //canvas 对象
    var _CanvasContext = null;       //canvas context对象
    var _ImageObj = null;            //图片对象
    var _Scale = 1;                  //缩放比例
    var _OffsetX = 0;                //y
    var _OffsetY = 0;                //x
    var _IsScale = false;            //是否在缩放
    var _Angle = 0;                  //旋转角度
    var _CanvasWidth = $(_CanvasSelector).width();          //画布的宽
    var _CanvasHeight = $(_CanvasSelector).height();         //画布的高
    var _Self = this;

    _Canvas = $(_CanvasSelector)[0];

    function InitPosition() {
        /// <summary>初始化图片的位置，使图片基本在中心点</summary>

        if (_ImageObj == null) { Cmn.DebugLog("图片对象不存在！可能图片路径不对 或者 没有初始化"); return; }

        Cmn.DebugLog("_ImageObj.height:" + _ImageObj.height + " _ImageObj.width:" + _ImageObj.width);

       

        if (_Angle == 90 || _Angle == -270) {
            _OffsetX = _CanvasHeight / 2 + _ImageObj.height * _Scale / 2;
            _OffsetY = _CanvasWidth / 2 - _ImageObj.width * _Scale / 2;
        }
        else if (_Angle == 180 || _Angle == -180) {
            _OffsetX = _CanvasWidth / 2 + _ImageObj.width * _Scale / 2;
            _OffsetY = _CanvasHeight / 2 + _ImageObj.height * _Scale / 2;
        }
        else if (_Angle == 270 || _Angle == -90) {
            _OffsetX = _CanvasHeight / 2 - _ImageObj.width * _Scale / 2;
            _OffsetY = _CanvasWidth / 2 + _ImageObj.height * _Scale / 2;
        }
        else {
            _OffsetX = _CanvasWidth / 2 - _ImageObj.width * _Scale / 2;
            _OffsetY = _CanvasHeight / 2 - _ImageObj.height * _Scale / 2;
        }
    }


    function InitCallback() {
        /// <summary>初始化完之后触发的事件</summary>
        /// <param name="canvasId" type="String">canvas id 属性</param>

        //draw 初始化
        _Self.DrawCutImage(_Scale, _OffsetX, _OffsetY);

        //----------------------------------bind events 
        //----------------------------------缩放事件绑定
        if (!!$$) {
            //缩小
            $$(_CanvasSelector).unbind("pinchIn").bind("pinchIn", function (e) {
                _Scale = _Scale - 0.1;
                if (_Scale < 0.1) { _Scale = 0.1; }

                InitPosition();
                _Self.DrawCutImage(_Scale, _OffsetX, _OffsetY);
                _IsScale = true;
            });
            //放大
            $$(_CanvasSelector).unbind("pinchOut").bind("pinchOut", function (e) {
                _Scale = _Scale < 3 ? _Scale + 0.1 : _Scale;
                InitPosition();
                _Self.DrawCutImage(_Scale, _OffsetX, _OffsetY);
                _IsScale = true;
            });

            $$(_CanvasSelector).unbind("rotateLeft").bind("rotateLeft", function (e) {
                _CanvasContext.rotate(-90 * Math.PI / 180);

                _Angle = _Angle - 90;

                if (_Angle <= -360) { _Angle += 360; }

                InitPosition();
                _Self.DrawCutImage(_Scale, _OffsetX, _OffsetY);

                Cmn.DebugLog("rotateLeft");
            });

            $$(_CanvasSelector).unbind("rotateRight").bind("rotateRight", function (e) {

                _CanvasContext.rotate(90 * Math.PI / 180);

                _Angle = _Angle + 90;

                if (_Angle >= 360) { _Angle -= 360; }

                InitPosition();
                _Self.DrawCutImage(_Scale, _OffsetX, _OffsetY);

                Cmn.DebugLog("rotateRight");
            });
        }

        //-----------------------------------移动位置
        var Startx = 0; var Starty = 0;
        var Point = { x: null, y: null };


        Cmn.DebugLog("_CanvasID：" + _CanvasSelector);

        $(_CanvasSelector).on("touchstart", function (e) {
            Cmn.DebugLog("touchstart");

            if (event.touches.length > 1) { return; }
            e = event.touches ? event.touches[0] : e;
            Startx = e.pageX; Starty = e.pageY;
            Point.x = null; Point.y = null;
        });

        $(_CanvasSelector).on("touchmove", function (e) {
            e.preventDefault();
            if (event.touches.length > 1 || _IsScale == true) { return; }
            e = event.touches ? event.touches[0] : e;
            var _movex = _OffsetX + e.pageX - Startx;
            var _movey = _OffsetY + e.pageY - Starty;
            _Self.DrawCutImage(_Scale, _movex, _movey);
            Point.x = _movex;
            Point.y = _movey;

        });

        $(_CanvasSelector).on("touchend", function (e) {
            if (Point.x !== null) {
                _OffsetX = Point.x;
                _OffsetY = Point.y;
            }
            if (event.touches.length == 0) { _IsScale = false; }
        });
    }


    this.Init = function ( imgPath) {
        /// <summary>初始化</summary>
        /// <param name="imgPath" type="String">图片路径</param>

        _CanvasContext = _Canvas.getContext('2d');

        //loading 图片 获取图片对象
        _ImageObj = new Image();
        var _IsComlpete = false;
        _ImageObj.onload = function () {
            if (!_IsComlpete) InitCallback();
            Cmn.DebugLog("InitCallback :");
        };
        _ImageObj.src = imgPath;
        if (_ImageObj.complete) { InitCallback(); Cmn.DebugLog("InitCallback :"); _IsComlpete = true; }
    }

    this.DrawCutImage = function (scale, x, y) {
        /// <summary>将图片裁剪缩放之后画到canvas</summary>
        /// <param name="scale" type="int">缩放比例</param>
        /// <param name="x" type="int">x 坐标 像素为单位</param>
        /// <param name="y" type="int">y 坐标 像素为单位</param>
        /// <param name="isInitPositon" type="bool">是否需要初始化位置</param>

        if (_ImageObj == null) { Cmn.DebugLog("图片对象不存在！可能图片路径不对 或者 没有初始化"); return; }
        if (_CanvasContext == null) { Cmn.DebugLog("Canvas对象不存在 可能 元素id错误 或者 没有初始化"); return; }

        var _scale = scale; //缩放比例
        var _offsetX = x;//图片所在的x位置
        var _offsetY = y;//图片所在的y位置

        var _sourceWidth = _ImageObj.width; //图片原始宽
        var _sourceHeight = _ImageObj.height;//图片原始高

        var _destWidth = _sourceWidth * _scale;//缩放之后的宽
        var _destHeight = _sourceHeight * _scale;//缩放之后的高

        //画到canvas上面
        _CanvasContext.clearRect(0, 0, _CanvasWidth, _CanvasHeight);
        _Canvas.setAttribute("width", _CanvasWidth);
        _Canvas.setAttribute("height", _CanvasHeight);

        _CanvasContext.rotate(_Angle * Math.PI / 180);

        if (_Angle == 90 || _Angle == -270) {
            _CanvasContext.drawImage(_ImageObj, 0, 0, _sourceWidth, _sourceHeight,
                _offsetY, -_offsetX, _destWidth, _destHeight);
        }
        else if (_Angle == 180 || _Angle == -180) {
            _CanvasContext.drawImage(_ImageObj, 0, 0, _sourceWidth, _sourceHeight,
                -_offsetX, -_offsetY, _destWidth, _destHeight);
        }
        else if (_Angle == 270 || _Angle == -90) {
            _CanvasContext.drawImage(_ImageObj, 0, 0, _sourceWidth, _sourceHeight,
                -_offsetY, _offsetX, _destWidth, _destHeight);
        }
        else {
            _CanvasContext.drawImage(_ImageObj, 0, 0, _sourceWidth, _sourceHeight,
                _offsetX, _offsetY, _destWidth, _destHeight);
        }
    }

    this.GetImageData= function () {
        /// <summary>获取到base64图片数据</summary>

        if (_CanvasContext == null) { Cmn.DebugLog("Canvas对象不存在 可能 元素id错误 或者 没有初始化"); return; }
        return _Canvas.toDataURL("image/png");//.substring(22);
    }
};

