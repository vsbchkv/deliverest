$(document).ready(function () {
  $('.js-open-modal').on('click', function (e) {
    $('.layout').addClass('show');
    $('body').addClass('body--fixed');
  });

  function modalClose() {
    $('.layout').removeClass('show');
    $('body').removeClass('body--fixed');
  }

  $('.layout, .modal__close').click(function (e) {
    if(!$(e.target).closest('.modal').length && !$(e.target).is('.modal')) {
      modalClose();
    }
  });
  $('.modal__close').click(function (e) {
    modalClose();
  });

  $('textarea.text-field').on('focus blur', function (e) {
    $(this).toggleClass('text-field--expanded');
  });
});
