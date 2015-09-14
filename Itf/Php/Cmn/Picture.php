<?php

/**
 * 图片处理类
 */
class Picture {
	
	/**
	 * 获取图片数据流
	 *
	 * @param $path 图片路径
	 *        	return 图片流
	 */
	public static function GetImageData($path) {
		$_type = exif_imagetype ( $path ); // 判断文件类型
		
		$_image = null;
		
		switch ($_type) {
			case IMAGETYPE_JPEG :
				$_image = imagecreatefromjpeg ( $path );
				break;
			case IMAGETYPE_PNG :
				$_image = imagecreatefrompng ( $path );
				break;
			case IMAGETYPE_GIF :
				$_image = imagecreatefromgif ( $path );
				break;
			case IMAGETYPE_BMP :
				$_image = imagecreatefromwbmp ( $path );
				break;
			default :
				
				break;
		}
		
		return $_image;
	}
	
	/**
	 * 区间填充图片颜色
	 *
	 * @param $imageData 图片流对象        	
	 * @param
	 *        	$mini_color
	 * @param
	 *        	$max_color
	 * @param $mini_fill_rbg Array('R'=>0,'G'=>0,'B'=>0)        	
	 * @param $max_fill_rbg Array('R'=>0,'G'=>0,'B'=>0)
	 *        	return 处理好的图片
	 */
	public static function IntervalFillImage($imageData, $mini_color = 100, $max_color = 150, $mini_fill_rbg = array('R'=>0,'G'=>0,'B'=>0), $max_fill_rbg = array('R'=>255,'G'=>255,'B'=>255)) {
		
		// 判断是否是真彩图 如果是 转为调色板
		if (imageistruecolor ( $imageData )) {
			imagetruecolortopalette ( $imageData, false, 256 ); // 调色板图像
		}
		
		for($i = 0; $i < imagecolorstotal ( $imageData ); $i ++) {
			
			$rgb = imagecolorsforindex ( $imageData, $i ); // 获得颜色i点的颜色值
			
			$gray = round ( 0.029 * $rgb ['red'] + 0.487 * $rgb ['green'] + 0.114 * $rgb ['blue'] ); // 获得颜色灰度值
			
			if ($rgb ['red'] < $mini_color && $rgb ['green'] < $mini_color && $rgb ['blue'] < $mini_color) {
				
				if (is_array ( $mini_fill_rbg )) {
					
					imagecolorset ( $imageData, $i, $mini_fill_rbg ['R'], $mini_fill_rbg ['G'], $mini_fill_rbg ['B'] ); // 设置i点颜色值
				}
			} else if ($rgb ['red'] > $max_color && $rgb ['green'] > $max_color && $rgb ['blue'] > $max_color) {
				if (is_array ( $max_fill_rbg )) {
					
					imagecolorset ( $imageData, $i, $max_fill_rbg ['R'], $max_fill_rbg ['G'], $max_fill_rbg ['B'] ); // 设置i点颜色值
				}
			}
		}
		return $imageData;
	}
	
	/**
	 * 裁剪图片
	 *
	 * @param $imageData 图片流对象        	
	 * @param $x 从x坐标开始裁剪        	
	 * @param $y 从y坐标开始裁剪        	
	 * @param $w 裁剪的宽度        	
	 * @param $h 裁剪的高度
	 *        	return 裁剪之后的图片
	 */
	public static function CutImage($imageData, $x = 0, $y = 0, $w = 100, $h = 100) {
		// 裁剪图片
		$new_image = imagecreatetruecolor ( $w, $h );
		
		$color = imagecolorallocate ( $new_image, 100, 100, 100 );
		
		imagefill ( $new_image, 0, 0, $color );
		
		imagecolortransparent ( $new_image, $color );
		
		imagecopymerge ( $new_image, $imageData, 0, 0, $x, $y, $w, $h, 100 );
		
		return $new_image;
	}
	
