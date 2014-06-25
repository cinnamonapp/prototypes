
$(document).ready(function () {
	$('a').click(function(){
	    $.scrollTo($($.attr(this, 'href')), 1000);
	    return false;
	});

});