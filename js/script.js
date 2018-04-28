

var slideIndex = 1;
var slides = document.getElementsByClassName("index-slider-slide");
var dots = document.getElementsByClassName("dot");
showSlides(slideIndex);
var timerId2=setTimeout(changeOpacity,3500,slideIndex);
var timerId =setTimeout(showSlidesAuto,4000);
var timerId3;
function currentSlide(n) {
    clearTimeout(timerId);
    clearTimeout(timerId2);
    clearTimeout(timerId3);
    showSlides(slideIndex = n);
    timerId = setTimeout(showSlidesAuto,5000);
}

function showSlides(n) {
    var i;
    
    if( n>slides.length) {slideIndex=1}
    if(n<1) {slideIndex=slides.length}
    for( i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for( i=0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" slider-opacity","");
    }
    for( i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex-1].style.display = "block";
    timerId3 = setTimeout(addOpacity,10,slideIndex);
    dots[slideIndex-1].className +=" dot-active";
    timerId2 = setTimeout(changeOpacity,4500,slideIndex);
}

function showSlidesAuto() {
    slideIndex++;
    var n=slideIndex;
    var i;
    if( n>slides.length) {slideIndex=1}
    if(n<1) {slideIndex=slides.length}
    for( i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for( i=0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" slider-opacity","");
    }
    for( i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex-1].style.display = "block";
    timerId3 = setTimeout(addOpacity,10,slideIndex);
    dots[slideIndex-1].className +=" dot-active";
    timerId2 = setTimeout(changeOpacity,3500,slideIndex);
    timerId = setTimeout(showSlidesAuto, 4000);
    
}

function changeOpacity(n) {
    slides[n-1].className = slides[n-1].className.replace(" slider-opacity","");
}

function addOpacity(n) {
    slides[n-1].className +=" slider-opacity";
}

function closeOverlay() {
    var temp = document.getElementsByClassName('write-us-block');
    temp[0].style.display = "none";
}

function showOverlay() {
    var temp = document.getElementsByClassName('write-us-block');
    temp[0].style.display = "block";
}

