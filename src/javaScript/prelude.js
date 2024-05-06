// -----------------------------------------------------------------------------
// This file contains scripts for the prelude.
// -----------------------------------------------------------------------------

// Prelude
// ==========================================================================

function preludeJS() {
  const prelude = document.querySelector(".prelude");
  const preludeFirstDiv = prelude.children[0];
  const preludeSecondDiv = prelude.children[1];
  const lastDisplayedLetter = prelude.children[1].children[7];
  const greeting = document.querySelector(".greeting");
  const greetingParagraph = greeting.querySelector(".greeting p");
  const aboutTabHeader = document.querySelector(
    ".tabs button[data-target='#about-tab-panel']"
  );
  const aboutTabPanel = document.querySelector("#about-tab-panel");
  const h1 = document.querySelector("h1");
  const headerNav = document.querySelector("header nav");
  const footerParagraph = document.querySelector("footer p");

  // When the document loads, set "display: grid" to prelude,
  // to start the animation.

  prelude.style.display = "grid";

  // Set Overflow hidden on the first and second prelude divs when the
  // animation of the last displayed letter completes.

  lastDisplayedLetter.addEventListener("animationend", () => {
    preludeFirstDiv.style.overflow = "hidden";
    preludeSecondDiv.style.overflow = "hidden";
  });

  // Step 1. Wait for all prelude animations to finish.
  // Step 2. Remove the prelude, show the greeting and wait for all
  // the animations to complete.
  // Step 3. Remove greeting and show website content.

  // Step 1.
  Promise.all(
    lastDisplayedLetter
      .getAnimations({ subtree: true })
      .map((animation) => animation.finished)
  ).then(() => {
    // Step 2.
    prelude.removeAttribute("style");
    greeting.style.display = "block";
    Promise.all(
      greetingParagraph
        .getAnimations({ subtree: true })
        .map((animation) => animation.finished)
    ).then(() => {
      // Step 3.
      greeting.removeAttribute("style");
      aboutTabHeader.classList.add("active");
      aboutTabPanel.classList.add("active");
      h1.addEventListener("animationend", () => {
        headerNav.removeAttribute("style");
        footerParagraph.removeAttribute("style");
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", preludeJS);

export { preludeJS };
