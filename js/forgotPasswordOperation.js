
$(document).ready(function () {
    $('#retype-password').keyup(function (e) { 
        var newPassword = $('#new-password').val();
        var retypePassword = $('#retype-password').val();
        if(newPassword===retypePassword){
           
            $('#check-icon').css('color', 'rgba(134, 203, 146, 1)');
        }
        else{
            
            $('#check-icon').css('color', 'red');
        }
    });
    $('#close-alert').click(function (e) { 
        $('.alert').hide();
     });
});


var flag = false;

var checkSecurityAnswer = function(){
    var inputQuestion = $('#security-question').val();
    var inputAnswer = $('#answer').val();

    var newPassword = $('#new-password').val();
    var retypePassword = $('#retype-password').val();
    console.log('clicked');
    if(newPassword === retypePassword){
        $('#outerBall').addClass('ball');
        $('#innerBall').addClass('ball1');
        $('.form-container').css('opacity', '0.5');
        setTimeout(endAnimation,2500);
        console.log('equal');
        if(localStorage.getItem($('#username').val())){
            console.log('user found');
            var user = JSON.parse(localStorage.getItem($('#username').val())) ;

            user.password = inputQuestion === user.securityQuestion && inputAnswer === user.answerSecure ? 
            newPassword : false

            if(user.password){
                localStorage.setItem($('#username').val(),JSON.stringify(user));
                flag=true;
            }
            else{
                console.log('Invalid question or answer');
                flag = false;
            }
        }
        else{
            flag = 'wrong user';
        }
    }
    else{
        console.log('mismatch');
        
    }
//change the return type later
    return false;
}

function endAnimation(){
    console.log('called');
    $('#outerBall').removeClass('ball');
    $('#innerBall').removeClass('ball1');
    $('.form-container').css('opacity', '1');
    if(flag === true){
       
        $('.alert strong').text('Password updated successfully!');
        $('.alert').css('display', 'block');
    }
    else if(typeof(flag) !== 'string'){
        $('.alert strong').text('Invalid question or answer');
        $('.alert').css('display', 'block');
        
    }
    else{
        $('.alert strong').text('Please check the username');
        $('.alert').css('display', 'block');
    }
}
