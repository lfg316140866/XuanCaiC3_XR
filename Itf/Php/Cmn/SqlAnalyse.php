<?php
class SqlAnalyse{
	
	// / <summary>
	// / 从SQL语句取出表名
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <returns></returns>
	public static function getMainTableName($sql) {
		
		$_selectLst = array();
		//清除表子查询
		$sql =SqlAnalyse::wipeSubSelect($sql, $_selectLst);
		//过滤表的正则
		$_retVal = Str::RegexMatch("/\\s+from\\s+\\S+(?=\\s+|,)/",$sql);
		
		if ( trim($_retVal) =="") { // 表名后面没有任何字符
			$_retVal = trim(Str::RegexMatch("/\\s+from\\s+\\S+$/",$sql));
		}
		//匹配到的字符串替换为空
		$_retVal = trim(preg_replace("/\\s*from\\s+/","",$_retVal,-1));

		// 主表是个子查询时取子查询的别名，这个别名要与子查询里的主表名一致。add by cyp 20100817
		if ("(#1#)"==$_retVal) {
			$_retVal = trim(Str::RegexMatch("/\\s+\\(#1#\\)\\s+\\S+(?=\\s+|,)/",sql));
			$_retVal = trim(preg_replace("/\\s*\\(#1#\\)\\s+/","",$_retVal,-1));
		}

		return $_retVal;
	}
	
	
	// ----------------------------------------------------
	// / <summary>
	// / 取主键
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <returns></returns>
	public static function getKeyField($sql) {
		$_selectLst = array();
		$sql = SqlAnalyse::wipeSubSelect($sql, $_selectLst);
		$_retVal = trim(Str::RegexMatch("/\\s*select\\s+(distinct\\s+)?(top\\s+\\d+\\s+)?[\\w\\.]+(?=,|\\s+)/",$sql));
		$_retVal = trim(preg_replace("/\\s*select\\s+(distinct\\s+)?(top\\s+\\d+\\s+)?(\\w+\\.|)/",
								"",$_retVal,-1));
	
		return $_retVal;
	}
	
	
	// ---------------------------------------------------------------
	// / <summary>
	// / 在sql语句中加入where条件
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <param name="where">要添加的where条件</param>
	// / <returns>添加了where条件的sql语句</returns>
	public static function addWhere($sql, $where) {
		if (trim($where) == "") { return $sql; }
	
		//判断sql是否安全返回错误
		if (!SqlAnalyse::SqlIsSafe($where)) { return "在加where条件的时候，检测出检测出不安全的where子句"; }
		
		$where = " (" . $where . ") ";
		if (strpos($sql,$where)!=false) { return $sql; } // 说明已经加过这个条件，就不加这个条件了
	
		$_retSql="";
		$_selectLst = array();
		$sql = SqlAnalyse::wipeSubSelect($sql, $_selectLst);
	
		$_whereLoc = str::LastIndexOf(strtolower($sql),"/\\s+where\\s+/");
		$_groupLoc = str::LastIndexOf(strtolower($sql),"/\\s+group\\s+/");
		$_orderLoc = str::LastIndexOf(strtolower($sql),"/\\s+order\\s+/");
		
		if(!$_whereLoc){ $_whereLoc=-1; }
		if(!$_groupLoc) { $_groupLoc = -1; }
		if(!$_orderLoc) {$_orderLoc = -1; }
		
		if ($_groupLoc < $_whereLoc) { $_groupLoc = -1; }
		if ($_orderLoc < $_whereLoc) { $_orderLoc = -1; }
	
		if ($_whereLoc == -1) {
			if ($_groupLoc == -1) {
				if ($_orderLoc == -1) { $_retSql = $sql . " where " . $where; } 
				else { $_retSql =substr($sql,0, $_orderLoc) . " where ".$where.substr($sql, $_orderLoc); }
			} 
			else { $_retSql =substr($sql,0, $_groupLoc). " where " .$where.substr($sql, $_groupLoc); }
		} 
		else {
			if ($_groupLoc == -1) {
				if ($_orderLoc == -1) {
					$_retSql = substr($sql,0, $_whereLoc) . " where (" . 
						Str::RegexReplace(substr($sql,$_whereLoc), "/\\s+where\\s+/", "") . ") and " . $where;	
				} 
				else {
					$_retSql = substr($sql,0, $_whereLoc) . " where (" . 
						Str::RegexReplace(substr($sql,$_whereLoc, $_orderLoc - $_whereLoc), "/\\s+where\\s+/", "")
						. ") and " . $where . substr($sql,$_orderLoc);
				}
			} 
			else {  //有groupby
				$_retSql = substr($sql,0, $_whereLoc) . " where (" .
					Str::RegexReplace(substr($sql,$_whereLoc, $_groupLoc - $_whereLoc), "/\\s+where\\s+/", "")
					. ") and " . $where . substr($sql,$_groupLoc);
			}
		}
	
		if ($_selectLst != null) { $_retSql = SqlAnalyse::recoverSubSelect($_retSql, $_selectLst); }
		
		return $_retSql;
	}
	// -----------------------------------------------------------
	// / <summary>
	// / 添加排序字段
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <param name="fieldName">字段名</param>
	// / <returns>添加了排序字段的sql语句</returns>
	public static function addSortField($sql, $fieldName, $ascending) {
		$_selectLst = array();
		$sql =SqlAnalyse::wipeSubSelect($sql, $_selectLst);
	
		$_retSql = " ";
		$_orderDirection = " ";
		$_tmpStr="";
		
		
		$_index_list = Str::RegexMatchIndexList("/\\s+order\\s+by\\s+/",$sql);
		
	if(count($_index_list)>0){
		foreach($_index_list as $_index){
			$_retSql = trim(substr($sql,0,$_index['index']+$_index['length']));
			$_orderStr = trim(substr($sql,$_index['index']+$_index['length']));
			
			// 判断如果原先已经有同样的字段并且没有前缀的话，把前缀去掉，否则同一个字段会被排序2次而导致Sql报错
				if(!preg_match("/\\s*" .$fieldName. "\\s*/",$_orderStr)){
				
					if(stripos($fieldName,".")!=false){
						if(stripos(
								strtolower($_orderStr),
								substr($fieldName,
										strtolower(stripos($fieldName,".")+1)
										)
								)>=0){
							$fieldName = substr($fieldName,stripos($fieldName,"."+1));
								}
					}else{// 字段已经在order by 中
						if(stripos($fieldName,".")==false){
							$_tmpStr =trim(Str::RegexMatch("/[^\\s,]+./".$fieldName."/",$_orderStr));
							if($_tmpStr!=""){
								$fieldName = $_tmpStr;
							}
						}
					}
				}
				$_regex =  "/([\\s,]+|^)" .$fieldName. "\\s+desc\\s*(,)?/";
				$_tmpStr = trim(Str::RegexMatch($_regex,$_orderStr));
				if($_tmpStr!=""){// 说明有Desc排序
					if(Str::RegexMatch("/\\s*,\\s*" .$fieldName."/",$_orderStr)!=""){
							$_orderStr = trim(Str::RegexReplace($_orderStr,$_regex, " , "));
					} else {
							$_orderStr =trim( Str::RegexReplace($_orderStr,$_regex, " "));
					}
				}else{
					$_regex="/([\\s,]+|^)" . $fieldName. "(\\s+(asc)?\\s*(,)?|[\\s,]+|$)/";
					$_tmpStr = trim(Str::RegexMatch($_regex,$_orderStr));
					
					if($_tmpStr!=""){ //说明有asc 排序
						if(Str::RegexMatch("/\\s*,\\s*".$fieldName."/",$_tmpStr)){
							$_orderStr = trim(Str::RegexReplace($_orderStr, _regex, " , "));
						}else{
							$_orderStr = trim(Str::RegexReplace($_orderStr, _regex, " "));
						}
						
						$_orderDirection = "desc";
					}
				}
				if(!$ascending){
					$_orderDirection = " desc ";
				}
				if ($_orderStr == "") {
					$_retSql .= " " . $fieldName . $_orderDirection;
				} else {
					$_retSql .= " " . $fieldName . $_orderDirection . "," . $_orderStr;
				}
	
					// 去除最后可能有的逗号
				$_retSql = Str::RegexReplace($_retSql, "/\\s*,\\s*$/", " ");
		} 
	}		
				
			if(count($_index_list)<=0) { // sql语句中没有 order by
					$_retSql = $sql . " order by " . $fieldName;
			}
			
			if ($_selectLst != null) {
					$_retSql = SqlAnalyse::recoverSubSelect($_retSql, $_selectLst);
			}
			return $_retSql;
	}
	
	
	
