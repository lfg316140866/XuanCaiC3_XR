<?php
require_once(dirname(__FILE__).'/../SystemConfig.php');
require_once(dirname(__FILE__).'/../Cmn/Str.php');
require_once(dirname(__FILE__).'/../Cmn/Json.php');
require_once(dirname(__FILE__).'/../Cmn/Log.php');
require_once(dirname(__FILE__).'/../Cmn/Safe.php');
require_once(dirname(__FILE__).'/../Cmn/SqlAnalyse.php');
include_once dirname(__FILE__).'/../Cmn/Func.php';
require_once(dirname(__FILE__).'/../Cmn/Request.php');
require_once(dirname(__FILE__).'/../Cmn/ItfArray.php');
require_once(dirname(__FILE__).'/../Cmn/Cookies.php');
require_once(dirname(__FILE__).'/../Cmn/Session.php');
require_once('UserFormProcessItf.php');
require_once('ItfFunc.php');
//是否是天猫系统
if($CONFIG['DBConnType']=="Tmall"){
	require_once (dirname(__FILE__).'/../Cmn/DBTmall.php');
	require_once (dirname(__FILE__).'/../Cmn/TmallCache.php');
}
else if($CONFIG['DBConnType']=="PDO"){
	require_once (dirname(__FILE__).'/../Cmn/DBPDO.php');
	require_once (dirname(__FILE__).'/../Cmn/Cache.php');
	require_once (dirname(__FILE__).'/../Cmn/UploadFile.php');
}
else{
	require_once (dirname(__FILE__).'/../Cmn/DB.php');
	require_once (dirname(__FILE__).'/../Cmn/Cache.php');
	require_once (dirname(__FILE__).'/../Cmn/UploadFile.php');
}
include_once dirname(__FILE__).'/../Cmn/AjaxJson.php';
include_once dirname(__FILE__).'/../Cmn/Net.php';





 