
// Stage object
LCStage = function(selector){
	var LCBackgroundStage = $(selector);

	this.config = {
		main_section_height_adapt: true
	};

	// Private functions
	var setMainSectionHeight = function (height) {
		LCBackgroundStage.css("min-height", height);
	};
	var maintainMainSectionHeightSameAsWindowHeight = function () {
		setMainSectionHeight(window.innerHeight);
		
		$(window).on('resize', function () {
			setMainSectionHeight(window.innerHeight);
		});

		return true;
	}

	this.init = function(){
		if(this.config.main_section_height_adapt){
			maintainMainSectionHeightSameAsWindowHeight(50);
		}
	};

	this.init();
};


$(document).ready(function () {

	lc_stage = new LCStage("#LCBackgroundStage");

	var LCCharacterEyes = $("#LCCharacter .lc-eyes");
	var LCCharacterEyebrows = $("#LCCharacter .lc-eyebrows");

	// Loop for eyes blink
	var blinkAnimation = function () {
		console.log("blink");
		LCCharacterEyes.attr("class", "lc-eyes");
		LCCharacterEyebrows.attr("class", "lc-eyebrows");

		window.setTimeout(function () {
			LCCharacterEyes.attr("class", "lc-eyes animated");
			LCCharacterEyebrows.attr("class", "lc-eyebrows animated");
		}, 100);
	};
	var eyeBlinkInterval = window.setInterval(blinkAnimation, 8000);
	blinkAnimation();
})