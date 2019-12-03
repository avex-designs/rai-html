import './vendor';

$('.dropdown-button').on('click', (e) => {
  let $dropdown = $(e.currentTarget).parent();

  $dropdown.toggleClass('is-open');
  $dropdown.find('.dropdown-content').slideToggle();
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
