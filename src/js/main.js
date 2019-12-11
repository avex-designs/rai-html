import './vendor';

$('.js-dropdown-button').on('click', (e) => {
  let $dropdown = $(e.currentTarget).parent();

  $dropdown.toggleClass('is-open');
  $dropdown.find('.js-dropdown-content').slideToggle();
});

$('.js-dropdown-button-tablet').on('click', (e) => {
  if (innerWidth < 992) {
    let $dropdown = $(e.currentTarget).parent();

    $dropdown.toggleClass('is-open');
    $dropdown.find('.js-dropdown-content-tablet').slideToggle();
  }
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

$('.js-slider').each((index, element) => {
  let $this = $(element);
  let sliderInfinite = $this.data('infinite') !== undefined ? $this.data('infinite') : false;
  let sliderArrows = $this.data('arrows') !== undefined ? $this.data('arrows') : true;
  let sliderDots = $this.data('dots') !== undefined ? $this.data('dots') : false;
  let slidesToShowDesktop = $this.data('slides-desktop') !== undefined ? $this.data('slides-desktop') : 4;
  let slidesToShowTablet = $this.data('slides-tablet') !== undefined ? $this.data('slides-tablet') : 2;
  let slidesToShowMobile = $this.data('slides-mobile') !== undefined ? $this.data('slides-mobile') : 1;
  let sliderSpeed = $this.data('speed') !== undefined ? $this.data('speed') : 500;
  let sliderAutoPlay = $this.data('autoplay') !== undefined ? $this.data('autoplay') : false;
  let sliderAutoPlaySpeed = $this.data('autoplay-speed') !== undefined ? $this.data('autoplay-speed') : 2000;

  $this.slick({
    infinite: sliderInfinite,
    slidesToShow: slidesToShowDesktop,
    slidesToScroll: 1,
    arrows: sliderArrows,
    dots: sliderDots,
    autoplay: sliderAutoPlay,
    speed: sliderSpeed,
    autoplaySpeed: sliderAutoPlaySpeed,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: slidesToShowTablet,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: slidesToShowMobile,
        },
      },
    ],
  });
});

$('.js-slider-mobile').each((index, element) => {
  if (innerWidth < 768) {
    let $this = $(element);
    let sliderInfinite = $this.data('infinite') !== undefined ? $this.data('infinite') : false;
    let sliderArrows = $this.data('arrows') !== undefined ? $this.data('arrows') : true;
    let sliderDots = $this.data('dots') !== undefined ? $this.data('dots') : false;
    let slidesToShowDesktop = $this.data('slides-desktop') !== undefined ? $this.data('slides-desktop') : 4;
    let slidesToShowTablet = $this.data('slides-tablet') !== undefined ? $this.data('slides-tablet') : 2;
    let slidesToShowMobile = $this.data('slides-mobile') !== undefined ? $this.data('slides-mobile') : 1;
    let sliderSpeed = $this.data('speed') !== undefined ? $this.data('speed') : 500;
    let sliderAutoPlay = $this.data('autoplay') !== undefined ? $this.data('autoplay') : false;
    let sliderAutoPlaySpeed = $this.data('autoplay-speed') !== undefined ? $this.data('autoplay-speed') : 2000;

    $this.slick({
      infinite: sliderInfinite,
      slidesToShow: slidesToShowDesktop,
      slidesToScroll: 1,
      arrows: sliderArrows,
      dots: sliderDots,
      autoplay: sliderAutoPlay,
      speed: sliderSpeed,
      autoplaySpeed: sliderAutoPlaySpeed,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: slidesToShowTablet,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: slidesToShowMobile,
          },
        },
      ],
    });
  }
});

$('.article-reading__item').on('click', (e) => {
  if (innerWidth > 991) {
    let $this = $(e.currentTarget);
    let $clone = $this.find('.article-reading__item__content').html();
    let $container = $this.closest('.article-reading');
    let $display = $container.find('.article-reading__display__container');

    $container.find('.article-reading__item.is-active').removeClass('is-active');
    $this.addClass('is-active');

    $display.fadeOut(400, () => {
      $display.html($clone);
      $display.fadeIn(400);
    });
  }
});

$('.js-timeline-year').on('click', (e) => {
  let $this = $(e.currentTarget);
  let data = $this.data('year');
  let $parent = $this.closest('.timeline');
  let $currentContent = $parent.find(`.js-timeline-content[data-year="${data}"]`);
  let $pastContent = $parent.find('.js-timeline-content.is-active');

  $('.js-timeline-year').removeClass('is-active');
  $this.addClass('is-active');
  $pastContent.fadeOut(() => {
    $pastContent.removeClass('is-active');
    $currentContent.fadeIn(() => {
      $currentContent.addClass('is-active');
    });
  });
});
