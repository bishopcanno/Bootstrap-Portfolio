// -----------------------------------------------------------------------------CONTACT PAGE JS---------------------------------------------------------------------------------------------------
console.log("js file is linked");

// Js for the transparent text over image
$(document).ready(function(){
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window ).height();
    var traX, traY;
    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((6 * mouseX) / 570) + 40;
      traY = ((6 * mouseY) / 570) + 50;
    //   console.log(traX);
      $(".title").css({"background-position": traX + "%" + traY + "%"});
    });
  });

// collapsable initialization
$(document).ready(function(){
    $('.collapsible').collapsible();
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
    accordion: true
    });
});