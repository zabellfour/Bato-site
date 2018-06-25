

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    $('.heading-slider').owlCarousel({
      loop:true,
      nav:false, 
      items: 1,
      dots: false
    });

  });

})(jQuery);