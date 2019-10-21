$(document).ready(function () {
    if(localStorage.getItem('login')){
       $('#login').text('Hello '+ localStorage.getItem('login') + '!');
       $('#sign-up').attr('href','#').text('Sign Out').click(function(){
           localStorage.setItem('login','');
           location.reload();
       });
    }

   $('#contact-send').submit(function (e) { 
    // $('.alert strong').text('Successfully sent!');
    $('.alert').css('display', 'block');
   });

   $('#close-alert').click(function (e) { 
    $('.alert').hide();
    });

});