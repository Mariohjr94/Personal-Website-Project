console.log("Hello World");

const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

// button
// document.addEventListener("DOMContentLoaded", function () {
//   const buttonAction = document.getElementsByClassName("submit")[0];

//   const clicked = () => {
//     console.log("hola amigo, now you diggin' too deep ;)");
//     alert("Hola amigo");
//   };

//   buttonAction.addEventListener("click", clicked);
// });

document.addEventListener("DOMContentLoaded", function () {
  const buttonAction = document.getElementsByClassName("submit")[0];

  const clicked = () => {
    console.log("hola amigo, now you diggin' too deep ;)");
    alert("Hola amigo");
  };

  buttonAction.addEventListener("click", clicked);
});
