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

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function SendMail() {
  const params = {
    from_name: document.getElementById("from_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  if (params.email_id.match(validRegex)) {
    emailjs
      .send("service_4r6hzh5", "template_azodpme", params)
      .then(function () {
        alertify.set("notifier", "position", "bottom-center");
        alertify.success("Your message was send Successfully.");
      });
  } else {
    alertify.set("notifier", "position", "bottom-center");
    alertify.error(
      "Your message could not be sent, please verify the fields above."
    );
  }
}

const Parallax = document.getElementById("figma-logo");

window.addEventListener("scroll", () => {
  Parallax.style.top = window.scrollY / 16 + "px";
});
