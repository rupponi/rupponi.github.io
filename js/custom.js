$(document).ready(function() {
   $('a[href^="#"]').on('click',function (event) {
      event.preventDefault();

      var tarDiv = this.hash;
      var $tarDiv = $(tarDiv);

      $('html, body').stop().animate({
         'scrollTop': $tarDiv.offset().top
      }, 1000, 'swing', function() {
          window.location.hash = tarDiv;
      });
   });

   var rotated = false;
   var translated = false;

   $("#nav-icon").click(function() {
       var targetAngle = document.getElementById("nav-icon"), deg = rotated ? 0 : 180;

       targetAngle.style.webkitTransform = "rotate("+deg+"deg)";
       targetAngle.style.mozTransform = "rotate("+deg+"deg)";
       targetAngle.style.oTransform = "rotate("+deg+"deg)";
       targetAngle.style.msTransform = "rotate("+deg+"deg)";
       targetAngle.style.transform = "rotate("+deg+"deg)";

       var targetPos = document.getElementById("nav-list"), pos = translated ? 0 : 9.5;

       targetPos.style.webkitTransform = "translate(0px,"+pos+"rem)";
       targetPos.style.mozTransform = "translate(0px,"+pos+"rem)";
       targetPos.style.oTransform = "translate(0px,"+pos+"rem)";
       targetPos.style.msTransform = "translate(0px,"+pos+"rem)";
       targetPos.style.transform = "translate(0px,"+pos+"rem)";

       rotated = !rotated;
       translated = !translated;
   });
});