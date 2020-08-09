$('.hamburger').on('click', function(){
    $('html').toggleClass('bof');
    $('.menu-mobile').toggleClass('mobileShow')
 });




 $('.slider').slick({
      dots: true,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true

  });