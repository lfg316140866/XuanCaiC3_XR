<?php


class Request{
	/// <summary>
	/// 接收传值
	/// </summary>
	/// <param name="varName">参数名称</param>
	/// <returns>参数对应的值</returns>
	static public function Get($varName,$isNullReturnNull=false,$isNeedSafeProcess=true)
	{
		if(isset($_REQUEST[$varName])) {
			$_val = $_REQUEST[$varName];
			
			//这个地方不能加反斜杠，会影响正常的斜杠
			//会自动加上斜杠，::: 配置中magic_quotes_gpc = on 时将自动进行转义（默认是on）
			if (get_magic_quotes_gpc()==1){ $_val=stripcslashes($_val); }		

			//$_val=stripcslashes($_val);
			
			if($isNeedSafeProcess) { return Safe::sqlStr($_val); }
			else { return $_val; }
		}
		else { 
			if($isNullReturnNull){
				//if(array_key_exists($varName,$_REQUEST)) { return ""; } //说明存在这个参数
				//else{ return null; }
				return null;
			}else{
				return "";
			}
			
		}
	}
	
	//获取客户端ip地址
	static public function GetIP() {
		//php获取ip的算法
		if ($_SERVER["REMOTE_ADDR"]) {
			$ip = $_SERVER["REMOTE_ADDR"];
		}
		elseif ($_SERVER["HTTP_X_FORWARDED_FOR"]) {
			$ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
		}
		elseif ($_SERVER["HTTP_CLIENT_IP"]) {
			$ip = $_SERVER["HTTP_CLIENT_IP"];
		}		
		elseif (getenv("HTTP_X_FORWARDED_FOR")) {
			$ip = getenv("HTTP_X_FORWARDED_FOR");
		}
		elseif (getenv("HTTP_CLIENT_IP")) {
			$ip = getenv("HTTP_CLIENT_IP");
		}
		elseif (getenv("REMOTE_ADDR")) {
			$ip = getenv("REMOTE_ADDR");
		}
		else { $ip = "Unknown"; }
		
		
		return $ip ;
	}
	
	//获取当前页面的url
	static  public function GetUrl() {
		$_pageURL = 'http';
				
		//用isset判断避免有错误提示
		if (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] == "on") { $_pageURL .= "s"; }
		
		$_pageURL .= "://";
		
		if ($_SERVER["SERVER_PORT"] != "80") {
			$_pageURL .= $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"] . 
				$_SERVER["REQUEST_URI"];
		}
		else { $_pageURL .= $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"]; }
		
		return $_pageURL;
	}
}
?>