	// ----------------------------------------------------
	// / <summary>
	// / 取sql语句中的字段全名
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <param name="fieldName">字段名</param>
	// / <returns>字段全名</returns>
	public static function getFullFieldName($sql, $fieldName){
		$_retFieldName = $fieldName;
		$_selectLst =  array();
		$_bracketLst = array();
	
		$sql = SqlAnalyse::wipeSubSelect($sql, $_selectLst);
	
		$sql = SqlAnalyse::wipeBracket($sql, $_bracketLst);

		// 字段名前面有前缀
		$sql = Str::RegexMatch("/\\s*select[\\s\\S]*from\\s*/",$sql);
		
		$_index_list = Str::RegexMatchIndexList("/\\w+\\." .$fieldName."(?=,|\\s+)/",$sql);
		
		if(count($_index_list)>0){
			foreach($_index_list as $_index){
				$_retFieldName = trim($_index['val']);
			}
		}
		
		
		if(count($_index_list)<=0){
			// 字段在select后面不是第一个字段
			$_index_list = Str::RegexMatchIndexList("/,\\s*[^,]*(\\s+as)?\\s+".$fieldName."(?=\\s*,|\\s+)/",$sql);
			if(count($_index_list)>0){
				foreach($_index_list as $_index){
					$sql =trim(substr(trim($_index['val']),1));
					if (strnatcasecmp(trim($fieldName),$sql)!=0) {
						$sql = trim(Str::RegexReplace($sql, "/(\\s+as)?\\s+".$fieldName."$/",""));
					}
					$_retFieldName = $sql;
				}
			}
		
			if(count($_index_list)<=0) {
				
				// 字段在select后面第一个字段
				$_rex = "/\\s*select\\s+(distinct\\s+)?(top\\s+\\d+\\s+)?[^,]*(\\s+as\\s+)?".$fieldName."(?=\\s*,|\\s+)/";
			
				$_index_list = Str::RegexMatchIndexList($_rex,$sql);
				if(count($_index_list)>0){
					foreach($_index_list as $_index){
						$sql = trim($_index['val']);
						$sql = trim(Str::RegexReplace($sql, "/\\s*select\\s+(distinct\\s+)?(top\\s+\\d+\\s+)?/",""));
						if (strnatcasecmp(trim($fieldName),$sql)!=0) {
							$sql = trim(Str::RegexReplace($sql, "/(\\s+as\\s+)?" . $fieldName . "$/",""));
						}
						$_retFieldName = $sql;
					}
				}
				
			}
			
		}
	
		if ($_bracketLst != null) {
			$_retFieldName = SqlAnalyse::recoverBracket($_retFieldName, $_bracketLst);
		}
		if ($_selectLst != null) {
			$_retFieldName = SqlAnalyse::recoverSubSelect($_retFieldName, $_selectLst);
		}
		return $_retFieldName;
	}
	
