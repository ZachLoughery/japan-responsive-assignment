let menuButton = document.querySelector(".menu-button");
let sidebar = document.querySelector(".sidebar");

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  setTimeout(function () {
    sidebar.classList.toggle("sidebar-active");
  }, 100);
});
