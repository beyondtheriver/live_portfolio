$(document).ready(function(){
   $("#header").hover(function(){
      $("#greeting")[0].play();
   })
   if ($("#lions_roar")){
      $("#lions_roar")[0].play();
      setTimeout(function(){
         $("#hidden")[0].click();
      }, 3200);
   }
});
