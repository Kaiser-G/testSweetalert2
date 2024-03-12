// Import de Bootstrap
import "../2024/node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// Import SweetAlert
import Swal from "../2024/node_modules/sweetalert2/src/sweetalert2.js";

window.addEventListener("load", () => {
  Swal.fire({
    title: "Erreur !",
    text: "Voulez-vous continuer ?",
    icon: "Erreur",
    confirmButtonText: "Oui",
  });

  let btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    Swal.fire(
      {
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
      },
      false
    );
  });
});
