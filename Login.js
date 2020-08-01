$("#username_err").hide();
$("#password_err").hide();

var username_err = false;
var password_err = false;

function check_username() {
    var pattern = /^[a-zA-Z]*$/;
    var uname = $("#username").val();
    if (pattern.test(uname) && uname != '') {
        $("#username_err").hide();
    } else {
        $("#username_err").html("نام کاربری خود را وارد کنید.");
        $("#username_err").show();
        username_err = true;
    }
}
function check_password() {
    var password_length = $("#password").val().length;
    if (password_length < 6) {
        $("#password_err").html("رمزعبور خود را وارد کنید.");
        $("#password_err").show();
        password_err = true;
    } else {
        $("#password_err").hide();
    }

}
$("#vLogin").submit(function() {
    username_err = false;
    password_err = false;

    check_username();
    check_password();
    
    if(username_err === false && password_err === false) {
        return true;
    } else {
        return false;
    }
})