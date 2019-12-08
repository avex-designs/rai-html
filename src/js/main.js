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

$('.article-list__tabs-buttons button').on('click', (e) => {
  let $this = $(e.currentTarget);
  let tabName = $this.data('tab');
  let $activeTab = $this.closest('.article-list__tabs').find('.article-list__tab.is-active');
  let $nextTab = $this.closest('.article-list__tabs').find(`.article-list__tab[data-tab="${tabName}"]`);
  let $activeButton = $this.parent().find('button.is-active');

  $activeTab.fadeOut(() => {
    $activeTab.removeClass('is-active');
    $nextTab.fadeIn(() => {
      $nextTab.addClass('is-active');
    });

    $this.addClass('is-active');
  });

  $activeButton.removeClass('is-active');
});
