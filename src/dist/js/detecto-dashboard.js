function sidebar() {
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector("aside .sidebar");
  const navLinks = document.querySelectorAll(".sidebar-body nav a");
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    if (sidebar.classList.contains("show")) {
      document.addEventListener("click", docClickHandler);
      window.addEventListener("resize", windowResizeHandler);
    } else {
      document.removeEventListener("click", docClickHandler);
      window.removeEventListener("resize", windowResizeHandler);
    }
  });
  function docClickHandler(event) {
    if (
      !sidebarToggle.contains(event.target) &&
      !sidebar.contains(event.target)
    ) {
      sidebar.classList.remove("show");
      document.removeEventListener("click", docClickHandler);
    }
  }
  function windowResizeHandler() {
    if (window.innerWidth >= 992) {
      sidebar.classList.remove("show");
      window.removeEventListener("resize", windowResizeHandler);
    }
  }
  navLinks.forEach((link) => {
    link.addEventListener("click", (evt) => {
      const activeLink = document.querySelector(".sidebar-body nav a.active");
      if (!evt.currentTarget.classList.contains("active")) {
        activeLink.classList.remove("active");
        evt.currentTarget.classList.add("active");
      }
      if (window.innerWidth < 992) {
        sidebar.classList.remove("show");
      }
    });
  });
}
window.onload = () => {
  sidebar();
};
