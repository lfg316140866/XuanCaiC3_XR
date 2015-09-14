/// <reference path="../../Cmn.js" />
//检查Cmn有没有定义，如果没有定义就定义下
if (typeof (Cmn) == "undefined") { Cmn = {}; }

Cmn.Img = new function () {
    this.GetFileUrl = function (fileInputID, callBackFunc) {
        /// <summary>从FileInput获取图片文件Url(移动版拿到的是64位编码的图片)</summary>
        /// <param name="fileInputID" type="String">FileInput的ID</param>
        /// <param name="callBackFunc" type="function">获取到url的回调函数，参数会传回获取到的url</param>

        if (navigator.userAgent.indexOf("MSIE") >= 1) { // IE
            var _url = document.getElementById(fileInputID).value;
            callBackFunc(_url);
        }
        else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox
            var _url = window.URL.createObjectURL(document.getElementById(fileInputID).files.item(0));
            callBackFunc(_url);
        }
        else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome
            var _url = window.URL.createObjectURL(document.getElementById(fileInputID).files.item(0));
            callBackFunc(_url);

            Cmn.DebugLog("GetFileUrl是Chrome");
        }
        else if (Cmn.Func.IsIOS()) {
            Cmn.DebugLog("进入ios");

            var _file = document.getElementById(fileInputID).files[0];
            // MegaPixImage constructor accepts File/Blob object.
            var _mpImg = new MegaPixImage(_file);

            // Render resized image into image element using quality option.
            // Quality option is valid when rendering into image element.
            var _resImg = new Image();

            _resImg.onload = function () {
                //CanvasCut.init("ImageContainer", resImg.src);
                callBackFunc(_resImg.src);
            }

            _mpImg.render(_resImg, { maxWidth: 800, maxHeight: 800, quality: 0.5 });
        }
        else {
            Cmn.DebugLog("进入默认");

            var _reader = new FileReader();

            _reader.onload = function (e) {
                var _url = e.target.result;

                Cmn.DebugLog("文件读取完成");

                //有些安卓上选择的图片头部缺信息，需要增加，检测是否缺头部信息，如果缺就加上
                var _re = /^data:base64,/;

                Cmn.DebugLog("检测是否缺头部信息");

                if (_re.test(_url)) {
                    Cmn.DebugLog("缺头部信息");

                    var _mime = { 'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'bmp': 'image/bmp' };
                    _url = _url.replace(_re, 'data:' +
                        _mime[document.getElementById(fileInputID).files[0].name.match(/\.([^\.]+)$/i)[1]] + ';base64,');
                }

                Cmn.DebugLog("image cut start :");
                //CanvasCut.init("ImageContainer", _url);
                callBackFunc(_url);
            };

            _reader.readAsDataURL(document.getElementById(fileInputID).files[0]);
        }
    }

    this.MergeImg = function (img1, img2, offsetX, offsetY,callBackFunc) {
        /// <summary>合并图片</summary>
        /// <param name="img1" type="Image">底图</param>
        /// <param name="img2" type="Image">合并到底图上的图片</param>
        /// <param name="offsetX" type="int">画到底图上的偏移X</param>
        /// <param name="offsetY" type="int">画到底图上的偏移Y</param>
        /// <param name="callBackFunc" type="function">回调函数，如果成功回传参数为base64图片，如果失败参数为null</param>

        Cmn.DebugLog("进入合并图片");

        var _canvas = document.createElement("canvas");
        var _img1 = img1;
        var _img2 = img2;
        var _waitCount = 0;

        var _mergeImg = function () {
            _canvas.height = _img1.height;
            _canvas.width = _img1.width;

            var _canVasContext = _canvas.getContext('2d');

            _canVasContext.drawImage(_img1, 0, 0, _img1.width, _img1.height, 0, 0, _img1.width, _img1.height);
            _canVasContext.drawImage(_img2, 0, 0, _img2.width, _img2.height, offsetX, offsetY, _img2.width, _img2.height);

            var _newImgDataUrl = _canvas.toDataURL("image/png");

            _canvas = null;

            callBackFunc(_newImgDataUrl);
        }

        if (Cmn.Func.IsString(_img1)) {
            _waitCount++;

            _img1 = new Image();

            _img1.onload = function () {
                _waitCount--;

                if (_waitCount == 0) { _mergeImg(); }
            }

            _img1.src = img1;
        }

        if (Cmn.Func.IsString(_img2)) {
            _waitCount++;

            _img2 = new Image();

            _img2.onload = function () {
                _waitCount--;

                if (_waitCount == 0) { _mergeImg(); }
            }

            _img2.src = img2;
        }

        if (_waitCount == 0) { _mergeImg(); }
    }

    this.RotateImg = function (img, angle, callBackFunc) {
        /// <summary>旋转图片</summary>
        /// <param name="img" type="String">图片(可以是Image对象，也可以是64位编码的图片)</param>
        /// <param name="angle" type="int">顺时针旋转的角度</param>
        /// <param name="callBackFunc" type="function">回调函数,参数为旋转后的64位编码图片</param>

        var _canvas = document.createElement("canvas");
        var _img = img;

        var _rotateImg = function () {
            _canvas.height = _img.height;
            _canvas.width = _img.width;

            var _canVasContext = _canvas.getContext('2d');

            _canVasContext.rotate(angle * Math.PI / 180);

            _canVasContext.drawImage(_img, 0, 0, _img.width, _img.height, 0, 0, _img.width, _img.height);

            var _newImgDataUrl = _canvas.toDataURL("image/png");

            _canvas = null;

            callBackFunc(_newImgDataUrl);
        }

        if (Cmn.Func.IsString(img)) {
            _img = new Image();

            _img.onload = function () { _rotateImg(); }

            _img.src = img;
        }
        else { _rotateImg(); }
    }
};