requirejs.config({
   "paths": {
     "jquery": "lib/jquery.min"
   }
});


require(["jquery"], function ($) {

	require(["lib/bootstrap.min"]);
	require(["lib/window-sized"]);
	require(["lib/vertical-align"]);
	require(["lib/caret-blink"]);
	require(["lib/bullets"]);
	require(["lib/jquery.scrollTo.min"], function(){
		$('a').click(function (event) {
			var href = $(this).attr("href");

			if(href.indexOf("#") == 0){
				event.preventDefault();
				$.scrollTo($(href), 1000, function () {
					window.location.hash = href;
				});
			}

		});
	});
	
	require(["luc"]);

});