<?php

header("Content-Type: text/html; charset=UTF-8");

$Method = @$_GET["method"];


$Result = json_encode(array("return"=>0,"state"=>"500","message"=>"A program or a network error"));

if(isset($Method)){

	$Result = RunMethod("Upload",$Method);
}

echo $Result;


class Upload{

	/**
	 * 文件上传
	 * @return string
	 */
	public static function File(){
		
		//表单文件域name
		$_inputName=@$_REQUEST['inputFileName'];
		//base64位图片字节
		$_imageData=isset($_REQUEST[$_inputName])?$_REQUEST[$_inputName]:'';
		//文件最大大小 默认3m
		$_limitSize =isset($_REQUEST['limitSize'])?$_REQUEST['limitSize']*10485760:3*10485760;
		//上传文件根目录
		$_rootPath = isset($_REQUEST['rootPath'])?$_REQUEST['rootPath']:"/Upload";
		 //是否保存真实文件名
		$_isSaveRealFileName = isset($_REQUEST['isSaveRealFileName'])?$_REQUEST['isSaveRealFileName']:"0";
 		//上传文件后缀
		$_suffix=isset($_REQUEST['suffix'])?$_REQUEST['suffix']:'txt,rar,zip,jpg,jpeg,gif,png,swf,wmv,avi,wma,mp3,mid';

		
	    //临时文件
		$_tempPath=dirname(dirname(dirname(__FILE__)))."/".$_rootPath.'/'.date("YmdHis").mt_rand(10000,99999).'.tmp';
		//文件名称
		$_fileName='';
		//回执数据
		$_receiptData = array(
				"state"=>"0",
				"message"=>"未捕获的错误！保存失败",
				"path"=>"","name"=>"",
				"err"=>"未捕获的错误！保存失败",
				"msg"=>array( "url"=>"", "localname"=>"", "id"=>"1" )
				);


		//创建目录
		if(Upload::CreateFolder(dirname(dirname(dirname(__FILE__)))."/".$_rootPath) == false){
			$_receiptData["message"] = "目录创建失败！可能是目录名称不对或者是没有权限！";
				$_receiptData["err"] = "目录创建失败！可能是目录名称不对或者是没有权限！";
			return Upload::jsonEncode($_receiptData);
		}

		//----------------标准表单式上传
	    if((is_string($_imageData)&& $_imageData!="" ) || isset($_FILES[$_inputName])){

			//如果有图片是base64位上传的资源
			if(is_string($_imageData) && $_imageData!=""){

				if(strpos($_imageData,"base64")!=false){
					
					$_base64Data = substr($_imageData,21);
					  
					$_fileName="temp.".substr($_imageData,11, strpos($_imageData,";")-11);
					
					$_imageData = base64_decode(str_replace(" ","+",$_base64Data));
					
					file_put_contents($_tempPath, $_imageData);
					
				}
				else{
					$_receiptData["err"]=$_receiptData["message"]='无文件上传';
					
					return Upload::jsonEncode($_receiptData);
				}
					
			}
			else{
				
				//文件
				$_file=@$_FILES[$_inputName];
					
				if(!isset($_file)){
					$_receiptData["err"]=$_receiptData["message"]='文件域的name错误';
					return Upload::jsonEncode($_receiptData);
				}
				elseif(!empty($_file['error'])){
					switch($_file['error'])
					{
						case '1':
							$_receiptData["err"]=$_receiptData["message"] = '文件大小超过了php.ini定义的upload_max_filesize值';
							break;
						case '2':
							$_receiptData["err"]=$_receiptData["message"] = '文件大小超过了HTML定义的MAX_FILE_SIZE值';
							break;
						case '3':
							$_receiptData["err"]=$_receiptData["message"] = '文件上传不完全';
							break;
						case '4':
							$_receiptData["err"]=$_receiptData["message"] = '无文件上传';
							break;
						case '6':
							$_receiptData["err"]=$_receiptData["message"] = '缺少临时文件夹';
							break;
						case '7':
							$_receiptData["err"]=$_receiptData["message"] = '写文件失败';
							break;
						case '8':
							$_receiptData["err"]=$_receiptData["message"] = '上传被其它扩展中断';
							break;
						case '999':
						default:
							$_receiptData["err"]=$_receiptData["message"] = '无有效错误代码';
					}
				
					return Upload::jsonEncode($_receiptData);
				
				}
				else if(empty($_file['tmp_name']) || $_file['tmp_name'] == 'none'){
					$_receiptData["err"]=$_receiptData["message"] = '无文件上传';
					return Upload::jsonEncode($_receiptData);
				}
				else{
					move_uploaded_file($_file['tmp_name'],$_tempPath);
					$_fileName=$_file['name'];
				}
				
			}
			 
		}
		//----------------HTML5上传 就是字节流 
		else{
			$_data = file_get_contents("php://input");
			//将字节流写入临时文件
			file_put_contents($_tempPath,$_data);

			//监测是否存在文件信息
			if(isset($_SERVER['HTTP_CONTENT_DISPOSITION']) && 
			preg_match('/attachment;\s+name="(.+?)";\s+filename="(.+?)"/i',$_SERVER['HTTP_CONTENT_DISPOSITION'],$info)){
			
				//获取文件信息
				$_fileName=urldecode($info[2]);
			}
			else{

				$_fileName="bytes.png";
			}

			//echo $_data;
		}

		$_receiptData = Upload::SaveFiles($_fileName, $_tempPath,$_suffix,$_limitSize,$_rootPath,$_isSaveRealFileName);
		
		return Upload::jsonEncode($_receiptData);
		
	}
	
