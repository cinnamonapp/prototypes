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
	
	require(["lib/snap.svg-min"], function (Snap) {
		require(["luc"]);
	});

});