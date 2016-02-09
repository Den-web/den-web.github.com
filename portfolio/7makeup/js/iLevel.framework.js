    
    $(function() {
        
        // Init plugins --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
        
        //$(".phoneMaskRU").mask('+7 (999) 999-99-99');
        //$(".phoneMaskUA").mask('+38 (999) 999-99-99');
        //$(".phoneMask").mask('(999) 999-99-99');

        // Jquery Live 
        jQuery.fn.live = function (types, data, fn) {
            jQuery(this.context).on(types,this.selector,data,fn);
            return this;
        };
        
        
        // Feedback popup --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
        
        var formTitle  = $('#feedback-title').text();
        var formSubmit = $('#feedback-submit').text();
        
        $(".feedback_popup_show1").live("click", function(e){
            $("#feedback_popup1").show();
    
            if (type == 'question') {
                $('.popup_new').addClass('popup_question');
            }
            else {
                $('.popup_new').removeClass('popup_question');
            }
            e.stopPropagation();
            e.preventDefault();            
        });
        
        $(".feedback_popup_show2").live("click", function(e){
            $("#feedback_popup2").show();
    
            if (type == 'question') {
                $('.popup_new').addClass('popup_question');
            }
            else {
                $('.popup_new').removeClass('popup_question');
            }
            e.stopPropagation();
            e.preventDefault();            
        });
        
        $(".feedback_popup_show3").live("click", function(e){
            $("#feedback_popup3").show();
    
            if (type == 'question') {
                $('.popup_new').addClass('popup_question');
            }
            else {
                $('.popup_new').removeClass('popup_question');
            }
            e.stopPropagation();
            e.preventDefault();            
        });
        
        $(".feedback_popup_show4").live("click", function(e){
            $("#feedback_popup4").show();
    
            if (type == 'question') {
                $('.popup_new').addClass('popup_question');
            }
            else {
                $('.popup_new').removeClass('popup_question');
            }
            e.stopPropagation();
            e.preventDefault();            
        });
        
        // Close popup by cross
        $(".popup_close").on("click", function(){
            $(this).parent().parent().parent().hide();
            $(".phoneMask").removeClass('error');
            return false;
        });
        
        // Close popup on darkened area
        $('.popup').on('click', function(e){
            if ($(e.target).is('.popup')) {
                $(".phoneMask").removeClass('error');
                $('.popup').hide();
            }
            else {
                e.stopPropagation();
            }
        }); 

}); // Jquery End    
        
        
        
    // GET parameters to JS Object --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    
    function parseGetParams() { 
       var $_GET = {}; 
       var __GET = window.location.search.substring(1).split("&"); 
       for(var i=0; i<__GET.length; i++) { 
          var getVar = __GET[i].split("="); 
          $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
       } 
       return $_GET; 
    }
    var GETArr = parseGetParams(); 
    
    
    
    // Отправка форм --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
    
    var Unlimix = null;
    
    Unlimix = {
        Order: {
            send: function (id, type, formName) {
                
                var type     = (type == undefined || type == '') ? 'order' : type;
                var formName = (formName == undefined || formName == '') ? 'Заказ' : formName;
                
                if (this.validate(id)) {
                    
                    var varData = 'name='   + $('#name' + id).val() +
                                  '&phone=' + $('#phone'+ id).val() + 
                                  '&email=' +
                                  '&form='  + formName + 
                                  '&url='   + window.location.href + 
                                  '&type='  + type +
                                  '&utm_source='   + GETArr.utm_source +
                                  '&utm_medium='   + GETArr.utm_medium +
                                  '&utm_campaign=' + GETArr.utm_campaign +
                                  '&utm_term='     + GETArr.utm_term +
                                  '&utm_content='  + GETArr.utm_content +
                                  '&training=VK Beauty';
                    $.ajax({
                        type: "POST",
                        url:'/question/',
                        data: varData,
                        success: function() {
                            Unlimix.Order.mess(id);
                        },
                        error: function() {
                        	Unlimix.Order.error(id);
                        }
                    });
                }
            },
            validate: function (id) {
                var error = 0;        

                if ($('#phone'+ id).val() != "") {
                    $('#phone'+ id).removeClass('error');
                }else{
                    $('#phone'+ id).addClass('error');
                    error = 1;
                }
                
                if (error == 0) {
                    return true;
                }
                return false;
            },
            mess: function (id) {
                $('#messBlock').fadeIn(500);
                $('#name'+ id +', #phone'+ id +', #email'+ id).val('');
                setTimeout(function() {
                    $('#messBlock').slideUp(500);
                    $('.fancybox-overlay').hide();
                }, 5000);
            },
            error: function (id) {
                $('#errorBlock').fadeIn(500);
                
                setTimeout(function() {
                    $('#errorBlock').slideUp(500);
                }, 5000);
            }
        }
    };
    
