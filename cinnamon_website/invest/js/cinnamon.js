
$(document).ready(function () {

  $(".show-after-preload").on('progress', function(event) {
      
      var vid = this;
      var percent = null;

      if (vid.buffered.length > 0 && vid.buffered.end && vid.duration) {
          percent = vid.buffered.end(0) / vid.duration;
      } else if (vid.bytesTotal != undefined && vid.bytesTotal > 0 && vid.bufferedBytes != undefined) {
          percent = vid.bufferedBytes / vid.bytesTotal;
      }

      if (percent !== null) {
          percent = 100 * Math.min(1, Math.max(0, percent));

          if(percent > 80){
            vid.style.opacity = 1;
            vid.play();
          }
      }
  });


});
