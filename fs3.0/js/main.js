(function($) {

	"use strict";

	


	var fullHeight = function() {

		$('.js-fullheight').css('height', '500px'/*$(window).height()*/);
		$(window).resize(function(){
			$('.js-fullheight').css('height', '500px'/*$(window).height()*/);
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#fshila-loader').length > 0) {
				$('#fshila-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	

	

	$('nav .dropdown').click(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.fshila_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .fshila-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('fshila-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.fshila-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .fshila-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight');
							} else {
								el.addClass('fadeInUp animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 300);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	


  $('.checkin_date, .checkout_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});




})(jQuery);

function updateTab(tab_id){
    title = tab_id+"_title";
    tab = tab_id+"_tab";
    console.log("tab: " + tab);
    console.log("tab title: " + title);
    $("#details_tab .tabs_title").removeClass("title_active");
    $("#details_tab #"+title).addClass("title_active");
    $("#details_tab .tabs_content").removeClass("content_active");
    $("#details_tab #"+tab).addClass("content_active");
}