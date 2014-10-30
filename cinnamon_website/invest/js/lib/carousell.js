$(document).ready(function () {
  $(".carousell .carousell-control").click(function (event) {

    var parent = $(this).parent();

    var children = $(parent).find(".carousell-slide");
    var activeChild = $(parent).find(".carousell-slide.solid.active");

    var nextChild = activeChild.next();
    

    console.log(nextChild);
  });
});
