$(document).ready(function(){ 
  
  $('.owl-testimonials').owlCarousel({
    loop:true,
    margin:66,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });

  var owlTestim = $('.owl-testimonials');

  // owl.owlCarousel();
  // Go to the next item
  $('.owl-next').click(function() {
    owlTestim.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.owl-prev').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owlTestim.trigger('prev.owl.carousel', [300]);
  });

  $('.owl-us').owlCarousel({
    items:6,
    loop: true,
    margin: 30,
    autoHeight: true,
	  nav: false,
    dots:false,
	  autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true
  });
});
