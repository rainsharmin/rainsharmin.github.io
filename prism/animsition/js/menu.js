$(function() {
  
  $(".menu-link").hover(function(){
  $(".hamburger-inner").css("background-color", "#fff");
  }, function(){
  $(".menu-line").css("background-color", "#999");
	});

  $(".hamburger").click(function(e) {
    $(".hamburger").toggleClass("is-active");

    $(".button-bg-slide").toggleClass("open");
    $("nav").toggleClass("open");
    $(".menu-overlay").toggleClass("open");	
    $(".hamburger-inner").toggleClass("open");

    $(".menu-content").toggleClass("open");   
});

});


$( document ).on( 'keydown', function ( e ) {
    if ( (e.keyCode === 27) && ($("nav").hasClass("open")) ) { // ESC
      $(".button-bg-slide").toggleClass("open");
  	  $("nav").toggleClass("open");
  	  $(".menu-overlay").toggleClass("open");	
  	  $(".menu-line").toggleClass("open");
  	  $(".menu-link").toggleClass("open");
  	  $(".menu-content").toggleClass("open"); 
  	  
  	  $hamburger.toggleClass("is-active");

      }
});

