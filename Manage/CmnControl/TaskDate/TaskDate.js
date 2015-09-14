/// <reference path="../../../Js/jquery.js" />
 
(function($, undefined) {
    window.TaskDate = function (selector) {
        /// <summary>任务时间插件</summary>
        /// <param name="source" type="String or json数组">需要绑定元素数据源</param>
        /// <returns type="object" />
        var _task = $(selector);
         
       this.TaskDateLoad = function (source, year, month, loadingFunction) {
           /// <summary>重新初始化控件</summary>
           /// <param name="source" type="String or json数组">需要绑定元素数据源</param>
           /// <param name="loadingFunction" type="Function">控件加载的回调 [bool:是否加载完成]</param>
           init(source , loadingFunction).fullCalendar("gotoDate",year,month-1);
       }

       function init(source, loadingFunction) {
           _task.empty();
           _task.fullCalendar({

               editable: false,
 
               events: source,

               eventDrop: function (event, delta) {

               },

               loading: loadingFunction

           });
 
 
           $(".fc-header").hide();
 
           return _task;
       }

    }
})(jQuery);
