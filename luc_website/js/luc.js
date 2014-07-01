
// STAGE OBJECT CLASS
// Available configurations:
// 	- main_section_height_adapt: 	<boolean> 	[default: true]
// 	- readiness_delay: 				<integer> 	[default: 0]
// 	-

var LCStage = function(stage_selector, lc_character, lc_text){

	// Config and variables methods ========================ì

		// Required variables declaration
		var LCBackgroundStage 		= $(stage_selector);
		var LCMainCharacterStage 	= lc_character;
		var LCStageText 			= lc_text;

		var background_current_background = "section-char-cute";

		this.config = {
			main_section_height_adapt: true,
			readiness_delay: 0,

			background_colors: ["section-char-cute", "section-char-invidia", "section-char-nighttime"]
		};

	// ========================================

	// Private methods ========================

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

	// ========================================

	// Public methods =========================

		// e.g. obj.changeBackground("red") 
		this.changeBackground = function (background) {
			LCBackgroundStage.removeClass(background_current_background);

			if (this.config.background_colors.indexOf(background) > -1){
				LCBackgroundStage.addClass(background);
				background_current_background = background;
			}else{	
				console.error("There is no background with that name");
			}
		};

		this.switchMeridian = function () {
			if(LCBackgroundStage.hasClass("section-char-nighttime")){
				this.changeBackground("section-char-cute");
			}else{
				this.changeBackground("section-char-nighttime");
			}
		};

		this.init = function(){
			if(this.config.main_section_height_adapt){
				maintainMainSectionHeightSameAsWindowHeight(50);
			}

			window.setTimeout(function () {
				// Init children
				LCMainCharacterStage.init();
				LCStageText.init();

				// Everything's configured
				LCBackgroundStage.addClass("ready");			
			}, this.config.readiness_delay);
		};
	// ========================================

	return this;

};



// CHARACTER OBJECT CLASS 
// Available configurations:
// 	- eyes_blinking: 		<boolean> 	[default: true]
// 	-

var LCCharacter = function(selector, svg_selector){

	// Config and variables methods ========================ì

		var LCMainCharacterStage = $(selector);

		// var LCCharacterSvg = Snap(svg_selector);

		// mouth = LCCharacterSvg.select(".lc-mouth");
		// mouthMatrix = mouth.transform().localMatrix;
		
		// Default configuration
		this.config = {
			eyes_blinking: true
		};

	// ========================================

	// EYES PART ==============================

		// Eyes variables
		var LCCharacterEyes = LCMainCharacterStage.find(".lc-eyes");
		var LCCharacterEyebrows = LCMainCharacterStage.find(".lc-eyebrows");

		// Loop for eyes blink
		var blinkAnimationLoop = function () {
			LCCharacterEyes.attr("class", "lc-eyes");
			LCCharacterEyebrows.attr("class", "lc-eyebrows");

			window.setTimeout(function () {
				LCCharacterEyes.attr("class", "lc-eyes animated");
				LCCharacterEyebrows.attr("class", "lc-eyebrows animated");
			}, 100);
		};

		var blinkAnimationStart = function () {
			blinkAnimationLoop();
			var eyeBlinkInterval = window.setInterval(blinkAnimationLoop, 8000);
		};

	// ========================================



	// Public methods =========================

		this.init = function () {
			// Everything's configured
			LCMainCharacterStage.addClass("ready");

			if (this.config.eyes_blinking)
				blinkAnimationStart();

		};

	// ========================================

	return this;
};




// TEXT OBJECT CLASS 
// Available configurations:
// 	-

var LCText = function(selector){
	var LCStageText = $(selector);

	this.init = function () {
		// Everything's configured
		LCStageText.addClass("ready");
	};

	return this;
};



$(document).ready(function () {

	// Character declaration ==================

		lc_character 	= new LCCharacter("#LCMainCharacterStage", "#LCCharacter");
		// lc_character.config.eyes_blinking = false;

	// ========================================

	// Text declaration =======================

		lc_text 		= new LCText("#LCStageText");

	// ========================================

	// Stage declaration ======================

		lc_stage 		= new LCStage("#LCBackgroundStage", lc_character, lc_text);
		// Stage configuration
		lc_stage.config.readiness_delay = 500;

		// Init the entire stage
		lc_stage.init();

		// lc_stage.changeBackground("section-char-nighttime");

	// ========================================

	var previousKey;
	var firstApproach = true;

	$("body").keydown(function (key) {
		console.log(key.which);
		if(firstApproach){
			if(key.which >= 65 && key.which <= 90 && previousKey != 91){
				$("input").focus();
				firstApproach = false;
			}
		}

		previousKey = key.which;
	});










	// Phone carousel
	var overviewCurrentIndex = 1;
	var possibleBackgrounds = ["section-danger", "section-dream", "section-info", "section-warning"];
	var overviewInterval = 5;

	window.overviewShowSlide = function (index) {
		$("#Overview").removeClass(possibleBackgrounds.join(" "));

		$("#Overview").addClass(possibleBackgrounds[index]);
	};

	var overviewSentinelF = function () {

		if(overviewCurrentIndex >= possibleBackgrounds.length)
			overviewCurrentIndex = 0;

		overviewShowSlide(overviewCurrentIndex);

		overviewCurrentIndex++;

	};

	// var overviewSentinel = window.setInterval(overviewSentinelF, overviewInterval * 1000);


	// Text image carousel
	var textImageCurrentIndex = 1, textImageInterval = 20;
	var blocks = $(".text-image-carousel .text-image-block");
	var imageBlocks = $(".text-image-carousel .image-block");

	window.nurtureShowSlide =	function (index, clearit) {
		// if(clearit)
			// clearInterval(textImageCarouselSentinel);

		console.log(index);
		blocks.removeClass("active");
		imageBlocks.removeClass("active");

		$(blocks[index]).addClass("active");
		$(imageBlocks[index]).addClass("active");
	};

	var textImageCarouselSentinelF = function () {

		if(textImageCurrentIndex >= blocks.length){	
			textImageCurrentIndex = 0;
			textImageCarouselSentinel();
		}

		nurtureShowSlide(textImageCurrentIndex);

		textImageCurrentIndex++;

	};

	// var textImageCarouselSentinel = window.setInterval(textImageCarouselSentinelF, textImageInterval * 1000);

	// blocks.click(function () {
	// 	console.log(this);
	// 	var number = $(this).attr("data-carousel-number");

	// 	nurtureShowSlide(number, true);
	// });


});


