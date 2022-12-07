;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#petsol-offcanvas, .js-petsol-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-petsol-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};

	var offcanvasMenu = function() {

		$('#page').prepend('<div id="petsol-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-petsol-nav-toggle petsol-nav-toggle petsol-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#petsol-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#petsol-offcanvas').append(clone2);

		$('#petsol-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#petsol-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-petsol-nav-toggle').removeClass('active');
				
	    	}
		});
	};

	var burgerMenu = function() {

		$('body').on('click', '.js-petsol-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	// Loading page
	var loaderPage = function() {
		$(".petsol-loader").fadeOut("slow");
	};

	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		dropdown();
		goToTop();
		loaderPage();
	});


}());