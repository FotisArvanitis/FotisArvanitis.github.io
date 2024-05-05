// -----------------------------------------------------------------------------
// This file contains scripts for the work tab-panel.
// -----------------------------------------------------------------------------

function workJS() {
  const swiperBtns = document.querySelectorAll("div[class^='swiper-button']");

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

  // Add animation-delay to work panel description texts.
  // ==========================================================================

  function descriptionTextsDelay() {
    // Select elements and create arrays with them.

    const projectType = [
      document.querySelector(
        ".swiper-slide-active .description div .project-type"
      ),
    ];

    const projectTitle = [
      document.querySelector(
        ".swiper-slide-active .description div .project-title"
      ),
    ];

    const projectCommentary = Array.from(
      document.querySelectorAll(
        ".swiper-slide-active .description div .project-commentary"
      )
    );

    const listItems = Array.from(
      document.querySelectorAll(".swiper-slide-active .description ul li div")
    );

    const projectsLinks = Array.from(
      document.querySelectorAll(".swiper-slide-active .description div a")
    );

    const swiperButtons = Array.from(swiperBtns);

    // Concatenate the arrays.

    const mergedArray = projectType.concat(
      projectTitle,
      projectCommentary,
      listItems,
      projectsLinks,
      swiperButtons
    );

    // Add animation-delay to each element, with increased
    // delay-time for each element based on its index number.

    mergedArray.forEach((el, index) => {
      el.style.animationDelay = index / 10 + 1 + "s";
    });
  }

  // Swiper buttons.
  // ==========================================================================

  // Define a function that scrolls to top.

  function scrollTop() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  // Define a function that hides swiper buttons.

  function hideButton() {
    swiperBtns.forEach((button) => {
      button.classList.remove("show");
      button.classList.add("hide");
    });
  }

  // Add a "click" event listener to the swiper buttons.

  swiperBtns.forEach((button) => {
    button.addEventListener("click", () => {
      hideButton();
      scrollTop();
    });
  });

  // Event will be fired everytime when swiper starts animation.

  swiper.on("setTransition", () => {
    descriptionTextsDelay();

    swiperBtns.forEach((button) => {
      button.classList.add("show");

      if (button.classList.contains("hide")) {
        button.classList.remove("hide");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", workJS);

export { workJS };
