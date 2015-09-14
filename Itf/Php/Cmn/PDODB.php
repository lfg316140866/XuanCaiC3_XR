<?php
/**?
 ?*?@author?? 黄启
?*?@version???1.1.0?
* @description sql 分析
* getArray 修改 2013-9-29
* getTableFields 获取表字段
***********************************************************/

class DB{		
			private static $version = "2";
			private static $mysqlHost = "127.0.0.1";
			private static $mysqlPort = "3306";
			private static $DBName = "nutrilon";
			private static $username = "root";
			private static $passwd= ""; 
			public static $LastError="";
			
			//获取数据库链接
			private static function getConn(){
				global $CONFIG;
				DB::$mysqlHost = $CONFIG['DBConfig']['DB_Host'];
				DB::$mysqlPort = $CONFIG['DBConfig']['DB_Port'];
				DB::$DBName = $CONFIG['DBConfig']['DB_Name'];
				DB::$username = $CONFIG['DBConfig']['DB_Account'];
				DB::$passwd = $CONFIG['DBConfig']['DB_Password'];
				
				
				//$_conn = mysql_connect(DB::$DB_Server,DB::$DB_Account,DB::$DB_Password);
				$_conn = new PDO('jdbc:mysql://' .DB::$mysqlHost . ':' . DB::$mysqlPort . '/' . DB::$dbName . '?

characterEncoding=utf8',
						DB:: $username,
						DB:: $passwd);

				return $_conn;
			}
			
			//执行sql语句
			public static function exeSql($sql){
				$_conn = DB::getConn();
				try {
					$_conn->query($sql);
					$glb_PDO = null;
					return true;
				}catch (Exception $ex){
					$_conn = null;
					Log::Error("sql error:".$ex->getMessage()."  sql:".$sql);
					Log::Write($ex->getMessage());
					DB::$LastError=$ex->getMessage();
					return false;
				}
			}
			
			//获取某个字段的值
			public static function getFieldValue($sql){
				$_conn = DB::getConn();
			
				try {
					$PDOSta = $_conn -> query($sql);
					$_conn = null;
					$retValue = $PDOSta->fetch();
					return $retValue[0];
				}catch (Exception $ex){
					$_conn = null;
					Log::Error("sql error: ".$ex->getMessage()."  sql:".$sql);
					Log::Write($ex->getMessage());
					DB::$LastError=$ex->getMessage();
					return "";
				}
			}
			
			//根据sql语句获取ResultSet
			public static function getResultSet($sql){
				$_conn = DB::getConn();
				try {
					$PDOSta = $_conn -> query($sql);
					$glb_PDO = null;
					return $PDOSta;
				}catch (Exception $ex){
					$_conn = null;
					Log::Error("sql error: ".$ex->getMessage()."  sql:".$sql);
					Log::Write($ex->getMessage());
					DB::$LastError=$ex->getMessage();
					return "";
				}
			}
			
			/**
			 **@function exeSql_AffectedByRows
			 **@return -1 表示执行错误 0 >= 的话 表示sql 执行受影响的行数
			 **
			 **/
			public static function exeSql_AffectedByRows($str){
			
				$_conn = DB::getConn();
				try {
			
					$_rows = $_conn->exec($str);
			
					$_conn = null;
					if(!$_rows){
			
						$_rows=-1;
					}
					return $_rows;
				}catch (Exception $ex){
					$_conn = null;
					DB::writeLog($ex->getMessage());
					return -1;
				}
			
			}
		
			//防注入
			public static function SqlSafe($sql) {
				$sql = str_replace("<","&lt;",$sql);
				$sql = str_replace(">","&gt;",$sql);
				return  str_replace("'", "''", $sql);
			}
				
			
			//取参数
			public static function  GetRequest($paramName) {
				return DB::SqlSafe($_REQUEST[$paramName]);
			}
				
						
			public static function getfromurlps($orgurl,$ps,$value){
			if( strpos($orgurl, "&&")){$orgurl = str_replace("&&", "&", $orgurl);}
			if($_REQUEST["$ps"]==""){
			    	if($value==null){return $orgurl;}
			    	else{return $orgurl."&".$ps."=".$value;} 
				}else{
					if($value==null){ 
						return str_replace($ps."=".$_REQUEST["$ps"], "", $orgurl);
					}else{
						return str_replace($ps."=".$_REQUEST["$ps"], $ps."=".$value, $orgurl);
					} 
				}
			}
				
