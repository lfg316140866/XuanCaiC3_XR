/// <reference path="../Cmn.js" />
//将视频画到canvas上播放
(function () {

    function _PlayVideoByCanvas(canvasid, url, width, height) {
        /// <summary>将视频画到canvas上播放</summary>
        /// <param name="canvasid" type="String">canvas id</param>
        /// <param name="url" type="String">视频地址</param>
        /// <param name="width" type="int">view区域的宽度</param>
        /// <param name="height" type="int">view区域的高度</param>

        //创建视频容器放到body里面
        $("body").append($("<div class='jscPlayVideoContaier'>").css({
            "width": "1px",
            "height": "1px",
            "position": "absolute",
            "top": "-10px",
            "overflow": "hidden"
        }));

        var _Self = this,
            //视频宽度
            _VideoWidth = 640,//$(_Self.VideoSource).width(),
            //高度
            _VideoHeight = 360;//$(_Self.VideoSource).height();
        //创建Video标签放进容器 并且初始化加载
        _Self.VideoSource = $('<video id="jscVideoSource" src="' + url + '"preload="metadata"></video>')[0];
        $(".jscPlayVideoContaier").append(_Self.VideoSource);

        //获取页面上面的canvas
        _Self.Canvas = document.getElementById(canvasid);
        _Self.Ctx = _Self.Canvas.getContext("2d");
        //设置显示的size
        _Self.Widht = width;
        _Self.Height = height;
        _Self.Canvas.width = _Self.Widht;
        _Self.Canvas.height = _Self.Height;

        //--------
        //画字的配置信息
        _Self.FontCfg = [];
        //--------
        var _DrawVideo = function () {
            _Self.Ctx.clearRect(0, 0, width, height);
            _Self.Canvas.width = _Self.Widht;
            _Self.Canvas.height = _Self.Height;

            _Self.Ctx.globalAlpha = 1;
            _Self.Ctx.drawImage(_Self.VideoSource, 0, 0, _VideoWidth, _VideoHeight, 0, 0, _Self.Widht, _Self.Height);

            //--------------画字
            for (var _i = 0; _i < _Self.FontCfg.length; _i++) {
                var _font = _Self.FontCfg[_i];
                if (_Self.VideoSource.currentTime >= _font.time) {
                    if (_font.alpha < 1 - 0.05) { _font.alpha += 0.05; }
                    _Self.Ctx.globalAlpha = _font.alpha;
                    // 设置字体
                    _Self.Ctx.font = _font.font;
                    // 设置对齐方式
                    _Self.Ctx.textAlign = _font.textAlign;
                    // 设置填充颜色
                    _Self.Ctx.fillStyle = _font.fillStyle;
                    // 设置字体内容，以及在画布上的位置
                    _Self.Ctx.fillText(_font.text, _font.x * (_Self.Widht / _VideoWidth), _font.y * (_Self.Height / _VideoHeight));
                    // 绘制空心字
                    //ctx.strokeText("Hello!", 10, 100);
                }
            }
            //--------------
        }

        //将画视频的处理添加到时间轴
        Cg.Animate.Timeline.Add(_DrawVideo);


        $(_Self.VideoSource).on("error", function () {
            Cg.Animate.Timeline.Stop(_DrawVideo);
            Cg.DebugLog("视频加载错误！请检查视频路径是否正确！");
        });

        $(_Self.VideoSource).on("playing", function () {
            //视频宽度
            _VideoWidth = $(_Self.VideoSource).width();
            //高度
            _VideoHeight = $(_Self.VideoSource).height();
            //开启时间轴
            Cg.Animate.Timeline.Start(_DrawVideo);
        });
        $(_Self.VideoSource).on("pause", function () {
            //关闭时间轴
            Cg.Animate.Timeline.Stop(_DrawVideo);
        });
        $(_Self.VideoSource).on("ended", function () {
            //关闭时间轴
            Cg.Animate.Timeline.Stop(_DrawVideo);
        });

        _Self.Play = function () { _Self.VideoSource.play(); return this; }
        _Self.Pause = function () { _Self.VideoSource.pause(); return this; }

        _Self.SetSize = function (width, height) {
            /// <summary>改变view尺寸</summary>
            /// <param name="width" type="int">宽度</param>
            /// <param name="height" type="int">高度</param>

            _Self.Widht = width;
            _Self.Height = height;
            _Self.Canvas.width = _Self.Widht;
            _Self.Canvas.height = _Self.Height;
            _DrawVideo();

            return this;
        }

        _Self.Destroy = function () {
            /// <summary>销毁掉自己释放资源</summary>

            //暂停视频
            _Self.Pause();
            //将画视频处理移除时间轴
            Cg.Animate.Timeline.Remove(_DrawVideo);
            //销毁视频
            $(".jscPlayVideoContaier").remove();
            //清空画布
            _Self.Canvas.width = _Self.Widht;
            _Self.Canvas.height = _Self.Height;
        }

        _Self.SetFont = function (time, text, x, y, size, color, font) {
            /// <summary>设置画的字</summary>
            /// <param name="frame" type="int">视频播放到那一秒开始执行 可支持小数1.55 代表一秒550毫秒</param>
            /// <param name="text" type="int">话的文字</param>
            /// <param name="x" type="int">相对视频的x</param>
            /// <param name="y" type="int">相对视频的y</param>
            /// <param name="size" type="int">文字大小</param>
            /// <param name="color" type="int">文字颜色默认黑色</param>
            // <param name="font" type="int">字体默认微软雅黑</param>
            _Self.FontCfg.push({ time: time || 0, alpha: 0, text: text || "", font: "Bold " + (size || "12") + "px " + (font || "微软雅黑"), textAlign: "left", fillStyle: (color || "#000"), x: x || 0, y: y || 0 })

            return this;
        }

    }
    if (!Cg.Plugin) { Cg.Plugin = {};}
    Cg.Extend(Cg.Plugin, {

        PlayVideoByCanvas: function (canvasid, url, width, height) {
            /// <summary>将视频画到canvas上播放</summary>
            /// <param name="canvasid" type="String">canvas id</param>
            /// <param name="url" type="String">视频地址</param>
            /// <param name="width" type="int">view区域的宽度</param>
            /// <param name="height" type="int">view区域的高度</param>

            return new _PlayVideoByCanvas(canvasid, url, width, height);
        }
    })

})();

