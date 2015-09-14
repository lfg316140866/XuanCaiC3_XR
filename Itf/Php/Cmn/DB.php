<?php
class DB{
	static $DB_Server ='';
	static $DB_Account = '';
	static $DB_Password = '';
	static $DB_DBName = '';
	
	public static $LastError="";

	// 	static $DB_Server = "localhost";
	// 	static $DB_Account = "root";
	// 	static $DB_Password = "";
	// 	static $DB_DBName = "test";
	public static function  GetRequest($paramName) {
		if(isset($_REQUEST[$paramName])) {
			return Safe::sqlStr($_REQUEST[$paramName]);
		}
		else { return ""; }
	}
	
	/**
	 * 获取数据库连接
	 */
	public static function getConn(){
		 global $CONFIG;
		 DB::$DB_Server = $CONFIG['DBConfig']['DB_Host'].":".$CONFIG['DBConfig']['DB_Port'];
		 DB::$DB_Account = $CONFIG['DBConfig']['DB_Account'];
		 DB::$DB_Password = $CONFIG['DBConfig']['DB_Password'];
		 DB::$DB_DBName = $CONFIG['DBConfig']['DB_Name'];
		$_conn = mysql_connect(DB::$DB_Server,DB::$DB_Account,DB::$DB_Password);

		if (!$_conn) {
			DB::$LastError = mysql_error($_conn);
			die('Could not connect: ' . mysql_error($_conn));
		}
		mysql_select_db(DB::$DB_DBName,$_conn);
		mysql_query("SET NAMES 'utf8'");

		return $_conn;

	}

	/**
	 *执行sql,这个函数已经弃用，名字错了 
	 * @param string $sql sql语句
	 */
	public static function exeSql($sql){
		return DB::execSql($sql);
	}
	
	/**
	 * 执行sql
	 * @param string $sql sql语句
	 * @return boolean 是否执行成功
	 */
	public static function execSql($sql){
		$_conn = DB::getConn();
	
		try {
			if(strpos($sql,";")>0){ //句子中封号，可能是多语句
				$_strArray = array();
					
				$_oldSql = $sql; //原始sql主要用于写日志
				$sql = Str::WipeString($sql, $_strArray);
					
				$_sqlArray = explode(";",$sql); //切割字符串
					
				for ($_i=0;$_i<count($_sqlArray);$_i++){
					if(trim($_sqlArray[$_i])!="") { //sql不能为空
						$_tmpSql = Str::RecoverString($_sqlArray[$_i],$_strArray);
							
						$_rs = mysql_query($_tmpSql,$_conn);
							
						if($_rs==false) {
							DB::writeLog($_oldSql."\r\n-------\r\n当前执行的sql:".$_tmpSql."\r\n------\r\n".mysql_error($_conn));
							DB::$LastError = mysql_error($_conn);
							mysql_close($_conn);
								
							return false;
						}
					}
				}
			
				if(isset($_rs)==false) { //$_rs不存在
					DB::writeLog($sql."\r\n-------------\r\n execSql多语句执行失败！可能是只有封号的空语句");
					return false;
				}
			}
			else {
				if(!mysql_query($sql,$_conn)){
					DB::writeLog("execSql报错\r\n".$sql."\r\n-------------\r\n".mysql_error($_conn));
					DB::$LastError = mysql_error($_conn);
					mysql_close($_conn);
		
					return false;
				}
			}
			
			mysql_close($_conn);
			
			return true;
		}catch (Exception $ex){
			mysql_close($_conn);
			DB::writeLog($ex->getMessage());
			return false;
		}
	}

