//
// .aside start closed
// When you click on the drawer button
// Changes the .opened class to .aside to open and close the draw
// .arrow gets animated to flip 180)º
// 
$(document).ready(function(){
  $('#button').on('click', function(f) {
    $('.aside').toggleClass("opened"); //you can list several class names
    $(".arrow").animate({rotate: '+=180deg'});
    f.preventDefault();
  });
});
//
// when you click on any client's link in the drawer
// Changes the .opened class to .aside to close the draw
// .arrow gets animated to flip 180º
//
$(document).ready(function(){
  $('.c-link').on('click', function(f) {
    $('.aside').toggleClass("opened"); //you can list several class names 
    $(".arrow").animate({rotate: '+=180deg'}); 
    f.preventDefault();
  });
});

      

      