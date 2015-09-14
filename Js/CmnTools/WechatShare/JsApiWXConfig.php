<?php
require_once('WXConfig.php');
session_start(); 
$jssdk = new JSSDK($WXConfig["AppId"], $WXConfig["AppSecret"]);

@$url = $_GET["url"];
@$debug =  $_GET["Debug"];
$isDebug = false;
if (isset($debug) && $debug=="1") {
  $isDebug = true;
}

if (!isset($url)) {
	$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
}

$jsApiWXConfig = $jssdk->getJsApiWXConfig($url, $isDebug);

class JSSDK {
  private $appId;
  private $appSecret;

  public function __construct($appId, $appSecret) {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
  }

  public function getJsApiWXConfig($url, $debug=false) {
	$signPackage = $this->getSignPackage($url);
	$_debug = "false";
	if ($debug) {
	$_debug = "true";
	}
	echo "wx.config({debug:".$_debug.",appId:'".$signPackage["appId"]."',timestamp:".$signPackage["timestamp"].",nonceStr:'".$signPackage["nonceStr"]."',signature:'".$signPackage["signature"]."',jsApiList:['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'translateVoice', 'getNetworkType', 'openLocation', 'getLocation', 'hideOptionMenu', 'showOptionMenu', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'closeWindow', 'scanQRCode', 'chooseWXPay', 'openProductSpecificView', 'addCard', 'chooseCard', 'openCard' ]});";
  }

  public function getSignPackage($url) {
    $jsapiTicket = $this->getJsApiTicket();
    //$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $timestamp = time();
    $nonceStr = $this->createNonceStr();

    // 这里参数的顺序要按照 key 值 ASCII 码升序排序
    $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

    $signature = sha1($string);

    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string
    );
    return $signPackage; 
  }

  private function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }

  private function getJsApiTicket() {
    // jsapi_ticket 应该全局存储与更新，以下代码以写入到文件中做示例
    $data = json_decode("{\"jsapi_ticket\":\"\",\"expire_time\":0}");
	  try {
		  @$data_2 = json_decode(file_get_contents("jsapi_ticket.json"));
      $data = $data_2;
	  } catch(Exception $ex) {
	
	  }
    if ($data->expire_time < time()) {
      $accessToken = $this->getAccessToken();
      $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";
      $res = json_decode($this->httpGet($url));
      $ticket = $res->ticket;
      if ($ticket) {
        $data->expire_time = time() + 7000;
        $data->jsapi_ticket = $ticket;
		$fp = fopen("jsapi_ticket.json", "w");
        fwrite($fp, json_encode($data));
        fclose($fp);
      }
    } else {
      $ticket = $data->jsapi_ticket;
    }

    return $ticket;
  }

  private function getAccessToken() {
    // access_token 应该全局存储与更新，以下代码以写入到文件中做示例
	  $data = json_decode("{\"access_token\":\"\",\"expire_time\":0}");
	  try {
		  @$data_2 = json_decode(file_get_contents("access_token.json"));
      $data = $data_2;
	  } catch(Exception $ex) {
	
	  }
    if ($data->expire_time < time()) {
      $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$this->appId&secret=$this->appSecret";
      $res = json_decode($this->httpGet($url));
      $access_token = $res->access_token;
      if ($access_token) {
        $data->expire_time = time() + 7000;
        $data->access_token = $access_token;
		    $fp = fopen("access_token.json", "w");
        fwrite($fp, json_encode($data));
        fclose($fp);
      }
    } else {
      $access_token = $data->access_token;
    }
    return $access_token;
  }

  private function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_URL, $url);

    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
  }
}
?>