	/**
	 * 获取字段的值
	 * @param string $sql
	 * @return string 是否执行成功
	 */
	public static function getFieldValue($sql){
		$_conn = DB::getConn();
		
		try {
			if(strpos($sql,";")>0){ //句子中封号，可能是多语句
				$_strArray = array();
			
				$sql = Str::WipeString($sql, $_strArray);
			
				$_sqlArray = explode(";",$sql); //切割字符串
			
				for ($_i=0;$_i<count($_sqlArray);$_i++){
					if(trim($_sqlArray[$_i])!="") { //sql不能为空
						$_tmpSql = Str::RecoverString($_sqlArray[$_i],$_strArray);
			
						$_rs = mysql_query($_tmpSql,$_conn);
			
						if($_rs==false) {
							DB::writeLog($sql."\r\n-------------\r\n".mysql_error($_conn));
							DB::$LastError = mysql_error($_conn);
							mysql_close($_conn);
			
							return "";
						}
					}
				}
				
				if(isset($_rs)==false) { //$_rs不存在
					DB::writeLog($sql."\r\n-------------\r\n getFieldValue多语句执行失败！可能是只有封号的空语句");
					return "";
				}
			}
			else {
				$_rs = mysql_query($sql,$_conn);
				
				if($_rs == false){				
					DB::writeLog("getFieldValue报错\r\n".$sql."\r\n-------------\r\n".mysql_error($_conn));
					DB::$LastError = mysql_error($_conn);
					mysql_close($_conn);
					return "";
				}
			}
			
			mysql_close($_conn);
			 
			$_retVal = mysql_fetch_array($_rs);

			return $_retVal[0];
		}
		catch (Exception $ex){
			mysql_close($_conn);
			DB::writeLog($ex->getMessage());
			return "";
		}
	}

	/**
	 * 执行sql,获取结果集，返回ResultSet
	 * @param string $sql sql语句
	 * @param bool $isMultiSentence 是否是多语句
	 * @return string|resource
	 */
	public static function getResultSet($sql){
		$_conn = DB::getConn();

		try {
			if(strpos($sql,";")>0){ //句子中封号，可能是多语句
				$_strArray = array();
				
				$sql = Str::WipeString($sql, $_strArray);
				
				$_sqlArray = explode(";",$sql); //切割字符串
				
				for ($_i=0;$_i<count($_sqlArray);$_i++){
					if(trim($_sqlArray[$_i])!="") { //sql不能为空
						$_tmpSql = Str::RecoverString($_sqlArray[$_i],$_strArray);
						
						$_rs = mysql_query($_tmpSql,$_conn);
						
						if($_rs==false) {
							DB::writeLog($sql."\r\n-------------\r\n".mysql_error($_conn));
							DB::$LastError = mysql_error($_conn);
							mysql_close($_conn);
				
							return "";
						}
					}
				}
				
				if(isset($_rs)==false) { //$_rs不存在
					DB::writeLog($sql."\r\n-------------\r\n getResultSet多语句执行失败！可能是只有封号的空语句");
					return "";
				}
			}
			else { //单语句
				$_rs = mysql_query($sql,$_conn);
				
				if($_rs==false){				
					DB::writeLog("getResultSet错误\r\n".$sql."\r\n-------------\r\n错误号：".mysql_errno()."错误信息：".mysql_error($_conn));
					DB::$LastError = mysql_error($_conn);
					mysql_close($_conn);
					return "";
				}	
			}
			
			mysql_close($_conn);
			
			return $_rs;
		}catch (Exception $ex){
			mysql_close($_conn);
			DB::writeLog($ex->getMessage());
			return "";
		}
	}

	/**
	 * 执行sql,获取结果集对应的数组
	 * @param unknown_type $sql
	 * @return multitype:multitype:
	 */
	public static function getArray($sql) {
		$_rs = DB::getResultSet($sql);
		 
		$_array = array();
		
		if($_rs!=null && $_rs!==true) {
			while($_row = mysql_fetch_array($_rs,MYSQL_ASSOC)){
				$_array[]=$_row;
			}
		}
		 
		return $_array;
	}

	/**
	 * 执行sql，获取结果集对应的json
	 * @param unknown_type $sql
	 */
	public static function getJson($sql) {
		$_rs = DB::getResultSet($sql);
		
		if($_rs===true) {return "{}"; }
		else { return Json::ResultSetToJson($_rs); }
	}

	//     public static function SqlSafe($sql) {
	// 	    $sql = str_replace("<","&lt;",$sql);
	// 	    $sql = str_replace(">","&gt;",$sql);
	// 	    return  str_replace("'", "''", $sql);
	//     }


