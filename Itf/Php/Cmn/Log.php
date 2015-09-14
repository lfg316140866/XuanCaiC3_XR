<?php
class Log{
	/// <summary>
	/// 写日志
	/// </summary>
	/// <param name="logFileName">文件名(服务器绝对路径)</param>
	/// <param name="strings">消息</param>
	private static function AddStrToFile($logFileName,$strings)
	{
		$_path = $logFileName;
	
		try {
			$_file = fopen($_path,"a, ccs=UTF-8");	
			
// 			if(mb_detect_encoding($strings,array("ASCII","GB2312","GBK","UTF-8"))=="UTF-8") {
// 				$strings = iconv("UTF-8","gb2312",$strings);
// 			}
			
			$strings .= "\r\n";
			
			fwrite($_file,$strings);			
			fclose($_file);
		}
		catch(Exception $ex){echo "错误信息：" . $ex->getMessage(); }
	}
	//--------------------------------------------------
	/// <summary>
    /// 写日志，保存在执行文件当前目录的log目录下
    /// </summary>
    /// <param name="txt">消息内容</param>
    public static function Write($txt)
    {
    	Log::WriteToFile("", $txt);
    }
    //-------------------------------------------------
    /// <summary>
    /// 写日志
    /// </summary>
    /// <param name="fileName">文件名（例如文件名为a,则生成文件名为"a_yyyyMMdd.log"）</param>
    /// <param name="txt">日志内容</param>
    public static function WriteToFile($fileName, $txt)
    {    	    
    	global $CONFIG;
    	
    	$_logPath = isset($CONFIG['LogPath'])?$CONFIG['LogPath']:'/Log';
    	$_logDir = $_SERVER['DOCUMENT_ROOT'] . $_logPath;
    	
    	if(!is_dir($_logDir)) { mkdir($_logDir, 0777); }
    	
    	if ($fileName == "") { $fileName = "Log"; }
    
    	$_fileName = $_logDir;
    
    	$_fileName .=  "/" . $fileName . "_" . date("Ymd") . ".log";
    	
    	Log::AddStrToFile($_fileName, "/*******************************************************************************************************");
    	Log::AddStrToFile($_fileName, "* DateTime: " . date("Y-m-d H:i:s") . "		IP: " . Request::GetIP() . 
    		"Brower: " . @$_SERVER['HTTP_USER_AGENT']);
    	Log::AddStrToFile($_fileName, "* Url : " . Request::GetUrl());
    	
    	Log::AddStrToFile($_fileName, $txt);
    	Log::AddStrToFile($_fileName, "*******************************************************************************************************/");
    	Log::AddStrToFile($_fileName, "");
    }
    //-------------------------------------------------
    //写警告日志
    public static function Warn($txt) {
    	global $CONFIG;
    	
    	if($CONFIG['DBConnType']=="PDO"){$appLog->warn("[BnWarn]".$txt);}
    	else{
    		Log::WriteToFile("warn", $txt);
    	}
    }
    //-------------------------------------------------
    //写报错日志
    public static function Error($txt) {
    	global $CONFIG;
    	
    	if($CONFIG['DBConnType']=="PDO"){
    		$appLog->warn("[BnError]".$txt);
    	}
    	else{
    		Log::WriteToFile("error", $txt);
    	}
    	 
    }
    //-------------------------------------------------
}
?>