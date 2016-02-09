$(function() {
	var way_screen2 = $("#way_screen2");
	var flat_det_in_way = $("#flat_det_in_way");
	var flat1_det_in_way = $("#flat1_det_in_way");

	var top_spacing = 0;
	var waypoint_offset = 0;

	way_screen2.waypoint({
		handler: function(event, direction) {
			if (direction == 'down') {
				document.getElementById('but_ico').click();
				document.getElementById('but_ico1').click();
			} else {

			}
			if (direction == 'up') {
				
			}
		},
	});
	flat_det_in_way.waypoint({
		handler: function(event, direction) {
			if (direction == 'down') {
				document.getElementById('flat_det_in').click();
				document.getElementById('flat_det_near').click();
				document.getElementById('flat_det_go').click();
			} else {

			}
			if (direction == 'up') {
			}
		},
	});
	
	flat1_det_in_way.waypoint({
		handler: function(event, direction) {
			if (direction == 'down') {
				document.getElementById('flat1_det_in').click();
				document.getElementById('flat1_det_near').click();
				document.getElementById('flat1_det_go').click();
				document.getElementById('flat1_det_in').remove();
				document.getElementById('flat1_det_near').remove();
				document.getElementById('flat1_det_go').remove();
			} else {

			}
			if (direction == 'up') {
			}
		},
	});
	
});

