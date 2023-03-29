// -----------------------------------------------------------------------------
// This file contains scripts for the navigation tabs.
// -----------------------------------------------------------------------------

// Navigation tabs
// ==========================================================================

function navTabs() {
  const menuToggler = document.querySelector("nav button.menu-toggler");
  const menu = document.querySelector("nav .menu");
  const menuButtons = document.querySelectorAll("nav .menu button");
  const body = document.querySelector("body");
  const tabHeaders = document.querySelectorAll(".menu button[data-target]");

  // Open mobile menu.

  menuToggler.addEventListener("click", () => {
    menu.classList.add("show");
    body.classList.add("overflow-xs-hidden");
  });

  // Close mobile menu.

  menuButtons.forEach((el) => {
    el.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        body.classList.remove("overflow-xs-hidden");
      }
    });
  });

  // Tabs.

  tabHeaders.forEach((el) => {
    el.addEventListener("click", (el) => {
      const activeTabHeader = document.querySelector(".menu button.active");
      const activeTabPanel = document.querySelector("main .tab-panel.active");
      const tabHeaderDataTarget = el.target.getAttribute("data-target");
      const nextTabPanel = document.querySelector(tabHeaderDataTarget);

      if (!el.target.classList.contains("active")) {
        activeTabHeader.classList.remove("active");
        activeTabPanel.classList.add("hide");
        el.target.classList.add("active");

        activeTabPanel.ontransitionend = (ev) => {
          if (ev.target.classList.contains("tab-panel")) {
            activeTabPanel.classList.remove("active");
            activeTabPanel.classList.remove("hide");
            nextTabPanel.classList.add("active");
          }
        };
      }
    });
  });
}

navTabs();

export { navTabs };
