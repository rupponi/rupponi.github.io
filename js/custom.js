$(document).ready(function() {
   $('a[href^="#"]').on('click',function (event) {
      event.preventDefault();

      let tarDiv = this.hash;
      let $tarDiv = $(tarDiv);

      $('html, body').stop().animate({
         'scrollTop': $tarDiv.offset().top
      }, 1000, 'swing', function() {
          window.location.hash = tarDiv;
      });
   });

   var rotated = false;
   var translated = false;

   $("#nav-icon").click(function() {
       let targetAngle = document.getElementById("nav-icon"), deg = rotated ? 0 : 180;

       targetAngle.style.webkitTransform = "rotate("+deg+"deg)";
       targetAngle.style.mozTransform = "rotate("+deg+"deg)";
       targetAngle.style.oTransform = "rotate("+deg+"deg)";
       targetAngle.style.msTransform = "rotate("+deg+"deg)";
       targetAngle.style.transform = "rotate("+deg+"deg)";

       let aboutPos = document.getElementById("about-link"), aboutOffset = translated ? 0 : 3;

       aboutPos.style.webkitTransform = "translate(0px, "+aboutOffset+"rem)";
       aboutPos.style.mozTransform = "translate(0px, "+aboutOffset+"rem)";
       aboutPos.style.oTransform = "translate(0px, "+aboutOffset+"rem)";
       aboutPos.style.msTransform = "translate(0px, "+aboutOffset+"rem)";
       aboutPos.style.transform = "translate(0px, "+aboutOffset+"rem)";

       let resumePos = document.getElementById("resume-link"), resumeOffset = translated ? 0 : 6;

       resumePos.style.webkitTransform = "translate(0px, "+resumeOffset+"rem)";
       resumePos.style.mozTransform = "translate(0px, "+resumeOffset+"rem)";
       resumePos.style.oTransform = "translate(0px, "+resumeOffset+"rem)";
       resumePos.style.msTransform = "translate(0px, "+resumeOffset+"rem)";
       resumePos.style.transform = "translate(0px, "+resumeOffset+"rem)";

       let portfolioPos = document.getElementById("portfolio-link"), portfolioOffset = translated ? 0 : 9;

       portfolioPos.style.webkitTransform = "translate(0px, "+portfolioOffset+"rem)";
       portfolioPos.style.mozTransform = "translate(0px, "+portfolioOffset+"rem)";
       portfolioPos.style.oTransform = "translate(0px, "+portfolioOffset+"rem)";
       portfolioPos.style.msTransform = "translate(0px, "+portfolioOffset+"rem)";
       portfolioPos.style.transform = "translate(0px, "+portfolioOffset+"rem)";

       let listBackground = document.getElementById("list-background"), length = translated ? 0 : 18;

       listBackground.style.mozTransform = "scale(1, "+length+")";
       listBackground.style.oTransform = "scale(1, "+length+")";
       listBackground.style.msTransform = "scale(1, "+length+")";
       listBackground.style.transform = "scale(1, "+length+")";

       rotated = !rotated;
       translated = !translated;
   });

   $(".link-ref").click(function() {
       let targetAngle = document.getElementById("nav-icon"), deg = rotated ? 0 : -180;

       targetAngle.style.webkitTransform = "rotate("+deg+"deg)";
       targetAngle.style.mozTransform = "rotate("+deg+"deg)";
       targetAngle.style.oTransform = "rotate("+deg+"deg)";
       targetAngle.style.msTransform = "rotate("+deg+"deg)";
       targetAngle.style.transform = "rotate("+deg+"deg)";

       let aboutPos = document.getElementById("about-link"), aboutOffset = translated ? 0 : -3;

       aboutPos.style.webkitTransform = "translate(0px, "+aboutOffset+"rem)";
       aboutPos.style.mozTransform = "translate(0px, "+aboutOffset+"rem)";
       aboutPos.style.oTransform = "translate(0px, "+aboutOffset+"rem)";
       aboutPos.style.msTransform = "translate(0px, "+aboutOffset+"rem)";
       aboutPos.style.transform = "translate(0px, "+aboutOffset+"rem)";

       let resumePos = document.getElementById("resume-link"), resumeOffset = translated ? 0 : -6;

       resumePos.style.webkitTransform = "translate(0px, "+resumeOffset+"rem)";
       resumePos.style.mozTransform = "translate(0px, "+resumeOffset+"rem)";
       resumePos.style.oTransform = "translate(0px, "+resumeOffset+"rem)";
       resumePos.style.msTransform = "translate(0px, "+resumeOffset+"rem)";
       resumePos.style.transform = "translate(0px, "+resumeOffset+"rem)";

       let listBackground = document.getElementById("list-background"), length = translated ? 0 : -18;

       listBackground.style.mozTransform = "scale(1, "+length+")";
       listBackground.style.oTransform = "scale(1, "+length+")";
       listBackground.style.msTransform = "scale(1, "+length+")";
       listBackground.style.transform = "scale(1, "+length+")";

       rotated = false;
       translated = false;
   });
});
