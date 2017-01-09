$(document).ready(function() {
  
  $('.mdl_layout').scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
     console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('#nav-bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('#nav-bar').removeClass('navbar-fixed');
    }
  });
});