/// <reference path="../../Cmn.js" />
/// <reference path="../../jquery.js" />


if (!window["Cmn"]) { var Cmn = {}; alert("Cmn.js 没引入"); }
if (Cmn.Func.IsMobile() && !window["Cmn"]["Func"]["TouchSlide"]) { var Cmn = {}; alert("CmnFuncExd.js 没引入"); }

Cmn.CmnUIPlugin = (function () {
    /// <summary>相关cmnUI组建</summary>

    return {

        ImageCarousel: (function (fillSelector, data, opt) {
            /// <summary>图片轮播</summary>
            /// <param name="fillSelector" type="String">填充的选择器</param>
            /// <param name="data" type="json array">填充的数据 json数组</param>
            /// <param name="opt" type="json">动画的参数集合</param>

            //图片轮播
            var _ImageCarousel = function (fillSelector, data, opt) {

                if (!!data && data.length > 0 && arguments.length > 2) {

                    //填充数据
                    Cmn.FillData(fillSelector, data, opt);
                }
                else { opt = data; }


                var _self = this;

                //轮播参数集合
                _self.defOpt = {
                    container: "",//容器选择器
                    selector: fillSelector,
                    delay: 0,//延迟时间 为0的话取消自动轮播功能 单位 为毫秒
                    speed: "600",//切换时间
                    easing: "linear",
                    switchModel: "Scroll",// Position 切换模式 Scroll 滚动条模式切换 Position 定位模式切换
                    switchStyle:"None",//Fade
                    switchDirection: "horizontal",//vertical  切换方向
                    switchNum: "1",//切换数量
                    prev: "",//上一页选择器
                    next: "",//下一页选择器
                    no: "",//编号选择器
                    loop:true,
                    active: "",
                    onSwitch: function () { },//切换之前触发
                    onComplete: function () { }//切换之后触发

                }

                //合并参数
                _self.defOpt = $.extend(_self.defOpt, opt);
                _self.$carouselContainer = $(fillSelector).parents(_self.defOpt.container);
                _self.scrollHeight = $(_self.defOpt.container)[0].scrollHeight;
                _self.scrollWidth = $(_self.defOpt.container)[0].scrollWidth;
                _self.itemNum = _self.$carouselContainer.find(_self.defOpt.selector).size() ;
                _self.pageSize = Math.ceil(_self.itemNum/ _self.defOpt.switchNum);
                var _index = 0;
                var _interval = 0;
                var _isRun = false;
                var _isHover = false;
                var _pageSize = _self.pageSize;
          

                //初始化
              this.CurMode =  this[_self.defOpt.switchModel]();
              this.CurMode.Init();
                //自动选择
                function _swtichInit(index) {

                    _self.defOpt.onSwitch(index);

                    if (!!_self.defOpt.no) {
                        $(_self.defOpt.no).removeClass(_self.defOpt.active);
                        $(_self.defOpt.no).eq(index).addClass(_self.defOpt.active);
                    }
                }

                //生成序号
                if (!!_self.defOpt.no) {
                    for (var _i = 0; _i < _pageSize - 1; _i++) {
                        var _$clone = $(_self.defOpt.no).eq(_i).clone();

                        if (!!(new Number($(_self.defOpt.no).eq(0).text()) + 1)) {
                            _$clone.text(new Number(_$clone.text()) + 1);
                        }

                        $(_self.defOpt.no).parent().append(_$clone);
                    }

                }

                _swtichInit(0);
                //获取下一页页码
                function _GetNextIndex() {
                    var _curIndex = _index;
                    _curIndex++;
                    if (_curIndex > _pageSize - 1) {
                       
                        if (_self.defOpt.loop) {
                            _curIndex = 0;
                        }
                        else { _curIndex--; }
                    }
                    return _curIndex;
                }

                //获取上一页页码
                function _GetPrevIndex() {
                    var _curIndex = _index;
                    _curIndex--;
                    if (_curIndex < 0) {
                        if (_self.defOpt.loop) {
                            _curIndex = _pageSize - 1;
                        }
                        else { _curIndex++; }
                        
                    }
                    return _curIndex;
                }



                //下一页
                var _sildeToNext = function () {
                    var _curIndex = _GetNextIndex();
                    if (_isRun || _index == _curIndex) { return; }
                    window.clearTimeout(_interval);
                    _isRun = true;
                    _index = _curIndex;
                    _swtichInit(_curIndex);
                    _self.SildeTo(_curIndex, function () { _AutoPlay(); _isRun = false; _self.defOpt.onComplete(_curIndex);  }, "next");
                }


                //上一页
                var _sildeToPrve = function () {
                    var _curIndex = _GetPrevIndex();
                    
                   if (_isRun || _index == _curIndex) { return; }
                    window.clearTimeout(_interval);
                    _isRun = true;
                    _index = _curIndex;
                    _swtichInit(_curIndex);
                    _self.SildeTo(_curIndex, function () { _AutoPlay(); _isRun = false; _self.defOpt.onComplete(_curIndex);  }, "prve");

                }

                var _goto = function (index) {
                    if (_isRun || index == _index) { return; }
                    window.clearTimeout(_interval);
                    _isRun = true;
                    var _dir = index > _index ? "next" : "prve";
                    _index = index;
                    _swtichInit(_index);
                    _self.SildeTo(_index, function () { _AutoPlay(); _isRun = false; _self.defOpt.onComplete(_index);  }, _dir);
                }



                if (!!_self.defOpt.next) {
                    //下一页
                    $(_self.defOpt.next).on("click", function () { _sildeToNext(); });
                }

                if (!!_self.defOpt.prev) {
                    //上一页
                    $(_self.defOpt.prev).on("click", function () { _sildeToPrve(); });
                }

                if (!!_self.defOpt.no) {
                    //页码
                    $(_self.defOpt.no).on("click", function () { _goto($(this).index()); });
                }

                //拖动
                Cmn.Func && Cmn.Func.TouchSlide(_self.$carouselContainer, 50, function () {

                }, function (dir) {
                    if (dir == "left") { _sildeToNext(); }
                    else if (dir == "right") { _sildeToPrve(); }
                },1, "vertical");

                if (_self.defOpt.delay != 0) { _AutoPlay(); }

                //auto play
                function _AutoPlay() {
                    if (_self.defOpt.delay == 0) { return; }
                    window.clearTimeout(_interval);
                    _interval = setTimeout(function () {
                        if (_isRun && _isHover) { return; }
                        _index = _GetNextIndex(); _swtichInit(_index);
                        _self.SildeTo(_index, function () { _AutoPlay(); _self.defOpt.onComplete(_index); }, "next");
                    }, _self.defOpt.delay);
                }

                if (Cmn.Func && !Cmn.Func.IsMobile()) {
                    $(_self.defOpt.container).hover(function () {
                        window.clearTimeout(_interval); _isHover = true;
                    }, function () { _AutoPlay(); _isHover = false; });
                }

            }



            _ImageCarousel.prototype = {

                SildeTo: function (index, callback, dir) {
                    var _self = this;
                    _self.CurMode.Main(index, callback, dir);
                },
                Scroll:{
                    Init:function(){},
                    Main:function(index, callback){
                        var _self = this;
                        var _step = 0;//移动步长

                        if (_self.scrollWidth == _self.scrollHeight && _self.scrollHeight == 0) { return; }
                        else if (_self.scrollWidth > _self.scrollHeight) {
                            _self.defOpt.switchDirection = "horizontal";
                            _step = _self.scrollWidth / _self.$carouselContainer.find(_self.defOpt.selector).size() * _self.defOpt.switchNum;
                        }
                        else {

                            _self.defOpt.switchDirection = "vertical";
                            _step = _self.scrollHeight / _self.$carouselContainer.find(_self.defOpt.selector).size() * _self.defOpt.switchNum;
                        }

                        var _action = {};
                        if (_self.defOpt.switchDirection == "horizontal") {
                            _action = { scrollLeft: index * _step };
                        }
                        else if (_self.defOpt.switchDirection == "vertical") {
                            _action = { scrollTop: index * _step };
                        }
                        _self.$carouselContainer.animate(_action, { easing: _self.defOpt.easing, duration: _self.defOpt.speed, complete: callback });
                    }
                
                },
                Position:function(){
                   var _self = this;
                   var _$selfitem = _self.$carouselContainer.find(_self.defOpt.selector);//本身的 jquery dom 对象
                   var _$selfitems = [];
                   var _$beforItems = [];
                   var _width = _$selfitem.outerWidth(true);
                   var _height = _$selfitem.outerHeight(true);
                   var _action = null;//位移行为json

                    return {
                        
                        Init:function () {
                          
                            _self.$carouselContainer.css({ "position": "relative", "overflow": "hidden" });
                            _$selfitem.css({ "position": "absolute", "visibility": "hidden" });
                            if (_self.defOpt.switchDirection == "horizontal") {
                                _$selfitem.css({  "left": "0px"});
                            } else if (_self.defOpt.switchDirection == "vertical") {
                                _$selfitem.css({  "top": "0px"});
                            }
                            if (_self.defOpt.switchStyle == "Fade") { _$selfitem.css({ "opacity": "0" }); }
                            for (var _i = 0; _i < _self.defOpt.switchNum; _i++) {
                                _$beforItems.push(_$selfitem.eq(_i).css({ left: (_i * _width) + "px", "visibility": "visible", "opacity": "1" })[0]);
                            }
                            if (_self.defOpt.switchStyle == "Fade") { _$selfitem.eq(0).css({ "opacity": "1" }); }
                        },
                        Main: function (index, callback, dir) {
                            
                             _action = null;//位移行为json
                             _$selfitems = [];
                             _width = _$selfitem.outerWidth(true);
                             _height = _$selfitem.outerHeight(true);

                             var _switchNum = _self.defOpt.switchNum;
                             if (_self.itemNum - index * _self.defOpt.switchNum < _self.defOpt.switchNum) {
                                 _switchNum = _self.itemNum - index * _self.defOpt.switchNum;
                             }

                            if (_self.defOpt.switchDirection == "horizontal") {
                                if (dir == "next") {
                                    _action = { left: "-=" + _width * _switchNum + "px" };

                                }
                                else if (dir == "prve") {
                                    _action = { left: "+=" + _width * _switchNum + "px" };
 
                                }
                            }
                            else if (_self.defOpt.switchDirection == "vertical") {
                                if (dir == "next") { _action = { top: "-=" + _height * _switchNum + "px" }; }
                                else if (dir == "prve") { _action = { top: "+=" + _height * _switchNum + "px" }; }

                            }

                            //
                            if (_$selfitem.length < _self.defOpt.switchNum || !_action) { return ""; }

                            //切换的小情调
                           
                           
                            if (_self.defOpt.switchDirection == "horizontal") {
                                if (dir == "next") {
                                    for (var _i = 0; _i < _switchNum; _i++) {
                                        var _index = index * _self.defOpt.switchNum + _i;
                                        _$selfitems.push(_$selfitem.eq(_index).css({ left: ((_self.defOpt.switchNum*1 + _i) * _width) + "px", "visibility": "visible" })[0]);
                                    }
                                }
                                else if (dir == "prve") {
                                    for (var _i = _switchNum; _i > 0; _i--) {
                                        var _index = index * _self.defOpt.switchNum + _i;
                                        _$selfitems.push(_$selfitem.eq(_index).css({ left: "-" + ((_self.defOpt.switchNum * 1 - _i) * _width) + "px", "visibility": "visible" })[0]);
                                    }
                                }

                            }
                            else if (_self.defOpt.switchDirection == "vertical") {

                                if (dir == "next") {
                                    for (var _i = 0; _i < _switchNum; _i++) {
                                        var _index = index * _self.defOpt.switchNum + _i;
                                        _$selfitems.push(_$selfitem.eq(_index).css({ top: (_i * _height + _self.defOpt.switchNum * _height) + "px", "visibility": "visible" })[0]);
                                    }
                                }
                                else if (dir == "prve") {
                                    for (var _i = 0; _i < _switchNum (_index).css({ top: "-" + (_self.defOpt.switchNum * _height - _i * _height) + "px", "visibility": "visible" })[0]);
                                    }
                                };
                            }
                            _$selfitems = $(_$selfitems);
                       
                            var _beforAction = _action;
                            if (_self.defOpt.switchStyle == "Fade") { _beforAction = $.extend(_action, { "opacity": "0" }); }

                            $(_$beforItems).animate(_beforAction, {
                                easing: _self.defOpt.easing, duration: _self.defOpt.speed * (_switchNum / _self.defOpt.switchNum), complete: function () {
                                  //  $(this).css({ "visibility": "hidden" });
                                }
                            });

                            if (_self.defOpt.switchStyle == "Fade") { _action = $.extend(_action, { "opacity": "1" }); }
                            var _count = 0;
                            $(_$selfitems).animate(_action, {
                                easing: _self.defOpt.easing, duration: _self.defOpt.speed * (_switchNum / _self.defOpt.switchNum), complete: function () {
                                    if (_count == _$selfitems.length - 1) {
                                        callback && callback();
                                        _$beforItems = _$selfitems;
                                    }
                                    _count++;
                                }
                            });

                        }
                    
                    }
                }
                  

            }

            return function (fillSelector, data, opt) {

                new _ImageCarousel(fillSelector, data, opt);
            };

        })()


    }

})();