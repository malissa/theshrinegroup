
jQuery(window).load(function() {
	
	"use strict";
	
	jQuery('.page-loading').fadeOut(1000, function() {
		$(this).remove();	
	});
	
});

jQuery(document).ready(function($){
	
	"use strict";
	
	// Main navigation menu affix function
	$('.stickem-container').stickem();
	
	// jQuery smooth scrolling
	$('.navbar-collapse ul li a, #header .arrow-link a').bind('click', function(event) {
		var $anchor = $(this);		
		$('html, body').stop().animate({
			scrollTop: parseInt($($anchor.attr('href')).offset().top - 80, 0)
		}, 1500,'easeInOutExpo');
		event.preventDefault();
	});
	
	// Top fullscreen image with jQuery backstretch
	// $.backstretch('images/woodward.jpg');
	$.backstretch('images/bg.png');
	
	// jQuery tooltips
	$('.teams .social li a').tooltip();
	
	$("#contact-form").submit(function() {
		var $name		= $("#contact-form input[name='name']");
		var $email		= $("#contact-form input[name='email']");
		var $website	= $("#contact-form input[name='website']");
		var $message	= $("#contact-form textarea[name='message']");
		if($name.val() == "" || $email.val() == "" || $website.val() == "" || $message.val() == "" ){
			$("#error").html('All fields are required');
			return false;
		}
		return true;
	});
	
	// jQuery placeholder for IE
	$("input, textarea").placeholder();

});
