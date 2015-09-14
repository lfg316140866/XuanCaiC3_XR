<?php
/**
* RegexMatch 2013-9-28
* RegexMatchIndexList 2013-9-28
* RegexReplace 2013-9-28
***********************************************************/
class Str{
	//--------------------------------------------
	/**
	 * @return 匹配的字符串
	 * @param String $regex 正则表达式
	 * @param String $str 需要匹配的字符串
	 */
	public static function RegexMatch($regex,$str){
		if(@preg_match($regex,$str,$matches)!=false){
			return $matches[0];
		}else{
			return "";
		}
	}
	//--------------------------------------------
	/**
	 * @return 匹配的字符串数组
	 * @param  $regex 正则表达式
	 * @param  $str 匹配的字符串
	 */
	public static function RegexMatchIndexList($regex,$str){
		if(preg_match_all($regex,$str,$_returnList,PREG_OFFSET_CAPTURE)){
			$_indexs = array();//
			if(count($_returnList)>0){
				foreach($_returnList as $_list){
					if(count($_list)>0){
						foreach($_list as $_str){
							if($_str!=""){
								$_index_info = array();
								$_index_info['length'] = strlen($_str[0]);
								$_index_info['index'] = $_str[1];
								$_index_info['val'] = $_str[0];
								$_indexs[] = $_index_info;
							}
						}
					}
					
				}
			}
			 
			return $_indexs;
		}else{
			return null;
		}
	}
	//--------------------------------------------
	/**
	 * @return 替换之后的字符串
	 * @param  $_str 匹配的字符串
	 * @param  $_regex 正则表达式
	 * @param  $$_replace 替换的字符串
	 */
	public static function RegexReplace($_str, $_regex,$_replace){
		$_result = Str::RegexMatch($_regex,$_str);
		$_result = str_replace($_result,$_replace,$_str);
		return $_result;
	}
	//--------------------------------------------
	/**
	 * 把json格式的字符串转成数组
	 * @param string _str json格式的字符串
	 * @return array 返回数组
	 */
	public static function json_to_array($str) {
		$_arr=array();
		
		if($str==null || $str=="") { return $_arr; }
		
		if (is_string($str)) { $str = json_decode($str); }
				
		foreach($str as $k=>$v) {
			if(is_object($v) || is_array($v)){ 
				$_arr[$k]=Str::json_to_array($v);
			}
			else{ $_arr[$k]=$v; }
		}
			
		return $_arr;
	}
	//--------------------------------------------
	/**
	 * 找到引号的位置
	 * @param string $str 字符串
	 * @param string $quotation 要查找的字符串（单引号或双引号）
	 * @param int $startPos 开始查找的位置
	 */
	private static function PosQuotation($str,$quotation,$startPos=0) {
		$_loc = 0;
	
		for(;;) {
			$_loc = strpos($str,$quotation,$startPos);
			
			if($_loc==false) { return false; }
			
			if($_loc>0 && substr($str,$_loc-1,1)=="\\") { 
				if($_loc-2>=0 && substr($str,$_loc-2,1)!="\\"){ 
					$startPos =  $_loc+1; 
					continue;
				}
			}
			
			if($quotation=="'" && $_loc+1<strlen($str) && substr($str,$_loc+1,1)=="'"){ 
				if($_loc+2<strlen($str)) { 
					$startPos =  $_loc+2; 
					continue;
				}
				else { return false; }
			}
			
			return $_loc; 
		}
	}
	//--------------------------------------------
	/**
	 * 把双引号和单引号中的字符串替换掉
	 * @param string $str 原字符串
	 * @param array $strArray 存放双或单引号中的子字符串列表
	 * @return string 返回被替换的字符串
	 */
	public static function  WipeString($str,&$strArray) {	
		//先去双引号
		$_Loc = 0;
		$_Loc1 = 0;
		$_strNo = 0;
		$_retStr = "";
	
		//去双引号
		$_allStr = $str;
	
		for(;;) {
			$_Loc = Str::PosQuotation($_allStr, "\"");
			if($_Loc==false) {
				break;
			}
				
			$_Loc1 = Str::PosQuotation($_allStr, "\"",$_Loc+1);
			if($_Loc1==false) {
				break;
			}
				
			$_tmpStr = substr($_allStr,$_Loc,$_Loc1-$_Loc+1);
			$strArray[] = $_tmpStr;
				
			$_retStr .= substr($_allStr,0,$_Loc)."#str".$_strNo."#";
			$_strNo += 1;
				
			$_allStr = substr($_allStr,$_Loc1+1);
		}
	
		$_retStr .= $_allStr;
	
		//去单引号
		$_allStr = $_retStr;
		$_retStr = "";
	
		for(;;) {
			$_Loc = Str::PosQuotation($_allStr, "'");
			
			if($_Loc==false) { break; }
	
			$_Loc1 = Str::PosQuotation($_allStr, "'",$_Loc+1);
			
			if($_Loc1==false) { break; }
			
	
			$_tmpStr = substr($_allStr,$_Loc,$_Loc1-$_Loc+1);
			$strArray[] = $_tmpStr;
	
			$_retStr .= substr($_allStr,0,$_Loc)."#str".$_strNo."#";
			$_strNo += 1;
	
			$_allStr = substr($_allStr,$_Loc1+1);
		}
	
		$_retStr .= $_allStr;
	
		return $_retStr;
	}
	//--------------------------------------------
	/**
	 * 根据引号中的子字符串数组还原字符串 
	 * @param string $str 字符串
	 * @param array $strArray 存放双或单引号中的子字符串列表
	 * @return string 还原后的字符串
	 */
	public static function RecoverString($str,$strArray) {
		for ($_i = 0; $_i < count($strArray); $_i++) {
			$str =	str_replace("#str" . ($_i) . "#",$strArray[$_i], $str);
		}
		
		//需要做两遍，因为可能字符串嵌套
		for ($_i = 0; $_i < count($strArray); $_i++) {
			$str =	str_replace("#str" . ($_i) . "#",$strArray[$_i], $str);
		}
	
		return $str;
	}
	//--------------------------------------------
	/**
	 * 字符串切割 从后之前切割 和系统split相反
	 * @param String  $str  要切割的字符串
	 * @param int     $len  小切割的的长度
	 * @return 返回切割数组
	 */
	public static function StrRsplit($str, $len = 1){
		if($str == null || $str == false || $str == '') return false;
		$strlen = strlen($str);
		if($strlen <= $len) return array($str);
		$headlen = $strlen % $len;
		if($headlen == 0) {
			return str_split($str, $len);
		}
		$return = array(substr($str, 0, $headlen));
		return array_merge($return, str_split(substr($str, $headlen), $len));
	}
	//--------------------------------------------
	/**
	 * 加密字符串
	 * @param $string： 明文 或 密文
 	 * @param $operation：DECODE表示解密,其它表示加密
 	 * @param $key： 密匙
	 * @return  返回INCODE str
	 */
	public static function  Authcode($string, $operation = 'DECODE', $key = '') {
		// 动态密匙长度，相同的明文会生成不同密文就是依靠动态密匙
		$ckey_length = 4;// 密匙
		$key = $key==""? "xmnfqaetsdngkasdtqweltgdshgaethqkretykalskdhtwerthkdjhgbaw":$key;
		$key_length = strlen($key);
		$string = $operation == 'DECODE' ? base64_decode($string) :  $string;
		$string_length = strlen($string);
		$result = '';
		// 核心加解密部分
		for ($j = $i = 0; $i < $string_length; $i++) {
			// 从密匙簿得出密匙进行异或，再转成字符
			$result .= chr(ord($string[$i]) ^ ord($key[$j]));
			$j++;
			if($j>=$key_length ){
				$j=0;
			}
		}
	 
		if ($operation == 'DECODE') { 
			
			return $result;
			
		} else {
			//	echo $result;
			// 因为加密后的密文可能是一些特殊字符，复制过程可能会丢失，所以用base64编码
		return   base64_encode($result);
		}
	 }
	 
