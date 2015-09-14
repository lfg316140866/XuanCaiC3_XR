<?php
require_once('IncludeFiles.php');

//鑾峰彇鎵ц鐨勬柟娉�
    $_method = Request::Get("method");
    $_retArray = new ItfArray();
    $_retVal = "";
    
	if(!isset($_method) || $_method==""){
		$_retArray->Error("方法名不能为空！");
		$_retVal = $_retArray->ToString();
	}
	else{
		$_UserFormProcessItf = new UserFormProcessItf();
		
	 
// 		if($_method!="Login" && $_method!="GetSysCfg" && $_method!="GetSysCfg" && ItfFunc::GetUserID()=="") {
// 			$_retArray["data"]=array();
// 			ItfFunc::IsHasRight($_retArray);
// 			$_retVal = json_encode($_retArray);
// 		}
// 		else {
		switch($_method){
			case 'AddRec':
				$_retVal= $_UserFormProcessItf->AddRec($_retArray); 
				break;
			case 'DeleteRec':
				$_retVal=$_UserFormProcessItf->DeleteRec($_retArray);
				break;
			case 'UpdateRec':
				$_retVal=$_UserFormProcessItf->UpdateRec($_retArray);
				break;
			case 'GetRecList':
				$_retVal=$_UserFormProcessItf->GetRecList($_retArray);
				break;
			case 'SearchRec':
				$_retVal=$_UserFormProcessItf->SearchRec($_retArray);
				break;
			case 'GetColumnInfo':
				$_retVal=$_UserFormProcessItf->GetColumnInfo($_retArray);
				break;
			case 'GetMenu':
				$_retVal=$_UserFormProcessItf->GetMenu($_retArray);
				break;
			case 'Login':
				$_retVal=$_UserFormProcessItf->Login($_retArray);
				break;
			case 'ExitLogin':
				$_retVal=$_UserFormProcessItf->ExitLogin($_retArray);
				break;
			case 'GetLoginUserName':
				$_retVal=$_UserFormProcessItf->GetLoginUserName($_retArray);
				break;
			case 'GetSqlData':
				$_retVal = UserFormProcessItf::GetSqlData($_retArray);
				break;
			case 'ExecSql':
				$_retVal=UserFormProcessItf::ExecSql($_retArray);
				break;
			case 'DBExeSql':
				$_retVal = ItfFunc::ExeSql($_retArray);
				break;
			case 'DBGetFieldValue':
				$_retVal = ItfFunc::GetFieldValue($_retArray);
				break;
			case 'DBGetResultSet':
				$_retVal = ItfFunc::GetResultSet($_retArray);
				break;
			case 'GetSysCfg':
				$_retVal = $_UserFormProcessItf->GetSysCfg($_retArray);
				break;
			case 'DataSet':
				$_retVal = json_encode($_UserFormProcessItf->ExecSql($_retArray));
				break;
				 
			case 'GetUserFormInfo':
				$_retVal = UserFormProcessItf::GetUserFormInfo($_retArray);
				break;
			case 'GetUserID':
				$_retVal = UserFormProcessItf::GetUserID($_retArray);
				break;
			case 'GetCSV':
				$_retVal = UserFormProcessItf::GetCSV($_retArray);
				break;
			case 'IsSysAdmin':
				$_retVal = UserFormProcessItf::IsSysAdmin($_retArray);
				break;
			default:
				$_Message = array("IsSuccess"=>"0","ErrMsg"=>"找不到对应的方法！");
				$_retVal = json_encode($_Message);
				break;
			
		}
	//	}
		
		$_retVal = Func::JsonpHandle($_retVal);
		
		echo $_retVal;
	}
?>