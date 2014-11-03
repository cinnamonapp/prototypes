
requirejs.config({
   "paths": {
     "jquery": "lib/jquery.min",
     "waypoints": "lib/waypoints"
   }
});


require(["jquery", "waypoints"], function ($, W) {
	require(["lib/jquery.touchy.min", "lib/bootstrap.min", "lib/window-sized", "lib/vertical-align", "lib/carousell", "cinnamon"], function (){

    $('.nav a').on('click', function(){
      if($(".navbar-toggle").css("display") !== "none")
        $(".navbar-toggle").click() //bootstrap 3.x by Richard
    });

    $('section').on("touchstart", function() {
      if($(".navbar-collapse.collapse").hasClass("in"))
        $(".navbar-toggle").click() //bootstrap 3.x by Richard
    });
	});
});
