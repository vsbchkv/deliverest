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
});
