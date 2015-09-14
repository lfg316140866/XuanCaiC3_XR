/// <reference path="jquery-1.9.1.js" />
/// <reference path="Cmn.js" />


(function ($, undefinde) {
    var $ = window.jQuery;
    Cmn.PlugIn = {
        selector: ".cmn-plugIn",
        SeachPlugIn: function (container) {

            var _$PlugIn = $(container).find(Cmn.PlugIn.selector);
            if (_$PlugIn.length < 1) { return; }

            _$PlugIn.each(function (index, item) {

                var _plugCfg = $(item).attr("cfg");
                // cfg = "{type:'switch',option:{}}"
                if (typeof _plugCfg == "string" && _plugCfg != "") {
                    try { _plugCfg = eval("(" + _plugCfg + ")"); }
                    catch (err) {
                        var _txt = "插件 cfg " + _plugCfg.toString() + ".\n\n";
                        _txt += "发现: " + err.message + "\n\n";
                        _txt += "请检查是否是json格式不对.\n\n";
                        Cmn.Log(_txt);
                        return false;
                    }
                }

                var _option = _plugCfg.option;
                if (typeof _option == "string" && _option != "") {
                    try { _option = eval("(" + _option + ")"); }
                    catch (err) {
                        var _txt = "插件 参数 " + _option.toString() + ".\n\n";
                        _txt += "发现: " + err.message + "\n\n";
                        _txt += "请检查是否是json格式不对.\n\n";
                        Cmn.Log(_txt);
                        return false;
                    }
                }
                if (_plugCfg.type == "switch") { Cmn.PlugIn.Switch(item, _option); }



            })

        },

        Switch: function (selector, option) {
            /// <summary>切换</summary>
            /// <param name="$dom" type="Jquery">绑定的dom对象 可以为jquery的选择器</param>
            /// <param name="option" type="json">参数列表 参数列表为cycle 的常规参数</param>
            var _PagerItem = $(option.pager).html().trim();
            var _$SwitchContainer = $(selector);
            $(option.pager).html("");
            var _option = {
                fx: 'scrollHorz',  //fx:’fade’》值：字符串，作用：选择特效.切换效果是它的重头戏，
                speed: 1000, //speed:300》值：正整数，作用：图片渐变效果持续时间
                timeout: 5000,  //timeout:3000》值：正整数，作用：切换间隔时间
                pause: '1',//pause:1》值：布尔值，作用：决定鼠标指上去时是否暂停
                next: '',   //next:”》值：字符串，实际是一个jquery对象，如’#s1′；作用：指定触发变动到下一张事件的元素
                prev: '',//prev:’‘》值：同next；作用：指定触发变动到上一张事件的元素
                pager: "",  //pager:》值：一个jquery对象；作用：指定页码元素，如多图片滚动时那个数字序号条
                easing: "easeOutQuart",  //easing:”》值：字符串，作用：选择缓动公式 （需配合Easing Plugin才能使用）
                activePagerClass: 'activeSlide',
                pagerAnchorBuilder: function paginate(idx, el) {
                    return $(_PagerItem);
                }
            }
            _option = $.extend(_option, option);
            _$SwitchContainer.cycle(_option);
 
            var _HandleTouchySwipe = function (event, $target, data) {   //滑动屏幕手柄事件
                
                if (data.direction == "left") { _$SwitchContainer.cycle("prev"); }
                else if (data.direction == "right") { _$SwitchContainer.cycle("next"); }
                
            }

            _$SwitchContainer.off("touchy-swipe");
            _$SwitchContainer.on("touchy-swipe", _HandleTouchySwipe);
        }



    };






})(window);


//blindX:前图向右滑动渐隐，后图向左滑动渐显
//blindX:前图向下滑动渐隐，后图向上滑动渐显
//blindX:前图向右下滑动渐隐，后图向左上滑动渐显
//cover:前图不动，后图从右划入覆盖前图
//curtainX：图片被分成左右两段，前图两段向右滑动渐隐，后图两段向左滑动渐显（酷！）
//curtainY：图片被分成上下两段，前图两段向下滑动渐隐，后图两段向上滑动渐显（酷！）
//fade:前图渐隐，同时后图渐显
//fadeZoom：前图渐隐，同时后图由小变大覆盖前图
//growX：前图不动，后图宽度从0增至100%,出发点：中间
//growY：前图不动，后图高度从0增至100%，出发点：中间
//scrollUp：同时向上滑动至后图完全显示
//scrollLeft：同时向左滑动至后图完全显示
//scrollRight：同时向右滑动至后图完全显示
//scrollDown：同时向下滑动至后图完全显示
//scrollHorz：同Left,但手动触发时，如果触发数字小于当前，则反向滚动
//scrollVert：同Down,但手动触发时，如果触发数字小于当前，则反向滚动
//shuffle：前图向左下方飞出，然后飞入后图背后（酷！）
//slideX：前图宽度由100减至0，后图宽度由0增至100%（酷！）
//slideY：前图高度由100减至0，后图高度由0增至100%
//toss：前图向右上方飞至消失
//turnUp：前图不动，后图从底部向上滑入
//turnDown：前图向下滑出，后图不动
//turnLeft：前图不动，后图从右向左滑入
//turnRight：前图向右滑出，后图不动
//uncover：前图向左滑出，后图不动
//wipe：前图不动，后图的宽和高同时由0增至100%覆盖前图，出发点：左上
//zoom：前图缩小至0，后图由0放大至100%，出发点：中间