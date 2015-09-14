<?php
/**
* RegexMatch 2013-9-28
* RegexMatchIndexList 2013-9-28
* RegexReplace 2013-9-28
***********************************************************/
class Net{
	//获取远程网页数据
	public static function GetRemoteData($url){
		$_fp = fopen($url, "r");
		
		if($_fp==false) { return ""; }
		
		$_fc = fread($_fp, 8192);
		$_content = "";
		
		while($_fc){
			$_content .= $_fc;
			$_fc = fread($_fp, 8192);
		}
		
		fclose($_fp);
		
		if (empty($_content)){ return ""; }
		
		return $_content;
	}
}
?>