$(function() {

    $(".slogon").flowtype({maximum : 1280,maxFont:60,minFont:15,fontRatio:20,lineRatio : 1.1});
    $(".slogon p").flowtype({maximum : 1280,maxFont:30,minFont:9,fontRatio:30});
    $("#p_else").flowtype({maximum : 1280,maxFont:18,minFont:6,fontRatio:30});
    $(".reason_main h1").flowtype({maximum : 1280,maxFont:50,minFont:30,fontRatio:20,lineRatio : 1});
    $(".reason_main h1 span").flowtype({maximum : 1280,maxFont:30,minFont:20,fontRatio:15,lineRatio : 1});

    $(".dream_main h1").flowtype({maximum : 1280,maxFont:80,minFont:50,fontRatio:15,lineRatio : 1});
    $(".dream_main h1 span").flowtype({maximum : 1280,maxFont:36,minFont:20,fontRatio:15,lineRatio : 1.2});
    $(".dream_main h1 span span").flowtype({maximum : 1280,maxFont:20,minFont:10,fontRatio:15,lineRatio : 1});

    $(".project_title").flowtype({maximum : 1280,maxFont:60,minFont:30,fontRatio:20,lineRatio : 1});
    $(".project_title span").flowtype({maximum : 1280,maxFont:46,minFont:23,fontRatio:15,lineRatio : 1});

    $(".project_main_title").flowtype({maximum : 1280,maxFont:24,minFont:14,fontRatio:20,lineRatio : 1});
    $(".project_main_title span").flowtype({maximum : 1280,maxFont:18,minFont:12,fontRatio:15,lineRatio : 1});

    $(".lenta").flowtype({maximum : 1280,maxFont:26,minFont:12,fontRatio:25,lineRatio : 1.3});

});

						   function func2() {
						document.getElementById('but').style.opacity='0';
						document.getElementById('name').style.opacity='0';
						document.getElementById('tel').style.opacity='0';
						document.getElementsByClassName('form_call_title1').item(0).style.opacity='0';
						document.getElementsByClassName('form_call_title2').item(0).style.opacity='0';
						document.getElementsByClassName('form_call_title3').item(0).style.opacity='0';
						document.getElementsByClassName('form_call_title4').item(0).style.display='block';
						document.getElementsByClassName('form_call_title4').item(0).style.opacity='1';
													};
		$(document).ready(function() {
			$(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});
			});


$(function() {
	var bicycle_ico = $(".bicycle_ico");
	var top_spacing = 0;
	var waypoint_offset = 0;
	
bicycle_ico.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('bicycle_ico').item(0).classList.add('bicycle_ico_anim');
    },
    offset: '100%'
  });

	var project_ico = $(".project_ico");
project_ico.waypoint({
    handler: function(event, direction) {
	document.getElementById('numerate').click();
    },
    offset: '100%'
  });

var garant_ico = $(".garant_ico");
 garant_ico.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('garant_ico').item(0).classList.add('garant_ico_anim');
    },
    offset: '100%'
  });
var proff_ico = $(".proff_ico");
 proff_ico.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('proff_ico').item(0).classList.add('proff_ico_anim');
    },
    offset: '100%'
  });
var supplier_ico = $(".supplier_ico");
 supplier_ico.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('supplier_ico').item(0).classList.add('supplier_ico_anim');
    },
    offset: '100%'
  });
var funct_ico = $(".funct_ico");
 funct_ico.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('funct_ico').item(0).classList.add('funct_ico_anim');
    },
    offset: '100%'
  });
var lenta = $(".lenta");
 lenta.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('lenta').item(0).classList.add('lenta_anim');
    },
    offset: '100%'
  });
var dream_item_dig = $("#dream_item_dig1");
 dream_item_dig.waypoint({
    handler: function(event, direction) {
	document.getElementById('dream_item_dig1').classList.add('dream_item_dig_anim');
    },
    offset: '100%'
  });
