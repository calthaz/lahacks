function hasConnection() {
    /*var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection'; //todo: only in corvoda || navigator.connection!==null&&navigator.connection.type==Connection.NONE*/
    if(navigator.onLine === false ){
        return false;
    }else{
        return true;
    }
}
var UserService = function(){
	this.initialize=function(){
		var deferred = $.Deferred();
		//ajax recheck user
		var curSettings = {
			searchMethod:1,
			preprocessing:3,
			maxPatchSize:1250,
			maxAmRate:2,
			maxFolds:2,
			centerX:0.5,
			centerY:0.5,
			searchW:0.2,
			searchH:0.2,
			probFunc:1,
		};
		this.emptyUser = {
			name:"",
			email:"",
			password:"",
			profilePic:"..\\server\\storage\\users\\profile_pics\\original\\user.png",
			language:"en",
			//draftFolderURL:"undecided",
			//photoAlbumURL:"undecided",
			//searchSettings: curSettings,
			//friends:"",
			priviledges:"user",
			logOut: function(){
				this.name="";
				this.email="";
				this.password="";
				this.profilePic="..\\server\\storage\\users\\profile_pics\\original\\user.png";
				this.language="en";
				//this.draftFolderURL="undecided";
				//this.photoAlbumURL="undecided";
				//this.searchSettings= defaultSettings;
				//this.friends="";
				this.priviledges="";
			},
			resetSettings: function(){
				this.searchSettings = defaultSettings;
			}
		};
		if(window.localStorage.getItem("committwoUser")){
			this.currentUser=JSON.parse(window.localStorage.getItem("committwoUser"));
			//cl("Has user");
		}else{
			window.localStorage.setItem("committwoUser", JSON.stringify(this.emptyUser));
			this.currentUser=JSON.parse(window.localStorage.getItem("committwoUser"));
			//cl("add user");
		}
		/*if(window.localStorage.getItem("userSettings")){
			//this.currentUser=JSON.parse(window.localStorage.getItem("committwoUser"));
			//Er, use this to display the settings form
			//cl("Has user settings");
		}else{
			window.localStorage.setItem("userSettings", JSON.stringify(defaultSettings));
			//this.currentUser=JSON.parse(window.localStorage.getItem("committwoUser"));
			//cl("add settings");
		}*/
		deferred.resolve();
        return deferred.promise();
	};
	this.getCurSettings=function(){
		return this.currentUser.searchSettings;
	};
	this.logOut = function(){
		this.currentUser.name="";
		this.currentUser.email="";
		this.currentUser.password="";
		this.currentUser.profilePic="";
		this.currentUser.language="en";
		this.currentUser.draftFolderURL="undecided";
		this.currentUser.photoAlbumURL="undecided";
		this.currentUser.searchSettings= defaultSettings;
		this.currentUser.friends="";
		this.currentUser.priviledges="";
		window.localStorage.setItem("committwoUser", JSON.stringify(this.currentUser));
	};
	this.printlogOut = function(){
		//cl(this.currentUser.name);
		//window.localStorage.setItem("committwoUser", JSON.stringify(this.currentUser));
	};
	this.updateUserInfo = function(){
		//can be delayed
		window.localStorage.setItem("committwoUser", JSON.stringify(this.currentUser));
		this.currentUser=JSON.parse(window.localStorage.getItem("committwoUser"));
		actionQueue.addAction("editProfile", "");
		//
	};
	this.login = function(email, password){
		//requires instant connection
		//some ajax
		//window.localStorage.setItem("committwoUser", JSON.stringify(this.superUser));
		if(!hasConnection()){
			var user = JSON.parse(window.localStorage.getItem("committwoUser"));
        	var lang = new Lang(user.language);
			window.alert(lang.noInternetMsg+"No internet");
			return;
		}
		var userLogin = {
			userLogin:{
				email: email,
				password: password
			}
		};
		var that = this; 
		$.ajax({
            url: '../../../server/UserManager.php',  //creat get =xxx.php
            //beforeSend: function (request) //must have ??
            //{
                //request.setRequestHeader("X-CSRF-TOKEN",$('input[name=_token]').val());
            //},
            type: 'POST',
            data: userLogin,
            cache: false,
            dataType: 'text',
            //processData: false,
            //contentType: false,
            success:function(data, textStatus, jqXHR){
            	//cl(data);
            	data=JSON.parse(data);
            	if(data.msg =="success"){
            		//window.alert("you are logged in!");
            		var loc = {};
            		loc.name = data.user.name;
            		loc.email = data.user.email;
            		loc.priviledges = data.user.priviledges; 
            		loc.language = data.user.language;
            		loc.profilePic = data.user.profilePic; 
            		window.localStorage.setItem("committwoUser", JSON.stringify(loc));
            		that.currentUser=loc;
            		//location.reload();//!! Too violent
            		$(window).trigger('hashchange');//
            		window.alert("lpgin success");
            		//Materialize.toast(Lang(loc.language).welcome, 4000);
            		return true;
            	}else if(data.msg == "denied"){
            		window.alert("wrong password.");
            		return false;
            	}else{
            		window.alert("You are not logged in, but I don't know why. Error: "+data.msg);
            	}
                ////cl(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                //cl('ERRORS:' + textStatus +"errorThrown"+errorThrown);
                //cl("jqXHR"+jqXHR);
                return false;
            },
            complete: function(data){ //No matter error or success.
            }
        });
	};
	this.register = function(email, password, firstname, lastname){
		//requires instant connection
		//some ajax
		//window.localStorage.setItem("committwoUser", JSON.stringify(this.superUser));
		if(!hasConnection()){
			var user = JSON.parse(window.localStorage.getItem("committwoUser"));
        	var lang = new Lang(user.language);
			window.alert(lang.noInternetMsg+"No internet");
			return;
		}
		var data = {
			userRegister:{
				email: email,
				password: password,
				firstname: firstname,
				lastname: lastname,
				age:0,
				gender:0,
				zip_code:90024,
				phone_num: 123056308,
				email_set:0,
				phone_set:0,
				gender_set:0,
				zip_code_set:0,
				age_set:0,
				phone_num_set:0
			}
		};
		var that = this; 
		$.ajax({
            url: '../../../server/userManager.php',  //creat get =xxx.php
            //beforeSend: function (request) //must have ??
            //{
                //request.setRequestHeader("X-CSRF-TOKEN",$('input[name=_token]').val());
            //},
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'text',
            //processData: false,
            //contentType: false,
            success:function(data, textStatus, jqXHR){
            	//cl(data);
            	if(data == "duplicate"){
            		window.alert("This email has been registered.");
            		return;
            	}
            	data=JSON.parse(data);
            	if(data.msg =="success"){
            		//window.alert("you are logged in!");
            		var loc = {};
            		loc.name = data.user.name;
            		loc.email = data.user.email;
            		loc.priviledges = data.user.priviledges; 
            		loc.language = data.user.language;
            		loc.profilePic = data.user.profilePic; 
            		window.localStorage.setItem("committwoUser", JSON.stringify(loc));
            		that.currentUser=loc;
            		//location.reload();//!! Too violent
            		$(window).trigger('hashchange');//
            		window.alert("registered");
            		//Materialize.toast(Lang(loc.language).welcome, 4000);
            	}else{
            		window.alert("You are not registered, but I don't know why. Error: "+data.msg);
            	}
                ////cl(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                //cl('ERRORS:' + textStatus +"errorThrown"+errorThrown);
                //cl("jqXHR"+jqXHR);
            },
            complete: function(data){ //No matter error or success.
            }
        });
	};
};

var service = new UserService();
service.initialize();
//service.register("calthayzh@gmail.com", "123456", "Cathy", "Z");
service.login("calthayzh@gmail.com", "123456");
service.login("calthayzh@gmail.com", "12346");