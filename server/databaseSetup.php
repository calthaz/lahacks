<?php
//data base set up
require "config.inc.php"; 

if((isset($_GET["pw"])) && $_GET["pw"]==="arugvj132kuy"){


    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $sql="CREATE TABLE ".$goal_t." (
    gid INT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(200) NOT NULL,
    description TEXT, 
    owner_id INT(10) NOT NULL , 
    time VARCHAR(50) NOT NULL , 
    date VARCHAR(100) NOT NULL,
    location VARCHAR(100) NULL , 
    frequency VARCHAR(50) NOT NULL DEFAULT  1, 
    creat_date VARCHAR(50) NOT NULL, 
    pic_url VARCHAR(200) DEFAULT '".$default_goal_pic."') "; 
    //frequency: 1 means daily

    if ($conn->query($sql) === TRUE) {
        echo "Table ".$goal_t." created successfully"."<br/>";
    } else {
        echo "Error creating table: " . $conn->error."<br/>";
    }
    /* sql to create table*/
    $sql = "CREATE TABLE ".$user_t." (
    uid INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    email VARCHAR(50) UNIQUE,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(200) NOT NULL,
    firstname VARCHAR(200) NOT NULL,
    lastname VARCHAR(200) NOT NULL,
    age VARCHAR(10),
    gender INT(10),
    zip_code INT(6),
    phone_num VARCHAR(50), 
    reg_date VARCHAR(50),
    type VARCHAR(10) DEFAULT 0,
    profile_pic_url VARCHAR(200) DEFAULT '".$default_profile_pic."', 
    goal_list TEXT,
    friend_list TEXT,
    history VARCHAR(200)
    )";
    //Note: backslashes doesn't work
    //type: 0 for a regular user
    //creat history file upon registration

    if ($conn->query($sql) === TRUE) {
        echo "Table ".$user_t." created successfully"."<br/>";
    } else {
        echo "Error creating table: " . $conn->error."<br/>";
    }

    $sql =
    "CREATE TABLE ".$usersetting_t." 
    (email VARCHAR(50) NOT NULL PRIMARY KEY,
    age INT(5) NOT NULL DEFAULT '0' , 
    gender INT(5) NOT NULL DEFAULT '0' , 
    zip_code INT(5) NOT NULL DEFAULT '0' , 
    phone_num INT(5) NOT NULL DEFAULT '0' )";

    if ($conn->query($sql) === TRUE) {
        echo "Table ".$usersetting_t." created successfully"."<br/>";
    } else {
        echo "Error creating table: " . $conn->error."<br/>";
    }

    $conn->close();

    echo "creating folders <br/>"; 
    
    try {   
	 	mkdir("storage"); 
    	mkdir(getDirPath($userDir));
	    mkdir(getDirPath($goalDir));
	} catch (Exception $e) {   
		print $e->getMessage();   
		//exit();   
	}   

	echo "Finished creating folders"; 
    
} else {
    echo "Access denied. "; 
}

/*
name:"admin",
email:"zymdxlyx@sina.cn",
password:"tempPass",

language:"en",
profilePic:"img/admin.png",
draftFolderURL:"undecided",
photoAlbumURL:"undecided",
searchSettings: curSettings,
friends:"",
priviledge:"all",
*/
/*
if ($conn->query($sql) === TRUE) {
	$last_id = $conn->insert_id;
    echo "New record created successfully.Last inserted ID is: " . $last_id ;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}*/



// prepare and bind

/*$stmt = $conn->prepare("INSERT INTO users (username, password, email, language, priviledges, profile_pic_url, reg_date) VALUES (?, ?, ?, 'sys', ?, 'storage\\users\\profile_pics',?)");

$stmt->bind_param('sssss', $username, $password, $email, $priviledges, $date);

$username = "caltha";
$password = md5("calthaWork");
$email = "caltha@elefind.com"; 
$priviledges = "all";
$date = date("Y-m-d");
$stmt->execute();

$stmt->close();
*/
/*
$sql = "SELECT id, username, password FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["username"]. " " . $row["password"]. "<br>";
    }
} else {
    echo "0 results";
}

$sql = "UPDATE users SET password = '".md5('test')."' WHERE email = 'admin@elefind.com'";
$conn->query($sql);


$email = "caltha@elefind.com"; 

$sql = "SELECT password FROM users WHERE email LIKE '".$email."'";
echo $sql;
$result = $conn->query($sql);

	$msg="default";

			if ($result->num_rows > 0) {
   				// output data of each row
    			$row = $result->fetch_assoc() ;    			
        			if($row['password']==md5('calthaWork')){
        				$msg = "success";
        				$sql = "SELECT * FROM users WHERE id LIKE 2";
        				$row = $result->fetch_assoc();
        				$user['name']=$row['username'];
        				$user['password']=$row['password'];
        				$user['email']=$row['email'];
        				$user['profilePic']=$row['profile_pic_url'];
        				$user['priviledges']=$row['priviledges'];
        				$user['language'] = $row['language'];
        				$user['draftFolderURL'] = $row['server_draft_folder'];
        				$user['photoAlbumURL'] = $row['server_photo_folder'];
        				$data['user'] = $user;

        			}else{
        				$msg = "denied";
        			}
    			//}
			} else {
    			$msg = "user not found";
			}

			$data['msg']=$msg;

			echo json_encode($data);*/
		
?>

