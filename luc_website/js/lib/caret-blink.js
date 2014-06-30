$(document).ready(function() {


	var caretContainers = $(".custom-caret");

	caretContainers.each(function caretContainerBlockF () {
		var caretContainer = $(this);
		var sentinel; 

		var substitute  = caretContainer.find(".input-substitute");
		var input       = caretContainer.find(".form-control");

		var placeholder = substitute.html();

		input.keyup(function copyFromTextToSubstituteF (key) {
		
			var newvalue = input.val().replace(/\n/g, "<br>").replace(/\s/g, "&nbsp;");

			if(key.which == 32)
				newvalue += "&nbsp;"

			if(newvalue !== ""){
				substitute.removeClass("placeholder");
				substitute.html(newvalue);
			}else{
				substitute.addClass("placeholder");
				substitute.html(placeholder);
			}
		});

		input.focus(function (){
			substitute.addClass("active");
		});
		input.blur(function (){
			substitute.removeClass("active");
		});
	});

});
