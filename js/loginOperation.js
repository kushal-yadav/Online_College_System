$(document).ready(function () {
    $('#register').click(function(){
        window.location="./register.html";
    });
    $('#close-alert').click(function (e) { 
        $('.alert').hide();
     });
});


var authenticateUser = function(){
    var userName = $('#username').val();
    if( localStorage.getItem(userName)){
      
        var user = JSON.parse(localStorage.getItem(userName));
        if(user.password === $('#password').val()){
           
            localStorage.setItem('login', userName);
            return true;
        }
        else{
            
            $('.alert strong').text('Invalid username or password!');
            $('.alert').css('display', 'block');
            return false;
        }
    }
    else{
        $('.alert strong').text('Please check the username!');
        $('.alert').css('display', 'block');
     
        return false;
    }
}


var checkUser = function(){
    if(localStorage.getItem('login')){
        window.location = 'BootStrapHome.html';
    }
}