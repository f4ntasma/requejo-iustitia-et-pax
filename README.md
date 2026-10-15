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
index.html              Página única
assets/css/styles.css   Estilos (paleta blanco, negro y dorado en :root)
assets/js/config.js     Número de WhatsApp y saludo: editar aquí
assets/js/main.js       Enlaces a WhatsApp, formulario y menú móvil
assets/img/logo.svg     Logo / favicon
```

## Datos pendientes de completar

Busque `[` en `index.html` para encontrar:

- `[N.° DE REGISTRO]` de la conciliadora
- `[TARIFAS]`
- `[FOTO DE LA CONCILIADORA O DEL LOCAL]`: reemplazar por `<img src="assets/img/foto.jpg" alt="Yovana Requejo Rojas">`

## Publicar

Es un sitio estático, sin instalaciones ni compilación. Se publica con GitHub Pages (Settings → Pages → rama `main`, carpeta `/`), Vercel o cualquier hosting. Para verlo en local, abra `index.html` en el navegador.
