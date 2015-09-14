<?php
//主要用于接口
class ItfArray extends ArrayObject{
	function __construct() {
		parent::__construct();
		
		$this["IsSuccess"] = "1";
		$this["ErrMsg"] = "";
	}
	
	public function Error($errMsg) {
		$this["ErrMsg"] = $errMsg;
		$this["IsSuccess"] = "0";
		
		return $this;
	}
	
	public function Success($tip="") {
		$this["IsSuccess"] = "1";
		$this["ErrMsg"] = "";
		
		if($tip!="") { $this["Tip"] = $tip; }
		
		return $this;
	}
	
	public  function ToString(){
		return json_encode($this);
	}
}
?>