/// <reference path="../../Cmn.js" />
/// <reference path="../CmnMisUI.js" />
/// <reference path="../FileUpload/FileUpload.js" />

if (typeof (CmnMis) == "undefined") { CmnMis = {}; }
if (typeof (CmnMis.UI) == "undefined") { CmnMis.UI = {}; }
(function (Cg) {


    var _ImageUpload = function (selector,uploadItf) {
        /// <summary>图片上传</summary>
        /// <param name="selector" type="String">文件上传框选择器</param>

        //继承插件基类
        Cg.Object.Inherit(this, CmnMis.UI.FileUpload, [selector, uploadItf,false]);

        //指向对象本身
        var _self = this;
        _self.Selector = Cmn.Extend({
            Canvas: "cmn-Preview",
            Reduce: "cmn-Reduce",
            Enlarge: "cmn-Enlarge",
            LeftRotate: "cmn-LeftRotate",
            RightRotate: "cmn-RightRotate"
        });



    }


    _ImageUpload.prototype.Reduce = function () {
        /// <summary>缩小</summary>
    };

    _ImageUpload.prototype.Enlarge = function () {
        /// <summary>放大</summary>
    };
    _ImageUpload.prototype.LeftRotate = function () {
        /// <summary>左旋转</summary>
    };

    _ImageUpload.prototype.RightRotate = function () {
        /// <summary>右旋转</summary>
    };


    CmnMis.UI.ImageUpload = function (selector) {
        /// <summary>文件上传</summary>
        /// <param name="selector" type="String">文件上传框选择器</param>

        return new _FileUpload(selector);
    }

})(Cmn);




