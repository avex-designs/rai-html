import './vendor';
import './stock-prices';

// Dropdown ///////////////////////

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

// Burger-menu ///////////////////////

$('.header__burger').on('click', () => {
  $('.header__close, .header__nav').addClass('is-active');
});

$('.header__close').on('click', () => {
  $('.header__close, .header__nav').removeClass('is-active');
});

// Header Search ///////////////////////

$('.header__search-button').on('click', () => {
  $('.header__search').toggleClass('is-active');
});

// Popups ///////////////////////

$('.js-open-popup').on('click', (e) => {
  $(document).find(`.popup[data-popup="${$(e.currentTarget).data('popup')}"]`).fadeIn();
});

$('.js-close-popup').on('click', (e) => {
  $(e.currentTarget).closest('.popup').fadeOut();
});

// Article-tabs ///////////////////////

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

// Slider ///////////////////////

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

// Only mobile slider ///////////////////////

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

// Article reading ///////////////////////

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

// Years timeline ///////////////////////

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

// Awwards hover to show info ///////////////////////

$('.awwards__item').on('mouseover', (e) => {
  if (innerWidth > 767) {
    let $this = $(e.currentTarget);

    $('.awwards__item').not($this).addClass('not-active');
    $('.awwards__textblock p').text($this.find('.awwards__item__textblock p').text());
    $('.awwards__textblock a').attr('href', $this.find('.awwards__item__textblock a').attr('href')).text($this.find('.awwards__item__textblock a').text());

    setTimeout(() => {
      $this.addClass('is-active');

      setTimeout(() => {
        $('.awwards__textblock').addClass('is-active');
      }, 100);
    }, 300);
  }
});

$('.awwards').on('mouseleave', () => {
  if (innerWidth > 767) {
    $('.awwards__textblock').removeClass('is-active');

    setTimeout(() => {
      $('.awwards__item').removeClass('is-active');

      setTimeout(() => {
        $('.awwards__item').removeClass('not-active');
      }, 100);
    }, 300);
  }
});

// To top button ///////////////////////

$('.to-top').on('click', () => {
  $(document.documentElement).add(document.body).animate({
    scrollTop: 0,
  }, 400);
});

// Styling select ///////////////////////

$(window).on('load', () => {
  $('select').selectric({
    maxHeight: 200,
  });
});

// Stories tabs ///////////////////////

$('.stories__buttons button').on('click', (e) => {
  let $this = $(e.currentTarget);
  let tabName = $this.data('tab');
  let $activeTab = $this.closest('.stories').find('.stories__tab.is-active');
  let $nextTab = $this.closest('.stories').find(`.stories__tab[data-tab="${tabName}"]`);
  let $activeButton = $this.parent().find('button.is-active');
  let text = $this.find('.stories__button__text').text();

  $('.stories__button-mobile').removeClass('is-active');

  $activeTab.fadeOut(() => {
    $activeTab.removeClass('is-active');
    $nextTab.fadeIn(() => {
      $nextTab.addClass('is-active');
    });

    $this.addClass('is-active');
  });

  $activeButton.removeClass('is-active');

  if (innerWidth < 992) {
    $('.stories__buttons').slideUp(400);
    $('.stories__button-mobile').text(text);
  }
});

$('.stories__button-mobile').on('click', (e) => {
  $(e.currentTarget).addClass('is-active');
  $('.stories__buttons').slideToggle(400);
});

// Library popups ///////////////////////

$('.js-show-image').on('click', (e) => {
  let $parent = $(e.currentTarget).closest('.library__item');
  let image = $parent.data('image');
  let link = $parent.find('a').attr('href');

  let $popup = $(document).find('.image-popup');

  $popup.find('img').attr('src', image);
  $popup.find('a').attr('href', link);
  $popup.fadeIn();
});

$('.js-image-popup__close').on('click', (e) => {
  $(e.currentTarget).closest('.image-popup').fadeOut();
});

// Press Releases ///////////////////////

$('.article-list__years li a').on('click', (e) => {
  let year = $(e.currentTarget).data('year');

  $('.article-list__years li').removeClass('is-active');
  $(e.currentTarget).parent().addClass('is-active');

  if (year !== 'all') {
    $('.article-list__years-container').find('.article-list__item').hide();
    $('.article-list__years-container').find(`.article-list__item[data-year="${year}"]`).show();
  } else {
    $('.article-list__years-container').find('.article-list__item').show();
  }
});

// PScroll To Block ///////////////////////

$('[data-scroll-link]').on('click', (e) => {
  let link = $(e.currentTarget).data('scroll-link');
  let $block = $(document).find(`[data-scroll-block="${link}"]`);
  let offsetTop = $block.offset().top;

  $(document.documentElement).add(document.body).animate({
    scrollTop: offsetTop,
  }, 400);
});
