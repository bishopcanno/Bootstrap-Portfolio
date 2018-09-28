// -----------------------------------------------------------------------------PORTFOLIO PAGE JS-----------------------------------------------------------------------------------
console.log("js file is linked");

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

// text typing implementation Portfolio Page
$( document ).ready(function() {
  var speed = 200;
  typeEffect($('.h1-type'), speed);
});

// carousel functionality (Swiper)
$(document).ready(function () {
//initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
});