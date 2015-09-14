<?php


 
class FileExd{


	
	public static function SaveFiles($fileName,$tempPath,$exts= 'txt,rar,zip,jpg,jpeg,gif,png,swf,wmv,avi,wma,mp3,mid',$size = 2097152,$rootPath="/Upload"){
		
		//文件信息
		$_fileInfo=pathinfo($fileName);
		//文件真实后缀
		$_extension = $_fileInfo["extension"];
		//回执数据
		$_receiptData = array("state"=>"0","message"=>"未捕获的错误！保存失败","path"=>"");
		//保存的文件名称
		$_fileSaveName = "";
		//保存的路径
		$_savePath = $rootPath.'/month_'.date('ym').'/day_'.date('ymd');
		//错误信息
		$_errorMsg = "文件不存在！上传失败";
		//临时文件路径
		$_tempPath = $rootPath.date("YmdHis").mt_rand(10000,99999).'.tmp';
		
		
		if(preg_match('/^('.str_replace(',','|',$exts).')$/i',$_extension)) {
		
			$_bytes=filesize($tempPath);
			
			if($_bytes > $size){$_receiptData["message"]='请不要上传大小超过'.FileExd::FormatBytes($_bytes).'的文件';}
			else {
	 
				if(!is_dir($_savePath))
				{
					 FileExd::CreateFolder($_savePath);
					@fclose(fopen($_savePath.'/index.htm', 'w'));
				}
				
				PHP_VERSION < '4.2.0' && mt_srand((double)microtime() * 1000000);
				
				$_fileSaveName=date("YmdHis").mt_rand(1000,9999).'.'.$_extension;
				$_fileSaveName = $_savePath.'/'.$_fileSaveName;
				rename($tempPath,$_fileSaveName);
				@chmod($_fileSaveName,0755);
				
				$_receiptData["state"] = '1';
				$_receiptData["message"] = '上传成功！';
				$_receiptData["path"] = $_fileSaveName;
				 
			}
			
		}
		else{
			$_receiptData["message"] = '上传文件扩展名必需为：'.$exts;
		}
		 
		
		return  $_receiptData;
		
	}
	
 
 
	/**
	 * 保存base64位形式的图片
	 * @param $imageBase64Data 图片base64位编码字符串
	 * @$path 保存的目录 例如 /upload/image/
	 * @$fileName 保存名称 可为空 为空为自动生成文件名
	 */
	public static function Base64SaveImage($imageBase64Data,$path,$fileName=""){
		$_base64Data = substr($imageBase64Data,21);
		
		$_fileExt = "";
		if($fileName ==""){
			
			$_base64Header = substr($imageBase64Data,0,22);
			
			if(strpos($_base64Header,"gif")!=false){ $_fileExt =".gif";  }
			else if(strpos($_base64Header,"png")!=false){ $_fileExt =".png";  }
			else if(strpos($_base64Header,"jpg")!=false){ $_fileExt =".jpg"; }
			else if(strpos($_base64Header,"bmp")!=false){ $_fileExt =".bmp"; }
			
			$_fileExt = $path.substr($_base64Data,rand(0,10),10)."_".date("Ymdhis").$_fileExt;
			
		}
		else{
			$_fileExt = $path.$fileName;
		}
		
		$_imageData = base64_decode($_base64Data);
		file_put_contents($_fileExt, $_imageData);
		
		if(file_exists ($_fileExt)){ 	return true; }
		
		return false;
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
	 * @param String $Folder
	 */
	private static function CreateFolder($path){
	
		if(!is_readable($path)){
			FileExd::CreateFolder( dirname($path) );
			if(!is_file($path)) @mkdir($path,0777);
		}
	}
	
}
 
?>
