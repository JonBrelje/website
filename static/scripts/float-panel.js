$(document).ready(function(){

	$('.mdl-layout').scroll(function(parent, dup){
		var nav = document.getElementById("nav-bar");
		var parent = nav.parentElement;
		var dup = nav.cloneNode(true);
		dup.id = "float-nav";
		dup.classList.add("navbar-fixed")
		dup.classList.add("mdl-shadow--4dp")

	    if ($('.mdl-layout').scrollTop() > 500) {
	      if($('#float-nav').length == 0) {
	      	parent.appendChild(dup);
	      }
	    }
	    if ($('.mdl-layout').scrollTop() < 500) {
	      var elt = $('#float-nav');
	      if(elt.length == 1) {
	      	elt.remove();
	      }
	    }
	});
});