		public static function redirecturl($url){
			header("location:/d/".$url);
		}
    
    //根据sql语句获取数组
    public static function getArray($sql) {
    	$_rs = DB::getResultSet($sql);
    	$_results = array();
    
    	foreach($_rs->fetchAll(PDO::FETCH_ASSOC) as $_row){
    		$_result = array();
    		foreach($_row as $key=>$val){
    			$_result[$key] =$val;
    		}
    		$_results[] = $_result;
    	}
    	return $_results;
    }
    
    
    
    //获取某个表中所有的字段列表
    //$tableName:表名
    //$keyColName:主键字段名
    //$isForceGet:是否强制获取，为是的时候，如果没有记录会插入一条记录后获取
    public static function getTableFields($tableName,$keyColName,$isForceGet){
    	$_results = DB::getResultSet("select * from ".$tableName." limit 0,1");
    	
    	$_resArray =  $_results->fetch(PDO::FETCH_ASSOC);
    	
    	$_newRecID = ""; //新的记录代码
    	
    	if($_resArray==false && $isForceGet==true) { //没有字段，可能是没有记录导致    		
    		$_newRecID = DB::getFieldValueByTransaction("insert into ".$tableName.
    			" () values ();select last_insert_id()");
    		
    		$_results = DB::getResultSet("select * from ".$tableName." limit 0,1");
    		 
    		$_resArray =  $_results->fetch(PDO::FETCH_ASSOC);
    	}
    	
    	$_fields = array();     	
    	
     	foreach($_resArray as $_key=>$_val){
     		$_fields[$_key] = $_key;
     	}
     	
     	if($_newRecID!="") { //说明插入过字段需要删除
			DB::exeSql("delete from ".$tableName." where ".$keyColName."=".$_newRecID);
     	}
     	
     	return $_fields;
    }
    
    //根据sql语句获取Json字符串
    public static function getJson($sql) {    	
    	$_rs = DB::getResultSet($sql);
    	 
    	return Json::ResultSetToJson($_rs);
    } 
		
//     //防注入
//     public static function SqlSafe($sql) {
// 	    $sql = str_replace("<","&lt;",$sql);
// 	    $sql = str_replace(">","&gt;",$sql);
// 	    return  str_replace("'", "''", $sql);
//     }
				
	
    //执行多句sql语句
    public static function execTransaction($str){
    	$_conn = DB::getConn();
	    $strarr= explode(";",$str);
		try {
			$_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$_conn->beginTransaction();
			foreach ($strarr as $s){
				$_conn->exec($s.";");
			}
			$_conn->commit();
			$_conn = null;
		}catch (Exception $e){
			$_conn->rollBack();
			$_conn = null;
			Log::Error("sql error: ".$e->getMessage()."  sql:".$str);
			Log::Write($e->getMessage());
			DB::$LastError=$e->getMessage();
			return false;
		}
		return true;
    }
				
    //执行多句sql并取返回值  多句sql语句最后一句是返回数据的语句，语句之间用;隔开
    public static function getFieldValueByTransaction($str){
// 	    $glb_PDO = DB::getPdo();
    	$_conn = DB::getConn();
    	$strarr= explode(";",$str);
		$length =count($strarr);
		if($strarr[count($strarr)-1]==""){
			$length=count($strarr)-1;
		}
		try {
			$_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$_conn->beginTransaction();
			
			for ($i=0;$i<$length;$i++){
				$_conn->exec($strarr[$i].";");
			}
			$retValue=$_conn->query($strarr[$length-1].";")->fetch();
			
			$_conn->commit();
			$glb_PDO=null;
			return  $retValue[0];
		} catch (Exception $e) {
			$_conn=null;
			Log::Error("sql error: ".$e->getMessage()."  sql:".$str);
			Log::Write($e->getMessage());
			DB::$LastError=$e->getMessage();
			return "";
		}
    }
			
    public static function writeLog($str){
    	Log::Write("DB_Error", $str);
        //echo "日志：". $str . " ";
	    //$appLog -> debug("*******************************************");
	    //$appLog -> debug($str);
	    //$appLog -> debug("*******************************************");
    }
}

?>