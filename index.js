const sidenav = document.getElementById("Sidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const body = document.querySelector("body");

openBtn.addEventListener("click", () => {
  openNav();
});
closeBtn.addEventListener("click", () => {
  closeNav();
});

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
