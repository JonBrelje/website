$(document).ready(function(){

	$('.mdl-layout').scroll(function(){
		console.log($('.mdl-layout').scrollTop())
		var bottom = $('#nav-bar').getBoundingClientRect().bottom;

	    if ($('.mdl-layout').scrollTop() > bottom) {
	      $('#nav-bar').addClass('navbar-fixed');
	    }
	    if ($('.mdl-layout').scrollTop() < bottom) {
	      $('#nav-bar').removeClass('navbar-fixed');
	    }
	});
});