	 //--------------------------------------------
	 /**
	  * 汉子变拼音
	  * @param $string：字符串
	  * @param $_Code 编码格式
	  * @return  返回拼音
	  */
	public static function Pinyin($_String, $_Code='gb2312')
	 {
	 	$_DataKey = "a|ai|an|ang|ao|ba|bai|ban|bang|bao|bei|ben|beng|bi|bian|biao|bie|bin|bing|bo|bu|ca|cai|can|cang|cao|ce|ceng|cha".
	 			"|chai|chan|chang|chao|che|chen|cheng|chi|chong|chou|chu|chuai|chuan|chuang|chui|chun|chuo|ci|cong|cou|cu|".
	 			"cuan|cui|cun|cuo|da|dai|dan|dang|dao|de|deng|di|dian|diao|die|ding|diu|dong|dou|du|duan|dui|dun|duo|e|en|er".
	 			"|fa|fan|fang|fei|fen|feng|fo|fou|fu|ga|gai|gan|gang|gao|ge|gei|gen|geng|gong|gou|gu|gua|guai|guan|guang|gui".
	 			"|gun|guo|ha|hai|han|hang|hao|he|hei|hen|heng|hong|hou|hu|hua|huai|huan|huang|hui|hun|huo|ji|jia|jian|jiang".
	 			"|jiao|jie|jin|jing|jiong|jiu|ju|juan|jue|jun|ka|kai|kan|kang|kao|ke|ken|keng|kong|kou|ku|kua|kuai|kuan|kuang".
	 			"|kui|kun|kuo|la|lai|lan|lang|lao|le|lei|leng|li|lia|lian|liang|liao|lie|lin|ling|liu|long|lou|lu|lv|luan|lue".
	 			"|lun|luo|ma|mai|man|mang|mao|me|mei|men|meng|mi|mian|miao|mie|min|ming|miu|mo|mou|mu|na|nai|nan|nang|nao|ne".
	 			"|nei|nen|neng|ni|nian|niang|niao|nie|nin|ning|niu|nong|nu|nv|nuan|nue|nuo|o|ou|pa|pai|pan|pang|pao|pei|pen".
	 			"|peng|pi|pian|piao|pie|pin|ping|po|pu|qi|qia|qian|qiang|qiao|qie|qin|qing|qiong|qiu|qu|quan|que|qun|ran|rang".
	 			"|rao|re|ren|reng|ri|rong|rou|ru|ruan|rui|run|ruo|sa|sai|san|sang|sao|se|sen|seng|sha|shai|shan|shang|shao|".
	 			"she|shen|sheng|shi|shou|shu|shua|shuai|shuan|shuang|shui|shun|shuo|si|song|sou|su|suan|sui|sun|suo|ta|tai|".
	 			"tan|tang|tao|te|teng|ti|tian|tiao|tie|ting|tong|tou|tu|tuan|tui|tun|tuo|wa|wai|wan|wang|wei|wen|weng|wo|wu".
	 			"|xi|xia|xian|xiang|xiao|xie|xin|xing|xiong|xiu|xu|xuan|xue|xun|ya|yan|yang|yao|ye|yi|yin|ying|yo|yong|you".
	 			"|yu|yuan|yue|yun|za|zai|zan|zang|zao|ze|zei|zen|zeng|zha|zhai|zhan|zhang|zhao|zhe|zhen|zheng|zhi|zhong|".
	 			"zhou|zhu|zhua|zhuai|zhuan|zhuang|zhui|zhun|zhuo|zi|zong|zou|zu|zuan|zui|zun|zuo";
	 	$_DataValue = "-20319|-20317|-20304|-20295|-20292|-20283|-20265|-20257|-20242|-20230|-20051|-20036|-20032|-20026|-20002|-19990".
	 			"|-19986|-19982|-19976|-19805|-19784|-19775|-19774|-19763|-19756|-19751|-19746|-19741|-19739|-19728|-19725".
	 			"|-19715|-19540|-19531|-19525|-19515|-19500|-19484|-19479|-19467|-19289|-19288|-19281|-19275|-19270|-19263".
	 			"|-19261|-19249|-19243|-19242|-19238|-19235|-19227|-19224|-19218|-19212|-19038|-19023|-19018|-19006|-19003".
	 			"|-18996|-18977|-18961|-18952|-18783|-18774|-18773|-18763|-18756|-18741|-18735|-18731|-18722|-18710|-18697".
	 			"|-18696|-18526|-18518|-18501|-18490|-18478|-18463|-18448|-18447|-18446|-18239|-18237|-18231|-18220|-18211".
	 			"|-18201|-18184|-18183|-18181|-18012|-17997|-17988|-17970|-17964|-17961|-17950|-17947|-17931|-17928|-17922".
	 			"|-17759|-17752|-17733|-17730|-17721|-17703|-17701|-17697|-17692|-17683|-17676|-17496|-17487|-17482|-17468".
	 			"|-17454|-17433|-17427|-17417|-17202|-17185|-16983|-16970|-16942|-16915|-16733|-16708|-16706|-16689|-16664".
	 			"|-16657|-16647|-16474|-16470|-16465|-16459|-16452|-16448|-16433|-16429|-16427|-16423|-16419|-16412|-16407".
	 			"|-16403|-16401|-16393|-16220|-16216|-16212|-16205|-16202|-16187|-16180|-16171|-16169|-16158|-16155|-15959".
	 			"|-15958|-15944|-15933|-15920|-15915|-15903|-15889|-15878|-15707|-15701|-15681|-15667|-15661|-15659|-15652".
	 			"|-15640|-15631|-15625|-15454|-15448|-15436|-15435|-15419|-15416|-15408|-15394|-15385|-15377|-15375|-15369".
	 			"|-15363|-15362|-15183|-15180|-15165|-15158|-15153|-15150|-15149|-15144|-15143|-15141|-15140|-15139|-15128".
	 			"|-15121|-15119|-15117|-15110|-15109|-14941|-14937|-14933|-14930|-14929|-14928|-14926|-14922|-14921|-14914".
	 			"|-14908|-14902|-14894|-14889|-14882|-14873|-14871|-14857|-14678|-14674|-14670|-14668|-14663|-14654|-14645".
	 			"|-14630|-14594|-14429|-14407|-14399|-14384|-14379|-14368|-14355|-14353|-14345|-14170|-14159|-14151|-14149".
	 			"|-14145|-14140|-14137|-14135|-14125|-14123|-14122|-14112|-14109|-14099|-14097|-14094|-14092|-14090|-14087".
	 			"|-14083|-13917|-13914|-13910|-13907|-13906|-13905|-13896|-13894|-13878|-13870|-13859|-13847|-13831|-13658".
	 			"|-13611|-13601|-13406|-13404|-13400|-13398|-13395|-13391|-13387|-13383|-13367|-13359|-13356|-13343|-13340".
	 			"|-13329|-13326|-13318|-13147|-13138|-13120|-13107|-13096|-13095|-13091|-13076|-13068|-13063|-13060|-12888".
	 			"|-12875|-12871|-12860|-12858|-12852|-12849|-12838|-12831|-12829|-12812|-12802|-12607|-12597|-12594|-12585".
	 			"|-12556|-12359|-12346|-12320|-12300|-12120|-12099|-12089|-12074|-12067|-12058|-12039|-11867|-11861|-11847".
	 			"|-11831|-11798|-11781|-11604|-11589|-11536|-11358|-11340|-11339|-11324|-11303|-11097|-11077|-11067|-11055".
	 			"|-11052|-11045|-11041|-11038|-11024|-11020|-11019|-11018|-11014|-10838|-10832|-10815|-10800|-10790|-10780".
	 			"|-10764|-10587|-10544|-10533|-10519|-10331|-10329|-10328|-10322|-10315|-10309|-10307|-10296|-10281|-10274".
	 			"|-10270|-10262|-10260|-10256|-10254";
	 	$_TDataKey = explode('|', $_DataKey);
	 	$_TDataValue = explode('|', $_DataValue);
	 	$_Data = (PHP_VERSION>='5.0') ? array_combine($_TDataKey, $_TDataValue) : Str::_Array_Combine($_TDataKey, $_TDataValue);
	 	arsort($_Data);
	 	reset($_Data);
	 	
	 	if($_Code != 'gb2312') $_String = Str::_U2_Utf8_Gb($_String);
	 	
	 	$_Res = '';
	 	
	 	for($i=0; $i<strlen($_String); $i++)
	 	{
	 		$_P = ord(substr($_String, $i, 1));
	 		if($_P>160) {
	 		$_Q = ord(substr($_String, ++$i, 1)); $_P = $_P*256 + $_Q - 65536;
	 	}
	 	
	 	$_Res .= Str::_Pinyin($_P, $_Data);
	 	
	 }
	 
	 return preg_replace("/[^a-z0-9]*/", '', $_Res);
	 
	 }
	//--------------------------------------------
	private static function _Pinyin($_Num, $_Data)
	 {
		 if ($_Num>0 && $_Num<160 ) return chr($_Num);
		 elseif($_Num<-20319 || $_Num>-10247) return '';
		 else {
			 foreach($_Data as $k=>$v){
			 	if($v<=$_Num) break;
			 }
		 return $k;
		 }
	 }
	//--------------------------------------------
	private static function _U2_Utf8_Gb($_C)
	 	{
	 	$_String = '';
	 	if($_C < 0x80) $_String .= $_C;
	 	elseif($_C < 0x800)
	 	{
	 	$_String .= chr(0xC0 | $_C>>6);
	 	$_String .= chr(0x80 | $_C & 0x3F);
	 	}elseif($_C < 0x10000){
	 	$_String .= chr(0xE0 | $_C>>12);
	 	$_String .= chr(0x80 | $_C>>6 & 0x3F);
	 	$_String .= chr(0x80 | $_C & 0x3F);
	 	} elseif($_C < 0x200000) {
	 	$_String .= chr(0xF0 | $_C>>18);
	 	$_String .= chr(0x80 | $_C>>12 & 0x3F);
	 	$_String .= chr(0x80 | $_C>>6 & 0x3F);
	 	$_String .= chr(0x80 | $_C & 0x3F);
	 	}
	 	return iconv('UTF-8', 'GB2312', $_String);
	 }
	private static function _Array_Combine($_Arr1, $_Arr2)
	 {
		 for($i=0; $i<count($_Arr1); $i++) $_Res[$_Arr1[$i]] = $_Arr2[$i];
		 return $_Res;
	 }
	 //--------------------------------------------
	 /**
	  * 自动识别编码转换器
	  * @param $string：字符串
	  * @param $outEncoding 最终要转换的编码
	  * @return  字符串
	  */
	 
