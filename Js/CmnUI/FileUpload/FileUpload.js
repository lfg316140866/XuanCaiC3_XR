/// <reference path="../../Cmn.js" />
/// <reference path="../CmnUI.js" />
 
//****************
//**
//**目前未支持多文件上传
//**低版本浏览器上传方法重写未完成
//**
//**
//****************


(function (Cg) {
    //健壮性检测
    if (!Cg) { Cg.alert("为引用Cmn"); }
    if (!Cg.UI) { Cg.UI = {}; }
   var  _FileUpload = function (selector,uploadItf,isSelectedUpload) {
        /// <summary>文件上传</summary> 
       /// <param name="selector" type="String">文件上传容器选择器</param>
       /// <param name="uploadItf" type="String">上传接口</param>
       /// <param name="isSelectedUpload" type="String">是否在选择文件之后立即上传</param>
       /// <field name="LimitSize" type="int">限制文件最大文件大小 默认3m</field>
       /// <field name="LimitMediaLength" type="int">限制的流媒体长度默认长度60</field>
       /// <field name="UploadItf" type="String">上传接口</field>
       /// <field name="DelFileItf" type="Array">删除文件接口</field>
       /// <field name="LimitFileSuffix" type="Array">允许上传的文件类型 ['txt', 'rar', 'zip', 'jpg', 'jpeg', 'gif', 'png', 'swf', 'wmv', 'avi', 'wma', 'mp3', 'mid']</field>
       /// <field name="IsSelectedUpload" type="int">是否在选择文件之后立即上传</field>
       /// <field name="Data" type="Json">上传的时候传递给接口的数据</field>
       /// <field name="InputFile" type="DOM">当前的文件选择框对象</field>
       /// <field name="OnFilter" type="Function">过滤文件时触发</field>
       /// <field name="SelectComplete" type="Function">文件选择之后触发</field>
       /// <field name="OnProgress" type="Function">上传时 IE678 no</field>
       /// <field name="OnComplete" type="Function">上传完毕的回调</field>
       /// <field name="OnCompleteAll" type="Function">全部上传完毕的回调 改回调多数用于多文件上传</field>
       /// <field name="OnClickDelBtn" type="Function">点击删除按钮的时候</field>
       /// <field name="OnClickAddBtn" type="Function">点击添加按钮的时候</field>
       /// <field name="OnClickUploadBtn" type="Function">点击上传按钮的时候</field>
       /// <field name="OnClickCancelBtn" type="Function">点击取消按钮的时候</field>
       /// <field name="Selector" type="Json">占位选择器JSON</field>
      

       if (!$(selector).length) { Cg.alert("文件上传容器选择器，是必要的！"); return;}
            //指向对象本身
       var  _self = this,
           //资源列表
            _resources = [];

       //是否支持html5
       _self.IsH5 = typeof (Worker) !== "undefined";

      if (!_self.IsH5) { _resources.push("/CmnUI/FileUpload/resources/ajaxfileupload.js"); } 
       
        //继承插件基类
       Cg.Object.Inherit(this, Cg.UI.BasPlugin, [_resources || []]);

       _self.LimitSize = 3 * 1048576;                                    //限制文件最大文件大小 默认3m
       _self.LimitMediaLength = 20;                                      //限制媒体文件的长度
       _self.UploadItf = uploadItf;                                           //上传接口
       _self.DelFileItf = ""                                                //删除文件接口
       _self.SelectFiles = [];                                            //选择的上传文件列表
       _self.LimitFileSuffix = ['txt', 'rar', 'zip', 'jpg', 'jpeg', 'gif', 'png', 'swf', 'wmv', 'avi', 'wma', 'mp3', 'mid', 'mp4'];//允许上传的文件类型
       _self.IsSelectedUpload =!!isSelectedUpload;                         //是否在选择文件之后立即上传 默认false
       _self.Data = null;                                                  //附加传输的数据
       _self.InputFile = null;                                             //文件选择框dom对象
       _self.OnFilter = function () { };                                   //过滤文件时触发
       _self.OnSetFileInfo = function () { };                              //设置信息时触发
       _self.SelectComplete = function () { };                             //文件选择之后触发
       _self.OnProgress = function () { };                                 //上传时 IE678 no
       _self.OnComplete = function () { };                                 //上传完毕的回调
       _self.OnCompleteAll = function () { };                              //全部上传完毕的回调
       _self.OnClickDelBtn = function () { };                              //点击删除按钮的时候
       _self.OnClickUploadBtn = function () { };                           //点击上传按钮的时候
       _self.OnClickCancelBtn = function () { };                           //点击取消按钮的时候
       _self.OnClickAddBtn = function () { };                              //点击添加按钮的时候
       //input选择器
       _self.Selector = {
           //上传容器选择器
           Container: selector,
           //选择文件按钮选择器
           SelectFile: ".cmn-SelectFile",
           //上传按钮选择器
           UploadBtn: ".cmn-UploadBtn",
           //添加文件按钮选择器
           AddUpload:".cmn-AddUploadFile",
           //取消上传按钮选择器
           CancelUpload: ".cmn-CancelUpload",
           //删除文件的按钮选择器
           DelFileItem: ".cmn-DelFileItemBtn",
           //每个文件信息的项选择器
           FileInfoItem: ".cmn-FileInfoItem",
           //上传的文件预览容器选择器
           FilePreview: ".cmn-FilePreview",
           //文件名称容器选择器
           FileName: ".cmn-FileName",
           //文件大小容器选择器
           FileSize: ".cmn-FileSize",
           //进度条容器选择器
           Progress: ".cmn-Progress",
           //文件上传反馈信息容器选择器
           UploadMsg: ".cmn-UploadMsg"
       }
 
       //初始化生成文件选择框
       _self.InputFile = $('<input type="file">').css({
            "position": "absolute", "top": "-1000px","width":"1px","height":"1px",
            "opacity": "0", "filter": "alpha(opacity=0)","left":"-1000px"
        });

       //将文件选择框添加到当前容器
       
        if ($("body").find(".cg-AllUploadFileInputContainer").length <= 0) {
            $("body").append($("<div class='cg-AllUploadFileInputContainer'>")
           .css({ "overflow": "hidden", "width": "1px", "top": "-1000px", "left": "-1000px", "height": "1px", "position": "absolute", "z-index": "-10" }));
        }
  
        $(".cg-AllUploadFileInputContainer").append(_self.InputFile);
        
       
        _self.InputFile.attr("id", "Cg_InputFile" + "-" + new Date().getTime() + "-" + Cmn.GetUUID());
        _self.InputFile.attr("name", "Cg_InputFileName" + "-" + new Date().getTime() + "-" + Cmn.GetUUID());
        
        $(_self.Selector.Container).find(_self.Selector.SelectFile).each(function () {
            if ($(this).find("label").length <= 0) {
                var _label = $('<label for="' + _self.InputFile.attr("id") + '"></label>').css({
                    "display": "block", "width": $(this).width(), "height": $(this).height(),
                    "position": "absolute", "top": "0", "left": "0","zoom":"1"
                });
                if ($(this).css("position") != "absolute") { $(this).css({ "position": "relative" }) };
                $(this).css({ "z-index": "10" });
                $(this).append(_label);
            }
        });


       //绑定事件
        _self.BindEvent();
       //初始化文件面板
        _self.SetFileInfo();
   }

   _FileUpload.prototype.BindEvent = function () {
       /// <summary>上传插件事件绑定</summary>
       var _self = this,
           //选择文件的按钮
           _selectFileBtn =  $(_self.Selector.Container).find(_self.Selector.SelectFile),
           //上传滴按钮
           _uploadBtn = $(_self.Selector.Container).find(_self.Selector.UploadBtn),
           //取消上传
           _cancelUploadBtn = $(_self.Selector.Container).find(_self.Selector.CancelUpload),
           //删除文件项的按钮
           _delBtn = $(_self.Selector.Container).find(_self.Selector.DelFileItem),
           //文件项dom
           _fileInfoItem = $(_self.Selector.Container).find(_self.Selector.FileInfoItem),
           //删除文件项的按钮
           _addBtn = $(_self.Selector.Container).find(_self.Selector.AddUpload);
          
       //检测是否存在上传按钮 不存在默认选址完成之后立即上传
       if (_uploadBtn.length > 0) { _self.IsSelectedUpload = false; }
       else { _self.IsSelectedUpload = true;}

       $(".cg-AllUploadFileInputContainer").undelegate("#" + _self.InputFile.attr("id"), "change").
           delegate("#" + _self.InputFile.attr("id"), "change", function (e) {
               _self.InputFile = $(this);
               var _selfFile  = this;
               _self.FileFilter(e, function () {

                   if (_self.IsSelectedUpload || !_self.IsH5) { _self.Upload({}); }

                   //如果支持h5
                   if (_self.IsH5) {  _self.InputFile = $(_selfFile).clone(true, true).replaceAll(file = _selfFile);  }
              
               });
       });

       
       if (_self.IsSelectedUpload) {
           _uploadBtn.hide();
           _cancelUploadBtn.hide();
           _addBtn.hide();
       }
       else {
           //上传按钮上传事件
           _uploadBtn.off("click").on("click", function () { _self.Upload(); });
           //取消上传按钮上传事件
           _cancelUploadBtn.off("click").on("click", function () { });
           //添加文件
           _addBtn.off("click").on("click", function () {  var _index = _addBtn.index(this);   });
       }

      
       //删除文件
       _delBtn.off("click").on("click", function () {
           var _index = _delBtn.index(this),
               _path = $(this).attr("path");
           if (_index >= 0 && _self.SelectFiles.length > _index) {
               // 源数据清除
               _self.SelectFiles.splice(_index, 1);
               delete _self.SelectFiles[_index];
              

           }
           if (_fileInfoItem.length > 1) { _fileInfoItem.eq(_index).remove(); }
           else { _fileInfoItem.hide(); }
           _self.OnClickDelBtn();

           if (!!_self.DelFileItf && !!_path) {
               CmnAjax.PostData(_self.DelFileItf, { "path": _path });
           }
       });
       

   }


    //设置上传进度
   _FileUpload.prototype.SetProgress = function (progress, file) {
       /// <summary>设置进度</summary>
       var _self = this,
           _progress = $(_self.Selector.Container).find(_self.Selector.Progress);

       if (_progress.length > 0) {
           _progress.eq(file.index).css( _progress.attr("changeattr"), progress + "%" );
       }
   }

    //设置上传的文件信息
    _FileUpload.prototype.SetFileInfo = function (data) {
        /// <summary>设置文件信息</summary>
        /// <param name="data" type="JSON">需要设置的文件信息</param>

        var _self = this,
            _data = $.extend({ target: _self.InputFile, file: "", state: false, name: "", size: 0, errorMsg: "" }, data || {}),
            _index =  !!_data.file ? (_data.state?_data.file.index:0) : 0,
             //每个文件信息的项
           _fileInfoItem = $(_self.Selector.Container).find(_self.Selector.FileInfoItem).eq(_index),
             //文件名称
           _fileName = $(_self.Selector.Container).find(_self.Selector.FileName).eq(_index),
            //文件大小
           _fileSize = $(_self.Selector.Container).find(_self.Selector.FileSize).eq(_index),
           //进度条
           _progress = $(_self.Selector.Container).find(_self.Selector.Progress).eq(_index),
           //文件预览
           _filePreview = $(_self.Selector.Container).find(_self.Selector.FilePreview).eq(_index),
            //文件上传反馈信息
           _uploadMsg = $(_self.Selector.Container).find(_self.Selector.UploadMsg).eq(_index);

         if (!_data.file && !_data.path) { _fileInfoItem.hide(); }
         else  { _fileInfoItem.show(); }

        if (_fileName.length > 0) {
            var _name = _data.name;
            if (!!_data.path && !_name) {
                if (!_data.name) { _name = _self.GetFileName(_data.path); }
            }
            if (_name.length > 20) { _name = "..."+_name.substr(_name.length / 2); }
            _fileName.html(_name);
        }

        //显示文件预览 如果是图片的话直接显示图片 其他文件显示扩展名
        if (_filePreview.length > 0 && !!_data.path) {
            var _filePreviewDom = _data.file.type;
          
            if (_self.GetFileType(_data.path) == "image") {
                _filePreviewDom = '<img src="' + _data.path + '" />';
            }
            else { _filePreviewDom = _self.GetFileType(_data.path); }
            
            _filePreview.html(_filePreviewDom);
        }

        //显示文件大小
        if (_fileSize.length > 0) {
            var _formatStr = _fileSize.html("").attr("format");
            if (!!_formatStr) {
                _formatStr = _formatStr.replace("{size}", _data.size);
            }
            else { _formatStr = _data.size; }
            if (!!_data.size) {
                _fileSize.show().html(_formatStr);
            }
            else { _fileSize.hide(); }
                  
        }

        //显示文件上传信息
        if (_uploadMsg.length > 0) { _uploadMsg.html(_data.errorMsg); }

        //显示进度条
        if (_progress.length > 0) {
            var _changeAttr = "width" || _progress.attr("changeattr");
            _progress.css(_changeAttr, "0px").attr("changeattr", _changeAttr);
        }

        _self.OnSetFileInfo(data);
        
   }


   _FileUpload.prototype.FileFilter = function(e,callback) {
       /// <summary>文件过滤</summary>
       /// <param name="files" type="Files">要过滤的文件列表</param>
       var _self = this,
           _files = e.target.files || (!!e.dataTransfer ? e.dataTransfer.files : e.target),
           _reg = new RegExp("\.(" + _self.LimitFileSuffix.toString().replace(/\,/g, "|").toLowerCase() + ")+$"),
            _file = _files[0] || _files,
           _fileData={  target: _self.InputFile,file:"",path:"",  state:false, name: "", size: 0, errorMsg: "" };

       
     
       if (!Cg.Object.IsType(_files, "FileList")) {
            //兼容低版本浏览器
        
           if ($.browser.msie) {
               _file = { name: "", size: 0, type: "", input: _self.InputFile };
               _fileData.path =  _self.InputFile[0].value;
            }
            else {
                try {
                    _file = _self.InputFile[0].files.item(0);
                    _fileData.path = _file.getAsDataURL();
                } catch (e) {
                    _file = _self.InputFile[0].files[0];
                    _fileData.path = window.URL.createObjectURL(_self.InputFile[0].files[0]);
                }
            }
 
            if (!_file.size) {
                if(!!_file.fileSize){ _file.size = _file.fileSize; }
                else{  _file.size = "unkown";}
            }
            if (!_file.name) {
                if (!!_file.fileName) { _file.name = _file.fileName; }
                else { _file.name = _self.GetFileName(_fileData.path); }
            }
            if (!_file.type) {
               _file.type = _self.GetFileType(_fileData.path); 
            }
            _fileData.path = "";
       }
     
       //选择完毕之后
       _self.SelectComplete({ target: _self.InputFile, files: _file });

        if (!Cg.Object.IsType(_file.size, "string") && _file.size > _self.LimitSize ) {
            _fileData.errorMsg = "文件大小超过了 " + Math.round(_self.LimitSize / 1048576) + " M";
        }
       else if (!_reg.test(_file.name.toLowerCase())) {
            _fileData.errorMsg = _self.GetFileSuffix(_file.name) + "不允许上传!";
        }
        else {
            _file.index = 0;
            _file.input = _self.InputFile;
            _self.SelectFiles.push(_file);
        }

        _fileData.file = _file;
        _fileData.state = _fileData.errorMsg == "" ? true : false;
        _fileData.name = _file.name;
        _fileData.size = Math.round(_file.size / 1048576 * 100) / 100;

        if (!_fileData.state) {
            callback && callback(_fileData);
            _self.SetFileInfo(_fileData);
            return false;
        }

        if (!!window["FileReader"] && _file.type.indexOf("image") >= 0) {
            var _reader = new FileReader();
            _reader.onload = function (e) {

                var _url = e.target.result;
 
                //有些安卓上选择的图片头部缺信息，需要增加，检测是否缺头部信息，如果缺就加上
                var _re = /^data:base64,/;
 
                if (_re.test(_url)) {
                    var _mime = { 'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'bmp': 'image/bmp' };
                    _url = _url.replace(_re, 'data:' +  _mime[_self.GetFileSuffix(_file.name)] + ';base64,');
                }
  
                _fileData.path = _url;

                callback && callback(_fileData);
                //显示上传面板
                _self.SetFileInfo(_fileData);
            }
            _reader.readAsDataURL(_file);
        }
        else if (!!window["Audio"] && _file.type.indexOf("audio") >= 0) {
            
            window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
            var _ac = new AudioContext();
            var _reader = new FileReader();

            _reader.onload = function (e) {
              
                _ac.decodeAudioData(e.target.result, function (buffer) {
                   
                    if (buffer && buffer.duration && buffer.duration > _self.LimitMediaLength) {
                        _fileData.state = false;
                        _fileData.errorMsg = "音频长度不能超过" + _self.LimitMediaLength +"秒！";
                    }
                
                    callback && callback(_fileData);
                    _self.SetFileInfo(_fileData);

                });
               
            }
            _reader.readAsArrayBuffer(_file);
        }
        else {
            callback && callback(_fileData);
            _self.SetFileInfo(_fileData);
        }

       //--过滤事件

        _self.OnFilter(_fileData);

     return _fileData.state;
   }

    //上传
   _FileUpload.prototype.Upload = function (data) {
       /// <summary>上传</summary>
       /// <param name="data" type="JSON">上传附带的数据</param>
       var _self = this, _file = null, _i = 0, _form = null,
           _fileName = _self.InputFile.attr("name");

       for (; _i < _self.SelectFiles.length;_i++){
           _file = _self.SelectFiles.shift();

           (function (file) {

               var _xhr = new XMLHttpRequest();
               if (_xhr.upload) {

                   // 上传中
                   _xhr.upload.addEventListener("progress", function (e) {
                       var _progress = Math.round(e.loaded * 100 / e.total);
                       _self.OnProgress({ target: _self.InputFile, progress: _progress });
                       _self.SetProgress(_progress, file);
                   }, false);

                   // 文件上传成功或是失败
                   _xhr.onreadystatechange = function (e) {
                       if (_xhr.readyState == 4) {
                           if (_xhr.status == 200) {
                               _uploadComplete(_xhr);
                           }
                           else {
                               _uploadComplete(_xhr);
                           }
                       }
                   };

                   // 开始上传
                   _xhr.open("POST", _self.UploadItf, true);
                   _form = new FormData();

                   _form.append("inputFileName", _fileName);
                   _form.append(_fileName, _file);

                   if ((Cg.Object.IsType(_self.Data, "Object")) || (Cg.Object.IsType(data, "Object"))) {
                       _self.Data = $.extend(_self.Data, data);
                       $.each(_self.Data, function (index, item) {
                           _form.append(index, item);
                       });
                   }

                   _xhr.send(_form);
               }

           })(_file)


       }
      
       function _uploadComplete(xhr) {
           var _state = (xhr.status == 200 ? true : false),
               _data = Cg.Object.IsType(xhr.responseText, "string") ? $.parseJSON(xhr.responseText) : xhr.responseText;
           _data.path = _state?_data.path:_file.name;
           _self.OnComplete({ state: _state, file: _file, data: _data });

           if (_self.SelectFiles.length == 0) {
               //全部完毕
               _self.OnCompleteAll({ target: _self.InputFile});
           }
       }

   }

    //如果不支持html 上传方式的话 重写upload
   if (typeof (Worker) === "undefined") {
     
        _FileUpload.prototype.Upload = function (data) {
            /// <summary>上传</summary>
            var _self = this, _file = _self.SelectFiles[0],
                _fileName = _self.InputFile.attr("name");

            if ((Cg.Object.IsType(_self.Data, "Object")) || (Cg.Object.IsType(data, "Object"))) {
                _self.Data = $.extend(_self.Data, data, { "inputFileName": _fileName });
            }

 
            if (!$.ajaxFileUpload) { Cg.alert("ajaxFileUpload插件不存在！"); return; }
            
            $.ajaxFileUpload({
                url: _self.UploadItf,                                           //用于文件上传的服务器端请求地址
                secureuri: false,                                               //
                data: _self.Data,                                               //以对象的方式传递，内容部分可输入JavaScript的变量值
                fileElementId: _self.InputFile.attr("id"),                      //上传的input对象id
                dataType: 'script',                                             //返回值类型 一般设置为json
                success: function (data, status)                                //服务器成功响应处理函数
                {
                   
                    var _progress = 100;
                    _self.OnProgress({ target: _self.InputFile, progress: _progress });
                    _self.SetProgress(_progress, {index:0});

                    var _state = (status == "success" ? true : false),
                       _data = Cg.Object.IsType(data, "string") ? $.parseJSON(data) : data;
                     
                    _data.path = _state ? _data.path : _file.path;
                    _self.OnComplete({ state: _state, file: _file, data: _data });
                  
                    _self.OnCompleteAll({ target: _self.InputFile });
                    
                },
                error: function (data, status, e) {
                 
                }
            });

        }

    }

    _FileUpload.prototype.GetFileName = function (path) {
        /// <summary>获取文件名</summary>
        /// <param name="path" type="string">文件路径</param>
        var _index = path.lastIndexOf("/");
        if (_index > 0) { return path.substr(_index + 1); }
        return path;
    }

    _FileUpload.prototype.GetFileType = function (path) {
        /// <summary>获取文件类型</summary>
        /// <param name="path" type="string">文件路径</param>
        if (!path) { return "unkown type";}
        if (path.indexOf("base64") > 0) { return "image";  }

        var _suffix = this.GetFileSuffix(path),
            _suffixArray = {
            jpg: "image",
            png: "image",
            gif: "image",
            jpeg: "image",
            bmp: "image",
            txt: "txt",
            zip: "zip",
            rar: "rar",
            swf: "fl",
            wmv: "video",
            avi: "video",
            wma: "video",
            mp3: "audio",
            mp4: "video"
        }
        return _suffixArray[_suffix] || _suffix;
    }

    _FileUpload.prototype.GetFileSuffix = function (path) {
        /// <summary>获取文件扩展名</summary>
        /// <param name="path" type="string">文件路径</param>
        path = this.GetFileName(path);
        var _index = path.lastIndexOf(".");
        if (_index > 0) { return path.substr(_index + 1); }
        return path.toLowerCase();
    }
   

    Cg.UI.FileUpload = function (selector, uploadItf, isSelectedUpload) {
        /// <summary>文件上传</summary>
        /// <param name="selector" type="String">文件上传容器选择器</param>
        /// <param name="uploadItf" type="String">上传接口</param>
        /// <param name="isSelectedUpload" type="String">是否在选择文件之后立即上传</param>
        /// <field name="LimitSize" type="int">限制文件最大文件大小 默认3m</field>
        /// <field name="UploadItf" type="String">上传接口</field>
        /// <field name="DelFileItf" type="Array">删除文件接口</field>
        /// <field name="LimitFileSuffix" type="Array">允许上传的文件类型 ['txt', 'rar', 'zip', 'jpg', 'jpeg', 'gif', 'png', 'swf', 'wmv', 'avi', 'wma', 'mp3', 'mid']</field>
        /// <field name="IsSelectedUpload" type="int">是否在选择文件之后立即上传</field>
        /// <field name="Data" type="Json">上传的时候传递给接口的数据</field>
        /// <field name="InputFile" type="DOM">当前的文件选择框对象</field>
        /// <field name="OnFilter" type="Function">过滤文件时触发</field>
        /// <field name="SelectComplete" type="Function">文件选择之后触发</field>
        /// <field name="OnProgress" type="Function">上传时 IE678 no</field>
        /// <field name="OnComplete" type="Function">上传完毕的回调</field>
        /// <field name="OnCompleteAll" type="Function">全部上传完毕的回调 改回调多数用于多文件上传</field>
        /// <field name="Selector" type="Json">占位选择器JSON</field>
        /// <field name="Selector.Container" type="this.Selector">占位选择器JSON</field>

        return new _FileUpload(selector, uploadItf, isSelectedUpload);
    } 
        
})(Cmn);


 
 
 
