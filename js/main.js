( function($) {
  'use strict';

   var options1 = {
     useEasing : true, 
     useGrouping : true, 
     separator : ' ', 
     decimal : '.', 
     prefix : '', 
     suffix : '<span>&nbsp;руб.</span>' 
   };
   var num1 = new countUp("num1", 0, 27300, 0, 1.5, options1);
   
   
   var options2 = {
     useEasing : true, 
     useGrouping : true, 
     separator : ' ', 
     decimal : '.', 
     prefix : '', 
     suffix : '<span>&nbsp;м<sup>2</sup></span>' 
   };
   var num2 = new countUp("num2", 0, 21475, 0, 1.5, options2);
   
   
   var options3 = {
     useEasing : true, 
     useGrouping : true, 
     separator : ' ', 
     decimal : '.', 
     prefix : '', 
     suffix : '<span>&nbsp;м<sup>2</sup></span>' 
   };
   var num3 = new countUp("num3", 0, 100, 0, 1.5, options3);
   
   
   var options4 = {
     useEasing : true, 
     useGrouping : true, 
     separator : ' ', 
     decimal : '.', 
     prefix : '', 
     suffix : '<span>&nbsp;м/м</span>' 
   };
   var num4 = new countUp("num4", 0, 175, 0, 1.5, options4);

$(window).scroll(function() {
    $('#num1').each(function(){
		var imagePos = $(this).offset().top;
    var windowHeight = $(window).height();
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+windowHeight) {
          num1.start();
			}
		});
		$('#num2').each(function(){
		var imagePos = $(this).offset().top;
    var windowHeight = $(window).height();
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+windowHeight) {
          num2.start();
			}
		});
		$('#num3').each(function(){
		var imagePos = $(this).offset().top;
    var windowHeight = $(window).height();
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+windowHeight) {
          num3.start();
			}
		});
		$('#num4').each(function(){
		var imagePos = $(this).offset().top;
    var windowHeight = $(window).height();
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+windowHeight) {
          num4.start();
			}
		});
});


	/*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/



	$(window).load(function(){
        $('body').addClass('loaded');	
		$('.loader').fadeOut(200);
	
    $('.getintouch').css('background-image', 'url(images/bg/getintouch.jpg)');
		
		
		// var map;
		// map = new GMaps({
		// 	el: '.js-gmap',
		// 	lat: 55.722614,
		// 	lng: 37.668403,
		// 	scrollwheel:false,
		// 	zoom: 14,
		// 	zoomControl : true,
		// 	panControl : false,
		// 	streetViewControl : false,
		// 	mapTypeControl: false,
		// 	overviewMapControl: false,
		// 	clickable: false
		// });
		//
		//
		// var image = 'images/map-marker.png';
		//
		// map.addMarker({
		// 	lat: 55.722614,
		// 	lng: 37.668403,
		// 	icon: image,
		// 	animation: google.maps.Animation.DROP,
		// 	verticalAlign: 'bottom',
		// 	horizontalAlign: 'center',
		// 	backgroundColor: '#d3cfcf',
		// 	infoWindow:{
		// 		content: '<div class="map-info">г. Москва<br>ул. Шарикоподшипниковская, д. 5</div>'
		// 	}
		// });
		 
		// var styles = [{"stylers":[{"saturation":-100},{"gamma":0.8},{"lightness":4},{"visibility":"on"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"color":"#5dff00"},{"gamma":4.97},{"lightness":-5},{"saturation":100}]}];
		//
		// map.addStyle({
		// 	styledMapName:"Styled Map",
		// 	styles: styles,
		// 	mapTypeId: "map_style"
		// });
		//
		// map.setStyle("map_style");
		// $(window).resize(function(){
		// 	google.maps.event.trigger(map, "resize");
		// });




	});


	/*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/



	$(window).stellar({
      responsive: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      horizontalOffset: 0,
      verticalOffset: 0,
    });



	/*-------------------------------------------------------------------------------
	 Navbar collapse
	-------------------------------------------------------------------------------*/



	var navbar=$('.navbar');
	var navbarAffixHeight=56


	$('.navbar-collapse').on('show.bs.collapse', function () {
	 	navbar.addClass('affix');
	});

	$('.navbar-collapse').on('hidden.bs.collapse', function () {
		if (navbar.hasClass('affix-top')){
			navbar.removeClass('affix');
		}
			
	});

	$(".navbar-nav > li > a").on('click', function() {
	    $(".navbar-collapse").collapse('hide');
	});



	/*-------------------------------------------------------------------------------
	 Affix
	-------------------------------------------------------------------------------*/



	navbar.affix({
	  offset: {
	  	top:1
	  }
	});

	navbar.on('affixed-top.bs.affix', function() {
		if ($('.navbar-collapse').hasClass('in')){
			navbar.addClass('affix');
		}	
	});

	


	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/




    $('.js-scroller').on('click', function(e) {
    	e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - navbarAffixHeight + 1)
            }, 1000);
        }
    });




	/*-------------------------------------------------------------------------------
	 Scrollspy
	-------------------------------------------------------------------------------*/



	$('body').scrollspy({
		offset:  navbarAffixHeight + 1
	});
	


	/* ---------------------------------------------- /*
	 * Showcase
	/* ---------------------------------------------- */



	$('.js-isotope').imagesLoaded(function() {
		$('.js-isotope').isotope({
			layoutMode: 'masonry',
			itemSelector: '.js-isotope-item',
		});
	});



	/* ---------------------------------------------- /*
	   Showcase Filter
	/* ---------------------------------------------- */



	$('.filter a').on('click', function(e) {
        e.preventDefault();
		$('.filter .active').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$('.js-isotope').isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				queue: false
			}
		});
	});



	/* ---------------------------------------------- /*
	   Magnific Popup
	/* ---------------------------------------------- */



	$('.js-isotope').magnificPopup({
		  delegate: 'a',
		  mainClass: 'mfp-with-zoom',
	      type: 'image',
	      removalDelay: 0,
	      tLoading: 'Loading image #%curr%...',
	      fixedContentPos: true,
	      gallery: {
	        enabled: true,
	        navigateByImgClick: true
	      },
	      image: {
	        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	        titleSrc: function(item) {
	          return item.el.attr('title') + '<small></small>';
	        }
	      }
	});

	$('.js-play').magnificPopup({
        type: 'iframe'
    });



	/*-------------------------------------------------------------------------------
	  Carousel
	-------------------------------------------------------------------------------*/



 	$(".review-carousel").owlCarousel({
     
       itemsCustom : [
         [0, 1]
       ],
       responsiveRefreshRate:0,
       autoHeight : true,
       navigation : false

  	});



  	/*-------------------------------------------------------------------------------
	  Google map
	-------------------------------------------------------------------------------*/



  	(function(){

	}()); 


  	/*-------------------------------------------------------------------------------
	  Ajax Form
	-------------------------------------------------------------------------------*/



	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function(){
			$(this).validate({
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
			                $('.modal').modal('hide');
		                	$('#success').modal('show');
		                },

		                error: function(){
			            	$('.modal').modal('hide');
			                $('#error').modal('show');
			            }
			        });
			    }
			});
		});
	}

})(jQuery);
$(document).ready(function(){
/*
document.onmousemove = function(evt) {
    var e = evt || window.event, div = document.getElementById('x-ray');
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft, scrollY = document.documentElement.scrollTop || document.body.scrollTop
    var x = e.clientX + scrollX - 80, y = e.clientY + scrollY - 80;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.backgroundPosition = '' + -x + 'px ' + -y + 'px';
}
	 This code is executed on the document ready event 
		dwidth = $(window).width();
		dheight = $(window).height();
	var left	= 0,
		top		= 0,
		sizes	= { retina: { width:190, height:190 }, webpage:{ width: dwidth, height: dheight } },
		webpage	= $('#header'),
		offset	= { left: webpage.offset().left, top: webpage.offset().top },
		retina	= $('#retina');
	if(navigator.userAgent.indexOf('Chrome')!=-1)
	{

			
		retina.addClass('chrome');
	}
	
	webpage.mousemove(function(e){

		left = (e.pageX-offset.left);
		top = (e.pageY-offset.top);

		if(retina.is(':not(:animated):hidden')){

			webpage.trigger('mouseenter');
		}

		if(left<0 || top<0 || left > sizes.webpage.width || top > sizes.webpage.height)
		{


			if(!retina.is(':animated')){
				webpage.trigger('mouseleave');
			}
			return false;
		}



		retina.css({
			left				: left - sizes.retina.width/2,
			top					: top - sizes.retina.height/2,
			backgroundPosition	: '-'+(1.6*left)+'px -'+(1.35*top)+'px'
		});
		
	}).mouseleave(function(){
		retina.stop(true,true).fadeOut('fast');
	}).mouseenter(function(){
		retina.stop(true,true).fadeIn('fast');
	});*/
});