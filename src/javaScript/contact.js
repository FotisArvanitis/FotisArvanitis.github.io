// -----------------------------------------------------------------------------
// This file contains scripts for the contact tab-panel.
// -----------------------------------------------------------------------------

// Add animation-delay to contact panel texts, with increased
// delay-time for each item.
// ==========================================================================

function contactTextsDelay() {
  // Select elements and create arrays with them.

  const paragraphs = Array.from(document.querySelectorAll(".contact > div p"));

  const links = Array.from(document.querySelectorAll(".contact > div a"));

  // Concatenate the arrays.

  const mergedArray = paragraphs.concat(links);

  // Add animation-delay to each element, with increased
  // delay-time for each element based on its index number.

  mergedArray.forEach((el, index) => {
    el.style.animationDelay = index / 10 + 1.6 + "s";
  });
}

contactTextsDelay();

export { contactTextsDelay };
