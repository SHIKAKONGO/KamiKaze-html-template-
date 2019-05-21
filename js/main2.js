$(function (){
	'use strict';

	// start navbar shrink
	$(document).ready(function(){
	  $(window).scroll(function() { 
	    if ($(document).scrollTop() > 150) { 
	      $('.navbar').addClass('shrink'); 
	    } else { 
	      $('.navbar').removeClass('shrink'); 
	    } 
	  }); 
	 });
	// end navbar shrink 
	 // 1-Smooth scrolling
	  $('.counter').counterUp({
		    delay: 10,
		    time: 9000
		});

// end smoth scroll to sections

});