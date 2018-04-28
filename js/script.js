YMaps.jQuery(function(){
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
    map.setCenter(new YMaps.GeoPoint(30.319794,59.939122), 17);
    map.addControl(new YMaps.Zoom());
    map.addControl(new YMaps.ScaleLine());
    map.enableScrollZoom();
    
    var s = new YMaps.Style();
    s.iconStyle = new YMaps.IconStyle();
    s.iconStyle.href = "../images/map-icon.png";
    s.iconStyle.size = new YMaps.Point(231,190);
    s.iconStyle.offset = new YMaps.Point(-50,-185);
    var placemark = new YMaps.Placemark(new YMaps.GeoPoint( 30.323055,59.938631),{style: s,hasBalloon:false});
//    placemark.name = "NЁRDS Studio";
    map.addOverlay(placemark);
})

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

