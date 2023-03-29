// -----------------------------------------------------------------------------
// This file contains scripts for the prelude.
// -----------------------------------------------------------------------------

// Prelude
// ==========================================================================

function preludeJS() {
  window.onload = () => {
    const prelude = document.querySelector(".prelude");
    const preludeAnimatedElement = document.querySelector(".prelude div span");
    const preludeFirstDiv = document.querySelector(
      ".prelude div:first-of-type"
    );
    const preludeSecondDiv = document.querySelector(
      ".prelude div:nth-of-type(2)"
    );
    const aboutTabHeader = document.querySelector(
      ".menu button[data-target='#about-tab']"
    );
    const aboutTabPanel = document.querySelector(".tab-panel.about");
    const greetingDiv = document.querySelector(".greeting");
    const greetingParagraph = document.querySelector(".greeting p");
    const headerNav = document.querySelector("header nav");
    const footerParagraph = document.querySelector("footer p");
    const h1 = document.querySelector("h1");

    // When the entire page loads, set "display: grid" to .prelude,
    // to start the animation.

    prelude.style.display = "grid";

    // Set Overflow hidden on the first and second prelude divs when the
    // first animation completes.

    preludeAnimatedElement.addEventListener("animationend", () => {
      preludeFirstDiv.style.overflow = "hidden";
      preludeSecondDiv.style.overflow = "hidden";
    });

    // Step 1. Wait for all .prelude animations to finish.
    // Step 2. Remove the .prelude, show the .greeting and wait for all
    // the animations to finish.
    // Step 3. Remove .greeting and show website content.

    // Step 1.
    Promise.all(
      preludeAnimatedElement
        .getAnimations({ subtree: true })
        .map((animation) => animation.finished)
    ).then(() => {
      // Step 2.
      prelude.removeAttribute("style");
      greetingDiv.style.display = "block";
      Promise.all(
        greetingParagraph
          .getAnimations({ subtree: true })
          .map((animation) => animation.finished)
      ).then(() => {
        // Step 3.
        greetingDiv.removeAttribute("style");
        aboutTabHeader.classList.add("active");
        aboutTabPanel.classList.add("active");
        h1.addEventListener("animationend", () => {
          headerNav.removeAttribute("style");
          footerParagraph.removeAttribute("style");
        });
      });
    });
  };
}

preludeJS();

export { preludeJS };
