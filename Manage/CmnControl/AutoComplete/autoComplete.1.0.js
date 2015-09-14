
(function( $, undefined ) {
    // 此处是autocomplete飞扩展
    // _normalize 扩展了对结果集的格式化
    //keypress 扩展了鼠标按下的数据绑定
    $.widget("ui.autocomplete", $.ui.autocomplete, {
         
        _change: function (event) {
            if (this.previous !== this._value()) {
                this._trigger("change", event, { item: this.selectedItem });
            }
            //没按下键盘重新绑定数据源
            if (typeof this.source == "function") { this._initSource(); }
        },
        _normalize: function (items) {
            if (items.length && items[0].label && items[0].value) {
                return items;
            }
            return $.map(items, function (item) {
                if (typeof item === "string") {
                    return {
                        label: item,
                        value: item
                    };
                }

                if (typeof item === "object") {
                    /*********修改***********/
                        var _key = "", _val = "",_count = 0;
                        $.each(item, function (index, ite) {
                            if (_count == 0) {  _key = ite; }
                            else { _val += " - " + ite; }
                            _count++;
                        });
                        return { label: _val,  value: _key };

                }

                return $.extend({
                    label: item.label || item.value,
                    value: item.value || item.label
                }, item);
            });
        },
        _renderItem: function (ul, item) {
                var text = item.value == item.label ? item.label :item.value +""+ item.label
                return $("<li>")
                .attr("data-value", item.value)
                .append($("<a>").text(text))
                .appendTo(ul);
        },
        options: {
            messages: {
                noResults: "没有查询结果.",
                results: function (amount) {
                    
                    return ;
                }
            }
        },

        __response: function (content) {
            var message;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return;
            }
            if (content.length == 0) {
                message = this.options.messages.noResults;
                this.liveRegion.css({
                    "position": "absolute", "right": "-110px", "width": "100", "color": "red" 
                }).show().text(message);
            } else {
                this.liveRegion.hide();
            }
          
        }
    });
   
}(jQuery));
