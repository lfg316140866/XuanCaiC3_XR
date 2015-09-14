<?php
class Safe{
	/// <summary>
	/// 过滤SQL字符串
	/// </summary>
	/// <param name="str">源字符串</param>
	/// <returns>过滤单引号后的字符串</returns>
	static public function sqlStr($str)
	{		
		//magic_quotes_gpc 默认为打开，所以在单引号前面加了斜杠，这边为了兼容两种配置，做了调整 at 2015/5/22
		//$str = str_replace("\\'", "{Quote}", $str);
		$str = str_replace("\\", "\\\\", $str);
		$str = str_replace("'", "''", $str);
		//$str = str_replace("{Quote}","\\\\''",  $str);
				
		return $str;
	}
	//-------------------------------
	///获取客户端ip地址
	static public function getIP(){
		$ip=false;
		if(!empty($_SERVER["HTTP_CLIENT_IP"])){
			$ip = $_SERVER["HTTP_CLIENT_IP"];
		}
		if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
			$ips = explode (", ", $_SERVER['HTTP_X_FORWARDED_FOR']);
			if ($ip) {
				array_unshift($ips, $ip); $ip = FALSE;
			}
			for ($i = 0; $i < count($ips); $i++) {
				if (!eregi ("^(10|172\.16|192\.168)\.", $ips[$i])) {
					$ip = $ips[$i];
					break;
				}
			}
		}
		return ($ip ? $ip : $_SERVER['REMOTE_ADDR']);
	}
	//-------------------------------
}
?>