	/**
	 * 事务方式执行sql
	 * @param string $str sql语句
	 * @return boolean  执行是否成功
	 */
	public static function execTransaction($sql){
		return DB::execSql($sql);
		
// 		$_conn = DB::getConn();
// 		// $glb_PDO = DB::getPdo();
// 		$strarr= explode(";",$str);
// 		try {
// // 			foreach ($strarr as $s){
// // 				// $glb_PDO->exec($s);
// // 				if(trim($s)!="" && mysql_query($s,$_conn)==false) {					
// // 					DB::writeLog($str."\r\n-------------\r\n".mysql_error($_conn));
// // 					DB::$LastError = mysql_error($_conn);
// // 					mysql_close($_conn);
					
// // 					return false;
// // 				}
// // 			}
			
// 			for ($i=0;$i<count($strarr);$i++){
// 				if(trim($strarr[$i])!="" && mysql_query($strarr[$i],$_conn)==false) {
// 					DB::writeLog($str."\r\n-------------\r\n".mysql_error($_conn));
// 					DB::$LastError = mysql_error($_conn);
// 					mysql_close($_conn);
			
// 					//mysqli_rollback();
// 					return false;
// 				}
// 			}

// 			//@mysqli_commit();
// 			mysql_close($_conn);
// 		}catch (Exception $e){
// 			//mysqli_rollback();
// 			DB::writeLog($e->getMessage());
// 			return false;
// 		}
		
// 		return true;
	}

	/**
	 * 事务方式执行sql,并返回对应字段的值
	 * @param string $str sql语句
	 * @return string 字段的值
	 */
	public static function getFieldValueByTransaction($str){
		return DB::getFieldValue($str);
		
// 		// 	    $glb_PDO = DB::getPdo();
// 		$_conn = DB::getConn();
// 		$strarr= explode(";",$str);
		
// 		try {
// 			// 		    $glb_PDO->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
// 			// 		    $glb_PDO->beginTransaction();
// 			for ($i=0;$i<count($strarr)-1;$i++){			
// 				// 			    $glb_PDO->exec($strarr[$i]);
// 				if(mysql_query($strarr[$i],$_conn)==false) {				
// 					DB::writeLog($str."\r\n-------------\r\n".mysql_error($_conn));
// 					DB::$LastError = mysql_error($_conn);
// 					mysql_close($_conn);
										
// 					return "";
// 				}
// 			}
					
// 			$_rs = mysql_query($strarr[count($strarr)-1],$_conn);
			
// 			if($_rs==false) {				
// 				DB::writeLog($str."\r\n-------------\r\n".mysql_error($_conn));
// 				DB::$LastError = mysql_error($_conn);
// 				mysql_close($_conn);
				
// 				return "";
// 			}
			
// 			mysql_close($_conn);
// 			$_retVal = mysql_fetch_array($_rs);//mysql_fetch_array($_rs,MYSQL_ASSOC);
// 			// 		    $glb_PDO=null;
// 			return  $_retVal[0];
// 		} catch (Exception $e) {
// 			// 		    $glb_PDO=null;
// 			mysql_close($_conn);
// 			DB:: writeLog($e->getMessage());
			
// 			return "";
// 		}
	}
		
	//
	//$tableName:
	//$keyColName:
	//$isForceGet:
	/**
	 * 获取某个表中所有的字段列表
	 * @param string $tableName 表名
	 * @param string $keyColName 主键字段名
	 * @param boolean $isForceGet 是否强制获取，为是的时候，如果没有记录会插入一条记录后获取
	 * @return array 字段数组 
	 */
	public static function getTableFields($tableName,$keyColName,$isForceGet=false){
		$_results = DB::getResultSet("select * from ".$tableName." limit 0,1");
	
		$_fields = array();
		
		$_field = mysql_num_fields($_results );
		
		for ( $i = 0; $i < $_field; $i++ ) {
			$_fields[] = mysql_field_name( $_results, $i );
		}
		
		
// 		$_resArray =  mysql_fetch_array($_results);
	
// 		$_newRecID = ""; //新的记录代码
	
// 		if($_resArray==false && $isForceGet==true) { //没有字段，可能是没有记录导致
// 			$_newRecID = DB::getFieldValueByTransaction("insert into ".$tableName.
// 					" () values ();select last_insert_id()");
	
// 			$_results = DB::getResultSet("select * from ".$tableName." limit 0,1");
			 
// 			$_resArray =  mysql_fetch_array($_results);
// 		}
	
// 		$_fields = array();
	
// 		foreach($_resArray as $_key=>$_val){
// 			$_fields[$_key] = $_key;
// 		}
	
// 		if($_newRecID!="") { //说明插入过字段需要删除
// 			DB::execSql("delete from ".$tableName." where ".$keyColName."=".$_newRecID);
// 		}
	
		return $_fields;
	}
	
	
	public static function writeLog($str){
		Log::WriteToFile("DB_Error", $str);
	}
}
?>