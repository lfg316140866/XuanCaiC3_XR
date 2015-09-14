/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="Cmn.js" />
//东雪留资专用，可以在直接在页面上引用，并加上对应的ID及Class
var DongXue = {
    /// <summary>东雪留资接口</summary>
    /// <param name="Name" type="String">用户名</param>
    /// <param name="Sex" type="String">性别</param>
    /// <param name="Phone" type="String">电话号码</param>
    /// <param name="Email" type="String">邮箱</param>
    /// <param name="Plantime" type="String">计划购车时间</param>
    /// <param name="Province" type="String">省</param>
    /// <param name="City" type="String">市</param>
    /// <param name="County" type="String">区</param>
    /// <param name="Successfunc" type="String">成功后的回调</param>
    /// <returns type="BOOL" />
    SubmitDongXueUserInfo: function (Name, Sex, Phone, Email, Plantime, Province, City, County, Successfunc) {
        $.ajax({
            dataType: "jsonp",
            url: "http://c4l.dongfeng-citroen.com.cn/api_qingrenjie/userinfo_api.php?action=adduserinfo&key=lk3*3lflEDL3w0&name=" + encodeURI(Name) + "&sex=" + encodeURI(Sex) + "&phone=" + encodeURI(Phone) + "&email=" + encodeURI(Email) + "&plantime=" + encodeURI(Plantime) + "&province=" + encodeURI(Province) + "&city=" + encodeURI(City) + "&county=" + encodeURI(County) + "&site=" + encodeURI(DongXue.Site) + "&utm_source=" + encodeURI(location.href) + "",
            type: "GET",
            //成功后的方法,返回0就代表提交成功，-1则为失败
            success: function (result) {
                Successfunc & Successfunc(result);
            }
        });
    },
    //alert,需要时可以直接修改此处
    Alert: function (message, IsRight) {
        IsRight == undefined ? false : IsRight;
        if (!DongXue.IsMobile) {
            if (IsRight) { $("#MeIcon").removeClass("Select"); }
            else { $("#MeIcon").addClass("Select"); }
            $("#Message").html(message);
            $("#AlertPop").show();
            DongXue.CloseAlertPop();
        }
        else {
            alert(message);
        }
    },
    //关闭alert浮层
    CloseAlertPop: function () {
        $("#CloseAlert").off("click").on("click", function () {
            $("#AlertPop").hide();
        });
    },
    //留资来源,一般用页面标识。可以在页面加载方法里修改：DongXue.Site="C5专题PC页,2015购车不“油”豫"
    Site: "爱丽舍WTCC-PC版",
    //是否是手机
    IsMobile: false,
    Source: 1,
    FromSource:["预约试驾"],
    //留资,给对应的标签加上ID，然后在页面加载方法内调用DongXue.SubmitUserInfo()即可
    SubmitUserInfo: function () {
        $(".haogeBtn").on("click", function () {
            var _obj = $(this);
            if ($(_obj).attr("CanClick") == "no") { return; }
            DongXue.Source = $(_obj).attr("Source");
            $(_obj).attr("CanClick", "no");
            var _name = $("#Name" + DongXue.Source + "").val();
            var _sex = ($("#Sex" + DongXue.Source + " .Select").attr("values") == undefined ? "" : $("#Sex" + DongXue.Source + " .Select").attr("values"));
            var _email = ($("#Email" + DongXue.Source + "").val() == undefined ? "" : $("#Email" + DongXue.Source + "").val());
            var _plantime = ($("#Plantime" + DongXue.Source + "").val() == undefined ? "" : $("#Plantime" + DongXue.Source + "").val());//select，每个option都给value属性等于当前的值，一般都是固定的
            var _phone = $("#Phone" + DongXue.Source + "").val();
            var _province = $("#Province" + DongXue.Source + "").val();
            var _city = $("#City" + DongXue.Source + "").val();
            var _county = ($("#County" + DongXue.Source + "").val() == undefined ? "" : $("#County" + DongXue.Source + "").val());
            var _checkPhone = /^0?1[3|4|5|8][0-9]\d{8}$/;
            var _checkEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (_name == "") {
                DongXue.Alert("请输入您的姓名！");
                $(_obj).attr("CanClick", "yes");
                return;
            }
            //一般性别会默认选择一个，但是还是判断一下
            if ((_sex == "" || _sex == undefined) && !DongXue.IsMobile) {
                DongXue.Alert("请选择您的性别！");
                $(_obj).attr("CanClick", "yes");
                return;
            }
            if ((_plantime == "" || _plantime == undefined)&&!DongXue.IsMobile) {
                DongXue.Alert("请选择您的计划购车时间");
                $(_obj).attr("CanClick", "yes");
                return;
            }
            if (_phone == "") {
                DongXue.Alert("请输入您的手机号！");
                $(_obj).attr("CanClick", "yes");
                return;
            }
            if (!_checkPhone.test(_phone)) {
                DongXue.Alert("请输入正确的11位手机号！");
                $(_obj).attr("CanClick", "yes");
                return;
            }
            //邮箱可以为空，但是输入了格式一定要正确
            if (_email != "")
            {
                if (!_checkEmail.test(_email))
                {
                    DongXue.Alert("请输入正确邮箱地址！");
                    $(_obj).attr("CanClick", "yes");
                    return;
                }
            }
            if (_province == "" || _province == "请选择省份或直辖市") {
                DongXue.Alert("请选择您所在的省！");
                $(_obj).attr("CanClick", "yes");
                return;
            }
            if (_city == "" || _city == "城市") {
                DongXue.Alert("请选择您所在的市！");
                $(_obj).attr("CanClick", "yes");
                return;
            }
            if ((_county == "" || _county == "区/县") && !DongXue.IsMobile) {
                DongXue.Alert("请选择您所在的地区！");
                $(_obj).attr("CanClick", "yes");
                return;
            }
            DongXue.SubmitDongXueUserInfo(_name, _sex, _phone, _email, _plantime, _province, _city, _county, function (result) {
                DongXue.Alert("提交成功！",true);
                $(_obj).attr("CanClick", "yes");
                if (DongXue.IsMobile) {
                    AnimateFrame.IsLockScenes = false;
                }
                $("#LzFloat").hide();
            });
        });
    },
    //此方法需要引用provinceCity.js在head标签内,在页面加载方法内调用
    BindProvinceCity: function () {
        //需要给省、市、区三个Select加上name属性，分别为如下的"Province"、"City"、"County"
        new PCAS("Province1", "City1", "County1");
        new PCAS("Province2", "City2", "County2");
    },
    BindSexSelect: function () {
        $(".PublicManAndWomen").on("click", function () {
            $(this).parents(".sex").find(".PublicManAndWomen").removeClass("Select");
            $(this).addClass("Select");
        })
    }
}