	// -----------------------------------------
	// / <summary>
	// / 取sql语句中的排序字段全名
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <param name="fieldName">字段名</param>
	// / <returns>排序字段全名</returns>
	public static function getFullSortFieldName($sql, $fieldName) {
		$_retFieldName = trim(SqlAnalyse::getFullFieldName($sql, $fieldName));
	
		// 是一个select子查询，或者是一个case语句或者是一个表达式的话用原先的字段名
		if (Str::RegexMatch("/^[\\w\\.]+$/",$_retFieldName)=="") {
			$_retFieldName = $fieldName;
		}
	
		return $_retFieldName;
	}
	
	// -----------------------------------------
	// / <summary>
	// / 根据sql语句取记录数
	// / </summary>
	// / <param name="sql"></param>
	// / <returns></returns>
	public static function getRecCount($sql) {
// 		$_selectLst =array();
// 		$sql = SqlAnalyse::wipeSubSelect($sql, $_selectLst);
	
// 		$_fieldName = getFullFieldName($sql, getKeyField($sql));
		
// 		$_str = Str::RegexReplace($sql, "/\\s*select[\\s\\S]*from\\s*/","select count(" ._fieldName .") from ");
		
		
// 		$_str = Str::RegexReplace($sql, "/\\s*order\\s*by[\\s\\S]*/"," ");
	
// 		if ($_selectLst != null) {
// 			$_str = SqlAnalyse::recoverSubSelect($_str, $_selectLst);
// 		}
// 		$_str = trim(DB::getFieldValue($_str));
// 		if ($_str != "") {
// 			return ($_str+0);
// 		}
		
		$_recCount = DB::getFieldValue(SqlAnalyse::getRecCountSql($sql));
	
		if($_recCount=="") { return -1; }
		else { return $_recCount; }
	}
	// -----------------------------------------
   /**
	 * 增加limit到sql
	 * @param string $sql sql语句
	 * @param string $limitSentence limit子句
	 * @return string 增加好limit子句的sql
	 */
	public static function AddLimitToSelect($sql,$limitSentence){
		//判断是否是select 语句
		if(preg_match("/^\\s*select\\s+/i", $sql)>0) {
			$sql = SqlAnalyse::deleteLimit($sql);
		
			return $sql." ".$limitSentence;
		}
		else { return $sql; }
	}
	