	/**
	 * 裁剪不规则图形
	 *
	 * @param $imagedata 图片流对象        	
	 * @param $cropw 裁剪宽度        	
	 * @param $croph 裁剪高度        	
	 * @param $ovalTempPath 椭圆模板路径        	
	 * @param $ovaltempX 图形所在模板的x（中心点）        	
	 * @param $ovaltempy 图形所在模板的y（中心点）        	
	 * @param $alphaColor 模板底色
	 *        	return 裁剪之后的图形
	 */
	public static function IrregularCrop($imagedata, $cropw, $croph, $ovalTempPath = "resources/OvalTemp.png", $ovaltempX = 242, $ovaltempy = 220, $alphaColor = array('R'=>46,'G'=>60,'B'=>8)) {
		
		// 拿到椭圆模板
		$_ovalTempData = Picture::GetImageData ( $ovalTempPath );
		// 保留透明度
		imagealphablending ( $_ovalTempData, false );
		imagesavealpha ( $_ovalTempData, true );
		
		$_w = imagesx ( $imagedata ) / 2;
		$_h = imagesy ( $imagedata ) / 2;
		//$_w = 90;
		//$_h =103;
		$_tempX = $ovaltempX;
		$_tempY = $ovaltempy;
		$_ow = imagesx ( $_ovalTempData );
		$_oh = imagesy ( $_ovalTempData );
		
		$TransitionImage = imagecreatetruecolor ( $_ow, $_oh );
		
		$color = imagecolorallocate ( $TransitionImage, 100, 100, 100 );
		
		imagefill ( $TransitionImage, 0, 0, $color );
		
		imagecolortransparent ( $TransitionImage, $color );
		
		imagecopymerge ( $TransitionImage, $imagedata, $_tempX - $_w, $_tempY - $_h, 0, 0, $_w * 2, $_h * 2, 100 );

		//$fileName = rand ( 9999, 999999 ) . "-" . @date ( "Ymdhis" );	
		//$fileName = "upload/" . $fileName . ".merge.png";
		//imagepng ( $TransitionImage,  $fileName);
		imagecopyresized ( $TransitionImage, $_ovalTempData, 0, 0, 0, 0, $_ow, $_oh, $_ow, $_oh );

		//$fileName = rand ( 9999, 999999 ) . "-" . @date ( "Ymdhis" );	
		//$fileName = "upload/" . $fileName . ".resize.png";
		//imagepng ( $TransitionImage,  $fileName);
		
		$color = imagecolorallocate ( $TransitionImage, $alphaColor ['R'], $alphaColor ['G'], $alphaColor ['B'] );
		
		imagecolortransparent ( $TransitionImage, $color );
		
		imagedestroy ( $imagedata );
		imagedestroy ( $_ovalTempData );
		
		return Picture::CutImage ( $TransitionImage, $ovaltempX-$cropw/2, $ovaltempy-$croph/2, $cropw, $croph );
	}
	
	/**
	 * 缩放
	 *
	 * @param $imageData 图片流        	
	 * @param $w 缩放的宽度
	 *        	return 返回缩放之后的图片
	 */
	public static function ZoomImage($imageData, $w) {
		$_tw = imagesx ( $imageData ); // 背景图片宽度
		
		$_th = imagesy ( $imageData ); // 背景图片高度
		
		$_zoom = $w / $_tw;
		Log::WriteToFile("zoom","zoom=".$_zoom);
		Log::WriteToFile("zoom","zoom:_w=".$w."");
		
		$new_image = imagecreatetruecolor ( $_tw * $_zoom, $_th * $_zoom );
		$color = imagecolorallocate ( $new_image, 100, 100, 100 );
		
		imagefill ( $new_image, 0, 0, $color );
		
		imagecolortransparent ( $new_image, $color );
		
		imagecopyresized ( $new_image, $imageData, 0, 0, 0, 0, $_tw * $_zoom, $_th * $_zoom, $_tw, $_th );
		
		return $new_image;
	}
}
class UploadFiles {
	
