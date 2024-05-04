// -----------------------------------------------------------------------------
// This file contains scripts for the navigation tabs.
// -----------------------------------------------------------------------------

// Navigation tabs
// ==========================================================================

function navTabs() {
  const tabHeaders = document.querySelectorAll(
    ".navbar-menu button[data-target]"
  );

  // Tabs.

  tabHeaders.forEach((el) => {
    el.addEventListener("click", (el) => {
      const activeTabHeader = document.querySelector(
        ".navbar-menu button.active"
      );
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
