requirejs.config({
   "paths": {
     "jquery": "lib/jquery.min",
     "waypoints": "lib/waypoints"
   }
});


require(["jquery", "waypoints"], function ($, W) {

	require(["lib/remove-class-regexp", "lib/bootstrap.min","lib/window-sized","lib/vertical-align","lib/caret-blink","lib/bullets", "lib/jquery.scrollTo.min"], function(){
		$('a').click(function (event) {
			var href = $(this).attr("href");

			if(href.indexOf("#") == 0){
				$.scrollTo.window().queue([]).stop();

				event.preventDefault();
				$.scrollTo($(href), 1000, function () {
					window.location.hash = href;
				});
			}

		});

		require(["luc"]);
		require(["helpers"]);

	});
	

});