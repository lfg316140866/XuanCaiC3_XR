<?php
$_methodName = "";

if(isset($_REQUEST["method"])) {
	$_methodName = $_REQUEST["method"];
}
else if(isset($_REQUEST["Method"])) {
	$_methodName = $_REQUEST["Method"];
}

if($_methodName!="") {
	echo eval("return ". $_methodName."();");
	return;
}
?>