	// -----------------------------------------
	// / <summary>
	// / 增加select字段
	// / </summary>
	// / <param name="sql">原先的Sql</param>
	// / <param name="field">字段内容</param>
	// / <returns>加好字段的Sql</returns>
	public static function addSelectField($sql, $field) {
		$_selectLst = array();
		$sql = SqlAnalyse::wipeSubSelect($sql, $_selectLst);
		
		$sql = Str::RegexReplace($sql, "/\\s+from\\s+/",",".$field ." from ");
	
		if ($_selectLst != null) {
			$sql = SqlAnalyse::recoverSubSelect($sql, $_selectLst);
		}
	
		return $sql;
	}
	
	
	
	// -----------------------------------------
	// / <summary>
	// / 恢复sql中的子查询
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <param name="selectLst">子查询列表</param>
	// / <returns>恢复了子查询的sql语句</returns>
	public static function recoverSubSelect($sql,$selectLst) {
		for ($_i = 0; $_i < count($selectLst); $_i++) {
			
			//$str = str_replace("#".($_i+1)."#",$selectLst[$_i], $sql);
			$sql =Str::RegexReplace($sql, "/#".($_i+1)."#/",$selectLst[$_i]);
		}
	
		return $sql;
	}
	
	// -------------------------------------------
	// / <summary>
	// / 清除sql中的子查询
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <param name="selectLst">子查询列表</param>
	// / <returns>清除了子查询的sql语句</returns>
	public static function wipeSubSelect($sql,&$selectLst) {
		$_index_list = Str::RegexMatchIndexList("/\\(\\s*select\\s+/",$sql);
		$_selectNo = 1;
		$_sql_str = $sql;
		
		if(count($_index_list)>0){
			foreach($_index_list as $index){
				$_bracketCount = 1;
				$str="";

				for ($_i = $index['index']+1 ; $_i < strlen($sql); $_i++) {
					if(substr($sql,$_i,1) == '(') { $_bracketCount++; } 
					else if (substr($sql,$_i,1) == ')') { $_bracketCount--; }
			
					if($_bracketCount==0) {
						$_sql_str = str_replace($str, "#".$_selectNo."#", $_sql_str);
						$selectLst[] = $str;
						$_selectNo++;

						break;
					}
					
					$str.=substr($sql,$_i,1);
				}
			}
		}
		
		return $_sql_str;
	}
	
