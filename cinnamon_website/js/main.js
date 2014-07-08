
requirejs.config({
   "paths": {
     "jquery": "lib/jquery.min",
     "waypoints": "lib/waypoints"
   }
});


require(["jquery", "waypoints"], function ($, W) {
	require(["lib/caret-blink", "lib/bootstrap.min", "lib/window-sized", "lib/vertical-align", "lib/jquery.scrollTo.min", "lib/snap.svg-min", "lib/bullets"], function (){
		require(["cinnamon"]);


		$("#cinnamon-seed").waypoint(function(direction){
			if(direction == "down")
				$(this).removeClass("fadeout");
			else
				$(this).addClass("fadeout");
		});

		$("#cinnamon-download").waypoint(function (direction) {
			if(direction == "down")
				$("#cinnaphone").removeClass("bounceout");
			else
				$("#cinnaphone").addClass("bounceout");
		},{
			offset: -200
		});
	});
});