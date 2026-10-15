(function () {
  var cfg = window.SITE_CONFIG || {};

  function waLink(mensaje) {
    var texto = (cfg.saludo ? cfg.saludo + " " : "") + mensaje;
    return "https://wa.me/" + cfg.whatsapp + "?text=" + encodeURIComponent(texto);
  }

  // Todos los enlaces con data-wa abren WhatsApp con su mensaje.
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = waLink(a.getAttribute("data-wa") || "Quisiera información sobre una conciliación.");
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Formularios: arman el mensaje y lo envían a WhatsApp.
  document.querySelectorAll("form[data-wa-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var nombre = (d.get("nombre") || "").toString().trim();
      var tipo = (d.get("tipo") || "").toString().trim();
      var detalle = (d.get("detalle") || "").toString().trim();
      var partes = ["Quisiera una consulta."];
      if (nombre) partes.push("Mi nombre es " + nombre + ".");
      if (tipo) partes.push("Tipo de caso: " + tipo + ".");
      if (detalle) partes.push("Detalle: " + detalle);
      window.open(waLink(partes.join(" ")), "_blank", "noopener");
    });
  });

  // Menú móvil.
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