var dream_item_dig = $("#dream_item_dig2");
 dream_item_dig.waypoint({
    handler: function(event, direction) {
	document.getElementById('dream_item_dig2').classList.add('dream_item_dig_anim');
    },
    offset: '100%'
  });
var dream_item_dig = $("#dream_item_dig3");
 dream_item_dig.waypoint({
    handler: function(event, direction) {
	document.getElementById('dream_item_dig3').classList.add('dream_item_dig_anim');
    },
    offset: '100%'
  });
var dream_item_dig = $("#dream_item_dig4");
 dream_item_dig.waypoint({
    handler: function(event, direction) {
	document.getElementById('dream_item_dig4').classList.add('dream_item_dig_anim');
    },
    offset: '100%'
  });
  
  
var dream_item_text = $("#dream_item_text1");
 dream_item_text.waypoint({
    handler: function(event, direction) {
	document.getElementById('dream_item_text1').classList.add('dream_item_text_anim');
    },
    offset: '100%'
  });
var dream_item_text = $("#dream_item_text2");
 dream_item_text.waypoint({
    handler: function(event, direction) {
	document.getElementById('dream_item_text2').classList.add('dream_item_text_anim');
    },
    offset: '100%'
  });
var dream_item_text = $("#dream_item_text3");
 dream_item_text.waypoint({
    handler: function(event, direction) {
	document.getElementById('dream_item_text3').classList.add('dream_item_text_anim');
    },
    offset: '100%'
  });
var dream_item_text = $("#dream_item_text4");
 dream_item_text.waypoint({
    handler: function(event, direction) {
	document.getElementById('dream_item_text4').classList.add('dream_item_text_anim');
    },
    offset: '100%'
  });
  
var rev_alena = $("#rev_alena");
 rev_alena.waypoint({
    handler: function(event, direction) {
	document.getElementById('rev_alena').style.opacity='1';
	document.getElementById('rev_alena_text').style.opacity='1';
    },
    offset: '100%'
  });
var rev_inor = $("#rev_inor");
 rev_inor.waypoint({
    handler: function(event, direction) {
	document.getElementById('rev_inor').style.opacity='1';
	document.getElementById('rev_inor_text').style.opacity='1';
    },
    offset: '100%'
  });
var rev_serg = $("#rev_serg");
 rev_serg.waypoint({
    handler: function(event, direction) {
	document.getElementById('rev_serg').style.opacity='1';
	document.getElementById('rev_serg_text').style.opacity='1';
    },
    offset: '100%'
  });
  
 
var work_p1_item_text = $(".work_p1_item_text");
 work_p1_item_text.waypoint({
    handler: function(event, direction) {
		if (direction == 'down') {
	document.getElementById('work_line').className= 'work_line_anim1';
	}
    },
    offset: '100%'
  });

var work_p1_item_text = $(".work_p1_item_text");
 work_p1_item_text.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('work_p1_item_line').item(0).classList.add('work_p1_item_line_anim');
    },
    offset: '100%'
  });
 
 
var work_p2_item_text = $(".work_p2_item_text");
 work_p2_item_text.waypoint({
    handler: function(event, direction) {
	//document.getElementById('work_line').className= 'work_line_anim2';
	document.getElementById('work_line').classList.add('work_line_anim2');
    },
    offset: '100%'
  });
var work_p2_item_text = $(".work_p2_item_text");
 work_p2_item_text.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('work_p2_item_line').item(0).classList.add('work_p2_item_line_anim');
    },
    offset: '100%'
  });
  
  
var work_p3_item_text = $(".work_p3_item_text");
 work_p3_item_text.waypoint({
    handler: function(event, direction) {
	//document.getElementById('work_line').className= 'work_line_anim3';
	document.getElementById('work_line').classList.add('work_line_anim3');
    },
    offset: '100%'
  });
  
var work_p3_item_text = $(".work_p3_item_text");
 work_p3_item_text.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('work_p3_item_line').item(0).classList.add('work_p3_item_line_anim');
    },
    offset: '100%'
  });


