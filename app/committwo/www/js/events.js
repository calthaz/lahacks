$(function(){
    var venueTmpl =  Handlebars.compile($("#venue-tmpl").html());
    var validate = function(lat, lon, cat){
        window.alert("My geolocation: "+lat+", "+lon);
        $.ajax({
            url: '../../../server/dummy.cgi',  
            type: 'POST',
            data: {lon:lon, lat:lat, cat:cat},
            cache: false,
            dataType: 'text',
            success:function(data, textStatus, jqXHR){
                //cl(data);
                window.alert(data);
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

    $("a.accept-location").on("click", function(){
        
        $(".card .venueBlock").remove();
        $.ajax({
            url: '../../../server/foursquare.cgi',  
            type: 'POST',
            data: {points:"approved"},
            cache: false,
            dataType: 'text',
            success:function(data, textStatus, jqXHR){
                //cl(data);
                window.alert(data);
                data=JSON.parse(data);
                if(data.msg =="success"){                                       
                    return true;
                }else if(data.msg == "failed"){
                    window.alert("Checkin failed.");
                    $("#checkin-submit").css("display", "initial");
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
                $("#checkin-submit").css("display", "initial");
            }
        });
    });
    $("a.deny-location").on("click", function(){
        $("#checkin-submit").css("display", "initial");
        $(".card .venueBlock").remove();
    });
});