jQuery(function(){		
	$(".modalbox").fancybox();
	$(".first").fancybox(); 
	$(".s")
		.attr('rel', 'group')
		.fancybox();
	
	$('input[placeholder], textarea[placeholder]').placeholder();
	
	/*yandex-map*/	
    ymaps.ready(init); 		
		function init () {            
            var myMap = new ymaps.Map('map', {
                    // При инициализации карты, обязательно нужно указать
                    // ее центр и коэффициент масштабирования
                    center: [51.66747329, 39.21185750], 
                    zoom: 16,
					behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]						
                });				
			
			myMap.controls.add('zoomControl', { left: 15, top: 15 });				
				
			myPlacemark = new ymaps.Placemark([51.6666,39.2079], {
				mapAutoPan: 0,
				
				hintContent: 'М-Стиль',
				balloonContentHeader: '<span style="font-size:24px; font-weight:bold; margin: 0 0 0 10px; font-weight:400; font-family:helioscondlightregular; color:#000;">М-Стиль <br> г. Воронеж, ул. 25 Октябра, дом  41</span>',
				balloonContentBody: '<span style="font-size:22px; margin: 0 0 0 10px; font-family:helioscondlightregular; color:#000;">г. Воронеж, ул. 25 Октябра, дом  41',
				balloonContentFooter: '<span style="font-size:22px; margin: 0 0 0 10px; font-family:helioscondlightregular; color:#000;">Работаем 24/7</span>',
				closeButton: false
			});			
 
			myPlacemark1 = new ymaps.Placemark([51.6651,39.2043], {
				hintContent: 'Кинотеатр Пролетарий',
				name: 'Кинотеатр Пролетарий',
				address: 'проспект. Революции, 56, Воронеж' 
			});
 
			myPlacemark2 = new ymaps.Placemark([51.6695,39.2073], {
				hintContent: 'Дом Офицеров',
				name: 'Дом Офицеров',
				address: 'проспект. Революции, 32, Воронеж' 
			});
			
			
			// Создаем коллекцию, в которую будем добавлять метки
            myCollection = new ymaps.GeoObjectCollection();
 
            //Добавляем метки в коллекцию геообъектов.
            myCollection
				.add(myPlacemark)
                .add(myPlacemark1)
				.add(myPlacemark2);			 	
 
            // Создаем шаблон для отображения контента балуна
            var myBalloonLayout = ymaps.templateLayoutFactory.createClass(
                '<h3>$[properties.name]</h3>' +
                '<p>$[properties.address]</p>'
            ); 
            // Помещаем созданный шаблон в хранилище шаблонов. Теперь наш шаблон доступен по ключу 'my#theaterlayout'.
            ymaps.layout.storage.add('my#theaterlayout', myBalloonLayout);
 
            // Задаем наш шаблон для балунов геобъектов коллекции.
            myCollection.options.set({
                balloonContentBodyLayout:'my#theaterlayout',
                // Максимальная ширина балуна в пикселах
                balloonMaxWidth: 375
            });					
			
            myMap.geoObjects.add(myCollection); 
			myPlacemark.balloon.open(); 			
			
			var geometry = [[51.6666,39.2079], [51.6654,39.2056], [51.6654,39.2056], [51.6654,39.2056], [51.6654,39.2056], [51.6651,39.2043]], 
			properties = {
				hintContent: "От кинотеатра Пролетарий к Салону М-СТИЛЬ"
				},
			options = {
				draggable: true,
				strokeColor: '#ff0000',
				strokeWidth: 5 
				},
			polyline = new ymaps.Polyline(geometry, properties, options); 
			myMap.geoObjects.add(polyline);
			
			var geometry = [[51.6666,39.2079], [51.6679,39.2066], [51.6679,39.2066], [51.6695,39.2073]], 
			properties = {
				hintContent: "От Дома Офицеров к Салону М-СТИЛЬ"
				},
			options = {
				draggable: true,
				strokeColor: '#0000ff',
				strokeWidth: 5 
				},
			polyline = new ymaps.Polyline(geometry, properties, options); 
			myMap.geoObjects.add(polyline);		
		}		
});