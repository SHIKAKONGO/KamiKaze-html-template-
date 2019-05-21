$(function (){ 
	// start smoth scroll to sections
	$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // 1-Smooth scrolling
	  scrollLink.click(function(e) {
	    e.preventDefault();
	    $('body,html').animate({
	      scrollTop: $(this.hash).offset().top
	    }, 1000 );
	  });
	  
	  // 2-Active link switching
	  	  
	});
	// end smoth scroll to sections
	// start typed code
	$('.slide .text-part h1 span').typed({
        strings: ["Android", "frontend", "Developing" , "IOS" , "Video Edit"],
        loop: true,
        startDelay: 1000,
        backDelay: 2000
    }); 
	// end typed code
	//COUNTER UP
	$(".counterup").counterUp({
        delay: 1,
        time: 1000
     	});  
	//mixitup plugin
	var mixer = mixitup('.main', {
         selectors: {
            control: '[data-mixitup-control]',
          }
     });
	  /* start gallery */
     $('.view').magnificPopup({
    
    type: 'image',
     gallery: {
      enabled: true
    },
  });
 $(".grids li").click(function() {
    $(this).addClass('active').siblings().removeClass('active');

    }); 
	// end progress bar
	// start animate image
	 var zIndexValue = 0;

    $('.cards .card').on('click', function(){

        $(this).animate ({
            left: '20%',
            marginTop: 30
        },400, function(){
            zIndexValue--;
            $(this).css('z-index', zIndexValue);

        }).animate({
            left: $(this).css('left'),
            marginTop: 0
        },400);

    });
	// end animate image
	// start carousel
	$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        autoPlay:false
    });
});
	// end arousel 
	 
});