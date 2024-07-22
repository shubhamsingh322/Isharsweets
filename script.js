//Slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:6000,
    stagePadding:0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1400:{
            items:3
        }
    }
})


/* Cursor */
$(".nav-mobile-button").click(function() {
  $('.nav-mobile-bar').toggleClass('active');
  $('.nav-mobile-menu').toggleClass('active');
  
});