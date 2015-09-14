/// <reference path="../Cmn.js" />
/// <reference path="../Js/jquery.js" />
/*
 * Name：刮刮卡 
 * Date: 2015-03-13
 */


(function () {

    var _ScratchCard = function (canvasid, maskImageUrl, width, height) {
        /// <summary>刮刮卡</summary>
        /// <param name="canvasid" type="String">canva id 选择器</param>
        /// <param name="maskImageUrl" type="String">遮罩的图片</param>
        /// <param name="width" type="int">宽度 不设置默认为遮罩图片的宽度</param>
        /// <param name="height" type="int">高度 不设置默认为遮罩图片的高度</param>

        var _Self = this;

        //触点直径大小
        _Self.Eraser = 40;

        _Self.Canvas = document.getElementById(canvasid.replace(/[#|.]/, ""));

        _Self.Ctx = _Self.Canvas.getContext("2d");

        //刮完之后触发的事件
        _Self.OnComplete = new Cg.Event(this);

        //手指或者鼠标拿起触发的事件
        _Self.OnUp = new Cg.Event(this);

        //开始刮的时候触发的事件
        _Self.OnStart = new Cg.Event(this);

        //-----------------------private
        //是否按下
        var _IsMousedown = false,
            //擦的系数
            _MoveCount = 0,
            _StartEvent = ("createTouch" in document) ? "touchstart" : "mousedown",
            _MoveEvent = ("createTouch" in document) ? "touchmove" : "mousemove",
            _EndEvent = ("createTouch" in document) ? "touchend" : "mouseup";

        var _Erase = function (x, y, fresh) {
            /// <summary>橡皮擦</summary>
            /// <param name="x" type="String">擦除的x坐标</param>
            /// <param name="y" type="String">擦除的y坐标</param>
            /// <param name="fresh" type="bool">是否是新的触点</param>

            // $(_Self.Canvas).css('margin-right', $(_Self.Canvas).css('margin-right') == "0px" ? "1px" : "0px");

            _Self.Ctx.lineWidth = _Self.Eraser;
            _Self.Ctx.lineCap = _Self.Ctx.lineJoin = 'round';

            if (fresh) {
                _Self.Ctx.beginPath();
                _Self.Ctx.moveTo(x + 0.01, y);
            }

            _Self.Ctx.lineTo(x, y);
            _Self.Ctx.stroke();

        }

        //去除默认事件
        function _PreventDefault(ev) {
            /// <summary>去除默认事件</summary>
            /// <param name="ev" type="event">事件对象</param>
            if (ev) ev.preventDefault();
            else window.event.returnValue = false;
        }

        //获取坐标
        function _GetPoints(ev) {
            /// <summary>获取当前手指 或者 鼠标的触点</summary>
            /// <param name="ev" type="event">事件对象</param>

            var _ox = 0, _oy = 0;
            var _firstTouch;
            var _pageX, _pageY, _elem = _Self.Canvas;

            while (_elem != null) {
                _ox += _elem.offsetLeft;
                _oy += _elem.offsetTop;
                _elem = _elem.offsetParent;
            }

            if (ev.hasOwnProperty('changedTouches')) {
                _firstTouch = ev.changedTouches[0];

                var _zoom = 1;
                if (!($("body").css("zoom") == "1" || $("body").css("zoom") == undefined)) {
                    _zoom = $("body").css("zoom").replace("%", "") / 100;
                }

                _pageX = _firstTouch.pageX + _firstTouch.pageX * (1 - _zoom);
                _pageY = _firstTouch.pageY + _firstTouch.pageY * (1 - _zoom);

            } else {
                _pageX = ev.pageX;
                _pageY = ev.pageY;
            }
            return { 'x': _pageX - _ox, 'y': _pageY - _oy };
        }

        //鼠标按上
        function _UP(e) {

            if (_IsMousedown) {

                var _imgdata = _Self.Ctx.getImageData(0, 0, _Self.Width, _Self.Height).data;

                for (var _i = 0,_j=0; _i < _imgdata.length; _i += 4) {
                    if (_imgdata[_i + 3]) { _j++; }
                }
                
                _Self.OnUp.Trigger([1 - _j / (_Self.Width * _Self.Height)]);

            }

            _IsMousedown = false;

        }

        //鼠标按下
        function _Down(e) {

            _PreventDefault(e);

            _IsMousedown = true;

            var _point = _GetPoints(e);

            //开始擦
            _Erase(_point.x, _point.y, true);

            //第一次按下的时候触发
            if (_MoveCount == 0) _Self.OnStart.Trigger();
        }

        //鼠标移动
        function _Move(e) {

            _PreventDefault(e);

            if (_IsMousedown) {

                var _point = _GetPoints(e);
                //开始擦
                _Erase(_point.x, _point.y, true);

                _MoveCount++;
            }

        }


        function _Init() {

            //没有设置宽高的话 默认使用 遮罩图片的size
            if (!_Self.Width) { _Self.Width = _Self.MaskImage.width; }
            if (!_Self.Height) { _Self.Height = _Self.MaskImage.height; }

            _Self.Canvas.width = _Self.Width;
            _Self.Canvas.height = _Self.Height;

            _Self.Ctx.drawImage(_Self.MaskImage, 0, 0, _Self.MaskImage.width, _Self.MaskImage.height, 0, 0, _Self.Width, _Self.Height);
            _Self.Ctx.globalCompositeOperation = 'destination-out'

            _Self.BindAction();
        }
        //--------------------------------




        _Self.Init = function (maskImageUrl, width, height) {
            /// <summary>刮刮卡初始化</summary>
            /// <param name="maskImageUrl" type="String">遮罩的图片</param>
            /// <param name="width" type="int">宽度 不设置默认为遮罩图片的宽度</param>
            /// <param name="height" type="int">高度 不设置默认为遮罩图片的高度</param>

            _Self.MaskImage = new Image();
            _Self.MaskImage.onload = _Init
            _Self.MaskImage.src = maskImageUrl;
            if (_Self.MaskImage.complete) { _Init(); }

            _Self.Width = width;
            _Self.Height = height;

            //宽高有传进来的话 设置canvas size
            _Self.Width && (_Self.Canvas.width = _Self.Width);
            _Self.Height && (_Self.Canvas.height = _Self.Height);

        }

        _Self.BindAction = function () {
            /// <summary>绑定用户操作 直白点 就是绑定一些事件 让canvas可以刮</summary>
            _Self.Canvas.addEventListener(_StartEvent, _Down, false);
            window.addEventListener(_EndEvent, _UP, false);
            _Self.Canvas.addEventListener(_MoveEvent, _Move, false);
        }

        _Self.LockAction = function () {
            /// <summary>锁定用户操作 直白点 就是移除一些事件 让canvas不可以刮</summary>
            _Self.Canvas.removeEventListener(_StartEvent, _Down, false);
            window.removeEventListener(_EndEvent, _UP, false);
            _Self.Canvas.removeEventListener(_MoveEvent, _Move, false);
        }

        _Self.Clear = function () {
            //清空刮刮卡
            _Self.Canvas.width = _Self.Width;
            _Self.Canvas.height = _Self.Height;
            _Self.Ctx.clearRect(0, 0, _Self.Width, _Self.Height);   //清空画布
        }


        //初始化
        _Self.Init(maskImageUrl, width, height);

    }

    if (!Cg.Plugin) { Cg.Plugin = {}; }
    Cg.Extend(Cg.Plugin, {

        ScratchCard: function (canvasid, maskImageUrl, width, height) {
            /// <summary>刮刮卡</summary>
            /// <param name="canvasid" type="String">canva id 选择器</param>
            /// <param name="maskImageUrl" type="String">遮罩的图片</param>
            /// <param name="width" type="int">宽度 不设置默认为遮罩图片的宽度</param>
            /// <param name="height" type="int">高度 不设置默认为遮罩图片的高度</param>

            return new _ScratchCard(canvasid, maskImageUrl, width, height);
        }
    })

})();

 