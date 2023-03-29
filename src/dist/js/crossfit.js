// Navigation bar
// ==========================================================================

function navBar() {
  const menubutton = document.querySelector("button.menu-icon");
  const menu = document.querySelector(".menu");
  const closeMenu = document.querySelector(".close-menu");
  const closeMenuButton = document.querySelector(".close-menu button");

  // Open menu

  menubutton.addEventListener("click", function () {
    this.classList.add("hide-menu-icon");
    menu.classList.add("show-menu");
    closeMenu.classList.add("show-close-icon");
  });

  // Close menu

  closeMenuButton.addEventListener("click", () => {
    menubutton.classList.remove("hide-menu-icon");
    menu.classList.remove("show-menu");
    closeMenu.classList.remove("show-close-icon");
  });
}

// Classes gallery animations
// ==========================================================================

function classesGalleryAnimation() {
  const images = document.querySelectorAll(".classes-gallery img");

  const options = {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.style.animationName = "classesImgsAnimation";
        observer.unobserve(entry.target);
      }
    });
  }, options);

  images.forEach((image) => {
    observer.observe(image);
  });
}

// Team images animations
// ==========================================================================

// For odd numbered images.

function teamImagesAnimation() {
  const images = document.querySelectorAll(
    ".team .team-member:nth-child(odd) .team-member-image img"
  );

  const options = {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.style.animationName = "profileImageAnimation";
        observer.unobserve(entry.target);
      }
    });
  }, options);

  images.forEach((image) => {
    observer.observe(image);
  });
}

// For even numbered images.

function teamImagesAnimationReversed() {
  const image = document.querySelector(
    ".team .team-member:nth-child(even) .team-member-image img"
  );

  const options = {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  };

  const observer = new IntersectionObserver((entry, observer) => {
    if (!entry[0].isIntersecting) {
      return;
    } else {
      entry[0].target.style.animationName = "profileImageAnimationReversed";
      observer.unobserve(entry[0].target);
    }
  }, options);

  observer.observe(image);
}

// Subscribe gallery animations
// ==========================================================================

// Images.

function subscribeGalleryImagesAnimation() {
  const images = document.querySelectorAll(
    ".subscribe-gallery img[alt^='sub-']"
  );

  const options = {
    root: null,
    threshold: 0.3,
    rootMargin: "-10px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.style.animationName = "subscribeImgAnimation";
        observer.unobserve(entry.target);
      }
    });
  }, options);

  images.forEach((image) => {
    observer.observe(image);
  });
}

// No limits.

function noLimitsImageAnimation() {
  const noLimitsImage = document.querySelector(
    ".subscribe-gallery img[alt='no-limits']"
  );

  const options = {
    root: null,
    threshold: 1,
    rootMargin: "-10px",
  };

  const observer = new IntersectionObserver((entry, observer) => {
    if (!entry[0].isIntersecting) {
      return;
    } else {
      entry[0].target.style.animationName = "noLimitsAnimation";
      observer.unobserve(entry[0].target);
    }
  }, options);

  observer.observe(noLimitsImage);
}

// Footer year
// ==========================================================================

document.getElementById("year").innerHTML = new Date().getFullYear();

// Swiper
//=========================================================================

const swiper = new Swiper(".swiper", {
  // Default parameters
  slidesPerView: 1,

  // Responsive breakpoints
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

function crossfitJS() {
  navBar();
  classesGalleryAnimation();
  teamImagesAnimation();
  teamImagesAnimationReversed();
  subscribeGalleryImagesAnimation();
  noLimitsImageAnimation();
}

crossfitJS();