	// -----------------------------------------
	// / <summary>
	// / 清除sql中的括号
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <param name="bracketLst">括号列表</param>
	// / <returns>清除了括号的sql语句</returns>
	public static function wipeBracket($sql, &$bracketLst) {
		$_index_list = Str::RegexMatchIndexList("/\\(/",$sql);
		$_bracketNo = 1;
		$_selectNo = 1;
		$_sql_str = $sql;
		
		if(count($_index_list)>0){
			foreach($_index_list as $index){
				$_bracketCount = 1;
				$str="";
				
				for ($_i = $index['index']+1 ; $_i < strlen($sql); $_i++) {
					if(substr($sql,$_i,1) == '(') { $_bracketCount++; } 
					else if (substr($sql,$_i,1) == ')') { $_bracketCount--; }
			
					if($_bracketCount==0){
						$_sql_str = str_replace($str, "&".$_selectNo."&", $_sql_str);
						$bracketLst[] = $str;
						$_selectNo++;
						
						break;
					}
					
					$str.=substr($sql,$_i,1);	
				}
			}
		}
		
		return $_sql_str;
	}
	
	// -----------------------------------------
	// / <summary>
	// / 恢复sql中的括号
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <param name="bracketLst">括号列表</param>
	// / <returns>恢复了括号的sql语句</returns>
	public static function recoverBracket($sql,$bracketLst) {
		for ($_i = 0; $_i < count($bracketLst); $_i++) {
			$sql =	str_replace("&" . ($_i + 1) . "&",$bracketLst[$_i], $sql);
		}
		
		return $sql;
	}
	
	
	// -----------------------------------------
	// / <summary>
	// / 删除sql中limit
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <returns>sql语句</returns>
	 public static function deleteLimit($sql){
	 	$_selectLst =  array();
	 	$_bracketLst = array();
	 	$sql = SqlAnalyse::wipeSubSelect($sql, $_selectLst);
	 	$sql = SqlAnalyse::wipeBracket($sql, $_bracketLst);
	 	
	 	preg_match("/(?=select)[.\\s\\S]*?(?=limit)/",$sql,$_sqlArr);
	 	$_sql = $sql;
	 	
	 	if(count($_sqlArr)>0){
	 		$_Startsql =$_sqlArr[0];
	 		preg_match("/(?<=limit)[.\\s\\S]*?$/",$sql,$_sqlArr);
	 		$_sql = $_sqlArr[0];
	 		$_sql = preg_replace("/\\d+?(?=(,|\\s)??)/","",$_sql,1);
	 			

 			if(substr(trim($_sql),0,1)==","){
 				$_sql = substr(trim($_sql),1);
 				$_sql = preg_replace("/\\d+?(?=(,|\\s)??)/","",$_sql,1);		
 			}
	 			
	 		$_sql = $_Startsql." ".$_sql;
	 	}
	 	
	 	
	 	if ($_bracketLst != null) {
	 		$_sql = SqlAnalyse::recoverBracket($_sql, $_bracketLst);
	 	}
	 	if ($_selectLst != null) {
	 		$_sql = SqlAnalyse::recoverSubSelect($_sql, $_selectLst);
	 	}
	 	
	 	return $_sql;
	 }
	
	// -----------------------------------------
	// / <summary>
	// / 删除sql中order by,解决mysql中最后可能还有 limit 的问题 
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <returns>sql语句</returns>
	public static function deleteOrderBy($sql) {
		$_selectLst =  array();
		$_bracketLst = array();
		$sql = SqlAnalyse::wipeSubSelect($sql, $_selectLst);
		$sql = SqlAnalyse::wipeBracket($sql, $_bracketLst);
		 
// 		$sqlArr = preg_split("/\\s+order\\s+by\\s+/",$sql);
// 		$_sql = $sql;
		
// 		if(count($sqlArr)>0){
// 			$_Startsql =$sqlArr[0];
			 
// 			$_sql = $sqlArr[1];
// 			$_sql = preg_replace("/\\S+?(?=(,|\\s){1}?)/","",$_sql,1);
// 			$_sql = preg_replace("/(desc??|asc??)(?=(,|\\s){1}?)/","",$_sql,1);
			
// 			while(true){
// 				if(substr(trim($_sql),0,1)==","){
// 					$_sql = substr(trim($_sql),1);
// 					$_sql = preg_replace("/\\S+?(?=(,|\\s)+)/","",$_sql,1);
// 					$_sql = preg_replace("/(desc??|asc??)(?=(,|\\s)+)/","",$_sql,1);	
// 				}
// 				else{ break; }
// 			}
			
// 			$_sql = $_Startsql." ".$_sql;
// 		}

		//找到order by 切割
		$sqlArr = preg_split("/\\s+order\\s+by\\s+/",$sql);
		
		if(count($sqlArr)>1){
			$_Startsql =$sqlArr[0];
			//找到 limit 切割
			$sqlArr = preg_split("/\\s+limit\\s+/",strtolower($sqlArr[1]));
			if(count($sqlArr)>1){
				
				$sql = $_Startsql." limit ".$sqlArr[1];
			}
			else {$sql = $_Startsql;
			}
		}
		
 
		if ($_bracketLst != null) {
			$_sql = SqlAnalyse::recoverBracket($sql, $_bracketLst);
		}
		
		if ($_selectLst != null) {
			$_sql = SqlAnalyse::recoverSubSelect($sql, $_selectLst);
		}
		
		return $sql;
	}
	
