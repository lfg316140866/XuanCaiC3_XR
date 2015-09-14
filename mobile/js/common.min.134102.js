
function browserRedirect() { 
var sUserAgent= navigator.userAgent.toLowerCase(); 
var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 
var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 
var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 
var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 
var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 
var bIsAndroid= sUserAgent.match(/android/i) == "android"; 
var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 
var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 

	} else { 
	document.location.href='error.html';

	} 
} 
//手机
//browserRedirect(); 
var zindex=100;
var ms = false;
var page = 0;
var speed=1000;
var bc = false;
$(function(){
	$(".btn_top").click(function(){
		//bc = true;
		$("body").append('<div class="overlay"></div>');
		$(".menus").fadeIn();
		$(".overlay").bind("click",function(){
			$(".menus").fadeOut();
			$(this).remove();
		});
	})

	$(".btn_story").click(function(){
		gotoga("chanpingushi");
	})
	$(".btn_koubei").click(function(){
		gotoga("tiyankoubei");
	})
	$(".btn_huodong").click(function(){
		gotoga("jingcaihuodong");
	})

	
	
	pagetotal = $(".jpage .pages").length;
	jph = $(".jpage").height();
	$(".jpage .pages").each(function(){
		zindex--;
		$(this).css("z-index",zindex);
	})
	$(".jpage")[0].addEventListener("touchmove", touchmove, false);
    $(".jpage")[0].addEventListener("touchstart", touchstart, false);
    $(".jpage")[0].addEventListener("touchend", touchend, false);
    function touchstart(){
		event.preventDefault();
		var touch1 = event.touches[0];
		sp = touch1.pageY;
	}
	function touchmove(event){
		var touch1 = event.touches[0];
		ph = touch1.pageY - sp;
		if(!ms){
			if(ph<0){
				//向上滑动
				if(page<pagetotal-1){
					$('.jpage').children().eq(page).animate({"height":"0"},speed);
					page++;
					if(page==pagetotal-1){
						$(".arrow_up").fadeOut();
					}
				}
			}else{
				//向下滑动
				$(".arrow_up").fadeIn();
				if(page>0){
					$('.jpage').children().eq(page-1).animate({"height":jph+"px"},speed);
					page--;
				}
			}	
		}
		ms = true;
	}
	function touchend(){
		ms = false;
	}
})




/////////////////////////cookies
var Cookies={
// utility function to retrieve an expiration date in proper
// format; pass three integer parameters for the number of days, hours,
// and minutes from now you want the cookie to expire (or negative
// values for a past date); all three parameters are required,
// so use zeros where appropriate
getExpDate:function(days, hours, minutes) {
    var expDate = new Date( );
    if (typeof days == "number" && typeof hours == "number" && 
        typeof hours == "number") {
        expDate.setDate(expDate.getDate( ) + parseInt(days));
        expDate.setHours(expDate.getHours( ) + parseInt(hours));
        expDate.setMinutes(expDate.getMinutes( ) + parseInt(minutes));
        return expDate.toGMTString( );
    }
},  
// utility function called by getCookie( )
getCookieVal:function(offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1) {
        endstr = document.cookie.length;
    }
    return unescape(document.cookie.substring(offset, endstr));
},
// primary function to retrieve cookie by name
getCookie:function(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            return Cookies.getCookieVal(j);
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break; 
    }
    return "";
},
getCookies:function(){
	 _Cookie = new Array();
	 if(document.cookie.indexOf(";")!=-1){
          var _sp,_name,_tp,_tars,_tarslength; 
          var _item=document.cookie.split("; "); 
          var _itemlength=_item.length; 
          for(i=0;i<_itemlength;i++){
          	_sp = _item[i].split("=");
          	_name=_sp[0];
          	_value =_sp[1];
          	_coo = new Array();
          	_coo['name']=_name;
          	_coo['value']=_value;
          	_Cookie.push(_coo);
          }
     } 
     return _Cookie;  	
},
// store cookie value with optional details as needed
setCookie:function(name, value, expires, path, domain, secure) {
	if(expires)
	{
		expires = new Date((new Date()).getTime() + expires * 1000);
		expires=expires.toGMTString();
	}
    document.cookie = name + "=" + escape (value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
},
// remove the cookie by setting ancient expiration date
deleteCookie:function(name,path,domain) {
    if (Cookies.getCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
},
clearCookie:function(){
	cookies = Cookies.getCookies();
	for(i=0;i<cookies.length;i++){
		Cookies.deleteCookie(cookies[i]['name']);
	}
},
getCookieString:function(){
	return document.cookie;	
}
}



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-57961519-2', 'auto');
ga('send', 'pageview');

function gotoga(url) {
  ga('send', 'event', url, 'click'); 
}