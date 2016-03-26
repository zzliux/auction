<?php
	require_once(__DIR__.'/functions/common.func.php');
	// var_dump(json_decode('[{"price":10,"user":"admin","phoneNumber":"00000000000"}]',true));
	setcookie('key','value',0,'/');
	$_COOKIE['key'] = 'value';
	var_dump($_COOKIE);