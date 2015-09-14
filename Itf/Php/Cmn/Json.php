<?php
class Json {
    //ResultSet转Json格式字符串
    public static function ResultSetToJson($rs) {
//     	$_jsonData = "[";
//     	$_array = ( array )$rs;
//     	while($row = ){
//     		foreach ( $_row as $_array => $_value ) {
//     			$_row[$_key] = urlencode ( $_value );
//     		}
    		
//     	}
     
    	global $CONFIG;
    	
    	if($CONFIG['DBConnType']=="PDO" || $CONFIG['DBConnType']=="Tmall") {
    		return json_encode($rs->fetchAll(PDO::FETCH_ASSOC));
    	}
    	else { 
    		$_array = array();
    			
    		if($rs!=null && $rs!==true) {
    			while($_row = mysql_fetch_array($rs,MYSQL_ASSOC)){
    				$_array[]=$_row;
    			}
    		}
    			
    		return json_encode($_array); 
    	}
    }
    
    //数组转Json格式字符串
    public static function ArrayToJson($array) {
//     	foreach ( $array as $_key => $_value ) {
//     		$array[$_key] = urlencode ( $_value );
//     	}
    	
    	return json_encode($array);
    }
}
?>