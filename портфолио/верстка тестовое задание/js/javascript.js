 <!--============================== DownBlock =================================-->

;(function($) {
		$.fn.dropDownBlock = function(block, options) {
			var defaults = {
				speed: 'fast',
				top: $(this).height(),
				left: 0
			},
			opts 	= $.extend(defaults, options),
			toggler = $(this),
			block 	= $(block);
			toggler.css({'outline': 'none'})

			toggler.click(function(e) {
				e.preventDefault();
				$(block).css({
					'position' 	: 'absolute',
					'top' 		: (toggler.offset().top + opts['top']) + 'px',
					'left' 		: (toggler.offset().left + opts['left']) + 'px'
				});
				if($(block).is(':visible')) $(block).fadeOut(opts['speed']);
				else $(block).fadeIn(opts['speed']);
				this.focus();
			});
			toggler.blur(function() {
				$(block).fadeOut(opts['speed']);
			});
		};
	})(jQuery);
	// на каждую ссылку своя строка с link и block
	$('#block1').dropDownBlock($('#block'));


	 <!--============================== Scroll =================================-->

	(function($) {
		jQuery('body').ready(function(){
	    	jQuery('.scrollbar-inner').scrollbar();
		});
	})(jQuery);

	<!--============================== accordeon =================================-->

	$(document).ready(function(){
  $('#celebs ul > li ul')
    .click(function(event){
      event.stopPropagation();
    })
    .filter(':not(:first)')
    .hide();
    
  $('#celebs ul > li').click(function(){
    var selfClick = $(this).find('ul:first').is(':visible');
    if(!selfClick) {
      $(this)
        .parent()
        .find('> li ul:visible')
        .slideToggle();
    }
    
    $(this)
      .find('ul:first')
      .stop(true, true)
      .slideToggle();
  });
});