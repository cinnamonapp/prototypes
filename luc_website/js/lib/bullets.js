
;(function ($) {

	var selectBullet = function (array, index) {
		array.removeClass("active");
		$(array[index]).addClass("active");
	};

	$.fn.bullets = function (action, value, properties) {
		var children = this.find(".bullet");

		if(value === undefined)
			value = null;
		if(properties === undefined)
			properties = {};

		if(action == "select")
			selectBullet(children, value);

		console.log(this);
	};
}(jQuery))

$(document).ready(function() {

	var bullet_toggle_radio_groups = $(".bullet-group.bullet-toggle-radio");

	bullet_toggle_radio_groups.each(function eachBulletToggleRadioGroupF (index) {
		var group = $(this);

		var bullets = group.find(".bullet");

		bullets.click(function onBulletClickF (event) {
			var bullet = $(this);

			bullets.removeClass("active");
			bullet.addClass("active");
		});
	});

});
