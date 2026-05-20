const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const form = document.querySelector("[data-form]");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const message = [
    "Hola, quiero pedir presupuesto para un trabajo de manitas.",
    `Nombre: ${data.get("nombre")}`,
    `Telefono: ${data.get("telefono")}`,
    `Zona: ${data.get("zona") || "Por confirmar"}`,
    `Servicio: ${data.get("servicio")}`,
    `Mensaje: ${data.get("mensaje") || "Sin mensaje adicional"}`,
  ].join("\n");

  window.open(`https://wa.me/34602537509?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
