//Displays or hides key words in header depending on width
let headerList = document.querySelector("#headerList");
function setUp() {
  if (window.innerWidth < 801) {
    headerList.style.display = "none";
  } else {
    headerList.style.display = "flex";
  }
}
setUp();
window.addEventListener("resize", setUp);

//Parallax header img and text and fade arrow on scroll

//Toggle menu
function menuToggler() {
  let menu = document.querySelector(".menuSelect");
  menu.classList.toggle("menuToggle");
  menu.classList.toggle("menu");
}
let dotMenu = document.querySelector(".dotMenu");
dotMenu.onclick = menuToggler;

let menuItem = document.querySelectorAll(".menuSelect a");
menuItem.forEach((value, index) => {
  value.onclick = menuToggler;
});