	/**
	 * 上传图片 单张 支持裁剪
	 *
	 * @param $inputName 表单名称        	
	 * @param $picSize 限制上传图片的大小
	 *        	(KB)
	 * @param $path 存放的路径        	
	 * @param $randName 是否随机生成图片名称
	 *        	默认true
	 */
	public static function UploadPic($inputName, $picSize, $path, $randName = true) {
		$_uptypes = array (
				'image/jpg',
				'image/jpeg',
				'image/png',
				'image/pjpeg',
				'image/gif',
				'image/bmp',
				'image/x-png' 
		);
		
		$_size = $picSize * 2048;
		$_fileName = "";
		$_uploadInfo = array (); // 上传的信息
		$_UPLOADFILES = $_FILES [$inputName];
		$_name = $_UPLOADFILES ['name'];
		// 是否存在文件
		if (! is_uploaded_file ( $_UPLOADFILES ['tmp_name'] )) {
			Log::WriteToFile ( "file", "该文件不存在！上传失败" );
			$_uploadInfo = array (
					"isSuccess" => "0",
					"message" => $_name . ":该文件不存在！上传失败！错误编号：101",
					"url" => "" 
			);
			return $_uploadInfo;
		}
		// 检查文件类型
		if (! in_array ( $_UPLOADFILES ["type"], $_uptypes )) {
			Log::WriteToFile ( "file", "该文件类型不合法！上传失败！" );
			// $_uploadInfo[] =
			// array("isSuccess"=>"0","message"=>$_name.":该文件类型不合法！上传失败！","url"=>"")
			// ;
			$_uploadInfo = array (
					"isSuccess" => "0",
					"message" => $_name . ":该文件类型不合法！上传失败！错误编号：102",
					"url" => "" 
			);
			return $_uploadInfo;
		}
		// 检查文件大小
		if ($_size < $_UPLOADFILES ["size"]) {
			//Log::WriteToFile ( "file", "该文件太大，上传失败！错误编号：103，$_size=" . $_size . "--$_UPLOADFILES [size]=" . $_UPLOADFILES ["size"] );
			$_uploadInfo = array (
					"isSuccess" => "0",
					"message" => "文件太大，上传失败！错误编号：103",
					"url" => "" 
			);
			return $_uploadInfo;
		}
		
		if (! file_exists ( $path )) {
			mkdir ( $path );
		}
		$ext_name = strrchr ( $_name, '.' ); // 获取图片的扩展名
		
		$pattern='1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLOMNOPQRSTUVWXYZ';
		$key="";
		for($_i=0;$_i<12;$_i++)
		{
			$key .= $pattern{mt_rand(0,35)};    //生成php随机数
		} 
		
		
		if ($randName) {
			//$_fileName = $_UPLOADFILES ["size"] . "-" . @date ( "Ymdhis" ) . strtoupper ( $_name );
			$_fileName = $_UPLOADFILES ["size"] . "-" .$key.'_'. @date ( "Ymdhis" ).$ext_name;
		} else {			
			$_fileName =$_UPLOADFILES ["size"] . "-".$key.'_'.@date ( "Ymdhis" ).$ext_name;// $_name;
		}
		$_fileName = $path . $_fileName;
		
		if (move_uploaded_file ( $_UPLOADFILES ['tmp_name'], $_fileName )) {
			Log::WriteToFile ( "file", "上传成功！" );
			$_uploadInfo = array (
					"isSuccess" => "1",
					"message" => $_fileName . ":上传成功！",
					"url" => $_fileName 
			);
			return $_uploadInfo;
		} else {
			Log::Write ( "图片上传时发生异常：上传失败！" );
			$_uploadInfo = array (
					"isSuccess" => "0",
					"message" => $_fileName . ":图片上传时发生异常：上传失败！错误编号：104",
					"url" => "" 
			);
		}
		return $_uploadInfo;
	}
	
	//function randomkeys($length)
//	{
	//	$pattern='1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLOMNOPQRSTUVWXYZ';
		//for($i=0;$i<$length;$i++)
	//	{
		//	$key .= $pattern{mt_rand(0,35)};    //生成php随机数
		//}
	//	return $key;
//	}
	
}


