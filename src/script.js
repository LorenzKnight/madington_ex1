var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2500);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var slides2 = document.querySelectorAll('#slides2 .slide2');
var currentSlide2 = 0;
var slideInterval2 = setInterval(nextSlide2,2500);

function nextSlide2(){
    slides2[currentSlide2].className = 'slide2';
    currentSlide2 = (currentSlide2+1)%slides2.length;
    slides2[currentSlide2].className = 'slide2 showing2';
}

var slides3 = document.querySelectorAll('#slides3 .slide3');
var currentSlide3 = 0;
var slideInterval3 = setInterval(nextSlide3,2500);

function nextSlide3(){
    slides3[currentSlide3].className = 'slide3';
    currentSlide3 = (currentSlide3+1)%slides3.length;
    slides3[currentSlide3].className = 'slide3 showing3';
}