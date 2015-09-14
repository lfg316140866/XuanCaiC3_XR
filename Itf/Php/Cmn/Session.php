<?php

class Session{
	/// <summary>
	/// 设置Session值
	/// </summary>
	/// <param name="infoName">Session名称</param>
	/// <param name="infoValue">Session名称对应的值</param>
	static public function Set($infoName, $infoValue)
	{
		$_SESSION[$infoName] = $infoValue;
	}
	//-----------------------------------------------------------
	/// <summary>
	/// 取Session值
	/// </summary>
	/// <param name="infoName">Session名称</param>
	/// <returns>Session名称对应的值</returns>
	static public function Get($infoName)
	{
		if(isset($_SESSION[$infoName])) { return $_SESSION[$infoName]; }
		else { return ""; }
	}
	//-----------------------------------------------------------
}