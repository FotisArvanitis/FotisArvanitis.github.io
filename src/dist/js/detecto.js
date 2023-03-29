// Navigation bar
//=========================================================================

function navBar() {
  const menuIcon = document.querySelector("button.menu-icon");
  const navBg = document.querySelector(".nav-bg");
  const menu = document.querySelector(".menu");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("close-icon");
    navBg.classList.toggle("nav-bg-expand");
    menu.classList.toggle("collapse");
  });
}

// Abilities animations
//=========================================================================

function abilitiesAnimations() {
  const abilities = document.querySelector(".abilities");
  const abilitiesCards = document.querySelectorAll(".ability");
  const abilitiesP = document.querySelectorAll(".ability p");
  const abilitiesSmall = document.querySelectorAll(".ability small");
  const abilitiesBg = document.querySelector(".abilities-bg");

  const options = {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  };

  const abilitiesObserver = new IntersectionObserver((entry, observer) => {
    if (!entry[0].isIntersecting) {
      return;
    } else {
      abilitiesCards.forEach((entry) => {
        entry.style.animationName = "ability-anim";
      });
      abilitiesP.forEach((entry) => {
        entry.style.animationName = "abilities-text-anim";
      });
      abilitiesSmall.forEach((entry) => {
        entry.style.animationName = "abilities-text-anim";
      });
      abilitiesBg.style.animationName = "abilities-bg-anim";
      observer.unobserve(entry[0].target);
    }
  }, options);

  abilitiesObserver.observe(abilities);
}

// Testimonial animations
//=========================================================================

function testimonialAnimations() {
  const sliderBg = document.querySelector(".testimonial-bg");
  const slider = document.querySelector(".swiper");

  const options = {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  };

  const testimonialObserver = new IntersectionObserver((entry, observer) => {
    if (!entry[0].isIntersecting) {
      return;
    } else {
      sliderBg.style.animationName = "testimonial-bg-anim";
      slider.style.animationName = "swiper-anim";
      observer.unobserve(entry[0].target);
    }
  }, options);

  testimonialObserver.observe(sliderBg);
}

// Pricing animations
//=========================================================================

function pricingAnimations() {
  const pricingBg = document.querySelector(".pricing-bg");
  const contractCard = document.querySelector(".contract-card");

  const options = {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  };

  const pricingObserver = new IntersectionObserver((entry, observer) => {
    if (!entry[0].isIntersecting) {
      return;
    } else {
      pricingBg.style.animationName = "pricing-bg-anim";
      contractCard.style.animationName = "contract-card-anim";
      observer.unobserve(entry[0].target);
    }
  }, options);

  pricingObserver.observe(pricingBg);
}

// Footer year
//=========================================================================

document.getElementById("year").innerHTML = new Date().getFullYear();

// Swiper
//=========================================================================

const swiper = new Swiper(".swiper", {
  // Parameters
  spaceBetween: 60,
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    depth: 1000,
    scale: 0,
    slideShadows: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function detectoJS() {
  navBar();
  abilitiesAnimations();
  testimonialAnimations();
  pricingAnimations();
}

detectoJS();
