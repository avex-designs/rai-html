import './vendor';

$('.js-dropdown-button').on('click', (e) => {
  let $dropdown = $(e.currentTarget).parent();

  $dropdown.toggleClass('is-open');
  $dropdown.find('.js-dropdown-content').slideToggle();
});

$('.header__burger').on('click', () => {
  $('.header__close, .header__nav').addClass('is-active');
});

$('.header__close').on('click', () => {
  $('.header__close, .header__nav').removeClass('is-active');
});

$('.header__search-button').on('click', () => {
  $('.header__search').toggleClass('is-active');
});

$('.js-open-popup').on('click', (e) => {
  $(document).find(`.popup[data-popup="${$(e.currentTarget).data('popup')}"]`).fadeIn();
});

$('.js-close-popup').on('click', (e) => {
  $(e.currentTarget).closest('.popup').fadeOut();
});
