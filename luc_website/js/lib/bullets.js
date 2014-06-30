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
