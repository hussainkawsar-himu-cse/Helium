    /*counter-up*/
    jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });


    /*animated*/
    new WOW().init();




    /*scrollbar script*/
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('.scroll-nav').addClass('fixed');
        } else {
            $('.scroll-nav').removeClass('fixed');
        }
    });





  


      


    /*testimonial-carousel*/
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        nav:true,
        responsive:{
            0:{
                items:1
            }     
        }
    })

     

       
      //images
        $('.test-popup-link').magnificPopup({
          type: 'image'
          // other options
        });

        

        //video
        $(document).ready(function() {
          $('.vidplay').magnificPopup({
            type:'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                          '<div class="mfp-close"></div>'+
                          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '</div>',
                patterns: {
                  youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
                  }
                },
                srcAction: 'iframe_src', 
              }
          });
        });














        //***ISOTOPE***
        // init Isotope
		$('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-sizer'
		  }
		})

        // filter items on button click



        // change is-checked class on buttons

    //***ISOTOPE***
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry'
    });

    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });


    // change is-checked class on buttons
    $('.btn-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });
