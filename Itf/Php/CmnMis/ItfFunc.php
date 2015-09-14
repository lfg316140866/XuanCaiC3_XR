<?php
class ItfFunc {
    //判断是否有权限
    public static function IsHasRight(&$retArray,$userID=null) {
        if($userID==null) { $userID = ItfFunc::GetUserID(); }
    	
        if($userID==""){
        	$retArray["HasNoLogin"] = "1";
        	$retArray["IsSuccess"] = "0";
        	$retArray["ErrMsg"] = "用户未登录！";        	
        	$retArray["UserName"] = "";
        	
        	return false;
        }
        
    	return true;
    }

    
    //----------------------------------------------------------
    /// <summary>
    /// 获取字段信息记录
    /// </summary>
    /// <param name="userFormId">用户表单代码</param>
    /// <returns name="array">数组</returns>
    public static function GetColumnInfoByUserFormID($userFormId,&$itfArray) {
    	$_userID = ItfFunc::GetUserID();
    
    	if (!ItfFunc::IsHasRight($itfArray,$_userID)) {
    		return $itfArray;
    	}
    
    	$_userformid = $userFormId;// Cmn.Request.Get("CurUserFormID");
    
    	if ($_userformid == "") {
    		return $itfArray->Error("用户表单代码为空！");
    	}
    
    	$_sql = "select selectsql from cmn_usr_userform where userformid = '" . $_userformid . "'";
    	//通过formid拿到数据库存储的目标表 sql
    	$_sel_sql = DB::getFieldValue($_sql);
    	//拿到主键
    	$_key = SqlAnalyse::GetKeyField($_sel_sql);
    
    	$_sql = "
	    	select a.userformcolid,a.colname,a.coltitle,a.colwidth,a.colcontroltypeid,
	    		b.controltypedesc,a.controlcfg,a.is_required,
		    	a.default_value,c.regexcontent,a.isshowinedit,a.isshowingrid,
		    	case when a.colalign=1 then 'center' when a.colalign=2 then 'right' when a.colalign=3 then 'left' end as colalign 
		    	,a.colhint colhint,c.errormsg errormsg,colformat
	    	from cmn_usr_userformcol as a
	    		left join cmn_usr_userformcontroltype as b on a.colcontroltypeid = b.controltypeid
	    		left join cmn_chk_regex as c on a.regexid=c.regexid
	    	where (isshowingrid = 1 or isshowinedit = 1) and userformid = '" . $_userformid . "' order by a.sortid ";
	    
    	$_rows = DB::getArray($_sql);

    	//Log::WriteToFile("tttt","记录条数：" . var_dump($_rows));
    	
    	
    	if (count($_rows) <= 0) {
    		return $itfArray->Error("字段信息为空！");
    	}
    
    	$itfArray["IsSuccess"] = "1";
    	$itfArray["ErrMsg"] = "";
    	$itfArray["KeyColName"]=  $_key;
    	$itfArray["RecCount"] = count($_rows);
    	
    	$itfArray["data"] = array();
    
    	foreach($_rows as $_row){
    		$_data = array();
    
    		$_data["ColName"] = $_row["colname"];
    		$_data["ColTitle"] = $_row["coltitle"];
    		$_data["ColWidth"] = $_row["colwidth"];
    		$_data["ColControlName"] = $_row["controltypedesc"];
    		$_data["IsRequired"] = $_row["is_required"];
    		$_data["IsShowInGrid"] = $_row["isshowingrid"];
    		$_data["IsShowInEdit"] = $_row["isshowinedit"];
    		$_data["RegexContent"] = $_row["regexcontent"];
    		$_data["RegexErrorMsg"] = $_row["errormsg"];
    		$_data["ColAlign"] = $_row["colalign"];
    		$_data["ColHint"] = $_row["colhint"];
    		$_data["ColFormat"] = $_row["colformat"];
    
    		$_controlcfg = $_row["controlcfg"];
    		
    		
    		if($_controlcfg!="" && $_controlcfg!="null") {
    			$_controlcfg = Str::json_to_array($_controlcfg);
    			
	    		if (count($_controlcfg)>=0) {
	    			$_controlType = DB::getFieldValue("
	    					select controltypedesc from cmn_usr_userformcontroltype 
	    					where controltypeid =" . $_row["colcontroltypeid"]);
	    
	    			/*autocomplete控件*/
	    			if ($_controlType == "AutoComplete") {
	    				$_controlcfg["FillSql"] = ItfFunc::FormatAutoCompleteSql($_controlcfg);
	    				$_controlcfg["InitAutoCompleteCfg"]["HideFields"] = "";
	    				$_controlcfg["InitAutoCompleteCfg"]["Limit"] = "";
	    				$_controlcfg["InitAutoCompleteCfg"]["KeyField"] = "";
	    			}
	    			
	    			if (array_key_exists("FillSql",$_controlcfg) && $_controlcfg["FillSql"] != null && $_controlcfg["FillSql"] != "") {
	    				$_controlcfg["FillSql"] = Str::Authcode($_controlcfg["FillSql"],"incode");
	    			}
	    		}
	    		
	    		if(count($_controlcfg)>=0) { $_data["ControlCfg"] =  $_controlcfg; }
	    		else { $_data["ControlCfg"] = ""; }
    		}
    		else { $_data["ControlCfg"] = ""; }
    
    
    		//默认值
			$_default_value = $_row['default_value'];
			
			if($_default_value=="null" || $_default_value==""){
				$_data["DefaultValue"] ="";
			}
			else{
				$_default_value = str_replace("'","",$_default_value,$_qty);
				
				if($_qty>0){ $_data["DefaultValue"] =$_default_value; }
				else{
					$_default_value = DB::getFieldValue("select ".$_default_value);
					$_data["DefaultValue"] =$_default_value;
				}
			}
    
			$itfArray["data"][] = $_data;
    	}
    	
    	//获取用户权限
    	$itfArray["AllowAdd"] = "1";
    	$itfArray["AllowDell"] = "1";
    	$itfArray["AllowModify"] = "1";
    	$itfArray["AllowToExcel"] = "1";
    	
    	if (!ItfFunc::IsSysAdmin($_userID)) { //不是Admin才需要获取权限
    		$_dt = DB::getArray("
	    		select * from (
		    		select IsShow,AllowAdd,AllowDell,AllowModify,AllowToExcel ,1 FromType
		    		from cmn_usr_UserRight ur
		    		where  ur.UserID='" . $_userID . "' and  ur.UserFormID='" . $_userformid . "'
		    		union all
		    		select IsShow,AllowAdd,AllowDell,AllowModify,AllowToExcel ,2 FromType
		    		from cmn_usr_UserGroupRight ur,cmn_usr_Users u
		    		where ur.UserGroupID=u.UserGroupID and u.UserID='" . $_userID . "'
		    		and  ur.UserFormID='" . $_userformid . "'
	    		) t order by FromType");
    	
    		if (count($_dt) > 0) {
    			if( $_dt[0]["AllowAdd"]=="0") { $itfArray["AllowAdd"] = "0"; }   	
    			if ( $_dt[0]["AllowDell"] == "0") { $itfArray["AllowDell"] = "0"; }
    			if ($_dt[0]["AllowModify"] == "0") { $itfArray["AllowModify"] = "0"; }
    			if ($_dt[0]["AllowToExcel"] == "0") { $itfArray["AllowToExcel"] = "0"; }
    		}
    	}
    	
    	return $itfArray;
    }
    //----------------------------------------------------------
    /// <summary>
    /// 处理sql中带中括号的字段(字段加上化名前缀后替换原先的字段)
    /// </summary>
    /// <param name="sql">sql语句</param>
    /// <param name="sqlClause">sql子句</param>
    /// <returns>替换好字段的sql子句</returns>
    public static function FormatFieldName($sql, $sqlClause) {
    	$_pattern = "/\\[[\\s]*[\\S]+[\\s]*\\]/";
    	$_reStr = Str::RegexMatchIndexList($_pattern,$sqlClause);
    
    	
    	if(count($_reStr)>0){
    		foreach($_reStr as $_index){
    			$_org = trim($_index['val']);
    			$_new = str_replace("]", "",str_replace("[", "",$_org));
    			$_mar = SqlAnalyse::GetFullFieldName($sql, $_new);
    			
    			$sqlClause =str_replace($_org, $_mar,$sqlClause); 
    		}
    	}
    
    	return $sqlClause;
    }
    //----------------------------------------------------------
    //autocomplete 格式化function
    private static function FormatAutoCompleteSql($controlCfg){
    	//拿到配置信息
    	$_controlcfg =Str::json_to_array($controlCfg);
    	//拿到隐藏字段
    	$_hideFields = $_controlcfg["InitAutoCompleteCfg"]["HIdeFields"];
    	//拿到即将执行的加密的sql
    	$_sql　=  trim($_controlcfg["FillSql"]);
    	//拿到显示的自大u年
    	$_dispFields = trim($_controlcfg["InitAutoCompleteCfg"]["Limit"]);
    	//拿到关键字段
    	$_keyField = trim($_controlcfg["InitAutoCompleteCfg"]["KeyField"]);
    	//拿到显示的条数
    	$_count = trim($_controlcfg["InitAutoCompleteCfg"]["Limit"]);
    	$_selectLst =  array();
    	$_bracketLst = array();
    	$sql = SqlAnalyse::wipeSubSelect($_sql, $_selectLst);
    	$sql = SqlAnalyse::wipeBracket($_sql, $_bracketLst);
    	$_formatSql = SqlAnalyse::deleteOrderBy($_sql);//去掉order by
    	
    	if ($_bracketLst != null) {
    		$_formatSql = SqlAnalyse::recoverBracket($_formatSql, $_bracketLst);
    	}
    	
    	if ($_selectLst != null) {
    		$_formatSql = SqlAnalyse::recoverSubSelect($_formatSql, $_selectLst);
    	}
    	
    	$_dispFieldsArr =  explode(",", $_dispFields); //显示的field
    	$_hideFieldsArr =  explode(",", $_hideFields); //不显示但是查询的field
    	$_totalCount = count($_dispFieldsArr)+count($_hideFieldsArr)+1; //字段的个数
    	//占位符
    	$_where = "";//条件
    	$_sqlArr = array();//sql数组
    	
    	//根据查询的自段设置占位符
    	for($_i=0;$_i<$_totalCount;$_i++){
	    	if($_i == $_totalCount-1){ $_where .=$_keyField." like '%$".$_i."$%' "; }
	    	else{ $_where .=$_keyField." like '%$".$_i."$%' "." and "; }
    	}
    	
    	$_sqlArr[0] = SqlAnalyse::addWhere($_formatSql, $_where);
    
    	$_where = "";
    	
    	//拼接显示字段查询sql
    	for($_j=0;$_j<count($_dispFieldsArr);$_j++){
    		for($_i=0;$_i<$_totalCount;$_i++){
	    		if($_i == $_totalCount-1){
	    			$_where .=$_dispFieldsArr[$_j]." like '%$".$_i."$%' ";
	    		}
	    		else{ $_where .=$_dispFieldsArr[$_j]." like '%$".$_i."$%' "." and "; }
    		}
    		
    		$_sqlArr[$_j+1] = SqlAnalyse::addWhere($_formatSql, $_where);
    		$_where = "";
    	}
    		
    	$_where = "";
    		
    	//拼接显示字段查询sql
    	for($_j=0;$_j<count($_hideFieldsArr);$_j++){
    		for($_i=0;$_i<$_totalCount;$_i++){
	    		if($_i == $_totalCount-1){
	    			$_where .=$_hideFieldsArr[$_j]." like '%$".$_i."$%' ";
	    		}
	    		else{ $_where .=$_hideFieldsArr[$_j]." like '%$".$_i."$%' "." and "; }	
    		}
    		
    		$_sqlArr[$_j+(count($_dispFieldsArr)+1)] = SqlAnalyse::addWhere($_formatSql, $_where);
    		$_where = "";
    	}
    
    
    	$_formatSql = "";
    
    	//拼接sql语句
    	for($_i=0;$_i<count($_sqlArr);$_i++){
	    	if($_i == 0){ $_formatSql .=$_sqlArr[$_i]." limit 0,".$_count; }
		    
	    	$_formatSql .=" union  ".$_sqlArr[$_i]." limit 0,".$_count;
   	 	}
    
    	return $_formatSql;
	} 
	//----------------------------------------------------------
	//获取用户代码的CacheKey
	public  static function GetUserIDCacheKey() {
		$_sessionID = Request::Get("CurSessionID");
	
		if($_sessionID=="") {
			return "";
		}
		else { return "Cmn_Login_UserID_".$_sessionID;
		}
	}
	//----------------------------------------------------------
	//获取当前登录的用户代码  add by sulgar
	public static  function GetUserID() {
		if(ItfFunc::GetUserIDCacheKey()=="") { //不是代理方式
			if(isset($_SESSION["Cmn_User_ID"])&&$_SESSION["Cmn_User_ID"]!=""){
				$userID =$_SESSION["Cmn_User_ID"]; 
				ItfFunc::SetUserID($userID);
					
				return $userID;
			}
			else { return ""; }
		}
		else { //代理方式
			if(!(Cache::get(ItfFunc::GetUserIDCacheKey())==null
					|| Cache::get(ItfFunc::GetUserIDCacheKey())=="")){
				$userID = Cache::get(ItfFunc::GetUserIDCacheKey());
				ItfFunc::SetUserID($userID);
					
				return $userID;
			}
			else { return ""; }
		}
	}
	//----------------------------------------------------------
	//设置当前用户代码 add by sulgar
	public static function SetUserID($userID) {
		if(ItfFunc::GetUserIDCacheKey()!="") { //代理方式
			Cache::set(ItfFunc::GetUserIDCacheKey(),$userID,1200);
		}
		else { //不是代理方式
			$_SESSION["Cmn_User_ID"] = $userID;
		}
	}
	//----------------------------------------------------------
	//退出登录
	public static function ExitLogin(){
		if(ItfFunc::GetUserIDCacheKey()=="") { //可能是代理方式
			$_SESSION["Cmn_User_ID"] = "";
			return true; 
		}
		else { //代理方式		
			Cache::delete(ItfFunc::GetUserIDCacheKey());
			return true;
		}
	}
	//----------------------------------------------------------
	//执行sql
	public static function ExeSql(){
		$_sql = Request::Get("sql",false,false);
		$_retArray = new ItfArray();
	
		if($_sql=="" || $_sql==null){ return $_retArray->Error("无参数无法执行")->ToString(); }
		
		$_sql = SqlAnalyse::ReplaceVarInSql($_sql);
	
		if(DB::exeSql($_sql)){ return $_retArray->Success()->ToString(); }
		else{ return $_retArray->Error(DB::$LastError)->ToString(); }
	}
	//----------------------------------------------------------
	//获取某个字段的值
	public static function GetFieldValue(){
		$_sql = Request::Get("sql",false,false);
		$_retArray = new ItfArray();
		
		if($_sql=="" || $_sql==null){ return $_retArray->Error("参数错误")->ToString(); }
	
		//if (get_magic_quotes_gpc()==1){ $_sql=stripcslashes($_sql); }//解决转义符问题
		
		$_sql = SqlAnalyse::ReplaceVarInSql($_sql);
		
		$_value = DB::getFieldValue($_sql);
		
		$_retArray["value"] = $_value;
	
		return $_retArray->Success()->ToString();
	}
	//----------------------------------------------------------
	//获取数据结果集
	public static function GetResultSet(){
		$_sql = Request::Get("sql",false,false);
		$_retArray = new ItfArray();
		$_top = Request::Get("Top");
	
		if($_sql=="" || $_sql==null){ return $_retArray->Error("参数错误")->ToString(); }
		
		//if (get_magic_quotes_gpc()==1){ $_sql=stripcslashes($_sql); } //解决转义符问题
		
		$_sql = SqlAnalyse::ReplaceVarInSql($_sql);
	
		if ($_top != "") {  //有top值
			$_sql = SqlAnalyse::AddLimitToSelect($_sql, " limit ".$_top." ");
		}
		
		$_result = DB::getResultSet($_sql);
	
		
		if($_result=="") { return $_retArray->Error(DB::$LastError)->ToString(); }
		else { return AjaxJson::ResultSetToJson($_result); }
	}
	//----------------------------------------------------------
	/// <summary>
	/// 检查排序列是否有空值，如果为空的话置成主键的值
	/// </summary>
	/// <param name="tableName">表名</param>
	/// <param name="keyField">主键字段名</param>
	/// <returns></returns>
	public static function CheckSortField( $tableName,$keyField) {
		$_sortFieldName = trim(Request::Get("Cg_SortFieldName"));
	
		if ($_sortFieldName == "") { return false; }
	
		return DB::exeSql(
			"update " . $tableName . " set  `" . $_sortFieldName . "` =`" .$keyField.
			"` where `" . $_sortFieldName ."` is null "
		);
	}
	//--------------------------------------------------
	/// <summary>
	/// 判断用户是不是系统管理员
	/// </summary>
	/// <param name="userID"></param>
	/// <returns></returns>
	public static function IsSysAdmin($userID) {
		if (DB::getFieldValue("select usergroupid from cmn_usr_users where userid='" . $userID . "'") == "1") {
			return true;
		}
		else { return false; }
	}
	//--------------------------------------------------
	//处理sql多语句
	public static function ProcessSqlMutiSentence($sql){
		
	}
	//--------------------------------------------------
}

?>