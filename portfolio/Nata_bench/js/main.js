$(document).ready(function() {
	var clock;
	clock = $(".clock").FlipClock({
		clockFace: "TwentyFourHourClock",
		autostart: false,
		callbacks: {
			stop: function(){
				$(".message").html("");
			}
		}
	});

	var dt = "June 01 2016 20:22:48";
	var first = new Date(dt);
	var last = Date.now();
	var remaining = first - last;
	remaining /=1000;

	if (first > last) {
		clock.setTime(remaining);
	} else {
		clock.setTime(first);
	};

	
	clock.setCountdown(true);
	clock.start();

});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       300,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();


	

