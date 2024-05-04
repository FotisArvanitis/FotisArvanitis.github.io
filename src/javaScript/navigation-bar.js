// -----------------------------------------------------------------------------
// This file contains scripts for the navigation bar.
// -----------------------------------------------------------------------------

function navBar() {
  const toggleBtn = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");
  const menuButtons = document.querySelectorAll(".navbar-menu button");

  // Define a function that opens the navigation bar menu.

  function openMenu() {
    // Add the "show" class to the navbar menu.
    navbarMenu.classList.add("show");
    // Add the "overflow-hidden" class to the body.
    document.body.classList.add("overflow-hidden");
    // Add a window resize event listener.
    window.addEventListener("resize", windowResizeHandler);
  }

  // Attach the event handler to the navbar toggle button.

  toggleBtn.addEventListener("click", openMenu);

  // Define a function that closes the navigation bar menu.

  function closeMenu() {
    if (navbarMenu.classList.contains("show")) {
      // Remove the "show" class from the navbar menu.
      navbarMenu.classList.remove("show");
      // Remove the "overflow-hidden" class from the body.
      document.body.classList.remove("overflow-hidden");
      // Remove the window resize event listener.
      window.removeEventListener("resize", windowResizeHandler);
    }
  }

  // Attach the event handler to each navbar menu button.

  menuButtons.forEach((button) => {
    button.addEventListener("click", closeMenu);
  });

  // Define a function to handle the window resize.

  function windowResizeHandler() {
    // Check if the window width is greater than or equal to 576px.
    if (window.innerWidth >= 576) {
      // Remove the "show" class from the navbar menu.
      navbarMenu.classList.remove("show");
      // Remove the "overflow-hidden" class from the body.
      document.body.classList.remove("overflow-hidden");
      // Remove the resize event listener from the window.
      window.removeEventListener("resize", windowResizeHandler);
    }
  }
}

document.addEventListener("DOMContentLoaded", navBar);

export { navBar };