	public static function safeEncoding($string,$outEncoding = 'UTF-8') {
	 	$encoding = "UTF-8";
	 	
	 	for($i=0;$i<strlen($string);$i++) {
	 		if(ord($string{$i})<128)
	 		continue;
	 
	 		if((ord($string{$i})&224)==224) {
	 		//第一个字节判断通过
	 			$char = $string{++$i};
	 			
	 			if((ord($char)&128)==128) {
	 				//第二个字节判断通过
	 				$char = $string{++$i};
	 			
	 				if((ord($char)&128)==128) {
	 					$encoding = "UTF-8";
	 					break;
	 				}
	 			}
	 		}
	 		
	 		if((ord($string{$i})&192)==192) {
	 			//第一个字节判断通过
	 			$char = $string{++$i};
	 			
	 			if((ord($char)&128)==128) {
	 				//第二个字节判断通过
	 				$encoding = "GB2312";
	 				break;
	 			}
	 		}
	 	}
	 
	 	if(strtoupper($encoding) == strtoupper($outEncoding)) {return $string;}
	 	else { return iconv($encoding,$outEncoding,$string); }
	 }
	 
	 //--------------------------------------------
 	/// <summary>
 	/// 在字符串的满足正则表达式的最后一个子串的位置
 	/// </summary>
 	/// <param name="str"></param>
 	/// <param name="regex"></param>
 	/// <returns></returns>
 	public static function LastIndexOf($str,$regex) {
 		$_strList = str::RegexMatchIndexList($regex,$str);
 		
 		if (count($_strList) > 0) {
 			return $_strList[count($_strList) - 1]['index'];
 		}
 		else { return -1; }
 	}
 	//--------------------------------------------
}
?>