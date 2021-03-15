
// Menu a tendina a scomparsa!

var toggleTrigger = $('.toggle-menu');


toggleTrigger.mouseenter (function() {

  $(this).children(".nav-menu").toggle();
});

toggleTrigger.mouseleave (function() {

  $(this).children(".nav-menu").toggle();
});



//TEST SOLUZIONE AVANZATA
// Provo a definire delle variabili di controllo per fissare l'apertura dei pannelli al click.
//Una volta cliccato, la funzione hover è temporaneamente disabilitata fino al click successivo.

// var toggleTrigger = $('.toggle-menu');
// var aperto = true;
//
// toggleTrigger.click(function(){
//   toggleTrigger.children(".nav-menu").hide();
//
// if (aperto == false) {
//   $(this).children(".nav-menu").hide();
//
// } else {
//   $(this).children(".nav-menu").show();
//
// }
// aperto = !aperto;
// });
//
// toggleTrigger.mouseenter (function() {
//   if (aperto == true) {
//     $(this).children(".nav-menu").show();
//   }
// });
// toggleTrigger.mouseleave (function() {
//   if (aperto == true) {
//     $(this).children(".nav-menu").hide();
//   }
// });
