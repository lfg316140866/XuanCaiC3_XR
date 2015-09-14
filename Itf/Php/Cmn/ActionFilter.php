<?php
class ActionFilter{
	private $_className=""; //类名
	private $_methodName=""; // 方法名
	private $_propertys = array(); //属性数组
	
	public function __construct(){
		
		$_path =  $_SERVER['REQUEST_URI'];
		$_path =substr($_path,stripos($_path,'.php')+4);
		//监测有没有参数
		if(stripos($_path,'?')==false){
			$_end_length = strlen($_path);
		}else{
			$_end_length = stripos($_path,'?');
		}
		$_classInfo =explode("/",substr($_path,stripos($_path,'/')+1,$_end_length-1));
		$_propertys = explode("&",substr($_path,stripos($_path,'?')+1));
			
		//有类名就存起来 没有就只存方法
		if(count($_classInfo)==2){
			$this->_className = $_classInfo[0];
			$this->_methodName = $_classInfo[1];
		}else{
			$this->_methodName = $_classInfo[0];
		}
		//判断有没有数据提交 有的话存起来 没有不管 只支持get 方法提交过来的数据
		if(isset($_propertys)){
			if(count($_propertys)>1){
				foreach($_propertys as $val){
					$pro = explode("=",$val);
					$this->_propertys[$pro[0]] = $pro[1];
					echo $_propertys[$pro[0]];
				}
			}
		}
	}
	/**
	 * 
	 */
	public function runMethod(){
 		$class = new ReflectionClass($this->_className);
		$method  = $class->getMethod($this->_methodName);
		$fuc=$class->newInstance();
		$method->invoke($fuc);
	}
	/**
	 * 
	 */
	public function runClassByMethod($_className){
 		$class = new ReflectionClass($_className);
		$method  = $class->getMethod($this->_methodName);
		$fuc=$class->newInstance();
		$method->invoke($fuc);
	}
}

?>