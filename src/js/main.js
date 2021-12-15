$(document).ready(function () {
  $('.js-open-modal').on('click', function (e) {
    $('.layout').addClass('layout--show');
    $('body').addClass('body--fixed');
  });

  function modalClose() {
    $('.layout').removeClass('layout--show');
    $('body').removeClass('body--fixed');
  }

  $('.layout').click(function (e) {
    if(!$(e.target).closest('.modal').length && !$(e.target).is('.modal')) {
      modalClose();
    }
  });
  $('.modal__close').click(function (e) {
    modalClose();
  });

  $('.locale-dropdown').on('click', function (e) {
    $(this).toggleClass('locales__item--active').find('.locale-dropdown__list').toggleClass('locale-dropdown__list--expanded');
  });

  $('body').click(function (e) {
    if(!$(e.target).closest('.locale-dropdown').length && !$(e.target).is('.locale-dropdown')) {
      $('.locale-dropdown').removeClass('locales__item--active')
      $('.locale-dropdown__list').removeClass('locale-dropdown__list--expanded');
    }
  });

  $('textarea.text-field').on('focus blur', function (e) {
    $(this).toggleClass('text-field--expanded');
  });

  /*var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    //slidesPerGroup: 3,
    loop: true,
    //loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });*/

  $('.js-slider').slick({
    centerMode: true,
    variableWidth: true,
    //customPaging: '60px',
    //centerPadding: '60px',
    slidesToShow: 3,
    focusOnSelect: true,
    //arrows: true,
    appendArrows: $('.custom-slider__nav'),
    dots: true,
    dotsClass: 'slick-dots',
    appendDots: $('.custom-slider__nav'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          //dots: false
        }
      }
    ]
  });

  $('.js-slider-mob').slick({
    mobileFirst: true,
    centerMode: true,
    //variableWidth: true,
    centerPadding: 0,
    slidesToShow: 1,
    appendArrows: $('.marketing__nav'),
    dots: true,
    dotsClass: 'slick-dots',
    appendDots: $('.marketing__nav'),
    responsive: [
      {
        breakpoint: 1025,
        settings: "unslick"
      }
    ]
  });
});

/*document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type     : 'loop',
    width   : '30vw',
    focus    : 'center',
    autoWidth: true,
  } );

  splide.mount();
} );*/