	/**
	 * 吧数组变成json字符串
	 * @param Array $arr
	 * @return string
	 */
	private static function jsonEncode($arr){
		
		return json_encode($arr);
	}
	
	/**
	 * 
	 * @param string $fileName 文件路径或者文件扩展名
	 * @param string $tempPath 临时文件路径
	 * @param string $exts	          过滤扩展名
	 * @param int $size        限制大小
	 * @param string $rootPath 保存根目录
	 */
	public static function SaveFiles($fileName,$tempPath,$exts,$size,$rootPath,$_isSaveRealFileName){
 
		//文件信息
		$_fileInfo=pathinfo($fileName);
		//文件真实后缀
		$_extension =isset($_fileInfo["extension"])?$_fileInfo["extension"]:$fileName;
	
		$_RealFileName = isset($_fileInfo["basename"])?$_fileInfo["basename"]:$fileName;
		
		//处理文件保存目录 实际上是找到 ITF 目录同级的目录
		$_RequestRootUri = $rootPath;
		$rootPath = dirname(dirname(dirname(__FILE__)))."/".$rootPath;
		
		//回执数据
		$_receiptData = array(
				"state"=>"0",
				"message"=>"未捕获的错误！保存失败",
				"path"=>"","name"=>"",
				"err"=>"未捕获的错误！保存失败",
				"msg"=>array( "url"=>"", "localname"=>"", "id"=>"1" )
				);
		
		//保存的文件名称
		$_fileSaveName = "";
		//生成的目录
		$_createFolder = '/'.$_extension.'_'.date('ymd');
		//保存的路径
		$_RequestRootUri = $_RequestRootUri.$_createFolder;
		$_savePath = $rootPath.$_createFolder;
	 	
		//临时文件路径
		$_tempPath = $rootPath.date("YmdHis").mt_rand(10000,99999).'.tmp';
		 
	
		if(preg_match('/^('.str_replace(',','|',$exts).')$/i',$_extension)) {
	
			$_bytes=filesize($tempPath);
	
			if($_bytes > $size){
				$_receiptData["err"]=$_receiptData["message"]='请不要上传大小超过'.Upload::FormatBytes($_bytes).'的文件';
			}
			else {
	
				Upload::CreateFolder($_savePath);
				 
				PHP_VERSION < '4.2.0' && mt_srand((double)microtime() * 1000000);
	
				$_fileSaveName= date("YmdHis").mt_rand(1000,9999).'.'.$_extension;
				$_fileSaveName = $_isSaveRealFileName=="1"?$_RealFileName:$_fileSaveName;
				
				$_receiptData["name"] = $_createFolder.'/'.$_fileSaveName;
				$_RequestRootUri = $_RequestRootUri.'/'.$_fileSaveName;
				$_fileSaveName = $_savePath.'/'.$_fileSaveName;

				rename($tempPath,$_fileSaveName);
				chmod($_fileSaveName,0755);
				 
				$_receiptData["state"] = '1';
				$_receiptData["message"] = '上传成功！';
				$_receiptData["err"]="";
				$_receiptData["msg"]["localname"]=$fileName;
				$_receiptData["path"] = $_RequestRootUri;
				$_receiptData["msg"]["url"]=Upload::GetRequestUri().$_RequestRootUri;
				$_receiptData["msg"]["id"]="1";
			}
	
		}
		else{
			$_receiptData["err"]=$_receiptData["message"] = '上传文件扩展名必需为：'.$exts;
		}
			
		 
		return  $_receiptData;
	
	}
	
	
	/**
	 * 格式化数据大小单位
	 * @param string $bytes
	 * @return string
	 */
	private static function FormatBytes($bytes){
	
		if($bytes >= 1073741824) {
			$bytes = round($bytes / 1073741824 * 100) / 100 . 'GB';
		} elseif($bytes >= 1048576) {
			$bytes = round($bytes / 1048576 * 100) / 100 . 'MB';
		} elseif($bytes >= 1024) {
			$bytes = round($bytes / 1024 * 100) / 100 . 'KB';
		} else {
			$bytes = $bytes . 'Bytes';
		}
		return $bytes;
	
	}
	