	// -----------------------------------------
	// / <summary>
	// / 根据sql语句取记录数
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <returns>select字段替换成count(*)的sql语句</returns>
	public static function getRecCountSql($sql) {
		$_selectLst =  array();
		$_bracketLst = array();
		$sql = SqlAnalyse::wipeSubSelect($sql, $_selectLst);
		$sql = SqlAnalyse::wipeBracket($sql, $_bracketLst);
		$sql = $sql . " ";

		//删除orderby
		$_sql = SqlAnalyse::deleteOrderBy($sql);
		
		//加count
		//$_sql = Str::RegexReplace($_sql,"/(?<=^\\s*select)[.\\s\\S]*?(?=from)/"," count(1) ");
		$_result = Str::RegexMatch("/(?<=select)[.\\s\\S]*?(?=from)/",$_sql);
		
		if($_result==""){ return ""; }
		else { $_sql = str_replace($_result," count(1) ",$_sql); }
		
		if ($_bracketLst != null) {
			$_sql = SqlAnalyse::recoverBracket($_sql, $_bracketLst);
		}
		if ($_selectLst != null) {
			$_sql = SqlAnalyse::recoverSubSelect($_sql, $_selectLst);
		}
		
		return $_sql;
	}
	
	// / <summary>
	// / 获取With语句
	// / </summary>
	// / <param name="sql"></param>
	// / <returns></returns>
	public static function getWithSql($sql) {
		$_with = Str::RegexMatch("/\\s*with\\s+\\S+\\(\\S+(,\\s?\\S+)+\\)\\s*\\n*\\s*as\\s*\\n*\\s*\\(/",$sql);
		$_endPos = 0;
		if ($_with != "") {
			$_BracketCnt = 0;
			for ($_i = strlen($_with) - 1; $_i < strlen($sql); $_i++) {
				if (substr($sql,$_i-1,$_i) == '(') {
					$_BracketCnt++;
				}
				if (substr($sql,$_i-1,$_i) == ')') {
					$_BracketCnt--;
					if ($_BracketCnt == 0) {
						$_endPos = $_i + 1;
						$_temp =substr($sql,$_endPos);
						// 是否有无其他With语句
							$_with2 = Str::RegexMatch("/\\s*with\\s+\\S+\\(\\S+(,\\s?\\S+)+\\)\\s*\\n*\\s*as\\s*\\n*\\s*\\(/",$_temp);
						if ($_with2 == "") {
							break;
						}
						$_i += strlen($_with2)-1;
					}
				}
			}
		}
		if ($_endPos != 0)
			return substr($sql,0,$_endPos);
		return "";
	}
	
