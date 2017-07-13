$('.carousel.carousel-slider').carousel({fullWidth: true});

 $('.carousel').carousel('next');
$('.carousel').carousel('next', 4);


autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
     setTimeout(autoplay, 4500);
 }



  $('.carousel.carousel-slider').carousel({fullWidth: true});