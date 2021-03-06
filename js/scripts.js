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

//Модальное окно
var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var targetModal = $(this).attr("data-href");
  $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
  $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}
$(document).keydown(function (e) {
  // ESCAPE key pressed
  if (e.keyCode == 27) {
    closeModal(event);
  }
});
$(document).mouseup(function (e) {
  // событие клика по веб-документу
  var div = $(".modal__dialog"); // тут записываем в переменную элемент
  if (
    !div.is(e.target) && // если клик был не по нашему блоку
    div.has(e.target).length === 0
  ) {
    // и не по его дочерним элементам
    closeModal(event); // вызываем функцию скрытия
  }
});

//Валидация форм
$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Name must be at least 2 letters long",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Please specify your phone number",
        minlength: "wrong number dialed",
      },
    },
  });
});

//Маска для телефона
$('input[name|="phone"]').mask("+7(999) 999-9999");

//Инициализация анимации
AOS.init();

var map = document.querySelector(".map");
map.addEventListener("mouseenter", () => {
  if (!document.querySelector(".map iframe")) {
    map.innerHTML =
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.041275564879!2d98.29254741532716!3d7.890750807946243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b7bfcd9f903%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sru!2sru!4v1596728033305!5m2!1sru!2sru" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
  }
});

//Подстановка картинок
window.onload = () => {
  var imgDefer = document.getElementsByTagName("img");
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute("data-src")) {
      imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
    }
  }
};