	/**
	 * 递归创建目录
	 * @param String $path
	 */
	public static function CreateFolder($path){
	
		// if (!file_exists($path)){
		// 	Upload::CreateFolder(dirname($path));
		// 	 return mkdir($path, 0777) ;
		// }
		if (!$path) return false;  
        if(!file_exists($path)) {  
            mkdir($path,0777,true);  
            return chmod($path,0777);  
        }
         else {  
            return true;  
        }  
	}

	/**
	 * 获取当前文件的uri
	 * @param String $uri
	 */
	public static function GetRequestUri() {
	    if (isset($_SERVER['REQUEST_URI'])) {  $_uri = $_SERVER['REQUEST_URI'];   }
	    else {
	        if (isset($_SERVER['argv'])) {
	            $_uri = $_SERVER['PHP_SELF'] .'?'. $_SERVER['argv'][0];
	        }
	        else {
	            $_uri = $_SERVER['PHP_SELF'] .'?'. $_SERVER['QUERY_STRING'];
	        }
	    }

	    $_tmparr=parse_url($_uri);
	    $_uri = $_tmparr["path"];
	    $_uri = substr($_uri, 0,strripos($_uri,'/'));
	    $_uri = substr($_uri, 0,strripos($_uri,'/'));
	    $_uri = substr($_uri, 0,strripos($_uri,'/')+1);
	    //"http://".$_SERVER['SERVER_NAME'].
	    if($_uri == "/"){$_uri="";}
	    return $_uri;
	}
}


 


//运行数据接口
function RunMethod($className,$methodName){

	$reflectionsClass=new ReflectionClass($className);

	if($reflectionsClass->hasMethod($methodName)){

		$reflectionMethod=$reflectionsClass->getMethod($methodName);

		if($reflectionMethod->isStatic()){
			$items=$reflectionMethod->invoke(null);
		}else{

			$pluginInstance=$reflectionsClass->newInstance();
			$items=$reflectionMethod->invoke($pluginInstance);
		}

		return $items;
	}

	return json_encode(array("return"=>0,"state"=>"404","message"=>"数据接口没找到"));
}
?>


