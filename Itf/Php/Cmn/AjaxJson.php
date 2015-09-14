<?php

class AjaxJson 
{
    /// <summary>
    /// DataTable中的数据转换成json字符串
    /// </summary>
    /// <param name="dt">DataTable</param>
    /// <returns>json字符串</returns>
    public static function ResultSetToJson($dt) {
        $_retVal = "";

        if (Request::Get("CurPage") != "") {
            try {
            	$_curPage = Request::Get("CurPage");
            	$_pageSize = Request::Get("PageSize");
            	
            	$_array = Func::ResultSetToArray($dt);            	
            	$_count = count($_array);
            	$_retArray = array();
            	
            	for($_i=($_curPage-1)*$_pageSize;$_i<$_count && $_i<$_curPage*$_pageSize;++$_i){
            		$_retArray[] = $_array[$_i];
            	}
            	
            	$_retVal = Json::ArrayToJson($_retArray);
            	
//                 _json.WriteData(dt,Convert.ToInt32(Cmn.Request.Get("CurPage").Trim()),
//                     Convert.ToInt32(Cmn.Request.Get("PageSize").Trim()));
            }
            catch (Exception $_e) { 
            	Log::Write("函数SqlToJson在转换CurPage或PageSize到int的时候报错！错误明细：" + 
            		$_e->getMessage()); 
            }
        }
        else {
        	$_retVal = Json::ResultSetToJson($dt);            
        }

        $_recCount = 0;
        
        if($dt!=null && $dt!==true) { $_recCount =  mysql_num_rows($dt); }
        
        $_retVal = "{\"RecCount\":\"" . $_recCount . "\",\"data\":" . $_retVal . "}";
            
        return $_retVal;
    }
    //-------------------------------------
    /// <summary>
    /// 用sql语句获取数据并转换成json字符串
    /// </summary>
    /// <param name="sql">sql语句</param>
    /// <returns>json字符串</returns>
//     public static function  SqlToJson(string sql) {
//         if (Cmn.Request.Get("CurPage").Trim() != "") {
//             try {
//                 return SqlToJson(sql, Convert.ToInt32(Cmn.Request.Get("CurPage").Trim()),
//                     Convert.ToInt32(Cmn.Request.Get("PageSize").Trim()));
//             }
//             catch(Exception e) { Cmn.Log.Write("函数SqlToJson在转换CurPage或PageSize到int的时候报错！错误明细："+e.Message); }
//         }

//         AjaxJson _json = new AjaxJson();
//         _json.WriteData(sql);
//         return _json.ToJsonString();
//     }
    //-------------------------------------
    /// <summary>
    /// 用sql语句获取数据并转换成json字符串
    /// </summary>
    /// <param name="sql">sql语句</param>
    /// <param name="curPage">当前页码</param>
    /// <param name="pageSize">每页的记录数</param>
    /// <returns>json格式的数据</returns>
	public static function SqlToJson($sql,$cacheKey="",$curPage="",$pageSize="",
		$isUseCache=true,$cachetime=30,&$itfArray=null) {
        if($curPage=="") { $curPage = Request::Get("CurPage"); }
        if($pageSize=="") { $pageSize = Request::Get("PageSize"); }
        
        //判断缓存数据
        if($isUseCache){
        	if(Request::Get("method")!="") {
        		$cacheKey .= "_".Request::Get("method");
        	}
        	$cacheKey .= "_".$curPage;
        	
        	if(!(Cache::get($cacheKey)==null || Cache::get($cacheKey)=="")){
        		return Cache::get($cacheKey);
        	}
        }
       
      
        if($curPage=="" || $pageSize=="") { $_sql = $sql ;  }
        else {
        	$_sql = $sql . " limit " . ($curPage-1)*$pageSize . "," . $pageSize;
        }
        
        $_recCount = DB::getFieldValue(SqlAnalyse::GetRecCountSql($sql)) ;
        
        if($itfArray!=null) {
        	$itfArray["RecCount"] = $_recCount;
        	$itfArray["data"] = DB::getArray($_sql);
        	$_data = $itfArray->ToString();
        }
        else {
        	$_data = "{\"RecCount\":\"" . $_recCount . "\",\"data\":" . DB::getJson($_sql) . "}";
        }
        
        if($isUseCache){ Cache::set($cacheKey,$_data,$cachetime); }
        
        return $_data;
    }
    //-------------------------------------
}
?>