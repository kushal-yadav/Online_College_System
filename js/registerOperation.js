
$(document).ready(function () {
    $('#close-alert').click(function (e) { 
       $('.alert').hide();
    });
    $('#re-enter').keyup(function (e) { 
        var password = $('#password').val();
        var retypePassword = $('#re-enter').val();
        if(password===retypePassword){
           console.log('same');
            $('#check-icon').css('color', 'rgba(134, 203, 146, 1)');
        }
        else{
            console.log('not same');
            $('#check-icon').css('color', 'red');
        }
    });
});


function validate() {
    var pass=document.getElementById("password").value;
    var pass2=document.getElementById("re-enter");

    if (pass===pass2.value) {
        
        $('#outerBall').addClass('ball');
        $('#innerBall').addClass('ball1');
        $('.form-container').css('opacity', '0.5');
        setTimeout(endAnimation,2500);
        return false;
    }
    else{
        
        return false;
    }
}

function endAnimation(){
    console.log('called');
    $('#outerBall').removeClass('ball');
    $('#innerBall').removeClass('ball1');
    $('.form-container').css('opacity', '1');
    if(register()){
        $('#reset').trigger('click');
        $('.alert strong').text('Registered Successfully!');
        $('.alert').css('display', 'block');
    }else{
        $('.alert strong').text('Please retry with different username');
        $('.alert').css('display', 'block');
        $('#reset').trigger('click');
    }
}

function register() {
    if (window.localStorage && !localStorage.getItem(document.getElementById('username').value)) {
        var name=document.getElementById("name").value;
        var mob =document.getElementById("mobile").value;
        var email=document.getElementById("email").value;
        var pass=document.getElementById("password").value;
        var securityQuestion = $('#security-question').val();
        var answer = $('#answer').val();
        var userID = localStorage.length + 1;
        var details={
            userID: userID,
            name: name,
            mobile: mob,
            email: email,
            password: pass,
            securityQuestion : securityQuestion,
            answerSecure : answer
        }
        localStorage.setItem(document.getElementById('username').value,JSON.stringify(details)); 
       
       return true;
    }
    else{
       
        return false;
    }
}

