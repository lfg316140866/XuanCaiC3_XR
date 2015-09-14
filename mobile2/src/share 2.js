//2015.1.15
//-------------------------------------------------------定义当前站点URL，分享功能会调用到
var siteUrl='http://xuancaic3xr.dongfeng-citroen.com/';
//siteUrl = 'http://xuancaic3xr.nn.cagoe.com/'

//-------------------------------------------------------微信公众号授权
var wxContent={
    timeLink:siteUrl+'/mobile2/',
    friendLink:siteUrl+'/mobile2/',
    image:"/mobile2/images/share.jpg",
    title:'C3-XR土豆映像季',   //发送朋友标题
    friend:'C3-XR带你玩转土豆映像季，狂欢再升温，限量免费门票等你领',  //发送朋友描述
    timeline:'C3-XR带你玩转土豆映像季，狂欢再升温，限量免费门票等你领'  //发送朋友圈描述
};

weixin_sign();

//--------------------------------微信分享设置
function weixin_sign(){
    var localUrl = encodeURIComponent(window.location.href);
	
    $.ajax({
        type: "post",
        url:"http://suimojiama.dongfeng-citroen.com.cn/JsApiWXConfig.aspx",
        dataType: "jsonp",
		data: {
        	url: window.location.href.split("#")[0],
    	},
        success:function(resp){
			alert(55)
        	weixin_ready();
        	return
        	resp = eval ("(" + resp + ")");
			//alert('resp.nonceStr:' + resp.nonceStr)
            //if(resp && resp.code == 200)
            //{
                wx.config({
                    debug: true,
                    appId: resp.appId,
                    timestamp: resp.timestamp,
                    nonceStr: resp.nonceStr,
                    signature: resp.signature,
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'translateVoice',
                        'startRecord',
                        'stopRecord',
                        'onRecordEnd',
                        'playVoice',
                        'pauseVoice',
                        'stopVoice',
                        'uploadVoice',
                        'downloadVoice',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow',
                        'scanQRCode',
                        'chooseWXPay',
                        'openProductSpecificView',
                        'addCard',
                        'chooseCard',
                        'openCard'
                    ]
                });//end wx.config
                weixin_ready();//寰俊鍒嗕韩璁剧疆
           // }
        },
		error: function(e){
			console.log(e.debug)
		}
    });//end ajax
    weixin_ready();
}//end func

function weixin_ready(){
    wx.ready(function(){
        wx.showOptionMenu();//用微信“扫一扫”打开，optionMenu是off状态，默认开启
        wx_share();
    });//end wx.ready
}//end func

function wx_share(){
    setShareTimeline();
    setShareAppMessage();
}//end func

function reloadShare(desc, links)
{
	if(!!desc){
        wxContent.friend = wxContent.timeline = desc+',我正在参加C3-XR自由炫彩活动，这是我的大作，你也赶紧来参加吧，还有神秘大奖等你来拿';
    }
	wxContent.friendLink = wxContent.timeLink = siteUrl + '/mobile/view.html?img=' + siteUrl + links + '&musicId=' + musicId + '&txt=' + desc;
    setShareTimeline();
    setShareAppMessage();
}

function setShareTimeline()
{
    wx.onMenuShareTimeline({
        title: wxContent.timeline, // 分享标题
        link: wxContent.timeLink, // 分享链接
        imgUrl: wxContent.image, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
}

function setShareAppMessage()
{
    wx.onMenuShareAppMessage({
        title: wxContent.title, // 分享标题
        desc: wxContent.friend, // 分享描述
        link: wxContent.friendLink, // 分享链接
        imgUrl: wxContent.image, // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
}
