$(document).ready(function () {

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

	blocks.click(function () {
		var number = $(this).attr("data-carousel-number");
		$("#Nurture .bullet-group").bullets("select", number);
		nurtureShowSlide(number, true);
	});





	// Navbar color change
	var navigation = $("#TopMainNavigation");
	changeNavColor = function (navclass) {
		navclass = navclass.trim();

		navigation.removeClassRegExp(/(section\-[\w]+)/);
		navigation.addClass(navclass.trim());
	}
	$("section").waypoint(function (direction) {

		var element = {};
		if(direction == "up")
			element = $(this).prev();
		else
			element = $(this);

		var classnames = element.attr("class") + " ";

		var navclass = classnames.match(/(section\-[\w]+)\s/)[0];

		changeNavColor(navclass);
	}, {
		offset: 60
	});











	// Email addresses form
	$("#custom-email-form").submit(function (event) {
		event.preventDefault();

		var data = $(this).serialize();

		$.ajax({
			url: $(this).attr("action"),
			type: $(this).attr("method"),
			data: data
		});

		// FACEBOOK PIXEL TRACKING
		window._fbq.push(['track', '6017665108426', {'value':'0.01','currency':'EUR'}]);
		var img = document.createElement('img');
		img.src = "https://www.facebook.com/tr?ev=6017665108426&amp;cd[value]=0.01&amp;cd[currency]=EUR&amp;noscript=1";
		img.height = 0; img.width = 0;
		document.body.appendChild(img);

		$('#custom-email-form').addClass('hidden');
		$('#form-mascotte').addClass('bounce animated');
		$('#thankyou-message').removeClass('hidden');

		return false;
	});

});