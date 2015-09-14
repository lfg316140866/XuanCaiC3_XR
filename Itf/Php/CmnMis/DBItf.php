<?php 
header('KissyIoDataType:jsonp');
require_once('IncludeFiles.php');

$action = $_REQUEST["method"];
$_retVal = '';

$_ip = Request::GetIP();

if($_ip !="58.211.23.240"){
	$_retVal = '{"Return":"0","Tip":"对不起!非法IP!"}';
}
else {
	switch ($action) {
		case 'exeSql' : // 执行sql
			$_retVal = ItfFunc::ExeSql();
			break;
		case 'getFieldValue' : // 获取执行sql值
			$_retVal = ItfFunc::GetFieldValue();
			break;
		case 'getResultSet' : // 获取sql数据集
			$_retVal = ItfFunc::GetResultSet();
			break;
		default :
			break;
	}
}

echo $_retVal;



?>