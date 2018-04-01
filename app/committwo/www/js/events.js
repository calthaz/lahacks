$(function(){
    var validate = function(lat, lon){
        window.alert("My geolocation: "+lat+", "+lon);
    }
    $("#checkin-submit").on("click", function(){
        var cat = $('#demo-cat-radio input[name=cat]:checked').val();
        if(cat==undefined){
            window.alert('Please select your goal.\n');
            return;
        }

        var Latitude = undefined;
        var Longitude = undefined;
        
        // Success callback for get geo coordinates
        var onSuccess = function (position) {
            Latitude = position.coords.latitude;
            Longitude = position.coords.longitude;
            validate(Latitude, Longitude);
        }

        function onError(error) {
            window.alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        }

        // Get geo coordinates
        navigator.geolocation.getCurrentPosition
            (onSuccess, onError, { enableHighAccuracy: true });

    });
});