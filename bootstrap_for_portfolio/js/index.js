$(document).ready(function() {
   var width = $(window).width();
   if (width <= 415){
      $("#ghoatst")[0].play();
   }
   if (width <= 769 && width > 415){
      $("#goatrodeovideoloop")[0].play();
   }
});
