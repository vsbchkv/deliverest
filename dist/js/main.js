$(document).ready(function () {
  $('.js-open-modal').on('click', function (e) {
    $('.layout').addClass('layout--show');
    $('body').addClass('body--fixed');
  });

  function modalClose() {
    const ismobileContactsOpen = $('#header-burger').hasClass("header__burger--open")
    $('.layout').removeClass('layout--show');
    if (!ismobileContactsOpen) {
      $('body').removeClass('body--fixed');
    }
  }

  $('.layout').click(function (e) {
    if (!$(e.target).closest('.modal').length && !$(e.target).is('.modal')) {
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
    if (!$(e.target).closest('.locale-dropdown').length && !$(e.target).is('.locale-dropdown')) {
      $('.locale-dropdown').removeClass('locales__item--active')
      $('.locale-dropdown__list').removeClass('locale-dropdown__list--expanded');
    }
  });

  $('textarea.text-field').on('focus blur', function (e) {
    $(this).toggleClass('text-field--expanded');
  });

  function sliderOptions(nav) {
    return {
      centerMode: true,
      variableWidth: true,
      //customPaging: '60px',
      //centerPadding: '60px',
      slidesToShow: 3,
      focusOnSelect: true,
      appendArrows: nav,
      dots: true,
      dotsClass: 'slick-dots',
      appendDots: nav,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }
  }

  $('.js-slider').slick(sliderOptions($('.custom-nav1')));
  $('.js-slider2').slick(sliderOptions($('.custom-nav2')));

  $('.js-slider-mob').slick({
    mobileFirst: true,
    centerMode: true,
    adaptiveHeight: true,
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

  $('.chosen-select').chosen({width: '100%', disable_search: true});

  $('.chosen-select').on('change', function(event, params) {
    $(this).next('.chosen-container').addClass('updated');
    // can now use params.selected and params.deselected
  });
  $('.chosen-select').on('focus', function(event) {
    $(this).trigger('chosen:activate');
  });

  // mobile-contacts
  const headerBurger = document.getElementById('header-burger');
  headerBurger.addEventListener('click', mobileContacts);

  function mobileContacts() {
    const mobileContacts = document.getElementById('mobile-contacts');
    const body = $('body');
    headerBurger.classList.toggle('header__burger--open');
    mobileContacts.classList.toggle('mobile-contacts--open');
    body.classList.toggle('body--fixed');
  }
});

$(window).resize(function(){
  $('.js-slider')[0].slick.refresh();
  $('.js-slider2')[0].slick.refresh();
});

$(window).resize(function(){ // works only in new eventListener
  $('.js-slider-mob').slick('resize');
});

$(window).on('orientationchange', function() {
  $('.js-slider-mob').slick('reinit');
});
