//orig file: Language.js----
var EnglishLang = {
	//Navbar sideNav and page names
	elefindBrand:"Elefind",
	publicGallery:"Public Sketch Gallery",
	publicAlbum:"Public Album",
	publicMatches:"Published Results [N/A]",
	newSearch:"New Search",
	myGallery:"My Sketch Gallery",
	myAlbum:"My Photo Album",
	history:"History",
	about:"About us",
	privateAlbum:"Private Album",
	introduction:"Intro to Elefind",
	//User
	loginText:"Log in to explore more",
	email:"Email",
	signOut:"Sign out",
	signIn:"Sign In",
	accountSettings:"Account",
	register:"Register",
	username:"Username",
	password:"Password",
	oldPassword:"Old Password",
	newPassword:"New Password",
	//Utilities
	submit:"Submit",
	confirm:"Confirm",
	//feedback
	setSuccessMsg:"Modification saved!",
	noChangeMsg:"No new settings.",
	greetUser:"Welcome back,",
	wrongOldPassword:"Password doesn't match.",
	imageSaved:"Image saved!",
	//drawing board
	applyRatio:"Apply",
	//searchSettings
	maxPatchSize:"Patch Area",
	maxPatchSizeExpl:"It controls how finely the searching process is, and it also greatly affects the speed of searching. Find your balance.",
	patchSmall:"Fine",
	patchMedium:"Medium",
	patchNoRestrict:"Fast",
	centerPos:"Center Position",
	centerPosExpl:"Tell us which part of the target you are drawing. X means horizontal distence from the left, and Y means vertical distance from the top, relative to the dimension of the target.",
	searchMethod:"Search Method",
	searchMethodExpl:"Choose what value of the pixels' color you want to base on to search.",
	RGB:"RGB value",
	HSB:"HSB value",
	greyScale:"Grey Scale",
	preprocessing:"Preprocessing Method",
	preprocessingExpl:"Choose the preprocessing method you want to apply to each candidate photo.",
	equalize:"Equalization",
	smooth:"Smooth (not implemented)",
	compress:"Compress",
	maxAmRate:"Maximum Amplification Rate",
	maxAmRateExpl:"Choose how much larger you expect your target to be ??? how to express it?.",
	maxFolds:"Maximum Folds",
	maxFoldsExpl:"Choose how much larger at most you expect your target to be than your sketch, measured by photo-size/sketch-size.",
	searchRegion:"Search Region",
	searchRegionExpl:"Specify the area of where the center of your draft can be, in percentile ralative to the width/height of the candidate photo.",
	slidingStep:"Sliding Step",
	slidingStepExpl:"Specify the sliding step length of each comparison. The smaller, the slower.",
	searchScope:"Searching Scope",
	searchScopeExpl:"Tell us where you expect to find your candidate.",
	targetTimeRange:"Time Range",
	targetTimeRangeExpl:"[Optional]Give us a period of time during which you think your target photo was uploaded or created a record. ",
	drawingHeader:"Draw your Impression",
	download:"download",
	saveToServer:"save to server",
	searchSettingsHeader:"Search Settings",
	progressHeader:"In Progress",
	resultHeader:"Result List",
	//imageDisplay
	by:"by",
	preview:"preview",
	author:"author",
	score:"score",
	title:"Title",
	//searchProgress
	startProcessingSketch: "Start processing sketch...",
	typicalMapGotten: "Processing sketch 50%...",
	startComparing: "Start comparing...",
	comparing: "Comparing",
	finishedComparing: "Finished!", 
	startProcessingSketchIcon: "place",
	typicalMapGottenIcon: "compare",
	startComparingIcon: "send",
	comparingIcon: "&#xE317;", //"keyboard_backspace",
	finishedComparingIcon: "&#xE877;",//"done_all", 
	//other
	copyrightText:"Copyright 2016",
	team:"Team",
	default:"default",
	none:"none",
	apply:"apply",
	welcome:"Welcome!",
	width:"width",
	height:"height",
	advanced:"advance",
	draw:"draw",
	settings:"settings",
	progress:"progress",
	result:"result",
	save:"save",
	next:"next",
	delete:"delete",
	from:"from",
	to:"to",
	retypePassword:"Retype Password",
	brokenImage:"",
	noTitle:"No Title",
	noAuthor:"Anonymous User",
	changeLang:"中文",
	tempRegisterDeclaration:"<span>This website is a <b>demo</b> site for Elefind. "+
	"Your email will NOT be used to verify your identity, "+
	"nor will it be used for any purposes other than logging into this platform. "+
	"Also, any information you give to Elefind can be access by its developers, "+
	"and we are not responsible for keeping your sketches, photos, etc secure or private. <br/>"+
	"Click REGISTER to acknowledge that you are fully aware of the statement above and are willing to create your acount.</span>",
	galleryNotice:"<span>Due to the limited space on server, files larger than 2M will be rejected. Administrators may also delete ANY file. </span>",
	clearCanvasNote:"Clears the canvas.",
	dzDefaultMsg:"Drop files here to upload, or click to choose",
	searchSettingsNotice:"",
	errorComparingIcon: "close",
	comparingError: "Searching ends with error",
	noInternetMsg:"",
	emptyDraftError:"You've uploaded an empty sketch.",
	illegalArgsError:"Bad searching config"
};
var ChineseLang = {
	//Navbar sideNav and page names
	elefindBrand:"寻象",
	newSearch:"发起搜索",
	myGallery:"我的画册",
	history:"搜索历史",
	about:"关于我们",
	//User
	signOut:"登出",
	username:"用户名",
	password:"密码",
	oldPassword:"旧暗号",
	newPassword:"新暗号",
	accountSettings:"用户设置",
	register:"注册",
	//Utilities
	submit:"提交",
	team:"团队",
	signIn:"登录",
	//feedback
	setSuccessMsg:"设置成功！",
	noChangeMsg:"没有新设置。",
	greetUser:"欢迎回来,",
	confirm:"确认",
	wrongOldPassword:"密码错误。",
	//other
	copyrightText:"2016 版权所有",
	welcome:"欢迎！",
	publicGallery:"公共画廊",
	publicAlbum:"公共相册",
	publicMatches:"Published Results[未开放]",
	loginText:"登录探索更多",
	email:"电子邮件",
	applyRatio:"应用尺寸",
	maxPatchSize:"色块大小",
	maxPatchSizeExpl:"It controls how finely the searching process is, and it also greatly affects the speed of searching. Find your balance.",
	patchSmall:"精细",
	patchMedium:"中等",
	patchNoRestrict:"快速",
	centerPos:"中心位置",
	centerPosExpl:"Tell us which part of the target you are drawing. X means horizontal distence from the left, and Y means vertical distance from the top.",
	searchMethod:"Search Method",
	searchMethodExpl:"Choose what value of the pixels' color you want to base on to search.",
	RGB:"RGB 值",
	HSB:"HSB 值",
	greyScale:"灰度",
	preprocessing:"处理方法",
	preprocessingExpl:"Choose the preprocessing method you want to apply to each candidate photo.",
	equalize:"Equalization",
	smooth:"Smooth (not implemented)",
	compress:"压缩",
	maxAmRate:"Maximum Amplification Rate",
	maxAmRateExpl:"Choose how much larger at most you expect your target to be.",
	maxFolds:"最大倍数",
	maxFoldsExpl:"Choose how much larger at most you expect your target to be, in the other way.",
	searchRegion:"中心范围",
	searchRegionExpl:"Specify the area of where the center of your draft can be, in percentile ralative to the width/height of the candidate photo.",
	slidingStep:"滑动步长",
	slidingStepExpl:"指出滑动窗口的步长。越小越慢。",
	searchScope:"搜索范围",
	searchScopeExpl:"告诉我们你觉得目标图片会在哪里。",
	default:"默认",
	none:"无",
	apply:"应用",
	width:"宽",
	height:"高",
	advanced:"高级",
	draw:"作画",
	settings:"设置",
	progress:"进度",
	result:"结果",
	save:"保存",
	next:"下一步",
	myAlbum:"我的相册",
	drawingHeader:"画出你的印象",
	download:"下载",
	saveToServer:"保存到云端",
	searchSettingsHeader:"搜索选项设置",
	progressHeader:"搜索中",
	resultHeader:"结果列表",
	introduction:"Intro to Elefind",
	privateAlbum:"个人相册",
	imageSaved:"已保存",
	by:"来自",
	preview:"预览",
	author:"作者",
	score:"得分",
	title:"标题",
	delete:"删除",
	from:"从",
	to:"到",
	retypePassword:"再次输入密码",
	brokenImage:"",
	noTitle:"无标题",
	noAuthor:"匿名用户",
	targetTimeRange:"时间范围",
	targetTimeRangeExpl:"[可选]Give us a period of time during which you think your target photo was uploaded or created a record. ",
	startProcessingSketch: "开始处理手绘...",
	typicalMapGotten: "手绘处理50%...",
	startComparing: "开始比较...",
	comparing: "比较中",
	finishedComparing: "完成!",
	startProcessingSketchIcon: "place",
	typicalMapGottenIcon: "compare",
	startComparingIcon: "send",
	comparingIcon: "&#xE317;", //"keyboard_backspace",
	finishedComparingIcon: "&#xE877;",//"done_all", 
	changeLang: "English",
	tempRegisterDeclaration:"<span>此网站是寻象<b>测试版</b>。"+
		"您的邮箱<i>不会</i>被用来验证身份，"+
		"也不会被用于除了登录本平台之外的其他目的。"+
		"同时，开发者可以接触你提供给本平台的任何信息，比如照片，手绘图等，"+
		"并且我们不会保证这些数据完好且不被公开。 <br/>"+
		"点击注册表明您以理解上述声明且愿意注册该账号。</span>",
	galleryNotice:"<span>Due to the limited space on server, 超过2M的文件会被退回。 管理员可能删除任何文件. </span>",
	clearCanvasNote:"会清空画板",
	dzDefaultMsg:"拖文件到此（或点击选择）上传",
	searchSettingsNotice:"",
	errorComparingIcon: "close",
	comparingError: "抱歉，搜索失败",
	noInternetMsg:"没有网络连接",
	emptyDraftError:"您上传了空的手绘",
	illegalArgsError:"搜索选项设置不当"
};
var Lang = function(language){
	if(language=="zh"){
		 return ChineseLang;
	}else{
		return EnglishLang;
	}
	/*
	this.fallback = "en";
	this.isCalling = false; 
	this.get = function(str){
		var hasLang = window.localStorage.getItem("local-language");
		var user = window.localStorage.getItem("elefindUser");
		if (typeof str === 'undefined') { 
			if(hasLang){
					return JSON.parse(hasLang);
			}else{
				if(!user){
					this.requestLang("sys", false);
					Materialize.toast("1 loading...", 4000); //what can I say here if I have no local language?  
					return;
				}else{
					this.requestLang(JSON.parse(user).language, false);
					Materialize.toast("2 loading...", 4000); //what can I say here if I have no local language?  
					return;
				}
			}
		}else{
			if(hasLang && JSON.parse(hasLang).language == str){
				return JSON.parse(hasLang);
			}else{
				this.requestLang(str, false); //TODO shall I distinguish these forms? 
				Materialize.toast("3 loading...", 4000); //what can I say here if I have no local language?  
				return;
			}
		}
	}
	this.requestLang = function(lang, alreadyHas){
		if(this.isCalling){
			return; 
		}
		this.isCalling = true; 
		var that = this;
		var dataToSend = {changeLang:lang};
		$.ajax({
            	url: '../server/lang.php',  //creat get =xxx.php
            	//beforeSend: function (request) //must have ??
            	//{
                	//request.setRequestHeader("X-CSRF-TOKEN",$('input[name=_token]').val());
            	//},
            	type: 'POST',
            	data: dataToSend,
            	cache: false,
           		dataType: 'text',
      			//processData: false,
        			//contentType: false,
        		success:function(data, textStatus, jqXHR){
        			//cl(data);
      				data=JSON.parse(data);
            		//cl("Language changed");
            		window.localStorage.setItem("local-language", JSON.stringify(data));
            	},
            	error: function(jqXHR, textStatus, errorThrown){
                	//cl('ERRORS:' + textStatus +"| ErrorThrown"+errorThrown);
                	if(!hasConnection()){
                		//cl("Connection died");
                		window.alert("can't change language offline");
                		return;
                	}else{
                		//cl("failed");
                	}
            	},
            	complete: function(data){ //No matter error or success. 
            	 that.isCalling=false;                
            	}
    	});
	}
	this.get(language);
	*/
};
/*
*/
//orig file: UserService.js----
var defaultSettings = {
			//MANAGER_TYPE:"ImprSearch",
			searchMethod:1,
			preprocessing:3,
			maxPatchSize:1250,
			maxAmRate:2,
			maxFolds:2,
			centerX:0.5,
			centerY:0.5,
			searchW:0.2,
			searchH:0.2,
			slidingStep:4
		};
