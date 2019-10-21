
//for fn section1
function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// var slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");                 //(mySlides) this is of lightbox
    var dots = document.getElementsByClassName("demo");                   //(demo) below the lightbox
    var captionText = document.getElementById("caption"); 
    if (n > slides.length) {slideIndex = 1}                           //slideIndex more than all slides then 1st slide
    if (n < 1) {slideIndex = slides.length}                             //slideIndex 0 then last slide

    //for loop  display none 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    //for loop active none 
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";                                        //display the slide
    dots[slideIndex-1].className += " active";                                      //remains active
    captionText.innerHTML = dots[slideIndex-1].alt;                                          //displaying the  alt text for the area
}

//new fn section2
function openModal2() {
    document.getElementById('myModal2').style.display = "block";
}

function closeModal2() {
    document.getElementById('myModal2').style.display = "none";
}

// var slideIndex2 = 1;
//     showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo2");
    var captionText = document.getElementById("caption2");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " active";
    captionText.innerHTML = dots[slideIndex2-1].alt;
}

//new fn section3
function openModal3() {
    document.getElementById('myModal3').style.display = "block";
}

function closeModal3() {
    document.getElementById('myModal3').style.display = "none";
}

// var slideIndex3 = 1;
// showSlides3(slideIndex3);

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("demo3");
    var captionText = document.getElementById("caption3");
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";
    dots[slideIndex3-1].className += " active";
    captionText.innerHTML = dots[slideIndex3-1].alt;
}



//for fn section4
function openModal4() {
    document.getElementById('myModal4').style.display = "block";
}

function closeModal4() {
    document.getElementById('myModal4').style.display = "none";
}

// var slideIndex4 = 1;
//     showSlides4(slideIndex4);

function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides4");
    var dots = document.getElementsByClassName("demo4");
    var captionText = document.getElementById("caption4");
    if (n > slides.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex4-1].style.display = "block";
    dots[slideIndex4-1].className += " active";
    captionText.innerHTML = dots[slideIndex4-1].alt;
}