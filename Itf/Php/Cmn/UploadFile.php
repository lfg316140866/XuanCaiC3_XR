<?php
class UploadFile{

	/**
	 * 上传图片 支持多张上传
	 * @param $inputName 表单名称
	 * @param $picSize 限制上传图片的大小 (KB)
	 * @param $path 存放的路径
	 * @param $randName 是否随机生成图片名称 默认true
	 */
	public static function UploadPics($inputName,$picSize,$path,$randName=true){
		$_uptypes=array(  
					    'image/jpg',  
					    'image/jpeg',  
					    'image/png',  
					    'image/pjpeg',  
					    'image/gif',  
					    'image/bmp',  
					    'image/x-png'  
					);
		$_size = $picSize*1024;
		$_fileName = "";
		$_uploadInfo = array();
		$_UPLOADFILES = $_FILES[$inputName];
		foreach($_UPLOADFILES['name'] as $_index => $_name){
		 if (!is_uploaded_file($_UPLOADFILES['tmp_name'][$_index]))  
			    //是否存在文件  
			    {  
			    	$_uploadInfo[] = array("isSuccess"=>"0","message"=>$_name.":该文件不存在！上传失败","url"=>"") ;
			    	continue;
			    }  
			  

			    if($_size < $_UPLOADFILES["size"][$_index])  
			    //检查文件大小  
			    {  
			       $_uploadInfo[] = array("isSuccess"=>"0","message"=>$_name.":该文件太大，上传失败！","url"=>"") ;
			       continue;
			    }  
			  
			    if(!in_array($_UPLOADFILES["type"][$_index], $_uptypes))  
			    //检查文件类型  
			    {  
			    	$_uploadInfo[] = array("isSuccess"=>"0","message"=>$_name.":该文件类型不合法！上传失败！","url"=>"") ;
			       continue;
			    }  
			  
			    if(!file_exists($path))  
			    {  
			        mkdir($path);  
			    } 
			if($randName){
				$_rand = rand(10,999999);
				$_fileName =$_UPLOADFILES["size"]."_".date("Ymdhis").$_rand.strtoupper(Str::Pinyin($_name, "UTF-8"));
			}else{
				
				$_fileName = $_name;
			}
			$_fileName = $path.$_fileName;
			if(move_uploaded_file($_UPLOADFILES['tmp_name'][$_index], $_fileName)){
				$_uploadInfo[] =array("isSuccess"=>"1","message"=>$_name.":上传成功！","url"=>$_fileName) ;
			}else{
				$_uploadInfo[] = array("isSuccess"=>"0","message"=>$_name.":图片上传时发生异常：上传失败！","url"=>"") ;
			}
			
		}
		
		return $_uploadInfo;
	}

	/**
	 * 上传文件
	 * @param unknown_type $inputName 表单名
	 * @param unknown_type $picSize 大小
	 * @param unknown_type $path 路径
	 * @param unknown_type $fileTypes 文件类型数组
	 * @param unknown_type $randName 是否随机名称
	 */
	public static function Upload($inputName,$picSize,$path,$fileTypes,$randName=true){
		$_uptypes = $fileTypes;
		$_size = $picSize*1024;
		$_uploadInfo = array();
		$_UPLOADFILES = $_FILES[$inputName];
		$_name = $_UPLOADFILES['name'];
	if (!is_uploaded_file($_UPLOADFILES['tmp_name']))
				//是否存在文件
			{
				$_uploadInfo = array("isSuccess"=>"0","message"=>$_name.":该文件不存在！上传失败","url"=>"") ;
				
			}
				
			if(!in_array($_UPLOADFILES["type"], $_uptypes))
				//检查文件类型
			{
				$_uploadInfo = array("isSuccess"=>"0","message"=>$_name.":该文件类型不合法！上传失败！","url"=>"") ;
				
			}
			if($_size < $_UPLOADFILES["size"])
				//检查文件大小
			{
				    $_uploadInfo = array("isSuccess"=>"0","message"=>$_name.":该文件太大，上传失败！","url"=>"") ;
				
			}
				
			if(!file_exists($path))
			{
				mkdir($path);
			}
			if($randName){
				$_rand = rand(10,999999);
				$_fileName =$_UPLOADFILES["size"]."_".date("Ymdhis").$_rand.strtoupper(Str::Pinyin($_name, "UTF-8"));
			}else{
				
				$_fileName = $_name;
			}
			$_fileName = $path.$_fileName;
		
			if(move_uploaded_file($_UPLOADFILES['tmp_name'], $_fileName)){
				$_uploadInfo =array("isSuccess"=>"1","message"=>$_name.":上传成功！","url"=>$_fileName) ;
			}else{
				$_uploadInfo = array("isSuccess"=>"0","message"=>$_name.":图片上传时发生异常：上传失败！","url"=>"") ;
			}
		
		return $_uploadInfo;
	}
	
	/**
	 * htmlEdit 上传
	 * @param unknown_type $inputName input名称
	 * @param unknown_type $picSize 大小 M
	 * @param unknown_type $path 路径
	 */
	public static function XheditorUpload($inputName,$picSize,$path){
		$upExt='txt,rar,zip,jpg,jpeg,gif,png,swf,wmv,avi,wma,mp3,mid';//上传扩展名
		$err = ""; //错误信息
		$msg = "''"; //服务器返回的消息
		$upfile=@$_FILES[$inputName];
		if(!isset($upfile))$err='文件域的name错误';
		elseif(!empty($upfile['error'])){
			switch($upfile['error'])
			{
				case '1':
					$err = '文件大小超过了php.ini定义的upload_max_filesize值';
					break;
				case '2':
					$err = '文件大小超过了HTML定义的MAX_FILE_SIZE值';
					break;
				case '3':
					$err = '文件上传不完全';
					break;
				case '4':
					$err = '无文件上传';
					break;
				case '6':
					$err = '缺少临时文件夹';
					break;
				case '7':
					$err = '写文件失败';
					break;
				case '8':
					$err = '上传被其它扩展中断';
					break;
				case '999':
				default:
					$err = '无有效错误代码';
			}
		}
		elseif(empty($upfile['tmp_name']) || $upfile['tmp_name'] == 'none')$err = '无文件上传';
		else{
			$tempPath = $path.date("YmdHis").mt_rand(10000,99999).$upfile['name'];
			move_uploaded_file($upfile['tmp_name'],$tempPath);
			$msg="{'url':'".$tempPath."','localname':'".$upfile['name']."','id':'1'}";
		}
		
		echo json_encode(array('err'=>$err,'msg'=>$msg));
	}
	
