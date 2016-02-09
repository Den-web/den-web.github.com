/*preloader страницы*/

	;$(window).on('load', function () {
	    var $preloader = $('#page-preloader'),
			$spinner   = $preloader.find('.spinner');
	    $spinner.fadeOut();
	    $preloader.delay(350).fadeOut('slow');
	});

/* Scroll page*/

	$(document).ready(function(){
		//Обработка нажатия на кнопку "Вверх"
		$("#up").click(function(){
			//Необходимо прокрутить в начало страницы
			var curPos=$(document).scrollTop();
			var scrollTime=curPos/1.73;
			$("body,html").animate({"scrollTop":0},scrollTime);
		});

		//Обработка нажатия на кнопку "Вниз"
		$("#down").click(function(){
			//Необходимо прокрутить в конец страницы
			var curPos=$(document).scrollTop();
			var height=$("body").height();
			var scrollTime=(height-curPos)/1.73;
			$("body,html").animate({"scrollTop":height},scrollTime);
		});
	});

/* gmap3 Google*/


	$("#map").show().gmap3({
    map:{
      address:"POURRIERES, FRANCE",
      options:{
        zoom:4,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: true,
        scrollwheel: true,
        streetViewControl: true
      }
    }
  });