var work_p4_item_text = $(".work_p4_item_text");
 work_p4_item_text.waypoint({
    handler: function(event, direction) {
	//document.getElementById('work_line').className= 'work_line_anim4';
	document.getElementById('work_line').classList.add('work_line_anim4');
    },
    offset: '100%'
  });
var work_p4_item_text = $(".work_p4_item_text");
 work_p4_item_text.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('work_p4_item_line').item(0).classList.add('work_p4_item_line_anim');
    },
    offset: '100%'
  });



var work_p5_item_text = $(".work_p5_item_text");
 work_p5_item_text.waypoint({
    handler: function(event, direction) {
	//document.getElementById('work_line').className= 'work_line_anim5';
	document.getElementById('work_line').classList.add('work_line_anim5');
    },
    offset: '100%'
  });
var work_p5_item_text = $(".work_p5_item_text");
 work_p5_item_text.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('work_p5_item_line').item(0).classList.add('work_p5_item_line_anim');
    },
    offset: '100%'
  });
  
  
var work_p6_item_text = $(".work_p6_item_text");
 work_p6_item_text.waypoint({
    handler: function(event, direction) {
	//document.getElementById('work_line').className= 'work_line_anim6';
	document.getElementById('work_line').classList.add('work_line_anim6');
    },
    offset: '100%'
  });
var work_p6_item_text = $(".work_p6_item_text");
 work_p6_item_text.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('work_p6_item_line').item(0).classList.add('work_p6_item_line_anim');
    },
    offset: '100%'
  });
  
  
var work_p7_item_text = $(".work_p7_item_text");
 work_p7_item_text.waypoint({
    handler: function(event, direction) {
	//document.getElementById('work_line').className= 'work_line_anim7';
	document.getElementById('work_line').classList.add('work_line_anim7');
    },
    offset: '100%'
  });
var work_p7_item_text = $(".work_p7_item_text");
 work_p7_item_text.waypoint({
    handler: function(event, direction) {
	document.getElementsByClassName('work_p7_item_line').item(0).classList.add('work_p7_item_line_anim');
    },
    offset: '100%'
  });
  

  });
  
  
    (function(){

    $(document).on('click', '#numerate', parseForm);

    function parseForm(e) {
        e.preventDefault();
        var options = {};

        $.each($('#numerator-settings input'), function(i, val){
            options[$(val).attr('name')] = $(val).val();
        });

        $.each($('#numerator-settings select'), function(i, val){
            options[$(val).attr('name')] = $(val).val();
        });

        console.log(options);
        $('#demo-display p').numerator(options);
    }

})();  
    ;(function ( $, window, document, undefined ) {

    var pluginName = "numerator",
    defaults = {
        easing: 'swing',
        duration: 3000,
        delimiter: undefined,
        rounding: 0,
        toValue: 153,
        fromValue: undefined,
        onStart: function(){},
        onStep: function(){},
        onProgress: function(){},
        onComplete: function(){}
    };

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            this.parseElement();
            this.setValue();
        },

        parseElement: function () {
            var elText = $(this.element).text().trim();

            this.settings.fromValue = this.format(elText);
        },

        setValue: function() {
            var self = this;

            $({value: self.settings.fromValue}).animate({value: self.settings.toValue}, {

                duration: parseInt(self.settings.duration),

                easing: self.settings.easing,

                start: self.settings.onStart,

                step: function(now, fx) {
                    $(self.element).text(self.format(now));
                    // accepts two params - (now, fx)
                    self.settings.onStep(now, fx);
                },

                // accepts three params - (animation object, progress ratio, time remaining(ms))
                progress: self.settings.onProgress,

                complete: self.settings.onComplete
            });
        },

        format: function(value){
            if (this.settings.rounding < 1) {
                return parseInt(value);
            } else {
                return parseFloat(value).toFixed(this.settings.rounding);
            }
        }
    };

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( $.data( this, "plugin_" + pluginName ) ) {
                $.data(this, 'plugin_' + pluginName, null);
            }
            $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );

        });
    };

})( jQuery, window, document );
