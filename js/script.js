$(function() {
  $('input[name="toggle"]').on('click', function(e) {
    $('html').animate({
      scrollTop: $("#jobs").offset().top
    }, 500);
  });
});
