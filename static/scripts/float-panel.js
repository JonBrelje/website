$(document).ready(function(){

	var nav = document.getElementById("nav-bar");
	var parent = nav.parentElement;
	var dup = nav.cloneNode(true);
	dup.id = "float-nav";
	dup.classList.add("navbar-fixed")
	
	$('.mdl-layout').scroll(function(parent, dup){
		console.log($('.mdl-layout').scrollTop());
		console.log(parent);
		console.log(dup);

	    if ($('.mdl-layout').scrollTop() > 500) {
	      if($('#float-bar').length == 0) {
	      	parent.appendChild(dup);
	      }
	    }
	    if ($('.mdl-layout').scrollTop() < 500) {
	      var elt = $('#float-bar');
	      if(elt.length == 1) {
	      	elt.remove();
	      }
	    }
	});
});