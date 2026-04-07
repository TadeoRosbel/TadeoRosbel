/* =========================
TRANSICION ENTRE PAGINAS
========================= */

document.querySelectorAll("a[href]").forEach(link => {

link.addEventListener("click", function(e) {

const href = this.getAttribute("href");

if (
  !href ||
  href.startsWith("#") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:") ||
  href.startsWith("http") ||
  this.hasAttribute("target")
) {
  return;
}

e.preventDefault();

document.body.classList.add("fade-out");

setTimeout(() => {
  window.location.href = href;
}, 400);

});

});

/* =========================
DROPDOWN CON CLICK
========================= */

document.querySelectorAll(".dropbtn").forEach(btn => {

btn.addEventListener("click", function(e) {
e.stopPropagation();

const dropdown = this.parentElement;

// cerrar otros
document.querySelectorAll(".dropdown").forEach(d => {
  if(d !== dropdown){
    d.classList.remove("active");
  }
});

// toggle actual
dropdown.classList.toggle("active");

});

});

// cerrar solo si haces click fuera
document.addEventListener("click", (e) => {
if (!e.target.closest(".dropdown")) {
document.querySelectorAll(".dropdown").forEach(d => {
d.classList.remove("active");
});
}
});