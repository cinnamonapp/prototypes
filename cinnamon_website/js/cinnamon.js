
$(document).ready(function () {

	var scrollTo = function (href, offset) {
		$.scrollTo($(href), 1000, {
			onAfter: function () {
				// window.location.hash = href;
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

	scrollTo("#cinnamon-seed", 0);


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
});