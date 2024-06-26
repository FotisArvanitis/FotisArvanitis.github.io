// -----------------------------------------------------------------------------
// This file contains scripts for the navigation tabs.
// -----------------------------------------------------------------------------

function navTabs() {
  const tabHeaders = document.querySelectorAll(
    ".tabs button[data-toggle='tab']"
  );

  // Define a function that shows the tab.

  function showTab(event) {
    const activeTabPanel = document.querySelector(
      ".tab-content .tab-panel.active"
    );

    // Check if the targeted tab header does not have the "active" class,
    // and the active tab panel does not have the "hide" class.

    if (
      !event.currentTarget.classList.contains("active") &&
      !activeTabPanel.classList.contains("hide")
    ) {
      const activeTabHeader = document.querySelector(
        ".tabs .tab-header.active"
      );
      const tabHeaderId = event.currentTarget.getAttribute("data-target");
      const tabPanel = document.querySelector(tabHeaderId);

      // Add the "hide" class to the active tab panel.
      activeTabPanel.classList.add("hide");
      // Remove the "active" class from the active tab header.
      activeTabHeader.classList.remove("active");
      // Add the "active" class to the targeted tab header.
      event.currentTarget.classList.add("active");

      // Add an "animation end" event listener to the active tab panel.

      activeTabPanel.addEventListener(
        "animationend",
        () => {
          // Remove the "active" class from the active tab panel.
          activeTabPanel.classList.remove("active");
          // Remove the "hide" class from the active tab panel.
          activeTabPanel.classList.remove("hide");
          // Add the "active" class to the targeted header tab panel.
          tabPanel.classList.add("active");
        },
        // Remove the "animation end" event listener when invoked.
        { once: true }
      );
    }
  }

  // Attach the event handler to each tab header.

  tabHeaders.forEach((element) => {
    element.addEventListener("click", showTab);
  });
}

document.addEventListener("DOMContentLoaded", navTabs);

export { navTabs };
