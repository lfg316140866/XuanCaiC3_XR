<?php

/**
 * ͼƬ������
 */
class Picture {
	
	/**
	 * ��ȡͼƬ������
	 *
	 * @param $path ͼƬ·��
	 *        	return ͼƬ��
	 */
	public static function GetImageData($path) {
		$_type = exif_imagetype ( $path ); // �ж��ļ�����
		
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
	 * �������ͼƬ��ɫ
	 *
	 * @param $imageData ͼƬ������        	
	 * @param
	 *        	$mini_color
	 * @param
	 *        	$max_color
	 * @param $mini_fill_rbg Array('R'=>0,'G'=>0,'B'=>0)        	
	 * @param $max_fill_rbg Array('R'=>0,'G'=>0,'B'=>0)
	 *        	return ����õ�ͼƬ
	 */
	public static function IntervalFillImage($imageData, $mini_color = 100, $max_color = 150, $mini_fill_rbg = array('R'=>0,'G'=>0,'B'=>0), $max_fill_rbg = array('R'=>255,'G'=>255,'B'=>255)) {
		
		// �ж��Ƿ������ͼ ����� תΪ��ɫ��
		if (imageistruecolor ( $imageData )) {
			imagetruecolortopalette ( $imageData, false, 256 ); // ��ɫ��ͼ��
		}
		
		for($i = 0; $i < imagecolorstotal ( $imageData ); $i ++) {
			
			$rgb = imagecolorsforindex ( $imageData, $i ); // �����ɫi�����ɫֵ
			
			$gray = round ( 0.029 * $rgb ['red'] + 0.487 * $rgb ['green'] + 0.114 * $rgb ['blue'] ); // �����ɫ�Ҷ�ֵ
			
			if ($rgb ['red'] < $mini_color && $rgb ['green'] < $mini_color && $rgb ['blue'] < $mini_color) {
				
				if (is_array ( $mini_fill_rbg )) {
					
					imagecolorset ( $imageData, $i, $mini_fill_rbg ['R'], $mini_fill_rbg ['G'], $mini_fill_rbg ['B'] ); // ����i����ɫֵ
				}
			} else if ($rgb ['red'] > $max_color && $rgb ['green'] > $max_color && $rgb ['blue'] > $max_color) {
				if (is_array ( $max_fill_rbg )) {
					
					imagecolorset ( $imageData, $i, $max_fill_rbg ['R'], $max_fill_rbg ['G'], $max_fill_rbg ['B'] ); // ����i����ɫֵ
				}
			}
		}
		return $imageData;
	}
	
	/**
	 * �ü�ͼƬ
	 *
	 * @param $imageData ͼƬ������        	
	 * @param $x ��x���꿪ʼ�ü�        	
	 * @param $y ��y���꿪ʼ�ü�        	
	 * @param $w �ü��Ŀ��        	
	 * @param $h �ü��ĸ߶�
	 *        	return �ü�֮���ͼƬ
	 */
	public static function CutImage($imageData, $x = 0, $y = 0, $w = 100, $h = 100) {
		// �ü�ͼƬ
		$new_image = imagecreatetruecolor ( $w, $h );
		
		$color = imagecolorallocate ( $new_image, 100, 100, 100 );
		
		imagefill ( $new_image, 0, 0, $color );
		
		imagecolortransparent ( $new_image, $color );
		
		imagecopymerge ( $new_image, $imageData, 0, 0, $x, $y, $w, $h, 100 );
		
		return $new_image;
	}
	
	/**
	 * �ü�������ͼ��
	 *
	 * @param $imagedata ͼƬ������        	
	 * @param $cropw �ü����        	
	 * @param $croph �ü��߶�        	
	 * @param $ovalTempPath ��Բģ��·��        	
	 * @param $ovaltempX ͼ������ģ���x�����ĵ㣩        	
	 * @param $ovaltempy ͼ������ģ���y�����ĵ㣩        	
	 * @param $alphaColor ģ���ɫ
	 *        	return �ü�֮���ͼ��
	 */
	public static function IrregularCrop($imagedata, $cropw, $croph, $ovalTempPath = "resources/OvalTemp.png", $ovaltempX = 242, $ovaltempy = 220, $alphaColor = array('R'=>46,'G'=>60,'B'=>8)) {
		
		// �õ���Բģ��
		$_ovalTempData = Picture::GetImageData ( $ovalTempPath );
		// ����͸����
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
	 * ����
	 *
	 * @param $imageData ͼƬ��        	
	 * @param $w ���ŵĿ��
	 *        	return ��������֮���ͼƬ
	 */
	public static function ZoomImage($imageData, $w) {
		$_tw = imagesx ( $imageData ); // ����ͼƬ���
		
		$_th = imagesy ( $imageData ); // ����ͼƬ�߶�
		
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
	 * �ϴ�ͼƬ ���� ֧�ֲü�
	 *
	 * @param $inputName ������        	
	 * @param $picSize �����ϴ�ͼƬ�Ĵ�С
	 *        	(KB)
	 * @param $path ��ŵ�·��        	
	 * @param $randName �Ƿ��������ͼƬ����
	 *        	Ĭ��true
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
		$_uploadInfo = array (); // �ϴ�����Ϣ
		$_UPLOADFILES = $_FILES [$inputName];
		$_name = $_UPLOADFILES ['name'];
		// �Ƿ�����ļ�
		if (! is_uploaded_file ( $_UPLOADFILES ['tmp_name'] )) {
			Log::WriteToFile ( "file", "���ļ������ڣ��ϴ�ʧ��" );
			$_uploadInfo = array (
					"isSuccess" => "0",
					"message" => $_name . ":���ļ������ڣ��ϴ�ʧ�ܣ������ţ�101",
					"url" => "" 
			);
			return $_uploadInfo;
		}
		// ����ļ�����
		if (! in_array ( $_UPLOADFILES ["type"], $_uptypes )) {
			Log::WriteToFile ( "file", "���ļ����Ͳ��Ϸ����ϴ�ʧ�ܣ�" );
			// $_uploadInfo[] =
			// array("isSuccess"=>"0","message"=>$_name.":���ļ����Ͳ��Ϸ����ϴ�ʧ�ܣ�","url"=>"")
			// ;
			$_uploadInfo = array (
					"isSuccess" => "0",
					"message" => $_name . ":���ļ����Ͳ��Ϸ����ϴ�ʧ�ܣ������ţ�102",
					"url" => "" 
			);
			return $_uploadInfo;
		}
		// ����ļ���С
		if ($_size < $_UPLOADFILES ["size"]) {
			//Log::WriteToFile ( "file", "���ļ�̫���ϴ�ʧ�ܣ������ţ�103��$_size=" . $_size . "--$_UPLOADFILES [size]=" . $_UPLOADFILES ["size"] );
			$_uploadInfo = array (
					"isSuccess" => "0",
					"message" => "�ļ�̫���ϴ�ʧ�ܣ������ţ�103",
					"url" => "" 
			);
			return $_uploadInfo;
		}
		
		if (! file_exists ( $path )) {
			mkdir ( $path );
		}
		$ext_name = strrchr ( $_name, '.' ); // ��ȡͼƬ����չ��
		
		$pattern='1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLOMNOPQRSTUVWXYZ';
		$key="";
		for($_i=0;$_i<12;$_i++)
		{
			$key .= $pattern{mt_rand(0,35)};    //����php�����
		} 
		
		
		if ($randName) {
			//$_fileName = $_UPLOADFILES ["size"] . "-" . @date ( "Ymdhis" ) . strtoupper ( $_name );
			$_fileName = $_UPLOADFILES ["size"] . "-" .$key.'_'. @date ( "Ymdhis" ).$ext_name;
		} else {			
			$_fileName =$_UPLOADFILES ["size"] . "-".$key.'_'.@date ( "Ymdhis" ).$ext_name;// $_name;
		}
		$_fileName = $path . $_fileName;
		
		if (move_uploaded_file ( $_UPLOADFILES ['tmp_name'], $_fileName )) {
			Log::WriteToFile ( "file", "�ϴ��ɹ���" );
			$_uploadInfo = array (
					"isSuccess" => "1",
					"message" => $_fileName . ":�ϴ��ɹ���",
					"url" => $_fileName 
			);
			return $_uploadInfo;
		} else {
			Log::Write ( "ͼƬ�ϴ�ʱ�����쳣���ϴ�ʧ�ܣ�" );
			$_uploadInfo = array (
					"isSuccess" => "0",
					"message" => $_fileName . ":ͼƬ�ϴ�ʱ�����쳣���ϴ�ʧ�ܣ������ţ�104",
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
		//	$key .= $pattern{mt_rand(0,35)};    //����php�����
		//}
	//	return $key;
//	}
	
}


