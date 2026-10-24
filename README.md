# Centro de Conciliación Requejo Justicia & Paz

Web del Centro de Conciliación Extrajudicial **Requejo Justicia & Paz** (Chota, Cajamarca, Perú), dirigido por **Yovana Requejo Rojas**.

Cada botón y formulario de la página abre WhatsApp (**+51 923 151 781**) con un mensaje que ya indica el servicio que eligió el cliente.

## Contenido

- Inicio con formulario rápido («Cuéntenos su caso») que envía el caso por WhatsApp
- Garantías: autorización del MINJUSDH, acta con valor legal, rapidez y confidencialidad
- Servicios por categoría: Familia, Deudas y cobros, Alquileres y desalojo, Bienes y herencias, Contratos y negocios, Vecinos y comunidad, Laboral, Consumo y servicios
- Servicios complementarios y materias no conciliables
- Cómo funciona (4 pasos), requisitos, nosotros, preguntas frecuentes, contacto con mapa
- Botón flotante de WhatsApp, menú para celular y datos estructurados para Google (SEO)

## Estructura

```
index.html              Página principal
privacidad.html         Política de privacidad y seguridad (Ley N.° 29733)
cookies.html            Política de cookies
assets/css/styles.css   Estilos (paleta azul marino, dorado y marfil del logo, en :root)
assets/js/config.js     Número de WhatsApp y nombre del centro: editar aquí
assets/js/main.js       Mensajes de WhatsApp, formulario, menú móvil y aviso de cookies
assets/img/             Emblema, logo completo, foto de la directora, íconos e imagen para redes
vercel.json             Cabeceras de seguridad (HTTPS, CSP, anti-iframe) en Vercel
```

El mapa de Google solo se carga si la persona acepta las cookies de terceros.

## Datos pendientes

- N.° de registro de la conciliadora y N.° de resolución de autorización del MINJUSDH.
- Tarifas por materia.

## Publicar

Es un sitio estático, sin instalaciones ni compilación. Se publica con GitHub Pages (Settings → Pages → rama `main`, carpeta `/`), Vercel o cualquier hosting. Para verlo en local, abra `index.html` en el navegador.
