$(document).ready(function(){

	var nav_top = console.log($('#nav-bar').scrollTop())
	$('.mdl-layout').scroll(function(nav_top){
		console.log($('.mdl-layout').scrollTop())
		var bottom = $('#nav-bar').getBoundingClientRect().bottom;

	    if ($('.mdl-layout').scrollTop() > nav_top) {
	      $('#nav-bar').addClass('navbar-fixed');
	    }
	    if ($('.mdl-layout').scrollTop() < nav_top) {
	      $('#nav-bar').removeClass('navbar-fixed');
	    }
	});
});