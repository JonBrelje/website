jQuery(document).ready(function(){

	jQuery('.mdl-layout__content').scroll(function(){
		console.log('scrolled');
		console.log($(window).scrollTop())
	    if ($(window).scrollTop() > 280) {
	      $('#nav-bar').addClass('navbar-fixed');
	    }
	    if ($(window).scrollTop() < 281) {
	      $('#nav-bar').removeClass('navbar-fixed');
	    }
	});
});