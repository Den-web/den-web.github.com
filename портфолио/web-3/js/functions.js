/-------------------adaptive page by mobile-----------------------/

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

/-------------------fancybox by slider-----------------------/

		$(document).ready(function() {
			$(".fancybox-effects-a").fancybox({
			});
		});

/-------------------animation number image-----------------------/


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
  
  /-------------------animation text -----------------------/

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
  
  /-------------------Validation form-----------------------/
    

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