/*currentUser.logOut=function(){
	this.name="";
	this.email="";
	this.password="";
	this.profilePic="";
	this.language="zh";
	this.draftFolderURL="undecided";
	this.photoAlbumURL="undecided";
	this.searchSettings= defaultSettings;
	this.friends="";
	this.priviledges="";
}*/
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
		if(window.localStorage.getItem("elefindUser")){
			this.currentUser=JSON.parse(window.localStorage.getItem("elefindUser"));
			//cl("Has user");
		}else{
			window.localStorage.setItem("elefindUser", JSON.stringify(this.emptyUser));
			this.currentUser=JSON.parse(window.localStorage.getItem("elefindUser"));
			//cl("add user");
		}
		if(window.localStorage.getItem("userSettings")){
			//this.currentUser=JSON.parse(window.localStorage.getItem("elefindUser"));
			//Er, use this to display the settings form
			//cl("Has user settings");
		}else{
			window.localStorage.setItem("userSettings", JSON.stringify(defaultSettings));
			//this.currentUser=JSON.parse(window.localStorage.getItem("elefindUser"));
			//cl("add settings");
		}
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
		window.localStorage.setItem("elefindUser", JSON.stringify(this.currentUser));
	};
	this.printlogOut = function(){
		//cl(this.currentUser.name);
		//window.localStorage.setItem("elefindUser", JSON.stringify(this.currentUser));
	};
	this.updateUserInfo = function(){
		//can be delayed
		window.localStorage.setItem("elefindUser", JSON.stringify(this.currentUser));
		this.currentUser=JSON.parse(window.localStorage.getItem("elefindUser"));
		actionQueue.addAction("editProfile", "");
		//
	};
	this.authenticate = function(email, password){
		//requires instant connection
		//some ajax
		//window.localStorage.setItem("elefindUser", JSON.stringify(this.superUser));
		if(!hasConnection()){
			var user = JSON.parse(window.localStorage.getItem("elefindUser"));
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
            url: '../server/UserManager.php',  //creat get =xxx.php
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
            		window.localStorage.setItem("elefindUser", JSON.stringify(loc));
            		that.currentUser=loc;
            		//location.reload();//!! Too violent
            		$(window).trigger('hashchange');//
            		Materialize.toast(Lang(loc.language).welcome, 4000);
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
	this.register = function(email, username, password, language){
		//requires instant connection
		//some ajax
		//window.localStorage.setItem("elefindUser", JSON.stringify(this.superUser));
		if(!hasConnection()){
			var user = JSON.parse(window.localStorage.getItem("elefindUser"));
        	var lang = new Lang(user.language);
			window.alert(lang.noInternetMsg+"No internet");
			return;
		}
		username = username.replace(" ", "_"); 
		var data = {
			userRegister:{
				email: email,
				password: password,
				username: username,
				language: language
			}
		};
		var that = this; 
		$.ajax({
            url: '../server/UserManager.php',  //creat get =xxx.php
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
            		window.localStorage.setItem("elefindUser", JSON.stringify(loc));
            		that.currentUser=loc;
            		//location.reload();//!! Too violent
            		$(window).trigger('hashchange');//
            		Materialize.toast(Lang(loc.language).welcome, 4000);
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
//orig file: AcSettingsView.js----
var AcSettingsView = function (service) {
    this.render = function() {
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
        this.$el.html(this.template({lang:lang, user: user, isLoggedIn: isLoggedIn})); 
        $('#choose-'+user.language, this.$el).attr("checked",true);     
        /*
        Concerning boolean attributes, consider a DOM element defined by the HTML markup <input type="checkbox" checked="checked" />, and assume it is in a JavaScript variable named elem:
        elem.checked                            true (Boolean) Will change with checkbox state
        $( elem ).prop( "checked" )             true (Boolean) Will change with checkbox state
        elem.getAttribute( "checked" )          "checked" (String) Initial state of the checkbox; does not change
        $( elem ).attr( "checked" ) (1.6)       "checked" (String) Initial state of the checkbox; does not change
        $( elem ).attr( "checked" ) (1.6.1+)    "checked" (String) Will change with checkbox state
        $( elem ).attr( "checked" ) (pre-1.6)   true (Boolean) Changed with checkbox state
        */ 
        return this;
    };
    this.resetUser = function() {
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var error = false; 
        if($("#username").val().trim()!==""){
            user.name=$("#username").val().trim();
            if($("#username").hasClass("invalid")){
                $("#username").removeClass("invalid");
            }
            $("#username").addClass("valid");
        }else{
            $("#username").addClass("invalid");
            error=true;
        }
        user.name = user.name.replace(" ", "_");
        //if($("#old-password").val().trim() == user.password){
            if($("#new-password").val().trim()!==""){
                if($("#new-password").val().trim() == $("#new-password-2").val().trim()){
                    user.password = $("#new-password").val().trim();
                    if($("#new-password").hasClass("invalid")){
                        $("#new-password").removeClass("invalid");
                    }
                    if($("#new-password-2").hasClass("invalid")){
                        $("#new-password-2").removeClass("invalid");
                    }
                    $("#new-password").addClass("valid");
                    $("#new-password-2").addClass("valid");
                }else{
                    error=true;
                    $("#new-password").addClass("invalid");
                    $("#new-password-2").addClass("invalid");
                }
            }
            if($("#old-password").hasClass("invalid")){
                $("#old-password").removeClass("invalid");
            }
            //$("#old-password").addClass("valid");
        //}else{
            //$("#old-password").addClass("invalid");
            //error=true;
        //}
        if(!error && $("form input[name='lang']:checked").length){
            user.language = $("form input[name='lang']:checked").val();
            lang = new Lang(user.language);
            //cl(user.language);
            Materialize.toast(lang.setSuccessMsg, 4000);
            service.updateUserInfo();
            return;
        }else{
            Materialize.toast(lang.noChangeMsg, 4000);
        }
    };
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('click', '#submit-account-settings', this.resetUser);
        this.render();
    };
    this.initialize();
};
//orig file: ActionQueue.js----
var ActionQueue = function(){
/*  
http://stackoverflow.com/questions/2858121/convert-comma-separated-string-to-array
656
down vote
accepted
var array = string.split(',');
MDN reference, mostly helpful for the possibly unexpected behavior of the limit parameter. (Hint: "a,b,c".split(",", 2) comes out to ["a", "b"], not ["a", "b,c"].)
*/
    if(window.localStorage.getItem("ActionQueue")==null){
        this.queue=[];
    }else{
        this.queue=window.localStorage.getItem("ActionQueue").split(",");
    }
    //cl(this.queue);
    this.addAction = function(title, data){
        this.queue.push(JSON.stringify({title: title, data: data}));
        //cl(this.queue);
        if(hasConnection()){
            this.process();
        }else{
        }
    };
    this.process = function(){
        var that = this;
        //var pointer = -1;
        var initialLength = this.queue.length; 
        for (var i=0; i<initialLength; i++) {
            var action = JSON.parse(this.queue.shift());
            //always remove this action
            //that.queue.splice(0, 1); //?? looks so strange //here "this" means the ajax object!!
            //http://www.w3schools.com/js/js_array_methods.asp
      var dataToSend = {};
            switch(action.title){
                case('editProfile'):
                    dataToSend = { editProfile : JSON.parse(window.localStorage.getItem("elefindUser"))};
                    //var status = false;
                    $.ajax({
                        url: '../server/UserManager.php',  //creat get =xxx.php
                        //beforeSend: function (request) //must have ??
                        //{
                            //request.setRequestHeader("X-CSRF-TOKEN",$('input[name=_token]').val());
                        //},
                        type: 'POST',
                        data: dataToSend,
                        cache: false,
                        dataType: 'text',
                        //processData: false,
                        //contentType: false,
                        success:function(data, textStatus, jqXHR){
                            //cl(data);
                            data=JSON.parse(data);
                            if(data.msg =="success"){
                                //cl("Profile updated");
                            }else {
                                //cl(data.msg);
                            }
                            //status = true;
                            //that.queue.splice(i, 1); 
                            //?? looks so strange 
                            //here "this" means the ajax object 
                            //http://www.w3schools.com/js/js_array_methods.asp
                            //Er, asychronize means they will get back later, when i is no longer the value this action took place
                            //i--;
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            that.queue.push(JSON.stringify({title: "editProfile", data: ""}));
                            //cl('ERRORS:' + textStatus +"| ErrorThrown"+errorThrown);
                            if(!hasConnection()){
                                //cl("Connection died");
                                return;
                            }else{
                                //cl("task failed, proceed to the next task");
                            }
                        },
                        complete: function(data){ //No matter error or success.                
                        }
                    });
                    //if(status){
                    //}
                    break;
                case('changeLang'):
                    dataToSend = {changeLang:action.data}; 
                    $.ajax({
                        url: '../server/lang.php',  //creat get =xxx.php
                        //beforeSend: function (request) //must have ??
                        //{
                            //request.setRequestHeader("X-CSRF-TOKEN",$('input[name=_token]').val());
                        //},
                        type: 'POST',
                        data: dataToSend,
                        cache: false,
                        dataType: 'text',
                        //processData: false,
                        //contentType: false,
                        success:function(data, textStatus, jqXHR){
                            //cl(data);
                            data=JSON.parse(data);
                            if(data.msg =="success"){
                                //cl("Language changed");
                                window.localStorage.setItem("Language", data.lang);
                            }else {
                                //cl(data.msg);
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            //cl('ERRORS:' + textStatus +"| ErrorThrown"+errorThrown);
                            that.addAction('editProfile',"");
                            if(!hasConnection()){
                                //cl("Connection died");
                                return;
                            }else{
                                //cl("task failed, proceed to the next task");
                            }
                        },
                        complete: function(data){ //No matter error or success.                
                        }
                    });
                    break;
                case('deleteCloudImage'):
                    break;
                case('uploadNewHistory'):
                    break;
                case('publishPic'):
                    break;
                default:
            }
        }
    };
    this.saveActions = function(){
        //cl("saveActions"+this.queue.length);
        //cl(JSON.stringify(this.queue));//["{\"title\":\"editProfile\",\"data\":\"\"}","{\"title\":\"editProfile\",\"data\":\"\"}","{\"title\":\"editProfile\",\"data\":\"\"}"]
        //cl(this.queue.toString());//{"title":"editProfile","data":""},{"title":"editProfile","data":""},{"title":"editProfile","data":""}
        if(this.queue.length>0){
            //window.localStorage.setItem("ActionQueue", this.queue.toString());
        }
    };
};
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
var action = function(url, title, data){
    var dataToSend = {title:data};
    $.ajax({
            url: url,  //creat get =xxx.php
            //beforeSend: function (request) //must have ??
            //{
                //request.setRequestHeader("X-CSRF-TOKEN",$('input[name=_token]').val());
            //},
            type: 'POST',
            data: dataToSend,
            cache: false,
            dataType: 'text',
            //processData: false,
            //contentType: false,
            success:function(data, textStatus, jqXHR){
                //cl(data);
                data=JSON.parse(data);
                if(data.msg =="success"){
                    window.alert("you are logged in!");
                    window.localStorage.setItem("elefindUser", JSON.stringify(data.user));
                }else if(data.msg == "denied"){
                    window.alert("wrong password.");
                }else{
                    window.alert("You are not logged in, but I don't know why. Error: "+data.msg);
                }
                //cl(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                //cl('ERRORS:' + textStatus +"errorThrown"+errorThrown);
                //cl("jqXHR"+jqXHR);
            },
            complete: function(data){ //No matter error or success.
            }
    });
};
/*-------------------------
action: title, data, 
editProfile profile
?? sychronize from server?? 
changeLang newLang
deleteCloudImage path, filename
uploadNewHistory history
publishPic path, filename */
//orig file: DrawView.js----
var DrawView = function (service) {
  var findCommonFactor = function(a,b){
      var c=b;
      if(a<b){
        c=a;
        a=b;
        b=c;
      }
      while(a%b!==0){
        c=a%b;
        a=b;
        b=c;
      }
      return c;
    };
  this.render = function() {
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
      this.$el.html(this.template({lang:lang, user: user, isLoggedIn: isLoggedIn, header: {main:lang.drawingHeader}}));
      $('main', this.$el).html(this.innerTpl({user:user, lang:lang}));
      return this;
  };
  this.renderSideNav = function(){
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
        return this.sideNavTpl({lang:lang, user: user, isLoggedIn: isLoggedIn});
  };
  this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div class="content-holder"/>');
        //this.$el.on('keyup', '.search-key', this.findByName);
        //this.render();
  };
  this.initialize();
  this.continueRendering = function(){
    var myBoard = new DrawingBoard.Board('custom-board', {
          controls: [
          //'Color',
          {  Size: { type: "range", min: 5, max: 42 } },
          { DrawingMode: { filler: false } },
          'Navigation',
          //'Download'
          ],
          background:false,
          size: 5,
          webStorage: false,
          enlargeYourContainer: true,
      //droppable: true, //try dropping an image on the canvas!
      //stretchImg: true //the dropped image can be automatically ugly resized to to take the canvas size
    }, "my-board");
    this.board = myBoard; 
    var width = $("canvas").innerWidth();
    var height = $("canvas").innerHeight();
    var f = findCommonFactor(width,height);
    $("#width-ratio").val(width/f);
    $("#height-ratio").val(height/f);
    $("#reset-canvas-size").click(function(){
        var w=$("#width-ratio").val();
        var h=$("#height-ratio").val();
        //TODO: input check!!!
        if(w===0||h===0||h/w>10){
            window.alert("Naughty!");
            return;
        }
        var r = $("canvas").parent(".drawing-board-canvas-wrapper").innerWidth()/w;
        $("#custom-board").children().remove();
        $("#custom-board").css("width", Math.floor(w*r));
        $("#custom-board").css("height", Math.floor(h*r));
        myBoard = new DrawingBoard.Board('custom-board', {
            controls: [
            //'Color',
            {  Size: { type: "range", min: 5, max: 42 } },
            { DrawingMode: { filler: false } },
            'Navigation',
            //'Download'
            ],
            background:false,
            size: 5,
            webStorage: false,
            enlargeYourContainer: true,
            //color: 
            //droppable: true, //try dropping an image on the canvas!
            //stretchImg: true //the dropped image can be automatically ugly resized to to take the canvas size
        }, "my-board");
        $("#farbtastic-color-picker #color-lens").css("color","#000000");
        var f = findCommonFactor(w,h);
        $("#width-ratio").val(w/f);
        $("#height-ratio").val(h/f);
    });
    var colorChanged = function(color){
        ////cl(DrawingBoard.Utils.isColor(color));
        myBoard.setColor(color);
        myBoard.$el.find('.drawing-board-control-colors-current')
            .css('background-color', color)
            .attr('data-color', color);
        myBoard.ev.trigger('color:changed', color);
        myBoard.$el.find('.drawing-board-control-colors-rainbows').addClass('drawing-board-utils-hidden');
    };
    var farbCallback = function(color){
        $("#farbtastic-color-picker #color").val(color);
        $("#farbtastic-color-picker #color").css("background-color",color);
        $("#farbtastic-color-picker #color-lens").css("color",color);
        colorChanged(color);
    };
    $('#colorpicker').farbtastic(farbCallback);
      $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          beloworigin: true, // Displays dropdown below the button
          alignment: 'left', // Displays dropdown with edge aligned to the left of button
          stoppropagation: true
      });
      $("form#farbtastic-color-picker #color-lens").click(function(e){
          //cl(event.target);
          /*if(event.target == document.getElementById("color-lens")){
              if($("ul#picker-wrapper").hasClass("active")){
                  $("ul#picker-wrapper").removeClass("active");
              }else{
                  $("ul#picker-wrapper").addClass("active");
                  $("ul#picker-wrapper").css('top', event.target.offsetTop-200);
                  $("ul#picker-wrapper").css('left', event.target.offsetLeft);
              }*/
              //e.stopPropagation();
          //}
      });
      $("main").on("click mousePressed", "canvas", function(){
          $("ul#picker-wrapper").removeClass("active");
      });
      //Hey, very important!!!
      $("#picker-wrapper.dropdown-content").on("click", function(e){
          //window.alert("Clicked!")
          e.stopPropagation();
          e.preventDefault();
      });
      $("#picker-wrapper.dropdown-content").on("touchstart", function(e){
      //window.alert("Touched!")
          e.stopPropagation();
      //e.preventDefault();
      });
      $("#save-to-phone").on("click", function(){
          var img = myBoard.getImg();
          //window.alert(img.substring(0,25));
          //img = img.replace("image/png", "image/octet-stream");
          ////cl(img);
          if(window.imageSaver){
              //window.alert("Using cordova-save-image-gallery");
              var params = {data: img, prefix: 'myBoard_', format: 'png', quality: 80, mediaScanner: true};
              window.imageSaver.saveBase64Image(params,
                  function (filePath) {
                      navigator.notification.confirm('File saved on ' + filePath, null, "Image Saved","OK");
                      //window.alert();
                  },
                  function (msg) {
                      window.alert(msg);
                  }
              );
          }else{
              img=img.replace("image/png", "image/octet-stream");
              window.location.href = img;
          }
      });
      var that = this; 
      $("#save-to-server").on("click", function(event){
          //read search config from user
          that.saveDraftToServer();
      });
      $("main").on("click", ".next", function(){
        //cl("next"); 
        var draft = {
          type:"new-sketch", 
          title: $("#sketch-title").val(),
          base64str: that.board.getImg(), 
          publish: false, 
        };
        var str64 = that.board.getImg();
        //cl(str64);
        window.localStorage.setItem("userSketch", JSON.stringify(draft));//.replace("data:image/png;base64,", "canvas:")
        window.location.hash = "searchSettings"; 
      });
      $('input#sketch-title').characterCounter();
      $('.tool-tipped').tooltip({delay: 10});
  };
  this.saveDraftToServer = function(){
    var that = this; 
    var user = service.currentUser;
    var lang = new Lang(user.language);
    var draft = {
      title: $("#sketch-title").val(),
      base64str: this.board.getImg(), 
      publish: false, //TODO　grab from the form             
    };
    var data = {saveDraft: true, user: JSON.parse(window.localStorage.getItem("elefindUser")), draft:draft};
    $.ajax({
        url: '../server/ImageManager.php',  //creat get =xxx.php
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
            Materialize.toast(lang.imageSaved, 4000);               
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.alert("Upload Settings failed. Try again");//+lang.uploadErrorMsg
            //cl("Error: "+ textStatus+"|"+errorThrown);
        },
        complete: function(data){ //No matter error or success. 
        //so what is the data?   
            //            
        }
    });
  };
};
//orig file: GridView.js----
var GridView = function(service, type){
  this.type = type; 
  this.header = {};
  this.render = function() {
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
      this.$el.html(this.template({lang:lang, user: user, isLoggedIn: isLoggedIn, header:this.header}));
      $('main', this.$el).html(this.innerTpl({user:user, lang:lang, header:this.header, type:this.type}));
      return this;
  };
  this.renderSideNav = function(){
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
        return this.sideNavTpl({lang:lang, user: user, isLoggedIn: isLoggedIn});
    };
  this.continueRendering = function(){
    var user = service.currentUser;
    var lang = new Lang(user.language);
    $(".materialboxed").materialbox();
    this.lastWidth = window.innerWidth; 
    var that = this; 
    $( window ).resize(function() {
      ////cl(window.innerWidth+"x"+window.innerHeight);
      /*var windowW = window.innerWidth;
      if(windowW<601){
        var containerW = windowW*0.90;
      }else if(windowW>992){
        var containerW = (windowW-300)*0.7; 
      }else{
        var containerW = (windowW*0.85);
      }*/
      resizeGallery(that); 
    }); 
    $("#gallery").on("click", ".card-image img", function(){
      var src =  $(this).attr("data-orig");
      ////cl(src);       
      $("#image-view-wrapper").html(that.imageViewTpl({
        src: src, 
        author: $(this).attr("data-author"), 
        title: $(this).attr("data-caption"), 
        date: $(this).attr("data-date"), 
        lang: lang
      }));
      renderImageView(); 
    });
    $(".row").on("click", ".exit-view", function(){
      $("#image-view-wrapper").removeClass("has-view"); 
      $("#image-view-wrapper").html("<span>:-)</span>"); //TODO what shall i fill?
      $('.row#gallery').css("display", "block");
    }); 
  };
  this.initialize = function () {
    var user = service.currentUser;
      var lang = new Lang(user.language);
      // Define a div wrapper for the view (used to attach events)
      this.$el = $('<div class="content-holder"/>');
      //this.$el.on('keyup', '.search-key', this.findByName);
      //this.render();
      var data = {};
      if(this.type == "publicGallery"){
        this.header.main = lang.publicGallery;
        //request photos
        data.publicGallery = "want";
      }else if(this.type == "myGallery"){
        this.header.main = lang.myGallery;
        data.myGallery = "want";
        data.user = service.currentUser; 
      }else if(this.type == "publicAlbum"){
        this.header.main = lang.publicAlbum;
        //request photos
        data.publicAlbum = "want";
      }else if(this.type == "myAlbum"){
        this.header.main = lang.myAlbum;
        data.myAlbum = "want";
        data.user = service.currentUser; 
      }   
      var that = this; 
      $.ajax({
          url: '../server/ImageManager.php',  //creat get =xxx.php
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
            ////cl(data);
            data=JSON.parse(data);
            /*Example: 
            files:[{filename: "zymdxlyx@sina.cn_1477030781.png", author: "zymdxlyx@sina.cn", title: null,…},…]
        0:{filename: "zymdxlyx@sina.cn_1477030781.png", author: "zymdxlyx@sina.cn", title: null,…}
          author:"zymdxlyx@sina.cn"
          date:"2016-10-21"
          filename:"zymdxlyx@sina.cn_1477030781.png"
          title:null
          visibility:"private"
        1:{filename: "zymdxlyx@sina.cn_1477035495.png", author: "zymdxlyx@sina.cn", title: null,…}
      msg:"success"
            */
            if(data.msg =="success"){
              var path = "";
              var origPath = ""; 
              if(that.type=="publicAlbum"){
                $(".row#gallery").append(that.uploadTileTpl());
                $("div#upload-dropzone").dropzone({ 
                    url: "../server/UploadHandler.php", 
                    uploadMultiple:true, 
                    paramName:"uploadToPublicAlbum", 
                    params: {useremail:JSON.parse(window.localStorage.getItem("elefindUser")).email}, 
                    previewTemplate: dropzoneTmpl, 
                    maxFileSize: 2,
                    dictDefaultMessage: lang.dzDefaultMsg,
                  });//maxFileSize: 2 cause the browser to crash? 
                path = "../server/storage/"+"public_photos/thumbnail/";
                origPath = "../server/storage/"+"public_photos/";
              }else if(that.type=="publicGallery"){
                path = origPath = "../server/storage/"+"public_sketches/";
              }else if(that.type=="myGallery"){
                path = origPath = "../server/storage/users/"+service.currentUser.email+"/sketches/";
              }else{//myAlbum
                $(".row#gallery").append(that.uploadTileTpl());
                $("div#upload-dropzone").dropzone({ 
                    url: "../server/UploadHandler.php", 
                    uploadMultiple:true, 
                    paramName:"uploadToMyAlbum", 
                    params: {useremail:JSON.parse(window.localStorage.getItem("elefindUser")).email}, 
                    previewTemplate: dropzoneTmpl, 
                    maxFileSize: 2,
                    dictDefaultMessage: lang.dzDefaultMsg,
                  });//maxFileSize: 2 cause the browser to crash?
                path = "../server/storage/users/"+service.currentUser.email+"/photos/thumbnail/";
                origPath = "../server/storage/users/"+service.currentUser.email+"/photos/";
              }
              if(data.files.length === 0) return; 
              var currentDate = data.files[0].date; 
              $(".row#gallery").append(that.textTileTpl({
                text:{
                  title: currentDate.substr(currentDate.indexOf("-")+1), 
                  body: currentDate.substr(0,currentDate.indexOf("-")) 
                }, 
                style: getRandomColor()
              }));
              for(var x in data.files){
                var file = data.files[x];
                if(file.date != currentDate){
                  currentDate = file.date; 
                  $(".row#gallery").append(that.textTileTpl({
                    text:{
                      title: currentDate.substr(currentDate.indexOf("-")+1), 
                      body: currentDate.substr(0,currentDate.indexOf("-"))
                    }, 
                    style: getRandomColor()
                  }));
                }
                //lastIndexOf()  从后向前搜索字符串。
                // Well, /./g matches with everything 
                $(".row#gallery").append(that.imageTileTpl({
                  image:{
                    src: path+file.filename,
                    orig: origPath+file.filename,  
                    title: file.title, 
                    filename: classNameEncode(file.filename)
                  }, 
                    author:file.authorname, 
                    date: file.date, 
                    visibility: file.visibility
                  }));
                  //file.filename.replace("@","at").replace(/[.]/g, "dt")
              }
            }else{
              //cl("sad..."); 
            }
          },
          error: function(jqXHR, textStatus, errorThrown){
              //cl('ERRORS:' + textStatus +" | errorThrown: "+errorThrown);
              //cl("jqXHR"+jqXHR);
              window.alert("Can't get your drafts now!"); 
          },
          complete: function(data){ //No matter error or success.
              $("main .preloader-wrapper").remove();
              $(".materialboxed").materialbox();
              $(window).trigger('resize');
          }
      }); 
  };
  this.initialize();
};
var renderImageView = function(){
  $("#image-view-wrapper").addClass("has-view"); 
  if(window.innerWidth<600){
    $('.row#gallery').css("display", "none");
  } 
  var w = $('#image-view-wrapper').width();
  $(".image-view").css("width", w+'px');
  $(".image-self-wrapper").css("height", Math.floor(w*3/4)+'px');
  $(".image-details").css("height", Math.floor(w*1/4)+'px');
  var h=Math.floor(w*1/4);
  $("p.view-author").css("font-size", Math.floor(h/4)+'px');
  $("p.view-author").css("width", (w-75)+'px');
  $("p.view-title").css("font-size", Math.floor(h/5)+'px');
  $("span.view-date").css("font-size", Math.floor(h/6)+'px');
  //$(".image-actions").css("height", Math.floor(w*1/5)+'px'); 
  $(".image-self .hidden-image").css("max-width", w+"px");
  $(".image-self .hidden-image").css("max-height", Math.floor(w*3/4)+"px");
  $('.image-view').pushpin({ top: $('.image-view').offset().top, button:$('.page-footer').offset().top });
  $('.materialboxed').materialbox();
  $(".image-view button.search-by-this").click(function(){
    var type = this.parentNode.parentNode.parentNode.parentNode; 
    //cl(type.className); 
    var img = this.parentNode.parentNode.children[0].children[0]; //[0] image-card
    //cl(img); 
    //cl($(img).css("background-image")); //url("http://localhost/elefind/server/storage/users/zymdxlyx@sina.cn/sketches/zymdxlyx@sina.cn_1477905731.png")
    var imageURL = $(img).css("background-image");
    imageURL = imageURL.replace(/"/g, "");
    if(type.className.indexOf("Gallery")!=-1){
       window.localStorage.setItem("userSketch", JSON.stringify({type: 'old-sketch', src: imageURL})); 
    }else{
      window.localStorage.setItem("userSketch", JSON.stringify({type: 'photo', src: imageURL})); 
    }
    window.location.hash = "#searchSettings";
    $(window).trigger("hashChange"); 
  });
  $(".image-view a#delete-pic").click(function(){
    var img = this.parentNode.parentNode.children[0].children[0]; //[0] image-card
    ////cl(img); 
    ////cl($(img).css("background-image")); //url("http://localhost/elefind/server/storage/users/zymdxlyx@sina.cn/sketches/zymdxlyx@sina.cn_1477905731.png")
    var filename = $(img).css("background-image");
    filename = filename.replace(/"/g, "");
    filename = filename.substring(filename.lastIndexOf("/")+1, filename.indexOf(')'));
    filename = classNameEncode(filename); //filename.replace("@","at").replace(/[.]/g, "dt"); 
    //lastIndexOf() 从后向前搜索字符串。
    //jQuery.post( url [, data ] [, success ] [, dataType ] )
    $.post("../server/ImageManager.php", {deletePic:$(img).css("background-image").replace(/"/g, "")}, function(data){
      if(data=="success"){
        ////cl("deleted a pic: "+filename); 
        $(".image-view").remove();
        $("#"+filename).remove(); 
      }     
    }); 
  });
  $(".row").on("click", ".exit-view", function(){
    $("#image-view-wrapper").removeClass("has-view"); 
    $("#image-view-wrapper").html("<span>:-)</span>");
    $('.row#gallery').css("display", "block");
    //cl("show gallery"); 
  }); 
};
var resizeGallery = function(that){
      var containerW = $(".row#gallery").width()-20; //margin
      var w = 120;
      for(; w <= 150; w++){
        if(containerW%w < 20 ){
          break;
        }
      }
      ////cl(windowW+", "+containerW+", "+w); 
      $(".row#gallery .card, .row#gallery .card-panel").css("width", w+"px");
      $(".row#gallery .card, .row#gallery .card-panel").css("height", w+"px");
      $(".row .upload-tile").css("height", (w)+"px");
      $(".row .upload-tile").css("width", (w*2+4)+"px");
      $(".row#gallery .card img").css("width", (w-2)+"px");
      $(".row#gallery .card img").css("height", (w-2)+"px");
      if(window.innerWidth<600 && that.lastWidth>600 && $("#image-view-wrapper").hasClass("has-view") ){
        $('.row#gallery').css("display", "none");
      }
      if(window.innerWidth>600 && that.lastWidth<600){
        $('.row#gallery').css("display", "block");
      }
      that.lastWidth=window.innerWidth; 
      w = $('#image-view-wrapper').width();
      $(".image-view").css("width", w+'px');
      $(".image-self-wrapper").css("height", Math.floor(w*3/4)+'px');
      $(".image-details").css("height", Math.floor(w*1/4)+'px');
      var h=Math.floor(w*1/4);
      $("p.view-author").css("font-size", Math.floor(h/4)+'px');
      $("p.view-author").css("width", (w-75)+'px');
      $("p.view-title").css("font-size", Math.floor(h/5)+'px');
      $("span.view-date").css("font-size", Math.floor(h/6)+'px');
      //$(".image-actions").css("height", Math.floor(w*1/5)+'px'); 
      $(".image-self .hidden-image").css("max-width", w+"px");
      $(".image-self .hidden-image").css("max-height", Math.floor(w*3/4)+"px");
};
var classNameEncode = function(str){
  var arr = str.split("");
  var arr2 = []; 
  for (var i = arr.length - 1; i >= 0; i--) {
    if(arr[i]=="@"){
      arr2[2*i]='a';
      arr2[2*i+1]='t';
    }else if(arr[i]=="."){
      arr2[2*i]='d';
      arr2[2*i+1]='t';
    }else if(arr[i]=="#"){
      arr2[2*i]='h';
      arr2[2*i+1]='a';
    }else if(arr[i]=="<"){
      arr2[2*i]='l';
      arr2[2*i+1]='e';
    }else if(arr[i]==">"){
      arr2[2*i]='r';
      arr2[2*i+1]='i';
    }else if(arr[i]=='\''){
      arr2[2*i]='n';
      arr2[2*i+1]='o';
    }else{
      arr2[2*i]=arr[i];
      arr2[2*i+1]=arr[i];
    }
  }
  ////cl(arr);
  ////cl(arr2);
  return arr2.join().replace(/[,]/g,"");
};
var classNameDecode = function(str){
  var arr = str.split("");
  var arr2 = []; 
  if(arr.length%2!==0) return "can't decode"; 
  for (var i = arr.length - 1; i >= 1; i-=2) {
    if(arr[i]==arr[i-1]){
      arr[(i-1)/2]=arr[i];
    }else if(arr[i]=='a'&&arr[i-1]=='t'){
      arr[(i-1)/2]="@";
    }else if(arr[i]=='h'&&arr[i-1]=='a'){
      arr[(i-1)/2]="#";
    }else if(arr[i]=='d'&&arr[i-1]=='t'){
      arr[(i-1)/2]=".";
    }else if(arr[i]=='l'&&arr[i-1]=='e'){
      arr[(i-1)/2]="<";
    }else if(arr[i]=='r'&&arr[i-1]=='i'){
      arr[(i-1)/2]=">";
    }else if(arr[i]=='n'&&arr[i-1]=='o'){
      arr[(i-1)/2]="\'";
    }else{
      arr[(i-1)/2]="_"; 
    }
  }
  //cl(arr2.join().replace(/[,]/g,""));
  return arr2.join().replace(/[,]/g,""); 
};
//orig file: HomeView.js----
var HomeView = function (service) {
    this.render = function() {
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
        this.$el.html(this.template({lang:lang, user: user, isLoggedIn: isLoggedIn, header: {main: lang.introduction}})); 
        //$('content', this.$el).html(employeeListView.$el);    
        ////cl(user);  
        return this;
    };
    this.renderSideNav = function(){
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
        return this.sideNavTpl({lang:lang, user: user, isLoggedIn: isLoggedIn});
    };
    this.continueRendering = function(){
        //cl("home continueRendering"); 
        $(document).ready(function(){
            $('.parallax').parallax();
        });
    };
    this.logOut = function() {
        service.logOut();
        //cl(service.currentUser);
    };
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        //this.$el.on("click", "'#sign-out", this.logOut);
        //this.render();
    };
    this.initialize();
};
function getRandomColor(){
    var i = Math.floor(Math.random()*13);
    switch(i){
        case 0:
            return '#311B92';
        case 1:
            return '#880E4F';
        case 2:
            return '#4A148C';
        case 3:
            return '#1A237E';
        case 4:
            return '#01579B';
        case 5:
            return '#006064';
        case 6:
            return '#004D40';
        case 7:
            return '#1B5E20';
        case 8:
            return '#827717';
        case 9:
            return '#F57F17';
        case 10:
            return '#BF360C';
        case 11:
            return '#3E2723';
        case 12:
            return '#263238';
        default: return '#000000'; 
    }
}
//orig file: ProgressView.js----
var ProgressView = function(){
    this.actions = ["thread-start", "typical-gotten", "start", "searching-", "searching-", "searching-", "searching-", "searching-", "searching-", 
    "searching-", "searching-", "searching-", "searching-", "searching-", "finish"];
        //-----------------0----------------1-----------2---------3
    this.last = -1; 
    this.render = function() {
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
        this.$el.html(this.template({lang:lang, user: user, isLoggedIn: isLoggedIn, header:{main:lang.progressHeader}}));
        $('main', this.$el).html(this.innerTpl({user:user, lang:lang, header:{main:lang.progressHeader}}));
        return this;
    };
    this.renderSideNav = function(){
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
        return this.sideNavTpl({lang:lang, user: user, isLoggedIn: isLoggedIn});
    };
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div class="content-holder"/>');
        //this.$el.on('keyup', '.search-key', this.findByName);
        //this.render();
    };
    this.initialize();
    this.lastClassName = ""; 
    this.continueRendering = function(){
        //var canvas = document.getElementById('progress');
        //this.ctx = canvas.getContext('2d');
        //this.ctx.lastX = 0;
        //this.ctx.lastY = 0; 
        var that = this; 
        $("body").on("click","#test-btn", function(){
            var h = $("div#progress").css("height"); 
            $("#"+that.lastClassName).css("top", h); 
            //cl(that.lastClassName); 
            //cl("clicked"); 
            $("div#progress").removeClass();
            that.last = that.last+1; 
            var className = that.actions[that.last];
            if(that.last>=3&&that.last<=13){
                className += Math.floor((that.last-3)*100/11)+1; 
            }
            if(that.last>14){
                that.last = -1; 
                $(".stage-label").remove();
            }
            $("div#progress").addClass(className);
            h = $("div#progress").css("height"); 
            //$("div#progress-field").append('<div class = "stage-label" style="top:'+h+'" id = "'+className+'">Label:'+className+' </div>'); 
            $("div#progress-field").append(that.stageLabelTpl({icon:"send", text:className, id:className, top:h}));
            //document.getElementById(className).scrollIntoView(); //too ugly
            $('html, body').animate({
                scrollTop: $("#"+className).offset().top
            }, 800);
            that.lastClassName = className; 
        }); 
    };
};
//orig file: ResultView.js----
var ResultView = function(){
    //this.resultData = {}; 
    this.render = function() {
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
        this.$el.html(this.template({lang:lang, user: user, isLoggedIn: isLoggedIn, header:{main:lang.resultHeader}}));
        $('main', this.$el).html(this.innerTpl({user:user, lang:lang, header:{main:lang.resultHeader}}));
        return this;
    };
    this.renderSideNav = function(){
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
        return this.sideNavTpl({lang:lang, user: user, isLoggedIn: isLoggedIn});
    };
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div class="content-holder"/>');
        //this.$el.on('keyup', '.search-key', this.findByName);
        //this.render();
    };
    this.continueRendering = function(){
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var results = this.resultData || JSON.parse(window.localStorage.getItem("elefindResult")); 
        var that = this; 
        //cl("render results"); 
        //result: [{src, title, author, score, vis, date, ect}]
        $("tbody#result-list").html(""); 
        for(var x in results){
            var entry = results[x]; 
            if(entry.vis == "public"){
                entry.src = "../server/storage/"+"public_photos/thumbnail/"+entry.filename; 
                entry.orig = "../server/storage/"+"public_photos/"+entry.filename; 
            }else{
                entry.src = "../server/storage/"+"users/"+user.email+"/photos/thumbnail/"+entry.filename; 
                entry.orig = "../server/storage/"+"users/"+user.email+"/photos/"+entry.filename; 
            }
            var score = parseFloat(results[x].score);
            results[x].score = score.toFixed(3);
            $("tbody#result-list").append(ResultView.prototype.resultEntryTpl(results[x])); 
        }
        $("tbody#result-list tr").click(function(){
            var img = $(this.children[0].children[0]);
            //var img = $(this).children('img');
            ////cl(img); 
            var tmpl = that.imageViewTpl({
                src: img.attr("data-orig"), 
                author: img.attr("data-author"), 
                title: img.attr("data-caption"), 
                date: img.attr("data-date"), 
                lang:lang //could be a shorthand here... I didn't even know I was using ES6 
            });
            $("#image-view-wrapper").html(tmpl);
            renderImageView();
        });
        $( window ).resize(function() {
          resizeGallery(that); 
        });
    };
    this.initialize();
};
//ResultView.
var renderResults = function(results){
    //cl("render results"); 
    //result: [{src, title, author, score, vis, date, ect}]
    $("tbody#result-list").html(""); 
    //var tpl = Handlebars.compile($("#result-tr").html()); can't compile? why? 
    for(var x in results){
        var entry = results[x]; 
        if(entry.vis == "public"){
            entry.src = "../server/storage/"+"public_photos/"+entry.filename; 
        }
        $("tbody#result-list").append(ResultView.prototype.resultEntryTpl(results[x])); //it seems that I can;t use jquery selectors here... Hmmm, why?
    }
};
//orig file: SearchView.js----
var SearchView = function (service) {
    var findCommonFactor = function(a,b){
      var c=b;
      if(a<b){
        c=a;
        a=b;
        b=c;
      }
      while(a%b!==0){
        c=a%b;
        a=b;
        b=c;
      }
      return c;
    };
    this.sayHello = function(){
        //cl("hello!"); 
    };
    this.render = function() {
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
        var settings = JSON.parse(window.localStorage.getItem("userSettings")); 
        //"centerX":0.5,"centerY":0.5,"searchW":0.2,"searchH":0.2,
        settings.centerX *= 10;
        settings.centerY *= 10;
        settings.searchW *= 10;
        settings.searchH *= 10;
        this.$el.html(this.template({lang:lang, user: user, isLoggedIn: isLoggedIn, header:{main:lang.searchSettingsHeader}}));
        $('main', this.$el).html(this.innerTpl({user:user, lang:lang, settings: settings}));
        return this;
    };
    this.continueRendering = function(){
        //----------------initializes -------------------------
       // $('#search-breadcrumbs.row').pushpin({ top: $("#search-breadcrumbs.row").offset().top}); //so strange
        $('select').material_select();
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });
        //-------------------events-----------------------------------------------------------------------
        var that = this; 
        var settings = JSON.parse(window.localStorage.getItem("userSettings"));
        /*var defaultSettings = {
            //MANAGER_TYPE:"ImprSearch",
            searchMethod:1,
            preprocessing:3,
            maxPatchSize:1250,
            maxAmRate:2,
            maxFolds:2,
            centerX:0.5,
            centerY:0.5,
            searchW:0.2,
            searchH:0.2,
            slidingStep:4
        };*/
        $("#submit-settings-scope").on("click", function(event){
            //read search config from user
            var select=document.getElementById("st-patch-size");
            var index=select.selectedIndex; //序号，取当前选中选项的序号
            settings.maxPatchSize = select.options[index].value;
            settings.centerX = parseInt($("#center-x").val())/10;
            settings.centerY = parseInt($("#center-y").val())/10;
            //settings.maxAmRate = parseInt($("#max-am-rate").val()); //no use
            settings.maxFolds = parseInt($("#max-folds").val());
            settings.searchW = parseInt($("#search-w").val())/10;
            settings.searchH = parseInt($("#search-h").val())/10;
            settings.slidingStep = parseInt($("#sliding-step").val());
            settings.searchAlbums = [];
            $("#st-scope-by-folder option:selected").each(function(){
                settings.searchAlbums.push($(this).val()); //这里得到的就是
            }); 
            settings.startDate = $("#start-date").val();
            settings.endDate = $("#end-date").val();
            //cl(settings);
            that.submitDataForSearching(settings);
        });  
        $(".settings-option").on("click mousePressed", function(event){
            //this != event.target. This is always ".settings-option.row"
            ////cl("clicked" + $(this));
            //if($(this).hasClass("row")){
                event.stopPropagation();
                $(".settings-option").removeClass("active");
                $(this).addClass("active");
            //}
        });  
        $("form #show-advanced-settings").change(function(){
            if (this.checked) {
                // the checkbox is now checked 
                $("#advanced-settings").css("display", "block");
            } else {
                // the checkbox is now no longer checked
                $("#advanced-settings").css("display", "none");
            }
        });
        //------------------------------------------------------------------
    };
    this.isSearching = false;
    this.unfinishedCall = 0;
    this.draftPath="";
    this.relatingFileName = "";
    this.submitDataForSearching = function(settings){
        if(this.isSearching){
                window.alert("Please wait. Current Search unfinished.");
                return;
            }
            this.isSearching = true; 
            window.localStorage.setItem("userSettings", JSON.stringify(settings)); 
            $("#submit-settings-scope").addClass("disabled");
            window.location.hash = "#searchProgress"; 
            //grab user settings as well as th draft
            var searchData = {
                searchConfig: settings, 
                user: JSON.parse(window.localStorage.getItem("elefindUser")), 
                draft: JSON.parse(window.localStorage.getItem("userSketch"))
            };
            var that = this; 
            $.ajax({
                url: '../server/NewSearch.php',  //creat get =xxx.php
                //beforeSend: function (request) //must have ??
                //{
                    //request.setRequestHeader("X-CSRF-TOKEN",$('input[name=_token]').val());
                //},
                type: 'POST',
                data: searchData,
                cache: false,
                dataType: 'text',
                //processData: false,
                //contentType: false,
                success:function(data, textStatus, jqXHR){
                    //cl(data);
                    try{
                        data = JSON.parse(data);
                        if(data.msg==="success"){
                            that.draftPath = data.draftPath;
                            that.relatingFileName = data.relatingFileName; 
                            that.startSearch();
                            return
                        }else{
                            window.alert(data.msg); //TODO language
                        }
                    }catch(e){
                    }                   
                    this.isSearching = false; 
                    window.location.hash = "#searchSettings"; 
                },
                error: function(jqXHR, textStatus, errorThrown){
                    window.alert("Upload Settings failed. Try again");//+lang.uploadErrorMsg
                    //cl("Error: "+ textStatus+"|"+errorThrown);
                    that.isSearching = false; 
                    window.location.hash = "#searchSettings"; 
                },
                complete: function(data){ //No matter error or success. 
                //so what is the data?   
                    //            
                }
            });
    };
    this.lastClassName = ""; 
    this.requestProgress = function(){
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var that = this; 
        $.ajax({
                url: '../server/NewSearch.php',  //creat get =xxx.php
                type: 'POST',
                data: {getProgress: "getProgress", relatingFileName: that.relatingFileName },
                cache: false,
                dataType: 'text',
                //processData: false,
                //contentType: false,
                success:function(data, textStatus, jqXHR){
                    //cl(data);
                    if(data.indexOf("<")==-1 && that.isSearching){
                        data = JSON.parse(data);
                        //expect data = {"status":"Progress","stage":"processing file No.17 out of 21\r\n","processed":"17","total":"21"}
                        //or data = {"status":false,"stage":false}
                        if(!data.status)return; 
                        var h = $("div#progress").css("height"); 
                        $("#"+that.lastClassName).css("top", h); 
                        $("div#progress").removeClass();
                        $(".stage-label").remove();
                        var className = ""; 
                        if(data.status == "Start"){                        
                            className= "thread-start";
                            $("div#progress-field").append(that.stageLabelTpl({icon:lang.startProcessingSketchIcon, text:lang.startProcessingSketch, id: className, top:h}));
                        }else if(data.status == "Progress" && data.stage.indexOf("gotten")!=-1){                   
                            className="typical-gotten";
                            $("div#progress-field").append(that.stageLabelTpl({icon:lang.typicalMapGottenIcon, text:lang.typicalMapGotten, id: className, top:h}));
                        }else if(data.status == "Progress" && (data.stage.indexOf("comparing")!=-1)||(data.stage.indexOf("processing finished")!=-1)){
                            className="start";
                            $("div#progress-field").append(that.stageLabelTpl({icon:lang.startComparingIcon, text:lang.startComparing, id: className, top:h}));
                        }else if(data.status == "Progress" && data.stage.indexOf("No.")!=-1){                       
                            var percent = Math.floor((parseInt(data.processed)/parseInt(data.total))*100); 
                            className="searching-"+percent;
                            //percent = percent.toFixed(3); 
                            //cl(percent);                             
                            $("div#progress-field").append(that.stageLabelTpl({icon:lang.comparingIcon, text:lang.comparing+" "+percent+"%...", id: className, top:h}));
                        }else if(data.status == "Error" || data.status == "Fatal Error"){ 
                            className = "error-tag";
                            $("div#progress-field").append(that.stageLabelTpl({icon:lang.errorComparingIcon, text:data.stage, id: "error-tag", top:h}));      
                        }else{                       
                            className="finish";
                            $("div#progress-field").append(that.stageLabelTpl({icon:lang.finishedComparingIcon, text:lang.finishedComparing, id: className, top:h}));
                        }
                        $("div#progress").addClass(className);
                         //'<div class = "stage-label" style="top:'+h+'" id = "'+className+'">Label:'+className+' </div>'
                        //document.getElementById(className).scrollIntoView(); //too ugly 
                        $('html, body').animate({
                            scrollTop: $("#"+className).offset().top
                        }, 400);
                        that.lastClassName = className; 
                        //$("#progress-wrapper").append("<p>"+data.status+"|"+data.stage+"|"+(parseInt(data.processed)/parseInt(data.total))+"| . yeah</p>"); 
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    //cl("Request Porgress failed");//+lang.uploadErrorMsg
                    //cl("Error: "+ textStatus+"|"+errorThrown);
                },
                complete: function(data){ //No matter error or success. 
                }
        });
/*
["thread-start", "typical-gotten", "start", "searching-", finish]; 
"status":"Start","stage":"Thread start\r\n"}
SearchView.js:148 {"status":"Progress","stage":"Start comparing\r\n"}
SearchView.js:148 {"status":"Progress","stage":"processing file No.3 out of 21\r\n","processed":"3","total":"21"}
SearchView.js:148 {"status":"Progress","stage":"processing file No.5 out of 21\r\n","processed":"5","total":"21"}
..................................
SearchView.js:148 {"status":"Progress","stage":"processing file No.18 out of 21\r\n","processed":"18","total":"21"}
SearchView.js:148 {"status":"Progress","stage":"processing file No.20 out of 21\r\n","processed":"20","total":"21"}
SearchView.js:148 {"status":"Finished","stage":"Comparing finished in 3827 seconds\r\n"}
Start: Thread start
Progress: typical map gotten
Progress: draft processing finished
Progress: Start comparing
Progress: processing file No.1 out of 21
Progress: processing file No.2 out of 21
.......................................
Progress: processing file No.21 out of 21
Finished: Comparing finished in 3827 seconds
*/
    };
    this.startSearch = function(){
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var that = this; //what's this????
        $.ajax({
                url: '../server/NewSearch.php',  //creat get =xxx.php
                type: 'POST',
                data: {startSearch: "start", relatingFileName: that.relatingFileName },
                cache: false,
                dataType: 'text',
                //processData: false,
                //contentType: false,
                success:function(data, textStatus, jqXHR){
                    ////cl(data);
                },
                error: function(jqXHR, textStatus, errorThrown){
                    //cl("Request Porgress failed");//+lang.uploadErrorMsg
                    //cl("Error: "+ textStatus+"|"+errorThrown);
                },
                complete: function(data){ //No matter error or success. AND THIS DATA　IS NOT THAT DATA IN SUCCESS...
                    clearInterval(that.unfinishedCall);
                    that.isSearching = false; 
                    var h = $("div#progress").css("height"); 
                    try{
                        ResultView.prototype.resultData = JSON.parse(data.responseText);
                        window.localStorage.setItem("elefindResult", data.responseText);
                        $("div#progress").removeClass();
                        $("div#progress").addClass("finish");
                        //$("div#progress-field").append('<div class = "stage-label" style="top:'+h+'" id = "'+className+'">Label: Finished! </div>'); 
                        $(".stage-label").remove();
                        $("div#progress-field").append(that.stageLabelTpl({icon:lang.finishedComparingIcon, text:lang.finishedComparing, id: "finish-tag", top:h}));
                        $("#to-result").css("display", "inline-block"); 
                        $("#progress-field").addClass("stop-animation"); 
                        //cl("SEARCH FINISHED"); 
                    }catch(error){
                        $("div#progress").removeClass();
                        $("div#progress").addClass("finish");
                        $(".stage-label:not(#error-tag)").remove();
                        if(data.responseText.indexOf("Empty Draft")!==-1){
                            $("div#progress-field").append(that.stageLabelTpl({icon:lang.errorComparingIcon, text:lang.emptyDraftError, id: "finish-tag", top:h})); 
                        }else if(data.responseText.indexOf("Illegal args")!==-1){
                            $("div#progress-field").append(that.stageLabelTpl({icon:lang.errorComparingIcon, text:lang.illegalArgsError, id: "finish-tag", top:h})); 
                        }else{
                            $("div#progress-field").append(that.stageLabelTpl({icon:lang.errorComparingIcon, text:lang.comparingError, id: "finish-tag", top:h})); 
                        }
                        $("#progress-field").addClass("stop-animation"); 
                        $("#to-gallery").css("display", "inline-block"); 
                        //cl("SEARCH FINISHED WITH ERROR"); 
                        return; 
                    }                    
                    //window.location.hash = "#searchResult"; 
                    /*
                    //well. the document is not loaded yet. so ...
                    $(document).one('ready',function(){
                        // Perform something here...
                        renderResults(JSON.parse(data.responseText)); //ResultView.
                    });*/ 
                }
        });
        this.unfinishedCall = setInterval(function(){that.requestProgress();}, 500);
    };
    this.renderSideNav = function(){
        var user = service.currentUser;
        var lang = new Lang(user.language);
        var isLoggedIn = user.name !== "";
        return this.sideNavTpl({lang:lang, user: user, isLoggedIn: isLoggedIn});
    };
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div class="content-holder"/>');
        //this.$el.on('keyup', '.search-key', this.findByName);
        //this.render();
    };
    this.initialize();
};
//orig file: app.js----
if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Elefind", // title
                    'OK'        // buttonName
                );
            };
    }
    /* ---------------------------------- Local Variables ---------------------------------- */
    //var homeTpl = Handlebars.compile($("#home-tpl").html());
    //var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());
    var actionQueue = new ActionQueue();
    var service = new UserService();
    //var user = service.getCurrentUser();
    //var lang = new Lang(user.language);
    HomeView.prototype.template = Handlebars.compile($("#home-nav-footer").html());
    HomeView.prototype.sideNavTpl = Handlebars.compile($("#side-nav").html());
    AcSettingsView.prototype.template=Handlebars.compile($("#account-settings").html());
    DrawView.prototype.template = Handlebars.compile($("#home-nav-footer").html());
    DrawView.prototype.innerTpl = Handlebars.compile($("#drawing-page").html());
    DrawView.prototype.sideNavTpl = Handlebars.compile($("#side-nav").html());
    SearchView.prototype.template = Handlebars.compile($("#home-nav-footer").html());
    SearchView.prototype.innerTpl = Handlebars.compile($("#search-page").html());
    SearchView.prototype.sideNavTpl = Handlebars.compile($("#side-nav").html());
    SearchView.prototype.stageLabelTpl = Handlebars.compile($("#stage-label").html());
    ProgressView.prototype.template = Handlebars.compile($("#home-nav-footer").html());
    ProgressView.prototype.innerTpl = Handlebars.compile($("#progress-page").html());
    ProgressView.prototype.sideNavTpl = Handlebars.compile($("#side-nav").html());
    ProgressView.prototype.stageLabelTpl = Handlebars.compile($("#stage-label").html());
    ResultView.prototype.template = Handlebars.compile($("#home-nav-footer").html());
    ResultView.prototype.innerTpl = Handlebars.compile($("#result-page").html());
    ResultView.prototype.sideNavTpl = Handlebars.compile($("#side-nav").html());
    ResultView.prototype.resultEntryTpl = Handlebars.compile($("#result-tr").html());
    ResultView.prototype.imageViewTpl = Handlebars.compile($("#image-view").html());
    GridView.prototype.template = Handlebars.compile($("#home-nav-footer").html());
    GridView.prototype.innerTpl = Handlebars.compile($("#grid-gallery").html());
    GridView.prototype.textTileTpl = Handlebars.compile($("#text-tile").html());
    GridView.prototype.imageTileTpl = Handlebars.compile($("#image-tile").html());
    GridView.prototype.uploadTileTpl = Handlebars.compile($("#upload-tile").html());
    GridView.prototype.sideNavTpl = Handlebars.compile($("#side-nav").html());
    GridView.prototype.imageViewTpl = Handlebars.compile($("#image-view").html());
    var dropzoneTmpl = document.getElementById('dz-preview-template').innerHTML; 
    //var slider = new PageSlider($('body'));
    service.initialize().done(function () {
        //cl("Service initialized");
        router.addRoute('', function() {
            //$('body').html(new HomeView(service).render().$el);
            var view = new HomeView(service);
            renderViewWithSideNav(view);
            view.continueRendering();
        });
        router.addRoute('accountSettings', function(id) {
          $('.side-nav').remove();
          $('#sidenav-overlay').remove();
          //slider.slidePageFrom(new AcSettingsView(service).render().$el,"right");
          $('body').html(new AcSettingsView(service).render().$el);
          $("div.drag-target").remove();
          //Materialize.updateTextFields();
        });
        router.addRoute('drawingBoard', function() {
            //$('body').html(new HomeView(service).render().$el);
            var view = new DrawView(service);
            renderViewWithSideNav(view);
            view.continueRendering();
            //$('#search-breadcrumbs.row').pushpin({ top: $("#search-breadcrumbs.row").offset().top, offset:"80px" });
            $("a[href='#newSearch']").addClass("active");
            $("a[href='#newSearch']").click(function(e){
              e.stopPropagation();
              e.preventDefault();
            });
        });
        router.addRoute('searchSettings', function() {
            //$('body').html(new HomeView(service).render().$el);
            var view = new SearchView(service);
            renderViewWithSideNav(view);
            view.continueRendering();
            //$('#search-breadcrumbs.row').pushpin({ top: $("#search-breadcrumbs.row").offset().top, offset:"80px" });
            $("a[href='#newSearch']").addClass("active");
            $("a[href='#newSearch']").click(function(e){
              e.stopPropagation();
              e.preventDefault();
            });
        });
        router.addRoute('searchProgress', function() {
            //$('body').html(new HomeView(service).render().$el);
            var view = new ProgressView(service);
            renderViewWithSideNav(view);
            view.continueRendering();
            //$('#search-breadcrumbs.row').pushpin({ top: $("#search-breadcrumbs.row").offset().top, offset:"80px" });
            $("a[href='#newSearch']").addClass("active");
            $("a[href='#newSearch']").click(function(e){
              e.stopPropagation();
              e.preventDefault();
            });
        });
        router.addRoute('searchResult', function() {
            //$('body').html(new HomeView(service).render().$el);
            var view = new ResultView(service);
            renderViewWithSideNav(view);
            view.continueRendering();
            //$('#search-breadcrumbs.row').pushpin({ top: $("#search-breadcrumbs.row").offset().top, offset:"80px" });
            $("a[href='#newSearch']").addClass("active");
            $("a[href='#newSearch']").click(function(e){
              e.stopPropagation();
              e.preventDefault();
            });
        });
        router.addRoute('publicGallery', function() {
            //$('body').html(new HomeView(service).render().$el);
            var view = new GridView(service, "publicGallery");
            renderViewWithSideNav(view);
            view.continueRendering();           
        });
        router.addRoute('publicAlbum', function() {
            //$('body').html(new HomeView(service).render().$el);
            var view = new GridView(service, "publicAlbum");
            renderViewWithSideNav(view);
            view.continueRendering();           
        });
        router.addRoute('myGallery', function() {
            //$('body').html(new HomeView(service).render().$el);
            var view = new GridView(service, "myGallery");
            renderViewWithSideNav(view);
            view.continueRendering();           
        });
        router.addRoute('myAlbum', function() {
            //$('body').html(new HomeView(service).render().$el);
            var view = new GridView(service, "myAlbum");
            renderViewWithSideNav(view);
            view.continueRendering();           
        });
        router.start();
    });
    /* --------------------------------- Event Registration -------------------------------- */
    //http://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements
    /*$('body').on("click",function(){
      //cl(event.target);
      if(event.target==document.getElementById('sign-in')){
        signIn();
      } else if(event.target==document.getElementById('sign-out')){
        signOut();
      }else if($(event.target).hasClass('go-back')){
        window.history.back();
      }else if($(event.target).hasClass("sync")){
        actionQueue.process();
      }
    });*/
    $("body").on("click", "#sign-in", function(){signIn();});//;
    $("body").on("click", "#register", function(){register();});
    $("body").on("click", "#sign-out",function(){signOut();});
    $("body").on("click", ".sync", function(){actionQueue.process();});
    $("body").on("click", ".go-back", function(){
      window.history.back();
    });
    $("body").on("click", ".switch-lang", function(){
        var user = service.currentUser;
        if(user == undefined || user.language == undefined) return; //Shouldn't be undefined
        if(user.language === "en") {
            user.language = "zh";
        }else{
            user.language = "en";
        }
        //var lang = new Lang(user.language);
        service.updateUserInfo();
        window.location.reload(); 
       // Materialize.toast(lang.setSuccessMsg, 4000);
    });
    window.addEventListener("online", function(){
      //cl("Get online and process");
      actionQueue.process();
    });//, false
    window.addEventListener('offline', function(){
    actionQueue.saveActions();}); //unload??
    window.addEventListener('onBeforeUnload', function(){
    actionQueue.saveActions();});
    /* ---------------------------------- Local Functions ---------------------------------- */
    function renderViewWithSideNav(view){
        if($('.side-nav').length){
          //$('.button-collapse').sideNav('hide');//Triggers "click" ? Caution: infinite loop!
          $('.side-nav').remove();
          $('#sidenav-overlay').remove();
        }
        //slider.slidePageFrom(view.render().$el,"left");
        $('body').html(view.render().$el);
        //cl(service.currentUser);
        $('header').prepend(view.renderSideNav());
        /*
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });
        */
        $("div.drag-target").remove();
        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'left', // Choose the horizontal origin
            //closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
          }
        );
        $('.modal-trigger').leanModal();
    }
    var signOut = function(){
      service.logOut();
      //cl(service.currentUser);
      renderViewWithSideNav(new HomeView(service));
    };
    var signIn = function(){
      service.authenticate($("#login-email").val().trim(),$("#login-password").val().trim()); 
    };
    var register = function(){
        //cl("registering!");
        var error = false; 
      if($("#register-username").val().trim()!==""){
            //user.name=$("#username").val().trim();
            if($("#username").hasClass("invalid")){
                $("#username").removeClass("invalid");
            }
            $("#username").addClass("valid");
        }else{
            $("#username").addClass("invalid");
            error=true;
        }   
        //if($("#old-password").val().trim() == user.password){
        if($("#register-password").val().trim()!==""){
            if($("#register-password").val().trim() == $("#register-password-2").val().trim()){
                //user.password = $("#register-password").val().trim();
                if($("#register-password").hasClass("invalid")){
                    $("#register-password").removeClass("invalid");
                }
                if($("#register-password-2").hasClass("invalid")){
                    $("#register-password-2").removeClass("invalid");
                }
                $("#register-password").addClass("valid");
                $("#register-password-2").addClass("valid");
            }else{
                error=true;
                $("#register-password").addClass("invalid");
                $("#register-password-2").addClass("invalid");
            }
        }
        if(!error){
            service.register($("#register-email").val().trim(), $("#register-username").val().trim(), $("#register-password").val().trim(), $("input[name='lang']:checked").val()); 
        }
    };
