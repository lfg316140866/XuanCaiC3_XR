/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="../../../Js/jquery.js" />

CmnMis.UI.Control.Address = function (thisControl) {
    //控件类型
    this.Type = "Address";

    //初始化控件配置
    this.InitControl = function (controlCfg) {
        

        //var _sql = "select ProvinceID,ProvinceDesc from bas_Province";
        //var _sql1 = "select CityID,CityDesc from bas_City where ProvinceID = "
        //var _sql2 = "select CountyID,CountyDesc from bas_County where CityID = "
        $(thisControl).width(550);
        //初始化
        $(thisControl).find(".cmn-control-Province").empty().html("<option>-- 请选择省 --</option>");
        $(thisControl).find(".cmn-control-City").empty().html("<option>-- 请选择市 --</option>");
        $(thisControl).find(".cmn-control-Area").empty().html("<option>-- 请选择区 --</option>");
        var _res =  CmnMis.Itf.GetData("GetProvince", "", true, function (data) { }).data;
            if (_res.length > 0) {
                $.each(_res, function (index,item) {
                    var _option = $("<option value='" + item.ProvinceID + "'>" + item.ProvinceDesc + "</option>")
                    $(thisControl).find(".cmn-control-Province").append(_option);
                })

            }
           

        //绑定省
        $(thisControl).find(".cmn-control-Province").on("change", function () {
            var _pid = $(this).val();

            $(thisControl).find(".cmn-control-City").empty().html("<option>-- 请选择市 --</option>");
            $(thisControl).find(".cmn-control-Area").empty().html("<option>-- 请选择区 --</option>");
            var _res = CmnMis.Itf.GetData("GetCity", "{\"pid\":\"" + _pid + "\"}", true, function (data) { }).data;
               
                if (_res.length > 0) {
                    $.each(_res, function (index, item) {
                        var _option = $("<option value='" + item.CityID + "'>" + item.CityDesc + "</option>")
                        $(thisControl).find(".cmn-control-City").append(_option);
                    })

                }
            });

      

        //绑定市
        $(thisControl).find(".cmn-control-City").on("change", function () {
            var _cid = $(this).val();

            $(thisControl).find(".cmn-control-Area").empty().html("<option>-- 请选择区 --</option>");
            var _res = CmnMis.Itf.GetData("GetArea", "{\"cid\":\"" + _cid + "\"}", true, function (data) { }).data;
                if (_res.length > 0) {
                    $.each(_res, function (index, item) {
                        var _option = $("<option value='" + item.CountyID + "'>" + item.CountyDesc + "</option>")
                        $(thisControl).find(".cmn-control-Area").append(_option);
                    })

                }
            });

        

    }
 
    //获取控件的值
    this.GetValue = function () { return $(thisControl).find(".cmn-control-Area").val(); }

    //设置控件的值
    //value:需要往控件中设置的值
    this.SetValue = function (value) {

        CmnMis.Itf.GetData("GetCityByCounty", "{\"cid\":\"" + value + "\"}", false, function (data) {
            var _cityid = data.data[0].CityID;

            CmnMis.Itf.GetData("GetProvinceByCity", "{\"cid\":\"" + _cityid + "\"}", false, function (data) {

                var _pid = data.data[0].ProvinceID;
                $(thisControl).find(".cmn-control-Province").val(_pid);
                $(thisControl).find(".cmn-control-Province").trigger("change");
              
                    $(thisControl).find(".cmn-control-City").val(_cityid);
                    $(thisControl).find(".cmn-control-City").trigger("change");
            
           
                    $(thisControl).find(".cmn-control-Area").val(value);
          
               
            });

        });



        $(thisControl).find(".cmn-control-Area").val(value);
    }

    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    this.SetWidth = function (Width) { $(thisControl).width(Width); }
    //初始化控件
    this.Init = function () {
        $(thisControl).find(".cmn-control-Province").empty().html("<option>-- 请选择省 --</option>");
        $(thisControl).find(".cmn-control-City").empty().html("<option>-- 请选择市 --</option>");
        $(thisControl).find(".cmn-control-Area").empty().html("<option>-- 请选择区 --</option>");
    }

    //设置是否可用
    //isEnabled:是否可用，true:可用；false:不可用
    this.SetEnabled = function (isEnabled) {
        if (isEnabled) {   }
        else {   }
    }

    //设置输入焦点
    this.SetFocus = function () {  }

    //重新加载数据
    this.ReLoadData = function () { return true; }
};

CmnMis.UI.Control.Address.prototype = new CmnMis.UI.Control.BasControl();