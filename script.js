$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#username').val() === 'invitado'; // User validate
var ValidPassword = $('#password').val() === 'hgm2015'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            window.location = "http://arkev.com"; // go to home.html
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});