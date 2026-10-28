// Small progressive enhancement: keep the copyright year current.
// All navigation and page content work without JavaScript.
const yearElements = document.querySelectorAll("[data-current-year]");
const currentYear = new Date().getFullYear();

yearElements.forEach((element) => {
  element.textContent = currentYear;
});
