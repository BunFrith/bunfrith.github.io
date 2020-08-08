$(function () {

   if ($('.doctors-slider').length) {
      $('.doctors-slider').slick({
         slidesToShow: 2,
         appendArrows: $('.doctors-slider-nav'),
         dots: true,
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 1,
               }
            },
         ]
      });
   }

   if ($('.other-slider').length) {
      $('.other-slider').slick({
         slidesToShow: 3,
         appendArrows: $('.other-slider-nav'),
         dots: true,
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 2,
               }
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 1,
               }
            },
         ]
      });
   }

   if ($('.equip-slider').length) {
      $('.equip-slider').slick({
         slidesToShow: 1,
         appendArrows: $('.equip-slider-nav'),
         dots: true,
      });
   }

   if ($('.atts-menu').length) {
      $('.atts-menu__main-item.has-child').click(function () {
         $('.atts-menu__main-item').removeClass('active');
         $(this).addClass('active');
         $('.atts-menu__sub ul').removeClass('active');
         $('.atts-menu__sub ul').eq($(this).index()).addClass('active');
      });
   }

   if ($('.docmenu-tabs').length) {
      $('.docmenu-tabs__item').click(function () {
         $('.docmenu-tabs__item').removeClass('active');
         $(this).addClass('active');
         $('.docmenu-content__item').removeClass('active');
         $('.docmenu-content__item').eq($(this).index()).addClass('active');
      });
   }

   if ($('.works-slider').length) {
      $('.works-slider').slick({
         slidesToShow: 3,
         appendArrows: $('.works-slider-nav'),
         dots: true,
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 2,
               }
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 1,
               }
            },
         ]
      });
   }


   // Dunno script below
   $('.info-text-list').click(function (event) {
      event.preventDefault();
      $('.one-list').toggleClass('display-block');
   });
   $('.two-text-list').click(function (event) {
      event.preventDefault();
      $('.two-list').toggleClass('display-block');
   });
   $('.three-text-list').click(function (event) {
      event.preventDefault();
      $('.three-list').toggleClass('display-block');
   });
   $('.five-text-list').click(function (event) {
      event.preventDefault();
      $('.five-list').toggleClass('display-block');
   });
   $('.six-text-list').click(function (event) {
      event.preventDefault();
      $('.six-list').toggleClass('display-block');
   });
   $('.serv-menu').click(function (event) {
      event.preventDefault();
      $('.pod-menu').toggleClass('display-block');
   });
   $('.pod-menu').mouseout(function (event) {
      event.preventDefault();
      $('.pod-menu').toggleClass('display-block');
   });
   $('.acvapart').click(function (event) {
      event.preventDefault();
      $('.three').toggleClass('display-block');
   });
   $('.three').mouseout(function (event) {
      event.preventDefault();
      $('.three').toggleClass('display-block');
   });
   $('.inection').click(function (event) {
      event.preventDefault();
      $('.four').toggleClass('display-block');
   });
   $('.four').mouseout(function (event) {
      event.preventDefault();
      $('.four').toggleClass('display-block');
   });
   $('.telo').click(function (event) {
      event.preventDefault();
      $('.five').toggleClass('display-block');
   });
   $('.five').mouseout(function (event) {
      event.preventDefault();
      $('.five').toggleClass('display-block');
   });
   $('.face').click(function (event) {
      event.preventDefault();
      $('.six').toggleClass('display-block');
   });
   $('.six').mouseout(function (event) {
      event.preventDefault();
      $('.six').toggleClass('display-block');
   });
   $('.search').click(function (event) {
      event.preventDefault();
      $('.search-input').toggleClass('display-block');
   });

   $('ul.nav li.dropdown').hover(function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
   }, function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
   });
   $('ul.nav-two li.dropdown-two').hover(function () {
      $(this).find('.dropdown-menu-two').stop(true, true).delay(200).fadeIn();
   }, function () {
      $(this).find('.dropdown-menu-two').stop(true, true).delay(200).fadeOut();
   });


   $('.search').hover(function () {
      $(this).find('.search-input').stop(true, true).delay(200).fadeIn();
   }, function () {
      $(this).find('.search-input').stop(true, true).delay(200).fadeOut();
   });

   $('.maps').hover(function () {
      $(this).find('.maps-block').stop(true, true).delay(200).fadeIn();
   }, function () {
      $(this).find('.maps-block').stop(true, true).delay(200).fadeOut();
   });

   $('.call-request').click(function () {
      $('.modal-background').show('');
   });
   $('.esc').click(function () {
      $('.modal-background').hide('');
   });
   $('.btn').click(function () {
      $('.modal-background-order').show('');
   });
   $('.esc').click(function () {
      $('.modal-background-order').hide('');
   });

   $('.dropdown-three').hover(function () {
      $(this).find('.dropdown-menu-two').stop(true, true).delay(200).fadeIn();
   }, function () {
      $(this).find('.dropdown-menu-two').stop(true, true).delay(200).fadeOut();
   });

});