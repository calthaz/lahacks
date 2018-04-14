var GoalService = function(){
	this.initialize = function(){
		if(hasConnection()){
			var that = this; 
			$.ajax({
	            url: '../../../server/cat.cgi',  
	            type: 'POST',
	            data: {id:false},
	            cache: false,
	            dataType: 'text',
	            success:function(data, textStatus, jqXHR){
	            	//cl(data);
	            	data=JSON.parse(data);
	            	if(data.msg =="success"){            		
	            		window.localStorage.setItem("committwoCat", JSON.stringify(data));
	            		that.categories=data;       
	            		return true;
	            	}else if(data.msg == "denied"){
	            		window.alert("Can't update category list.");
	            		return false;
	            	}else{
	            		window.alert("Error: "+data.msg);
	            	}
	            },
	            error: function(jqXHR, textStatus, errorThrown){
	                console.log('ERRORS:' + textStatus +"errorThrown"+errorThrown);
	                console.log("jqXHR"+jqXHR);
	                return false;
	            },
	            complete: function(data){ //No matter error or success.
	            }
	        });
	        $.ajax({
	            url: '../../../server/userManager.php',  
	            type: 'POST',
	            data: userService.currentUser,
	            cache: false,
	            dataType: 'text',
	            success:function(data, textStatus, jqXHR){
	            	//cl(data);
	            	data=JSON.parse(data);
	            	if(data.msg =="success"){            		
	            		window.localStorage.setItem("committwoCat", JSON.stringify(data));
	            		that.categories=data;       
	            		return true;
	            	}else if(data.msg == "denied"){
	            		window.alert("Can't update category list.");
	            		return false;
	            	}else{
	            		window.alert("Error: "+data.msg);
	            	}
	            },
	            error: function(jqXHR, textStatus, errorThrown){
	                console.log('ERRORS:' + textStatus +"errorThrown"+errorThrown);
	                console.log("jqXHR"+jqXHR);
	                return false;
	            },
	            complete: function(data){ //No matter error or success.
	            }
	        });
			
		}else{
			if(window.localStorage.getItem("committwoCat")){
				this.categories=JSON.parse(window.localStorage.getItem("committwoCat"));
			}else{
				window.alert("Please connect to the internet to get the list of categories.")
			}
		}


	};

	//create
	//display

}


