<?php
	$goalDir = "storage".DIRECTORY_SEPARATOR."goals".DIRECTORY_SEPARATOR; //followed by goal_id/... 
	$userDir = "storage".DIRECTORY_SEPARATOR."users".DIRECTORY_SEPARATOR; 
	
	//$thumbnail = "thumbnail".DIRECTORY_SEPARATOR;
	//$THUMB_SIZE = 200; 

	$servername = "localhost";
	$username = "committwo";
	$password = "committwo2018";
	$dbname = "committwo";

	$goal_t = "goals";
	$user_t = "users";
	$usersetting_t = "usersettings"; 

	$default_profile_pic = '../server/storage/user.png';
	$default_goal_pic = '../server/storage/user.png';
	$history_f = 'history.txt';

	function getDirPath($path){
		return substr($path, 0, strlen($path)-1);
	}
?>