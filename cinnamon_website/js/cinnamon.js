
$(document).ready(function () {

	var scrollTo = function (href, offset) {
		$.scrollTo($(href), 1000, {
			onAfter: function () {
				// window.location.hash = href;
			},
			offset: offset
		});
	};

	$('#TopNavigation a').click(function (event) {
		var href = $(this).attr("href");
		var offset = parseInt($(href).attr("data-scroll-offset") || 0);

		if(href.indexOf("#") == 0){
			event.preventDefault();

			scrollTo(href, offset);
		}

	});

	scrollTo("#cinnamon-seed", 0);


	// Flower cmd animation
	var cinamonSmallPlant = Snap("#SmallFlowers");
	var cinnamonLittleFlowers = cinamonSmallPlant.selectAll(".ci-animated-flower");

	$(".cmd-flower-animate").on("mouseout", function(){
		cinnamonLittleFlowers.forEach(function (flower, index) {
			flower.removeClass("ci-flower-blur");
			// flower.addClass("ci-flower-stop-animation");
		});
	});
	$(".cmd-flower-animate").on("mouseover", function(){
		var flower_class = $(this).attr("data-flower-class");
		
		cinnamonLittleFlowers.forEach(function (flower, index) {
			flower.addClass("ci-flower-blur");
			// flower.addClass("ci-flower-stop-animation");
		});

		var flower = cinamonSmallPlant.select("." + flower_class);

		flower.removeClass("ci-flower-blur");
		// flower.removeClass("ci-flower-stop-animation");

	});



	// cinnaphone carousel
	var cinnaphones = $("#cinnaphone .ci-presentation-phone");

	window.changeCinnaphoneSlide = function (index) {
		$(cinnaphones).removeClass("active");
		$(cinnaphones[index]).addClass("active");
	};

	var time = window.setInterval(function () {
	}, 5000);
});