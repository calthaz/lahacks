
<?php
	/*
	* login [email+password]
	* update profile [email+password]
	* request public profile given email address [email]
	* register [all required information]
	* retrieve friends [email]
	* retrieve goals [email]
	*/
	require "config.inc.php"; 

	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
    	die("Connection failed: " . $conn->connect_error); 
	} 

	if(isset($_POST['userLogin'])){
		$info = $_POST['userLogin']; //$info[email], $info[password]
		$data = array();

		$sql = "SELECT password FROM ".$user_t." WHERE email LIKE '".$info['email']."'";
		$result = $conn->query($sql);

		$msg="default";
			
		if ($result->num_rows > 0) {
   			// output data of each row
    		while($row = $result->fetch_assoc()) {        			
        		if($row['password']==md5($info['password'])){
        			$msg = "success";
        			$sql = "SELECT * FROM ".$user_t." WHERE email LIKE '".$info['email']."'";
        			$result = $conn->query($sql);
        			$row = $result->fetch_assoc();
        			/*$user['name']=$row['username'];
        			//$user['password']=$row['password'];
        			$user['email']=$row['email'];
        			$user['profilePic']=$row['profile_pic_url'];
        			$user['priviledges']=$row['priviledges'];
        			$user['language'] = $row['language'];
        			$user['draftFolderURL'] = $row['server_draft_folder'];
        			$user['photoAlbumURL'] = $row['server_photo_folder'];*/
        			$data['user'] = $row;

        		}else{
        			$msg = "denied";
        		}
    		}
		} else {
    		$msg = "user not found";
		}

		$data['msg']=$msg;

		echo json_encode($data);
			//echo $msg;
	}elseif(isset($_POST['editProfile'])){ //TODO
		//expected: email password | username language profile-img-Base64 search-settings priviledge
		$user = $_POST['editProfile'];
		$data = array();
		$msg = "default";

		//$sql = "UPDATE users SET password = '".md5('test')."' WHERE email = 'admin@elefind.com'";
		$sql = "SELECT firstname FROM ".$user_t." WHERE email LIKE '".$user['email']."'";
		$result = $conn->query($sql);
		
		if($result->num_rows > 0){
			$sql = "UPDATE user_t SET 
			username = '".$user['name']."', 
			priviledges = '".$user['priviledges']."', 
			language = '".$user['language']."'
			  WHERE email LIKE '".$user['email']."'";
			$result = $conn->query($sql);
			if($result){
				$msg="success";
			}else{
				$msg="SQL error";
			}
		}else{
			$msg = "No such user found.";
		}

		$data["msg"]=$msg;
		echo json_encode($data);

	}elseif(isset($_POST['userRegister'])){
		$info = $_POST['userRegister'];

		$sql = "SELECT password FROM ".$user_t." WHERE email LIKE '".$info['email']."'";
		$result = $conn->query($sql);
		if($result->num_rows > 0){
			die("duplicate");
		}

		mkdir($userDir.$info['email']);
		$history = fopen($userDir.$info['email'].DIRECTORY_SEPARATOR.$history_f, "w") or die("Unable to write history!");
		$txt = "history:";
		fwrite($history, $txt);
		$txt = date('Y-m-d')."\n";
		fwrite($history, $txt);
		fclose($history);

		//{"email":"mein@ele.com","password":"t","username":"julia","language":"zh"}
		//$stmt = $conn->prepare("INSERT INTO users (username, password, email, title, date) VALUES (?, ?, ?, ?,?)");
		//$stmt->bind_param('sssss', $filename, $useremail, $vis, $title, $date);profile_pic_url, '".$profilePicDir.$info['email']."', 

		$sql = "INSERT INTO ".$user_t." (password, email, firstname, lastname, age, gender, zip_code, phone_num, reg_date, type, history) VALUES (
		'".md5($info['password'])."', '".$info['email']."', '".htmlspecialchars($info['firstname'], ENT_SUBSTITUTE)."', '".htmlspecialchars($info['lastname'], ENT_SUBSTITUTE)."','".$info['age']."','".$info['gender']."','".$info['zip_code']."','".$info['phone_num']."','".date('Y-m-d')."', '0', '".$userDir.$info['email'].DIRECTORY_SEPARATOR.$history_f."')"; 

		$result = $conn->query($sql);

		$data["sql1"] = $sql; 

		$sql = "INSERT INTO ".$usersetting_t." (useremail, email, age, gender, zip_code, phone_num) VALUES ('".$info['email']."', '".$info['email_set']."','".$info['age_set']."', '".$info['gender_set']."','".$info['zip_code_set']."','".$info['phone_num_set']."')";
		$result = $conn->query($sql);

		$sql = "SELECT * FROM ".$user_t." WHERE email LIKE '".$info['email']."'";
		$result = $conn->query($sql);
		
		if($result){
			$msg = "success";

			$row = $result->fetch_assoc();
			/*$user['name']=$row['username'];
			//$user['password']=$row['password'];
			$user['email']=$row['email'];
			$user['profilePic']=$row['profile_pic_url'];
			$user['priviledges']=$row['priviledges'];
			$user['language'] = $row['language'];
			$user['draftFolderURL'] = $row['server_draft_folder'];
			$user['photoAlbumURL'] = $row['server_photo_folder'];
			$data['user'] = $user;*/
			$data['user'] = $row;

			
		}else{
			$msg = "SQL failed";
		}

		$data["msg"]=$msg;
		$data["info"]=$info;

		echo json_encode($data);
	}
	$conn->close();

	//mkdir() upon registration 
?>


