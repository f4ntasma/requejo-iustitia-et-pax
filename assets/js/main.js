(function () {
  var cfg = window.SITE_CONFIG || {};

  /* ---------- Mensajes de WhatsApp ---------- */

  function saludo() {
    var h = new Date().getHours();
    return h < 12 ? "Buenos días" : h < 19 ? "Buenas tardes" : "Buenas noches";
  }

  function waLink(texto) {
    return "https://wa.me/" + cfg.whatsapp + "?text=" + encodeURIComponent(texto);
  }

  // Botones de servicio: «Quisiera información sobre la conciliación en materia de familia…».
  function mensajeServicio(asunto) {
    return saludo() + ", " + cfg.centro + ".\n\n" +
      "Les escribo desde su página web. " + asunto + "\n\n" +
      "¿Podrían indicarme los requisitos, el costo y la fecha más próxima para la audiencia?\n\n" +
      "Muchas gracias.";
  }

  // Cómo se nombra cada tipo de caso dentro de la frase.
  var MATERIAS = {
    familia: "en materia de familia (pensión de alimentos, tenencia o régimen de visitas)",
    deudas: "por una deuda o un cobro pendiente",
    alquileres: "sobre un alquiler o un desalojo",
    bienes: "sobre bienes, herencia o propiedad",
    contratos: "sobre un contrato o un negocio",
    vecinos: "por un problema entre vecinos",
    consumo: "sobre un producto o servicio",
    otro: ""
  };

  // Formulario: una consulta redactada, con su nombre, la materia y su caso en párrafos separados.
  function mensajeFormulario(nombre, tipo, detalle) {
    var materia = MATERIAS[tipo] || "";
    var partes = [saludo() + ", " + cfg.centro + "."];
    var presentacion = (nombre ? "Mi nombre es " + nombre + " y les escribo" : "Les escribo") +
      " desde su página web para solicitar orientación sobre una conciliación" + (materia ? " " + materia : "") + ".";
    partes.push(presentacion);
    if (detalle) {
      partes.push("Mi caso es el siguiente:\n" + detalle.replace(/\s+$/, ""));
    }
    partes.push("Les agradeceré indicarme los requisitos, el costo del servicio y la fecha más próxima para la audiencia.");
    partes.push("Quedo a la espera de su respuesta. Muchas gracias.");
    return partes.join("\n\n");
  }

  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = waLink(mensajeServicio(a.getAttribute("data-wa") || "Quisiera información sobre una conciliación."));
    a.target = "_blank";
    a.rel = "noopener";
  });

  document.querySelectorAll("form[data-wa-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      var texto = mensajeFormulario((d.get("nombre") || "").toString().trim(), (d.get("tipo") || "").toString(),
        (d.get("detalle") || "").toString().trim());
      window.open(waLink(texto), "_blank", "noopener");
    });
  });

  /* ---------- Menú móvil ---------- */

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

  /* ---------- Cookies: el mapa de Google solo se carga si la persona lo acepta ---------- */

  var KEY = "rq-cookies";
  var VERSION = 1;

  function leer() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY));
      return v && v.version === VERSION ? v : null;
    } catch (err) {
      return null;
    }
  }

  function guardar(terceros) {
    var v = { version: VERSION, terceros: terceros, fecha: new Date().toISOString() };
    try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (err) { /* modo privado: solo esta visita */ }
    aplicar(v);
    return v;
  }

  function cargarMapas() {
    document.querySelectorAll("[data-map]").forEach(function (box) {
      if (box.querySelector("iframe")) return;
      var f = document.createElement("iframe");
      f.title = box.getAttribute("data-title") || "Mapa";
      f.loading = "lazy";
      f.referrerPolicy = "no-referrer-when-downgrade";
      f.src = box.getAttribute("data-map");
      box.innerHTML = "";
      box.appendChild(f);
    });
  }

  function aplicar(v) {
    if (v && v.terceros) cargarMapas();
  }

  var banner = document.getElementById("cookies");
  function mostrarBanner(show) {
    if (banner) banner.hidden = !show;
  }

  var actual = leer();
  aplicar(actual);
  mostrarBanner(!actual);

  document.querySelectorAll("[data-cookies]").forEach(function (b) {
    b.addEventListener("click", function () {
      var accion = b.getAttribute("data-cookies");
      if (accion === "configurar") {
        mostrarBanner(true);
        return;
      }
      guardar(accion === "aceptar");
      mostrarBanner(false);
      if (accion === "rechazar") {
        // Si antes había aceptado, se quita el mapa ya cargado.
        if (document.querySelector("[data-map] iframe")) location.reload();
      }
    });
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
