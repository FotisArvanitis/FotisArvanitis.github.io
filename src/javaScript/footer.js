// -----------------------------------------------------------------------------
// This file contains scripts for the footer.
// -----------------------------------------------------------------------------

// Add the year to the footer paragraph.
// ==========================================================================

function year() {
  document.getElementById("year").innerHTML = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", year);

export { year };
