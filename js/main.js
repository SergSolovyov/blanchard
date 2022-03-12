(() => {
  // dropdowns
  const btnMenu = document.querySelectorAll('.menu-btn');
  const menu = document.querySelectorAll('.menu-item__inner');

  btnMenu.forEach(btn => {

    btn.addEventListener('click', (e) => {
      const path = btn.dataset.dropbtn;

      if (btn.classList.contains('open')) {
        btn.classList.remove('open');
        document.querySelector(`[data-dropmenu="${path}"]`).classList.remove('open');
        return
      }

      btnMenu.forEach(r => r.classList.remove('open'));
      btn.classList.add('open');

      menu.forEach(dropdown => {
        dropdown.classList.remove('open');
      });

      document.querySelector(`[data-dropmenu="${path}"]`).classList.add('open');

    })
  })

  menu.forEach(dropdown => {
    dropdown.addEventListener('click', e => {
      e._dropdownIsOpen = true;
    })
  })

  document.addEventListener('click', e => {
    function checkBtnMenu(arr) {
      for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == (e.target)) {
          return true;
        };
      };
    };

    if (!e._dropdownIsOpen && !checkBtnMenu(btnMenu) ) {
      menu.forEach(dropdown => dropdown.classList.remove('open'));
      btnMenu.forEach(dropdown => dropdown.classList.remove('open'));
      flag = false;
    }
  })

  // hero-swiper
  const swiperHero = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    allowTouchMove: false,
    effect: "fade",
  });

  // choices select
  const element = document.querySelector('.filter__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });

  // gallery-swiper
  const swiperGallery = new Swiper('.gallery-right__swiper', {
    breakpoints: {
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: 50,
      },
      660: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: 34,
      },
      550: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
        spaceBetween: 34,
      },
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        // grid: {
        //   rows: 2,
        // },
        // spaceBetween: 34,
      },
    },
    navigation: {
      nextEl: '.gallery-btns__next',
      prevEl: '.gallery-btns__prev',
    },
    pagination: {
      el: ".gallery-pagination",
      type: "fraction",
    },
  });

  // accordion
  $(function () {
    $("#accordion-1, #accordion-2, #accordion-3, #accordion-4, #accordion-5").accordion({
      collapsible: true,
      heightStyle: "content",
    });
  });

  const accordionBtn = document.querySelectorAll('.accordion-content__btn');

  accordionBtn.forEach(btn => {
    btn.addEventListener('click', e => {

      accordionBtn.forEach((b) => {
        b.classList.remove('active')
      })
      e.currentTarget.classList.add('active')
    })
  })

  // tabs catalog

  document.querySelectorAll('.catalog-buttons__btn').forEach(function (countryBtn) {
    countryBtn.addEventListener('click', function (event) {

      const target = event.target
      document.querySelectorAll('.catalog-buttons__btn').forEach(function (btnDisabled) {
        btnDisabled.classList.remove('btn--active')
      })
      target.classList.add('btn--active')

      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog-content').forEach(function (disabled) {
        disabled.classList.remove('personality--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('personality--active')


    });
  });

  // tabs-accordion
  document.querySelectorAll('.accordion-content__btn').forEach(function (listBtn) {
    listBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog-biography').forEach(function (disabled) {
        disabled.classList.remove('biography--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('biography--active')
    })
  })

  // events
  const eventsBtn = document.querySelector('.events__btn');

  eventsBtn.addEventListener('click', () => {
    eventsBtn.classList.add('btn-hidden');
    document.querySelectorAll('.events-list__item').forEach(events => {
      events.style.display = 'flex';
    });
  });

  const sliderEvents = document.querySelector('.events-slider');
  let swiperEvents;

  function mobileSliderEvents() {
    if (window.innerWidth <= 749 && sliderEvents.dataset.mobile == 'false') {
      swiperEvents = new Swiper(sliderEvents, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
        // loop: true,
        slideClass: 'events-item',
        pagination: {
          el: ".events-mobile-pagination",
          type: "bullets",
          clickable: true,
        },
      });

      sliderEvents.dataset.mobile = 'true';
    }

    if (window.innerWidth > 700) {
      sliderEvents.dataset.mobile = 'false';
      if (sliderEvents.classList.contains('swiper-container-initialized')) {
        swiperEvents.destroy();
      }
    }
  }

  mobileSliderEvents();

  window.addEventListener('resize', () => {
    mobileSliderEvents();
  });


  // editions-swipper

  const editionsContainer = document.querySelector('.editions-swipper');
  let swiperEditions;

  function mobileEditions() {

    if (window.innerWidth >= 550 && editionsContainer.dataset.mobile == 'false') {
      swiperEditions = new Swiper(editionsContainer, {
        breakpoints: {
          1320: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 3,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 3,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 1,
          }
        },
        navigation: {
          nextEl: '.editions-btns__next',
          prevEl: '.editions-btns__prev',
        },
        pagination: {
          el: ".editions-pagination",
          type: "fraction",
        },
      });

      editionsContainer.dataset.mobile == 'true';
    }

    if (window.innerWidth < 550) {
      editionsContainer.dataset.mobile = 'false';
      if (editionsContainer.classList.contains('swiper-initialized')) {
        swiperEditions.destroy();
      }
    }

  };


  mobileEditions();
  window.addEventListener('resize', () => {
    mobileEditions();
  });



  // partners-swiper

  const swiperPartners = new Swiper('.partners-swiper', {
    breakpoints: {
      1300: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      700: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 21,
      },
    },
    navigation: {
      nextEl: '.partners-btns-next',
      prevEl: '.partners-btns-prev',
    },
  });

  // map
  var myMap;

  // Дождёмся загрузки API и готовности DOM.
  ymaps.ready(init);

  function init() {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [55.75862046033606, 37.60102518461715], // Москва
      zoom: 17
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-icon.svg',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    });

    myMap.geoObjects
      .add(myPlacemark)

    myMap.behaviors.disable('scrollZoom');
  };

  // inputmask

  var selector = document.querySelector(".feedback-input-tel");

  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  // validate

  new JustValidate('.feedback-form__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },

      tel: {
        required: true,
        minLength: 10,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length == 10
        }
      },

    },
    messages: {
      name: {
        required: 'Поле обязательно для заполнения',
        minLength: 'Не менее двух символов'
      },
      tel: {
        required: 'Поле обязательно для заполнения',
        minLength: 'Введите все символы',
      }
    }
  });


  // scroll
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      if (id.length <= 1) {
        return
      }
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  // burger

  const burger = document.querySelector('.burger');
  const burgerMenu = document.querySelector('.mobile-menu-wrapper');

  burger.addEventListener('click', () => {
    burger.classList.toggle('is--active');
    burgerMenu.classList.toggle('is--active');
    document.body.classList.toggle('lock');

    burgerMenu.addEventListener('scroll', () => {
      if (burgerMenu.scrollTop > 20) {
        burger.style.opacity = '0';
      } else {
        burger.style.opacity = '1';
      }

    }, {passive: true});
  });

  const navLink = document.querySelectorAll('.nav-list__link');

  navLink.forEach(link => {
    link.addEventListener('click', () => {
      if (document.body.classList.contains('lock')) {
        document.body.classList.remove('lock');
        burger.classList.remove('is--active');
        burgerMenu.classList.remove('is--active');
      }
    })
  })

  // search

  const searchBtn = document.querySelector('.header-top__search-btn');
  const searchForm = document.querySelector('.mobile-form');
  const searchInput = document.querySelector('.mobile-form__input');
  const searchFormBtn = document.querySelector('.mobile-form__btn');

  searchBtn.addEventListener('click', () => {
    searchForm.classList.add('active');
    searchBtn.classList.add('events-none');
  });

  document.addEventListener('click', e => {

    if (searchForm.classList.contains('active') && e.target !== searchBtn && e.target !== searchInput && e.target !== searchFormBtn) {
      searchForm.classList.remove('active');
      searchBtn.classList.remove('events-none')
    }
  })

  // category 320

  const categoryBtn = document.querySelector('.category-btn');
  const categoryItem = document.querySelectorAll('.editions-list__icon');
  const checkboxBtnClosed = document.querySelectorAll('.category-btn__closed');

  categoryBtn.addEventListener('click', e => {

    e.target.classList.toggle('is--active');

    categoryItem.forEach(item => {
      item.classList.toggle('is--active')
    })
  })

  checkboxBtnClosed.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      const checkboxTarget = checkbox.dataset.checkbox;
      const checkboxInput = document.querySelector(`[data-input='${checkboxTarget}']`);
      checkboxInput.checked = false;
    })
  })

  // tippy

  tippy('.tippy-btn', {
    content(reference) {
      const id = reference.getAttribute('data-template');
      const template = document.getElementById(id);
      return template.innerHTML;
    },
    allowHTML: true,
  });

})();