	// ---------------------------------------------------------
	// / <summary>
	// / 取得Select的所有字段（和原语句中一样，就是截取select到from之间的内容）
	// / </summary>
	// / <param name="sql">sql语句</param>
	// / <returns>select出来的字段</returns>
	public static function getSelectFields($sql) {
		$sql =  Str::RegexMatch("/\\s*select[\\s\\S]+from\\s+/",$sql);
		$sql =  Str::RegexReplace($sql, "/\\s*select\\s+/", "");
		$sql = Str::RegexReplace($sql, "/\\s+from\\s+/", "");
	
		return $sql;
	}
	// ------------------------------------------------------
	//把条件中的字替换成带化名的字段名
	public static function addFullNameToCondition($sql,$condition) {
		$_loc = strpos($condition,"=");
		
		if($_loc==false) {  		
			$_loc = strpos($condition," like ");
			
			if($_loc==false) { $_loc = strpos($condition," in "); } //in子查询
		}		
		
		if($_loc==false){ return $condition; }
		
		$_colName = trim(substr($condition, 0,$_loc));
		
		return SqlAnalyse::getFullFieldName($sql, $_colName).substr($condition, $_loc);
	}
	// ------------------------------------------------------
	/// <summary>
	/// 增加排序子句
	/// </summary>
	/// <param name="sql">sql语句</param>
	/// <param name="sortSentence">排序子句,字段名等如果有化名就加好化名</param>
	/// <returns>增加好排序子句的sql</returns>
	public static function AddSortSentence($sql, $sortSentence) {
		if (!SqlAnalyse::SqlIsSafe($sortSentence)) {
			return $sql;
		} //不安全的话就不加了，直接返回本身
	
		$_retSql = SqlAnalyse::RemoveOrderBy($sql);
	
		$_retSql = $_retSql. " order by " . $sortSentence;
	
		return $_retSql;
	}
	//----------------------------------------------------
	/// <summary>
	/// 删除order by 子句
	/// </summary>
	/// <param name="sql">sql语句</param>
	/// <returns>删除order by子句后的sql</returns>
	public static function RemoveOrderBy($sql) {
		$_retSql = $sql;
	
		$_selectLst = array();
		$_retSql = SqlAnalyse::WipeSubSelect($_retSql, $_selectLst);
	
		$_retSql = Str::RegexReplace($_retSql, "/\\s*order\\s*by[\\s\\S]*/", " ");
	
		if ($_selectLst != null) {
			$_retSql = SqlAnalyse::RecoverSubSelect($_retSql, $_selectLst);
		}
	
		return $_retSql;
	}
	//------------------------------------------------------
	/// <summary>
	/// 检测sql是否安全，没有对表的更新操作
	/// </summary>
	/// <param name="sql">sql语句或则是子句</param>
	/// <returns>是否安全</returns>
	public static function SqlIsSafe($sql) {
		$_keyWord = "exec|execute|insert|delete|update|create|drop|\\*|chr|char|master|truncate|declare|xp_cmdshell|restore|backup|net +user|net +localgroup +administrators";
	
		try {
			if (($sql != null) && ($sql != "")) {
				if (Str::RegexMatch("/\\b(" . $_keyWord . ")\\b/",$sql)) {
					Log::Error("sql存在不安全的关键字！sql:".$sql); 
					return false;
				}
			}
		}
		catch (Exception $e){ 
			Log::Error("在检测sql是否安全的的时候报错！sql:" . $sql); 
			return false; 
		}
	
		return true;
	}
	//------------------------------------------------------
	/// <summary>
	/// 替换sql语句中的变量
	/// </summary>
	/// <returns>替换了sql中变量的sql语句</returns>
	public static function ReplaceVarInSql($sql) {
		$_retSql = $sql;
	
		preg_match_all("/\\{\\$[\\S\\s]+?\\$\\}/",$sql,$_sqlArr);
			
		for ($_i = 0; $_i < count($_sqlArr[0]); $_i++) {
			$_tmpStr = trim($_sqlArr[0][$_i]);
	
			$_tmpStr = trim(substr($_tmpStr,2,strlen($_tmpStr)-4)); //去除 {$$}
	
			$_strList =  explode(":", $_tmpStr,2);
	
			if (count($_strList) == 1) {
				$_retSql = str_replace($_sqlArr[0][$_i],Request::Get($_strList[0]),$_retSql);
			}
			else if (strtolower($_strList[0]) == "r") {
				$_retSql = str_replace($_sqlArr[0][$_i],Request::Get($_strList[1]),$_retSql);
			}
			else if (strtolower($_strList[0]) == "s") {
				$_retSql = str_replace($_sqlArr[0][$_i],Session::Get($_strList[1]),$_retSql);  
			}
			else if (strtolower($_strList[0]) == "c") {
				$_retSql = str_replace($_sqlArr[0][$_i],Cookies::Get($_strList[1]),$_retSql);
			}
		}
	
		return $_retSql;
	}
	//------------------------------------------------------
}