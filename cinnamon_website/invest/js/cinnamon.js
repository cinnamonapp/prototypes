
$(document).ready(function (event) {
  $("[data-action-spoiler]").each(function (index) {
    var target = $($(this).attr("data-action-spoiler"));
    var originalHeight = target.height();
    var initiator = $(this);

    target.height(0);

    initiator.click(function (event) {

      event.preventDefault();
      if($(this).attr("data-spoiler-remove-after-use") == "true")
        $(this).css("display", "none");
      if(target.height() == 0)
        target.height(originalHeight);
      else
        target.height(0);
    });
  });

  $(".show-after-preload").each(function (index) {
    $(this).addClass("enter");
    this.play();
  })

  var scrollTo = function (href, offset) {
    $.scrollTo($(href), 1000, {
      onAfter: function () {
        window.location.hash = href;
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

});

setTimeout(function () {

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("video").remove();
  }

  var calculatePercentage = function (video) {
    var vid = video;
    var percent = null;

    if (vid.buffered.length > 0 && vid.buffered.end && vid.duration) {
        percent = vid.buffered.end(0) / vid.duration;
    } else if (vid.bytesTotal != undefined && vid.bytesTotal > 0 && vid.bufferedBytes != undefined) {
        percent = vid.bufferedBytes / vid.bytesTotal;
    }

    percent = 100 * Math.min(1, Math.max(0, percent));

    return percent;

  };

  $(".show-after-preload").on('progress', function(event) {
    var vid = this;
    var percent = calculatePercentage(vid);
    var minpercentage = Math.floor($(vid).attr("data-min-percentage") || 80);

    console.log(vid.src.split("/")[vid.src.split("/").length - 1] + ": " + percent + "%");

    if (percent !== null) {
      if(percent > minpercentage && !$(vid).hasClass("enter")){
        console.warn("### Now showing >>>> " + vid.src.split("/")[vid.src.split("/").length - 1]);
        $(vid).addClass("enter");
        vid.play();
      }
    }
  });



}, 500);

setTimeout(function () {
  $(".load-after-5sec").attr("src", function(){ return $(this).attr("data-video-src"); });
  $(".load-after-5sec").each(function () {
    this.load();
  });
}, 5000);
