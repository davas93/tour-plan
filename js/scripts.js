var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  //Effect
  effect: "fade",

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  //Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
