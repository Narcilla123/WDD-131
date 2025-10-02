const menuButton = document.getElementById("menu-button");
const menuItems = document.getElementById("menu-items");

function toggleMenu(){
    menuItems.classList.toggle('visible');
    const isMenuOpen = menuItems .classList.contains('visible');
    menuButton.setAttribute("aria-expanded",isMenuOpen);
}
menuButton.addEventListener('click', toggleMenu);


// function handleResize() {
//   const menu = document.querySelector(".menu");
//   if (window.innerWidth > 1000) {
//     menu.classList.remove("hide");
//   } else {
//     menu.classList.add("hide");
//   }
// }

// handleResize();
// window.addEventListener("resize", handleResize);