// Import de Bootstrap
import "../2024/node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// Import SweetAlert
import Swal from "../2024/node_modules/sweetalert2/src/sweetalert2.js";
//apparait a l'ouverture du site
window.addEventListener("load", () => {
  Swal.fire({
    title: "Bonjour",
    text: "Voulez-vous continuer ?",
    icon: "Erreur",
    confirmButtonText: "Oui",
  });
  //Sur le bouton danger
  let btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    Swal.fire(
      {
        title: "DANGER ?",
        text: "Si pas danger, click",
        icon: "question",
      },
      false
    );
  });
});
