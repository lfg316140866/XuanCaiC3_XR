<?php
/**
* @author  黄启
* @version 1.1.0
* @description sql 分析
***********************************************************/
@session_start(); //启用session

class UserFormProcessItf{
	//----------------------------------------------------------
	/// <summary>
	/// 更新明细表单数据
	/// </summary>
	/// <param name="joItf"></param>
	/// <returns></returns>
	private static function GetUpdateDetailUserFormSql(&$retArray,$mainTableRecID) {
		if (trim(Request::Get("cg_DetailUserForm")) == "") { //没有明细表单数据
			return "";
		} 
	
		$_arrDetailUserForm = Str::json_to_array(Request::Get("cg_DetailUserForm"));
		
		if(count($_arrDetailUserForm)<=0) { return ""; }
	
		$_retSql = "";
	
		for ($_i = 0; $_i < count($_arrDetailUserForm); $_i++) {
			$_detailData = Str::json_to_array(Request::Get($_arrDetailUserForm[$_i]["ColName"]));
	
			if (count($_detailData)<=0) { return ""; }
	
			$_userformid = $_arrDetailUserForm[$_i]["UserFormID"];
	
			//通过formid拿到数据库存储的目标表 sql
			$_dispSql = DB::getFieldValue("select selectsql from cmn_usr_userform where userformid = '" . $_userformid . "'");
			$_tableName = SqlAnalyse::GetMainTableName($_dispSql); //表名
			$_keyField = SqlAnalyse::GetKeyField($_dispSql); //主键			
			$_fieldList = DB::getTableFields($_tableName, $_keyField); //字段列表
	
			for ($_k = 0; $_k < count( $_detailData); $_k++) {
				$_joRec = $_detailData[$_k]; //这里在c#版本中要把所有的key转成小写的，但在php里面应该不需要的，因为所有的字段名都是小写的
	
				if (($_detailData[$_k]["CmnOpt"]."") == "Add") { //增加记录
					$_fields = "";  //要更新的字段列表
					$_fieldVals = ""; //要更新的值列表
					
					//拿到字段 以及传过来的值
					foreach ($_fieldList as $_field) {
						$_parm = null;
	
						if (strtolower($_field) == strtolower($_arrDetailUserForm[$_i]["ForeignKeyFieldName"])) { //外键
							$_parm = $mainTableRecID;
						}
						else if (isset($_joRec[$_field])) { $_parm = $_joRec[$_field]; }
	
						if ($_parm != null) {
							//当主键有值的时候才插入，如果没有值就不插入了
							if (strtolower($_keyField) == strtolower($_field) && ($_parm == "" || strpos($_parm,"ID_")!==false)) { }
							else {
								if ($_parm == "") { $_parm = "null"; }
								else { $_parm = "'" . $_parm . "'"; }
						
								$_fields .= "`" . $_field . "`,";
								$_fieldVals .= $_parm . " ,";
							}
						}
						
// 						if ((!($_parm == null)) && strtolower($_keyField) != strtolower($_field)) {
// 							if ($_parm == "") { $_parm = "null"; }
// 							else { $_parm = "'" . $_parm . "'"; }
	
// 							$_fields .= "`" . $_field . "`,";
// 							$_fieldVals .= $_parm . " ,";
// 						}
					}
					
					//加系统字段
					$_fields .= "cmn_modifydate,cmn_lastuserid,cmn_createdate,cmn_createuserid";
					$_fieldVals .="now(),'".ItfFunc::GetUserID()."',now(),'".
							ItfFunc::GetUserID()."'";
				
					//去除最后一个逗号
					//$_fields = _fields.Substring(0, _fields.Length - 1);
					//$_fieldVals = _fieldVals.Substring(0, _fieldVals.Length - 1);
	
					$_retSql .= "insert into " . $_tableName."(".$_fields.") values(".$_fieldVals.") ; ";
				}
				else if ($_detailData[$_k]["CmnOpt"] == "Update") { //更新记录
					$_fieldAndVals = "";
					$_recID = $_detailData[$_k][$_keyField];
	
					if ($_recID == "") { $retArray->Error("更新失败！没有记录代码参数。"); return ""; }
	
					//拿到字段 以及传过来的值
					foreach ($_fieldList as  $_field) {
						if ($_field == "cmn_modifydate") { $_fieldAndVals .= "cmn_modifydate=now(),"; }
						else if ($_field == "cmn_lastuserid") {
							$_fieldAndVals .= "cmn_lastuserid='" . ItfFunc::GetUserID() . "',";
						}
						else {
							$_parm = null;
	
							if (strtolower($_field) == strtolower($_arrDetailUserForm[$_i]["ForeignKeyFieldName"])) { //外键
								$_parm = $mainTableRecID;
							}
							else if (isset($_joRec[$_field])) { $_parm = $_joRec[$_field]; }
	
							if ((!($_parm == null)) && strtolower($_keyField) != strtolower($_field)) { //有这个参数的话
								if ($_parm == "") { $_parm = "null"; }
								else { $_parm = "'" . $_parm . "'"; }
	
								$_fieldAndVals .= " `" . $_field . "` = " . $_parm . ",";
							}
						}
					}
	
					//去掉最后的逗号
					$_fieldAndVals = substr($_fieldAndVals,0,strlen($_fieldAndVals) - 1);
	
					$_retSql .= "update " . $_tableName . " set " . $_fieldAndVals . " where " . $_keyField . 
						"='" . $_recID . "' ; ";
				}
				else if ($_detailData[$_k]["CmnOpt"] == "Delete") { //删除记录
					$_recID = $_detailData[$_k][$_keyField];
	
					if ($_recID == "") { $retArray->Error("更新失败！没有记录代码参数。"); return ""; }
	
					$_retSql .= " delete from " . $_tableName . " where " . $_keyField . "='" . $_recID . "' ; ";
				}
			}
		}
	
		return $_retSql;
	}
	//----------------------------------------------------------
	/**
	 * 添加记录
	 */
	public static  function AddRec(&$retArray){
		if (!ItfFunc::IsHasRight($retArray)) {
			return $retArray->ToString();
		}
		
		$_userformid = Request::Get("CurUserFormID");

		//通过formid拿到数据库存储的目标表 sql
		$_sel_sql = DB::getFieldValue("select selectsql from cmn_usr_userform where userformid = '"
				.$_userformid."'");
		//拿到表
		$_tableName = SqlAnalyse::getMainTableName($_sel_sql);

		//拿到目标表的结果集
		//$_results = DB::getResultSet("select * from ".$_tableName." limit 0,1");
		
		//拿到主键
		$_key = SqlAnalyse::getKeyField($_sel_sql);
		
		$_fields = "";
		$_parameter = "";
	
		//拿到字段
		$_fieldList = DB::getTableFields($_tableName,$_key,true);
		
		
		//拿到字段 以及传过来的值
		foreach($_fieldList as $fieldval){
			$_field =  $fieldval;
 			$parm = Request::Get($_field,true);
 			
 			if((!($parm===null)) && $_key!=$_field){
 				if($parm===""){ $parm = "null"; }
 				else { $parm = "'".$parm."'"; }
 				
 				$_fields .="  `".$_field."` , ";
 				$_parameter .="  ".$parm." , ";
 			}
		}
		
		//加系统字段
		$_fields .= "cmn_modifydate,cmn_lastuserid,cmn_createdate,cmn_createuserid";
		$_parameter .="now(),'".ItfFunc::GetUserID()."',now(),'".
			ItfFunc::GetUserID()."'";
		
		
 		//拼接插入sql
 		$_exec_sql = "insert into ".$_tableName." (" .$_fields.") values ( ".$_parameter." )";
//echo $_exec_sql;
 		$_last_insert_id = DB::getFieldValueByTransaction($_exec_sql." ; select last_insert_id()");
 		
 		if($_last_insert_id!=""){ //插入成功
 			$retArray->Success();
 			$retArray["NewRecID"] = $_last_insert_id;

 			//处理明细表单数据
 			if (Request::Get("cg_DetailUserForm") != "") {
 				$_sql = UserFormProcessItf::GetUpdateDetailUserFormSql($retArray,$_last_insert_id);
 			
 				if ($_sql != "") {
 					if (DB::execTransaction($_sql) == false) { $retArray->Error("增加明细记录失败！"); }
 				}
 			}
 		}
 		else{
 			$retArray->Error("增加失败！可能是数据格式存在问题！");
 			$retArray["NewRecID"] = "";
 		}
 		
 		ItfFunc::CheckSortField($_tableName, $_key); //检查自动排序字段
 		
		return $retArray->ToString();
	}
	//----------------------------------------------------------
	/**
	 *  删除
	 */
	public  static  function DeleteRec(&$retArray){
		if (!ItfFunc::IsHasRight($retArray)) {
			return $retArray->ToString();
		}
		
		$_userformid =Request::Get("CurUserFormID");
		$_RecID =Request::Get("RecID");
		$_sql = "select selectsql from cmn_usr_userform where userformid = '".$_userformid."'";
		//通过formid拿到数据库存储的目标表 sql
		$_sel_sql = DB::getFieldValue($_sql);
		//拿到目标表的结果集
		$_results = DB::getResultSet($_sel_sql);
		
		//拿到表
		$_tableName = SqlAnalyse::getMainTableName($_sel_sql);
		$_key = SqlAnalyse::getKeyField($_sel_sql);
		//拼接插入sql
		$_exec_sql = "delete from ".$_tableName." where ".$_key."=".$_RecID;
		
		if(DB::exeSql($_exec_sql)){ $retArray->Success(); }
		else{ $retArray->Error("删除记录失败！请重新尝试。"); }
		
		return $retArray->ToString();
	}
	//----------------------------------------------------------
	/**
	 * 更新
	 */
	public  static  function UpdateRec(&$retArray){
		if (!ItfFunc::IsHasRight($retArray)) {
			return $retArray->ToString();
		}
		
		$_userformid =Request::Get("CurUserFormID");
		$_isBatchUpdate = Request::Get("IsBatchOpt"); //是否批量操作
		
		//通过formid拿到数据库存储的目标表 sql
		$_dispSql = DB::getFieldValue("select selectsql from cmn_usr_userform where userformid = '".$_userformid."'");
		$_tableName = SqlAnalyse::getMainTableName($_dispSql); //拿到表
		$_keyField = SqlAnalyse::getKeyField($_dispSql);
		$_fieldAndVals = "";
		$_fieldList = DB::getTableFields($_tableName,$_keyField);//拿到字段列表
		
		if($_isBatchUpdate=="1"){
			$_recList = trim(Request::Get("RecList"));
			
			if ($_recList == "") {
				return $retArray->Error("更新失败！更新数据列表为空。")->ToString();
			}
			
			$_joRecList = ( array )json_decode($_recList);
			
			$_sql = "";
			$_dataArray = Str::json_to_array($_joRecList["data"]);
			
			for ($_i = 0; $_i < count($_dataArray); $_i++) {
				$_fieldAndVals = "";
			
				for($_k=0;$_k<count($_fieldList);$_k++) {
					if ($_fieldList[$_k] == "cmn_modifydate") {
						$_fieldAndVals .= "cmn_modifydate=now(),";
					}
					else if ($_fieldList[$_k] == "cmn_lastuserid") {
						$_fieldAndVals .= "cmn_lastuserid='".ItfFunc::GetUserID(). "',";
					}
					else {
						 $_parm = null;
			
						if (isset($_dataArray[$_i][$_fieldList[$_k]])) {
							$_parm = $_dataArray[$_i][$_fieldList[$_k]] . "";
						}
			
						if ((!($_parm == null)) && strtolower($_keyField) != strtolower($_fieldList[$_k])) { //有这个参数的话
							if ($_parm == "") { $_parm = "null"; }
							else { $_parm = "'" . $_parm . "'"; }
			
							$_fieldAndVals .= " `".$_fieldList[$_k]."` = " . $_parm . ",";
						}
					}
				}
			
			
				//去掉最后的逗号
				$_fieldAndVals = substr($_fieldAndVals,0,strlen($_fieldAndVals) - 1);
			
				$_sql .= " update " . $_tableName . " set " . $_fieldAndVals . " where " . $_keyField . "='" .
					$_dataArray[$_i][strtolower($_keyField)] . "';";
			}
			
			if (!DB::execTransaction($_sql)) {
				$retArray->Error("更新记录失败！可能是数据格式存在问题。");
			}
		}
		else {
			$_recID =Request::Get("RecID");
			
			if ($_recID == "") {
				return $retArray->Error("更新失败！没有记录代码参数。")->ToString();
			}
			
			//拿到字段 以及传过来的值
			foreach($_fieldList as $fieldval){
				$_field =  $fieldval;
				$parm = Request::Get($_field,true);
				//有这个参数的话
				
				if((!($parm===null)) && $_keyField!=$_field){
					if($parm===""){ $parm = "null"; }
					else { $parm = "'".$parm."'"; }
								
					$_fieldAndVals .=" `".$_field."` = ".$parm.",";
				}
			}
			
			//加系统字段
			$_fieldAndVals .= "cmn_modifydate=now(),cmn_lastuserid='".ItfFunc::GetUserID()."'";
			
	 		//拼接插入sql
	 		$_exec_sql = "update ".$_tableName." set " .$_fieldAndVals." where ".$_keyField."=".$_recID;
	 		
	 		if(DB::exeSql($_exec_sql)){ 
	 			$retArray->Success(); 
	 		
	 			//处理明细表单数据
	 			if (Request::Get("cg_DetailUserForm") != "") {
	 				$_sql = UserFormProcessItf::GetUpdateDetailUserFormSql($retArray,$_recID);
	 				
	 				if ($_sql != "") {
	 					if (DB::execTransaction($_sql) == false) { $retArray->Error("增加明细记录失败！"); }
	 				}
	 			}
	 		}
	 		else{ $retArray->Error("更新记录失败！可能是数据格式存在问题。"); }
		}
		
		return $retArray->ToString();
	}
	//----------------------------------------------------------
	/**
	 * 获取GetRecList的sql语句
	 */
	private static  function GetRecListSql() {
		$_userformid = Request::Get("CurUserFormID");
		$_sql = "select selectsql from cmn_usr_userform where userformid = '".$_userformid."'";
		$_recid = Request::Get("RecID");
		
		if($_sql=="" || $_userformid=""){
			return "{\"RecCount\":\"0\",\"data\":[]}";
		}
		
		//通过formid拿到数据库存储的目标表 sql
		$_sel_sql = DB::getFieldValue($_sql);
		
		//替换sql中的变量
		$_sel_sql = SqlAnalyse::ReplaceVarInSql($_sel_sql);
		
		//get key
		$_key = SqlAnalyse::getKeyField($_sel_sql);
		
		//拿到表
		$_tableName = SqlAnalyse::getMainTableName($_sel_sql);
		
		//拿到结果集
		//$_results = DB::getResultSet("select * from ".$_tableName." limit 0,1");
		$_where = " ".SqlAnalyse::getFullFieldName($_sel_sql,$_key)."=".$_recid;
		
		//执行的sql
		$_exec_sql = $_sel_sql;
		if($_recid!="" && $_recid!=null){
			$_exec_sql = SqlAnalyse::addWhere($_exec_sql,$_where);
		}
		
		//模糊查询的条件
		$_fuzzy_matching_fieldAndval = "";
		
		$_searchCol = Request::Get("SearchCol"); // 被搜索的列
		$_searchContent = Request::Get("SearchContent"); //搜索内容
		
		if($_searchCol!="" && $_searchContent!=""){
			$_exec_sql = SqlAnalyse::addWhere($_exec_sql,
					SqlAnalyse::getFullFieldName($_sel_sql,$_searchCol)." like '%".$_searchContent."%'");
		}
		
		//加Condition条件，就是where条件
		$_condition = Request::Get("Condition",false,false);
		
		//if (get_magic_quotes_gpc()==1){ $_condition = stripcslashes($_condition); }
		
		if (trim($_condition) != "") {
			$_exec_sql = SqlAnalyse::addWhere($_exec_sql,
					ItfFunc::FormatFieldName($_exec_sql, $_condition));
		}
		
		
		//加排序
		$_orderBy = Request::Get("SortBy");
		
		if ($_orderBy != "") {
			$_exec_sql = SqlAnalyse::AddSortSentence($_exec_sql,
					ItfFunc::FormatFieldName($_exec_sql, $_orderBy));
		}
		
		return $_exec_sql;
	}
	//----------------------------------------------------------
	/**
	 * 查询
	 */
	public static  function GetRecList(&$retArray){
		if (!ItfFunc::IsHasRight($retArray)) {
			return $retArray->ToString();
		}
		
		return	AjaxJson::SqlToJson(UserFormProcessItf::GetRecListSql(),"","","",false);		
	}
	//----------------------------------------------------------
	/**
	 * 获取字段信息
	 */
	public static   function GetColumnInfo(&$retArray){
		$_userformid =Request::Get("CurUserFormID");
		
		$_retVal = ItfFunc::GetColumnInfoByUserFormID($_userformid,$retArray);
		
		return $retArray->ToString();
	}
	//-------------------------------------
	/// <summary>
	/// 获取用户表单信息记录
	/// </summary>
	/// <returns name="string">json字符串</returns>
	public static function GetUserFormInfo(&$retArray)
	{
		if (!ItfFunc::IsHasRight($retArray)) {
			return $retArray->ToString();
		}
	
		$_tableName = trim(Request::Get("TableName"));
		$_userFormID = trim(Request::Get("UserFormID"));
		$_where = "";
	
		if ($_userFormID != "") {
			$_where = " userformid='".$_userFormID."' ";
		}
		else {
			if ($_tableName != "") {
				$_where = " tablename='" . $_tableName . "' ";
			}
			else { return $retArray->Error("此表不存在，获取信息失败")->ToString(); }
		}
	
		$_dt = DB::getArray("
			select userformid,formdesc,formurl,pagesize,b.userformmoduledesc,
				b.userformmoduleid,tablename,c.file_name as ListTemplateFileName,
				d.file_name as EditTemplateFileName
			from cmn_usr_userform as a
				left join cmn_usr_userformmodule as b on a.userformmoduleid = b.userformmoduleid
				left join cmn_template as c on a.list_template_id = c.template_id
				left join cmn_template as d on a.edit_template_id = d.template_id
			where " . $_where . "  order by userformid asc limit 1");
	
		if (count($_dt)<=0) {
			return $retArray->Error("此表不存在，获取信息失败")->ToString();
		}
	
		$_userFormId = $_dt[0]["userformid"];
	
		ItfFunc::GetColumnInfoByUserFormID($_userFormId,$retArray);
	
		$retArray["userformid"]= $_userFormId;
		$retArray["formdesc"]= $_dt[0]["formdesc"];
		$retArray["formurl"]= $_dt[0]["formurl"];
		$retArray["pagesize"]= $_dt[0]["pagesize"];
		$retArray["userformmoduledesc"]= $_dt[0]["userformmoduledesc"];
		$retArray["userformmoduleid"]= $_dt[0]["userformmoduleid"];
		$retArray["tablename"]= $_dt[0]["tablename"];
		$retArray["ListTemplateFileName"]= $_dt[0]["ListTemplateFileName"];
		$retArray["EditTemplateFileName"]= $_dt[0]["EditTemplateFileName"];
	
		return $retArray->ToString();
	}
	//----------------------------------------------------------
	/**
	 * 获取menu
	 */
// 	public static  function GetMenu(&$retArray){
// 		//Log::Write("进入getmenu");
// 		$_userID = ItfFunc::GetUserID();

// 		if (!ItfFunc::IsHasRight($retArray,$_userID)) {
// 			return json_encode($retArray);
// 		}
		
// 		//判断有没有模块代码
// 		$_where = "";
// 		$_userFormModuleID = Request::Get("UserFormModuleID");
		
// 		if ($_userFormModuleID != "") { //说明有模块参数
// 			$_where = " and (uf.userformmoduleid='" . $_userFormModuleID .
// 				"' or ufm1.userformmoduleid='" . $_userFormModuleID . "' or ufm2.userformmoduleid='" . 
// 				$_userFormModuleID . "' )";
// 		}
		
// 		if(ItfFunc::IsSysAdmin($_userID)) {			
// 			$_sql = "
// 				select userformid,formdesc,formurl,pagesize,ufm.userformmoduledesc,ufm.userformmoduleid,
// 					iufm.icon_path as userformmodule_icon,
// 					ufm1.userformmoduledesc as SecondModuleDesc,ufm1.userformmoduleid as SecondModuleID,
// 					iufm1.icon_path as SecondModuleIcon,
// 					ufm2.userformmoduledesc as RootModuleDesc,ufm2.userformmoduleid as RootModuleID,
// 					iufm2.icon_path as RootModuleIcon,
// 					tablename,c.file_name as ListTemplateFileName,d.file_name as EditTemplateFileName,
// 					e.file_name as JsTemplateFileName,iuf.icon_path as userform_icon,uf.isshowinmenu
// 				from cmn_usr_userform as uf
// 					left join cmn_usr_userformmodule as ufm on uf.userformmoduleid = ufm.userformmoduleid
// 					left join cmn_usr_userformmodule as ufm1 on ufm.ParentUserFormModuleID=ufm1.UserFormModuleID
// 					left join cmn_usr_userformmodule as ufm2 on ufm1.ParentUserFormModuleID=ufm2.UserFormModuleID
// 					left join cmn_template as c on uf.list_template_id = c.template_id
// 					left join cmn_template as d on uf.edit_template_id = d.template_id
// 					left join cmn_template as e on uf.js_template_id = e.template_id
// 					left join cmn_icon as iuf on uf.icon_id = iuf.icon_id
//                     left join cmn_icon as iufm on ufm.icon_id = iufm.icon_id
//                     left join cmn_icon as iufm1 on ufm.icon_id = iufm1.icon_id
//                     left join cmn_icon as iufm2 on ufm.icon_id = iufm2.icon_id"
//                 . ($_where==""?"":" where ".$_where) . "
// 				order by ufm2.sortid desc,ufm1.sortid desc,ufm.sortid desc, uf.sortid desc ";
// 		}
// 		else {					
// 			$_sql = "
// 				select userformid,formdesc,formurl,pagesize,ufm.userformmoduledesc,ufm.userformmoduleid,
// 					iufm.icon_path as userformmodule_icon,
// 					ufm1.userformmoduledesc as SecondModuleDesc,ufm1.userformmoduleid as SecondModuleID,
// 					iufm1.icon_path as SecondModuleIcon,
// 					ufm2.userformmoduledesc as RootModuleDesc,ufm2.userformmoduleid as RootModuleID,
// 					iufm2.icon_path as RootModuleIcon,
// 					tablename,c.file_name as ListTemplateFileName,d.file_name as EditTemplateFileName,
// 					e.file_name as JsTemplateFileName,iuf.icon_path as userform_icon,uf.isshowinmenu
// 				from cmn_usr_userform as uf
// 					left join cmn_usr_userformmodule as ufm on uf.userformmoduleid = ufm.userformmoduleid
// 					left join cmn_usr_userformmodule as ufm1 on ufm.ParentUserFormModuleID=ufm1.UserFormModuleID
// 					left join cmn_usr_userformmodule as ufm2 on ufm1.ParentUserFormModuleID=ufm2.UserFormModuleID
// 					left join cmn_template as c on uf.list_template_id = c.template_id
// 					left join cmn_template as d on uf.edit_template_id = d.template_id
// 					left join cmn_template as e on uf.js_template_id = e.template_id
// 					left join cmn_icon as iuf on uf.icon_id = iuf.icon_id
//                     left join cmn_icon as iufm on ufm.icon_id = iufm.icon_id
//                     left join cmn_icon as iufm1 on ufm.icon_id = iufm1.icon_id
//                     left join cmn_icon as iufm2 on ufm.icon_id = iufm2.icon_id
// 				where " . ($_where==""?"":$_where." and ") . " (exists(
// 						select * from cmn_usr_userright ur
// 						where uf.userformid=ur.userformid  and userid='" . $_userID . "' and isshow='1'
// 					) or exists(
// 						select * from cmn_usr_usergroupright ugr,cmn_usr_users u
// 						where u.usergroupid=ugr.usergroupid and u.userid='" . $_userID . "'
// 							and ugr.userformid=uf.userformid and ugr.isshow='1' and not exists(
// 									select * from cmn_usr_userright uur
// 									where uur.userid='" . $_userID . "' and uur.userformid=uf.userformid
// 								)
// 					))
// 				order by ufm2.sortid desc,ufm1.sortid desc,ufm.sortid desc,uf.sortid desc ";
// 		}
		
// 		$_data = DB::getArray($_sql);
// 		$retArray->Success();
// 		$retArray["RecCount"] = count($_data);
// 		$retArray["data"] = $_data;
		
// 		return $retArray->ToString();
// 	}
	//----------------------------------------------------------
	/// <summary>
	/// 获得某个菜单的子菜单（如果是叶子菜单的话获取的是菜单下面的用户表单）
	/// </summary>
	/// <param name="moduleObj">菜单模块对象</param>
	/// <param name="userFormDT">用户表单DataTable</param>
	/// <returns>是否找到了他的儿子</returns>
	private static function GetSonMenu(&$moduleObj,$userFormDT) {
		$_moduleID = $moduleObj["ModuleID"];
		$_dt = null;
		$_hasSon = false;
	
		if ($_moduleID == "") { //说明是根菜单
			$_dt = DB::getArray("
				select userformmoduleid,userformmoduledesc,i.icon_path
				from cmn_usr_userformmodule  ufm
					left join cmn_icon i on ufm.icon_id=i.icon_id
				where parentuserformmoduleid is null order by ufm.sortid desc ");
		}
		else {
			$_dt = DB::getArray("
				select userformmoduleid,userformmoduledesc,i.icon_path
				from cmn_usr_userformmodule  ufm
					left join cmn_icon i on ufm.icon_id=i.icon_id
				where parentuserformmoduleid ='" . $_moduleID . "' order by ufm.sortid desc ");
		}
	
		if (count($_dt) <= 0) { //没有父亲了说明已经是叶子菜单了
			foreach ($userFormDT as $_item) {
				if ($_moduleID == $_item["userformmoduleid"]) { //有用户表单
					if ($_hasSon == false) {
						$_hasSon = true;
						$moduleObj["UserForms"] = array();
					}
	
					$_joUserForm = array();
	
					$_joUserForm["UserFormID"] = $_item["userformid"];
					$_joUserForm["FormDesc"] = $_item["formdesc"];
	
					if ($_item["formurl"] != "") {
						$_joUserForm["FormUrl"] = $_item["formurl"];
					}
	
					if ($_item["userform_icon"] != "") {
						$_joUserForm["UserFormIcon"] = $_item["userform_icon"];
					}
	
					$_joUserForm["PageSize"] = $_item["pagesize"];
					$_joUserForm["TableName"] = $_item["tablename"];
	
					if ($_item["ListTemplateFileName"] != "") {
						$_joUserForm["ListTpl"] = $_item["ListTemplateFileName"];
					}
	
					if ($_item["EditTemplateFileName"] != "") {
						$_joUserForm["EditTpl"] = $_item["EditTemplateFileName"];
					}
	
					if ($_item["JsTemplateFileName"] != "") {
						$_joUserForm["JsTpl"] = $_item["JsTemplateFileName"];
					}
	
					if ($_item["isshowinmenu"] == "0") { //默认为显示，所以显示的话就不抛出了
						$_joUserForm["IsShow"] = $_item["isshowinmenu"];
					}
	
					$moduleObj["UserForms"][] = $_joUserForm;
				}
			}
		}
		else {
			$_sons = array();
			
			foreach($_dt as $_item) {
				$_moduleObj = array();
	
				$_moduleObj["ModuleID"] = $_item["userformmoduleid"];
				$_moduleObj["ModuleDesc"] = $_item["userformmoduledesc"];
				$_moduleObj["ModuleIcon"] = $_item["icon_path"];
	
				if (UserFormProcessItf::GetSonMenu($_moduleObj, $userFormDT)) {
					$_hasSon = true;
					$_sons[] = $_moduleObj;
				}
			}
			
			$moduleObj["Sons"] = $_sons;
		}
	
		return $_hasSon;
	}
	//----------------------------------------------------------
	/// <summary>
	/// 获取菜单列表
	/// </summary>
	/// <returns name="string">json字符串</returns>
	public static function GetMenu(&$retArray) {	
		$_userID = ItfFunc::GetUserID();
	
		if (!ItfFunc::IsHasRight($retArray,$_userID)) {
			return $retArray->ToString();
		}
	
		//判断有没有模块代码
		$_userFormModuleID = trim(Request::Get("UserFormModuleID"));
	
		$_sql = "
			select userformid,formdesc,formurl,pagesize,ufm.userformmoduledesc,ufm.userformmoduleid,
				iufm.icon_path as userformmodule_icon,
				tablename,c.file_name as ListTemplateFileName,d.file_name as EditTemplateFileName,
				e.file_name as JsTemplateFileName,iuf.icon_path as userform_icon,uf.isshowinmenu,ufm.sortid
			from cmn_usr_userform as uf
				left join cmn_usr_userformmodule as ufm on uf.userformmoduleid = ufm.userformmoduleid
				left join cmn_template as c on uf.list_template_id = c.template_id
				left join cmn_template as d on uf.edit_template_id = d.template_id
				left join cmn_template as e on uf.js_template_id = e.template_id
				left join cmn_icon as iuf on uf.icon_id = iuf.icon_id
				left join cmn_icon as iufm on ufm.icon_id = iufm.icon_id ";
	
		if (ItfFunc::IsSysAdmin($_userID)) { //系统管理员
	
		}
		else { //其他用户
			$_sql = $_sql.
				" where  (exists(
					select * from cmn_usr_userright ur
					where uf.userformid=ur.userformid  and userid='" . $_userID . "' and isshow='1'
				) or exists(
					select * from cmn_usr_usergroupright ugr,cmn_usr_users u
					where u.usergroupid=ugr.usergroupid and u.userid='" . $_userID . "'
						and ugr.userformid=uf.userformid and ugr.isshow='1' and not exists(
								select * from cmn_usr_userright uur
								where uur.userid='" . $_userID . "' and uur.userformid=uf.userformid
							)
				)) ";
		}
	
		$_sql .= " order by ufm.sortid desc, uf.sortid desc";
	
		$_data = DB::getArray($_sql);
		
		if ($_data == null &&  count($_data) <= 0) {
			return $retArray->Error("无菜单数据！")->ToString();
		}
	
		$retArray->Success();
		$retArray["RecCount"] = count($_data);
	
	
		$_moduleObj = array();
	
		$_moduleObj["ModuleID"] = $_userFormModuleID;
		UserFormProcessItf::GetSonMenu($_moduleObj, $_data);
	
		if (array_key_exists("Sons", $_moduleObj)) {
			$retArray["data"] = $_moduleObj["Sons"];
		}
		else if (array_key_exists("UserForms",$_moduleObj)) {
			$retArray["data"] = $_moduleObj["UserForms"];
		}
	
		return $retArray->ToString();
	}
	//----------------------------------------------------------
	/**
	 * 登录
	 */
	public static  function Login(&$retArray){
		$_username = Request::Get("UserName");
		$_password = Request::Get("PassWord");
		
		if($_username=="" || $_password=="" || $_username==null || $_password==null){
			return $retArray->Error("paramerror 参数有误！")->ToString();		
		}
		
		$_password = md5($_password);
		
		$_userid = DB::getFieldValue("select userid from cmn_usr_users where username = '".$_username.
				"' and password='".$_password."'");
		
		Log::Write("sql::"."select userid from cmn_usr_users where username = '".$_username.
				"' and password='".$_password."'");
		Log::Write("GetUserIDCacheKey::".ItfFunc::GetUserIDCacheKey());

		if($_userid!="" && $_userid!=null){ //登录成功
			ItfFunc::SetUserID($_userid);
			return $retArray->Success("登录成功！")->ToString();
		}
		else{ //登录失败
			//尝试用任务系统账号登录
			$_retFromLogin = "";
			//JObject _jo = null;
			
			try {
				$_retFromLogin=Net::GetRemoteData("http://soft.cagoe.com/CmnAjax/Do.aspx?Method=Cmn.Mis.LoginManage.AjaxLogin&UserName=" .
					$_username . "&Password=" . $_password . "&FromUrl=" . urldecode(Request::GetUrl()));
				
				$_jo = str::json_to_array($_retFromLogin);
			}
			catch(Exception $ex){
				Log::Error("在用户登录，从任务系统远程登录的时候报错！错误信息：" . $ex->getMessage());
				return $retArray->Error("用户名或密码错误！")->ToString();
			}
					
			if ($_jo["IsSuccess"] == "1") {  //登录成功
				$_userid = DB::getFieldValue("select UserID from cmn_usr_Users where UserName='". $_username . "'");
			
				if ($_userid == "") { //当前系统不存在这个账号，需要新建
					//用户分组1默认为系统管理员，从任务系统过来的都放到这个组
					$_userid = DB::getFieldValueByTransaction(
						"insert into cmn_usr_Users(username,password,usergroupid) values('".
							$_username . "','" . $_password . "','1') ; select last_insert_id()");
				}
				else { //可能当前系统，用户的密码不对了，更新密码
					DB::exeSql("update cmn_usr_Users set password='" . $_password . "' where UserID='" . $_userid . "'");
				}
				
				if ($_userid != "") { //登录成功
					ItfFunc::SetUserID($_userid);
					return $retArray->Success("登录成功！")->ToString();
				}
			}
			
			return $retArray->Error("用户名或密码错误！")->ToString();
		}
	}
	//----------------------------------------------------------
	//退出登录 add by sulgar
	public static function ExitLogin(&$retArray) {		
		if(ItfFunc::ExitLogin()==true) { $retArray->Success(); }
		else{ $retArray->Error("退出登录失败！"); }
				
		return $retArray->ToString();
	}
	//----------------------------------------------------------
	//获取当前登录用户名  add by sulgar
	public static function GetLoginUserName(&$retArray) {
		if (!ItfFunc::IsHasRight($retArray)) {
			return $retArray->ToString();
		}
		
		$_userID = ItfFunc::GetUserID();
		$_userName = DB::getFieldValue("select username from cmn_usr_users where userid = '"
				.$_userID."'");		
		
		$retArray->Success();
		$retArray["UserName"] = $_userName;
		
		return $retArray->ToString();
	}
	//----------------------------------------------------------
	//获取系统配置
	public static function GetSysCfg(&$retArray) {
		$_cfgKey = Request::Get("CfgKey");
		
		if($_cfgKey=="") { $retArray->Error("找不到CfgKey"); }
		else {
			$_cfgValue = DB::getFieldValue("select cfgvalue from cmn_syscfg where cfgkey='".$_cfgKey."'");
			$retArray->Success();
			$retArray["CfgValue"] = $_cfgValue;
		}
		
		return $retArray->ToString();
	}
	//----------------------------------------------------------
	//执行加密sql语句 返回json
	public static function ExecSql(&$retArray){
		if (!ItfFunc::IsHasRight($retArray)) {
			return $retArray->ToString();
		}
		
		$_sql = Request::Get("ExecSql"); //获取生成加密sql语句
		$_param = Request::Get("param"); //获取参数
		$_param = trim($_param);
		$_params = explode(" ", $_param);
		$_keysWords = array(); //条件参数
		$_keysWordsLen = 2;    //
	
		$_sql = Str::Authcode($_sql);	//解密
		
		//替换sql中的变量
		$_sql = SqlAnalyse::ReplaceVarInSql($_sql);
		
		while(true){
			if(substr_count($_sql,"$".$_keysWordsLen."$")<=0){ break; }
			$_keysWordsLen++;
		}
		
		if($_param == "" || $_param == null){ //非autocomplete
			$_data = DB::getArray($_sql);
			$retArray->Success();
			$retArray["RecCount"] = count($_data);
			$retArray["data"] = $_data;

			return $retArray->ToString();
		}
		else{
			if($_params[0]=="*"){$_keysWords[]="";}
			
			if(count($_params)>0){
				for($_i=0;$_i<$_keysWordsLen;$_i++){
					$_keysWords[$_i] = $_params[0];
				}
			}
			
			for($_i=1;$_i<count($_params);$_i++){
				if(count($_params)>$_i){$_keysWords[$_i] = $_params[$_i];}
			}
		}
		
		//替换占位符
		for($_i=0;$_i<$_keysWordsLen;$_i++){
			$_sql = str_replace("$".$_i."$",$_keysWords[$_i],$_sql);
		}
		
		$_data = DB::getArray($_sql);
		$retArray->Success();
		$retArray["RecCount"] = count($_data);
		$retArray["data"] = $_data;
		
		return $retArray->ToString();
	}
	//----------------------------------------------------------
	/// <summary>
	/// 获取接口配置中sql接口对应的数据
	/// </summary>
	/// <returns></returns>
	public static function GetSqlData(&$retArray)
	{
		$_itfName = Request::Get("ItfName");
		$_where = Request::Get("Where",false,false);
		$_orderby = Request::Get("OrderBy");
		$_userFormId = "";
		$_cfgSql = "";
	
		if ($_itfName == "") {
			$retArray["data"] = array(); return $retArray->Error("参数有误！")->ToString();
		}
	
		$_userFormId = DB::getFieldValue("
			select userformid from cmn_itf_interface where itfname='" . $_itfName . "'");
	
		$_cfgSql = DB::getFieldValue("select `Sql` from cmn_itf_interface where itfname = '" .
			$_itfName . "'");

		
		if ($_cfgSql == "") { //找不到对应的sql
			$retArray["data"] = array(); 
			
			if(DB::getFieldValue("select interfaceid from cmn_itf_interface where itfname = '" .
					$_itfName . "'")=="") {  
				return $retArray->Error("接口名为'".$_itfName."'的接口不存在！")->ToString();
			}
			else { return $retArray->Error("接口对应的sql为空,无法执行！")->ToString(); }
		}
	
		//替换sql中的变量
		$_cfgSql = SqlAnalyse::ReplaceVarInSql($_cfgSql);
		
		//获取参数列表，替换sql语句中的占位符
		if (strpos($_cfgSql,"#") !== false) {
			//替换当前语言
			//$_cfgSql = $_cfgSql.Replace("#CurLanguageID#",((int)Cmn.Language.GetCurLanguage()).ToString());
	
			foreach ($_REQUEST as $_key=>$_value) {
				$_cfgSql = str_replace("#" . trim($_key) . "#",Request::Get($_value),$_cfgSql);
			}
		}
	
		if ($_where != "") {
			$_where = ItfFunc::FormatFieldName($_cfgSql, $_where);
			$_cfgSql = SqlAnalyse::AddWhere($_cfgSql,$_where);
		}
	
		if ($_orderby != "") {
			$_orderby = ItfFunc::FormatFieldName($_cfgSql, $_orderby);
			$_cfgSql = SqlAnalyse::AddSortSentence($_cfgSql,$_orderby);
		}
	
		return AjaxJson::SqlToJson($_cfgSql,"","","",false,30,$retArray);
	}
	//----------------------------------------------------------
	/// <summary>
	/// 获取当前登录用户代码
	/// </summary>
	/// <returns></returns>
	public static function GetUserID(&$retArray) {
		if (!ItfFunc::IsHasRight($retArray)) {
			return $retArray->ToString();
		}
		
		$retArray["UserID"] = ItfFunc::GetUserID();
	
		return $retArray->ToString();
	}
	//----------------------------------------------------------
	//导出CSV
	public static  function GetCSV(&$retArray){
		if (!ItfFunc::IsHasRight($retArray)) {
			return $retArray->ToString();
		}
		
		$_userformid = Request::Get("CurUserFormID");
		$_sql = UserFormProcessItf::GetRecListSql();
		$_formdesc =DB::getFieldValue("select formdesc from cmn_usr_userform
				where userformid = '".$_userformid."'");
	
		$_count = SqlAnalyse::getRecCount($_sql);
		$_pageSize = 10000;
		$_pageCount = ceil($_count/$_pageSize);
		$_filename =$_formdesc.".csv";//文件名
		
		header("Content-type:text/csv;charset=gbk");
		header("Content-Disposition:attachment;filename=".$_filename);
		header('Cache-Control:must-revalidate,post-check=0,pre-check=0');
		header('Expires:0');
		header('Pragma:public');
	
		$_data = $_formdesc."\n";
		
		for($_k = 1; $_k<=$_pageCount;$_k++){
			$_sql2=$_sql." limit ".(($_k-1)*$_pageSize).",".$_pageSize;
			
			$_arrList = DB::getArray($_sql2);
			
			if($_k==1){
				$_tmpArray = new ItfArray();
				$_columJson = UserFormProcessItf::GetColumnInfo($_tmpArray);
				$_arrCol =( array )json_decode($_columJson);
	
				if(empty($_arrList)) {
					return UserFormProcessItf::i("没有符合您要求的数据！^_^");
				}
				for($_j=0;$_j<count($_arrCol["data"]);$_j++){
					if($_j == count($_arrCol["data"])-1){
						$_data.= UserFormProcessItf::FormatCsvField($_arrCol["data"][$_j]->ColTitle)."\n";
					}else{
						$_data.= UserFormProcessItf::FormatCsvField($_arrCol["data"][$_j]->ColTitle).",";
					}
				}
			}
			
			$_size_result = sizeof($_arrList);
	
			for($_i = 0 ; $_i < $_size_result ; $_i++) {
				for($_j=0;$_j<count($_arrCol["data"]);$_j++){
					$_col = $_arrCol["data"][$_j]->ColName;
					
					$_colContent = ""; 

					if(isset($_arrList[$_i][$_col])) {
						$_colContent  =  UserFormProcessItf::FormatCsvField($_arrList[$_i][$_col]);
					}

					if($_j == count($_arrCol["data"])-1 ){ $_data .=$_colContent."\n"; }
					else{ $_data .= $_colContent.","; }

				}
				
			}
		}
	
		$_data = iconv('utf-8','gbk//IGNORE',$_data);
		
		return $_data;
	}
	//----------------------------------------------------------
	/// <summary>
	/// 格式化Csv文件中的某一个字段内容
	/// </summary>
	/// <param name="fieldStr">某一个字段内容</param>
	/// <returns>格式化后的某一字段内容</returns>
	private static function FormatCsvField($fieldStr) {	
		$fieldStr = str_replace("\"", "\"\"",$fieldStr);
		$fieldStr = "\"" . $fieldStr . "\"";
	
		return $fieldStr;
	}
	//-----------------------------------------
	/// <summary>
	/// 是否是系统管理员
	/// </summary>
	/// <param name="joItf"></param>
	/// <returns></returns>
	public static function IsSysAdmin(&$retArray) {
		if (!ItfFunc::IsHasRight($retArray)) {
			return $retArray->ToString();
		}
		
		if (ItfFunc::IsSysAdmin(ItfFunc::GetUserID())) {
			$retArray["IsSysAdmin"] = "1";
		}
		else { $retArray["IsSysAdmin"] = "0"; }
	
		return $retArray->Success()->ToString();
	}
	//----------------------------------------------------------
}


?>