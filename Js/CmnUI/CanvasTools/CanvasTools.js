/// <reference path="../../ThirdLib/touch.mini.js" />
/// <reference path="../../Cmn.js" />
/// <reference path="../CmnUI.js" />

(function (window, undefined) {

    var _DisPlayObject = function (width, height) {
        /// <summary>显示对象</summary>
        /// <param name="width" type="ing">宽度</param>
        /// <param name="height" type="ing">高度度</param>

        var _Self = this;

        _Self.Width = width || 300;
        _Self.Height = height || 150;
        _Self.Alpha = 1;
        _Self.Rotation = 0;
        _Self.RegX = 0;
        _Self.RegY = 0;
        _Self.ScaleX = 1;
        _Self.ScaleY = 1;
        _Self.X = 0;
        _Self.Y = 0;

        //创建缓冲Canvas
        _Self.Canvas = document.createElement("canvas");
        _Self.Ctx = _Self.Canvas.getContext("2d");

        //获取图片对象
        _Self.GetBase64Image = function (width,height) {
            /// <summary>获取图片对象</summary>

            if (arguments.length < 1) {
                return _Self.Canvas.toDataURL("image/png");
            }
            else {
                var _canvas = document.createElement("canvas");
                _canvas.width = width;
                _canvas.height = height;
                var _ctx = _canvas.getContext("2d");
                _ctx.drawImage(_Self.Canvas, 0, 0, _Self.Width, _Self.Height, 0, 0, width, height);
                return _canvas.toDataURL("image/png");
            }
           
        }

        //当前裁剪方案
        _Self.CurClipFn = function () { };

        //设置裁剪方案
        _Self.SetCurClipFn = function (fn) {
            /// <summary>设置裁剪方案</summary>
            /// <param name="fn" type="function">裁剪方案</param>
            _Self.CurClipFn = fn || function () { }
        }


    }

    var _Bitmap = function (image) {
        Cmn.Object.Inherit(this, _DisPlayObject, []);

        var _Self = this;

        _Self.Image = image;

        _Self.Width = _Self.Image.width;
        _Self.Height = _Self.Image.height;
 
        //获取图片对象
        _Self.GetBase64Image = function (width, height) {
            /// <summary>获取图片对象</summary>

            if (arguments.length < 1) {
                return _Self.Canvas.toDataURL("image/png");
            }
            else {
                var _canvas = document.createElement("canvas");
                _canvas.width = width;
                _canvas.height = height;
                var _ctx = _canvas.getContext("2d");
                _ctx.drawImage(_Self.Image, 0, 0, _Self.Width, _Self.Height, 0, 0, width, height);
                return _canvas.toDataURL("image/png");
            }

        }

        _Self.Draw = function () {
            /// <summary>画</summary>

            _Self.Ctx.clearRect(0, 0, _Self.Width, _Self.Height);

            _Self.Ctx.save();

            _Self.Ctx.translate(_Self.RegX + (_Self.X + _Self.Width / 2), _Self.RegY + (_Self.Y + _Self.Height / 2));//中心坐标

            _Self.Ctx.rotate(_Self.Rotation * Math.PI / 180);//旋转

            _Self.Ctx.scale(_Self.ScaleX, _Self.ScaleY);

            _Self.Ctx.translate(_Self.RegX - (_Self.X + _Self.Width / 2), _Self.RegY - (_Self.Y + _Self.Height / 2));//中心坐标

            _Self.Ctx.globalAlpha = _Self.Alpha;

            _Self.Ctx.drawImage(_Self.Image, _Self.X, _Self.Y, _Self.Image.width, _Self.Image.height);

            _Self.Ctx.restore();

        }

    }

    //扩展圆角绘制路径
    CanvasRenderingContext2D.prototype.RoundRect = function (x, y, w, h, r) {
        var _min_size = Math.min(w, h);
        if (r > _min_size / 2) r = _min_size / 2;
        // 开始绘制
        this.beginPath();
        this.moveTo(x + r, y);
        this.arcTo(x + w, y, x + w, y + h, r);
        this.arcTo(x + w, y + h, x, y + h, r);
        this.arcTo(x, y + h, x, y, r);
        this.arcTo(x, y, x + w, y, r);
        this.closePath();
        return this;
    }


    var _ImageProcess = function (selector, width, height, isAutoRefresh) {
        /// <summary>图片处理</summary>
        /// <param name="selector" type="String">canvas选择器</param>
        /// <param name="width" type="String">宽度</param>
        /// <param name="height" type="String">高度</param>
        /// <param name="isAutoRefresh" type="bool">是否自动刷新</param>

        Cmn.Object.Inherit(this, _DisPlayObject, [width, height]);


        var _Canvas = Cmn.Object.IsType($(selector)[0], "HTMLCanvasElement") ? $(selector)[0] : $(selector).append(document.createElement("canvas")).find("canvas")[0];
        _Canvas.width = width;
        _Canvas.height = height;
        //指向本身
        var _Self = this

        //canvas对象
        _Self.Canvas = _Canvas;
        //2d对象
        _Self.Ctx = _Self.Canvas.getContext("2d");
        //当前操作的儿子对象索引
        _Self.CurActionChildIndex = null;
        //操作配置
        _Self.ActionConfig = {
            //最小允许缩放
            MinScale: 0,
            //最大允许缩放
            MaxScale: 10,
            //每次缩放比例
            ScaleStep: 0.05
        };
        //自动刷新
        _Self.AutoRefresh = !!isAutoRefresh;
        //图片索引管理器
        var _IndexManage = [];
        //改变的属性
        var _ChangePrototype = { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0 }
        //----------------事件
        //选择文件之前
        _Self.BeforSelectFile = new Cmn.Event(this);
        //选择文件
        _Self.OnSelectFile = new Cmn.Event(this);
        //错误事件捕捉
        _Self.OnError = new Cmn.Event(this);

        //画儿子
        var _DrawChildren = function () {
            /// <summary>画子对象</summary>

            for (var _i = 0; _i < _IndexManage.length ; _i++) {
                var _child = _Self[_IndexManage[_i]];
                if (!_child) { continue; }

                _child.Canvas.width = _child.Width;
                _child.Canvas.height = _child.Height;

                //启用裁剪
                Cmn.IsType(_child.CurClipFn, "function") && _child.CurClipFn.call(_child);

                //渲染子元素
                _child.Draw();

                //同步到舞台
                _Self.Ctx.drawImage(_child.Canvas, 0, 0, _child.Canvas.width, _child.Canvas.height);

                //_Self.Ctx.restore();
            }
        }

        //创建图片对象
        var _CreateBitMap = function (image, x, y) {
            /// <summary>创建图片对象</summary>
            /// <param name="image" type="String">图片对象</param>
            /// <param name="x" type="String">x</param>
            /// <param name="y" type="String">y</param>
            var _bitmap = new _Bitmap(image);
            _bitmap.X = x || 0;
            _bitmap.Y = y || 0;
            //同步宽高
            _bitmap.Canvas.width = _Self.Width;
            _bitmap.Canvas.height = _Self.Height;
            return _bitmap;
        }

        //渲染
        var _Draw = function () {
            /// <summary>画</summary>

            _Self.Canvas.width = _Self.Width;
            _Self.Canvas.height = _Self.Height;
            _Self.Ctx.clearRect(0, 0, _Self.Width, _Self.Height);

            _Self.Ctx.save();

            _Self.Ctx.translate(_Self.RegX + (_Self.X + _Self.Width / 2), _Self.RegY + (_Self.Y + _Self.Height / 2));//中心坐标

            _Self.Ctx.rotate(_Self.Rotation * Math.PI / 180);//旋转

            _Self.Ctx.scale(_Self.ScaleX, _Self.ScaleY);

            _Self.Ctx.translate(_Self.RegX - (_Self.X + _Self.Width / 2), _Self.RegY - (_Self.Y + _Self.Height / 2));//中心坐标

            //启用裁剪
            Cmn.IsType(_Self.CurClipFn, "function") && _Self.CurClipFn.call(_Self);

            //画所有的儿子
            _DrawChildren();

            _Self.Ctx.restore();
        }
         
        //刷新舞台
        _Self.Refresh = function () {
            /// <summary>刷新舞台</summary>
            if (!_Self.AutoRefresh) { _Draw(); }
        }

        //设置裁剪方案
        _Self.SetCurClipFn = function (fn) {
            /// <summary>设置裁剪方案</summary>
            /// <param name="fn" type="function">裁剪方案</param>
            _Self.CurClipFn = fn || function () { }
            _Self.Refresh();
        }
        //添加儿子
        _Self.AddChild = function (image, x, y) {
            /// <summary>添加儿子</summary>
            /// <param name="image" type="String">图片对象</param>
            /// <param name="x" type="String">x</param>
            /// <param name="y" type="String">y</param>
            var _index = _IndexManage[_IndexManage.length - 1] ? _IndexManage[_IndexManage.length - 1] + 1 : 0;
            _Self[_index] = _CreateBitMap(image, x, y);
            _IndexManage.push(_index);
            //刷新页面
            _Self.Refresh();
        }

        //将儿子添加到指定索引
        _Self.AddChildAt = function (index, image, x, y) {
            /// <summary>将儿子添加到指定索引</summary>
            /// <param name="index" type="Int">子对象的索引</param>
            /// <param name="image" type="String">图片对象</param>
            /// <param name="x" type="String">x</param>
            /// <param name="y" type="String">y</param>

            //重构子对象序列排序
            var _childs = {},
                _beforIndex = index;

            for (var _i = 0; _i < _IndexManage.length; _i++) {
                if (_IndexManage[_i] >= index) {
                    _childs[_i] = _Self[_IndexManage[_i]];
                }
            };

            for (_i in _childs) {
                if (_beforIndex == _IndexManage[_i]) { _IndexManage[_i] = _IndexManage[_i] + 1; }
                _beforIndex = _IndexManage[_i];
                _Self[_IndexManage[_i]] = _childs[_i];
            };
            _Self[index] = _CreateBitMap(image, x, y);
            _IndexManage.push(index);
            _IndexManage.sort(function (a, b) { return a > b ? 1 : -1 });
            //刷新页面
            _Self.Refresh();
        }

        //根据索引替换子对象
        _Self.ReplaceChildByIndex = function (index, image, x, y) {
            /// <summary>根据索引替换子对象</summary>
            /// <param name="index" type="Int">子对象的索引</param>
            /// <param name="image" type="String">图片对象</param>
            /// <param name="x" type="String">x</param>
            /// <param name="y" type="String">y</param>
            if (!_Self[index]) { _IndexManage.push(index); _IndexManage.sort(function (a, b) { return a > b ? 1 : -1 }); }
            _Self[index] = _CreateBitMap(image, x, y);
            //刷新页面
            _Self.Refresh();
        }

        //绑定选择图片
        _Self.BindSelectFileBtn = function (seletor, index, isAppend) {
            /// <summary>绑定选择文件按钮</summary>
            /// <param name="seletor" type="String">按钮选择器</param>
            /// <param name="index" type="Int">上传的图片添加到子元素队列的索引</param>
            /// <param name="clipFn" type="function">裁剪方案</param>
            /// <param name="isAppend" type="bool">是否追加</param>

            //初始化生成文件选择框
            var _input = _Self.CreateInputSelect(seletor);

            $("body").undelegate("#" + _input.attr("id"), "change").
          delegate("#" + _input.attr("id"), "change", function (e) {

              var _files = e.target.files || (!!e.dataTransfer ? e.dataTransfer.files : e.target),
                  _file = _files[0] || _files;

              if (_file && !!window["FileReader"] && _file.type.indexOf("image") >= 0) {
                  var _reader = new FileReader();
                  _reader.onload = function (e) {

                      var _url = e.target.result;

                      //有些安卓上选择的图片头部缺信息，需要增加，检测是否缺头部信息，如果缺就加上
                      var _re = /^data:base64,/;

                      if (_re.test(_url)) {
                          var _mime = { 'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'bmp': 'image/bmp' };
                          _url = _url.replace(_re, 'data:' + _mime[_self.GetFileSuffix(_file.name)] + ';base64,');
                      }

                      //选择文件之前触发 返回false就不作处理
                      if (_Self.BeforSelectFile.Trigger([_url]) == false) { return false;}

                      var _img = new Image();

                      _img.onload = function () {

                          //图片处理
                          _Self.CompressPictures(_img, function (image) {

                              if (isAppend === undefined) { isAppend = false; }

                              //添加儿子对象
                              if (index == undefined) {
                                  _Self.AddChild(image);
                                  _Self.CurActionChildIndex = _IndexManage[_IndexManage.length - 1];
                              }
                              else {
                                  if (isAppend) { _Self.AddChildAt(index, image); }
                                  else { _Self.ReplaceChildByIndex(index, image); }
                                  _Self.CurActionChildIndex = index;
                              }

                              var _curBitmap = _Self[_Self.CurActionChildIndex];

                              _curBitmap.X = (_Self.Width - _curBitmap.Width) / 2;
                              _curBitmap.Y = (_Self.Height - _curBitmap.Height) / 2;
                              _Self.Refresh();

                              //触发选择文件事件
                              _Self.OnSelectFile.Trigger([_curBitmap]);
                              _ChangePrototype = { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0 };
                          });

                      };

                      _img.src = _url;
                  };

                  _reader.readAsDataURL(_file);
              }
              else {
                  _Self.OnError.Trigger(["图片没上传！"]);
              }

          });

        }

        
        //清空舞台
        _Self.EmptyStage = function () {
            /// <summary>清空舞台</summary>
            for (var _i = 0; _i < _IndexManage.length ; _i++) { _Self[_IndexManage[_i]] = undefined; }
            _Self.Ctx.clearRect(0, 0, _Self.Width, _Self.Height);
            _Self.Canvas.width = _Self.Width;
            _Self.Canvas.Height = _Self.height;
            _IndexManage = [];

        }

        //鼠标滚轴缩放图片
        $(_Self.Canvas).off("DOMMouseScroll mousewheel").on("DOMMouseScroll mousewheel", function (event) {
            event.preventDefault();
            event = event.originalEvent;

            if (_Self.CurActionChildIndex != null) {
                //当前操作的显示对象
                var _curDisp = _Self[_Self.CurActionChildIndex];
                //当前计算的缩放比例
                var _scale = (event.wheelDelta ? event.wheelDelta / (-120) : (event.detail || 0) / 3) * Math.abs(_Self.ActionConfig.ScaleStep) * -1;

                if ((_ChangePrototype.scaleX - _Self.ActionConfig.ScaleStep > _Self.ActionConfig.MinScale
                        && _ChangePrototype.scaleY - _Self.ActionConfig.ScaleStep > _Self.ActionConfig.MinScale && _scale < 0)
                    || (_ChangePrototype.scaleX + _Self.ActionConfig.ScaleStep < _Self.ActionConfig.MaxScale
                         && _ChangePrototype.scaleY + _Self.ActionConfig.ScaleStep < _Self.ActionConfig.MaxScale && _scale > 0)) {

                    _ChangePrototype.scaleX += _scale;
                    _ChangePrototype.scaleY += _scale;

                }
                else { return false; }

                _curDisp.ScaleX = _ChangePrototype.scaleX;
                _curDisp.ScaleY = _ChangePrototype.scaleY;
                //刷新页面
                _Self.Refresh();
            }

        });

        //touch js 不存在就不绑定
        if (!!window.touch) {
            touch.on(_Self.Canvas, 'touchstart', function (ev) { ev.preventDefault(); });

            touch.on(_Self.Canvas, "dragstart drag pinchstart pinch rotate", function (e) {
                //操作对象存在的话
                if (_Self.CurActionChildIndex != null) {
                    var _curDisp = _Self[_Self.CurActionChildIndex];
                    //拖动
                    if (e.type == "dragstart") {
                        _ChangePrototype.x = _curDisp.X;
                        _ChangePrototype.y = _curDisp.Y;
                        //刷新页面
                        _Self.Refresh();
                    }
                    else if (e.type == "drag") {
                        _curDisp.X = _ChangePrototype.x + e.x;
                        _curDisp.Y = _ChangePrototype.y + e.y;
                        //刷新页面
                        _Self.Refresh();
                    }
                        //缩放开始
                    else if (e.type == "pinchstart") {
                        _ChangePrototype.scaleX = _curDisp.ScaleX;
                        _ChangePrototype.scaleY = _curDisp.ScaleY;
                        _ChangePrototype.rotation = _curDisp.Rotation;
                        //刷新页面
                        _Self.Refresh();
                    }
                        //旋转
                    else if (e.type == "rotate") {
                        _curDisp.Rotation = _ChangePrototype.rotation + e.rotation;
                        //刷新页面
                        _Self.Refresh();
                    }
                        //缩放
                    else if (e.type == "pinch") {

                        var _scale = (e.scale - 1);

                        if ((_ChangePrototype.scaleX - _Self.ActionConfig.ScaleStep > _Self.ActionConfig.MinScale
                           && _ChangePrototype.scaleY - _Self.ActionConfig.ScaleStep > _Self.ActionConfig.MinScale && _scale < 0)
                       || (_ChangePrototype.scaleX + _Self.ActionConfig.ScaleStep < _Self.ActionConfig.MaxScale
                            && _ChangePrototype.scaleY + _Self.ActionConfig.ScaleStep < _Self.ActionConfig.MaxScale && _scale > 0)) {
                            _curDisp.ScaleX = _ChangePrototype.scaleX + _scale;
                            _curDisp.ScaleY = _ChangePrototype.scaleY + _scale;

                            //刷新页面
                            _Self.Refresh();
                        }
                        else { return false; }


                    }


                }
            });
        }

        if (!!_Self.AutoRefresh) {
            Cmn.Animate.Timeline.Add(function () { if (_IndexManage.length > 0 && _Self.AutoRefresh) { _Draw(); } });
        }

    }

    //创建选择文件按钮
    _ImageProcess.prototype.CreateInputSelect = function (seletor) {
        var _input = $('<input type="file">').css({ "position": "absolute", "top": "-1000px", "width": "1px", "height": "1px", "opacity": "0", "filter": "alpha(opacity=0)", "left": "-1000px" });

        //将文件选择框添加到当前容器

        if ($("body").find(".cg-AllUploadFileInputContainer").length <= 0) {
            $("body").append($("<div class='cg-AllUploadFileInputContainer'>")
           .css({ "overflow": "hidden", "width": "1px", "top": "-1000px", "left": "-1000px", "height": "1px", "position": "absolute", "z-index": "-10" }));
        }

        $(".cg-AllUploadFileInputContainer").append(_input);

        _input.attr("id", "Cg_InputFile" + "-" + new Date().getTime() + "-" + Math.floor(Math.random() * 1000));
        _input.attr("name", "Cg_InputFileName" + "-" + new Date().getTime() + "-" + Math.floor(Math.random() * 1000));

        if ($(seletor).find("label").length <= 0) { $(seletor).wrap('<label for="' + _input.attr("id") + '"></label>'); }

        return _input;
    };
    //压缩修复图片
    _ImageProcess.prototype.CompressPictures = function (image, complete) {
        /// <summary>压缩修复图片</summary>
        /// <param name="image" type="Image">图片对象</param>
        /// <param name="complete" type="function">处理完毕的回调</param>

        var _self = this;

        EXIF.getData(image, function () {

            var _iw = image.width,
                _ih = image.height;
            var _sw = _self.Canvas.width / _iw;
            var _sh = _self.Canvas.height / _ih;
            var _ss = Math.max(_sw, _sh); //计算出缩放尺寸内撑满屏幕的对应比例
            var _yw = image.width * _ss;
            var _yh = image.height * _ss;
            var _img2 = new Image();
            //ios下大过2m的图片canvas渲染会出问题，使用MegaPixImage 进行压缩保证可以正常显示
            var _mpImg = new MegaPixImage(image);

            if (navigator.userAgent.match(/iphone/i)) {
                //ios下需要保证相片选择正确
                _mpImg.render(_img2, { width: _yw, height: _yh, quality: 1, orientation: EXIF.getTag(this, "Orientation") });
            } else {
                _mpImg.render(_img2, { width: _yw, height: _yh, quality: 1 });
            }

            //获取到压缩后的新图像
            _img2.onload = function () { complete && complete.call(this, _img2); };

        });

    };
    //圆角裁剪
    _ImageProcess.prototype.RoundRect = function (x, y, w, h, r) {
        /// <summary>圆角</summary>
        /// <param name="x" type="String">x</param>
        /// <param name="y" type="String">y</param>
        /// <param name="w" type="String">宽度</param>
        /// <param name="h" type="String">高度</param>
        /// <param name="r" type="String">半径</param>

        return function () {
            this.Ctx.RoundRect(x, y, w, h, r);
            this.Ctx.clip();
        }
    };
    //不规则裁剪图形
    _ImageProcess.prototype.IrregularShape = function (x, y, points) {
        /// <summary>不规则裁剪图形</summary>
        /// <param name="x" type="String">x</param>
        /// <param name="y" type="String">y</param>
        /// <param name="points" type="Array">点的集合</param>

        return function () {

            if (Cmn.IsType(points, "array")) {
                //开始画图
                this.Ctx.beginPath();

                //如果形状没有闭合 那么默认补间闭合
                if (points[0].x != points[points.length - 1].x
                    || points[0].y != points[points.length - 1].y) {
                    points.push({ x: points[0].x, y: points[0].y });
                }

                this.Ctx.moveTo(x, y);

                for (var _i = 0; _i < points.length; _i++) { this.Ctx.lineTo(points[_i].x + x, points[_i].y + y); }
                //结束
                this.Ctx.closePath();
                //开始裁剪
                this.Ctx.clip();
            }
        }
    };


    //检测域是否存在
    if (!Cmn.UI) { Cmn.UI = {}; }
    if (!Cmn.UI.CanvasTools) { Cmn.UI.CanvasTools = {}; }
    //开放使用
    Cmn.UI.CanvasTools.ImageProcess = function (selector, width, height, isAutoRefresh) {
        /// <summary>图片处理</summary>
        /// <param name="selector" type="String">canvas选择器</param>
        /// <param name="width" type="String">宽度</param>
        /// <param name="height" type="String">高度</param>
        /// <param name="isAutoRefresh" type="bool">是否自动刷新</param>
        return new _ImageProcess(selector, width, height, isAutoRefresh);
    }

})(window);




