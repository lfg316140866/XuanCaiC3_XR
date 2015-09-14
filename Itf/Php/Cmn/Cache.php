<?php
/**
 * cache
 * @author Administrator
 *
 */

class Cache{
 
	
	private static $CONNECT = null;              //数据库连接对象
	
	public static $CACHETABLENAME = "cmn_cache"; //cache表名
	
 
	/**
	 * 添加cache
	 * @param String $cacheKey cacheKey 缓存的键
	 * @param data $_data      cache的数据 
	 * @param int $cachetime   cache时间 以秒为单位 默认10秒
	 */
	public static function set($cacheKey,$_data,$cachetime=10){

		//创建缓存表（回自动check当前缓存表是否存在 存在将不会做任何操作）
		Cache::createCacheTable(Cache::$CACHETABLENAME);
		
		$_cacheVal = "";
		
		$_date = date("Y-m-d H:i:s",(strtotime("now")+($cachetime*1000)));
		
		if(is_array($_data)){ $_cacheVal = json_encode($_data);}
		else {$_cacheVal = $_data;}
		
		
		$_checkCacheKeySql = "select count(1) from ".Cache::$CACHETABLENAME." where cmn_cachekey = '".$cacheKey."'";
		
		$_rs = DB::getFieldValue($_checkCacheKeySql);
		
		$_setCacheSql = "";

		if($_rs !="0" && $_rs!=""){
			$_setCacheSql = "update ".Cache::$CACHETABLENAME." set cmn_cachevalue = '".$_cacheVal.
				"' , cmn_cachedate='".$_date."' where cmn_cachekey = '".$cacheKey."'";
		}
		else {				 
			$_setCacheSql = "INSERT into ".Cache::$CACHETABLENAME."(cmn_cachekey,cmn_cachevalue,cmn_cachedate) 
				values('".$cacheKey."','".$_cacheVal."','".$_date."')";
		}
		 
		Log::Write("_setCacheSql::".$_setCacheSql);
		
		DB::exeSql($_setCacheSql);
	}

	/**
	 * 获取cache
	 * @param string $cacheKey cacheKey 缓存的键
	 */
	public static function get($cacheKey){
		
		//创建缓存表（回自动check当前缓存表是否存在 存在将不会做任何操作）
		Cache::createCacheTable(Cache::$CACHETABLENAME);
		
		$_cacheVal = "";
		$_getCacheDataSql = "SELECT cmn_cachevalue,cmn_cachedate FROM ".Cache::$CACHETABLENAME." where cmn_cachekey ='".$cacheKey."'";
		
		$_rs = DB::getArray($_getCacheDataSql);
		
		if(count($_rs)>0) {			
			if(strtotime("now")>=strtotime($_rs[0]['cmn_cachedate'])){
				Cache::removeCache($cacheKey);
			}
			else{ $_cacheVal = $_rs[0]['cmn_cachevalue']; }
		}
		
		return $_cacheVal;
	}
	
	/**
	 * 删除cache
	 * @param string $cacheKey cacheKey 缓存的键
	 */
	public static function delete($cacheKey) {
		//创建缓存表（回自动check当前缓存表是否存在 存在将不会做任何操作）
		Cache::createCacheTable(Cache::$CACHETABLENAME);
		Cache::removeCache($cacheKey);
	}
 
	/**
	 * 删除cache
	 * @param string $cacheKey cacheKey 缓存的键
	 */
	private static function removeCache($cacheKey){		
		DB::exeSql("delete from ".Cache::$CACHETABLENAME." where cmn_cachekey = '".$cacheKey."'");
	}
	
	/**
	 * 创建cache表
	 * @param string $tableName tableName 表名
	 */
	private static function createCacheTable($tableName){	
		$_rs = DB::getFieldValue("SELECT COUNT(1) FROM information_schema.TABLES  WHERE table_name ='".$tableName."'");

		if($_rs =='0' || $_rs ==""){
			DB::exeSql("
							create table ".$tableName."
								(
								    `cmn_cacheid` int(15) not null auto_increment primary key,
									`cmn_cachekey` varchar(100),
								    `cmn_cachevalue` varchar(2048),
								    `cmn_cachedate` datetime  
								)ENGINE=MEMORY DEFAULT CHARSET=utf8 ");
		}
	}
}