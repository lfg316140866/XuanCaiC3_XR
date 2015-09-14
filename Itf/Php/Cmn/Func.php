<?php
class Func {
    //ResultSet转成Array
    public static function ResultSetToArray($resultSet) {
        $_array = array();
    	
    	while($_row = mysql_fetch_array($resultSet,MYSQL_ASSOC)){
    		$_array[]=$_row;
    	}
    	
    	return $_array;
    }
    
    public static function JsonpHandle($json){
    	if(@$_GET["callback"]!="" && @$_GET["callback"]!=null){
    		return $_GET["callback"]."(".$json.")";
    	}else {
    		return  $json;
    	}
    }
}
?>