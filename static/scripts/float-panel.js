jQuery(document).ready(function(){

	jQuery('.mdl-layout').scroll(function(){
		console.log($('.mdl-layout').scrollTop())
	    if ($('.mdl-layout').scrollTop() > 280) {
	      $('#nav-bar').addClass('navbar-fixed');
	    }
	    if ($('.mdl-layout').scrollTop() < 281) {
	      $('#nav-bar').removeClass('navbar-fixed');
	    }
	});
});