/// <reference path="../../Cmn.js" />
/// <reference path="../CmnMisUI.js" />
/// <reference path="../FileUpload/FileUpload.js" />
 
(function (Cg) {
 
    var _ImageTools = function (selector) {
        /// <summary>图片处理类</summary>
        /// <param name="selector" type="String">图像处理的最大容器 包含所有图像操作按钮 以及操作预览区域选择器</param>
        /// <field name="Selector" type="Object">插件操作选择器</field>
        /// <field name="ImageToolsContainer" type="Jquery">图像处理的最大容器 包含所有图像操作按钮 以及操作预览区域</field>
        /// <field name="Scale" type="int">当前缩放比例</field>
        /// <field name="MaxScale" type="int">当前最大放大比例</field>
        /// <field name="MinScale" type="int">当前缩小缩小比例</field>
        /// <field name="ScaleStep" type="int">每次缩放缩放的范围</field>
        /// <field name="Rotate" type="int">当前旋转角度</field>
        /// <field name="RotateStep" type="int">每次旋转的范围</field>
        /// <field name="__Private_Support" type="String">检测浏览器的支持性</field>
        /// <field name="__Private_OperationCompleteData" type="int">图片处理完了之后的数据</field>

        //继承插件基类
        Cg.Object.Inherit(this, Cg.UI.BasPlugin, []);

        //指向对象本身
        var _self = this;
        //插件操作选择器
        _self.Selector = {
            //选择器前缀
            Prefix: ".cg-ImageTools-",
            //图片操作预览区域
            PreviewContainer: "Preview",
            //缩小按钮选择器
            ReduceBtn: "Reduce",
            //放大按钮选择器
            EnlargeBtn: "Enlarge",
            //左旋转按钮选择器
            LeftRotateBtn: "LeftRotate",
            //右旋转按钮选择器
            RightRotateBtn: "RightRotate"

        }
        //图像处理的最大容器 包含所有图像操作按钮 以及操作预览区域
        if (!!selector) { _self.ImageToolsContainer = $(selector); }

        //图片处理完了之后的数据
        _self.p__Private_OperationCompleteData = { url: "图片path", scale: "", x: "", y: "", rotate: "" };
        //检测浏览器的支持性
        _self.p__Private_Support = "getContext" in document.createElement('canvas') ? "CanvasDarw" : "";
        
        //当前缩放比例
        _self.Scale = 1;
        //当前最大放大比例
        _self.MaxScale = 3;
        //当前缩小缩小比例
        _self.MinScale = 0.05;
        //每次缩放缩放的范围
        _self.ScaleStep = 0.05;
        //当前旋转角度
        _self.Rotate = 0;
        //每次旋转的范围
        _self.RotateStep = Math.PI / 2;
        //宽度
        _self.Width = 300;
        //高度
        _self.Height = 300;
        //宽度
        _self.X = 0;
        //高度
        _self.Y = 0;

        //合成数据
        _self.ComposeData = [];

    }

    _ImageTools.prototype.p__Private_FusionSelector = function () {
        /// <summary>私有方法外部勿用-融合选择器</summary>
        var _self = this, _prefix = "";
        //增加前缀
        $.each(_self.Selector, function (index,item) {
            if (index == "Prefix") { _prefix = item; }
            else { _self.Selector[index] = _prefix + Cmn.UI.GetSelectorName(item); }
        });
    };
    _ImageTools.prototype.p__Private_BindEvent = function () {
        /// <summary>私有方法外部勿用-绑定事件</summary>
        var _self = this;
        //滚轴缩放
        _self.ImageToolsContainer.find(_self.Selector.PreviewContainer).off("DOMMouseScroll mousewheel").on("DOMMouseScroll mousewheel", function (event) {
            event.preventDefault();
            event = event.originalEvent;
            _self.Zoom((event.wheelDelta ? event.wheelDelta / (-120) : (event.detail || 0) / 3) * Math.abs(_self.ScaleStep) * -1);
        });

        //缩小
        _self.ImageToolsContainer.find(_self.Selector.ReduceBtn).off(Cg.UI.EventType.Mousedown).on(Cg.UI.EventType.Mousedown, function (event) {
            event.preventDefault();
           
            _self.Zoom(Math.abs(_self.ScaleStep) * -1);
        });

        //放大
        _self.ImageToolsContainer.find(_self.Selector.EnlargeBtn).off(Cg.UI.EventType.Mousedown).on(Cg.UI.EventType.Mousedown, function (event) {
            event.preventDefault();
            _self.Zoom(Math.abs(_self.ScaleStep));
        });

        //左旋转
        _self.ImageToolsContainer.find(_self.Selector.LeftRotateBtn).off(Cg.UI.EventType.Mousedown).on(Cg.UI.EventType.Mousedown, function (event) {
            event.preventDefault();
            _self.Zoom(Math.abs(_self.ScaleStep));
        });

        //右旋转
        _self.ImageToolsContainer.find(_self.Selector.RightRotateBtn).off(Cg.UI.EventType.Mousedown).on(Cg.UI.EventType.Mousedown, function (event) {
            event.preventDefault();
            _self.Zoom(Math.abs(_self.ScaleStep));
        });

        var _isMoveDown, _startPoint = { x: 0, y: 0 }, _initPoint = { x: 0, y: 0 };
        _self.ImageToolsContainer.find(_self.Selector.PreviewContainer).off(Cg.UI.EventType.Mousedown).on(Cg.UI.EventType.Mousedown, function (e) {
                   Cg.UI.StopBubble(e);
                   Cg.UI.StopDefault(e);
                   e = event.touches ? event.touches[0] : e;
                   //如果在拖动状态就不允许点击
                   if (_isMoveDown) { return false; }
                   //点击
                   _isMoveDown = true;
             
                   _startPoint = { 'x': e.pageX, 'y': e.pageY };
                   //初始点
                   _initPoint = { 'x': _self.X, 'y': _self.Y };

                   _self.ImageToolsContainer.find(_self.Selector.PreviewContainer).on(Cg.UI.EventType.Mousemove, function (e) {
                       Cg.UI.StopBubble(e);
                       Cg.UI.StopDefault(e);//取消文档的默认行为[鼠标移动、触摸移动]
                       e = event.touches ? event.touches[0] : e;
                      
                       _self.X = (_initPoint.x + e.pageX - _startPoint.x);
                       _self.Y = (_initPoint.y + e.pageY - _startPoint.y);
                       _self.p__Private_Darw();
                       return false;
                   });

                   $(window).off(Cg.UI.EventType.Mouseup).on(Cg.UI.EventType.Mouseup, function (e) {
                       $(window).off(Cg.UI.EventType.Mouseup);
                       _self.ImageToolsContainer.find(_self.Selector.PreviewContainer).off(Cg.UI.EventType.Mousemove);
                       _initPoint = { left: 0, top: 0 };
                       _isMoveDown = false;
                   });


               });


    };
    _ImageTools.prototype.p__Private_Darw = function () {
        /// <summary>私有方法外部勿用-渲染</summary>
        var _self = this;
        _self["p__Private_" + _self.p__Private_Support]();

    };

    _ImageTools.prototype.p__Private_CanvasDarw = function () {
        /// <summary>私有方法外部勿用-支持canvas渲染方式</summary>
        
        var _self = this;
        //canvas变换
        _self.Context.save();
        _self.ConvasEle.width = _self.Width;
        _self.ConvasEle.height = _self.Height;
        _self.Context.clearRect(0, 0, _self.Width, _self.Height);//清空内容
        _self.Context.translate(_self.Width / 2 , _self.Height / 2);//中心坐标
        _self.Context.rotate(_self.Rotate);//旋转
       // _self.Context.scale(_self.Scale, _self.Scale);//缩放
        _self.Context.drawImage(_self.ImageData, -_self.ImageData.width * _self.Scale / 2 + _self.X, -_self.ImageData.height * _self.Scale / 2 + _self.Y, _self.ImageData.width * _self.Scale, _self.ImageData.height * _self.Scale);//居中画图
        _self.Context.restore();

        if (Cg.Object.IsType(_self.ComposeData, "array")) {
            $.each(_self.ComposeData, function (index,item) {
                item.ImageData && _self.p__Private_CanvasCompose(item);
            })
        }
        else {
            _self.ComposeData.ImageData &&  _self.p__Private_CanvasCompose(_self.ComposeData);
        }

        
    };

    _ImageTools.prototype.p__Private_CanvasCompose = function (composeData) {
        /// <summary>私有方法外部勿用-支持canvas渲染方式 合成</summary>

        var _self = this;
        //canvas变换
        _self.Context.save();
        _self.Context.translate(-_self.Width / 2, -_self.Height / 2);//中心坐标
        _self.Context.rotate(0);//旋转composeData.rotate
        //_self.Context.scale(composeData.scale, composeData.scale);//缩放
        _self.Context.drawImage(composeData.ImageData, composeData.x, composeData.y, composeData.ImageData.width,composeData.ImageData.height);//居中画图y
        _self.Context.restore();
        

    };

    _ImageTools.prototype.CanvasCompose = function (ComposeData) {
        /// <summary>合成</summary>
        var _self = this;
        _self.ComposeData.push($.extend({
            ImageData: null,
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1
        }, ComposeData));

        _self.p__Private_CanvasDarw();
    }


    _ImageTools.prototype.Init = function (selector,ImageData) {
        /// <summary>初始化</summary>
        /// <param name="selector" type="String">图像处理的最大容器 包含所有图像操作按钮 以及操作预览区域选择器</param>
        /// <param name="ImageData" type="Image">图片数据源 Image对象 或者 Canvas对象</param>

        var _self = this;
        if (!_self.p__Private_Support) { Cmn.alert("该浏览器版本不支持插件运行！请切换至更高版本或者chrome浏览！"); return false;}
     
        //融合选择器
        _self.p__Private_FusionSelector();

        if (_self.p__Private_Support == "CanvasDarw") {

            _self.ConvasEle = _self.ImageToolsContainer.find(_self.Selector.PreviewContainer);

            if (Cg.Object.IsType(_self.ConvasEle[0], "HTMLCanvasElement")) {
                _self.Context = _self.ConvasEle[0].getContext("2d");
                _self.ConvasEle = _self.ConvasEle[0];
            }
            else {
                var _canvas = document.createElement("canvas");
                _canvas.width = _self.ConvasEle.width() || _self.Width;
                _canvas.height = _self.ConvasEle.height() || _self.Height;
                _self.ConvasEle.append(_canvas);
                _self.ConvasEle = _canvas;
            }
            _self.Width = _self.ConvasEle.width;
            _self.Height = _self.ConvasEle.height;
        }
        _self.ImageData = ImageData;

        //画
        _self.p__Private_Darw();

        //绑定事件
        _self.p__Private_BindEvent();
    };

    

    _ImageTools.prototype.Zoom = function (zoom) {
        /// <summary>缩放</summary>
        /// <param name="zoom" type="float">缩放比例</param>

        var _self = this;
        var _scale = _self.Scale > 0 && _self.Scale > -zoom ? zoom : _self.Scale < 0 && _self.Scale < zoom ? -zoom : 0;
        if (!!_scale) {
            if (_self.Scale + _scale <= _self.MaxScale && _self.Scale + _scale >= _self.MinScale) { _self.Scale += _scale; }
        }

        _self.p__Private_CanvasDarw();

    };

    _ImageTools.prototype.Rotation = function (angle) {
        /// <summary>旋转</summary>
        /// <param name="angle" type="int">角度</param>
        var  _self = this;
        _self.Rotate = angle * Math.PI / 180;
        _self.p__Private_CanvasDarw();
    };


    _ImageTools.prototype.Reduce = function () {
        /// <summary>缩小</summary>
        this.Zoom(-this.ScaleStep);
    };

    _ImageTools.prototype.Enlarge = function () {
        /// <summary>放大</summary>
        this.Zoom(this.ScaleStep);
    };

    _ImageTools.prototype.LeftRotate = function () {
        /// <summary>左旋转90°</summary>
        this.Rotate -= this.RotateStep;
        this.p__Private_CanvasDarw();
    };

    _ImageTools.prototype.RightRotate = function () {
        /// <summary>右旋转90°</summary>
        this.Rotate += this.RotateStep;
        this.p__Private_CanvasDarw();
    };

    _ImageTools.prototype.GetImageSource = function () {
        /// <summary>获取处理之后的图片源 如果是支持canvas返回的是base64位图片对象 如果不支持canvas 返回的是一个Data{url:"图片path",scale:"",x:"",y:"",rotate:""}</summary>
    };

    Cg.UI.ImageTools = function (selector) {
        /// <summary>文件上传</summary>
        /// <param name="selector" type="String">文件上传框选择器</param>

        return new _ImageTools(selector);
    }

})(Cmn);




