$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#username').val() === '2434048'; // User validate
var ValidPassword = $('#password').val() === '1'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            window.location = "https://loginexample.github.io/double.html";  // go to home.html
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});
