//Слайдер для hotel
var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  //Effect
  effect: "fade",

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  //Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
//Подключение API Яндекс Карты
ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [12.934948, 100.88328],
        zoom: 15.3,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Grand Hilton Hotel",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "js/location-icon.svg",
        iconImageSize: [40, 52],
        iconImageOffset: [-25, -40],
      }
    );
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");
});

//Cоздание parallax эффекта newsletter
$(".newsletter").parallax({ imageSrc: "img/newsletter/newsletter-bg.jpg" });

//Слайдер для reviews
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  //Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

//Создание мобильного меню
$(init);

function autoAdaptiv() {
  if ($(window).outerWidth() < 768) {
    $(".navbar-menu").append($(".navbar-top>.search, .user"));
    //Иначе все улетает обратно
  } else {
    $(".navbar-top").append($(".navbar-menu>.search, .user"));
  }
}

function init() {
  autoAdaptiv();

  $(window).resize(() => autoAdaptiv());
}
//Появление/исчезание меню при нажатии
$(".menu-button").on("click", function () {
  $(".navbar-menu").toggleClass("navbar-menu--active");
  $(".header-menu").toggleClass("header-menu_active");
});
$(".navbar-menu__item").on("click", function () {
  $(".navbar-menu").removeClass("navbar-menu--active");
});
