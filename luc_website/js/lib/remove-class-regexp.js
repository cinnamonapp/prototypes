(function ($) {
    $.fn.removeClassRegExp = function (regexp) {
        if(regexp && (typeof regexp==='string' || typeof regexp==='object')) {
            regexp = typeof regexp === 'string' ? regexp = new RegExp(regexp) : regexp;

            $(this).each(function () {
                var classList = $(this).attr("class").split(" ");

                // For each class
                $(this).attr("class", classList.map(function(classe){
                    // If positive match - delete class
                    if(classe.match(regexp) !== null){
                        return "";
                    }else{
                        return classe.trim();
                    }
                }).join(" ").trim());
            });
        }
        return this;
    };
})(jQuery);


(function ($) {
    $.fn.hasClassRegExp = function (regexp) {
        if(regexp && (typeof regexp==='string' || typeof regexp==='object')) {
            regexp = typeof regexp === 'string' ? regexp = new RegExp(regexp) : regexp;
            
            var response = false;

            $(this).each(function () {
                var classList = $(this).attr("class").split(" ");
                // For each class
                $.each(classList, function(){
                    var classe = this.toString();
                    // If positive match - delete class
                    if(classe.match(regexp) !== null)
                        response = true;
                });

            });
        }
        return response;
    };
})(jQuery);
