// -----------------------------------------------------------------------------
// This file contains scripts for the contact tab-panel.
// -----------------------------------------------------------------------------

// Add animation-delay to contact panel texts.
// ==========================================================================

function contactTextsDelay() {
  // Select elements and create arrays with them.

  const paragraphs = Array.from(document.querySelectorAll(".contact > div p"));
  const mailIcon = document.querySelector(".contact div:nth-of-type(6) svg");
  const email = mailIcon.nextElementSibling;
  const linkedInIcon = document.querySelector(
    ".contact div:nth-of-type(7) svg"
  );
  const linkedIn = linkedInIcon.nextElementSibling;

  // Concatenate the arrays.

  const mergedArray = paragraphs.concat(
    mailIcon,
    email,
    linkedInIcon,
    linkedIn
  );

  // Add animation-delay to each element, with increased
  // delay-time for each element based on its index number.

  mergedArray.forEach((element, index) => {
    element.style.animationDelay = index / 10 + 1 + "s";
  });
}

document.addEventListener("DOMContentLoaded", contactTextsDelay);

export { contactTextsDelay };
