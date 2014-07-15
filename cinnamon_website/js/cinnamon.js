
$(document).ready(function () {

	// NAVIGATION CONTROLS

	var scrollTo = function (href, offset) {
		$.scrollTo($(href), 1000, {
			onAfter: function () {
				// window.location.hash = href;
				$(".scroll-to-active-right-now").removeClass("scroll-to-active-right-now");
				$(href).addClass("scroll-to-active-right-now");
			},
			offset: offset
		});
	};

	$('a').click(function (event) {
		var href = $(this).attr("href");

		if(href.indexOf("#") == 0){
			var offset = parseInt($(href).attr("data-scroll-offset") || 0);
			
			event.preventDefault();

			$.scrollTo.window().queue([]).stop();
			
			scrollTo(href, offset);
		}

	});

	$.scrollTo("#cinnamon-seed", 100, function(){
		$("body").addClass("ready");
		$(".scroll-to-active-right-now").removeClass("scroll-to-active-right-now");
		$("#cinnamon-seed").addClass("scroll-to-active-right-now");
	});

	var lock = false;
	var unlockAction = function () {
		window.setTimeout(function () {
			lock = false;
		}, 1200)
	};

	var slidesArray = $("#cinnamon-seed, #cinnamon-plant, #cinnamon-routines, #cinnamon-outcomes, #cinnamon-download");
	slidesArray.each(function (index) {
		$(this).attr("data-slide-number", index);
	});
	
	$("html,body").on("mousewheel", function (event) {
		if(lock == false){
			var selectedSlide = $("#cinnamon-seed.scroll-to-active-right-now, #cinnamon-plant.scroll-to-active-right-now, #cinnamon-routines.scroll-to-active-right-now, #cinnamon-outcomes.scroll-to-active-right-now, #cinnamon-download.scroll-to-active-right-now").attr("data-slide-number");
			var nextSlide;
			var its_the_moment = false;

			// Scroll down
			if(event.deltaY < 0 && event.deltaY > -50){
				its_the_moment = true;
				selectedSlide++;
			}
			// Scroll up
			else if(event.deltaY > 0 && event.deltaY > 50){
				$("#scroll-up-indicator").addClass("fadeout");
				its_the_moment = true;
				selectedSlide--;
			}

			if(its_the_moment){
				nextSlide = slidesArray[selectedSlide];
				var offset = parseInt($(nextSlide).attr("data-scroll-offset") || 0);
				scrollTo(nextSlide, offset);
				lock = true;
				unlockAction();
			}
		}


	});


	window.setTimeout(function () {
		$("#scroll-up-indicator").removeClass("fadeout");
	}, 7000);

	// -- ENDS NAVIGATION CONTROLS




	// Flower cmd animation ========================

		var cinamonSmallPlant = Snap("#SmallFlowers");
		var cinnamonLittleFlowers = cinamonSmallPlant.selectAll(".ci-animated-flower");
		var cinnamonFlowersLinks = $(".cmd-flower-animate");
		// Hover effect on flowers
		cinnamonLittleFlowers.forEach(function(flower, index){
			flower.hover(function (event) {
				var cmdlinkclass = this.attr("data-cmdlink");
				cinnamonLittleFlowers.forEach(function (f, i) {
					f.addClass("ci-flower-blur");
					cinnamonFlowersLinks.removeClass("hover");
				});

				this.removeClass("ci-flower-blur");

				$("." + cmdlinkclass).addClass("hover");
			});

			flower.mouseout(function (event) {
				cinnamonFlowersLinks.removeClass("hover");
				cinnamonLittleFlowers.forEach(function (f, i) {
					f.removeClass("ci-flower-blur");
				});
			});
		});

		cinnamonFlowersLinks.on("mouseout", function(){
			cinnamonLittleFlowers.forEach(function (flower, index) {
				flower.removeClass("ci-flower-blur");
			});
		});
		cinnamonFlowersLinks.on("mouseover", function(){
			var flower_class = $(this).attr("data-flower-class");
			
			cinnamonLittleFlowers.forEach(function (flower, index) {
				flower.addClass("ci-flower-blur");
				// flower.addClass("ci-flower-stop-animation");
			});

			var flower = cinamonSmallPlant.select("." + flower_class);

			flower.removeClass("ci-flower-blur");
			// flower.removeClass("ci-flower-stop-animation");

		});

	// ====================================================================


	// cinnaphone carousel
	var cinnaphones = $("#cinnaphone .ci-presentation-phone");

	window.changeCinnaphoneSlide = function (index) {
		var element;

		if(index == "next"){
			element = $("#cinnaphone .ci-presentation-phone.active").next();
			if(element.length == 0)
				element = $("#cinnaphone .ci-presentation-phone.first");

			$("#cinnaphone-bullet").bullets("select", element.index() - 1);
		}else
			element = $(cinnaphones[index]);

		$(cinnaphones).removeClass("active");
		element.addClass("active");
	};


	// Custom email form
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
		$('#thankyou-message').removeClass('hidden');

		return false;
	});


	$("input[placeholder]").each(function (index) {
		$(this).val($(this).attr("placeholder"));
	});

	$("input[placeholder]").on("focus blur",function (event) {
		if($(this).val() == "")
			$(this).val($(this).attr("placeholder"));

	});

	$("input[placeholder]").focus(function(){
		if($(this).val() == $(this).attr("placeholder"))
			$(this).val("");
	});







	// FLOWER CORRECTIONS
	adjust = function (need_adjustment) {
		need_adjustment.forEach(function (element, index){
			var box = element.getBBox();
			var x = box.x;
			var y = box.y;

			var where = element.attr("data-origin") || "center center";

			switch(where){
				case "center center":
					x += (box.width / 2);
					y += (box.height / 2);
				break;
				case "bottom right":
					x += (box.width);
					y += (box.height);
				break;
			}

			element.attr("style", "transform-origin: " + x + "px " + y + "px;");
		});
	}

	var plant = Snap("#CIPrimaryPlantIllustrationSVG");
	var need_adjustment1 = plant.selectAll(".ci-need-adjustment");

	var plant = Snap("#CIPlantIllustration");
	var need_adjustment2 = plant.selectAll(".ci-need-adjustment");

	adjust(need_adjustment1);
	adjust(need_adjustment2);

});