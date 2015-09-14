<?php
class Cookies {	
	/// <summary>
	/// 设置cookies
	/// </summary>
	/// <param name="infoName">名称</param>
	/// <param name="infoValue">值</param>
	static public function Set($infoName,$infoValue){
		$_COOKIE[$infoName] = $infoValue;
	}
	//-------------------------------------------
	/// <summary>
	/// 取cookies
	/// </summary>
	/// <param name="infoName">名称</param>
	/// <returns>值，如果没有取到返回空</returns>
	static public function Get($infoName)
	{
		if(isset($_COOKIE[$infoName])) { return $_COOKIE[$infoName]; }
		else { return ""; }
	}
	//-------------------------------------------
}