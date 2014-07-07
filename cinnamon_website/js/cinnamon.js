
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

	cinamonSmallPlant.select(".ci-windy").addClass("ci-flower-stop-animation");

	$(".cmd-flower-animate").on("mouseover", function(){
		var flower_class = $(this).attr("data-flower-class");
		
		cinnamonLittleFlowers.forEach(function (flower, index) {
			flower.addClass("ci-flower-blur");
			flower.addClass("ci-flower-stop-animation");
		});

		var flower = cinamonSmallPlant.select("." + flower_class);

		flower.removeClass("ci-flower-blur");
		flower.removeClass("ci-flower-stop-animation");

	});



	// cinnaphone carousel
	var cinnaphones = $("#cinnaphone .ci-presentation-phone");

	var time = window.setInterval(function () {
		var activephone = $("#cinnaphone .ci-presentation-phone.active");
		console.log(activephone);
		cinnaphones.removeClass("active");

		if(activephone.hasClass("last"))
			$("#cinnaphone .ci-presentation-phone.first").addClass("active")
		else
			activephone.next().addClass("active");
	}, 5000);
});