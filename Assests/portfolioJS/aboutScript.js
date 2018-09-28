// ---------------------------------------------------------------------------ABOUT PAGE JS-----------------------------------------------------------------------
console.log("js file is linked");

// Returns width of viewport, will need for mobile responsiveness
var winWidth = $( window ).width();

// funtion for determing if the page should load in mobile or desktop
function windowSizing(width){
    if (width <= 900 ){
         // hides the desktop header and the parallaxs because the screen is too small to view the full site
        $("#desktop-header").hide();
        $(".parallax-container").hide();
    } else{
        // string array that is the relative path for profile images that will be pushed to the first parallax
        var profileImgArray = ['./Assests/Images/alpineLake.jpg', './Assests/Images/coolDude.jpg', './Assests/Images/ericBandit.jpg', './Assests/Images/greatDay.jpg', 
            './Assests/Images/jacksonLove.jpg', './Assests/Images/jamesEric.jpg', './Assests/Images/katieEricsBday.jpg', './Assests/Images/liamKayden.jpg', 
            './Assests/Images/regulatorJohnson.jpg'];
        
        // string array that is the relative path for activity images that will be pushed to the second parallax
        var activityImgArray = ['./Assests/Images/actionBandit.jpg', './Assests/Images/actionJames.jpg', './Assests/Images/banditBackpack.jpg', './Assests/Images/banditIdaho.jpg',
            './Assests/Images/bestFriends.jpg', './Assests/Images/cabinFront.jpg', './Assests/Images/happyBandit.jpg', './Assests/Images/sanFranRain.jpg',
            './Assests/Images/solidtudeCayman.jpg'];

        // randomized number of the image array
        var profileRandomNum = [Math.floor(Math.random() * profileImgArray.length)];
       
        // gets random string of the profile array to push to parallax one
        var profileRandomImg = profileImgArray[profileRandomNum];
        
        // randomized number of the image array
        var activityRandomNum = [Math.floor(Math.random() * activityImgArray.length)];
        
        // gets random string from the activity array to push to parallax two
        var activityRandomImg = activityImgArray[activityRandomNum];

        // parallax functionality
        $(document).ready(function(){
            $('.parallax').parallax();
        });

        // pushing the random images up to the parallax's
        $("#parallaxOne").attr("src", profileRandomImg);
        $("#parallaxTwo").attr("src", activityRandomImg);
        
        // embedded the whole parallax randomizaton inside the else so that it only implements when its needed
        
        // hides the mobile header because the screen is large enough to view the full site
        $("#mobile-header").hide();
    }
}

// implementation of windowSizing Function
windowSizing(winWidth);