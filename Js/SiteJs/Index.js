
/// <reference path="CmnSite.js" />
/// <reference path="../jquery-1.9.1.js" />


//首页业务逻辑 此处名称可以和页面对应起来 也可以和场景ID对应
(Index = new function () {
    /// <summary>首页业务逻辑</summary>
    $(function () {
        //绑定省市区
        new PCAS("Province1", "City1", "County1");
        new PCAS("Province2", "City2", "County2");
        new PCAS("Province3", "City3", "County3");
        new PCAS("Province4", "City4", "County4");
        new PCAS("Province5", "City5", "County5");
        $("input").focus(function () {
            if ($(this).val() == $(this).attr("vals")) {
                $(this).val("");
            }
        });
        //失去焦点的时候
        $("input").blur(function () {
            if ($(this).val() == "") {
                $(this).val($(this).attr("vals"));
            }
        });
        $(".JscTakes").on("click", function () {
            $(".js_pop_box_float>div").hide();
            $(".js_pop_box_float").show();
            $(".JscImpressionFloat").show();
        });
        $(".JscClose2").on("click", function () {
            $(".JscImpressionFloat").hide();
            $(".js_pop_box_float").hide();
        });
        $(".JscSex2").on("click", function () {
            $(this).parents(".JscSelectSexBox2").find(".JscSex2").removeClass("sex_set");
            $(this).addClass("sex_set");
        });
        //即刻预约试驾
        var _Submit = false;
        $(".Js_SubmitBtn2").on("click", function () {
            if (_Submit) { return; }
            var _obj = $(this).prev(".Js_FuChen");
            var _siteAddress = _obj.attr("siteaddress");
            var _name = _obj.find(".Js_UserName").val();
            var _sex = _obj.find(".JscSelectSexBox2").find(".JscSex2.sex_set").attr("values");
            var _phone = _obj.find(".Js_Phone").val();
            var _province = _obj.find(".Js_IsProvince").val();
            var _city = _obj.find(".Js_IsCity").val();
            var _county = _obj.find(".Js_IsCounty").val();
            var _checkPhone = /^0?1[3|4|5|8][0-9]\d{8}$/;
            if (_obj.find(".JscCheck").prop("checked")) {
                var _disclaimer = "是";
            } else {
                var _disclaimer = "否";
            }

            if (_name == "" || _name == $("#JscName2").find("input").attr("vals")) {
                SiteFunc.Alert("请输入您的姓名！");
                return;
            }
            //一般性别会默认选择一个，但是还是判断一下
            if (_sex == "" || _sex == undefined) {
                SiteFunc.Alert("请选择您的性别！");
                return;
            }
            if (_phone == "" || _phone == $("#JscPhone2").find("input").attr("vals")) {
                SiteFunc.Alert("请输入您的手机号！");
                return;
            }
            if (!_checkPhone.test(_phone)) {
                SiteFunc.Alert("请输入正确的11位手机号！");
                return;
            }
            if (_province == "" || _province == SiteFunc.ProvinceCityStr.Province) {
                SiteFunc.Alert("请选择您所在的省！");
                return;
            }
            if (_city == "" || _city == "城市") {
                SiteFunc.Alert("请选择您所在的市！");
                return;
            }
            if (_county == "" || _county == "区/县") {
                SiteFunc.Alert("请选择您所在的地区！");
                return;
            }
            //留资
            var _param = {
                "name": _name,
                "sex": _sex,
                "phone": _phone,
                "province": _province,
                "city": _city,
                "county": _county,
                "siteaddress": _siteAddress,
                "site": "PC",
                "source": location.href,
                "disclaimer": _disclaimer
            }
            _Submit = true;
            CmnMis.Itf.GetData("AddReservationdrive", _param, false, function (data) {
                if (data.IsSuccess == "1") {
                    SiteFunc.Alert("提交成功！");
                    $(".public_inf").val("");
                    _Submit = false;
                }
            });
        });
        
        //var _sex1 = $(".Selectsex").eq(0).attr("values");
        $(".JscSex").on("click", function () {
            $(this).parents(".JscSelectSexBox").find(".JscSex").removeClass("Select");
            $(this).addClass("Select");
        });
        $(".Js_lyf").on("keyup keydown change", function () {
            if ($(this).val().length > 10) {
                var _nowVal = $(this).val().substring(0, 11);
                $(this).val(_nowVal);
            }

        });
        //即刻预约试驾
        var _Submit = false;
        $(".Js_SubmitBtn").on("click", function () {
            if (_Submit) { return; }
            var _obj = $(this).parents(".Js_FuChen");
            var _siteAddress = _obj.attr("siteaddress");
            var _name = _obj.find(".Js_UserName").val();
            var _sex = _obj.find(".JscSelectSexBox").find(".JscSex.Select").attr("values");
            var _phone = _obj.find(".Js_Phone").val();
            var _email = _obj.find(".Js_Email").val();
            var _car_time = _obj.find(".JscBuyCarTime").val();
            var _province = _obj.find(".Js_IsProvince").val();
            var _city = _obj.find(".Js_IsCity").val();
            var _county = _obj.find(".Js_IsCounty").val();
            var _checkPhone = /^0?1[3|4|5|8][0-9]\d{8}$/;
            var _checkEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (_obj.find(".JscCheck").prop("checked")) {
                var _disclaimer = "是";
            } else {
                var _disclaimer = "否";
            }

            if (_name == "") {
                SiteFunc.Alert("请输入您的姓名！");
                return;
            }
            //一般性别会默认选择一个，但是还是判断一下
            if (_sex == "" || _sex == undefined) {
                SiteFunc.Alert("请选择您的性别！");
                return;
            }
            if (_phone == "") {
                SiteFunc.Alert("请输入您的手机号！");
                return;
            }
            if (!_checkPhone.test(_phone)) {
                SiteFunc.Alert("请输入正确的11位手机号！");
                return;
            }
            //邮箱可以为空，但是输入了格式一定要正确
            if (_email != "") {
                if (!_checkEmail.test(_email)) {
                    SiteFunc.Alert("请输入正确邮箱地址！");
                    return;
                }
            }
            if (_car_time == "" || _car_time == undefined) {
                SiteFunc.Alert("请选择您的计划购车时间");
                return;
            }
            if (_province == "" || _province == SiteFunc.ProvinceCityStr.Province) {
                SiteFunc.Alert("请选择您所在的省！");
                return;
            }
            if (_city == "" || _city == "城市") {
                SiteFunc.Alert("请选择您所在的市！");
                return;
            }
            if (_county == "" || _county == "区/县") {
                SiteFunc.Alert("请选择您所在的地区！");
                return;
            }
            //留资
            var _param = {
                "name": _name,
                "sex": _sex,
                "phone": _phone,
                "email": _email,
                "car_time": _car_time,
                "province": _province,
                "city": _city,
                "county": _county,
                "siteaddress": _siteAddress,
                "site": "PC",
                "source": location.href,
                "disclaimer": _disclaimer
            }
            _Submit = true;
            CmnMis.Itf.GetData("AddReservationdrive", _param, false, function (data) {
                if (data.IsSuccess == "1") {
                    SiteFunc.Alert("提交成功！");
                    $(".public_inf").val("");
                    _Submit = false;
                }
            });
        });
    });

});