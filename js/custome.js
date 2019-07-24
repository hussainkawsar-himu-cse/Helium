/*scrollbar script*/
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 300) {
        $('.scroll-nav').addClass('fixed');
    } else {
        $('.scroll-nav').removeClass('fixed');
    }
});





/*animated*/
new WOW().init();




/*owl carusel script*/
$('.team-carusel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoplayTimeout:3000,
    autoplay:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})




/*news-carusel*/
$('.news-carusel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
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
})




