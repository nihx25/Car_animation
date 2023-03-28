$(document).ready(function () {
  // variables
  $surface = $(".surface");
  $car = $(".car");
  $img=$('.car img');
  let flag=true;

  const car=

  // keypress event
  $(document).on("keypress", function (e) {
   if(e.which==13){
    $($surface).toggleClass('moveRight');
    $($car).toggleClass('suspension');
   }
  })

  //lights
  $(document).on("keypress", function (e) {
    if(e.which==32){
 if(flag){
    flag=false;
 }else{
    flag=true;
 }

    }
   })

});
