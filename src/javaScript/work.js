// -----------------------------------------------------------------------------
// This file contains scripts for the work tab-panel.
// -----------------------------------------------------------------------------

// Add animation-delay to work panel description texts, with increased
// delay-time for each item.
// ==========================================================================

function descriptionTextsDelay() {
  // Select elements and create arrays with them.

  const paragraphs = Array.from(
    document.querySelectorAll(".swiper-slide-active .description div p")
  );

  const strongText = Array.from(
    document.querySelectorAll(".swiper-slide-active .description div strong")
  );

  const listItems = Array.from(
    document.querySelectorAll(".swiper-slide-active .description ul li div")
  );

  const projectsLinks = Array.from(
    document.querySelectorAll(".swiper-slide-active .description div a")
  );

  const swiperBtns = Array.from(
    document.querySelectorAll(".swiper > div[class^='swiper-button']")
  );

  // Concatenate the arrays.

  const mergedArray = paragraphs.concat(
    strongText,
    listItems,
    projectsLinks,
    swiperBtns
  );

  // Add animation-delay to each element, with increased
  // delay-time for each element based on its index number.

  mergedArray.forEach((el, index) => {
    el.style.animationDelay = index / 10 + 1.6 + "s";
  });
}

// Swiper buttons.
// ==========================================================================

// Add animation-name.

function swiperBtnsAddAnimName() {
  const swiperBtns = document.querySelectorAll(
    ".swiper > div[class^='swiper-button']"
  );

  swiperBtns.forEach((el) => {
    el.style.animationName = "swiperBtnsAnimation";
  });
}

// On click event.

function swiperBtnsRemoveAnimStyles() {
  const swiperBtns = document.querySelectorAll(
    ".swiper > div[class^='swiper-button']"
  );

  swiperBtns.forEach((el) => {
    el.addEventListener("click", () => {
      swiperBtns.forEach((el) => {
        // Set opacity to zero and remove animation-name.

        el.style.opacity = "0";
        el.style.removeProperty("animation-name");

        // Scroll to top, if the distance from the top of the document is > 0px.

        if (
          document.body.scrollTop > 0 ||
          document.documentElement.scrollTop > 0
        ) {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
      });
    });
  });
}

// Initialize Swiper.
// ==========================================================================

const swiper = new Swiper(".swiper", {
  // Parameters.
  allowTouchMove: false,
  autoHeight: true,
  loop: true,
  speed: 400,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // Navigation buttons.

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiperBtnsRemoveAnimStyles();

// Event will be fired everytime when swiper starts animation.

swiper.on("setTransition", () => {
  descriptionTextsDelay();
  swiperBtnsAddAnimName();
});

export {
  descriptionTextsDelay,
  swiperBtnsAddAnimName,
  swiperBtnsRemoveAnimStyles,
  swiper,
};
