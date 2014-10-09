/*global $:false */
/*global window: false */


$(function (jQuery) {
	"use strict";
	
	jQuery(document).ready(function(){
		
		//filter portfolio
		var $container = jQuery('#portfolio-filter-container');
			
		$container.isotope({
			// options
			itemSelector : '.portfolio_filter_item',
			layoutMode : 'fitRows',
		});
		
		jQuery(window).scroll(function() {
				$container.isotope('reLayout');
		});
		
		/* filter */
		jQuery('#filters span').click(function(){
			var selector = jQuery(this).attr('data-filter');
			$container.isotope({ filter: selector });
			jQuery('#filters').find('span').removeClass('active');
			jQuery(this).addClass('active');
			return false;
		});
		
		//ACCORDION
		// jQuery('.accordion').accordion({
		// 	header: '.accor-title',
		// 	autoHeight: false,
		// 	active: 0
		// });
		
		//TAB
		jQuery('.tab-title').click(function(){
			var tab_id = jQuery(this).find('.tab-id').html();
			var parent_top = jQuery(this).parent().parent();
			var parent_tab = jQuery(parent_top).parent();
			jQuery(parent_top).find('.tab-title').removeClass("tab-current");
			jQuery(this).addClass("tab-current");
			jQuery(parent_tab).find('.tab-content').hide();
			jQuery(parent_tab).find('.tab-content'+tab_id).fadeIn(500);
		});
		
		//TESTIMONIALS
		jQuery('.testimonials-button-next').click(function(){
			var root = jQuery(this).parent().parent().parent();
			var current_id = parseInt( jQuery(root).find('.testimonials-current-id').html());
			var total = parseInt( jQuery(root).find('.testimonials-total').html());
			var next_current_id = 1;
			if(current_id == total ){
				next_current_id = 1;
			}else{
				next_current_id = current_id + 1;
			}
			jQuery(root).find('.testimonials-current-id').html(next_current_id);
			
			jQuery(root).find('.testimonials-each').each(function(){
				var this_id = parseInt( jQuery(this).find('.testimonials-id').html());
				if( this_id == next_current_id){
					jQuery(this).fadeIn(1000);
				}else{
					jQuery(this).hide();
				}
			});
		});
		
		jQuery('.testimonials-button-prev').click(function(){
			var root = jQuery(this).parent().parent().parent();
			var current_id = parseInt( jQuery(root).find('.testimonials-current-id').html() );
			var total = parseInt( jQuery(root).find('.testimonials-total').html() );
			var next_current_id = 1;
			if(current_id == 1 ){
				next_current_id = total;
			}else{
				next_current_id = current_id - 1;
			}
			jQuery(root).find('.testimonials-current-id').html(next_current_id);
			
			jQuery(root).find('.testimonials-each').each(function(){
				var this_id = parseInt( jQuery(this).find('.testimonials-id').html() );
				if( this_id == next_current_id){
					jQuery(this).fadeIn(1000);
				}else{
					jQuery(this).hide();
				}
			});
		});
		
		jQuery('#back_top').click(function(){
			jQuery('html, body').animate({scrollTop:0}, 'normal');
			return false;
		});
		
		jQuery(window).scroll(function() {
			if(jQuery(this).scrollTop() !== 0) {
				jQuery('#back_top').fadeIn();	
			} else {
				jQuery('#back_top').fadeOut();
			}
		});
		
		if(jQuery(window).scrollTop() !== 0) {
			jQuery('#back_top').show();	
		} else {
			jQuery('#back_top').hide();
		}
		
		
	});
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-43022168-1', 'wopethemes.com');
ga('send', 'pageview');

