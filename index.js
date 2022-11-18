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

/* Ajout de la class active pour ouvrir le menu */
function openNav() {
  sidenav.classList.add("active");
}

/* Retrait de la class active pour fermer le menu */
function closeNav() {
  sidenav.classList.remove("active");
}
