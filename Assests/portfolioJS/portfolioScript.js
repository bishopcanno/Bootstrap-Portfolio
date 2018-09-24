// Global JS

// parallax functionality
$(document).ready(function(){
    $('.parallax').parallax();
});
// Text Typing function
function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');
	
	var i = 0;
	var timer = setInterval(function() {
        if (i < text.length) {
            $(element).append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// About Page JS---------------------------------------------------------------------------------------------------------About Page JS

// funtion for determing if the page should load in mobile or desktop
function windowSizing(width){
    if (width <= 800 ){
        $("#about-desktop-container").hide();
    } else{
        $("#about-mobile-container").hide();
    }
}

// Returns width of browser viewport, will need for mobile responsiveness
var winWidth = $( window ).width();

// implementation of windowSizing Function
windowSizing(winWidth);

// arrays for parallax images
var profileImgArray = [];
var activityImgArray = [];

// randomized images pulled from the arrays to push to the parallax's
var profileRandomImg;
var activityRandomImg;

// pushing the random images up to the parallax's
$("#parallaxOne").attr("src", profileRandomImg);
$("#parallaxTwo").attr("src", activityRandomImg);


// Portfolio Page JS------------------------------------------------------------------------------------------------------Portfolio Page JS

// text typing implementation Portfolio Page
$( document ).ready(function() {
  var delay = 200;
  var speed = 50;
  typeEffect($('.h1-type'), delay);
  setTimeout(function(){
    $('.about-pear').css('display', 'inline-block');
    typeEffect($('.about-pear'), speed);
  }, delay);
});

// Contact Page JS--------------------------------------------------------------------------------------------------------Contact Page JS