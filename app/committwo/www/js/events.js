$(function(){
    var venueTmpl =  Handlebars.compile($("#venue-tmpl").html());
    var currentScoreFile = '';
    var validate = function(lat, lon, cat){
        console.log("My geolocation: "+lat+", "+lon);
        /*$.post('../../../server/foursquare2.cgi', {lon:lon, lat:lat, cat:cat}).done(function(data){
            console.log(data);
                try{
                    data=JSON.parse(data);
                    if(data.msg =="success"){   
                        //display one venue 
                        $("#venue-holder").append(mainSectionTmpl(data.venue));                                 
                        return true;
                    }else if(data.msg == "failed"){
                        window.alert("Checkin failed.");
                        $("#checkin-submit").css("display", "initial");
                        return false;
                    }else{
                        window.alert("Error: "+data.msg);
                        $("#checkin-submit").css("display", "initial");
                    }
                }catch(e){
                    console.log(data);
                }   
            });
        */
        $.ajax({
            url: 'http://ec2-34-208-42-160.us-west-2.compute.amazonaws.com/committwo/server/foursquare2.cgi',//../../../server/foursquare2.cgi',  
            type: 'POST',
            data: {lon:lon, lat:lat, cat:cat},
            crossDomain: true,
            cache: false,
            //dataType: 'json',
            success:function(data, textStatus, jqXHR){
                //cl(data);
                console.log(data);
                try{
                    data=JSON.parse(data);
                    if(data.msg =="success"){   
                        //display one venue 
                        var venue = {};
                        venue.name = data.venue.name;
                        venue.category = data.venue.categories[0].name;
                        venue.distance = data.venue.location.distance;
                        venue.address = ""; 
                        for (var i = 0; i < data.venue.location.formattedAddress.length; i++) {
                            venue.address += data.venue.location.formattedAddress[i]+", "
                        }
                        venue.address = venue.address.substring(0, venue.address.length-2);
                        $("#venue-holder").append(venueTmpl(venue));   
                        currentScoreFile = data.scorefile;                              
                        return true;
                    }else if(data.msg == "failed"){
                        window.alert("Checkin failed.");
                        $("#checkin-submit").css("display", "initial");
                        return false;
                    }else{
                        window.alert("Error: "+data.msg);
                        $("#checkin-submit").css("display", "initial");
                    }
                }catch(e){
                    window.alert(data);
                    $("#checkin-submit").css("display", "initial");
                }   
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log('ERRORS:' + textStatus +"errorThrown"+errorThrown);
                console.log("jqXHR"+jqXHR);
                $("#checkin-submit").css("display", "initial");
                return false;
            },
            complete: function(data){ //No matter error or success.
            }
        });
        
    }

    $("#checkin-submit").on("click", function(){
       
        var cat = $('#demo-cat-radio input[name=cat]:checked').val();
        if(cat==undefined){
            window.alert('Please select your goal.\n');
            return;
        }
        $("#checkin-submit").css("display", "none");
        var Latitude = undefined;
        var Longitude = undefined;
        // Success callback for get geo coordinates
        var onSuccess = function (position) {
            Latitude = position.coords.latitude;
            Longitude = position.coords.longitude;
            validate(Latitude, Longitude, cat);
        }
        function onError(error) {
            window.alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
            $("#checkin-submit").css("display", "initial");
        }
        // Get geo coordinates
        navigator.geolocation.getCurrentPosition
            (onSuccess, onError, { enableHighAccuracy: true });
    });

    $("body").on("click", "a.accept-location", function(){
        
        $(".card.venueBlock").remove();
        $.ajax({
            url: 'http://ec2-34-208-42-160.us-west-2.compute.amazonaws.com/committwo/server/addpoints.cgi', //'../../../server/addpoints.cgi',  
            type: 'POST',
            data: {scorefile:currentScoreFile},
            cache: false,
            dataType: 'text',
            success:function(data, textStatus, jqXHR){
                //cl(data);
                //window.alert(data);
                try{
                    data=JSON.parse(data);
                    if(data.msg =="success"){    
                        $("#my-points").html(data.score);                                   
                        return true;
                    }else if(data.msg == "failed"){
                        window.alert("Checkin failed.");
                        //$("#checkin-submit").css("display", "initial");
                        return false;
                    }else{
                        window.alert("Error: "+data.msg);
                    }
                }catch(e){
                    window.alert(data);                   
                }
                
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log('ERRORS:' + textStatus +"errorThrown"+errorThrown);
                console.log("jqXHR"+jqXHR);
                return false;
            },
            complete: function(data){ //No matter error or success.
                $("#checkin-submit").css("display", "initial");
            }
        });
    });
    $("body").on("click", "a.deny-location", function(){
        $("#checkin-submit").css("display", "initial");
        window.alert("Oops. Try to move closer to your goal?");
        $(".card.venueBlock").remove();
    });
});