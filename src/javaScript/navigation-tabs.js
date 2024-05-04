// -----------------------------------------------------------------------------
// This file contains scripts for the navigation tabs.
// -----------------------------------------------------------------------------

function navTabs() {
  const tabBtns = document.querySelectorAll(".tabs button[data-toggle='tab']");

  // Define a function that shows the tab.

  function showTab(event) {
    // Check if the targeted tab button does not have the "active" class.

    if (!event.currentTarget.classList.contains("active")) {
      const activeTabBtn = document.querySelector(".tabs button.active");
      const activeTabPanel = document.querySelector(
        ".tab-content .tab-panel.active"
      );
      const targetedBtnDataTarget =
        event.currentTarget.getAttribute("data-target");
      const newTabPanel = document.querySelector(targetedBtnDataTarget);

      // Remove the "active" class from the active tab button.
      activeTabBtn.classList.remove("active");
      // Add the "hide" class to the active tab panel.
      activeTabPanel.classList.add("hide");
      // Add the "active" class to the targeted tab button.
      event.currentTarget.classList.add("active");

      // Add a "transition end" event listener to the active tab panel.

      activeTabPanel.ontransitionend = () => {
        // Remove the "active" class from the active tab panel.
        activeTabPanel.classList.remove("active");
        // Remove the "hide" class from the active tab panel.
        activeTabPanel.classList.remove("hide");
        // Add the "active" class to the new tab panel.
        newTabPanel.classList.add("active");
      };
    }
  }

  // Attach the event handler to each tab button.

  tabBtns.forEach((button) => {
    button.addEventListener("click", showTab);
  });
}

document.addEventListener("DOMContentLoaded", navTabs);

export { navTabs };
