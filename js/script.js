
// Menu a tendina a scomparsa!

var toggleTrigger = $('.toggle-menu');

var aperto = true;

toggleTrigger.click(function(){

  $(toggleTrigger).next().hide();
  $(this).next().toggle();
  aperto = false;
  console.log(aperto)
});


if (aperto == true) {
  toggleTrigger.mouseenter (function() {
    $(this).next().toggle();
  });

  toggleTrigger.mouseleave (function() {
    $(this).next().toggle();
  });
}
