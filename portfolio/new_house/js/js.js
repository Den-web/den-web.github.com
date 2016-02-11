$(document).ready(function(){

/*preloader страницы*/


	$(window).on('load', function () {
	    var $preloader = $('#page-preloader'),
			$spinner   = $preloader.find('.spinner');
	    $spinner.fadeOut();
	    $preloader.delay(350).fadeOut('slow');
	});

/* Scroll page*/

	
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
	

	//постраничная навигация
	var hash = window.location.hash.substr(1);
	var href = $('#nav li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad)
		}											
	});

	$('#nav li a').click(function(){
								  
		var toLoad = $(this).attr('href')+' #content';
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('ease');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#content').show('fast',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('fast');
		}
		return false;
		
	});


});