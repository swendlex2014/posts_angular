document.ws_init = function(){
	// Intro Anim

	var $introP = $('#header p');
	var $introH1 = $('#header h1');
	var $introH2 = $('#header h2');
	var goTo = 0;

	$(window).load(function() {
		$('body').addClass('loaded');
		if (Modernizr.touch){
			$('.home .nav').removeClass('open');
		}

		$hash = window.location.hash;
		if($hash == '#join'){
			$('button.join').click();
		}
	});

	//Nav Stuff

  	// Toggle Navigation
  	var headerNav = $('.nav');
  	var navTog = $('.nav-tog');
  	$(navTog).click(function(e){
  		if($(headerNav).hasClass('open')) {
  			$(headerNav).removeClass('open');
  			$('body').removeClass('nav-open');
  		} else {
  			$(headerNav).addClass('open');
  			$('body').addClass('nav-open');
  		}
  		e.preventDefault();
  	});


//Parallax

if (!Modernizr.touch){

	$hero = $('#hero .image');
	$upcoming = $('#upcoming img');

	$(window).scroll( function() {
		var fromtheTop = $(this).scrollTop();
				// Calculate distance scrolled
				if (fromtheTop > 0) {
					// Make sure it's never less than 0
					var newPos = ( (fromtheTop * .2) + 0);
					var newPos2 = ( (fromtheTop * .06));

					if ($('html').hasClass('csstransforms3d')) {
						$hero.css({
							'transform': 'translate3d(0px, ' + newPos + 'px, 0px) scale('+ (1+(newPos/2000)) +')'
						});

					} else {
						$hero.css({ 'top': '' + newPos + 'px', });
					}

					if ($('html').hasClass('csstransforms3d')) {
						$upcoming.css({
							'transform': 'translate3d(' + (newPos2/5) + 'px, ' + (newPos2) + 'px, 0px)'
						});
					}

				} else {
				// If it's less than 0, reset to original position
				$hero.css({
					'transform': 'translate3d(-1px, 1px, 0px)',
				});
			}
		});
}


$.waypoints.settings.scrollThrottle = 20;
$('body').delegate('section', 'waypoint.reached', function(event, direction) {
	var $active = $(this);

	if (direction === "up") {
		$active = $active.prev();
	}

	if (!$active.length) $active = $active.end();

	$('.s-active').removeClass('s-active');
	$active.addClass('s-active').addClass('init');

	event.stopPropagation();

});

	// Register each section as a waypoint.
	$('section').not('#hero').waypoint({ offset: '50%' });
	$('section#hero').waypoint({ offset: '-20%' });

	$('.cta a').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 50 }, 700, 'easeInOutQuad' );
	});


	var emailIn = $('#signup .form-group');
	$(emailIn).hover(function(e){
		$(this).addClass('focused');
	});

/*
	$(emailIn).blur(function(e){
		$(this).parent().removeClass('focused');
	});
*/

var $container = $('.blog .grid .inner').masonry();
	// layout Masonry again after all images have loaded
	$container.imagesLoaded( function() {
		$container.masonry({
			columnWidth: 'article',
			itemSelector: 'article',
		});
	});


	if($('body').hasClass('home')){
		var $date = new Date();
		var $currentHour = $date.getHours();
		var $currentMinute = $date.getMinutes();
		var $goal = parseInt($currentHour);
		$i = 0;
		$totalEvents = parseInt($('#upcoming ul li').length)
		$('#upcoming ul li').each(function(){
			$myTime = parseInt($(this).attr('data-time'));
			if($myTime < $goal){
				$(this).remove();
			}
			$i++
			if($i == $totalEvents){
				if($('#upcoming ul li').length == 0){
					$('#upcoming ul').remove();
					$cta = $('#upcoming .container .row .left a.cta');
					$.ajax({
						url: $templateURL+'/mbo/upcoming.php',
						type: 'post',
						data: {
							tomorrow: 'true'
						},
						success: function (data) { 
							$ctaClone = $cta.clone();
							$cta.remove()
							$('#upcoming .container .row .left').append(data).append($ctaClone);

						}
					});
				}
			}
			
		});
	}

	$('.foundations').slick({
		dots: true,
		speed: 500,
		slide: 'li',
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
	});

	$('.person').click(function(e){
		var team = $('#team');
		if (!team.hasClass('modal-active')) {
			$(this).addClass('active');
			$(this).closest('section').addClass('modal-active');
		} else {
			$('.person').removeClass('active');
			$(this).removeClass('active');
			$(this).closest('section').removeClass('modal-active');
		}

	});

	$('.join-trigger').click(function(e){
		var pricing = $('.pricing');
		if (!pricing.hasClass('signup')) {
			$(pricing).addClass('signup');
		} else {
			$(pricing).removeClass('signup');
		}
		e.preventDefault();
	});

	$('.events-table tr').not('a').click(function(e){
		window.location=$(this).find("a").attr("href");
		e.preventDefault();
	});

	$('dl dt').click(function(e){
		if (!$(this).hasClass('current')) {
			$('dt').removeClass('out');
			$('dt.current').addClass('out');
			$('dl dt').removeClass('current');
			$(this).addClass('current');
		}
		e.preventDefault();
	});

	//Tabs

	$('.nav-tabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	$('.btn-warning').click(function (e) {
		e.preventDefault()
		$('.nav-tabs a:first').tab('show')
	});

	$('.btn-danger').click(function (e) {
		e.preventDefault()
		$('.nav-tabs a:last').tab('show')
	});

	// Smooth scrolling
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});

  	// Toggle Form Stuff
  	var selectBtn = $('.wpcf7-list-item');
  	var otherBtn = $('.wpcf7-list-item.last');
  	var otherText = $('.textarea-872');

  	$(selectBtn).click(function(e){
  		$(otherText).removeClass('show').hide();
  	});
  	$(otherBtn).click(function(e){
  		if($(otherText).hasClass('show')) {
  			$(otherText).removeClass('show').hide();
  		} else {
  			$(otherText).addClass('show').show();
  		}
  	});
}