	/**
	 * 上传图片 单张 支持裁剪
	 * @param $inputName 表单名称
	 * @param $picSize 限制上传图片的大小 (KB)
	 * @param $path 存放的路径
	 * @param $randName 是否随机生成图片名称 默认true
	 * @param $isCut 是否裁剪 默认true
	 */
	public static function UploadPic($inputName,$picSize,$path,$isCut=true,$randName=true){
		$_uptypes=array(
				'image/jpg',
				'image/jpeg',
				'image/png',
				'image/pjpeg',
				'image/gif',
				'image/bmp',
				'image/x-png'
		);
		
		$_size = $picSize*1024;
		$_fileName = "";
		$_uploadInfo = array(); //上传的信息
		$_UPLOADFILES = $_FILES[$inputName];
		$_name = $_UPLOADFILES['name'];
			if (!is_uploaded_file($_UPLOADFILES['tmp_name']))
				//是否存在文件
			{
				$_uploadInfo = array("isSuccess"=>"0","message"=>$_name.":该文件不存在！上传失败","url"=>"") ;
				
			}
				
			if(!in_array($_UPLOADFILES["type"], $_uptypes))
				//检查文件类型
			{
				$_uploadInfo = array("isSuccess"=>"0","message"=>$_name.":该文件类型不合法！上传失败！","url"=>"") ;
				
			}
			if($_size < $_UPLOADFILES["size"])
				//检查文件大小
			{
				    $_uploadInfo = array("isSuccess"=>"0","message"=>$_name.":该文件太大，上传失败！","url"=>"") ;
				
			}
				
			if(!file_exists($path))
			{
				mkdir($path);
			}
			if($randName){
				$_rand = rand(10,999999);
				$_fileName =$_UPLOADFILES["size"]."_".date("Ymdhis").$_rand.strtoupper(Str::Pinyin($_name, "UTF-8")).".".UploadFile::getFileType($_name);
			}else{
				
				$_fileName = $_name;
			}
			$_fileName = $path.$_fileName;
		
			if(move_uploaded_file($_UPLOADFILES['tmp_name'], $_fileName)){
				$_uploadInfo =array("isSuccess"=>"1","message"=>$_name.":上传成功！","url"=>$_fileName) ;
			}else{
				$_uploadInfo = array("isSuccess"=>"0","message"=>$_name.":图片上传时发生异常：上传失败！","url"=>"") ;
			}
			
			if($isCut){
				$_uploadInfo = UploadFile::ImageCut($_fileName);
			}
			return $_uploadInfo;
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
	 * 裁剪
	 * @param $fileName 图片名称
	 */
	public static function ImageCut($fileName){
		$_uploadInfo = array("isSuccess"=>"0","message"=>"裁剪失败！" ,"url"=>$fileName);
		$_type=exif_imagetype($fileName);  //判断文件类型
		$_image = null;
		switch($_type) {
			case IMAGETYPE_JPEG :
				$_image = imagecreatefromjpeg($fileName);
				break;
			case IMAGETYPE_PNG :
				$_image = imagecreatefrompng($fileName);
				break;
			case IMAGETYPE_GIF :
				$_image = imagecreatefromgif($fileName);
				break;
			case IMAGETYPE_BMP :
				$_image = imagecreatefromwbmp($fileName);
				break;
			default:
				$_uploadInfo = array("isSuccess"=>"0","message"=>"裁剪的过程中出错","url"=>$fileName) ;
				break;
		}
		$_x1 = $_REQUEST['x1']; //裁剪坐标X
		$_y1 = $_REQUEST['y1']; //裁剪坐标Y
		$_width =$_REQUEST['width']; //裁剪宽度
		$_height = $_REQUEST['height']; //裁剪高度
		$_zoom = $_REQUEST['zoom']; //缩放比
		$tw = imagesx($_image); //原始图片宽度
		$th = imagesy($_image); //原始图片高度
		
		//创建裁剪图片
		$_temp = imagecreatetruecolor($_width ,$_height);
		//创建副本
		$_copyImg = imagecreatetruecolor($tw *$_zoom,$th *$_zoom);
		//拷贝副本
		imagecopyresized($_copyImg, $_image, 0, 0, 0, 0, $tw *$_zoom,$th *$_zoom,$tw , $th);
		//裁剪副本
		imagecopyresampled($_temp, $_copyImg, 0, 0, $_x1, $_y1,$tw*$_zoom ,$th*$_zoom,$tw *$_zoom  ,$th *$_zoom);
		@unlink($fileName);//删除原图
		if(imagejpeg($_temp, $fileName)){
			$_uploadInfo =array("isSuccess"=>"1","message"=>"裁剪成功！" ,"url"=>$fileName) ;
		}; //保存图片至原地址
		return $_uploadInfo;
	}
	
	
	private static  function getFileType ($fileName){
		$_str = explode(".",$fileName );
		$_str = $_str[count($_str)-1];
		return $_str;
		
	}
}

?>
