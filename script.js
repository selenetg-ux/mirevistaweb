// Validación básica del formulario
document
  .getElementById("formContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
  });

// Ejemplo de evento dinámico: mostrar/ocultar galería
const galeria = document.querySelector(".galeria");
galeria.addEventListener("click", () => {
  if (galeria.style.display === "none") {
    galeria.style.display = "block";
  } else {
    galeria.style.display = "none";
  }
});
